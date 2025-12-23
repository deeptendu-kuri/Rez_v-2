import { Gift, Check, Lock } from 'lucide-react';

const BeautyLoyaltyCard = ({ milestones, currentVisits = 6 }) => {
  return (
    <div className="p-4 rounded-2xl bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/20">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className="font-semibold text-rez-navy dark:text-white">Your Beauty Journey</h3>
          <p className="text-sm text-rez-gray-600 dark:text-gray-400">You've made {currentVisits} visits this month</p>
        </div>
        <div className="w-12 h-12 rounded-full bg-purple-500/30 flex items-center justify-center">
          <Gift className="w-6 h-6 text-purple-400" />
        </div>
      </div>

      {/* Progress Bar */}
      <div className="relative h-2 bg-rez-gray-100 dark:bg-white/10 rounded-full mb-4">
        <div
          className="absolute left-0 top-0 h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full transition-all"
          style={{ width: `${Math.min((currentVisits / 15) * 100, 100)}%` }}
        />
        {/* Milestone Markers */}
        {milestones.map((milestone) => (
          <div
            key={milestone.visits}
            className="absolute top-1/2 -translate-y-1/2 w-3 h-3 rounded-full border-2 border-white/30"
            style={{
              left: `${(milestone.visits / 15) * 100}%`,
              backgroundColor: milestone.unlocked ? '#A855F7' : '#1C1C1E',
              transform: 'translate(-50%, -50%)',
            }}
          />
        ))}
      </div>

      {/* Milestones */}
      <div className="grid grid-cols-2 gap-3">
        {milestones.map((milestone) => (
          <div
            key={milestone.visits}
            className={`p-3 rounded-xl flex items-center gap-3 ${
              milestone.unlocked
                ? 'bg-purple-500/20 border border-purple-500/30'
                : 'bg-white/5 border border-rez-gray-200 dark:border-white/10'
            }`}
          >
            <div
              className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                milestone.unlocked ? 'bg-purple-500/30' : 'bg-white/10'
              }`}
            >
              {milestone.unlocked ? (
                <span className="text-xl">{milestone.icon}</span>
              ) : (
                <Lock className="w-5 h-5 text-rez-gray-600 dark:text-gray-500" />
              )}
            </div>
            <div className="flex-1 min-w-0">
              <p className={`text-xs font-medium ${milestone.unlocked ? 'text-purple-400' : 'text-rez-gray-600 dark:text-gray-400'}`}>
                {milestone.visits} visits
              </p>
              <p className={`text-xs truncate ${milestone.unlocked ? 'text-white' : 'text-rez-gray-600 dark:text-gray-500'}`}>
                {milestone.reward}
              </p>
            </div>
            {milestone.unlocked && currentVisits >= milestone.visits && (
              <Check className="w-5 h-5 text-emerald-400" />
            )}
          </div>
        ))}
      </div>

      {/* Next Reward */}
      {currentVisits < 15 && (
        <div className="mt-4 p-3 rounded-xl bg-rez-gray-50 dark:bg-white/5">
          <p className="text-xs text-rez-gray-600 dark:text-gray-400">
            {milestones.filter((m) => m.visits > currentVisits)[0]?.visits - currentVisits || 0} more visits to unlock{' '}
            <span className="text-purple-400">
              {milestones.filter((m) => m.visits > currentVisits)[0]?.reward}
            </span>
          </p>
        </div>
      )}
    </div>
  );
};

export default BeautyLoyaltyCard;
