export default function StatsCard({ title, value, icon, className = "" }) {
  return (
    <div className="bg-white shadow p-6 rounded-xl flex flex-col items-center gap-4">
       {
        icon && <div className="text-3xl text-[#244D3F]">{icon}</div>
       }
      <div flex className="flex flex-col justify-between items-center">
          <h2 className={`text-4xl font-bold ${className}`}>{value}</h2>
        <p className="text-gray-500 ">{title}</p>
      
      </div>
    </div>
  );
}