import { useApp } from '../../contexts/AppContext';
import BottomSheet from '../common/BottomSheet';
import Button from '../common/Button';
import { Info } from 'lucide-react';

const filterOptions = [
  {
    id: 'halal',
    icon: '🕌',
    label: 'Halal Mode',
    description: 'Only halal-certified products and stores are shown.',
    color: 'emerald'
  },
  {
    id: 'vegan',
    icon: '🌱',
    label: 'Vegan Mode',
    description: 'Plant-based products only. No animal ingredients.',
    color: 'green'
  },
  {
    id: 'vegetarian',
    icon: '🥗',
    label: 'Vegetarian Mode',
    description: 'Vegetarian-friendly products and food only.',
    color: 'lime'
  },
  {
    id: 'sawan',
    icon: '🕉️',
    label: 'Sawan Mode',
    description: 'Religious-friendly items for the Sawan period.',
    color: 'orange'
  },
  {
    id: 'adult',
    icon: '🔞',
    label: 'Adult Mode (18+)',
    description: 'Age-restricted products are visible.',
    color: 'red',
    requiresVerification: true
  },
  {
    id: 'is60Min',
    icon: '⚡',
    label: '60-Min Delivery',
    description: 'Only show stores with express delivery.',
    color: 'amber'
  }
];

const FilterSheet = () => {
  const { filters, showFilterSheet, toggleFilterSheet, toggleFilter, dispatch } = useApp();

  const activeFiltersCount = Object.values(filters).filter(Boolean).length;

  const handleClearAll = () => {
    dispatch({ type: 'CLEAR_FILTERS' });
  };

  return (
    <BottomSheet
      isOpen={showFilterSheet}
      onClose={toggleFilterSheet}
      title="Filter your experience"
    >
      <p className="text-gray-400 text-sm mb-4">
        Modes help personalize your experience based on beliefs, preferences, and safety.
      </p>

      {activeFiltersCount > 0 && (
        <button
          onClick={handleClearAll}
          className="text-sm text-red-400 mb-4"
        >
          Clear all filters ({activeFiltersCount})
        </button>
      )}

      <div className="space-y-3">
        {filterOptions.map((filter) => {
          const isActive = filters[filter.id];

          return (
            <button
              key={filter.id}
              onClick={() => toggleFilter(filter.id)}
              className={`
                w-full flex items-center gap-4 p-4 rounded-2xl transition-all
                ${isActive
                  ? `bg-${filter.color}-500/20 border border-${filter.color}-500/50`
                  : 'bg-white/5 border border-transparent'
                }
              `}
              style={{
                backgroundColor: isActive ? `var(--color-${filter.color}, rgba(255,255,255,0.05))` : undefined
              }}
            >
              <span className="text-2xl">{filter.icon}</span>
              <div className="flex-1 text-left">
                <div className="flex items-center gap-2">
                  <span className="font-medium text-white">{filter.label}</span>
                  {filter.requiresVerification && (
                    <Info className="w-4 h-4 text-gray-500" />
                  )}
                </div>
                <p className="text-xs text-gray-400 mt-0.5">{filter.description}</p>
              </div>

              {/* Toggle */}
              <div className={`
                w-12 h-7 rounded-full p-1 transition-colors
                ${isActive ? 'bg-emerald-500' : 'bg-white/20'}
              `}>
                <div className={`
                  w-5 h-5 bg-white rounded-full shadow-md transition-transform
                  ${isActive ? 'translate-x-5' : 'translate-x-0'}
                `} />
              </div>
            </button>
          );
        })}
      </div>

      <div className="mt-6 p-4 rounded-2xl bg-white/5 flex items-start gap-3">
        <Info className="w-5 h-5 text-gray-400 shrink-0 mt-0.5" />
        <p className="text-xs text-gray-400">
          When a mode is active, incompatible products and stores are hidden.
          You'll see a tooltip explaining why items are hidden.
        </p>
      </div>

      <div className="mt-6">
        <Button variant="primary" fullWidth onClick={toggleFilterSheet}>
          Apply Filters
        </Button>
      </div>
    </BottomSheet>
  );
};

export default FilterSheet;
