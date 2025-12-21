import { Coins, ChevronRight, AlertCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const FinancialBillCard = ({ bill }) => {
  const isUrgent = bill.urgency === 'soon';

  return (
    <Link
      to={`/financial/pay/${bill.id}`}
      className="flex items-center gap-3 p-3 rounded-xl bg-[#2C2C2E] active:scale-[0.98] transition-transform"
    >
      <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
        isUrgent ? 'bg-red-500/20' : 'bg-white/10'
      }`}>
        <span className="text-xl">
          {bill.type.includes('Mobile') ? '📱' :
           bill.type.includes('Electricity') ? '⚡' :
           bill.type.includes('Insurance') ? '🛡️' : '📄'}
        </span>
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2">
          <h3 className="text-sm font-medium text-white">{bill.type}</h3>
          {isUrgent && (
            <AlertCircle className="w-3.5 h-3.5 text-red-400" />
          )}
        </div>
        <p className="text-xs text-gray-400">Due: {bill.dueDate}</p>
      </div>
      <div className="text-right">
        <p className="text-sm font-semibold text-white">₹{bill.amount.toLocaleString()}</p>
        <p className="text-[10px] text-amber-400">Earn coins</p>
      </div>
      <ChevronRight className="w-4 h-4 text-gray-500" />
    </Link>
  );
};

export default FinancialBillCard;
