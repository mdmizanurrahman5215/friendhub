export default function StatsCard({ title, value, icon }) {
  return (
    <div className="bg-white shadow p-4 rounded-xl flex items-center gap-4">
      <div className="text-2xl">{icon}</div>
      <div>
        <p className="text-gray-500">{title}</p>
        <h2 className="text-xl font-bold">{value}</h2>
      </div>
    </div>
  );
}