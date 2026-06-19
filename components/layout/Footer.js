export const Footer = ({ 
  columns = [],
  copyright,
  className = '',
}) => {
  return (
    <footer className={`bg-slate-900 border-t border-slate-800 py-12 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {columns.map((col, idx) => (
            <div key={idx}>
              <h3 className="font-bold text-white mb-4">{col.title}</h3>
              <ul className="space-y-2">
                {col.links.map((link, linkIdx) => (
                  <li key={linkIdx}>
                    <a href={link.url} className="text-slate-400 hover:text-white transition-colors">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        {copyright && (
          <div className="border-t border-slate-800 pt-8 text-center text-slate-400">
            {copyright}
          </div>
        )}
      </div>
    </footer>
  );
};
