export const ProgressBar = ({ 
  progress = 0, 
  color = 'indigo',
  className = '',
}) => {
  const colors = {
    indigo: 'bg-indigo-500',
    green: 'bg-green-500',
    red: 'bg-red-500',
  };

  return (
    <div className={`w-full bg-slate-700 rounded-full h-2 overflow-hidden ${className}`}>
      <div
        className={`h-full ${colors[color]} transition-all duration-300`}
        style={{ width: `${progress}%` }}
      />
    </div>
  );
};
