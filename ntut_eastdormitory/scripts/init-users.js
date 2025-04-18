const { MongoClient } = require('mongodb');
const path = require('path');
require('dotenv').config({ path: path.resolve(process.cwd(), '.env.local') });

const uri = process.env.MONGODB_URI;

if (!uri) {
  console.error('請在 .env.local 文件中設置 MONGODB_URI');
  process.exit(1);
}

// 初始化用戶數據
async function initUsers() {
  let client;

  try {
    console.log('正在連接到 MongoDB...');
    client = new MongoClient(uri);
    await client.connect();
    console.log('已連接到 MongoDB');

    const db = client.db('ntut_eastdormitory');
    const usersCollection = db.collection('users');

    // 檢查用戶集合是否已存在
    const userCount = await usersCollection.countDocuments();
    console.log(`當前用戶數量: ${userCount}`);

    // 如果沒有用戶，添加測試帳號
    if (userCount === 0) {
      console.log('未發現用戶，準備創建測試帳號...');
      
      // 測試帳號數據
      const testUsers = [
        {
          username: "superadmint8gmkkc8",
          password: "12345678",
          name: "超級管理員",
          role: "admin",
          createdAt: new Date()
        },
        {
          username: "test",
          password: "test123",
          name: "測試用戶",
          role: "user",
          createdAt: new Date()
        }
      ];

      // 插入測試帳號
      const result = await usersCollection.insertMany(testUsers);
      console.log(`成功創建 ${result.insertedCount} 個測試帳號`);

      // 打印測試帳號信息
      console.log('\n測試帳號信息:');
      console.log('---------------------------');
      
      testUsers.forEach(user => {
        console.log(`用戶名: ${user.username}`);
        console.log(`密碼: ${user.password}`);
        console.log(`角色: ${user.role}`);
        console.log('---------------------------');
      });
    } else {
      console.log('用戶集合已存在，跳過初始化');
    }

    console.log('初始化完成');
  } catch (error) {
    console.error('初始化用戶失敗:', error);
  } finally {
    if (client) {
      await client.close();
      console.log('MongoDB 連接已關閉');
    }
  }
}

// 執行初始化
initUsers(); 