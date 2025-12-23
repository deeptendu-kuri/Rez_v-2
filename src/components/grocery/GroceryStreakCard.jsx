import { Flame, Gift } from 'lucide-react';

const GroceryStreakCard = ({ streak, milestones }) => {
  const progress = (streak.current / streak.target) * 100;

  return (
    <div className="p-4 rounded-2xl bg-gradient-to-r from-orange-500/20 to-amber-500/20 border border-orange-500/20">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <Flame className="w-6 h-6 text-orange-400" />
          <div>
            <h3 className="font-semibold text-rez-navy dark:text-white">Weekly Grocery Streak</h3>
            <p className="text-xs text-rez-gray-600 dark:text-gray-400">{streak.period}</p>
          </div>
        </div>
        <div className="text-right">
          <p className="text-lg font-bold text-orange-400">{streak.current}/{streak.target}</p>
          <p className="text-xs text-rez-gray-600 dark:text-gray-400">purchases</p>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="relative h-3 bg-rez-gray-100 dark:bg-white/10 rounded-full mb-3">
        <div
          className="absolute left-0 top-0 h-full bg-gradient-to-r from-orange-500 to-amber-500 rounded-full transition-all"
          style={{ width: `${Math.min(progress, 100)}%` }}
        />
        {/* Markers */}
        {[...Array(streak.target)].map((_, i) => (
          <div
            key={i}
            className="absolute top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-white/30"
            style={{ left: `${((i + 1) / streak.target) * 100}%`, transform: 'translate(-50%, -50%)' }}
          />
        ))}
      </div>

      {/* Reward Info */}
      <div className="flex items-center justify-between p-3 rounded-xl bg-rez-gray-100 dark:bg-white/10">
        <div className="flex items-center gap-2">
          <Gift className="w-5 h-5 text-amber-400" />
          <span className="text-sm text-rez-navy dark:text-white">
            {streak.target - streak.current} more to earn
          </span>
        </div>
        <span className="px-3 py-1 rounded-full bg-amber-500 text-sm font-bold text-black">
          +{streak.bonus} coins
        </span>
      </div>

      {/* Milestones */}
      <div className="grid grid-cols-4 gap-2 mt-3">
        {milestones.slice(0, 4).map((milestone, index) => (
          <div
            key={index}
            className={`p-2 rounded-xl text-center ${
              milestone.unlocked ? 'bg-emerald-500/20' : 'bg-white/5'
            }`}
          >
            <span className={milestone.unlocked ? '' : 'grayscale opacity-50'}>
              {milestone.icon}
            </span>
            <p className={`text-[10px] mt-1 ${milestone.unlocked ? 'text-emerald-400' : 'text-rez-gray-600 dark:text-gray-500'}`}>
              {milestone.purchases}x
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GroceryStreakCard;
