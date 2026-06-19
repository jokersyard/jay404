export const Price = ({ amount, currency = '$', period = 'month', className = '' }) => {
  return (
    <div className={`text-center ${className}`}>
      <div className="text-4xl font-bold text-white">
        {currency}
        {amount}
      </div>
      <div className="text-slate-400">per {period}</div>
    </div>
  );
};
