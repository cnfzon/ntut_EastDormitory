import mongoose from 'mongoose';
import Admin from '../models/Admin';
import dotenv from 'dotenv';

dotenv.config();

const MONGODB_URI = process.env.MONGODB_URI;

async function initAdmin() {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log('已連接到數據庫');

    // 檢查是否已存在管理員
    const existingAdmin = await Admin.findOne({ username: 'admin' });
    if (existingAdmin) {
      console.log('管理員帳戶已存在');
      process.exit(0);
    }

    // 創建初始管理員
    const admin = new Admin({
      username: 'admin',
      password: 'admin123', // 初始密碼，建議登入後立即修改
      role: 'admin'
    });

    await admin.save();
    console.log('已創建初始管理員帳戶');
    console.log('用戶名: admin');
    console.log('密碼: admin123');
    console.log('請登入後立即修改密碼！');

    process.exit(0);
  } catch (error) {
    console.error('初始化失敗:', error);
    process.exit(1);
  }
}

initAdmin(); 