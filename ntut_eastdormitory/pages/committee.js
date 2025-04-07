import Layout from "../components/Layout";
import Image from "next/image";

export default function Committee() {
  const committeeMembers = [
    {
      title: "會長",
      name: "___",
      image: "/images/committee/chairman.jpg",
      description: `1. 召集及主持委員會議及主持樓、區長會議。
                    2. 執行前兩項會議決議事項。
                    3. 選任各組組長及幹事人選。
                    4. 協助學校執行宿舍各項規定事項。
                    5. 住宿學生意見建議與溝通。`,
      email: "___"
    },
    {
      title: "副會長",
      name: "___",
      image: "/images/committee/vice-chairman.jpg",
      description: `1. 召集委員會議及協助主持樓、區長會議。
                    2. 協助會長處理相關會務事宜。`,
      email: "___"
    },
    {
      title: "男幹事",
      name: "___",
      image: "/images/committee/male-officer.jpg",
      description: `1. 輔導住宿學生辦理進住、退宿手續。
                    2. 宿舍區域安全維護之協調，並防制意外災害、宵小活動。
                    3. 違規住宿之查報與預防。
                    4. 擬訂、執行、輔導宿舍作息規定及用電管制與檢查。`,
      email: "___"
    },
    {
      title: "副男幹事",
      name: "___",
      image: "/images/committee/vice-male-officer.jpg",
      description: `1. 輔導住宿學生辦理進住、退宿手續。
                    2. 宿舍區域安全維護之協調，並防制意外災害、宵小活動。
                    3. 違規住宿之查報與預防。
                    4. 擬訂、執行、輔導宿舍作息規定及用電管制與檢查。`,
      email: "___"
    },
    {
      title: "男文書長",
      name: "___",
      image: "/images/committee/male-secretary.jpg",
      description: `1. 輔導住宿學生辦理進住、退宿手續。
                    2. 宿舍區域安全維護之協調，並防制意外災害、宵小活動。
                    3. 違規住宿之查報與預防。
                    4. 擬訂、執行、輔導宿舍作息規定及用電管制與檢查。`,
      email: "___"
    },
    {
      title: "女幹事",
      name: "___",
      image: "/images/committee/female-officer.jpg",
      description: `1. 輔導住宿學生辦理進住、退宿手續。
                    2. 宿舍區域安全維護之協調，並防制意外災害、宵小活動。
                    3. 違規住宿之查報與預防。
                    4. 擬訂、執行、輔導宿舍作息規定及用電管制與檢查。`,
      email: "___"
    },
    {
      title: "副女幹事",
      name: "___",
      image: "/images/committee/vice-female-officer.jpg",
      description: `1. 輔導住宿學生辦理進住、退宿手續。
                    2. 宿舍區域安全維護之協調，並防制意外災害、宵小活動。
                    3. 違規住宿之查報與預防。
                    4. 擬訂、執行、輔導宿舍作息規定及用電管制與檢查。`,
      email: "___"
    },
    {
      title: "女文書長",
      name: "___",
      image: "/images/committee/female-secretary.jpg",
      description: `1. 輔導住宿學生辦理進住、退宿手續。
                    2. 宿舍區域安全維護之協調，並防制意外災害、宵小活動。
                    3. 違規住宿之查報與預防。
                    4. 擬訂、執行、輔導宿舍作息規定及用電管制與檢查。`,
      email: "___"
    },
    {
      title: "總務長1",
      name: "___",
      image: "/images/committee/treasurer1.jpg",
      description: `1. 本會必須經費之出納、管理與公佈。
                    2. 負責公用財物之保管維護及檢查。
                    3. 本會經管物品之採購與維修。`,
      email: "___"
    },
    {
      title: "總務長2",
      name: "___",
      image: "/images/committee/treasurer2.jpg",
      description: `1. 本會必須經費之出納、管理與公佈。
                    2. 負責公用財物之保管維護及檢查。
                    3. 本會經管物品之採購與維修。`,
      email: "___"
    },
    {
      title: "美宣長1",
      name: "___",
      image: "/images/committee/publicity1.jpg",
      description: `1. 負責文化、康樂、聯誼活動之策畫執行與精神佈置。
                    2. 閱覽室及交誼廳各項設施之管理與維護。
                    3. 學生宿舍委員及幹部會議記錄整理。
                    4. 負責文宣器材使用、保管與維護。`,
      email: "___"
    },
    {
      title: "美宣長2",
      name: "___",
      image: "/images/committee/publicity2.jpg",
      description: `1. 負責文化、康樂、聯誼活動之策畫執行與精神佈置。
                    2. 閱覽室及交誼廳各項設施之管理與維護。
                    3. 學生宿舍委員及幹部會議記錄整理。
                    4. 負責文宣器材使用、保管與維護。`,
      email: "___"
    },
    {
      title: "衛生長1",
      name: "___",
      image: "/images/committee/health1.jpg",
      description: `1. 負責學生宿舍環境衛生之維護、督導與建議。
                    2. 負責學生宿舍學生傷、病之照顧、服務及急救送醫。
                    3. 協助學生宿舍內務檢查公佈與建議獎懲。
                    4. 其他有關衛生方面之臨時交辦事項。`,
      email: "___"
    },
    {
      title: "衛生長2",
      name: "___",
      image: "/images/committee/health2.jpg",
      description: `1. 負責學生宿舍環境衛生之維護、督導與建議。
                    2. 負責學生宿舍學生傷、病之照顧、服務及急救送醫。
                    3. 協助學生宿舍內務檢查公佈與建議獎懲。
                    4. 其他有關衛生方面之臨時交辦事項。`,
      email: "___"
    },
    {
      title: "衛生長3",
      name: "___",
      image: "/images/committee/health3.jpg",
      description: `1. 負責學生宿舍環境衛生之維護、督導與建議。
                    2. 負責學生宿舍學生傷、病之照顧、服務及急救送醫。
                    3. 協助學生宿舍內務檢查公佈與建議獎懲。
                    4. 其他有關衛生方面之臨時交辦事項。`,
      email: "___"
    },
    {
      title: "膳食長1",
      name: "___",
      image: "/images/committee/food1.jpg",
      description: `1. 舉辦膳食活動 如宿舍宵夜。
                    2. 處理居民膳食問題。
                    3. 負責開會膳食之事宜。`,
      email: "___"
    },
    {
      title: "膳食長2",
      name: "___",
      image: "/images/committee/food2.jpg",
      description: `1. 舉辦膳食活動 如宿舍宵夜。
                    2. 處理居民膳食問題。
                    3. 負責開會膳食之事宜。`,
      email: "___"
    },
    {
      title: "網路長1",
      name: "___",
      image: "/images/committee/network1.jpg",
      description: `1. 辦理宿舍網路之使用講習。
                    2. 網路狀況之查報與簡單維護。
                    3. 擬訂及執行網路使用規定。
                    4. 網路集線器之保管、管制與借用。`,
      email: "___"
    },
    {
      title: "網路長2",
      name: "___",
      image: "/images/committee/network2.jpg",
      description: `1. 辦理宿舍網路之使用講習。
                    2. 網路狀況之查報與簡單維護。
                    3. 擬訂及執行網路使用規定。
                    4. 網路集線器之保管、管制與借用。`,
      email: "___"
    }
  ];

  return (
    <Layout title="宿委會幹部介紹">
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
            宿委會幹部介紹
          </h1>
          <p className="text-xl md:text-2xl animate-fadeIn">
            113學年度 宿委會幹部
          </p>
        </div>
      </section>

      {/* Committee Section */}
      <section className="content-section">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {committeeMembers.map((member, index) => (
              <div key={index} className="card hover:shadow-xl transition-all duration-300 text-center group border border-gray-100 rounded-xl">
                <div className="w-40 h-40 mx-auto mb-6 rounded-full overflow-hidden ring-4 ring-blue-100 group-hover:ring-blue-300 transition-all duration-300 shadow-md">
                  <Image
                    src={member.image}
                    alt={member.title}
                    width={160}
                    height={160}
                    className="object-cover transform group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-2xl font-semibold mb-2 text-blue-600">{member.title}</h3>
                <p className="text-xl text-gray-800 mb-2">{member.name}</p>
                <div className="text-gray-600 px-4 text-left whitespace-pre-line">
                  {member.description}
                </div>
                <div className="mt-4 flex justify-center space-x-4">
                  <a href={`mailto:${member.email}`} className="text-blue-500 hover:text-blue-700">
                    <span className="text-xl">📧 聯絡我</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}   