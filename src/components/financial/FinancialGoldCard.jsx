import { TrendingUp, Calendar, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const FinancialGoldCard = ({ gold }) => {
  return (
    <div className="p-4 rounded-2xl bg-gradient-to-r from-yellow-500/20 to-amber-500/20 border border-yellow-500/20">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <span className="text-2xl">💰</span>
          <h3 className="font-semibold text-rez-navy dark:text-white">Digital Gold</h3>
        </div>
        <Link to="/financial/gold" className="text-sm text-amber-400">
          View Details
        </Link>
      </div>

      <div className="grid grid-cols-2 gap-3 mb-4">
        <div className="p-3 rounded-xl bg-rez-gray-100 dark:bg-white/10">
          <p className="text-xs text-rez-gray-600 dark:text-gray-400 mb-1">Your Gold</p>
          <p className="text-xl font-bold text-amber-400">{gold.currentBalance}g</p>
          <p className="text-sm text-rez-navy dark:text-white">₹{gold.currentValue.toLocaleString()}</p>
        </div>
        <div className="p-3 rounded-xl bg-rez-gray-100 dark:bg-white/10">
          <p className="text-xs text-rez-gray-600 dark:text-gray-400 mb-1">Returns</p>
          <div className="flex items-center gap-1">
            <TrendingUp className="w-4 h-4 text-emerald-400" />
            <p className="text-xl font-bold text-emerald-400">+{gold.returns}%</p>
          </div>
          <p className="text-xs text-rez-gray-600 dark:text-gray-400">Since start</p>
        </div>
      </div>

      {gold.monthlyPlan && (
        <div className="p-3 rounded-xl bg-rez-gray-100 dark:bg-white/10 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4 text-rez-gray-600 dark:text-gray-400" />
            <div>
              <p className="text-sm text-rez-navy dark:text-white">Monthly SIP: ₹{gold.monthlyPlan.amount}</p>
              <p className="text-xs text-rez-gray-600 dark:text-gray-400">Next: {gold.monthlyPlan.nextDebit}</p>
            </div>
          </div>
          <ChevronRight className="w-4 h-4 text-rez-gray-600 dark:text-gray-500" />
        </div>
      )}
    </div>
  );
};

export default FinancialGoldCard;
