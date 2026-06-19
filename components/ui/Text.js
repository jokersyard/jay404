export const Text = ({ 
  children, 
  variant = 'body',
  className = '',
  ...props 
}) => {
  const variants = {
    body: 'text-base text-slate-300',
    small: 'text-sm text-slate-400',
    large: 'text-lg text-slate-200',
    muted: 'text-slate-500',
  };

  return (
    <p className={`${variants[variant]} ${className}`} {...props}>
      {children}
    </p>
  );
};
