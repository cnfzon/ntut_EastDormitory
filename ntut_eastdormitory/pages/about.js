import Layout from "../components/Layout";
import Image from "next/image";

export default function About() {
  const facilities = [
    { name: "宿舍大樓", icon: "🏢", description: "現代化住宿大樓，提供舒適安全的生活環境" },
    { name: "管理室", icon: "🔑", description: "24小時管理服務，維護宿舍安全和秩序" },
    { name: "寢室", icon: "🛏️", description: "舒適整潔的寢室空間，備有基本家具設備" },
    { name: "運動空間", icon: "⚽", description: "提供住宿生運動休閒的開放空間" },
    { name: "交誼廳", icon: "🎮", description: "供學生交流、休憩與舉辦活動的公共空間" },
    { name: "浴廁", icon: "🚿", description: "乾淨的衛浴設施，定期維護與清潔" },
    { name: "公共電話", icon: "☎️", description: "方便住宿生與外界聯繫的通訊設備" },
    { name: "公佈欄", icon: "📋", description: "發布宿舍公告與重要資訊的平台" },
    { name: "洗衣機及烘衣機", icon: "👕", description: "自助式洗衣與烘乾設備，方便學生處理日常衣物" }
  ];

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
                台北科技大學東校區學生宿舍座落於臺北市黃金地段－地址為臺北市大安區建國南路一段八十一號。距離忠孝新生捷運站步行約5分鐘，鄰近的忠孝東路及建國南路上有餐廳、小吃、超市、診所、藥局、金融機構、運動場等，生活機能完善。
              </p>
              <p className="text-gray-700 mb-4 leading-relaxed">
                本宿舍一樓辦公室電話為02-27411584，宿舍管理室人員為24小時輪班，提供住宿學生所需的協助。學務長及負責教官非常用心於宿舍的各項事務，為的就是提供良好的住宿環境給台北科技大學的學生，讓學生有家的感覺，不會感到寂寞，同時房間窗明几淨，是個良好的讀書環境。
              </p>
              <p className="text-gray-700 mb-4 leading-relaxed">
                宿舍設施完善，籃球場、網球場、排球場、操場、足球場、桌球室和撞球室等等就設置於宿舍外，在課後之餘，使學生有充分的空間休閒放鬆，從此可看出學校對於學生的用心良苦。
              </p>
              <ul className="list-disc pl-5 text-gray-700 space-y-2">
                <li>舒適的住宿環境</li>
                <li>完善的安全管理</li>
                <li>便利的生活機能</li>
                <li>豐富的運動設施</li>
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

      {/* 宿舍設施 Section */}
      <section className="content-section bg-gray-50 py-12 rounded-xl">
        <div className="max-w-5xl mx-auto">
          <h2 className="section-title">宿舍設施</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {facilities.map((facility, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="flex items-center mb-4">
                  <span className="text-3xl mr-3">{facility.icon}</span>
                  <h3 className="text-lg font-semibold text-gray-800">{facility.name}</h3>
                </div>
                <p className="text-gray-600 text-sm">{facility.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 交通資訊 Section */}
      <section className="content-section">
        <div className="max-w-5xl mx-auto">
          <h2 className="section-title">交通資訊</h2>
          <div className="bg-white p-6 rounded-xl shadow-sm mb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-blue-700">自行開車</h3>
                <ul className="list-disc pl-5 text-gray-700 space-y-3">
                  <li>設定導航到 [北科億光大樓停車場]</li>
                  <li><span className="font-medium">國道一號：</span>從圓山交流道接建國高架，忠孝東路出口下，直行過忠孝東路後經迴轉道迴轉</li>
                  <li><span className="font-medium">國道三號：</span>從國道三號下木柵交流道接國3甲，經辛亥路到建國南路</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4 text-blue-700">大眾運輸</h3>
                <ul className="list-disc pl-5 text-gray-700 space-y-3">
                  <li>
                    <span className="font-medium">搭乘捷運：</span>
                    <p>板南線【忠孝新生站】，4號出口臺北科技大學。</p>
                  </li>
                  <li>
                    <span className="font-medium">搭乘公車：</span>
                    <p>臺北科技大學站－212、212直達車、232、262、299及605。</p>
                    <p>忠孝新生路口站－5、72、109、115、214、222、226、280、290、311、505、642、665、668、672及松江新生幹線。</p>
                  </li>
                  <li>
                    <span className="font-medium">搭乘火車：</span>
                    <p>臺北火車站轉捷運板南線【忠孝新生站】，4號出口臺北科技大學。</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 宿委會介紹 Section */}
      <section className="content-section bg-blue-50 py-12 rounded-xl">
        <div className="max-w-5xl mx-auto">
          <h2 className="section-title">宿委會介紹</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="relative h-64 md:h-auto rounded-xl overflow-hidden shadow-md">
              <Image
                src="/images/committee/group-photo.jpg"
                alt="宿委會團體照"
                layout="fill"
                objectFit="cover"
                className="rounded-xl"
              />
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4 text-blue-700">我們是誰？</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                東宿舍自治委員會是由一群熱心服務、責任感強的學生組成。我們來自不同科系、不同年級，但擁有共同的目標：為所有住宿生創造一個安全、舒適、充滿活力的生活環境。我們是連結住宿生與學校之間的橋樑，致力於提升宿舍生活品質。
              </p>
              <h3 className="text-xl font-semibold mb-4 text-blue-700">我們的職責</h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                根據各幹部的職務，我們的工作範圍包括：
              </p>
              <ul className="list-disc pl-5 text-gray-700 space-y-2 mb-6">
                <li>協助住宿學生辦理進住與退宿手續</li>
                <li>維護宿舍區域安全，防制意外災害</li>
                <li>管理宿舍公共財物與設施</li>
                <li>舉辦宿舍活動與交流機會</li>
                <li>處理住宿生的意見反饋與問題</li>
                <li>維護宿舍環境衛生與住宿品質</li>
                <li>協助處理宿舍網路與設備問題</li>
                <li>提供生活與學習上的支持</li>
              </ul>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h3 className="text-xl font-semibold mb-4 text-center text-blue-700">我們的團隊精神</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
              <div className="text-center p-4 rounded-lg bg-gradient-to-b from-blue-50 to-white">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 shadow-inner">
                  <span className="text-3xl">🤝</span>
                </div>
                <h4 className="font-medium mb-2">團隊合作</h4>
                <p className="text-gray-600 text-sm">
                  我們彼此合作與支持，共同為住宿生提供最好的服務，解決各種生活問題
                </p>
              </div>
              <div className="text-center p-4 rounded-lg bg-gradient-to-b from-blue-50 to-white">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 shadow-inner">
                  <span className="text-3xl">💡</span>
                </div>
                <h4 className="font-medium mb-2">創新思維</h4>
                <p className="text-gray-600 text-sm">
                  我們不斷尋求創新的方式改善宿舍生活，提供新穎有趣的活動與服務
                </p>
              </div>
              <div className="text-center p-4 rounded-lg bg-gradient-to-b from-blue-50 to-white">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 shadow-inner">
                  <span className="text-3xl">❤️</span>
                </div>
                <h4 className="font-medium mb-2">服務熱忱</h4>
                <p className="text-gray-600 text-sm">
                  我們充滿熱忱地為每位住宿生服務，傾聽大家的需求，並致力解決問題
                </p>
              </div>
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
      <section className="content-section bg-gray-50 py-12 rounded-xl">
        <div className="max-w-5xl mx-auto">
          <h2 className="section-title">聯絡資訊</h2>
          <div className="bg-white p-8 rounded-xl shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-blue-700">地址</h3>
                <p className="text-gray-700 mb-2">10655臺北市大安區建國南路一段81號</p>
                <p className="text-gray-700 mb-4">No. 81, Sec. 1, Jianguo S. Rd., Da'an Dist., Taipei City 106, Taiwan (R.O.C.)</p>
                
                <h3 className="text-xl font-semibold mb-4 text-blue-700 mt-6">聯絡電話</h3>
                <p className="text-gray-700 mb-4">宿舍管理室：02-27411584（24小時輪班）</p>
                
                <h3 className="text-xl font-semibold mb-4 text-blue-700">電子郵件</h3>
                <p className="text-gray-700">E-mail: jasonlin@ntut.edu.tw</p>
              </div>
              <div className="relative h-64 md:h-auto rounded-xl overflow-hidden shadow-md">
                <Image
                  src="/images/map.jpg"
                  alt="宿舍地圖"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
