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
  const [isScrolled, setIsScrolled] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem('token');
    setIsLoggedIn(!!token);

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsLoggedIn(false);
    router.push('/');
  };

  return (
    <nav className={`fixed w-full transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-8">
            <Link href="/" className="text-xl font-bold text-blue-600">
              東宿舍
            </Link>
            <div className="hidden md:flex space-x-6">
              {navItems.map((item, idx) => (
                <Link
                  key={idx}
                  href={item.href}
                  className={`text-sm font-medium transition-colors duration-300 ${
                    isScrolled ? 'text-gray-700 hover:text-blue-600' : 'text-white hover:text-blue-200'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
          <div className="flex items-center space-x-4">
            {isLoggedIn ? (
              <>
                <Link
                  href="/admin/change-password"
                  className={`text-sm font-medium transition-colors duration-300 ${
                    isScrolled ? 'text-gray-700 hover:text-blue-600' : 'text-white hover:text-blue-200'
                  }`}
                >
                  修改密碼
                </Link>
                <button
                  onClick={handleLogout}
                  className={`text-sm font-medium transition-colors duration-300 ${
                    isScrolled ? 'text-gray-700 hover:text-blue-600' : 'text-white hover:text-blue-200'
                  }`}
                >
                  登出
                </button>
              </>
            ) : (
              <Link
                href="/admin/login"
                className={`text-sm font-medium transition-colors duration-300 ${
                  isScrolled ? 'text-gray-700 hover:text-blue-600' : 'text-white hover:text-blue-200'
                }`}
              >
                管理員登入
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
