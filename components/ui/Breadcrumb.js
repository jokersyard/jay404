export const Breadcrumb = ({ items = [], className = '' }) => {
  return (
    <nav className={`flex items-center space-x-2 ${className}`}>
      {items.map((item, index) => (
        <div key={index} className="flex items-center">
          {index > 0 && <span className="text-slate-500 mx-2">/</span>}
          {item.href ? (
            <a href={item.href} className="text-indigo-400 hover:text-indigo-300">
              {item.label}
            </a>
          ) : (
            <span className="text-slate-400">{item.label}</span>
          )}
        </div>
      ))}
    </nav>
  );
};
