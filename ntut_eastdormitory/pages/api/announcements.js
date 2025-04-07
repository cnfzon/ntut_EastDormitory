import { connectToDatabase } from '../../lib/mongodb';
import formidable from 'formidable';
import fs from 'fs';
import path from 'path';

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(req, res) {
  const { db } = await connectToDatabase();

  if (req.method === 'GET') {
    try {
      const announcements = await db
        .collection('announcements')
        .find({})
        .sort({ date: -1 })
        .toArray();
      res.status(200).json(announcements);
    } catch (error) {
      res.status(500).json({ message: '獲取公告失敗' });
    }
  } else if (req.method === 'POST') {
    try {
      const form = new formidable.IncomingForm();
      form.uploadDir = path.join(process.cwd(), 'public', 'uploads');
      form.keepExtensions = true;

      form.parse(req, async (err, fields, files) => {
        if (err) {
          return res.status(500).json({ message: '解析表單失敗' });
        }

        const { title, content, author } = fields;
        let imageUrl = null;

        if (files.image) {
          const file = files.image;
          const fileName = `${Date.now()}-${file.originalFilename}`;
          const newPath = path.join(form.uploadDir, fileName);
          
          fs.renameSync(file.filepath, newPath);
          imageUrl = `/uploads/${fileName}`;
        }

        const announcement = {
          title,
          content,
          author,
          imageUrl,
          date: new Date(),
        };

        await db.collection('announcements').insertOne(announcement);
        res.status(201).json(announcement);
      });
    } catch (error) {
      res.status(500).json({ message: '發布公告失敗' });
    }
  } else {
    res.setHeader('Allow', ['GET', 'POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
} 