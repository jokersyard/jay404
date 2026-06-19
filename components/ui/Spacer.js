export const Spacer = ({ size = 'md', vertical = true, className = '' }) => {
  const sizes = {
    xs: 'p-2',
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8',
    xl: 'p-12',
  };

  return <div className={`${sizes[size]} ${className}`} />;
};
