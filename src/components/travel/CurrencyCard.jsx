import { ArrowRight, Coins, TrendingUp } from 'lucide-react';
import Button from '../common/Button';

const CurrencyCard = ({ currency }) => {
  return (
    <div className="min-w-[200px] p-4 rounded-2xl bg-[#2C2C2E] shrink-0">
      {/* Flags */}
      <div className="flex items-center justify-center gap-3 mb-3">
        <div className="text-center">
          <span className="text-3xl">{currency.fromFlag}</span>
          <p className="text-sm font-medium text-white mt-1">{currency.from}</p>
        </div>
        <ArrowRight className="w-5 h-5 text-gray-500" />
        <div className="text-center">
          <span className="text-3xl">{currency.toFlag}</span>
          <p className="text-sm font-medium text-white mt-1">{currency.to}</p>
        </div>
      </div>

      {/* Rate */}
      <div className="text-center mb-3">
        <div className="flex items-center justify-center gap-1">
          <TrendingUp className="w-4 h-4 text-emerald-400" />
          <p className="text-lg font-bold text-white">
            1 {currency.to} = ₹{currency.rate}
          </p>
        </div>
        <p className="text-xs text-gray-400">Live rate</p>
      </div>

      {/* Bonus */}
      <div className="p-2 rounded-lg bg-amber-500/10 border border-amber-500/20 mb-3">
        <div className="flex items-center justify-center gap-1 text-amber-400">
          <Coins className="w-3.5 h-3.5" />
          <span className="text-xs">+{currency.bonus} bonus coins</span>
        </div>
        <p className="text-[10px] text-gray-400 text-center mt-0.5">
          Min ₹{currency.minAmount.toLocaleString()}
        </p>
      </div>

      {/* CTA */}
      <Button variant="primary" size="sm" fullWidth>
        Exchange
      </Button>
    </div>
  );
};

export default CurrencyCard;
