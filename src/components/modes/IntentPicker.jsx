import { useApp, intentOptions } from '../../contexts/AppContext';
import BottomSheet from '../common/BottomSheet';
import { Check } from 'lucide-react';

const IntentPicker = () => {
  const { intent, showIntentPicker, toggleIntentPicker, setIntent } = useApp();

  const handleSelect = (intentId) => {
    setIntent(intentId);
  };

  return (
    <BottomSheet
      isOpen={showIntentPicker}
      onClose={toggleIntentPicker}
      title="What brings you here today?"
    >
      <div className="space-y-3">
        {intentOptions.map((option) => {
          const isSelected = intent === option.id;

          return (
            <button
              key={option.id}
              onClick={() => handleSelect(option.id)}
              className={`
                w-full flex items-center gap-4 p-4 rounded-2xl transition-all
                ${isSelected
                  ? 'bg-emerald-500/20 border border-emerald-500/50'
                  : 'bg-white/5 border border-transparent active:bg-white/10'
                }
              `}
            >
              <span className="text-3xl">{option.icon}</span>
              <div className="flex-1 text-left">
                <span className="font-medium text-rez-navy dark:text-white">{option.label}</span>
                <p className="text-sm text-rez-gray-600 dark:text-gray-400">{option.description}</p>
              </div>
              {isSelected && (
                <div className="w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center">
                  <Check className="w-4 h-4 text-rez-navy dark:text-white" />
                </div>
              )}
            </button>
          );
        })}
      </div>

      {intent && (
        <button
          onClick={() => setIntent(null)}
          className="w-full mt-4 py-3 text-sm text-rez-gray-600 dark:text-gray-400 active:text-rez-navy dark:text-white"
        >
          Clear intent
        </button>
      )}
    </BottomSheet>
  );
};

export default IntentPicker;
