'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section id="about" ref={ref} className="py-24 px-6 relative">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-8 tracking-tight">
            <span className="gradient-text">/about</span>
          </h2>
          <div className="glass-panel p-8 md:p-10 space-y-5 text-gray-300 leading-relaxed">
            <p>
              I'm a <span className="text-cyan-400 font-medium">beginner developer with an obsession for the future</span> — 
              AI, automation, and building things that feel like magic. I believe the best way to learn is by 
              creating real, usable products.
            </p>
            <p>
              My journey started with curiosity: how do websites work? How can I make a computer think? 
              Now I'm deep into Next.js, React, and building AI-powered tools. Every project is a step 
              toward mastering the craft.
            </p>
            <p>
              I'm not waiting for permission — I build, break, learn, and iterate. Ambitious, honest, 
              and always excited about the next challenge. Let's build something that matters.
            </p>
            <div className="pt-4 flex flex-wrap gap-3">
              {['Curiosity-driven', 'AI enthusiast', 'Builder mindset', 'Future thinker'].map((trait) => (
                <span key={trait} className="px-3 py-1 text-sm rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300">
                  {trait}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
