'use client';

import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { EnvelopeIcon, LinkIcon, GlobeAltIcon, ShareIcon, PaperAirplaneIcon } from '@heroicons/react/24/outline';

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formState);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section id="contact" ref={ref} className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-8 tracking-tight">
            <span className="gradient-text">/contact</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="glass-panel p-6 space-y-6">
              <p className="text-gray-300">
                Let's build something extraordinary. Whether it's a project, startup idea, or just a conversation about the future — reach out.
              </p>
              <div className="flex gap-4">
                <a href="https://github.com/j404" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full glass-panel hover:text-cyan-400 transition">
                  <LinkIcon className="w-5 h-5" />
                </a>
                <a href="https://twitter.com/j404" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full glass-panel hover:text-cyan-400 transition">
                  <GlobeAltIcon className="w-5 h-5" />
                </a>
                <a href="https://linkedin.com/in/j404" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full glass-panel hover:text-cyan-400 transition">
                  <ShareIcon className="w-5 h-5" />
                </a>
                <a href="mailto:hello@jay404.in" className="p-3 rounded-full glass-panel hover:text-cyan-400 transition">
                  <EnvelopeIcon className="w-5 h-5" />
                </a>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="glass-panel p-6 space-y-4">
              <input
                type="text"
                placeholder="Name"
                value={formState.name}
                onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 focus:border-cyan-400 outline-none transition"
                required
              />
              <input
                type="email"
                placeholder="Email"
                value={formState.email}
                onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 focus:border-cyan-400 outline-none transition"
                required
              />
              <textarea
                rows={4}
                placeholder="Message"
                value={formState.message}
                onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 focus:border-cyan-400 outline-none transition resize-none"
                required
              />
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full flex items-center justify-center gap-2 py-3 rounded-lg bg-gradient-to-r from-cyan-500 to-purple-600 font-medium"
              >
                Send Message
                <PaperAirplaneIcon className="w-4 h-4" />
              </motion.button>
              {submitted && (
                <p className="text-center text-green-400 text-sm">Message sent! I'll get back to you soon.</p>
              )}
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
