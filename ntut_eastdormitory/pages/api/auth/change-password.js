import dbConnect from '../../../lib/db';
import Admin from '../../../models/Admin';
import { isAdmin } from '../../../lib/auth';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: '方法不允許' });
  }

  if (!isAdmin(req)) {
    return res.status(403).json({ message: '無權限' });
  }

  try {
    await dbConnect();
    const { currentPassword, newPassword } = req.body;
    const token = req.headers.authorization.split(' ')[1];
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const admin = await Admin.findById(decoded.id);
    if (!admin) {
      return res.status(404).json({ message: '用戶不存在' });
    }

    const isMatch = await admin.comparePassword(currentPassword);
    if (!isMatch) {
      return res.status(401).json({ message: '當前密碼錯誤' });
    }

    admin.password = newPassword;
    await admin.save();

    res.status(200).json({ message: '密碼修改成功' });
  } catch (error) {
    res.status(500).json({ message: '修改密碼失敗' });
  }
} 