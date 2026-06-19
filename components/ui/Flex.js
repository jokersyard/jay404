export const Flex = ({ 
  children, 
  direction = 'row',
  gap = 'gap-4',
  align = 'items-center',
  justify = 'justify-start',
  className = '',
  ...props 
}) => {
  const directionClass = direction === 'col' ? 'flex-col' : 'flex-row';

  return (
    <div className={`flex ${directionClass} ${gap} ${align} ${justify} ${className}`} {...props}>
      {children}
    </div>
  );
};
