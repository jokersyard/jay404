export const AccessibleLink = ({ 
  children, 
  skipText = false,
  className = '', 
  ...props 
}) => {
  return (
    <>
      {skipText && (
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:top-0 focus:left-0 bg-indigo-600 text-white px-4 py-2 rounded"
        >
          Skip to main content
        </a>
      )}
      <a
        className={`focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 rounded ${className}`}
        {...props}
      >
        {children}
      </a>
    </>
  );
};
