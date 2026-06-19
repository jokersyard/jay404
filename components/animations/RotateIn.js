'use client';

import { motion } from 'framer-motion';

export const RotateIn = ({ 
  children, 
  delay = 0,
  className = '',
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, rotate: -10 }}
      whileInView={{ opacity: 1, rotate: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
