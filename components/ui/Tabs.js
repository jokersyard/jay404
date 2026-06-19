export const Tabs = ({ 
  tabs = [], 
  defaultTab = 0,
  className = '',
}) => {
  const [activeTab, setActiveTab] = React.useState(defaultTab);

  return (
    <div className={className}>
      <div className="flex border-b border-slate-700">
        {tabs.map((tab, index) => (
          <button
            key={index}
            onClick={() => setActiveTab(index)}
            className={`px-4 py-2 font-medium transition-colors ${
              activeTab === index
                ? 'border-b-2 border-indigo-500 text-indigo-500'
                : 'text-slate-400 hover:text-slate-300'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="mt-4">{tabs[activeTab]?.content}</div>
    </div>
  );
};
