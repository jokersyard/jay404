export const Select = ({ 
  options = [], 
  label,
  error,
  className = '', 
  ...props 
}) => {
  return (
    <div>
      {label && (
        <label className="block text-sm font-medium text-slate-200 mb-2">
          {label}
        </label>
      )}
      <select
        className={`
          w-full px-4 py-2 bg-slate-900 border rounded-lg
          border-slate-700 text-white
          focus:outline-none focus:border-indigo-500
          ${error ? 'border-red-500' : ''}
          ${className}
        `}
        {...props}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};
