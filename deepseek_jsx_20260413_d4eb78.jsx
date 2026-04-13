// app/page.js
'use client';

import { useEffect, useState } from 'react';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Projects from '@/components/sections/Projects';
import Products from '@/components/sections/Products';
import Blog from '@/components/sections/Blog';
import Skills from '@/components/sections/Skills';
import Contact from '@/components/sections/Contact';
import Footer from '@/components/Footer';
import ScrollProgress from '@/components/ScrollProgress';
import ParticlesBackground from '@/components/ParticlesBackground';
import CommandPalette from '@/components/CommandPalette';

export default function Home() {
  const [showCommand, setShowCommand] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        setShowCommand(true);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <main className="relative overflow-x-hidden">
      <ParticlesBackground />
      <ScrollProgress />
      <div className="relative z-10">
        <Hero />
        <About />
        <Projects />
        <Products />
        <Blog />
        <Skills />
        <Contact />
        <Footer />
      </div>
      <CommandPalette isOpen={showCommand} onClose={() => setShowCommand(false)} />
    </main>
  );
}