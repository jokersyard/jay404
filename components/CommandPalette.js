'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { XMarkIcon, Squares2X2Icon, UserIcon, CodeBracketIcon, RocketLaunchIcon, EnvelopeIcon, BookOpenIcon } from '@heroicons/react/24/outline';

const commands = [
  { name: 'Projects', icon: CodeBracketIcon, href: '#projects' },
  { name: 'About', icon: UserIcon, href: '#about' },
  { name: 'Products', icon: RocketLaunchIcon, href: '#products' },
  { name: 'Blog', icon: BookOpenIcon, href: '#blog' },
  { name: 'Skills', icon: Squares2X2Icon, href: '#skills' },
  { name: 'Contact', icon: EnvelopeIcon, href: '#contact' }
];

export default function CommandPalette({ isOpen, onClose }) {
  const [search, setSearch] = useState('');

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  const filtered = commands.filter(cmd =>
    cmd.name.toLowerCase().includes(search.toLowerCase())
  );

  const handleSelect = (href) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50"
          />
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            className="fixed top-1/4 left-1/2 -translate-x-1/2 w-full max-w-xl z-50"
          >
            <div className="glass-panel border border-cyan-500/30 overflow-hidden">
              <div className="flex items-center gap-3 px-4 py-3 border-b border-white/10">
                <Squares2X2Icon className="w-5 h-5 text-cyan-400" />
                <input
                  type="text"
                  placeholder="Navigate to section... (Ctrl+K)"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="flex-1 bg-transparent outline-none text-gray-200 placeholder-gray-500"
                  autoFocus
                />
                <button onClick={onClose} className="text-gray-400 hover:text-white">
                  <XMarkIcon className="w-5 h-5" />
                </button>
              </div>
              <div className="max-h-80 overflow-y-auto py-2">
                {filtered.map((cmd) => (
                  <button
                    key={cmd.name}
                    onClick={() => handleSelect(cmd.href)}
                    className="w-full flex items-center gap-3 px-4 py-2 hover:bg-white/10 transition-colors text-left"
                  >
                    <cmd.icon className="w-5 h-5 text-cyan-400" />
                    <span>{cmd.name}</span>
                  </button>
                ))}
              </div>
              <div className="px-4 py-2 border-t border-white/10 text-xs text-gray-500 flex justify-between">
                <span>⌘K to open</span>
                <span>ESC to close</span>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
