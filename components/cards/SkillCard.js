'use client';

import { motion } from 'framer-motion';
import { Card } from '../ui/Card';
import { Badge } from '../ui/Badge';

export const SkillCard = ({ 
  category, 
  skills = [],
  icon,
  index = 0,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <Card>
        <div className="flex items-center space-x-3 mb-4">
          {icon && <span className="text-3xl">{icon}</span>}
          <h3 className="text-xl font-bold text-white">{category}</h3>
        </div>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill) => (
            <Badge key={skill} variant="primary">
              {skill}
            </Badge>
          ))}
        </div>
      </Card>
    </motion.div>
  );
};
