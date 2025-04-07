require('dotenv').config({ path: '.env.local' });
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  console.error('請在 .env.local 文件中設置 MONGODB_URI');
  process.exit(1);
}

const defaultAdmins = [
  {
    username: 'superadmin',
    password: 'Ntut@2024#Super',
    name: '系統管理員',
    role: 'superadmin',
  },
  {
    username: 'dormadmin',
    password: 'EastDorm@2024#Admin',
    name: '宿舍管理員',
    role: 'admin',
  },
  {
    username: 'eventadmin',
    password: 'Events@2024#Manager',
    name: '活動管理員',
    role: 'admin',
  },
];

async function initAdmins() {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log('已連接到 MongoDB');

    // 檢查是否已經有管理員帳號
    const Admin = mongoose.model('Admin', new mongoose.Schema({
      username: String,
      password: String,
      name: String,
      role: String,
      lastLogin: Date,
      createdAt: { type: Date, default: Date.now },
    }));

    const existingAdmins = await Admin.find({});
    if (existingAdmins.length > 0) {
      console.log('管理員帳號已存在，跳過初始化');
      process.exit(0);
    }

    // 創建管理員帳號
    for (const admin of defaultAdmins) {
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(admin.password, salt);
      
      const newAdmin = new Admin({
        ...admin,
        password: hashedPassword,
      });
      
      await newAdmin.save();
      console.log(`已創建管理員帳號: ${admin.username}`);
    }

    console.log('管理員帳號初始化完成');
    process.exit(0);
  } catch (error) {
    console.error('初始化管理員帳號失敗:', error);
    process.exit(1);
  }
}

initAdmins(); 