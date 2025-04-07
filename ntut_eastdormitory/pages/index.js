import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <section className="relative h-[70vh] flex items-center justify-center bg-gradient-to-r from-blue-600 to-blue-800 text-white overflow-hidden rounded-xl my-8 shadow-xl">
          <div className="absolute inset-0 bg-black opacity-50 rounded-xl"></div>
          <div className="absolute inset-0 rounded-xl overflow-hidden">
            <Image
              src="/images/hero-bg.jpg"
              alt="東宿舍外觀"
              layout="fill"
              objectFit="cover"
              priority
              className="rounded-xl"
            />
          </div>
          <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
            <div className="mb-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-2 animate-fadeIn">
                國立臺北科技大學
              </h2>
              <h3 className="text-2xl md:text-3xl font-medium animate-fadeIn">
                宿舍自治委員會
              </h3>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fadeIn">
              歡迎來到東宿舍
            </h1>
            <p className="text-xl md:text-2xl mb-8 animate-fadeIn">
              溫馨舒適的住宿環境，讓您有家的感覺
            </p>
            <div className="flex justify-center space-x-4">
              <Link href="/calendar" className="btn btn-white py-3 px-6 text-lg rounded-full hover:scale-105 transition-transform shadow-lg">
                查看活動
              </Link>
              <Link href="/about" className="btn btn-outline-white py-3 px-6 text-lg rounded-full hover:scale-105 transition-transform shadow-lg">
                了解更多
              </Link>
            </div>
          </div>
        </section>

        {/* Announcement Section */}
        <section className="py-12 rounded-xl bg-white shadow-md my-12">
          <div className="container mx-auto px-4 max-w-5xl">
            <Announcement />
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 bg-white rounded-xl shadow-md my-12">
          <div className="container mx-auto px-4 max-w-5xl">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">宿舍特色</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              <div className="card hover:scale-105 transition-transform duration-300 text-center group border border-gray-100">
                <div className="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-200 transition-colors duration-300 shadow-inner">
                  <span className="text-5xl">🔒</span>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-gray-800">安全可靠</h3>
                <p className="text-gray-600">
                  24小時門禁管理，確保住宿安全
                </p>
              </div>
              <div className="card hover:scale-105 transition-transform duration-300 text-center group border border-gray-100">
                <div className="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-200 transition-colors duration-300 shadow-inner">
                  <span className="text-5xl">🏠</span>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-gray-800">舒適環境</h3>
                <p className="text-gray-600">
                  完善的公共設施，提供舒適的住宿環境
                </p>
              </div>
              <div className="card hover:scale-105 transition-transform duration-300 text-center group border border-gray-100">
                <div className="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-200 transition-colors duration-300 shadow-inner">
                  <span className="text-5xl">👥</span>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-gray-800">豐富活動</h3>
                <p className="text-gray-600">
                  定期舉辦活動，促進宿舍交流
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="py-16 bg-white rounded-xl shadow-md my-12">
          <div className="container mx-auto px-4 max-w-5xl">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">宿舍環境</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="relative h-72 rounded-xl overflow-hidden group shadow-md">
                <Image
                  src="/images/gallery/lobby.jpg"
                  alt="宿舍大廳"
                  layout="fill"
                  objectFit="cover"
                  className="transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                  <span className="text-white text-xl font-semibold">宿舍大廳</span>
                </div>
              </div>
              <div className="relative h-72 rounded-xl overflow-hidden group shadow-md">
                <Image
                  src="/images/gallery/room.jpg"
                  alt="宿舍房間"
                  layout="fill"
                  objectFit="cover"
                  className="transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                  <span className="text-white text-xl font-semibold">宿舍房間</span>
                </div>
              </div>
              <div className="relative h-72 rounded-xl overflow-hidden group shadow-md">
                <Image
                  src="/images/gallery/common.jpg"
                  alt="公共空間"
                  layout="fill"
                  objectFit="cover"
                  className="transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                  <span className="text-white text-xl font-semibold">公共空間</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Dormitory Section */}
        <section className="py-16 bg-white rounded-xl shadow-md my-12 mb-20">
          <div className="container mx-auto px-4 max-w-5xl">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">宿舍介紹</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="card hover:shadow-xl transition-all duration-300 group border border-gray-100 rounded-xl">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mr-4 group-hover:bg-blue-200 transition-colors duration-300 shadow-inner">
                    <span className="text-3xl">🏢</span>
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-800">A 棟（男生宿舍）</h3>
                </div>
                <p className="text-gray-600 mb-6">
                  設有冷氣、洗衣間、公共交誼廳。每層樓都有飲水機和公共衛浴設施。
                </p>
                <ul className="mt-4 space-y-3">
                  <li className="flex items-center text-gray-600">
                    <span className="mr-2 text-green-500 text-lg">✓</span> 24小時門禁管理
                  </li>
                  <li className="flex items-center text-gray-600">
                    <span className="mr-2 text-green-500 text-lg">✓</span> 免費網路
                  </li>
                  <li className="flex items-center text-gray-600">
                    <span className="mr-2 text-green-500 text-lg">✓</span> 定期清潔服務
                  </li>
                </ul>
              </div>

              <div className="card hover:shadow-xl transition-all duration-300 group border border-gray-100 rounded-xl">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mr-4 group-hover:bg-pink-200 transition-colors duration-300 shadow-inner">
                    <span className="text-3xl">🏢</span>
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-800">B 棟（女生宿舍）</h3>
                </div>
                <p className="text-gray-600 mb-6">
                  設有電梯、自習室、冷氣與洗衣設備。提供舒適安全的住宿環境。
                </p>
                <ul className="mt-4 space-y-3">
                  <li className="flex items-center text-gray-600">
                    <span className="mr-2 text-green-500 text-lg">✓</span> 24小時保全系統
                  </li>
                  <li className="flex items-center text-gray-600">
                    <span className="mr-2 text-green-500 text-lg">✓</span> 獨立衛浴
                  </li>
                  <li className="flex items-center text-gray-600">
                    <span className="mr-2 text-green-500 text-lg">✓</span> 公共廚房
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
