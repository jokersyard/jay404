export const Alert = ({ 
  children, 
  variant = 'info',
  title,
  closeable = false,
  onClose = () => {},
  className = '',
}) => {
  const variants = {
    info: 'bg-blue-50 border-blue-200 text-blue-800',
    success: 'bg-green-50 border-green-200 text-green-800',
    warning: 'bg-yellow-50 border-yellow-200 text-yellow-800',
    error: 'bg-red-50 border-red-200 text-red-800',
  };

  return (
    <div className={`border rounded p-4 ${variants[variant]} ${className}`}>
      {title && <h3 className="font-bold mb-1">{title}</h3>}
      <div>{children}</div>
      {closeable && (
        <button onClick={onClose} className="text-sm underline mt-2">
          Dismiss
        </button>
      )}
    </div>
  );
};
