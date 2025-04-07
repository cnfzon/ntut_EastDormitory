import Layout from "../components/Layout";
import Image from "next/image";

export default function About() {
  return (
    <Layout title="關於我們">
      {/* Hero Section */}
      <section className="relative h-[40vh] flex items-center justify-center bg-gradient-to-r from-blue-600 to-blue-800 text-white overflow-hidden rounded-xl shadow-lg my-8">
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
          <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fadeIn">
            關於我們
          </h1>
          <p className="text-xl md:text-2xl animate-fadeIn">
            了解國立臺北科技大學東宿舍自治委員會
          </p>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="content-section">
        <div className="max-w-5xl mx-auto">
          <h2 className="section-title">宿舍簡介</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div>
              <p className="text-gray-700 mb-4 leading-relaxed">
                國立臺北科技大學東宿舍成立於西元1998年，是一座現代化的學生宿舍，提供舒適、安全的居住環境，讓學生能夠專心於學業，同時享受舒適的校園生活。
              </p>
              <p className="text-gray-700 mb-4 leading-relaxed">
                我們的宿舍配備完善的設施，包括空調、網路、洗衣設備、自習室等，滿足學生的各種需求。我們也定期舉辦各種活動，促進宿舍生活的多樣性和社交互動。
              </p>
              <ul className="list-disc pl-5 text-gray-700 space-y-2">
                <li>舒適的住宿環境</li>
                <li>完善的安全管理</li>
                <li>豐富的社交活動</li>
                <li>便利的生活設施</li>
                <li>專業的管理團隊</li>
              </ul>
            </div>
            <div className="relative h-64 md:h-auto rounded-xl overflow-hidden shadow-md">
              <Image
                src="/images/gallery/lobby.jpg"
                alt="宿舍大廳"
                layout="fill"
                objectFit="cover"
                className="rounded-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="content-section">
        <div className="max-w-5xl mx-auto">
          <h2 className="section-title">我們的使命</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card hover:shadow-xl transition-all duration-300 text-center group border border-gray-100 rounded-xl">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-200 transition-colors duration-300 shadow-inner">
                <span className="text-4xl">🏠</span>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-800">舒適家園</h3>
              <p className="text-gray-600">
                提供舒適安全的住宿環境，讓學生有家的感覺
              </p>
            </div>
            <div className="card hover:shadow-xl transition-all duration-300 text-center group border border-gray-100 rounded-xl">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-200 transition-colors duration-300 shadow-inner">
                <span className="text-4xl">🤝</span>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-800">友善社群</h3>
              <p className="text-gray-600">
                營造友善包容的社群氛圍，促進學生間的交流
              </p>
            </div>
            <div className="card hover:shadow-xl transition-all duration-300 text-center group border border-gray-100 rounded-xl">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-200 transition-colors duration-300 shadow-inner">
                <span className="text-4xl">📚</span>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-800">學習成長</h3>
              <p className="text-gray-600">
                支持學生的學術發展與個人成長，提供良好的學習環境
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="content-section">
        <div className="max-w-5xl mx-auto">
          <h2 className="section-title">聯絡我們</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="card p-6 border border-gray-100 rounded-xl">
              <h3 className="text-xl font-semibold mb-4">聯絡資訊</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <span className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-blue-600">📍</span>
                  </span>
                  <div>
                    <p className="font-medium">地址</p>
                    <p className="text-gray-600">
                      台北市大安區忠孝東路三段1號
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-blue-600">📞</span>
                  </span>
                  <div>
                    <p className="font-medium">電話</p>
                    <p className="text-gray-600">
                      (02) 2771-2171 分機 1234
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-blue-600">✉️</span>
                  </span>
                  <div>
                    <p className="font-medium">電子郵件</p>
                    <p className="text-gray-600">
                      dorm@ntut.edu.tw
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="card p-6 border border-gray-100 rounded-xl">
              <h3 className="text-xl font-semibold mb-4">開放時間</h3>
              <div className="space-y-4">
                <div className="flex justify-between border-b border-gray-100 pb-2">
                  <span className="font-medium">週一至週五</span>
                  <span className="text-gray-600">08:00 - 22:00</span>
                </div>
                <div className="flex justify-between border-b border-gray-100 pb-2">
                  <span className="font-medium">週六</span>
                  <span className="text-gray-600">09:00 - 18:00</span>
                </div>
                <div className="flex justify-between border-b border-gray-100 pb-2">
                  <span className="font-medium">週日</span>
                  <span className="text-gray-600">10:00 - 18:00</span>
                </div>
                <div className="flex justify-between border-b border-gray-100 pb-2">
                  <span className="font-medium">國定假日</span>
                  <span className="text-gray-600">10:00 - 16:00</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
