import { Star, Zap, Store, Coins } from 'lucide-react';
import { Link } from 'react-router-dom';

const BeautyProductCard = ({ product, variant = 'default' }) => {
  const discount = Math.round(
    ((product.originalPrice - product.price) / product.originalPrice) * 100
  );

  if (variant === 'compact') {
    return (
      <Link
        to={`/beauty/product/${product.id}`}
        className="min-w-[150px] p-3 rounded-xl bg-[#2C2C2E] shrink-0 active:scale-[0.98] transition-transform"
      >
        <div className="relative">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-28 object-cover rounded-lg"
          />
          {product.tag && (
            <span className="absolute top-2 left-2 px-2 py-0.5 rounded-full bg-emerald-500 text-[10px] text-white">
              {product.tag}
            </span>
          )}
          {product.is60Min && (
            <span className="absolute bottom-2 left-2 flex items-center gap-0.5 px-1.5 py-0.5 rounded bg-amber-500 text-[8px] text-black font-bold">
              <Zap className="w-2.5 h-2.5" />
              60-min
            </span>
          )}
        </div>
        <p className="text-xs text-gray-400 mt-2">{product.brand}</p>
        <h3 className="text-sm text-white line-clamp-2 mt-0.5">{product.name}</h3>
        <div className="flex items-center gap-2 mt-1">
          <span className="text-sm font-bold text-white">₹{product.price.toLocaleString()}</span>
          {discount > 0 && (
            <span className="text-xs text-emerald-400">{discount}% off</span>
          )}
        </div>
        <div className="flex items-center gap-1 mt-1">
          <Coins className="w-3 h-3 text-amber-400" />
          <span className="text-[10px] text-amber-400">{product.cashbackPercent}% cashback</span>
        </div>
      </Link>
    );
  }

  return (
    <Link
      to={`/beauty/product/${product.id}`}
      className="p-4 rounded-2xl bg-[#2C2C2E] active:scale-[0.99] transition-transform"
    >
      <div className="flex gap-4">
        {/* Image */}
        <div className="relative w-24 h-28 shrink-0">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover rounded-xl"
          />
          {discount > 0 && (
            <span className="absolute top-2 left-2 px-2 py-0.5 rounded-full bg-red-500 text-[10px] text-white font-medium">
              {discount}% OFF
            </span>
          )}
        </div>

        {/* Info */}
        <div className="flex-1 min-w-0">
          <p className="text-xs text-gray-400">{product.brand}</p>
          <h3 className="text-sm font-medium text-white line-clamp-2 mt-0.5">{product.name}</h3>
          <p className="text-xs text-gray-500 mt-0.5">{product.description}</p>

          {/* Rating */}
          <div className="flex items-center gap-2 mt-1.5">
            <div className="flex items-center gap-1 px-1.5 py-0.5 rounded bg-emerald-500/20">
              <Star className="w-3 h-3 text-amber-400 fill-amber-400" />
              <span className="text-xs text-white">{product.rating}</span>
            </div>
            <span className="text-xs text-gray-500">{product.reviews.toLocaleString()} reviews</span>
          </div>

          {/* Price */}
          <div className="flex items-center gap-2 mt-2">
            <span className="text-lg font-bold text-white">₹{product.price.toLocaleString()}</span>
            <span className="text-sm text-gray-500 line-through">₹{product.originalPrice.toLocaleString()}</span>
          </div>

          {/* Cashback & Delivery */}
          <div className="flex items-center gap-3 mt-1.5">
            <div className="flex items-center gap-1">
              <Coins className="w-4 h-4 text-amber-400" />
              <span className="text-xs text-amber-400">{product.cashbackPercent}% cashback</span>
            </div>
            {product.is60Min && (
              <div className="flex items-center gap-1">
                <Zap className="w-3.5 h-3.5 text-amber-400" />
                <span className="text-xs text-amber-400">60-min</span>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Offers */}
      {product.offers && product.offers.length > 0 && (
        <div className="flex flex-wrap gap-2 mt-3 pt-3 border-t border-white/10">
          {product.offers.map((offer, index) => (
            <span
              key={index}
              className="px-2 py-1 rounded-lg bg-emerald-500/10 text-xs text-emerald-400"
            >
              {offer}
            </span>
          ))}
        </div>
      )}
    </Link>
  );
};

export default BeautyProductCard;
