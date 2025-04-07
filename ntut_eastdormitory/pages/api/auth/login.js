import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { connectToDatabase } from '../../../lib/mongodb';

// 定義 Admin Schema
const adminSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ['superadmin', 'admin'],
    default: 'admin',
  },
  lastLogin: {
    type: Date,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// 使用已存在的 Admin 模型或創建新的
const Admin = mongoose.models.Admin || mongoose.model('Admin', adminSchema);

export default async function handler(req, res) {
  // 只允許 POST 請求
  if (req.method !== 'POST') {
    return res.status(405).json({ message: '方法不允許' });
  }

  try {
    // 連接到數據庫
    await connectToDatabase();

    const { username, password } = req.body;

    // 檢查是否提供了用戶名和密碼
    if (!username || !password) {
      return res.status(400).json({ message: '請提供用戶名和密碼' });
    }

    // 查找用戶
    const admin = await Admin.findOne({ username });

    // 如果用戶不存在
    if (!admin) {
      return res.status(401).json({ message: '用戶名或密碼錯誤' });
    }

    // 檢查密碼
    const isMatch = await bcrypt.compare(password, admin.password);

    if (!isMatch) {
      return res.status(401).json({ message: '用戶名或密碼錯誤' });
    }

    // 更新最後登錄時間
    admin.lastLogin = new Date();
    await admin.save();

    // 創建並簽署 JWT
    const token = jwt.sign(
      { 
        id: admin._id,
        username: admin.username,
        role: admin.role,
        name: admin.name
      },
      process.env.JWT_SECRET || 'ntut_eastdormitory_secret_key',
      { expiresIn: '1d' }
    );

    // 返回成功響應和 token
    return res.status(200).json({
      message: '登錄成功',
      token,
      user: {
        id: admin._id,
        username: admin.username,
        role: admin.role,
        name: admin.name
      }
    });
  } catch (error) {
    console.error('登錄錯誤:', error);
    return res.status(500).json({ message: '服務器錯誤，請稍後再試' });
  }
} 