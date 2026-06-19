export const Divider2 = ({ text, className = '' }) => {
  return (
    <div className={`flex items-center gap-4 my-6 ${className}`}>
      <div className="flex-1 h-px bg-slate-700" />
      {text && <span className="text-slate-400 text-sm">{text}</span>}
      <div className="flex-1 h-px bg-slate-700" />
    </div>
  );
};
