import { Coins } from 'lucide-react';
import { Link } from 'react-router-dom';

const FinancialOTTCard = ({ ottList }) => {
  return (
    <div className="p-4 rounded-2xl bg-white dark:bg-[#2C2C2E]">
      <div className="flex items-center justify-between mb-3">
        <h3 className="font-semibold text-rez-navy dark:text-white">OTT Subscriptions</h3>
        <Link to="/financial/ott" className="text-sm text-emerald-400">
          See All
        </Link>
      </div>

      <div className="flex gap-3 overflow-x-auto hide-scrollbar pb-2">
        {ottList.map((ott) => (
          <Link
            key={ott.id}
            to={`/financial/ott/${ott.id}`}
            className="min-w-[120px] p-3 rounded-xl bg-rez-gray-50 dark:bg-white/5 shrink-0 text-center active:scale-[0.98] transition-transform"
          >
            <span className="text-3xl mb-2 block">{ott.icon}</span>
            <p className="text-sm font-medium text-rez-navy dark:text-white">{ott.name}</p>
            <p className="text-xs text-rez-gray-600 dark:text-gray-400">₹{ott.price}/mo</p>
            <div className="flex items-center justify-center gap-1 mt-1">
              <Coins className="w-3 h-3 text-amber-400" />
              <span className="text-xs text-amber-400">{ott.cashback}%</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default FinancialOTTCard;
