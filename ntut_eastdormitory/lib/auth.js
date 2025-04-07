import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET;

if (!JWT_SECRET) {
  throw new Error('請在 .env.local 文件中定義 JWT_SECRET');
}

export function generateToken(user) {
  return jwt.sign(
    { id: user._id, username: user.username, role: user.role },
    JWT_SECRET,
    { expiresIn: '1d' }
  );
}

export function verifyToken(token) {
  try {
    return jwt.verify(token, JWT_SECRET);
  } catch (error) {
    return null;
  }
}

export function isAdmin(req) {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) return false;
  
  const decoded = verifyToken(token);
  return decoded?.role === 'admin';
} 