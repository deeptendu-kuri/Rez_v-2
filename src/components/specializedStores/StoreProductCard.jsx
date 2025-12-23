import { Coins, ShoppingCart, BadgeCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

const StoreProductCard = ({ product, theme, storeType }) => {
  return (
    <Link
      to={`/store/${storeType}/product/${product.id}`}
      className="min-w-[160px] p-3 rounded-2xl bg-white dark:bg-[#2C2C2E] shrink-0 active:scale-[0.98] transition-transform"
    >
      <div className="relative mb-3">
        <div
          className="w-full h-24 rounded-xl flex items-center justify-center"
          style={{ backgroundColor: `${theme.primary}20` }}
        >
          <span className="text-4xl">{product.image || '📦'}</span>
        </div>
        {product.isLimited && (
          <span
            className="absolute top-2 left-2 px-1.5 py-0.5 rounded text-[10px] text-rez-navy dark:text-white font-bold"
            style={{ backgroundColor: theme.primary }}
          >
            LIMITED
          </span>
        )}
        {product.safetyBadge && (
          <BadgeCheck className="absolute top-2 right-2 w-4 h-4 text-emerald-400" />
        )}
      </div>

      <h3 className="text-sm font-medium text-rez-navy dark:text-white mb-1 line-clamp-2">{product.name}</h3>
      {product.brand && (
        <p className="text-[10px] text-rez-gray-600 dark:text-gray-400 mb-1">{product.brand}</p>
      )}

      <div className="flex items-center gap-2 mb-2">
        <span className="text-lg font-bold text-rez-navy dark:text-white">
          {product.dailyRate ? `₹${product.dailyRate}/day` : `₹${product.price?.toLocaleString()}`}
        </span>
      </div>

      <div className="flex items-center justify-between pt-2 border-t border-rez-gray-200 dark:border-white/10">
        <div className="flex items-center gap-1">
          <Coins className="w-3 h-3" style={{ color: theme.primary }} />
          <span className="text-xs" style={{ color: theme.primary }}>
            {product.cashback}% back
          </span>
        </div>
        <button
          className="p-1.5 rounded-full"
          style={{ backgroundColor: `${theme.primary}20` }}
        >
          <ShoppingCart className="w-3.5 h-3.5" style={{ color: theme.primary }} />
        </button>
      </div>
    </Link>
  );
};

export default StoreProductCard;
