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
  try {
    // 連接到數據庫
    const { db } = await connectToDatabase();
    
    // 根據請求方法處理不同操作
    if (req.method === 'GET') {
      // 獲取公告列表
      const announcements = await db
        .collection('announcements')
        .find({})
        .sort({ createdAt: -1 }) // 按創建時間降序排序
        .toArray();
      
      return res.status(200).json(announcements);
    } else if (req.method === 'POST') {
      // 檢查身份驗證
      // 這裡應該有檢查用戶是否已登錄和授權的代碼
      
      const { title, content, tags } = req.body;
      
      // 基本驗證
      if (!title || !content) {
        return res.status(400).json({ message: '標題和內容不能為空' });
      }
      
      // 創建新公告
      const newAnnouncement = {
        title,
        content,
        tags: tags || [],
        createdAt: new Date(),
        updatedAt: new Date()
      };
      
      const result = await db.collection('announcements').insertOne(newAnnouncement);
      
      return res.status(201).json({
        message: '公告創建成功',
        announcementId: result.insertedId
      });
    } else {
      // 不支持的方法
      res.setHeader('Allow', ['GET', 'POST']);
      return res.status(405).json({ message: `Method ${req.method} Not Allowed` });
    }
  } catch (error) {
    console.error('處理公告請求時出錯:', error);
    return res.status(500).json({ message: '服務器錯誤，請稍後再試' });
  }
} 