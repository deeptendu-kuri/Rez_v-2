import { Users, Clock, Trophy, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const FitnessChallengeCard = ({ challenge }) => {
  return (
    <Link
      to={`/fitness/challenge/${challenge.id}`}
      className="min-w-[280px] p-4 rounded-2xl bg-[#2C2C2E] shrink-0 active:scale-[0.98] transition-transform"
    >
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500/30 to-pink-500/30 flex items-center justify-center">
            <span className="text-2xl">{challenge.icon}</span>
          </div>
          <div>
            <h3 className="font-medium text-white">{challenge.name}</h3>
            <p className="text-xs text-gray-400">{challenge.description}</p>
          </div>
        </div>
        <ChevronRight className="w-5 h-5 text-gray-500" />
      </div>

      <div className="flex items-center gap-4 mb-3">
        <div className="flex items-center gap-1">
          <Users className="w-3.5 h-3.5 text-gray-400" />
          <span className="text-xs text-gray-400">{challenge.participants.toLocaleString()} joined</span>
        </div>
        {challenge.daysLeft && (
          <div className="flex items-center gap-1">
            <Clock className="w-3.5 h-3.5 text-gray-400" />
            <span className="text-xs text-gray-400">{challenge.daysLeft} days left</span>
          </div>
        )}
      </div>

      {challenge.progress > 0 && (
        <div className="mb-3">
          <div className="flex items-center justify-between mb-1">
            <span className="text-xs text-gray-400">Your progress</span>
            <span className="text-xs text-purple-400">{challenge.progress}%</span>
          </div>
          <div className="h-1.5 rounded-full bg-white/10 overflow-hidden">
            <div
              className="h-full rounded-full bg-gradient-to-r from-purple-500 to-pink-500"
              style={{ width: `${challenge.progress}%` }}
            />
          </div>
        </div>
      )}

      <div className="flex items-center gap-2 pt-3 border-t border-white/10">
        <Trophy className="w-4 h-4 text-amber-400" />
        <span className="text-sm text-amber-400">{challenge.reward}</span>
      </div>
    </Link>
  );
};

export default FitnessChallengeCard;
