export const Section = ({ 
  children, 
  className = '', 
  id = '',
  ...props 
}) => {
  return (
    <section
      id={id}
      className={`py-20 px-4 sm:px-6 lg:px-8 ${className}`}
      {...props}
    >
      {children}
    </section>
  );
};
