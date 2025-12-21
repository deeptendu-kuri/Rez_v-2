import { Coins, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const FinancialCategoryTile = ({ category, section }) => {
  return (
    <Link
      to={`/financial/${section}/${category.id}`}
      className="flex items-center gap-3 p-3 rounded-xl bg-[#2C2C2E] active:scale-[0.98] transition-transform"
    >
      <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
        <span className="text-xl">{category.icon}</span>
      </div>
      <div className="flex-1 min-w-0">
        <h3 className="text-sm font-medium text-white">{category.name}</h3>
        {category.types && (
          <p className="text-[10px] text-gray-400">{category.types.join(' • ')}</p>
        )}
      </div>
      <div className="flex items-center gap-2">
        {category.cashback && (
          <div className="flex items-center gap-1">
            <Coins className="w-3 h-3 text-amber-400" />
            <span className="text-xs text-amber-400">{category.cashback}%</span>
          </div>
        )}
        <ChevronRight className="w-4 h-4 text-gray-500" />
      </div>
    </Link>
  );
};

export default FinancialCategoryTile;
