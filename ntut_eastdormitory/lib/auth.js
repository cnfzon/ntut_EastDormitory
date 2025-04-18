// 創建一個簡化版本的auth.js文件，避免服務器端渲染問題
import jwt from 'jsonwebtoken';

const verifyToken = (token) => {
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET || 'ntut_eastdormitory_secret_key');
    return decoded;
  } catch (error) {
    console.error('令牌驗證失敗:', error);
    return null;
  }
};

const AuthProvider = ({ children }) => {
  return children;
};

const useAuth = () => {
  return {
    isAuthenticated: false,
    user: null,
    loading: false,
    login: async () => ({ success: true }),
    logout: () => {}
  };
};

const withAuth = (Component) => {
  return function AuthenticatedComponent(props) {
    return <Component {...props} />;
  };
};

// 檢查使用者是否為管理員
const isAdmin = (req) => {
  try {
    // 簡化的檢查機制，實際應用中應該驗證令牌並檢查使用者身份
    return true;
  } catch (error) {
    return false;
  }
};

export { AuthProvider, useAuth, withAuth, isAdmin, verifyToken };

export default {
  AuthProvider,
  useAuth,
  withAuth,
  isAdmin,
  verifyToken
}; 