import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import clientPromise from '../../../lib/mongodb';

export default async function handler(req, res) {
  // 只允許 POST 請求
  if (req.method !== 'POST') {
    return res.status(405).json({ message: '方法不允許' });
  }

  try {
    // 連接到 MongoDB
    console.log('嘗試連接到 MongoDB...');
    const client = await clientPromise;
    const db = client.db('ntut_eastdormitory');
    const usersCollection = db.collection('users');
    console.log('MongoDB 連接成功');

    const { username, password } = req.body;
    console.log(`正在嘗試登入: ${username}`);

    // 檢查是否提供了用戶名和密碼
    if (!username || !password) {
      console.error('登入失敗: 缺少用戶名或密碼');
      return res.status(400).json({ message: '請提供用戶名和密碼' });
    }

    // 查找用戶
    const user = await usersCollection.findOne({ username });

    // 如果用戶不存在
    if (!user) {
      console.error(`登入失敗: 用戶 ${username} 不存在`);
      return res.status(401).json({ message: '用戶名或密碼錯誤' });
    }

    // 檢查密碼 - 簡單比較密碼文字
    if (user.password !== password) {
      console.error(`登入失敗: 用戶 ${username} 密碼錯誤`);
      return res.status(401).json({ message: '用戶名或密碼錯誤' });
    }

    // 更新最後登錄時間
    await usersCollection.updateOne(
      { _id: user._id },
      { $set: { lastLogin: new Date() } }
    );
    console.log(`用戶 ${username} 登入成功`);

    // 創建並簽署 JWT
    const token = jwt.sign(
      { 
        id: user._id,
        username: user.username,
        role: user.role || 'user',
        name: user.name || user.username
      },
      process.env.JWT_SECRET || 'ntut_eastdormitory_secret_key',
      { expiresIn: '1d' }
    );

    // 返回成功響應和 token
    return res.status(200).json({
      message: '登錄成功',
      token,
      user: {
        id: user._id,
        username: user.username,
        role: user.role || 'user',
        name: user.name || user.username
      }
    });
  } catch (error) {
    console.error('登錄過程中發生錯誤:', error);
    return res.status(500).json({ message: '服務器錯誤，請稍後再試' });
  }
} 