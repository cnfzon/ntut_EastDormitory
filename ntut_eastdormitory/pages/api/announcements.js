import { MongoClient } from 'mongodb';

// 處理公告 API 請求
export default async function handler(req, res) {
  // 獲取 MongoDB 連線字串
  const uri = process.env.MONGODB_URI;
  if (!uri) {
    return res.status(500).json({ message: '未設置 MongoDB 連線字串' });
  }

  let client;
  try {
    // 建立 MongoDB 連線
    client = new MongoClient(uri);
    await client.connect();
    
    // 選擇資料庫和集合
    const database = client.db('ntut_eastdormitory');
    const collection = database.collection('announcements');
    
    // 根據請求方法處理不同操作
    if (req.method === 'GET') {
      // 從集合中獲取所有公告，按創建時間降序排序
      const announcements = await collection
        .find({})
        .sort({ createdAt: -1 })
        .toArray();
      
      // 確保回傳陣列格式
      return res.status(200).json(Array.isArray(announcements) ? announcements : []);
    } else if (req.method === 'POST') {
      // 驗證請求資料
      const { title, content, author = '宿舍管理員' } = req.body;
      
      if (!title || !content) {
        return res.status(400).json({ message: '標題和內容為必填欄位' });
      }
      
      // 創建新公告
      const newAnnouncement = {
        title,
        content,
        author,
        createdAt: new Date(),
        date: new Date(), // 兼容舊程式碼
        imageUrl: null // 圖片功能暫不支援
      };
      
      // 儲存到資料庫
      const result = await collection.insertOne(newAnnouncement);
      
      return res.status(201).json({
        message: '公告發布成功',
        announcementId: result.insertedId,
        announcement: newAnnouncement
      });
    } else {
      // 不支援的方法
      return res.status(405).json({ message: `不支援的請求方法: ${req.method}` });
    }
  } catch (error) {
    console.error('處理公告請求時發生錯誤:', error);
    return res.status(500).json({ 
      message: '處理公告請求失敗', 
      error: error.message 
    });
  } finally {
    // 確保無論成功或失敗都關閉連線
    if (client) {
      await client.close();
    }
  }
} 