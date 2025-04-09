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
          <div className="flex flex-wrap justify-center gap-2 mb-6">
            <button 
              onClick={() => setFilter("all")} 
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 transform ${
                filter === 'all' 
                  ? 'bg-orange-500 text-white shadow-md scale-105 ring-2 ring-orange-300' 
                  : 'bg-gray-200 hover:bg-gray-300 text-gray-800 hover:scale-105'
              }`}
            >
              所有餐廳
            </button>
            <button 
              onClick={() => setFilter("dorm")} 
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 transform ${
                filter === 'dorm' 
                  ? 'bg-green-500 text-white shadow-md scale-105 ring-2 ring-green-300' 
                  : 'bg-gray-200 hover:bg-gray-300 text-gray-800 hover:scale-105'
              }`}
            >
              宿舍餐廳
            </button>
            <button 
              onClick={() => setFilter("greenCourt")} 
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 transform ${
                filter === 'greenCourt' 
                  ? 'bg-blue-500 text-white shadow-md scale-105 ring-2 ring-blue-300' 
                  : 'bg-gray-200 hover:bg-gray-300 text-gray-800 hover:scale-105'
              }`}
            >
              綠光庭園
            </button>
            <button 
              onClick={() => setFilter("kwangHua")} 
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 transform ${
                filter === 'kwangHua' 
                  ? 'bg-purple-500 text-white shadow-md scale-105 ring-2 ring-purple-300' 
                  : 'bg-gray-200 hover:bg-gray-300 text-gray-800 hover:scale-105'
              }`}
            >
              光華商場
            </button>
            <button 
              onClick={() => setFilter("other")} 
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 transform ${
                filter === 'other' 
                  ? 'bg-orange-500 text-white shadow-md scale-105 ring-2 ring-orange-300' 
                  : 'bg-gray-200 hover:bg-gray-300 text-gray-800 hover:scale-105'
              }`}
            >
              其他附近
            </button>
          </div>
        </div>
      </section>

      {/* Wheel Section */}
      <section className="content-section py-6">
        <div className="max-w-4xl mx-auto text-center mb-8">
          <p className="text-xl text-gray-700 mb-6">
            不知道該吃什麼？只要按下按鈕，讓美食轉盤幫你做決定！
            <br />
            <span className="text-sm text-gray-500">
              {filter === 'all' && '包含宿舍餐廳、綠光庭園、光華商場和其他附近的所有美食選擇'}
              {filter === 'dorm' && '目前僅顯示宿舍餐廳的美食選擇'}
              {filter === 'greenCourt' && '目前僅顯示綠光庭園的美食選擇'}
              {filter === 'kwangHua' && '目前僅顯示光華商場的美食選擇'}
              {filter === 'other' && '目前僅顯示其他附近的美食選擇'}
            </span>
          </p>
          
          {selectedRestaurant && !rotating && (
            <div className="my-8 bg-yellow-50 rounded-xl p-6 shadow-md max-w-lg mx-auto border-2 border-yellow-400 animate-fadeIn">
              <h3 className="text-xl font-bold text-orange-600 mb-2">今天就決定是...</h3>
              <div className="text-3xl font-bold text-yellow-600 mb-2">{selectedRestaurant.name}</div>
              <div className="flex items-center justify-center gap-2 text-gray-600">
                <span className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm">{selectedRestaurant.type}</span>
                <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">{selectedRestaurant.location}</span>
              </div>
            </div>
          )}
          
          <div className="relative mb-10 mx-auto" style={{ width: 420, height: 420 }}>
            {/* 轉盤中心指針 */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -mt-8 z-20">
              <div className="w-10 h-16 flex flex-col items-center">
                <div className="w-10 h-10 rounded-full bg-gradient-to-b from-red-500 to-red-700 flex items-center justify-center shadow-lg border-2 border-white">
                  <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center">
                    <div className="w-3 h-3 rounded-full bg-red-600"></div>
                  </div>
                </div>
                <div className="w-0 h-0 border-l-[20px] border-r-[20px] border-b-[30px] border-l-transparent border-r-transparent border-b-red-600 -mt-3"></div>
              </div>
            </div>
            
            {/* 轉盤 */}
            <div
              ref={wheelRef}
              className="relative w-full h-full rounded-full border-[12px] border-yellow-500 overflow-hidden shadow-2xl transition-transform duration-8000 ease-out transform bg-white"
              style={{ 
                transform: `rotate(${degrees}deg)`,
                backgroundImage: 'radial-gradient(circle, #ffffff, #f5f5f5)',
                boxShadow: '0 10px 25px rgba(0,0,0,0.2), inset 0 0 50px rgba(0,0,0,0.1)'
              }}
            >
              {restaurants.map((restaurant, index) => {
                // 計算每個項目的角度
                const angle = (360 / restaurants.length) * index;
                
                // 設置每個項目的背景顏色（根據位置和索引）
                let baseColor, textBaseColor;
                if (restaurant.location === "宿舍餐廳") {
                  baseColor = 'green';
                  textBaseColor = 'text-green-700';
                } else if (restaurant.location === "綠光庭園") {
                  baseColor = 'blue';
                  textBaseColor = 'text-blue-700';
                } else if (restaurant.location === "光華商場") {
                  baseColor = 'purple';
                  textBaseColor = 'text-purple-700';
                } else if (restaurant.location === "其他附近") {
                  baseColor = 'orange';
                  textBaseColor = 'text-orange-700';
                } else {
                  baseColor = 'yellow';
                  textBaseColor = 'text-yellow-700';
                }
                
                // 根據索引交替顏色深淺
                const colorIntensity = index % 2 === 0 ? '100' : '200';
                const bgColor = `bg-${baseColor}-${colorIntensity}`;
                
                // 根據索引位置設置漸變效果
                const bgGradient = index % 2 === 0 
                  ? `linear-gradient(135deg, var(--tw-gradient-stops))`
                  : `linear-gradient(45deg, var(--tw-gradient-stops))`;
                
                const fromColor = `from-${baseColor}-${colorIntensity}`;
                const toColor = `to-${baseColor}-${parseInt(colorIntensity) + 100}`;
                
                // 計算是否為當前選中的餐廳
                const isSelected = selectedRestaurant && restaurant.name === selectedRestaurant.name;
                const textColor = isSelected ? 'text-white font-bold' : 'text-transparent';
                const itemBgColor = isSelected ? `${baseColor}-500` : `${baseColor}-${colorIntensity}`;
                
                return (
                  <div
                    key={index}
                    className={`absolute w-1/2 h-1/2 flex items-center justify-end origin-bottom-right text-xs ${textColor} p-1 transition-all duration-300`}
                    style={{
                      transform: `rotate(${angle}deg) skew(${90 - 360/restaurants.length}deg)`,
                      transformOrigin: '0% 100%',
                      background: isSelected 
                        ? `linear-gradient(to right, #${baseColor}500, #${baseColor}600)`
                        : `${bgGradient}`,
                      '--tw-gradient-from': `var(--tw-${fromColor})`,
                      '--tw-gradient-to': `var(--tw-${toColor})`,
                      boxShadow: isSelected ? '0 0 8px rgba(0,0,0,0.2) inset' : 'none'
                    }}
                  >
                    {!rotating && isSelected && (
                      <span
                        className="transform -rotate-90 origin-center whitespace-nowrap overflow-hidden text-ellipsis font-bold"
                        style={{ width: '100px', maxWidth: '100px' }}
                      >
                        {restaurant.name}
                      </span>
                    )}
                  </div>
                );
              })}
            </div>
            
            {/* 中央按鈕 */}
            <button
              onClick={spinWheel}
              disabled={rotating}
              className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 w-28 h-28 rounded-full ${
                rotating 
                  ? 'bg-gradient-to-r from-gray-500 to-gray-600 animate-pulse' 
                  : 'bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700'
              } text-white font-bold shadow-lg transition-all duration-300 flex items-center justify-center`}
              style={{
                boxShadow: rotating 
                  ? '0 0 20px rgba(255,0,0,0.5), 0 0 40px rgba(255,0,0,0.3)' 
                  : '0 6px 15px rgba(0,0,0,0.3), inset 0 1px 3px rgba(255,255,255,0.3)'
              }}
            >
              {rotating ? (
                <div className="flex flex-col items-center">
                  <span className="animate-spin text-2xl mb-1">↻</span>
                  <span className="text-base font-medium">轉動中...</span>
                </div>
              ) : (
                <span className="text-xl">點我<br/>開始</span>
              )}
            </button>
          </div>
          
          <p className="text-gray-500 italic mt-4">
            {rotating ? 'cow我超2' : 'cow我超2'}
          </p>
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
          transition-timing-function: cubic-bezier(0, 0, 0.2, 1);
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-in-out;
        }
        
        /* 轉盤漸變色定義 */
        :root {
          --tw-from-green-100: #dcfce7;
          --tw-to-green-200: #bbf7d0;
          --tw-from-green-200: #bbf7d0;
          --tw-to-green-300: #86efac;
          
          --tw-from-blue-100: #dbeafe;
          --tw-to-blue-200: #bfdbfe;
          --tw-from-blue-200: #bfdbfe;
          --tw-to-blue-300: #93c5fd;
          
          --tw-from-purple-100: #f3e8ff;
          --tw-to-purple-200: #e9d5ff;
          --tw-from-purple-200: #e9d5ff;
          --tw-to-purple-300: #d8b4fe;
          
          --tw-from-orange-100: #ffedd5;
          --tw-to-orange-200: #fed7aa;
          --tw-from-orange-200: #fed7aa;
          --tw-to-orange-300: #fdba74;
          
          --tw-from-yellow-100: #fef9c3;
          --tw-to-yellow-200: #fef08a;
          --tw-from-yellow-200: #fef08a;
          --tw-to-yellow-300: #fde047;
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
        
        /* 指針旋轉動畫 */
        @keyframes pointer-pulse {
          0%, 100% { transform: scale(1) translateY(0); }
          50% { transform: scale(1.05) translateY(-2px); }
        }
        
        .animate-pointer-pulse {
          animation: pointer-pulse 1s ease-in-out infinite;
        }
      `}</style>
    </Layout>
  );
} 