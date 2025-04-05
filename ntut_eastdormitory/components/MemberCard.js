export default function MemberCard({ name, role, contact }) {
    return (
      <div className="p-4 border rounded-xl shadow">
        <h2 className="text-xl font-semibold">{name}</h2>
        <p>職位：{role}</p>
        <p>Email：{contact}</p>
      </div>
    );
  }
  