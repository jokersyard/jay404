export const Heading = ({ 
  level = 1, 
  children, 
  className = '',
  ...props 
}) => {
  const Tag = `h${level}`;
  const sizes = {
    1: 'text-4xl sm:text-5xl lg:text-6xl',
    2: 'text-3xl sm:text-4xl lg:text-5xl',
    3: 'text-2xl sm:text-3xl lg:text-4xl',
    4: 'text-xl sm:text-2xl lg:text-3xl',
  };

  return (
    <Tag
      className={`font-bold text-white ${sizes[level] || sizes[1]} ${className}`}
      {...props}
    >
      {children}
    </Tag>
  );
};
