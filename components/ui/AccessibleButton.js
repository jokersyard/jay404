export const AccessibleButton = ({ 
  children, 
  ariaLabel,
  ariaPressed,
  ariaExpanded,
  className = '', 
  ...props 
}) => {
  return (
    <button
      className={`focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 rounded ${className}`}
      aria-label={ariaLabel}
      aria-pressed={ariaPressed}
      aria-expanded={ariaExpanded}
      {...props}
    >
      {children}
    </button>
  );
};
