// components/Footer.js
export default function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-white/5">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
        <div>
          <span className="gradient-text font-medium">J404</span> — Building ideas into digital reality
        </div>
        <div className="flex gap-6">
          <a href="#hero" className="hover:text-cyan-400 transition">Home</a>
          <a href="#projects" className="hover:text-cyan-400 transition">Work</a>
          <a href="#contact" className="hover:text-cyan-400 transition">Contact</a>
        </div>
        <div>© 2025 J404. All rights reserved.</div>
      </div>
    </footer>
  );
}