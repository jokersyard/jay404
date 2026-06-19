'use client';

import { motion } from 'framer-motion';

export const Toast = ({ 
  message, 
  type = 'info',
  className = '',
}) => {
  const types = {
    success: 'bg-green-600 text-white',
    error: 'bg-red-600 text-white',
    info: 'bg-blue-600 text-white',
    warning: 'bg-yellow-600 text-white',
  };

  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: 100, opacity: 0 }}
      className={`px-4 py-3 rounded-lg ${types[type]} ${className}`}
    >
      {message}
    </motion.div>
  );
};
