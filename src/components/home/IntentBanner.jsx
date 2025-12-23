import { useApp, intentOptions } from '../../contexts/AppContext';
import { ChevronRight } from 'lucide-react';

const IntentBanner = () => {
  const { intent, toggleIntentPicker } = useApp();

  const currentIntent = intentOptions.find(i => i.id === intent);

  return (
    <button
      onClick={toggleIntentPicker}
      className="mx-4 mb-4 p-4 rounded-2xl bg-gradient-to-r from-emerald-500/20 to-blue-500/20 border border-white/10 flex items-center gap-4"
    >
      <span className="text-3xl">{currentIntent?.icon || '🧭'}</span>
      <div className="flex-1 text-left">
        <p className="text-sm text-rez-gray-600 dark:text-gray-400">What brings you here?</p>
        <p className="font-medium text-rez-navy dark:text-white">
          {currentIntent?.label || 'Set your intent for better recommendations'}
        </p>
      </div>
      <ChevronRight className="w-5 h-5 text-rez-gray-600 dark:text-gray-400" />
    </button>
  );
};

export default IntentBanner;
