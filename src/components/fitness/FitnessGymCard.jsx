import { Star, MapPin, Clock, Coins, BadgeCheck, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const FitnessGymCard = ({ gym, variant = 'full' }) => {
  if (variant === 'compact') {
    return (
      <Link
        to={`/fitness/gym/${gym.id}`}
        className="min-w-[180px] p-3 rounded-2xl bg-white dark:bg-[#2C2C2E] shrink-0 active:scale-[0.98] transition-transform"
      >
        <div className="flex items-center gap-2 mb-2">
          <div className="w-10 h-10 rounded-xl bg-red-500/20 flex items-center justify-center">
            <span className="text-lg">🏋️</span>
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="text-sm font-medium text-rez-navy dark:text-white truncate">{gym.name}</h3>
            <div className="flex items-center gap-1">
              <Star className="w-3 h-3 text-amber-400 fill-amber-400" />
              <span className="text-xs text-rez-navy dark:text-white">{gym.rating}</span>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-xs text-rez-gray-600 dark:text-gray-400">{gym.distance}</span>
          <div className="flex items-center gap-1">
            <Coins className="w-3 h-3 text-amber-400" />
            <span className="text-xs text-amber-400">{gym.cashbackPercent}%</span>
          </div>
        </div>
      </Link>
    );
  }

  return (
    <Link
      to={`/fitness/gym/${gym.id}`}
      className="block p-4 rounded-2xl bg-white dark:bg-[#2C2C2E] active:scale-[0.99] transition-transform"
    >
      <div className="flex gap-4">
        <div className="w-20 h-20 rounded-xl bg-gradient-to-br from-red-500/30 to-orange-500/30 flex items-center justify-center shrink-0">
          <span className="text-3xl">🏋️</span>
        </div>

        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-2 mb-1">
            <div>
              <div className="flex items-center gap-1.5">
                <h3 className="font-medium text-rez-navy dark:text-white">{gym.name}</h3>
                {gym.isVerified && (
                  <BadgeCheck className="w-4 h-4 text-blue-400" />
                )}
              </div>
              <div className="flex items-center gap-2 mt-0.5">
                <div className="flex items-center gap-1">
                  <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                  <span className="text-sm text-rez-navy dark:text-white">{gym.rating}</span>
                  <span className="text-xs text-rez-gray-600 dark:text-gray-500">({gym.reviews})</span>
                </div>
              </div>
            </div>
            {gym.hasFreeTrial && (
              <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-[10px] text-emerald-400 shrink-0">
                Free Trial
              </span>
            )}
          </div>

          <div className="flex flex-wrap gap-1.5 mb-2">
            {gym.tags?.slice(0, 2).map((tag, index) => (
              <span
                key={index}
                className="px-2 py-0.5 rounded-full bg-rez-gray-100 dark:bg-white/10 text-[10px] text-rez-gray-700 dark:text-gray-300"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="flex items-center gap-3 text-xs text-rez-gray-600 dark:text-gray-400">
            <div className="flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5" />
              <span>{gym.distance}</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" />
              <span>{gym.timing}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between mt-3 pt-3 border-t border-rez-gray-200 dark:border-white/10">
        <div>
          <p className="text-lg font-bold text-rez-navy dark:text-white">₹{gym.monthlyPrice}<span className="text-xs text-rez-gray-600 dark:text-gray-400 font-normal">/month</span></p>
          <p className="text-xs text-rez-gray-600 dark:text-gray-400">₹{gym.pricePerSession}/session</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1">
            <Coins className="w-4 h-4 text-amber-400" />
            <span className="text-sm font-medium text-amber-400">{gym.cashbackPercent}% back</span>
          </div>
          {gym.brandedCoin && (
            <div className="px-2 py-1 rounded-full bg-purple-500/20">
              <span className="text-xs text-purple-400">+{gym.brandedCoin.amount} {gym.brandedCoin.name}</span>
            </div>
          )}
        </div>
      </div>
    </Link>
  );
};

export default FitnessGymCard;
