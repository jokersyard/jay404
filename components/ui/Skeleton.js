export const Skeleton = ({ 
  variant = 'text', 
  width = '100%', 
  height = '20px',
  className = '',
}) => {
  return (
    <div
      className={`bg-slate-800 rounded animate-pulse ${className}`}
      style={{ width, height }}
    />
  );
};
