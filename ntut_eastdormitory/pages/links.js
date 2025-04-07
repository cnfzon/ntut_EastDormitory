import Layout from "../components/Layout";
import Image from "next/image";
import Link from "next/link";

export default function Links() {
  const schoolLinks = [
    {
      title: "國立臺北科技大學",
      description: "臺北科大官方網站，提供校園資訊、最新公告及學校概況",
      url: "https://www.ntut.edu.tw/index.php",
      image: "/images/links/ntut-main.jpg",
      icon: "🏫"
    },
    {
      title: "學務處",
      description: "學生事務處官方網站，提供學生生活、獎助學金及課外活動等資訊",
      url: "https://osa.ntut.edu.tw/index.php?Lang=zh-tw",
      image: "/images/links/ntut-osa.jpg",
      icon: "📚"
    },
    {
      title: "計算機與網路中心",
      description: "提供校園網路、電腦教室及資訊系統服務相關資訊",
      url: "https://cnc.ntut.edu.tw/",
      image: "/images/links/ntut-cnc.jpg",
      icon: "💻"
    },
    {
      title: "東校區宿舍",
      description: "東校區宿舍官方網站，提供宿舍資訊、法規及最新公告",
      url: "https://eastdorm.ntut.edu.tw/index.php",
      image: "/images/links/ntut-dorm.jpg",
      icon: "🏠"
    },
    {
      title: "宿舍電力系統",
      description: "智慧校園管理系統，查詢與管理宿舍電力使用狀況",
      url: "https://www.aotech.tw/ntut_power/",
      image: "/images/links/ntut-power.jpg",
      icon: "⚡"
    }
  ];

  return (
    <Layout title="相關連結">
      {/* Hero Section */}
      <section className="relative h-[40vh] flex items-center justify-center bg-gradient-to-r from-blue-600 to-blue-800 text-white overflow-hidden rounded-xl shadow-lg my-8">
        <div className="absolute inset-0 bg-black opacity-50 rounded-xl"></div>
        <div className="absolute inset-0 rounded-xl overflow-hidden">
          <Image
            src="/images/hero-bg.jpg"
            alt="臺北科大背景"
            layout="fill"
            objectFit="cover"
            priority
            className="rounded-xl"
          />
        </div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fadeIn">
            相關連結
          </h1>
          <p className="text-xl md:text-2xl animate-fadeIn">
            臺北科技大學校園資源一覽
          </p>
        </div>
      </section>

      {/* Links Section */}
      <section className="content-section">
        <div className="max-w-5xl mx-auto mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {schoolLinks.map((link, index) => (
              <a 
                key={index} 
                href={link.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col h-full border border-gray-100"
              >
                <div className="relative h-40 mb-6 rounded-lg overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-800 opacity-80 group-hover:opacity-70 transition-opacity duration-300 flex items-center justify-center text-white text-7xl z-10">
                    {link.icon}
                  </div>
                  <div className="absolute inset-0 bg-gray-200">
                    {/* 若有圖片可以取消註解這段
                    <Image
                      src={link.image}
                      alt={link.title}
                      layout="fill"
                      objectFit="cover"
                      className="rounded-lg transform group-hover:scale-105 transition-transform duration-500"
                    />
                    */}
                  </div>
                </div>
                
                <h2 className="text-2xl font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                  {link.title}
                </h2>
                
                <p className="text-gray-600 mb-6 flex-grow">
                  {link.description}
                </p>
                
                <div className="flex justify-end">
                  <span className="inline-flex items-center px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm font-medium group-hover:bg-blue-100 transition-colors duration-300">
                    前往網站 <span className="ml-1 text-lg">→</span>
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Back to Home Section */}
      <section className="text-center mb-16">
        <Link href="/" className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-full text-lg font-medium hover:bg-blue-700 transition-colors duration-300 shadow-md">
          <span className="mr-2">←</span> 返回首頁
        </Link>
      </section>
    </Layout>
  );
} 