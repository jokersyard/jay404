import React from 'react';
import { useMediaQuery } from '../hooks/useMediaQuery';

export const ResponsiveContainer = ({ 
  children, 
  breakpoint = 'md',
  className = '',
}) => {
  const isDesktop = useMediaQuery(`(min-width: ${breakpoint}px)`);

  return (
    <div className={className}>
      {typeof children === 'function' ? children(isDesktop) : children}
    </div>
  );
};
