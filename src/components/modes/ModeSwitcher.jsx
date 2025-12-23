import { useApp, globalModeOptions } from '../../contexts/AppContext';
import BottomSheet from '../common/BottomSheet';
import { Check, Lock } from 'lucide-react';
import { useUser } from '../../contexts/UserContext';

const ModeSwitcher = () => {
  const { globalMode, showModeSwitcher, toggleModeSwitcher, setGlobalMode } = useApp();
  const { user } = useUser();

  const handleModeSelect = (modeId) => {
    if (modeId === 'prive' && !user.isPriveMember) {
      // Show locked state
      return;
    }
    setGlobalMode(modeId);
    toggleModeSwitcher();
  };

  return (
    <BottomSheet
      isOpen={showModeSwitcher}
      onClose={toggleModeSwitcher}
      title="Shop your way"
    >
      <p className="text-rez-gray-600 dark:text-gray-400 text-sm mb-6">
        Switch between different ReZ experiences
      </p>

      <div className="space-y-3">
        {globalModeOptions.map((mode) => {
          const isSelected = globalMode === mode.id;
          const isLocked = mode.id === 'prive' && !user.isPriveMember;

          return (
            <button
              key={mode.id}
              onClick={() => handleModeSelect(mode.id)}
              disabled={isLocked}
              className={`
                w-full flex items-center gap-4 p-4 rounded-2xl transition-all
                ${isSelected
                  ? 'bg-emerald-500/20 border border-emerald-500/50'
                  : 'bg-white/5 border border-transparent active:bg-white/10'
                }
                ${isLocked ? 'opacity-60' : ''}
              `}
            >
              <span className="text-3xl">{mode.icon}</span>
              <div className="flex-1 text-left">
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-rez-navy dark:text-white">{mode.label}</span>
                  {isLocked && (
                    <Lock className="w-4 h-4 text-rez-gray-600 dark:text-gray-500" />
                  )}
                </div>
                <p className="text-sm text-rez-gray-600 dark:text-gray-400">{mode.description}</p>
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

      {/* Privé Unlock Progress */}
      {!user.isPriveMember && (
        <div className="mt-6 p-4 rounded-2xl bg-purple-500/10 border border-purple-500/20">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-purple-400">Unlock Privé</span>
            <span className="text-sm text-rez-gray-600 dark:text-gray-400">{user.priveScore}%</span>
          </div>
          <div className="h-2 bg-rez-gray-100 dark:bg-white/10 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full transition-all"
              style={{ width: `${user.priveScore}%` }}
            />
          </div>
          <p className="text-xs text-rez-gray-600 dark:text-gray-500 mt-2">
            Privé is earned, not given. Keep shopping to unlock exclusive access.
          </p>
        </div>
      )}
    </BottomSheet>
  );
};

export default ModeSwitcher;
