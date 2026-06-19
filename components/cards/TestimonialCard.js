'use client';

import { motion } from 'framer-motion';
import { Card } from '../ui/Card';

export const TestimonialCard = ({ 
  quote, 
  author,
  role,
  image,
  index = 0,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <Card>
        <p className="text-slate-300 italic mb-4">"{quote}"</p>
        <div className="flex items-center space-x-3">
          {image && (
            <img src={image} alt={author} className="w-10 h-10 rounded-full" />
          )}
          <div>
            <p className="font-semibold text-white">{author}</p>
            <p className="text-sm text-slate-400">{role}</p>
          </div>
        </div>
      </Card>
    </motion.div>
  );
};
