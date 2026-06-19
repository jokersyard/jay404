export const Stack = ({ 
  children, 
  gap = 'gap-4',
  className = '',
  ...props 
}) => {
  return (
    <div className={`flex flex-col ${gap} ${className}`} {...props}>
      {children}
    </div>
  );
};
