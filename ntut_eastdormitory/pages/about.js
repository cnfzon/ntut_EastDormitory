import Navbar from "../components/Navbar";
import MemberCard from "../components/MemberCard";
import members from "../data/members";

export default function About() {
  return (
    <div>
      <Navbar />
      <main className="p-8">
        <h1 className="text-3xl font-bold mb-6">👤 宿委會幹部介紹</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {members.map((member, idx) => (
            <MemberCard key={idx} {...member} />
          ))}
        </div>
      </main>
    </div>
  );
}
