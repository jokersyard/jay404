'use client';

import { motion } from 'framer-motion';

export const TextHighlight = ({ 
  children, 
  color = 'indigo',
  className = '',
}) => {
  const colors = {
    indigo: 'text-indigo-400',
    purple: 'text-purple-400',
    pink: 'text-pink-400',
  };

  return (
    <motion.span
      className={`${colors[color]} font-semibold ${className}`}
      whileHover={{ scale: 1.05 }}
    >
      {children}
    </motion.span>
  );
};
