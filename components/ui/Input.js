export const Input = ({ 
  className = '', 
  error = false,
  ...props 
}) => {
  return (
    <input
      className={`
        w-full px-4 py-2 bg-slate-900 border rounded-lg
        border-slate-700 text-white placeholder-slate-400
        focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500
        transition-colors duration-200
        ${error ? 'border-red-500 focus:ring-red-500' : ''}
        ${className}
      `}
      {...props}
    />
  );
};
