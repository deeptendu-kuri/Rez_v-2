import { Link } from 'react-router-dom';
import { Flame, Calendar, Trophy, Gift, ChevronRight, Coins } from 'lucide-react';

const StreakLoyaltySection = ({
  category = '',
  streakData = {
    currentStreak: 3,
    targetStreak: 7,
    reward: 100,
    type: 'daily'
  },
  brandLoyalty = [],
  weeklyMission = {
    completed: 2,
    target: 5,
    reward: 150,
    description: 'Shop at 5 stores this week'
  }
}) => {
  const streakPercentage = (streakData.currentStreak / streakData.targetStreak) * 100;
  const missionPercentage = (weeklyMission.completed / weeklyMission.target) * 100;

  return (
    <div className="px-4 mt-6">
      <div className="flex items-center gap-2 mb-4">
        <Flame className="w-5 h-5 text-orange-400" />
        <h2 className="font-semibold text-rez-navy dark:text-white">Streaks & Loyalty</h2>
      </div>

      {/* Daily/Weekly Streak */}
      <div className="p-4 rounded-2xl bg-gradient-to-r from-orange-500/20 to-red-500/20 border border-orange-500/20 mb-4">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-orange-500/30 flex items-center justify-center">
              <Flame className="w-6 h-6 text-orange-400" />
            </div>
            <div>
              <h3 className="font-medium text-rez-navy dark:text-white">
                {streakData.type === 'daily' ? 'Daily' : 'Weekly'} Streak
              </h3>
              <p className="text-xs text-rez-gray-600 dark:text-gray-400">
                {streakData.targetStreak - streakData.currentStreak} more days to go!
              </p>
            </div>
          </div>
          <div className="text-right">
            <span className="text-2xl font-bold text-orange-400">{streakData.currentStreak}</span>
            <span className="text-rez-gray-600 dark:text-gray-500">/{streakData.targetStreak}</span>
          </div>
        </div>

        {/* Streak Progress */}
        <div className="h-2 bg-rez-gray-100 dark:bg-white/10 rounded-full overflow-hidden mb-2">
          <div
            className="h-full bg-gradient-to-r from-orange-500 to-red-500 rounded-full transition-all"
            style={{ width: `${streakPercentage}%` }}
          />
        </div>

        <div className="flex items-center justify-between">
          <div className="flex gap-1">
            {Array.from({ length: streakData.targetStreak }).map((_, idx) => (
              <div
                key={idx}
                className={`w-6 h-6 rounded-full flex items-center justify-center text-xs ${
                  idx < streakData.currentStreak
                    ? 'bg-orange-500 text-white'
                    : 'bg-white/10 text-rez-gray-600 dark:text-gray-500'
                }`}
              >
                {idx < streakData.currentStreak ? '✓' : idx + 1}
              </div>
            ))}
          </div>
          <div className="flex items-center gap-1 text-amber-400">
            <Gift className="w-4 h-4" />
            <span className="text-sm font-medium">+{streakData.reward} coins</span>
          </div>
        </div>
      </div>

      {/* Weekly Mission */}
      <div className="p-4 rounded-2xl bg-white dark:bg-[#2C2C2E] mb-4">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-purple-500/30 flex items-center justify-center">
              <Calendar className="w-5 h-5 text-purple-400" />
            </div>
            <div>
              <h3 className="font-medium text-rez-navy dark:text-white text-sm">Weekly Mission</h3>
              <p className="text-xs text-rez-gray-600 dark:text-gray-400">{weeklyMission.description}</p>
            </div>
          </div>
        </div>

        <div className="h-2 bg-rez-gray-100 dark:bg-white/10 rounded-full overflow-hidden mb-2">
          <div
            className="h-full bg-purple-500 rounded-full transition-all"
            style={{ width: `${missionPercentage}%` }}
          />
        </div>

        <div className="flex items-center justify-between text-sm">
          <span className="text-rez-gray-600 dark:text-gray-400">
            {weeklyMission.completed}/{weeklyMission.target} completed
          </span>
          <span className="text-amber-400">+{weeklyMission.reward} coins</span>
        </div>
      </div>

      {/* Brand Loyalty */}
      {brandLoyalty.length > 0 && (
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Trophy className="w-4 h-4 text-amber-400" />
              <h3 className="font-medium text-rez-navy dark:text-white text-sm">Brand Loyalty</h3>
            </div>
            <Link to="/loyalty" className="text-xs text-emerald-400 flex items-center gap-1">
              See All <ChevronRight className="w-3 h-3" />
            </Link>
          </div>

          {brandLoyalty.slice(0, 3).map((brand, idx) => (
            <div key={idx} className="p-3 rounded-xl bg-white dark:bg-[#2C2C2E]">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <span className="text-lg">{brand.icon || '🏪'}</span>
                  <span className="font-medium text-rez-navy dark:text-white text-sm">{brand.name}</span>
                </div>
                <span className="text-xs text-rez-gray-600 dark:text-gray-400">
                  {brand.visits}/{brand.targetVisits} visits
                </span>
              </div>

              <div className="h-1.5 bg-rez-gray-100 dark:bg-white/10 rounded-full overflow-hidden mb-1.5">
                <div
                  className="h-full bg-emerald-500 rounded-full transition-all"
                  style={{ width: `${(brand.visits / brand.targetVisits) * 100}%` }}
                />
              </div>

              <div className="flex items-center justify-between text-xs">
                <span className="text-rez-gray-600 dark:text-gray-500">
                  {brand.targetVisits - brand.visits} more to unlock
                </span>
                <div className="flex items-center gap-1 text-amber-400">
                  <Coins className="w-3 h-3" />
                  <span>+{brand.reward}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Bonus Tip */}
      <div className="mt-4 p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20">
        <p className="text-xs text-emerald-400 text-center">
          💡 Tip: Shop 2 days in a row to earn 50 bonus coins!
        </p>
      </div>
    </div>
  );
};

export default StreakLoyaltySection;
