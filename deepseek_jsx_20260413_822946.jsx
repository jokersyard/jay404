// components/sections/Products.js
'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { RocketLaunchIcon, SparklesIcon, CpuChipIcon } from '@heroicons/react/24/outline';

const products = [
  {
    name: 'Lumina AI',
    description: 'Personalized learning companion that adapts to your coding journey.',
    status: 'Coming 2025',
    icon: SparklesIcon
  },
  {
    name: 'Nexus Forge',
    description: 'Low-code platform for building internal AI tools in minutes.',
    status: 'Early Access',
    icon: CpuChipIcon
  },
  {
    name: 'Void OS',
    description: 'Developer workspace with AI-assisted project scaffolding.',
    status: 'Prototype',
    icon: RocketLaunchIcon
  }
];

export default function Products() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section id="products" ref={ref} className="py-24 px-6 bg-gradient-to-b from-transparent via-white/5 to-transparent">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-8 tracking-tight">
            <span className="gradient-text">/products</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {products.map((product, idx) => (
              <motion.div
                key={product.name}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: idx * 0.1 }}
                className="glass-panel p-6 text-center hover:scale-[1.02] transition-transform duration-300"
              >
                <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-gradient-to-br from-cyan-500/20 to-purple-500/20 flex items-center justify-center">
                  <product.icon className="w-7 h-7 text-cyan-400" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                <p className="text-gray-400 text-sm mb-4">{product.description}</p>
                <span className="text-xs px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">
                  {product.status}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}