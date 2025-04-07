import dbConnect from '../../../lib/db';
import Announcement from '../../../models/Announcement';

export default async function handler(req, res) {
  await dbConnect();

  // 處理GET請求：獲取所有公告作為活動
  if (req.method === 'GET') {
    try {
      // 獲取所有公告，按日期降序排序
      const announcements = await Announcement.find({})
        .sort({ date: -1 })
        .limit(100);
      
      // 將公告轉換為活動格式
      const events = announcements.map(announcement => ({
        id: announcement._id,
        title: announcement.title,
        description: announcement.content,
        date: announcement.date,
        author: announcement.author,
        imageUrl: announcement.imageUrl || null
      }));
      
      res.status(200).json(events);
    } catch (error) {
      console.error('獲取活動失敗:', error);
      res.status(500).json({ message: '獲取活動失敗' });
    }
  } else {
    // 處理不支持的請求方法
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
} 