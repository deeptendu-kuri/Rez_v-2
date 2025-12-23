import { Package, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const StoreBundleCard = ({ bundle, theme }) => {
  return (
    <Link
      to={`/bundle/${bundle.id}`}
      className="min-w-[200px] p-4 rounded-2xl bg-white dark:bg-[#2C2C2E] shrink-0 active:scale-[0.98] transition-transform"
    >
      <div className="flex items-center gap-2 mb-2">
        <div
          className="p-2 rounded-lg"
          style={{ backgroundColor: `${theme.primary}20` }}
        >
          <Package className="w-5 h-5" style={{ color: theme.primary }} />
        </div>
        <span
          className="px-2 py-0.5 rounded-full text-[10px] text-rez-navy dark:text-white"
          style={{ backgroundColor: theme.primary }}
        >
          {bundle.items} items
        </span>
      </div>

      <h3 className="font-medium text-rez-navy dark:text-white mb-2">{bundle.name}</h3>

      <div className="flex items-center gap-2 mb-2">
        <span className="text-lg font-bold text-rez-navy dark:text-white">₹{bundle.price.toLocaleString()}</span>
        <span className="text-sm text-rez-gray-600 dark:text-gray-500 line-through">₹{bundle.originalPrice.toLocaleString()}</span>
      </div>

      <div className="flex items-center justify-between pt-2 border-t border-rez-gray-200 dark:border-white/10">
        <span className="text-xs text-emerald-400">Save ₹{bundle.savings.toLocaleString()}</span>
        <ChevronRight className="w-4 h-4" style={{ color: theme.primary }} />
      </div>
    </Link>
  );
};

export default StoreBundleCard;
