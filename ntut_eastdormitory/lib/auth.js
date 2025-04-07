import { useState, useEffect, createContext, useContext } from 'react';
import { useRouter } from 'next/router';
import Cookies from 'js-cookie';

// 創建身份驗證上下文
const AuthContext = createContext();

// 身份驗證提供者組件
export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    // 在客戶端檢查令牌
    async function loadUserFromToken() {
      const token = Cookies.get('token') || localStorage.getItem('token');
      
      if (token) {
        try {
          // 這裡可以添加令牌驗證邏輯
          // 例如向API發送請求來驗證令牌
          setUser({ isLoggedIn: true });
        } catch (error) {
          console.error('身份驗證錯誤:', error);
          Cookies.remove('token');
          localStorage.removeItem('token');
          setUser(null);
        }
      } else {
        setUser(null);
      }
      
      setLoading(false);
    }

    loadUserFromToken();
  }, []);

  // 登入功能
  const login = async (credentials) => {
    try {
      // 模擬API請求
      // 實際應用中，這裡應該發送請求到後端API
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(credentials),
      });

      if (!response.ok) {
        throw new Error('登入失敗');
      }

      const data = await response.json();
      
      // 儲存令牌
      Cookies.set('token', data.token);
      localStorage.setItem('token', data.token);
      
      setUser({ isLoggedIn: true });
      return { success: true };
    } catch (error) {
      console.error('登入錯誤:', error);
      return { success: false, error: error.message };
    }
  };

  // 登出功能
  const logout = () => {
    Cookies.remove('token');
    localStorage.removeItem('token');
    setUser(null);
    router.push('/');
  };

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated: !!user,
        user,
        loading,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

// 使用身份驗證的自定義Hook
export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth必須在AuthProvider內使用');
  }
  return context;
}

// 檢查用戶是否已驗證的HOC
export function withAuth(Component) {
  return function AuthenticatedComponent(props) {
    const { isAuthenticated, loading } = useAuth();
    const router = useRouter();

    useEffect(() => {
      if (!loading && !isAuthenticated) {
        router.replace('/admin/login');
      }
    }, [loading, isAuthenticated, router]);

    if (loading) {
      return <div>載入中...</div>;
    }

    return isAuthenticated ? <Component {...props} /> : null;
  };
}

export default {
  AuthProvider,
  useAuth,
  withAuth,
}; 