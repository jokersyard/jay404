// components/sections/Hero.js
'use client';

import { motion } from 'framer-motion';
import { ArrowRightIcon, EnvelopeIcon, CodeBracketIcon } from '@heroicons/react/24/outline';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/5 via-transparent to-transparent pointer-events-none" />
      <div className="max-w-6xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tighter">
            <span className="gradient-text">J404</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-4 font-light tracking-wide">
            Building ideas into <span className="text-cyan-400 font-medium">digital reality</span>
          </p>
          <p className="text-gray-400 max-w-2xl mx-auto mb-10 text-lg">
            Software developer & AI builder crafting futuristic web experiences, intelligent tools, and experimental products.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full font-medium text-white shadow-lg shadow-purple-500/20 hover:shadow-purple-500/40 transition-all"
            >
              View Projects
              <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-1 transition" />
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 px-8 py-3 glass-panel border border-white/20 rounded-full font-medium hover:border-cyan-400/50 transition-all"
            >
              <EnvelopeIcon className="w-4 h-4" />
              Contact Me
            </motion.a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:block"
        >
          <div className="w-6 h-10 border-2 border-gray-500 rounded-full flex justify-center">
            <div className="w-1 h-2 bg-cyan-400 rounded-full mt-2 animate-bounce" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}