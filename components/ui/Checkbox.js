export const Checkbox = ({ 
  label, 
  className = '', 
  ...props 
}) => {
  return (
    <label className={`flex items-center space-x-2 cursor-pointer ${className}`}>
      <input
        type="checkbox"
        className="w-4 h-4 rounded border-slate-700 bg-slate-900 text-indigo-600 focus:ring-indigo-500"
        {...props}
      />
      {label && <span className="text-slate-300">{label}</span>}
    </label>
  );
};
