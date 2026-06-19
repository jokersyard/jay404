export const MainLayout = ({ 
  children, 
  header,
  footer,
  className = '',
}) => {
  return (
    <div className="flex flex-col min-h-screen">
      {header && <header>{header}</header>}
      <main className={`flex-1 ${className}`}>
        {children}
      </main>
      {footer && <footer>{footer}</footer>}
    </div>
  );
};
