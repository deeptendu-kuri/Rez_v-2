import { useApp, vibeOptions } from '../../contexts/AppContext';
import BottomSheet from '../common/BottomSheet';

const VibePicker = () => {
  const { vibe, showVibePicker, toggleVibePicker, setVibe } = useApp();

  const handleSelect = (vibeId) => {
    setVibe(vibeId === vibe ? null : vibeId);
  };

  return (
    <BottomSheet
      isOpen={showVibePicker}
      onClose={toggleVibePicker}
      title="Set the mood"
    >
      <p className="text-gray-400 text-sm mb-6">
        Choose your vibe and we'll match your experience
      </p>

      <div className="grid grid-cols-3 gap-3">
        {vibeOptions.map((option) => {
          const isSelected = vibe === option.id;

          return (
            <button
              key={option.id}
              onClick={() => handleSelect(option.id)}
              className={`
                flex flex-col items-center gap-2 p-4 rounded-2xl transition-all
                ${isSelected
                  ? 'ring-2 ring-offset-2 ring-offset-[#1C1C1E]'
                  : 'bg-white/5 active:bg-white/10'
                }
              `}
              style={{
                backgroundColor: isSelected ? `${option.color}20` : undefined,
                ringColor: isSelected ? option.color : undefined
              }}
            >
              <span className="text-4xl">{option.icon}</span>
              <span className="text-sm font-medium text-white">{option.label}</span>
            </button>
          );
        })}
      </div>

      {vibe && (
        <div className="mt-6 p-4 rounded-2xl bg-white/5 text-center">
          <p className="text-sm text-gray-300">
            {vibeOptions.find(v => v.id === vibe)?.icon} Feeling{' '}
            <span className="font-medium text-white">
              {vibeOptions.find(v => v.id === vibe)?.label}
            </span>
            ? Here's what matches your vibe.
          </p>
        </div>
      )}
    </BottomSheet>
  );
};

export default VibePicker;
