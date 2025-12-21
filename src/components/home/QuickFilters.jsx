import { useApp } from '../../contexts/AppContext';
import { Zap } from 'lucide-react';

const quickFilters = [
  { id: 'halal', icon: '🕌', label: 'Halal' },
  { id: 'vegan', icon: '🌱', label: 'Vegan' },
  { id: 'is60Min', icon: null, iconComponent: Zap, label: '60 min' },
  { id: 'vegetarian', icon: '🥗', label: 'Veg' },
];

const QuickFilters = () => {
  const { filters, toggleFilter, toggleVibePicker, vibe } = useApp();

  return (
    <div className="flex gap-2 px-4 py-3 overflow-x-auto hide-scrollbar">
      {quickFilters.map((filter) => {
        const isActive = filters[filter.id];

        return (
          <button
            key={filter.id}
            onClick={() => toggleFilter(filter.id)}
            className={`
              flex items-center gap-1.5 px-3 py-2 rounded-full shrink-0 transition-all
              ${isActive
                ? 'bg-emerald-500/20 border border-emerald-500/50 text-emerald-400'
                : 'bg-white/10 border border-transparent text-gray-300'
              }
            `}
          >
            {filter.icon ? (
              <span className="text-sm">{filter.icon}</span>
            ) : filter.iconComponent ? (
              <filter.iconComponent className="w-4 h-4" />
            ) : null}
            <span className="text-sm font-medium">{filter.label}</span>
          </button>
        );
      })}

      {/* Vibe Button */}
      <button
        onClick={toggleVibePicker}
        className={`
          flex items-center gap-1.5 px-3 py-2 rounded-full shrink-0 transition-all
          ${vibe
            ? 'bg-purple-500/20 border border-purple-500/50 text-purple-400'
            : 'bg-white/10 border border-transparent text-gray-300'
          }
        `}
      >
        <span className="text-sm">✨</span>
        <span className="text-sm font-medium">{vibe ? 'Vibe On' : 'Set Vibe'}</span>
      </button>
    </div>
  );
};

export default QuickFilters;
