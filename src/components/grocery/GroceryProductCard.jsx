import { Star, Zap, Coins, Plus } from 'lucide-react';
import { Link } from 'react-router-dom';

const GroceryProductCard = ({ product, variant = 'default' }) => {
  const discount = Math.round(
    ((product.originalPrice - product.price) / product.originalPrice) * 100
  );

  if (variant === 'compact') {
    return (
      <Link
        to={`/grocery/product/${product.id}`}
        className="min-w-[140px] p-3 rounded-xl bg-[#2C2C2E] shrink-0 relative"
      >
        {product.tag && (
          <span className="absolute top-2 left-2 px-2 py-0.5 rounded-full bg-emerald-500 text-[10px] text-white z-10">
            {product.tag}
          </span>
        )}

        <img
          src={product.image}
          alt={product.name}
          className="w-full h-24 object-cover rounded-lg mb-2"
        />

        <p className="text-xs text-gray-400">{product.brand}</p>
        <h3 className="text-sm text-white line-clamp-2 mt-0.5">{product.name}</h3>
        <p className="text-[10px] text-gray-500">{product.unit}</p>

        <div className="flex items-center justify-between mt-2">
          <div>
            <span className="text-sm font-bold text-white">₹{product.price}</span>
            {discount > 0 && (
              <span className="text-xs text-gray-500 line-through ml-1">₹{product.originalPrice}</span>
            )}
          </div>
          <button className="w-7 h-7 rounded-lg bg-emerald-500 flex items-center justify-center">
            <Plus className="w-4 h-4 text-white" />
          </button>
        </div>

        <div className="flex items-center gap-1 mt-1">
          <Coins className="w-3 h-3 text-amber-400" />
          <span className="text-[10px] text-amber-400">+{product.coinsEarned} coins</span>
        </div>
      </Link>
    );
  }

  return (
    <Link
      to={`/grocery/product/${product.id}`}
      className="p-4 rounded-2xl bg-[#2C2C2E]"
    >
      <div className="flex gap-4">
        <div className="relative w-24 h-24 shrink-0">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover rounded-xl"
          />
          {product.tag && (
            <span className="absolute top-1 left-1 px-2 py-0.5 rounded-full bg-emerald-500 text-[8px] text-white">
              {product.tag}
            </span>
          )}
          {product.is60Min && (
            <span className="absolute bottom-1 left-1 flex items-center gap-0.5 px-1.5 py-0.5 rounded bg-amber-500 text-[8px] text-black font-bold">
              <Zap className="w-2.5 h-2.5" />
              60-min
            </span>
          )}
        </div>

        <div className="flex-1 min-w-0">
          <p className="text-xs text-gray-400">{product.brand}</p>
          <h3 className="text-sm font-medium text-white line-clamp-2 mt-0.5">{product.name}</h3>
          <p className="text-xs text-gray-500">{product.unit}</p>

          <div className="flex items-center gap-2 mt-1">
            <div className="flex items-center gap-1">
              <Star className="w-3 h-3 text-amber-400 fill-amber-400" />
              <span className="text-xs text-white">{product.rating}</span>
            </div>
            <span className="text-xs text-gray-500">({product.reviews})</span>
          </div>

          <div className="flex items-center justify-between mt-2">
            <div>
              <span className="text-lg font-bold text-white">₹{product.price}</span>
              {discount > 0 && (
                <span className="text-sm text-gray-500 line-through ml-2">₹{product.originalPrice}</span>
              )}
            </div>
            <button className="px-4 py-2 rounded-xl bg-emerald-500 text-sm font-medium text-white">
              Add
            </button>
          </div>

          <div className="flex items-center gap-1 mt-1">
            <Coins className="w-4 h-4 text-amber-400" />
            <span className="text-xs text-amber-400">Earn {product.coinsEarned} coins</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default GroceryProductCard;
