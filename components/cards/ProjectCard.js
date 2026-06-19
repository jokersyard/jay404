'use client';

import { motion } from 'framer-motion';
import { Card } from './ui/Card';
import { Badge } from './ui/Badge';

export const ProjectCard = ({ 
  title, 
  description, 
  technologies = [],
  link,
  image,
  index = 0,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <Card className="overflow-hidden group">
        {image && (
          <div className="h-48 bg-gradient-to-br from-indigo-600 to-purple-600 overflow-hidden mb-4">
            <img src={image} alt={title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />
          </div>
        )}
        <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
        <p className="text-slate-400 text-sm mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech) => (
            <Badge key={tech} variant="primary">
              {tech}
            </Badge>
          ))}
        </div>
        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-indigo-400 hover:text-indigo-300 text-sm font-medium transition-colors"
          >
            View Project →
          </a>
        )}
      </Card>
    </motion.div>
  );
};
