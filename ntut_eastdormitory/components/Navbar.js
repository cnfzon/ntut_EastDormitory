import Link from "next/link";
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

const navItems = [
  { name: "首頁", path: "/" },
  { name: "關於我們", path: "/about" },
  { name: "報修系統", path: "/repair" },
  { name: "幹部介紹", path: "/committee" },
  { name: "行事曆", path: "/calendar" },
  { name: "欸等等要吃什麼", path: "/food-finder" },
  { name: "網站問題回報", path: "/feedback" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    // 初始檢查
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 當選單開啟時，防止頁面滾動
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMenuOpen]);

  const isLoggedIn = typeof window !== "undefined" && localStorage.getItem("token");

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white shadow-md"
          : "bg-gray-900 bg-opacity-30 backdrop-blur-sm"
      }`}
    >
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            {/* 漢堡選單按鈕 */}
            <button
              className={`flex flex-col justify-center items-center w-12 h-12 rounded-lg mr-3 transition-all duration-300 ${
                isScrolled 
                  ? isMenuOpen 
                    ? 'bg-blue-100 text-blue-700' 
                    : 'hover:bg-gray-100 text-gray-800' 
                  : isMenuOpen 
                    ? 'bg-white bg-opacity-20 text-white' 
                    : 'hover:bg-white hover:bg-opacity-10 text-white'
              }`}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="選單"
            >
              <div className="w-6 h-5 relative flex flex-col justify-between">
                <span className={`block w-full h-0.5 rounded-full transition-all duration-300 ${isScrolled ? 'bg-current' : 'bg-white'} ${isMenuOpen ? 'transform rotate-45 translate-y-2' : ''}`}></span>
                <span className={`block w-full h-0.5 rounded-full transition-all duration-300 ${isScrolled ? 'bg-current' : 'bg-white'} ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                <span className={`block w-full h-0.5 rounded-full transition-all duration-300 ${isScrolled ? 'bg-current' : 'bg-white'} ${isMenuOpen ? 'transform -rotate-45 -translate-y-2' : ''}`}></span>
              </div>
            </button>
            
            <Link href="/" className={`text-xl font-bold ${isScrolled ? 'text-blue-600' : 'text-white'} hover:opacity-80 transition-opacity`}>
              東宿舍
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-3">
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 hover:scale-105 ${
                  router.pathname === item.path
                    ? isScrolled 
                      ? "bg-blue-100 text-blue-700 shadow-sm" 
                      : "bg-white bg-opacity-20 text-white shadow-sm"
                    : isScrolled
                      ? "text-gray-600 hover:bg-blue-50"
                      : "text-white hover:bg-white hover:bg-opacity-10"
                }`}
              >
                {item.name}
              </Link>
            ))}
            {isLoggedIn ? (
              <div className="flex items-center ml-6 space-x-3">
                <Link
                  href="/admin/change-password"
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 hover:scale-105 ${
                    isScrolled
                      ? "border border-gray-300 text-gray-700 hover:bg-gray-100"
                      : "border border-white text-white hover:bg-white hover:bg-opacity-10"
                  }`}
                >
                  修改密碼
                </Link>
                <button
                  onClick={() => {
                    localStorage.removeItem("token");
                    router.push("/");
                  }}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 hover:scale-105 ${
                    isScrolled
                      ? "bg-red-50 text-red-600 hover:bg-red-100"
                      : "bg-red-500 bg-opacity-20 text-white hover:bg-red-500 hover:bg-opacity-30"
                  }`}
                >
                  登出
                </button>
              </div>
            ) : (
              <Link
                href="/admin/login"
                className={`ml-6 px-5 py-2 rounded-md text-sm font-medium transition-all duration-200 hover:scale-105 ${
                  isScrolled
                    ? "bg-blue-600 text-white hover:bg-blue-700 shadow-sm"
                    : "border-2 border-white text-white hover:bg-white hover:text-blue-600"
                }`}
              >
                管理員登入
              </Link>
            )}
          </div>
        </div>

        {/* Mobile Menu - 改進動畫和設計 */}
        <div
          className={`md:hidden fixed inset-0 z-50 transition-all duration-500 ${
            isMenuOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          }`}
        >
          <div 
            className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm"
            onClick={() => setIsMenuOpen(false)}
          ></div>
          <div 
            className={`w-3/4 max-w-sm h-full bg-white shadow-xl overflow-y-auto transition-transform duration-500 transform ${
              isMenuOpen ? "translate-x-0" : "-translate-x-full"
            }`}
          >
            <div className="p-6">
              <div className="flex items-center justify-between mb-8">
                <Link 
                  href="/" 
                  className="text-xl font-bold text-blue-600"
                  onClick={() => setIsMenuOpen(false)}
                >
                  東宿舍
                </Link>
                <button
                  className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 text-gray-500 hover:bg-gray-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              
              <div className="space-y-1">
                {navItems.map((item) => (
                  <Link
                    key={item.path}
                    href={item.path}
                    className={`block px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                      router.pathname === item.path
                        ? "bg-blue-100 text-blue-700"
                        : "text-gray-600 hover:bg-gray-50"
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
              
              {isLoggedIn ? (
                <div className="pt-6 border-t border-gray-200 mt-6 space-y-2">
                  <p className="px-4 text-sm text-gray-500 mb-2">管理員功能</p>
                  <Link
                    href="/admin/change-password"
                    className="block px-4 py-3 rounded-lg text-base font-medium text-gray-600 hover:bg-gray-50"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    修改密碼
                  </Link>
                  <button
                    onClick={() => {
                      localStorage.removeItem("token");
                      router.push("/");
                      setIsMenuOpen(false);
                    }}
                    className="w-full px-4 py-3 rounded-lg text-base font-medium bg-red-50 text-red-600 hover:bg-red-100 text-left"
                  >
                    登出
                  </button>
                </div>
              ) : (
                <div className="pt-6 border-t border-gray-200 mt-6">
                  <Link
                    href="/admin/login"
                    className="block w-full px-4 py-3 rounded-lg text-base font-medium bg-blue-600 text-white hover:bg-blue-700 text-center"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    管理員登入
                  </Link>
                </div>
              )}
              
              <div className="pt-6 border-t border-gray-200 mt-6">
                <p className="px-4 text-sm text-gray-500 mb-2">聯絡我們</p>
                <p className="px-4 text-xs text-gray-500">
                  地址：10655臺北市大安區建國南路一段81號<br />
                  電話：02-27411584
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
