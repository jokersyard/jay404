export const Stats = ({ items = [], className = '' }) => {
  return (
    <div className={`grid grid-cols-1 md:grid-cols-4 gap-6 ${className}`}>
      {items.map((item, idx) => (
        <div key={idx} className="bg-slate-800 p-6 rounded-lg text-center">
          <div className="text-3xl font-bold text-indigo-500 mb-2">{item.value}</div>
          <div className="text-slate-400">{item.label}</div>
        </div>
      ))}
    </div>
  );
};
