'use client';

import { motion } from 'framer-motion';

export const ScaleIn = ({ 
  children, 
  delay = 0,
  className = '',
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
