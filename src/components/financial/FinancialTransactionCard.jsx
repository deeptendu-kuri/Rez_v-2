import { Coins } from 'lucide-react';

const FinancialTransactionCard = ({ transactions }) => {
  return (
    <div className="p-4 rounded-2xl bg-[#2C2C2E]">
      <h3 className="font-semibold text-white mb-3">Recent Transactions</h3>

      <div className="space-y-3">
        {transactions.map((txn) => (
          <div key={txn.id} className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
              <span className="text-lg">
                {txn.type.includes('Mobile') ? '📱' :
                 txn.type.includes('Electricity') ? '⚡' :
                 txn.type.includes('DTH') ? '📺' :
                 txn.type.includes('Broadband') ? '🌐' : '📄'}
              </span>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-white">{txn.type}</p>
              <p className="text-xs text-gray-400">{txn.date}</p>
            </div>
            <div className="text-right">
              <p className="text-sm font-medium text-white">₹{txn.amount}</p>
              <div className="flex items-center gap-1 justify-end">
                <Coins className="w-3 h-3 text-amber-400" />
                <span className="text-xs text-amber-400">+{txn.coins}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FinancialTransactionCard;
