'use client';

import { motion } from 'framer-motion';

export const Tooltip = ({ 
  text, 
  children,
  position = 'top',
}) => {
  const positions = {
    top: 'bottom-full mb-2',
    bottom: 'top-full mt-2',
    left: 'right-full mr-2',
    right: 'left-full ml-2',
  };

  return (
    <div className="group relative inline-block">
      {children}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileHover={{ opacity: 1, scale: 1 }}
        className={`absolute ${positions[position]} bg-slate-900 text-white text-sm px-3 py-1 rounded whitespace-nowrap pointer-events-none group-hover:pointer-events-auto`}
      >
        {text}
      </motion.div>
    </div>
  );
};
