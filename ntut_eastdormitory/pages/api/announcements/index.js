import dbConnect from '../../../lib/db';
import Announcement from '../../../models/Announcement';
import { isAdmin } from '../../../lib/auth';

export default async function handler(req, res) {
  await dbConnect();

  if (req.method === 'GET') {
    try {
      const announcements = await Announcement.find().sort({ date: -1 });
      res.status(200).json(announcements);
    } catch (error) {
      res.status(500).json({ message: '獲取公告失敗' });
    }
  } else if (req.method === 'POST') {
    if (!isAdmin(req)) {
      return res.status(403).json({ message: '無權限' });
    }

    try {
      const announcement = new Announcement(req.body);
      await announcement.save();
      res.status(201).json(announcement);
    } catch (error) {
      res.status(500).json({ message: '創建公告失敗' });
    }
  } else {
    res.status(405).json({ message: '方法不允許' });
  }
} 