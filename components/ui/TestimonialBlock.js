export const Testimonial = ({ quote, author, role, className = '' }) => {
  return (
    <blockquote className={`bg-slate-800 p-6 rounded-lg italic border-l-4 border-indigo-500 ${className}`}>
      <p className="text-slate-300 mb-4">"{quote}"</p>
      <footer className="text-sm">
        <strong className="text-white">{author}</strong>
        <p className="text-slate-400">{role}</p>
      </footer>
    </blockquote>
  );
};
