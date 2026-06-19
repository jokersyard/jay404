export const Timeline = ({ events = [], className = '' }) => {
  return (
    <div className={`space-y-4 ${className}`}>
      {events.map((event, idx) => (
        <div key={idx} className="flex gap-4">
          <div className="w-8 h-8 bg-indigo-600 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
            {idx + 1}
          </div>
          <div className="pt-2">
            <h4 className="font-semibold text-white">{event.title}</h4>
            <p className="text-slate-400 text-sm">{event.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
