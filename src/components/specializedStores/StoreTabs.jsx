const StoreTabs = ({ tabs, activeTab, onTabChange, theme }) => {
  return (
    <div className="sticky top-[88px] z-30 glass px-4 py-2">
      <div className="flex gap-2 overflow-x-auto hide-scrollbar">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => onTabChange(tab.id)}
            className={`flex items-center gap-1.5 px-4 py-2 rounded-full shrink-0 text-sm transition-colors ${
              activeTab === tab.id
                ? 'text-white'
                : 'bg-white/10 text-gray-400'
            }`}
            style={activeTab === tab.id ? { backgroundColor: theme.primary } : {}}
          >
            <span>{tab.icon}</span>
            <span>{tab.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default StoreTabs;
