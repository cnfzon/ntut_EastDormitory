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
            <button
              className={`flex justify-center items-center min-w-[40px] h-[40px] border rounded-md ${
                isScrolled ? 'border-gray-300 text-gray-600' : 'border-white text-white'
              }`}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
            <Link href="/" className={`ml-3 text-xl font-bold ${isScrolled ? 'text-blue-600' : 'text-white'} hover:opacity-80 transition-opacity`}>
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

          {/* Mobile Menu Button - 只在移動端顯示 */}
          <button
            className={`md:hidden ${isScrolled ? 'text-gray-600' : 'text-white'}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden fixed w-full left-0 transition-all duration-300 ${
            isMenuOpen
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-full pointer-events-none"
          }`}
        >
          <div className="bg-white shadow-lg rounded-lg p-4 mt-2 mx-4">
            <div className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  href={item.path}
                  className={`px-4 py-3 rounded-md text-sm font-medium ${
                    router.pathname === item.path
                      ? "bg-blue-100 text-blue-700"
                      : "text-gray-600 hover:bg-blue-50"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              {isLoggedIn ? (
                <div className="pt-2 border-t border-gray-200 mt-2">
                  <Link
                    href="/admin/change-password"
                    className="px-4 py-3 rounded-md text-sm font-medium text-gray-600 hover:bg-gray-100 block"
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
                    className="mt-2 px-4 py-3 w-full rounded-md text-sm font-medium bg-red-50 text-red-600 hover:bg-red-100 text-left"
                  >
                    登出
                  </button>
                </div>
              ) : (
                <Link
                  href="/admin/login"
                  className="mt-2 px-4 py-3 rounded-md text-sm font-medium bg-blue-600 text-white hover:bg-blue-700"
                  onClick={() => setIsMenuOpen(false)}
                >
                  管理員登入
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
