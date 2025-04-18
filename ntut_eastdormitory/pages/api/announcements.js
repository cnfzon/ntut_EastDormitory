import { MongoClient } from 'mongodb';

export const config = {
  api: {
    bodyParser: false,
  },
};

// 處理公告 API 請求
export default async function handler(req, res) {
  // 只允許 GET 請求獲取公告列表
  if (req.method !== 'GET') {
    return res.status(405).json({ message: `不支援的請求方法: ${req.method}` });
  }

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
    
    // 從集合中獲取所有公告，按創建時間降序排序
    const announcements = await collection
      .find({})
      .sort({ createdAt: -1 })
      .toArray();
    
    // 回傳公告資料
    return res.status(200).json(announcements);
  } catch (error) {
    console.error('獲取公告資料時發生錯誤:', error);
    return res.status(500).json({ 
      message: '獲取公告資料失敗', 
      error: error.message 
    });
  } finally {
    // 確保無論成功或失敗都關閉連線
    if (client) {
      await client.close();
    }
  }
} 