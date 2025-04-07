const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const path = require('path');
const crypto = require('crypto');
require('dotenv').config({ path: path.resolve(process.cwd(), '.env.local') });

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/ntut_eastdormitory';

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

// 生成隨機密碼
function generateRandomPassword(length = 16) {
  const lowerCaseChars = 'abcdefghijklmnopqrstuvwxyz';
  const upperCaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const numberChars = '0123456789';
  const specialChars = '!@#$%^&*()-_=+[]{}|;:,.<>?';
  
  const allChars = lowerCaseChars + upperCaseChars + numberChars + specialChars;
  
  // 確保密碼包含至少一個小寫字母、一個大寫字母、一個數字和一個特殊字符
  let password = '';
  password += lowerCaseChars.charAt(Math.floor(crypto.randomBytes(1)[0] % lowerCaseChars.length));
  password += upperCaseChars.charAt(Math.floor(crypto.randomBytes(1)[0] % upperCaseChars.length));
  password += numberChars.charAt(Math.floor(crypto.randomBytes(1)[0] % numberChars.length));
  password += specialChars.charAt(Math.floor(crypto.randomBytes(1)[0] % specialChars.length));
  
  // 生成剩餘的字符
  for (let i = 4; i < length; i++) {
    const randomBytes = crypto.randomBytes(1);
    const randomIndex = randomBytes[0] % allChars.length;
    password += allChars[randomIndex];
  }
  
  // 使用密碼學安全的隨機洗牌算法
  const passwordArray = password.split('');
  for (let i = passwordArray.length - 1; i > 0; i--) {
    const j = Math.floor(crypto.randomBytes(1)[0] % (i + 1));
    [passwordArray[i], passwordArray[j]] = [passwordArray[j], passwordArray[i]];
  }
  
  return passwordArray.join('');
}

// 生成隨機用戶名
function generateRandomUsername(prefix, length = 8) {
  const charset = 'abcdefghijklmnopqrstuvwxyz0123456789';
  let username = prefix;
  
  const randomBytes = crypto.randomBytes(length);
  for (let i = 0; i < length; i++) {
    const randomIndex = randomBytes[i] % charset.length;
    username += charset[randomIndex];
  }
  
  return username;
}

const adminRoles = [
  {
    role: 'superadmin',
    name: '系統管理員'
  },
  {
    role: 'admin',
    name: '宿舍管理員'
  },
  {
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

    // 創建新的管理員帳號與隨機密碼
    const adminAccounts = [];
    
    for (const user of adminRoles) {
      const password = generateRandomPassword();
      const username = generateRandomUsername(user.role);
      const admin = new Admin({
        username,
        password,
        name: user.name,
        role: user.role
      });
      
      await admin.save();
      adminAccounts.push({
        username,
        password: password,
        role: user.role,
        name: user.name
      });
      
      console.log(`已創建管理員帳號: ${username}`);
    }

    console.log('\n管理員帳號初始化完成，請保存以下信息：');
    console.log('===========================================');
    
    adminAccounts.forEach(account => {
      console.log(`用戶名: ${account.username}`);
      console.log(`密碼: ${account.password}`);
      console.log(`角色: ${account.role}`);
      console.log(`名稱: ${account.name}`);
      console.log('-------------------------------------------');
    });
    
    console.log('請妥善保存以上信息，並在首次登錄後修改密碼！');
    console.log('===========================================');

    await mongoose.disconnect();
    process.exit(0);
  } catch (error) {
    console.error('初始化管理員帳號失敗:', error);
    process.exit(1);
  }
}

initAdmins(); 