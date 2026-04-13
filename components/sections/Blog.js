'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { BookOpenIcon } from '@heroicons/react/24/outline';

const posts = [
  {
    title: 'Building my first AI agent: Lessons learned',
    date: 'Mar 15, 2025',
    excerpt: 'From API calls to autonomous reasoning — what I discovered building a task-executing agent.',
    readTime: '5 min',
    href: '#'
  }
];

export default function Blog() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="blog" ref={ref} className="py-24 px-6 bg-gradient-to-b from-transparent via-white/5 to-transparent">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-8 tracking-tight">
            <span className="gradient-text">/blog</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {posts.map((post, idx) => (
              <motion.a
                key={post.title}
                href={post.href}
                className="glass-panel p-8 group hover:-translate-y-1 transition-transform duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: idx * 0.1 }}
              >
                <div className="flex items-center gap-3 mb-4 text-cyan-300">
                  <BookOpenIcon className="w-5 h-5" />
                  <span className="text-sm uppercase tracking-[0.3em]">Latest Post</span>
                </div>
                <h3 className="text-2xl font-semibold mb-3 group-hover:text-cyan-400 transition-colors">
                  {post.title}
                </h3>
                <p className="text-gray-400 mb-6">{post.excerpt}</p>
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <span>{post.date}</span>
                  <span>{post.readTime}</span>
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
