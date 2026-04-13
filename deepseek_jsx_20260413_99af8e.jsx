// components/sections/Skills.js
'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const skills = {
  'Frontend': ['React', 'Next.js', 'Tailwind', 'TypeScript', 'Framer Motion'],
  'Backend & AI': ['Node.js', 'Python', 'OpenAI API', 'PostgreSQL', 'Redis'],
  'Tools & Workflow': ['Git', 'Vercel', 'Docker', 'Figma', 'VS Code'],
  'Mindset': ['Problem Solving', 'Fast Learning', 'Design Thinking', 'Product Focus']
};

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="skills" ref={ref} className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-8 tracking-tight">
            <span className="gradient-text">/skills</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {Object.entries(skills).map(([category, items], idx) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: idx * 0.1 }}
                className="glass-panel p-6"
              >
                <h3 className="text-lg font-semibold mb-4 text-cyan-400">{category}</h3>
                <div className="flex flex-wrap gap-2">
                  {items.map(skill => (
                    <span key={skill} className="px-3 py-1 text-sm rounded-full bg-white/5 border border-white/10">
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}