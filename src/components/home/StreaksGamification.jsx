import { Link } from 'react-router-dom';
import { Flame, Gift, Target, ChevronRight, Check, MapPin, Receipt, Share2 } from 'lucide-react';

const StreaksGamification = () => {
  const streak = {
    current: 5,
    target: 7,
    nextReward: 100,
    type: 'daily',
  };

  const missions = [
    { id: 1, title: 'Visit 3 stores', progress: 2, target: 3, reward: 50, icon: MapPin, completed: false },
    { id: 2, title: 'Upload 1 bill', progress: 1, target: 1, reward: 25, icon: Receipt, completed: true },
    { id: 3, title: 'Share 1 deal', progress: 0, target: 1, reward: 30, icon: Share2, completed: false },
  ];

  return (
    <div className="px-4 py-4">
      <div className="p-4 rounded-2xl bg-gradient-to-br from-orange-500/20 to-red-500/10 border border-orange-500/20">
        {/* Streak Card */}
        <div className="flex items-center gap-4 mb-4 pb-4 border-b border-white/10">
          <div className="relative">
            <div className="w-16 h-16 rounded-full bg-orange-500/20 flex items-center justify-center">
              <Flame className="w-8 h-8 text-orange-400" />
            </div>
            <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 px-2 py-0.5 rounded-full bg-orange-500 text-xs font-bold text-white">
              {streak.current}
            </span>
          </div>
          <div className="flex-1">
            <h3 className="font-semibold text-white">🔥 {streak.current}-day saving streak!</h3>
            <p className="text-xs text-gray-400 mt-1">
              {streak.target - streak.current} more days to unlock +{streak.nextReward} bonus coins
            </p>
            <div className="h-1.5 bg-white/10 rounded-full overflow-hidden mt-2">
              <div
                className="h-full bg-gradient-to-r from-orange-500 to-red-500 rounded-full transition-all"
                style={{ width: `${(streak.current / streak.target) * 100}%` }}
              />
            </div>
          </div>
        </div>

        {/* Weekly Missions */}
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <Target className="w-4 h-4 text-purple-400" />
            <h4 className="text-sm font-medium text-white">Weekly Missions</h4>
          </div>
          <Link to="/missions" className="flex items-center gap-1 text-xs text-emerald-400">
            View all <ChevronRight className="w-3 h-3" />
          </Link>
        </div>

        <div className="space-y-2">
          {missions.map((mission) => {
            const Icon = mission.icon;
            const progressPercent = (mission.progress / mission.target) * 100;
            return (
              <div
                key={mission.id}
                className={`p-3 rounded-xl ${mission.completed ? 'bg-emerald-500/10' : 'bg-white/5'}`}
              >
                <div className="flex items-center gap-3">
                  <div className={`w-8 h-8 rounded-lg ${mission.completed ? 'bg-emerald-500/20' : 'bg-white/10'} flex items-center justify-center`}>
                    {mission.completed ? (
                      <Check className="w-4 h-4 text-emerald-400" />
                    ) : (
                      <Icon className="w-4 h-4 text-gray-400" />
                    )}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <p className={`text-sm ${mission.completed ? 'text-emerald-400 line-through' : 'text-white'}`}>
                        {mission.title}
                      </p>
                      <span className="flex items-center gap-1 text-xs text-amber-400">
                        <Gift className="w-3 h-3" />
                        +{mission.reward}
                      </span>
                    </div>
                    {!mission.completed && (
                      <div className="flex items-center gap-2 mt-1">
                        <div className="flex-1 h-1 bg-white/10 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-purple-500 rounded-full"
                            style={{ width: `${progressPercent}%` }}
                          />
                        </div>
                        <span className="text-[10px] text-gray-400">
                          {mission.progress}/{mission.target}
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default StreaksGamification;
