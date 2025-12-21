import { Zap, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const FinancialNudgeCard = ({ nudges }) => {
  return (
    <div className="p-4 rounded-2xl bg-gradient-to-r from-amber-500/20 to-orange-500/20 border border-amber-500/20">
      <div className="flex items-center gap-2 mb-3">
        <Zap className="w-5 h-5 text-amber-400" />
        <h3 className="font-semibold text-white">Smart Nudges</h3>
      </div>

      <div className="space-y-2">
        {nudges.map((nudge) => (
          <Link
            key={nudge.id}
            to="/financial/bills"
            className="flex items-center gap-3 p-2 rounded-xl bg-white/10 active:scale-[0.98] transition-transform"
          >
            <span className="text-lg">{nudge.icon}</span>
            <span className="flex-1 text-sm text-gray-300">{nudge.text}</span>
            <ChevronRight className="w-4 h-4 text-gray-500" />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default FinancialNudgeCard;
