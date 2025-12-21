import { Flame, Trophy, ChevronRight, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const FitnessStreakCard = ({ streak, milestones }) => {
  const progress = (streak.monthlyVisits / streak.nextRewardAt) * 100;

  return (
    <div className="p-4 rounded-2xl bg-gradient-to-r from-orange-500/20 to-red-500/20 border border-orange-500/20">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <Flame className="w-6 h-6 text-orange-400" />
          <h3 className="font-semibold text-white">Your Fitness Streak</h3>
        </div>
        <Link to="/fitness/streak" className="text-sm text-orange-400">
          View Progress
        </Link>
      </div>

      <div className="grid grid-cols-3 gap-3 mb-4">
        <div className="p-3 rounded-xl bg-white/10 text-center">
          <p className="text-2xl font-bold text-orange-400">{streak.currentStreak}</p>
          <p className="text-[10px] text-gray-400">Day Streak</p>
        </div>
        <div className="p-3 rounded-xl bg-white/10 text-center">
          <p className="text-2xl font-bold text-white">{streak.monthlyVisits}</p>
          <p className="text-[10px] text-gray-400">This Month</p>
        </div>
        <div className="p-3 rounded-xl bg-white/10 text-center">
          <p className="text-2xl font-bold text-amber-400">{streak.totalCoinsEarned}</p>
          <p className="text-[10px] text-gray-400">Coins Earned</p>
        </div>
      </div>

      <div className="mb-4">
        <div className="flex items-center justify-between mb-1.5">
          <span className="text-xs text-gray-400">Next reward at {streak.nextRewardAt} visits</span>
          <span className="text-xs text-orange-400">{streak.nextRewardAt - streak.monthlyVisits} to go</span>
        </div>
        <div className="h-2 rounded-full bg-white/10 overflow-hidden">
          <div
            className="h-full rounded-full bg-gradient-to-r from-orange-500 to-red-500 transition-all"
            style={{ width: `${Math.min(progress, 100)}%` }}
          />
        </div>
      </div>

      <div className="flex gap-2 mb-4 overflow-x-auto hide-scrollbar">
        {milestones.map((milestone, index) => (
          <div
            key={index}
            className={`min-w-[100px] p-2 rounded-xl text-center shrink-0 ${
              milestone.unlocked ? 'bg-emerald-500/20' : 'bg-white/5'
            }`}
          >
            <span className="text-xl">{milestone.icon}</span>
            <p className="text-[10px] text-white mt-1">{milestone.visits} visits</p>
            <p className="text-[9px] text-gray-400">{milestone.reward}</p>
          </div>
        ))}
      </div>

      <div className="flex gap-2">
        <Link
          to="/fitness/streak"
          className="flex-1 py-2.5 rounded-xl bg-orange-500 text-center text-sm font-medium text-white active:scale-[0.98] transition-transform"
        >
          View Progress
        </Link>
        <button className="px-4 py-2.5 rounded-xl bg-white/10 flex items-center gap-1.5 active:scale-[0.98] transition-transform">
          <Users className="w-4 h-4 text-white" />
          <span className="text-sm text-white">Invite Buddy</span>
        </button>
      </div>
    </div>
  );
};

export default FitnessStreakCard;
