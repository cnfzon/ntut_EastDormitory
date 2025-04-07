import Link from "next/link";
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

const navItems = [
  { name: "首頁", path: "/" },
  { name: "關於我們", path: "/about" },
  { name: "報修系統", path: "/repair" },
  { name: "幹部介紹", path: "/committee" },
  { name: "網站問題回報", path: "/feedback" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isLoggedIn = typeof window !== "undefined" && localStorage.getItem("token");

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-xl font-bold text-blue-600">
            東宿舍
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className={`text-sm font-medium transition-colors duration-200 ${
                  router.pathname === item.path
                    ? "text-blue-600"
                    : isScrolled
                    ? "text-gray-600 hover:text-blue-600"
                    : "text-white hover:text-blue-200"
                }`}
              >
                {item.name}
              </Link>
            ))}
            {isLoggedIn ? (
              <>
                <Link
                  href="/admin/change-password"
                  className={`text-sm font-medium transition-colors duration-200 ${
                    isScrolled
                      ? "text-gray-600 hover:text-blue-600"
                      : "text-white hover:text-blue-200"
                  }`}
                >
                  修改密碼
                </Link>
                <button
                  onClick={() => {
                    localStorage.removeItem("token");
                    router.push("/");
                  }}
                  className={`text-sm font-medium transition-colors duration-200 ${
                    isScrolled
                      ? "text-gray-600 hover:text-blue-600"
                      : "text-white hover:text-blue-200"
                  }`}
                >
                  登出
                </button>
              </>
            ) : (
              <Link
                href="/admin/login"
                className={`text-sm font-medium transition-colors duration-200 ${
                  isScrolled
                    ? "text-gray-600 hover:text-blue-600"
                    : "text-white hover:text-blue-200"
                }`}
              >
                管理員登入
              </Link>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-600"
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
              : "opacity-0 -translate-y-full"
          }`}
        >
          <div className="bg-white shadow-lg rounded-lg p-4 mt-2">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  href={item.path}
                  className={`text-sm font-medium ${
                    router.pathname === item.path
                      ? "text-blue-600"
                      : "text-gray-600 hover:text-blue-600"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              {isLoggedIn ? (
                <>
                  <Link
                    href="/admin/change-password"
                    className="text-sm font-medium text-gray-600 hover:text-blue-600"
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
                    className="text-sm font-medium text-gray-600 hover:text-blue-600 text-left"
                  >
                    登出
                  </button>
                </>
              ) : (
                <Link
                  href="/admin/login"
                  className="text-sm font-medium text-gray-600 hover:text-blue-600"
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
