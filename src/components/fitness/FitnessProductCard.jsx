import { Star, Truck, Coins, ShoppingCart } from 'lucide-react';
import { Link } from 'react-router-dom';

const FitnessProductCard = ({ product }) => {
  return (
    <Link
      to={`/fitness/product/${product.id}`}
      className="min-w-[160px] p-3 rounded-2xl bg-white dark:bg-[#2C2C2E] shrink-0 active:scale-[0.98] transition-transform"
    >
      <div className="relative mb-3">
        <div className="w-full h-24 rounded-xl bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center">
          <span className="text-4xl">
            {product.category === 'equipment' ? '🏋️' :
             product.category === 'supplements' ? '💊' :
             product.category === 'wearables' ? '⌚' : '🎒'}
          </span>
        </div>
        {product.discount > 0 && (
          <span className="absolute top-2 left-2 px-1.5 py-0.5 rounded bg-red-500 text-[10px] text-rez-navy dark:text-white font-bold">
            -{product.discount}%
          </span>
        )}
      </div>

      <h3 className="text-sm font-medium text-rez-navy dark:text-white mb-1 line-clamp-2">{product.name}</h3>

      <div className="flex items-center gap-1 mb-2">
        <Star className="w-3 h-3 text-amber-400 fill-amber-400" />
        <span className="text-xs text-rez-navy dark:text-white">{product.rating}</span>
        <span className="text-[10px] text-rez-gray-600 dark:text-gray-500">({product.reviews})</span>
      </div>

      <div className="flex items-center gap-2 mb-2">
        <span className="text-lg font-bold text-rez-navy dark:text-white">₹{product.price}</span>
        {product.originalPrice > product.price && (
          <span className="text-xs text-rez-gray-600 dark:text-gray-500 line-through">₹{product.originalPrice}</span>
        )}
      </div>

      <div className="flex items-center gap-1 text-xs text-rez-gray-600 dark:text-gray-400 mb-2">
        <Truck className="w-3 h-3" />
        <span>{product.deliveryTime}</span>
      </div>

      <div className="flex items-center justify-between pt-2 border-t border-rez-gray-200 dark:border-white/10">
        <div className="flex items-center gap-1">
          <Coins className="w-3 h-3 text-amber-400" />
          <span className="text-xs text-amber-400">+{product.coinsEarned}</span>
        </div>
        <button className="p-1.5 rounded-full bg-emerald-500/20">
          <ShoppingCart className="w-3.5 h-3.5 text-emerald-400" />
        </button>
      </div>
    </Link>
  );
};

export default FitnessProductCard;
