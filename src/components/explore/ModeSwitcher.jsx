import { useApp } from '../../contexts/AppContext';

const modes = [
  { id: 'all', label: 'All', icon: '🌍', description: 'Everything' },
  { id: 'halal', label: 'Halal', icon: '☪️', description: 'Halal only' },
  { id: 'vegan', label: 'Vegan', icon: '🌱', description: 'Plant-based' },
  { id: 'vegetarian', label: 'Veg', icon: '🥗', description: 'Vegetarian' },
  { id: 'adult', label: 'Adult', icon: '🔞', description: 'Age-gated' },
  { id: 'occasion', label: 'Occasion', icon: '🎉', description: 'Event-based' },
  { id: 'vibes', label: 'Vibes', icon: '💫', description: 'Mood-based' },
  { id: 'prive', label: 'Privé', icon: '💎', description: 'Exclusive' },
];

const ModeSwitcher = () => {
  const { globalMode, setGlobalMode } = useApp();

  return (
    <div className="sticky top-[120px] z-40 glass border-b border-rez-gray-200 dark:border-white/10">
      <div className="flex gap-1 px-4 py-2 overflow-x-auto hide-scrollbar">
        {modes.map((mode) => (
          <button
            key={mode.id}
            onClick={() => setGlobalMode(mode.id)}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full shrink-0 transition-all ${
              globalMode === mode.id
                ? 'bg-rez-green-500 text-white shadow-rez-green'
                : 'bg-white dark:bg-white/10 text-rez-gray-700 dark:text-gray-300 border border-rez-gray-200 dark:border-white/10'
            }`}
          >
            <span className="text-sm">{mode.icon}</span>
            <span className="text-xs font-medium">{mode.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default ModeSwitcher;
