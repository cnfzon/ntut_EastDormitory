import Link from "next/link";

const navItems = [
  { href: "/", label: "🏠 首頁" },
  { href: "/about", label: "👥 幹部介紹" },
  { href: "/report", label: "📮 回報問題" },
];

export default function Navbar() {
  return (
    <nav className="bg-blue-700 p-4 text-white">
      <div className="flex space-x-6">
        {navItems.map((item, idx) => (
          <Link key={idx} href={item.href}>
            {item.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}
