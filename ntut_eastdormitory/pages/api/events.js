import { connectToDatabase } from '../../lib/mongodb';
import formidable from 'formidable';
import fs from 'fs';
import path from 'path';
import { verifyToken } from '../../lib/auth';

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(req, res) {
  const { db } = await connectToDatabase();

  if (req.method === 'GET') {
    try {
      const events = await db
        .collection('events')
        .find({})
        .sort({ startDate: 1 })
        .toArray();
      res.status(200).json(events);
    } catch (error) {
      res.status(500).json({ message: '獲取活動失敗' });
    }
  } else if (req.method === 'POST') {
    try {
      const token = req.headers.authorization?.split(' ')[1];
      if (!token) {
        return res.status(401).json({ message: '未授權' });
      }

      const decoded = verifyToken(token);
      if (!decoded) {
        return res.status(401).json({ message: '無效的令牌' });
      }

      const form = new formidable.IncomingForm();
      form.uploadDir = path.join(process.cwd(), 'public', 'uploads');
      form.keepExtensions = true;

      form.parse(req, async (err, fields, files) => {
        if (err) {
          return res.status(500).json({ message: '解析表單失敗' });
        }

        const { title, description, startDate, endDate, location, maxParticipants } = fields;
        let imageUrl = null;

        if (files.image) {
          const file = files.image;
          const fileName = `${Date.now()}-${file.originalFilename}`;
          const newPath = path.join(form.uploadDir, fileName);
          
          fs.renameSync(file.filepath, newPath);
          imageUrl = `/uploads/${fileName}`;
        }

        const event = {
          title,
          description,
          startDate: new Date(startDate),
          endDate: new Date(endDate),
          location,
          maxParticipants: parseInt(maxParticipants),
          currentParticipants: 0,
          imageUrl,
          status: 'upcoming',
          createdBy: decoded.username,
          createdAt: new Date(),
          participants: [],
        };

        await db.collection('events').insertOne(event);
        res.status(201).json(event);
      });
    } catch (error) {
      res.status(500).json({ message: '創建活動失敗' });
    }
  } else if (req.method === 'PUT') {
    try {
      const token = req.headers.authorization?.split(' ')[1];
      if (!token) {
        return res.status(401).json({ message: '未授權' });
      }

      const decoded = verifyToken(token);
      if (!decoded) {
        return res.status(401).json({ message: '無效的令牌' });
      }

      const { eventId, studentId, name, roomNumber } = req.body;
      
      const event = await db.collection('events').findOne({ _id: new ObjectId(eventId) });
      if (!event) {
        return res.status(404).json({ message: '活動不存在' });
      }

      if (event.currentParticipants >= event.maxParticipants) {
        return res.status(400).json({ message: '報名人數已滿' });
      }

      const isAlreadyRegistered = event.participants.some(
        p => p.studentId === studentId
      );
      if (isAlreadyRegistered) {
        return res.status(400).json({ message: '已經報名過此活動' });
      }

      await db.collection('events').updateOne(
        { _id: new ObjectId(eventId) },
        {
          $push: {
            participants: {
              studentId,
              name,
              roomNumber,
              signupDate: new Date(),
            },
          },
          $inc: { currentParticipants: 1 },
        }
      );

      res.status(200).json({ message: '報名成功' });
    } catch (error) {
      res.status(500).json({ message: '報名失敗' });
    }
  } else {
    res.setHeader('Allow', ['GET', 'POST', 'PUT']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
} 