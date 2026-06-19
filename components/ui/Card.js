export const Card = ({ 
  children, 
  className = '', 
  hover = true,
  ...props 
}) => {
  return (
    <div
      className={`
        bg-slate-800 rounded-xl p-6 border border-slate-700
        ${hover ? 'hover:border-indigo-500 transition-all duration-300 hover:shadow-xl hover:shadow-indigo-500/20' : ''}
        ${className}
      `}
      {...props}
    >
      {children}
    </div>
  );
};
