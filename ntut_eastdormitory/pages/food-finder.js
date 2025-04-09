import { useState, useEffect, useRef } from 'react';
import Layout from "../components/Layout";
import Image from "next/image";

export default function FoodFinder() {
  // 將餐廳分類
  const dormRestaurants = [
    { name: "全家便利商店", type: "便利商店", image: "/images/restaurants/convenience.jpg" },
    { name: "好日食堂", type: "便當", image: "/images/restaurants/bento.jpg" },
    { name: "攪和餅果室", type: "甜點", image: "/images/restaurants/dessert.jpg" },
    { name: "歐趴號", type: "早餐", image: "/images/restaurants/breakfast.jpg" },
    { name: "宣茶", type: "飲料", image: "/images/restaurants/tea.jpg" }
  ];
  
  const greenCourtRestaurants = [
    { name: "全家便利商店", type: "便利商店", image: "/images/restaurants/convenience.jpg" },
    { name: "路易莎", type: "咖啡", image: "/images/restaurants/coffee.jpg" },
    { name: "KALU可露", type: "甜點", image: "/images/restaurants/dessert.jpg" },
    { name: "摩斯漢堡", type: "速食", image: "/images/restaurants/mos.jpg" },
    { name: "龍家自助餐", type: "自助餐", image: "/images/restaurants/buffet.jpg" },
    { name: "宣坊", type: "便當", image: "/images/restaurants/bento.jpg" },
    { name: "日光料理", type: "日式", image: "/images/restaurants/japanese.jpg" },
    { name: "文華食堂", type: "中式", image: "/images/restaurants/chinese.jpg" },
    { name: "天津蔥餅", type: "小吃", image: "/images/restaurants/taiwanese.jpg" }
  ];
  
  // 光華商場美食選項
  const kwangHuaRestaurants = [
    { name: "喬喜蛋炒飯專賣店", type: "中式", image: "/images/restaurants/chinese.jpg" },
    { name: "阿姊的店碳烤三明治", type: "三明治", image: "/images/restaurants/sandwich.jpg" },
    { name: "垃圾麵（喇舌麵）", type: "麵食", image: "/images/restaurants/noodles.jpg" },
    { name: "就是愛煎餅果子·咔滋飯糰", type: "中式", image: "/images/restaurants/chinese.jpg" },
    { name: "巧之味手工水餃", type: "中式", image: "/images/restaurants/dumpling.jpg" },
    { name: "I'M PASTA", type: "義式", image: "/images/restaurants/pasta.jpg" },
    { name: "佐藤精肉店", type: "日式", image: "/images/restaurants/japanese.jpg" },
    { name: "銀記手擀刀切牛肉麵", type: "麵食", image: "/images/restaurants/noodles.jpg" },
    { name: "光華蔥抓餅夾香腸", type: "小吃", image: "/images/restaurants/taiwanese.jpg" },
    { name: "光華紅豆餅", type: "甜點", image: "/images/restaurants/dessert.jpg" },
    { name: "光華豬血糕", type: "小吃", image: "/images/restaurants/taiwanese.jpg" },
    { name: "光華特大章魚腳", type: "小吃", image: "/images/restaurants/seafood.jpg" },
    { name: "TakeOut Burger&Cafe", type: "美式", image: "/images/restaurants/burger.jpg" },
    { name: "小尾巴", type: "甜點", image: "/images/restaurants/dessert.jpg" },
    { name: "Paper St. Coffee 紙街咖啡", type: "咖啡", image: "/images/restaurants/coffee.jpg" },
    { name: "麵屋雞金", type: "日式", image: "/images/restaurants/ramen.jpg" },
    { name: "丸舢拉麵", type: "日式", image: "/images/restaurants/ramen.jpg" },
    { name: "Broccoli beer韓國餐酒食堂", type: "韓式", image: "/images/restaurants/korean.jpg" },
    { name: "湯神頂級和牛牛肉麵", type: "麵食", image: "/images/restaurants/beef_noodle.jpg" },
    { name: "DOMANI義式餐廳", type: "義式", image: "/images/restaurants/italian.jpg" },
    { name: "PEPPINO培皮諾小館", type: "義式", image: "/images/restaurants/italian.jpg" },
    { name: "黄河蜀魚館", type: "中式", image: "/images/restaurants/chinese.jpg" },
    { name: "濟南牛肉麵", type: "麵食", image: "/images/restaurants/beef_noodle.jpg" },
    { name: "本粥", type: "中式", image: "/images/restaurants/congee.jpg" },
    { name: "溫咖哩", type: "咖哩", image: "/images/restaurants/curry.jpg" },
    { name: "Power Beef", type: "牛肉", image: "/images/restaurants/beef.jpg" },
    { name: "興波咖啡旗艦店", type: "咖啡", image: "/images/restaurants/coffee.jpg" },
    { name: "小巷小象", type: "泰式", image: "/images/restaurants/thai.jpg" },
    { name: "老德記手工拉麵店", type: "麵食", image: "/images/restaurants/noodles.jpg" },
    { name: "阿春姨米粉湯", type: "湯品", image: "/images/restaurants/soup.jpg" },
    { name: "特有種商行", type: "咖啡", image: "/images/restaurants/coffee.jpg" },
    { name: "仨弄砂鍋煲", type: "中式", image: "/images/restaurants/hotpot.jpg" },
    { name: "山海樓", type: "中式", image: "/images/restaurants/chinese.jpg" },
    { name: "羊成小館", type: "中式", image: "/images/restaurants/chinese.jpg" },
    { name: "許雪莉泰國時尚餐廳", type: "泰式", image: "/images/restaurants/thai.jpg" }
  ];
  
  // 其他附近餐廳
  const otherRestaurants = [
    { name: "麥當勞 (台北忠孝店)", type: "速食", image: "/images/restaurants/mcdonalds.jpg" },
    { name: "胖老爹美式炸雞", type: "美式", image: "/images/restaurants/fried-chicken.jpg" },
    { name: "八方雲集", type: "小吃", image: "/images/restaurants/dumpling.jpg" },
    { name: "星巴克咖啡", type: "咖啡", image: "/images/restaurants/coffee.jpg" },
    { name: "清心福全", type: "飲料", image: "/images/restaurants/bubble-tea.jpg" },
    { name: "鼎泰豐", type: "中式", image: "/images/restaurants/chinese.jpg" },
    { name: "CoCo都可", type: "飲料", image: "/images/restaurants/coco.jpg" },
    { name: "鬍鬚張魯肉飯", type: "台式", image: "/images/restaurants/taiwanese.jpg" },
    { name: "池上木片便當", type: "便當", image: "/images/restaurants/bento.jpg" },
    { name: "小木屋鬆餅", type: "甜點", image: "/images/restaurants/dessert.jpg" },
    { name: "50嵐", type: "飲料", image: "/images/restaurants/tea.jpg" },
    { name: "爭鮮迴轉壽司", type: "日式", image: "/images/restaurants/sushi.jpg" },
    { name: "subway", type: "三明治", image: "/images/restaurants/sandwich.jpg" },
    { name: "拉亞漢堡", type: "早餐", image: "/images/restaurants/breakfast.jpg" },
    { name: "7-11超商", type: "便利商店", image: "/images/restaurants/convenience.jpg" }
  ];

  // 合併所有餐廳列表
  const allRestaurants = [
    ...dormRestaurants.map(r => ({ ...r, location: "宿舍餐廳" })),
    ...greenCourtRestaurants.map(r => ({ ...r, location: "綠光庭園" })),
    ...kwangHuaRestaurants.map(r => ({ ...r, location: "光華商場" })),
    ...otherRestaurants.map(r => ({ ...r, location: "其他附近" }))
  ];

  const [rotating, setRotating] = useState(false);
  const [selectedRestaurant, setSelectedRestaurant] = useState(null);
  const [degrees, setDegrees] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [restaurants, setRestaurants] = useState(allRestaurants);
  const [filter, setFilter] = useState("all");
  const wheelRef = useRef(null);

  // 根據篩選條件更新餐廳列表
  useEffect(() => {
    if (filter === "all") {
      setRestaurants(allRestaurants);
    } else if (filter === "dorm") {
      setRestaurants(dormRestaurants.map(r => ({ ...r, location: "宿舍餐廳" })));
    } else if (filter === "greenCourt") {
      setRestaurants(greenCourtRestaurants.map(r => ({ ...r, location: "綠光庭園" })));
    } else if (filter === "kwangHua") {
      setRestaurants(kwangHuaRestaurants.map(r => ({ ...r, location: "光華商場" })));
    } else if (filter === "other") {
      setRestaurants(otherRestaurants.map(r => ({ ...r, location: "其他附近" })));
    }
  }, [filter]);

  const spinWheel = () => {
    // 已經在旋轉中則不再觸發
    if (rotating) return;

    setRotating(true);
    setShowModal(false);
    setSelectedRestaurant(null);
    
    // 隨機選擇一家餐廳
    const randomIndex = Math.floor(Math.random() * restaurants.length);
    const selected = restaurants[randomIndex];
    
    // 計算旋轉角度 (多繞幾圈然後指向選中的餐廳)
    // 每個項目的角度 = 360 / 總數
    const itemAngle = 360 / restaurants.length;
    // 選中項目的中心位置
    const selectedAngle = randomIndex * itemAngle;
    // 多轉幾圈 (8圈) 再加上目標角度，再減去一半項目角度使指針指向項目中心
    const newDegrees = 2880 + selectedAngle - (itemAngle / 2);
    
    setDegrees(newDegrees);
    
    // 旋轉完成後顯示結果
    setTimeout(() => {
      setRotating(false);
      setSelectedRestaurant(selected);
    }, 3000); // 旋轉動畫持續3秒
  };

  return (
    <Layout title="欸等等要吃什麼">
      {/* Hero Section */}
      <section className="relative h-[30vh] flex items-center justify-center bg-gradient-to-r from-yellow-500 to-orange-500 text-white overflow-hidden rounded-xl shadow-lg my-8">
        <div className="absolute inset-0 bg-black opacity-30 rounded-xl"></div>
        <div className="absolute inset-0 rounded-xl overflow-hidden">
          <Image
            src="/images/food-bg.jpg"
            alt="美食背景"
            layout="fill"
            objectFit="cover"
            priority
            className="rounded-xl"
          />
        </div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fadeIn drop-shadow-lg">
            欸等等要吃什麼
          </h1>
          <p className="text-xl md:text-2xl animate-fadeIn drop-shadow-md">
            讓命運決定你的下一頓美食！
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="content-section pt-8 pb-4">
        <div className="max-w-4xl mx-auto">
          <div className="relative mb-4">
            <button 
              onClick={() => setFilter("all")}
              className="flex flex-col items-center justify-center w-12 h-12 bg-white rounded-full shadow-md mb-2 mx-auto hover:shadow-lg transition-all duration-300"
            >
              <div className="w-6 h-0.5 bg-gray-700 rounded-full mb-1.5"></div>
              <div className="w-6 h-0.5 bg-gray-700 rounded-full mb-1.5"></div>
              <div className="w-6 h-0.5 bg-gray-700 rounded-full"></div>
            </button>
            <p className="text-center text-sm text-gray-500">點擊查看選項</p>
          </div>
          <div className="flex flex-wrap justify-center gap-2 mb-6 bg-sky-50 p-5 rounded-xl">
            <button 
              onClick={() => setFilter("all")} 
              className={`px-5 py-3 mb-3 rounded-full text-sm font-medium transition-all duration-300 transform w-full sm:w-auto ${
                filter === 'all' 
                  ? 'bg-orange-500 text-white shadow-md scale-105 ring-2 ring-orange-300' 
                  : 'bg-white hover:bg-gray-100 text-gray-800 hover:scale-105 shadow-sm'
              }`}
            >
              所有餐廳
            </button>
            <button 
              onClick={() => setFilter("dorm")} 
              className={`px-5 py-3 mb-3 rounded-full text-sm font-medium transition-all duration-300 transform w-full sm:w-auto ${
                filter === 'dorm' 
                  ? 'bg-green-500 text-white shadow-md scale-105 ring-2 ring-green-300' 
                  : 'bg-white hover:bg-gray-100 text-gray-800 hover:scale-105 shadow-sm'
              }`}
            >
              宿舍餐廳
            </button>
            <button 
              onClick={() => setFilter("greenCourt")} 
              className={`px-5 py-3 mb-3 rounded-full text-sm font-medium transition-all duration-300 transform w-full sm:w-auto ${
                filter === 'greenCourt' 
                  ? 'bg-blue-500 text-white shadow-md scale-105 ring-2 ring-blue-300' 
                  : 'bg-white hover:bg-gray-100 text-gray-800 hover:scale-105 shadow-sm'
              }`}
            >
              綠光庭園
            </button>
            <button 
              onClick={() => setFilter("kwangHua")} 
              className={`px-5 py-3 mb-3 rounded-full text-sm font-medium transition-all duration-300 transform w-full sm:w-auto ${
                filter === 'kwangHua' 
                  ? 'bg-purple-500 text-white shadow-md scale-105 ring-2 ring-purple-300' 
                  : 'bg-white hover:bg-gray-100 text-gray-800 hover:scale-105 shadow-sm'
              }`}
            >
              光華商場
            </button>
            <button 
              onClick={() => setFilter("other")} 
              className={`px-5 py-3 mb-3 rounded-full text-sm font-medium transition-all duration-300 transform w-full sm:w-auto ${
                filter === 'other' 
                  ? 'bg-orange-500 text-white shadow-md scale-105 ring-2 ring-orange-300' 
                  : 'bg-white hover:bg-gray-100 text-gray-800 hover:scale-105 shadow-sm'
              }`}
            >
              其他附近
            </button>
          </div>
        </div>
      </section>

      {/* Wheel Section */}
      <section className="content-section py-6 flex justify-center items-center min-h-[80vh]">
        <div className="max-w-4xl mx-auto text-center">
          {selectedRestaurant && !rotating && (
            <div className="mb-12 bg-white rounded-xl p-6 shadow-md max-w-lg mx-auto border border-gray-200 animate-fadeIn">
              <h3 className="text-xl font-bold text-gray-800 mb-2">今天就決定是...</h3>
              <div className="text-3xl font-bold text-gray-900 mb-2">{selectedRestaurant.name}</div>
              <div className="text-gray-600">
                位置：{selectedRestaurant.location}
              </div>
            </div>
          )}
          
          <div className="relative mx-auto flex justify-center items-center" style={{ width: 420, height: 420 }}>
            {/* 轉盤中心指針 */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -mt-5 z-20">
              <div className="pointer-flash" ref={el => rotating && el?.classList.add('pointer-flash-active')}>
                <div className="w-0 h-0 border-l-[18px] border-r-[18px] border-b-[35px] border-l-transparent border-r-transparent border-b-red-600"></div>
              </div>
            </div>
            
            {/* 轉盤 */}
            <div
              ref={wheelRef}
              className="relative w-full h-full rounded-full border-[16px] border-[#1a1a1a] overflow-hidden shadow-2xl transition-transform duration-8000 ease-out transform"
              style={{ 
                transform: `rotate(${degrees}deg)`,
                boxShadow: '0 0 30px rgba(0,0,0,0.15), inset 0 0 50px rgba(0,0,0,0.1)'
              }}
            >
              {[
                { name: "宿舍餐廳", color: '#92e9a3' },
                { name: "綠光庭園", color: '#4d99ff' },
                { name: "光華商場", color: '#fceeb2' },
                { name: "其他附近", color: '#ff9090' }
              ].map((section, index) => {
                // 計算每個扇形的角度（360度除以選項數量）
                const angle = (360 / 4) * index;
                return (
                  <div
                    key={index}
                    className="absolute w-full h-full origin-center"
                    style={{
                      transform: `rotate(${angle}deg)`,
                      clipPath: 'polygon(50% 50%, 50% 0, 100% 0, 100% 100%, 50% 100%)',
                      background: section.color
                    }}
                  >
                    <div 
                      className="absolute"
                      style={{ 
                        transform: `rotate(${45}deg)`,
                        width: '120px',
                        textAlign: 'center',
                        fontSize: '16px',
                        fontWeight: 'bold',
                        color: '#333',
                        left: '75%',
                        top: '25%',
                        marginLeft: '-60px',
                        marginTop: '-10px',
                        textShadow: '0 1px 1px rgba(255,255,255,0.8)'
                      }}
                    >
                      {section.name}
                    </div>
                  </div>
                );
              })}
            </div>
            
            {/* 中央按鈕 */}
            <button
              onClick={spinWheel}
              disabled={rotating}
              className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 w-28 h-28 rounded-full bg-[#2a2a2a] text-white font-bold shadow-lg transition-all duration-300 flex items-center justify-center`}
              style={{
                boxShadow: rotating 
                  ? '0 0 20px rgba(0,0,0,0.5)' 
                  : '0 4px 12px rgba(0,0,0,0.3)'
              }}
            >
              <span className="text-xl">按一下以旋轉</span>
            </button>
          </div>
        </div>
      </section>

      {/* Restaurant List Section */}
      <section className="content-section bg-gray-50 py-12 rounded-xl mb-12">
        <div className="max-w-5xl mx-auto">
          <h2 className="section-title mb-8">美食選擇一覽</h2>
          
          {/* 宿舍餐廳 */}
          <div className="mb-8">
            <h3 className="text-xl font-bold text-green-700 mb-4 flex items-center">
              <span className="w-4 h-4 bg-green-100 inline-block mr-2 rounded"></span>
              宿舍餐廳
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {dormRestaurants.map((restaurant, index) => (
                <div key={index} className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 border-l-4 border-green-400">
                  <div className="text-lg font-medium text-gray-800 mb-1">{restaurant.name}</div>
                  <div className="text-sm text-gray-500">{restaurant.type}</div>
                </div>
              ))}
            </div>
          </div>
          
          {/* 綠光庭園 */}
          <div className="mb-8">
            <h3 className="text-xl font-bold text-blue-700 mb-4 flex items-center">
              <span className="w-4 h-4 bg-blue-100 inline-block mr-2 rounded"></span>
              綠光庭園
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {greenCourtRestaurants.map((restaurant, index) => (
                <div key={index} className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 border-l-4 border-blue-400">
                  <div className="text-lg font-medium text-gray-800 mb-1">{restaurant.name}</div>
                  <div className="text-sm text-gray-500">{restaurant.type}</div>
                </div>
              ))}
            </div>
          </div>
          
          {/* 光華商場 */}
          <div className="mb-8">
            <h3 className="text-xl font-bold text-purple-700 mb-4 flex items-center">
              <span className="w-4 h-4 bg-purple-100 inline-block mr-2 rounded"></span>
              光華商場
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {kwangHuaRestaurants.map((restaurant, index) => (
                <div key={index} className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 border-l-4 border-purple-400">
                  <div className="text-lg font-medium text-gray-800 mb-1">{restaurant.name}</div>
                  <div className="text-sm text-gray-500">{restaurant.type}</div>
                </div>
              ))}
            </div>
          </div>
          
          {/* 其他附近 */}
          <div>
            <h3 className="text-xl font-bold text-orange-700 mb-4 flex items-center">
              <span className="w-4 h-4 bg-orange-100 inline-block mr-2 rounded"></span>
              其他附近
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {otherRestaurants.map((restaurant, index) => (
                <div key={index} className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 border-l-4 border-orange-400">
                  <div className="text-lg font-medium text-gray-800 mb-1">{restaurant.name}</div>
                  <div className="text-sm text-gray-500">{restaurant.type}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Custom CSS for smooth wheel rotation */}
      <style jsx global>{`
        .transition-transform {
          transition-property: transform;
        }
        .duration-8000 {
          transition-duration: 3000ms;
        }
        .ease-out {
          transition-timing-function: cubic-bezier(0.34, 1.56, 0.64, 1); /* 彈跳效果 */
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-in-out;
        }
        
        /* 自定義轉動效果 */
        .transition-transform {
          transition-property: transform;
        }
        .duration-8000 {
          transition-duration: 3000ms;
        }
        .ease-out {
          transition-timing-function: cubic-bezier(0.34, 1.56, 0.64, 1); /* 彈跳效果 */
        }
        
        /* 指針動畫 */
        @keyframes pointer-flash {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.2); opacity: 0.8; }
        }
        
        .pointer-flash {
          animation: pointer-flash 1s ease-in-out infinite;
          animation-play-state: paused;
        }
        
        .pointer-flash-active {
          animation-play-state: running;
        }
        
        /* 轉盤動畫結束後提示文字閃爍 */
        @keyframes text-blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
        
        .blink-text {
          animation: text-blink 1.5s ease-in-out infinite;
        }
      `}</style>
    </Layout>
  );
} 