export const Badge2D = ({ label, variant = 'primary', className = '' }) => {
  const variants = {
    primary: 'bg-indigo-500 text-white',
    success: 'bg-green-500 text-white',
    warning: 'bg-yellow-500 text-black',
    error: 'bg-red-500 text-white',
  };
  return (
    <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${variants[variant]} ${className}`}>
      {label}
    </span>
  );
};
