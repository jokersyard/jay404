export const TextArea2 = ({ label, placeholder, className = '', ...props }) => {
  return (
    <div className={className}>
      {label && <label className="block text-sm font-medium text-slate-300 mb-2">{label}</label>}
      <textarea
        placeholder={placeholder}
        className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 resize-none"
        {...props}
      />
    </div>
  );
};
