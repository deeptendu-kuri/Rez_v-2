import { Link } from 'react-router-dom';
import { TrendingUp, Users, Coins, Zap } from 'lucide-react';

const SocialProofStrip = () => {
  return (
    <div className="px-4 py-3">
      <Link
        to="/explore/friends"
        className="block p-4 bg-gradient-to-r from-emerald-500/10 via-teal-500/10 to-blue-500/10 border border-emerald-500/20 rounded-2xl hover:border-emerald-500/40 transition-all"
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            {/* Animated Icon */}
            <div className="relative">
              <div className="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-emerald-500" />
              </div>
              <div className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-orange-500 animate-pulse" />
            </div>

            {/* Text */}
            <div>
              <p className="text-sm font-bold text-rez-navy dark:text-white">
                42 people near you earned rewards today
              </p>
              <p className="text-xs text-rez-gray-600 dark:text-gray-400 mt-0.5">
                Join them and start saving
              </p>
            </div>
          </div>

          {/* Arrow */}
          <div className="shrink-0">
            <div className="px-3 py-1.5 bg-rez-green-500 rounded-full">
              <span className="text-xs font-semibold text-white">
                See How →
              </span>
            </div>
          </div>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-3 gap-2 mt-3 pt-3 border-t border-rez-gray-200 dark:border-white/10">
          <div className="text-center">
            <div className="flex items-center justify-center gap-1 mb-1">
              <Users className="w-3.5 h-3.5 text-blue-500" />
              <p className="text-sm font-bold text-rez-navy dark:text-white">234</p>
            </div>
            <p className="text-[10px] text-rez-gray-600 dark:text-gray-400">Active Now</p>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center gap-1 mb-1">
              <Coins className="w-3.5 h-3.5 text-amber-500" />
              <p className="text-sm font-bold text-rez-navy dark:text-white">₹12k</p>
            </div>
            <p className="text-[10px] text-rez-gray-600 dark:text-gray-400">Earned Today</p>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center gap-1 mb-1">
              <Zap className="w-3.5 h-3.5 text-orange-500" />
              <p className="text-sm font-bold text-rez-navy dark:text-white">156</p>
            </div>
            <p className="text-[10px] text-rez-gray-600 dark:text-gray-400">Deals Live</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default SocialProofStrip;
