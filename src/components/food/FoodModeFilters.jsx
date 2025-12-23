import { useState } from 'react';
import { Info } from 'lucide-react';
import { foodModes } from '../../data/foodData';

const FoodModeFilters = ({ activeModes, onModeChange }) => {
  const [showTooltip, setShowTooltip] = useState(null);

  const getModeDescription = (modeId) => {
    switch (modeId) {
      case 'halal':
        return 'Shows only Halal-certified restaurants and items';
      case 'vegetarian':
        return 'Shows only pure vegetarian options';
      case 'vegan':
        return 'Shows only plant-based, dairy-free options';
      case 'adult':
        return 'Shows venues with alcohol (18+ verification required)';
      default:
        return '';
    }
  };

  const handleToggle = (modeId) => {
    if (activeModes.includes(modeId)) {
      onModeChange(activeModes.filter((m) => m !== modeId));
    } else {
      onModeChange([...activeModes, modeId]);
    }
  };

  return (
    <div className="flex gap-2 overflow-x-auto hide-scrollbar py-1">
      {foodModes.map((mode) => {
        const isActive = activeModes.includes(mode.id);
        const colorClass = {
          emerald: isActive ? 'bg-emerald-500/20 border-emerald-500/50 text-emerald-400' : '',
          green: isActive ? 'bg-green-500/20 border-green-500/50 text-green-400' : '',
          lime: isActive ? 'bg-lime-500/20 border-lime-500/50 text-lime-400' : '',
          red: isActive ? 'bg-red-500/20 border-red-500/50 text-red-400' : '',
        }[mode.color];

        return (
          <div key={mode.id} className="relative shrink-0">
            <button
              onClick={() => handleToggle(mode.id)}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full border transition-colors ${
                isActive
                  ? colorClass
                  : 'bg-white/5 border-white/10 text-rez-gray-600 dark:text-gray-400'
              }`}
            >
              <span className="text-sm">{mode.icon}</span>
              <span className="text-sm">{mode.label}</span>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setShowTooltip(showTooltip === mode.id ? null : mode.id);
                }}
                className="p-0.5"
              >
                <Info className="w-3 h-3 text-rez-gray-600 dark:text-gray-500" />
              </button>
            </button>

            {/* Tooltip */}
            {showTooltip === mode.id && (
              <div className="absolute top-full left-0 mt-2 z-50 w-48 p-2 rounded-lg bg-rez-gray-100 dark:bg-[#1C1C1E] border border-white/10 shadow-xl">
                <p className="text-xs text-rez-gray-700 dark:text-gray-300">{getModeDescription(mode.id)}</p>
                <button
                  onClick={() => setShowTooltip(null)}
                  className="text-[10px] text-emerald-400 mt-1"
                >
                  Got it
                </button>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default FoodModeFilters;
