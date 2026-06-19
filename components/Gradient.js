'use client';

import { motion } from 'framer-motion';

export const Gradient = ({ 
  children, 
  from = 'from-indigo-500',
  to = 'to-purple-500',
  className = '',
}) => {
  return (
    <div className={`bg-gradient-to-r ${from} ${to} ${className}`}>
      {children}
    </div>
  );
};
