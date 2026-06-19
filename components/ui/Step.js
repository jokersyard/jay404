export const Step = ({ number, title, description, className = '' }) => {
  return (
    <div className={`flex gap-4 ${className}`}>
      <div className="flex-shrink-0">
        <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-600 text-white font-bold">
          {number}
        </div>
      </div>
      <div>
        <h3 className="text-lg font-semibold text-white">{title}</h3>
        <p className="text-slate-400">{description}</p>
      </div>
    </div>
  );
};
