export const Rating = ({ 
  value = 0, 
  maxValue = 5,
  onRate = () => {},
  className = '',
}) => {
  return (
    <div className={`flex gap-1 ${className}`}>
      {Array.from({ length: maxValue }).map((_, i) => (
        <button
          key={i}
          onClick={() => onRate(i + 1)}
          className={`text-2xl transition-colors ${
            i < value ? 'text-yellow-400' : 'text-gray-400'
          }`}
        >
          ★
        </button>
      ))}
    </div>
  );
};
