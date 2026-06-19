export const Badge = ({ 
  children, 
  variant = 'default',
  className = '',
  ...props 
}) => {
  const variants = {
    default: 'bg-slate-700 text-slate-200',
    primary: 'bg-indigo-600/20 text-indigo-400 border border-indigo-600/30',
    success: 'bg-green-600/20 text-green-400 border border-green-600/30',
    warning: 'bg-yellow-600/20 text-yellow-400 border border-yellow-600/30',
    danger: 'bg-red-600/20 text-red-400 border border-red-600/30',
  };

  return (
    <span
      className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </span>
  );
};
