import Navbar from "../components/Navbar";

export default function Report() {
  const formURL = process.env.NEXT_PUBLIC_FEEDBACK_URL || "https://forms.gle/KHDqWL55Cmi2BXUM6";

  return (
    <div>
      <Navbar />
      <main className="p-8 max-w-xl lg:max-w-2xl mx-auto text-center">
        <h1 className="text-3xl font-bold mb-4">📮 問題回報與意見收集</h1>
        <p className="mb-6">請點擊下方連結前往填寫 Google 表單：</p>
        <a
          href={formURL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700"
        >
          前往填寫表單
        </a>
      </main>
    </div>
  );
}
