import { Plus, Info } from 'lucide-react';
import Badge from '../common/Badge';

const ProductCard = ({ product, isHidden = false, hideReason = null }) => {
  if (isHidden) {
    return (
      <div className="bg-white dark:bg-[#2C2C2E] border border-rez-gray-200 dark:border-transparent shadow-sm dark:shadow-none rounded-2xl p-4 opacity-50">
        <div className="flex items-center gap-3">
          <div className="w-16 h-16 rounded-xl bg-rez-gray-100 dark:bg-white/10 flex items-center justify-center">
            <span className="text-2xl">🚫</span>
          </div>
          <div className="flex-1">
            <p className="text-sm text-rez-gray-600 dark:text-gray-400">Hidden due to your current mode</p>
            {hideReason && (
              <p className="text-xs text-rez-gray-600 dark:text-gray-500 mt-1 flex items-center gap-1">
                <Info className="w-3 h-3" />
                {hideReason}
              </p>
            )}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white dark:bg-[#2C2C2E] border border-rez-gray-200 dark:border-transparent shadow-sm dark:shadow-none rounded-2xl p-4 flex gap-4">
      {/* Image */}
      <div className="w-20 h-20 rounded-xl overflow-hidden shrink-0">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="flex-1 min-w-0">
        <div className="flex items-start justify-between gap-2">
          <div>
            <h4 className="font-medium text-rez-navy dark:text-white">{product.name}</h4>
            <p className="text-sm text-rez-gray-600 dark:text-gray-400 mt-0.5 line-clamp-2">{product.description}</p>
          </div>
        </div>

        {/* Badges */}
        {product.badges && (
          <div className="flex gap-1 mt-2">
            {product.badges.map((badge, i) => (
              <Badge key={i} variant="default" size="xs">{badge}</Badge>
            ))}
          </div>
        )}

        {/* Price Row */}
        <div className="flex items-center justify-between mt-3">
          <div className="flex items-baseline gap-2">
            <span className="font-semibold text-rez-navy dark:text-white">₹{product.price}</span>
            {product.originalPrice && (
              <span className="text-sm text-rez-gray-600 dark:text-gray-500 line-through">₹{product.originalPrice}</span>
            )}
          </div>

          <button className="w-8 h-8 rounded-full bg-emerald-500 flex items-center justify-center active:bg-emerald-600">
            <Plus className="w-5 h-5 text-rez-navy dark:text-white" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
