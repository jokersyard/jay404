export const Hero2 = ({ title, subtitle, ctaText, ctaUrl, className = '' }) => {
  return (
    <div className={`text-center py-20 ${className}`}>
      <h1 className="text-6xl font-bold text-white mb-4">{title}</h1>
      <p className="text-xl text-slate-400 mb-8 max-w-2xl mx-auto">{subtitle}</p>
      {ctaText && (
        <a href={ctaUrl} className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-lg font-semibold">
          {ctaText}
        </a>
      )}
    </div>
  );
};
