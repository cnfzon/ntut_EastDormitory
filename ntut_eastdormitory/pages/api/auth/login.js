import dbConnect from '../../../lib/db';
import Admin from '../../../models/Admin';
import { generateToken } from '../../../lib/auth';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: '方法不允許' });
  }

  try {
    await dbConnect();
    const { username, password } = req.body;

    const admin = await Admin.findOne({ username });
    if (!admin) {
      return res.status(401).json({ message: '用戶名或密碼錯誤' });
    }

    const isMatch = await admin.comparePassword(password);
    if (!isMatch) {
      return res.status(401).json({ message: '用戶名或密碼錯誤' });
    }

    const token = generateToken(admin);
    res.status(200).json({ token });
  } catch (error) {
    res.status(500).json({ message: '服務器錯誤' });
  }
} 