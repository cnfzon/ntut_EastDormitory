import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="relative h-[60vh] flex items-center justify-center bg-gradient-to-r from-blue-600 to-blue-800 text-white">
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="relative z-10 text-center px-4">
            <div className="mb-8">
              <h2 className="text-2xl md:text-3xl font-bold mb-2 animate-fadeIn">
                國立臺北科技大學
              </h2>
              <h3 className="text-xl md:text-2xl font-medium animate-fadeIn">
                宿舍自治委員會
              </h3>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fadeIn">
              歡迎來到東宿舍
            </h1>
            <p className="text-xl md:text-2xl mb-8 animate-fadeIn">
              溫馨舒適的住宿環境，讓您有家的感覺
            </p>
          </div>
        </section>

        {/* Dormitory Info Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">宿舍介紹</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="card hover:scale-105 transition-transform duration-300">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-2xl">🏢</span>
                  </div>
                  <h3 className="text-xl font-semibold">A 棟（男生宿舍）</h3>
                </div>
                <p className="text-gray-600">
                  設有冷氣、洗衣間、公共交誼廳。每層樓都有飲水機和公共衛浴設施。
                </p>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-center text-gray-600">
                    <span className="mr-2">✓</span> 24小時門禁管理
                  </li>
                  <li className="flex items-center text-gray-600">
                    <span className="mr-2">✓</span> 免費網路
                  </li>
                  <li className="flex items-center text-gray-600">
                    <span className="mr-2">✓</span> 定期清潔服務
                  </li>
                </ul>
              </div>

              <div className="card hover:scale-105 transition-transform duration-300">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-2xl">🏢</span>
                  </div>
                  <h3 className="text-xl font-semibold">B 棟（女生宿舍）</h3>
                </div>
                <p className="text-gray-600">
                  設有電梯、自習室、冷氣與洗衣設備。提供舒適安全的住宿環境。
                </p>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-center text-gray-600">
                    <span className="mr-2">✓</span> 24小時保全系統
                  </li>
                  <li className="flex items-center text-gray-600">
                    <span className="mr-2">✓</span> 獨立衛浴
                  </li>
                  <li className="flex items-center text-gray-600">
                    <span className="mr-2">✓</span> 公共廚房
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Announcements Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <Announcement />
          </div>
        </section>
      </main>
    </div>
  );
}
