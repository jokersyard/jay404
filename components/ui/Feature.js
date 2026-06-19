export const Feature = ({ icon, title, description, className = '' }) => {
  return (
    <div className={`text-center p-6 ${className}`}>
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
      <p className="text-slate-400">{description}</p>
    </div>
  );
};
