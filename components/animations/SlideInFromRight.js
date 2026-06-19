'use client';

import { motion } from 'framer-motion';

export const SlideInFromRight = ({ 
  children, 
  delay = 0,
  className = '',
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
