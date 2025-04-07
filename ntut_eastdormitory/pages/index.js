import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import announcements from "../data/announcements";

export default function Home() {
  return (
    <div>
      <Navbar />
      <main className="p-8">
        <h1 className="text-3xl font-bold mb-6">🏠 宿舍介紹</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="border p-4 rounded-xl shadow">
            <h2 className="text-xl font-semibold">A 棟（男生宿舍）</h2>
            <p>設有冷氣、洗衣間、公共交誼廳。</p>
          </div>
          <div className="border p-4 rounded-xl shadow">
            <h2 className="text-xl font-semibold">B 棟（女生宿舍）</h2>
            <p>設有電梯、自習室、冷氣與洗衣設備。</p>
          </div>
        </div>
        <Announcement announcements={announcements} />
      </main>
    </div>
  );
}
