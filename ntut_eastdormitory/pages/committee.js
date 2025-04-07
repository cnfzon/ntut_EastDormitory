import Navbar from "../components/Navbar";
import Image from "next/image";

export default function Committee() {
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
              宿委會幹部介紹
            </h1>
            <p className="text-xl md:text-2xl animate-fadeIn">
              認識我們的團隊，為您提供最好的服務
            </p>
          </div>
        </section>

        {/* Committee Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="card hover:shadow-xl transition-all duration-300 text-center group">
                <div className="w-40 h-40 mx-auto mb-6 rounded-full overflow-hidden ring-4 ring-blue-100 group-hover:ring-blue-300 transition-all duration-300">
                  <Image
                    src="/images/committee/chairman.jpg"
                    alt="會長"
                    width={160}
                    height={160}
                    className="object-cover transform group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-2xl font-semibold mb-2 text-blue-600">會長</h3>
                <p className="text-xl text-gray-800 mb-2">王小明</p>
                <p className="text-gray-600">
                  負責統籌宿委會各項事務，協調各部門工作
                </p>
                <div className="mt-4 flex justify-center space-x-4">
                  <a href="#" className="text-blue-500 hover:text-blue-700">
                    <span className="text-xl">📧</span>
                  </a>
                  <a href="#" className="text-blue-500 hover:text-blue-700">
                    <span className="text-xl">📱</span>
                  </a>
                </div>
              </div>

              <div className="card hover:shadow-xl transition-all duration-300 text-center group">
                <div className="w-40 h-40 mx-auto mb-6 rounded-full overflow-hidden ring-4 ring-blue-100 group-hover:ring-blue-300 transition-all duration-300">
                  <Image
                    src="/images/committee/vice-chairman.jpg"
                    alt="副會長"
                    width={160}
                    height={160}
                    className="object-cover transform group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-2xl font-semibold mb-2 text-blue-600">副會長</h3>
                <p className="text-xl text-gray-800 mb-2">李小華</p>
                <p className="text-gray-600">
                  協助會長處理各項事務，負責活動企劃
                </p>
                <div className="mt-4 flex justify-center space-x-4">
                  <a href="#" className="text-blue-500 hover:text-blue-700">
                    <span className="text-xl">📧</span>
                  </a>
                  <a href="#" className="text-blue-500 hover:text-blue-700">
                    <span className="text-xl">📱</span>
                  </a>
                </div>
              </div>

              <div className="card hover:shadow-xl transition-all duration-300 text-center group">
                <div className="w-40 h-40 mx-auto mb-6 rounded-full overflow-hidden ring-4 ring-blue-100 group-hover:ring-blue-300 transition-all duration-300">
                  <Image
                    src="/images/committee/secretary.jpg"
                    alt="秘書"
                    width={160}
                    height={160}
                    className="object-cover transform group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-2xl font-semibold mb-2 text-blue-600">秘書</h3>
                <p className="text-xl text-gray-800 mb-2">張小美</p>
                <p className="text-gray-600">
                  負責會議記錄、文書處理及資料管理
                </p>
                <div className="mt-4 flex justify-center space-x-4">
                  <a href="#" className="text-blue-500 hover:text-blue-700">
                    <span className="text-xl">📧</span>
                  </a>
                  <a href="#" className="text-blue-500 hover:text-blue-700">
                    <span className="text-xl">📱</span>
                  </a>
                </div>
              </div>

              <div className="card hover:shadow-xl transition-all duration-300 text-center group">
                <div className="w-40 h-40 mx-auto mb-6 rounded-full overflow-hidden ring-4 ring-blue-100 group-hover:ring-blue-300 transition-all duration-300">
                  <Image
                    src="/images/committee/treasurer.jpg"
                    alt="財務"
                    width={160}
                    height={160}
                    className="object-cover transform group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-2xl font-semibold mb-2 text-blue-600">財務</h3>
                <p className="text-xl text-gray-800 mb-2">陳小強</p>
                <p className="text-gray-600">
                  負責經費管理、收支記錄及預算編列
                </p>
                <div className="mt-4 flex justify-center space-x-4">
                  <a href="#" className="text-blue-500 hover:text-blue-700">
                    <span className="text-xl">📧</span>
                  </a>
                  <a href="#" className="text-blue-500 hover:text-blue-700">
                    <span className="text-xl">📱</span>
                  </a>
                </div>
              </div>

              <div className="card hover:shadow-xl transition-all duration-300 text-center group">
                <div className="w-40 h-40 mx-auto mb-6 rounded-full overflow-hidden ring-4 ring-blue-100 group-hover:ring-blue-300 transition-all duration-300">
                  <Image
                    src="/images/committee/activity.jpg"
                    alt="活動"
                    width={160}
                    height={160}
                    className="object-cover transform group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-2xl font-semibold mb-2 text-blue-600">活動</h3>
                <p className="text-xl text-gray-800 mb-2">林小芳</p>
                <p className="text-gray-600">
                  負責活動規劃、執行及場地安排
                </p>
                <div className="mt-4 flex justify-center space-x-4">
                  <a href="#" className="text-blue-500 hover:text-blue-700">
                    <span className="text-xl">📧</span>
                  </a>
                  <a href="#" className="text-blue-500 hover:text-blue-700">
                    <span className="text-xl">📱</span>
                  </a>
                </div>
              </div>

              <div className="card hover:shadow-xl transition-all duration-300 text-center group">
                <div className="w-40 h-40 mx-auto mb-6 rounded-full overflow-hidden ring-4 ring-blue-100 group-hover:ring-blue-300 transition-all duration-300">
                  <Image
                    src="/images/committee/publicity.jpg"
                    alt="宣傳"
                    width={160}
                    height={160}
                    className="object-cover transform group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-2xl font-semibold mb-2 text-blue-600">宣傳</h3>
                <p className="text-xl text-gray-800 mb-2">黃小龍</p>
                <p className="text-gray-600">
                  負責活動宣傳、海報設計及社群管理
                </p>
                <div className="mt-4 flex justify-center space-x-4">
                  <a href="#" className="text-blue-500 hover:text-blue-700">
                    <span className="text-xl">📧</span>
                  </a>
                  <a href="#" className="text-blue-500 hover:text-blue-700">
                    <span className="text-xl">📱</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
} 