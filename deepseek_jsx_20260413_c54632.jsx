// components/sections/Projects.js
'use client';

import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { CodeBracketIcon, EyeIcon, GithubIcon } from '@heroicons/react/24/outline';

const projectsData = [
  {
    id: 1,
    title: 'Nexus AI',
    description: 'Real-time AI assistant for developers with code completion and chat interface.',
    image: '/project1.jpg',
    tech: ['Next.js', 'OpenAI', 'Tailwind', 'Redis'],
    category: 'AI',
    demo: 'https://demo.jay404.in/nexus',
    github: 'https://github.com/j404/nexus-ai'
  },
  {
    id: 2,
    title: 'Void Commerce',
    description: 'Headless e-commerce platform with AI product recommendations.',
    image: '/project2.jpg',
    tech: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    category: 'Web',
    demo: 'https://demo.jay404.in/void',
    github: 'https://github.com/j404/void-commerce'
  },
  {
    id: 3,
    title: 'Prompt Forge',
    description: 'Tool for testing, versioning, and sharing LLM prompts with teams.',
    image: '/project3.jpg',
    tech: ['Next.js', 'PostgreSQL', 'Prisma', 'shadcn'],
    category: 'Tools',
    demo: 'https://demo.jay404.in/promptforge',
    github: 'https://github.com/j404/prompt-forge'
  },
  {
    id: 4,
    title: 'NeoGrid',
    description: 'Generative UI playground — describe and generate React components.',
    image: '/project4.jpg',
    tech: ['React', 'GPT-4', 'Tailwind', 'Vite'],
    category: 'Experiments',
    demo: 'https://demo.jay404.in/neogrid',
    github: 'https://github.com/j404/neogrid'
  }
];

const categories = ['All', 'Web', 'AI', 'Tools', 'Experiments'];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('All');
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const filtered = activeCategory === 'All' 
    ? projectsData 
    : projectsData.filter(p => p.category === activeCategory);

  return (
    <section id="projects" ref={ref} className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-8 tracking-tight">
            <span className="gradient-text">/projects</span>
          </h2>

          {/* Filter */}
          <div className="flex flex-wrap gap-2 mb-10">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-1.5 rounded-full text-sm transition-all ${
                  activeCategory === cat
                    ? 'bg-cyan-500 text-black font-medium shadow-lg shadow-cyan-500/30'
                    : 'glass-panel border border-white/10 hover:border-cyan-400/50'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {filtered.map((project, idx) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: idx * 0.1 }}
                className="glass-panel overflow-hidden group hover:border-cyan-500/30 transition-all duration-300"
              >
                <div className="relative h-48 bg-gradient-to-br from-gray-800 to-gray-900 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-3 flex gap-2">
                    {project.tech.map(t => (
                      <span key={t} className="text-[10px] px-2 py-0.5 rounded-full bg-black/50 backdrop-blur text-cyan-300">
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="absolute top-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100 transition">
                    <a href={project.demo} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-black/60 backdrop-blur hover:bg-cyan-500 transition">
                      <EyeIcon className="w-4 h-4" />
                    </a>
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-black/60 backdrop-blur hover:bg-cyan-500 transition">
                      <GithubIcon className="w-4 h-4" />
                    </a>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-gray-400 text-sm mb-4">{project.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-cyan-400">{project.category}</span>
                    <CodeBracketIcon className="w-4 h-4 text-gray-500" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}