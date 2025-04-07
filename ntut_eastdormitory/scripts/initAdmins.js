const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const path = require('path');
require('dotenv').config({ path: path.resolve(process.cwd(), '.env.local') });

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  console.error('請在 .env.local 文件中設置 MONGODB_URI');
  process.exit(1);
}

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

// 密碼加密中間件
adminSchema.pre('save', async function(next) {
  if (!this.isModified('password')) return next();
  try {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
  } catch (error) {
    next(error);
  }
});

const Admin = mongoose.models.Admin || mongoose.model('Admin', adminSchema);

const adminAccounts = [
  {
    username: 'superadmin',
    password: 'Ntut@2024#Super',
    role: 'superadmin',
    name: '系統管理員'
  },
  {
    username: 'dormadmin',
    password: 'EastDorm@2024#Admin',
    role: 'admin',
    name: '宿舍管理員'
  },
  {
    username: 'eventadmin',
    password: 'Events@2024#Manager',
    role: 'admin',
    name: '活動管理員'
  }
];

async function initAdmins() {
  try {
    console.log('正在連接到 MongoDB...');
    await mongoose.connect(MONGODB_URI);
    console.log('已連接到 MongoDB');

    // 清除所有現有管理員帳號
    await Admin.deleteMany({});
    console.log('已清除現有管理員帳號');

    // 創建新的管理員帳號
    for (const account of adminAccounts) {
      const admin = new Admin(account);
      await admin.save();
      console.log(`已創建管理員帳號: ${account.username}`);
    }

    console.log('管理員帳號初始化完成');
    await mongoose.disconnect();
    process.exit(0);
  } catch (error) {
    console.error('初始化管理員帳號失敗:', error);
    process.exit(1);
  }
}

initAdmins(); 