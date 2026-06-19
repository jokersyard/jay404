export const Container = ({ 
  children, 
  className = '', 
  size = 'md',
  ...props 
}) => {
  const sizes = {
    sm: 'max-w-3xl',
    md: 'max-w-5xl',
    lg: 'max-w-7xl',
    xl: 'max-w-full',
  };

  return (
    <div
      className={`mx-auto ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};
