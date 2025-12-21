import { Heart, Coins, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';

const HealthSavingsCard = ({ savings }) => {
  return (
    <div className="p-4 rounded-2xl bg-gradient-to-r from-emerald-500/20 to-teal-500/20 border border-emerald-500/20">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <Heart className="w-6 h-6 text-emerald-400" />
          <h3 className="font-semibold text-white">Your Health Savings</h3>
        </div>
        <Link to="/wallet" className="text-sm text-emerald-400">
          View All
        </Link>
      </div>

      <div className="grid grid-cols-2 gap-3">
        <div className="p-3 rounded-xl bg-white/10">
          <div className="flex items-center gap-2 mb-1">
            <TrendingUp className="w-4 h-4 text-emerald-400" />
            <span className="text-xs text-gray-400">This Year</span>
          </div>
          <p className="text-xl font-bold text-white">₹{savings.thisYear.toLocaleString()}</p>
          <p className="text-xs text-emerald-400">saved</p>
        </div>

        <div className="p-3 rounded-xl bg-white/10">
          <div className="flex items-center gap-2 mb-1">
            <Coins className="w-4 h-4 text-amber-400" />
            <span className="text-xs text-gray-400">Coins Earned</span>
          </div>
          <p className="text-xl font-bold text-amber-400">{savings.totalCoins.toLocaleString()}</p>
          <p className="text-xs text-gray-400">from {savings.visits} visits</p>
        </div>
      </div>

      <div className="mt-3 p-3 rounded-xl bg-white/10">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs text-gray-400">This Month</p>
            <p className="text-lg font-bold text-white">₹{savings.thisMonth}</p>
          </div>
          <span className="px-3 py-1.5 rounded-full bg-emerald-500/20 text-sm text-emerald-400">
            Health Saver
          </span>
        </div>
      </div>
    </div>
  );
};

export default HealthSavingsCard;
