import Link from "next/link";
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

const navItems = [
  { href: "/", label: "🏠 首頁" },
  { href: "/about", label: "👥 幹部介紹" },
  { href: "/report", label: "📮 回報問題" },
];

export default function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem('token');
    setIsLoggedIn(!!token);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsLoggedIn(false);
    router.push('/');
  };

  return (
    <nav className="bg-blue-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex space-x-4">
          {navItems.map((item, idx) => (
            <Link key={idx} href={item.href} className="hover:text-blue-200">
              {item.label}
            </Link>
          ))}
        </div>
        <div className="flex space-x-4">
          {isLoggedIn ? (
            <>
              <Link href="/admin/change-password" className="hover:text-blue-200">
                修改密碼
              </Link>
              <button onClick={handleLogout} className="hover:text-blue-200">
                登出
              </button>
            </>
          ) : (
            <Link href="/admin/login" className="hover:text-blue-200">
              管理員登入
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}
