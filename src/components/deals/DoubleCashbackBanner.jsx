import { doubleCashbackDay } from '../../data/deals';
import { Sparkles, Clock } from 'lucide-react';

const DoubleCashbackBanner = () => {
  if (!doubleCashbackDay.active) return null;

  return (
    <div className="mx-4 mb-4 p-4 rounded-2xl bg-gradient-to-r from-amber-500/20 via-orange-500/20 to-red-500/20 border border-amber-500/30">
      <div className="flex items-center gap-3">
        <div className="w-14 h-14 rounded-2xl bg-amber-500/30 flex items-center justify-center">
          <span className="text-3xl">2️⃣✖️</span>
        </div>

        <div className="flex-1">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span className="font-semibold text-rez-navy dark:text-white">{doubleCashbackDay.title}</span>
          </div>
          <p className="text-sm text-rez-gray-700 dark:text-gray-300 mt-0.5">{doubleCashbackDay.subtitle}</p>
        </div>

        <div className="text-right">
          <div className="flex items-center gap-1 text-red-400">
            <Clock className="w-4 h-4" />
            <span className="text-sm font-medium">{doubleCashbackDay.endsIn}</span>
          </div>
          <span className="text-xs text-rez-gray-600 dark:text-gray-400">remaining</span>
        </div>
      </div>
    </div>
  );
};

export default DoubleCashbackBanner;
