import Navbar from "../components/Navbar";
import Image from "next/image";

export default function Feedback() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="relative h-[40vh] flex items-center justify-center bg-gradient-to-r from-blue-600 to-blue-800 text-white overflow-hidden">
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="absolute inset-0">
            <Image
              src="/images/hero-bg.jpg"
              alt="東宿舍外觀"
              layout="fill"
              objectFit="cover"
              priority
            />
          </div>
          <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fadeIn">
              網站問題回報
            </h1>
            <p className="text-xl md:text-2xl animate-fadeIn">
              幫助我們改進網站，提供更好的服務
            </p>
          </div>
        </section>

        {/* Feedback Form Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <div className="card p-8">
                <h2 className="text-2xl font-bold mb-6 text-center">問題回報表單</h2>
                <p className="text-gray-600 mb-8 text-center">
                  如果您在使用網站時遇到任何問題，或是有任何建議，請填寫以下表單。
                  我們會盡快處理您的回饋。
                </p>
                <div className="text-center">
                  <a
                    href="https://forms.gle/HoqrfwyN4GRTeNvQA"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary inline-block"
                  >
                    前往填寫表單
                  </a>
                </div>
              </div>

              <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="card p-6">
                  <h3 className="text-xl font-semibold mb-4">常見問題</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2">•</span>
                      <div>
                        <p className="font-medium">網站無法登入</p>
                        <p className="text-gray-600 text-sm">
                          請確認帳號密碼是否正確，或嘗試清除瀏覽器快取
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2">•</span>
                      <div>
                        <p className="font-medium">頁面載入緩慢</p>
                        <p className="text-gray-600 text-sm">
                          可能是網路連線問題，請檢查您的網路狀態
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2">•</span>
                      <div>
                        <p className="font-medium">功能異常</p>
                        <p className="text-gray-600 text-sm">
                          請提供詳細的操作步驟，以便我們重現問題
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>

                <div className="card p-6">
                  <h3 className="text-xl font-semibold mb-4">聯絡方式</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2">•</span>
                      <div>
                        <p className="font-medium">電子郵件</p>
                        <p className="text-gray-600 text-sm">
                          dorm@ntut.edu.tw
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2">•</span>
                      <div>
                        <p className="font-medium">電話</p>
                        <p className="text-gray-600 text-sm">
                          (02) 2771-2171 分機 1234
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2">•</span>
                      <div>
                        <p className="font-medium">服務時間</p>
                        <p className="text-gray-600 text-sm">
                          週一至週五 09:00 - 17:00
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
} 