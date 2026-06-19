'use client';

import { useScrollPosition } from '../hooks/useScrollPosition';

export const Header = ({ 
  children, 
  sticky = true,
  className = '',
}) => {
  const scrollPosition = useScrollPosition();
  const hasScrolled = scrollPosition > 50;

  return (
    <header
      className={`
        transition-all duration-300 z-40
        ${sticky ? 'fixed top-0 left-0 right-0' : 'relative'}
        ${hasScrolled && sticky ? 'shadow-lg bg-slate-900/95 backdrop-blur' : 'bg-transparent'}
        ${className}
      `}
    >
      {children}
    </header>
  );
};
