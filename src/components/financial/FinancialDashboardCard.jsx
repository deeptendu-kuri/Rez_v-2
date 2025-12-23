import { TrendingUp, Coins, Receipt, Gift } from 'lucide-react';
import { Link } from 'react-router-dom';

const FinancialDashboardCard = ({ data }) => {
  return (
    <div className="p-4 rounded-2xl bg-gradient-to-r from-emerald-500/20 to-teal-500/20 border border-emerald-500/20">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <TrendingUp className="w-5 h-5 text-emerald-400" />
          <h3 className="font-semibold text-rez-navy dark:text-white">This Month</h3>
        </div>
        <Link to="/financial/history" className="text-sm text-emerald-400">
          View All
        </Link>
      </div>

      <div className="grid grid-cols-4 gap-2">
        <div className="p-3 rounded-xl bg-rez-gray-100 dark:bg-white/10 text-center">
          <p className="text-xl font-bold text-emerald-400">₹{data.saved.toLocaleString()}</p>
          <p className="text-[10px] text-rez-gray-600 dark:text-gray-400">Saved</p>
        </div>
        <div className="p-3 rounded-xl bg-rez-gray-100 dark:bg-white/10 text-center">
          <Receipt className="w-5 h-5 text-blue-400 mx-auto mb-1" />
          <p className="text-lg font-bold text-rez-navy dark:text-white">{data.billsPaid}</p>
          <p className="text-[10px] text-rez-gray-600 dark:text-gray-400">Bills Paid</p>
        </div>
        <div className="p-3 rounded-xl bg-rez-gray-100 dark:bg-white/10 text-center">
          <Coins className="w-5 h-5 text-amber-400 mx-auto mb-1" />
          <p className="text-lg font-bold text-amber-400">{data.coinsEarned}</p>
          <p className="text-[10px] text-rez-gray-600 dark:text-gray-400">Coins</p>
        </div>
        <div className="p-3 rounded-xl bg-rez-gray-100 dark:bg-white/10 text-center">
          <Gift className="w-5 h-5 text-purple-400 mx-auto mb-1" />
          <p className="text-lg font-bold text-purple-400">{data.upcomingRewards}</p>
          <p className="text-[10px] text-rez-gray-600 dark:text-gray-400">Rewards</p>
        </div>
      </div>
    </div>
  );
};

export default FinancialDashboardCard;
