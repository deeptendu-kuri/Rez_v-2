import { Star, Zap, Store, Heart, Coins } from 'lucide-react';
import { useState } from 'react';
import Badge from '../common/Badge';

const FashionProductCard = ({ product, variant = 'default' }) => {
  const [liked, setLiked] = useState(false);

  const discount = Math.round(
    ((product.originalPrice - product.price) / product.originalPrice) * 100
  );

  if (variant === 'compact') {
    return (
      <div className="min-w-[160px] p-3 rounded-xl bg-[#2C2C2E] shrink-0">
        <div className="relative">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-32 object-cover rounded-lg mb-2"
          />
          {discount > 0 && (
            <span className="absolute top-2 left-2 px-2 py-0.5 rounded-full bg-red-500 text-[10px] text-white font-medium">
              {discount}% OFF
            </span>
          )}
        </div>
        <p className="text-xs text-gray-400">{product.brand}</p>
        <p className="text-sm text-white line-clamp-2 mt-0.5">{product.name}</p>
        <div className="flex items-center gap-2 mt-1">
          <span className="text-sm font-bold text-white">
            ₹{product.price.toLocaleString()}
          </span>
          <span className="text-xs text-gray-500 line-through">
            ₹{product.originalPrice.toLocaleString()}
          </span>
        </div>
        <p className="text-xs text-emerald-400 mt-0.5">
          {product.cashbackPercent}% cashback
        </p>
      </div>
    );
  }

  return (
    <div className="p-4 rounded-2xl bg-[#2C2C2E]">
      <div className="flex gap-4">
        {/* Product Image */}
        <div className="relative w-28 h-36 shrink-0">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover rounded-xl"
          />

          {/* Badges */}
          <div className="absolute top-2 left-2 flex flex-col gap-1">
            {discount > 0 && (
              <span className="px-2 py-0.5 rounded-full bg-red-500 text-[10px] text-white font-medium">
                {discount}% OFF
              </span>
            )}
            {product.tag && (
              <span className="px-2 py-0.5 rounded-full bg-blue-500 text-[10px] text-white">
                {product.tag}
              </span>
            )}
          </div>

          {/* Like Button */}
          <button
            onClick={(e) => {
              e.preventDefault();
              setLiked(!liked);
            }}
            className="absolute top-2 right-2 w-7 h-7 rounded-full bg-black/50 flex items-center justify-center"
          >
            <Heart
              className={`w-4 h-4 ${liked ? 'text-red-500 fill-red-500' : 'text-white'}`}
            />
          </button>

          {/* Delivery Badges */}
          <div className="absolute bottom-2 left-2 flex flex-col gap-1">
            {product.is60Min && (
              <span className="flex items-center gap-0.5 px-1.5 py-0.5 rounded bg-amber-500 text-[8px] text-black font-bold">
                <Zap className="w-2.5 h-2.5" />
                60-min
              </span>
            )}
          </div>
        </div>

        {/* Product Info */}
        <div className="flex-1 min-w-0">
          <p className="text-xs text-gray-400">{product.brand}</p>
          <h3 className="text-sm font-medium text-white mt-0.5 line-clamp-2">
            {product.name}
          </h3>

          {/* Rating */}
          <div className="flex items-center gap-2 mt-1.5">
            <div className="flex items-center gap-1 px-1.5 py-0.5 rounded bg-emerald-500/20">
              <Star className="w-3 h-3 text-amber-400 fill-amber-400" />
              <span className="text-xs font-medium text-white">{product.rating}</span>
            </div>
            <span className="text-xs text-gray-500">
              {product.reviews.toLocaleString()} reviews
            </span>
          </div>

          {/* Price */}
          <div className="flex items-center gap-2 mt-2">
            <span className="text-lg font-bold text-white">
              ₹{product.price.toLocaleString()}
            </span>
            <span className="text-sm text-gray-500 line-through">
              ₹{product.originalPrice.toLocaleString()}
            </span>
          </div>

          {/* Coins */}
          <div className="flex items-center gap-1.5 mt-1.5">
            <Coins className="w-4 h-4 text-amber-400" />
            <span className="text-xs text-amber-400">
              Earn {product.coinsEarned} coins ({product.cashbackPercent}% cashback)
            </span>
          </div>

          {/* Sizes */}
          {product.sizes && product.sizes.length > 0 && (
            <div className="flex flex-wrap gap-1 mt-2">
              {product.sizes.slice(0, 5).map((size) => (
                <span
                  key={size}
                  className="px-2 py-0.5 rounded bg-white/10 text-[10px] text-gray-400"
                >
                  {size}
                </span>
              ))}
              {product.sizes.length > 5 && (
                <span className="text-[10px] text-gray-500">
                  +{product.sizes.length - 5} more
                </span>
              )}
            </div>
          )}

          {/* Store Pickup */}
          {product.hasPickup && (
            <div className="flex items-center gap-1 mt-2">
              <Store className="w-3.5 h-3.5 text-blue-400" />
              <span className="text-xs text-gray-400">
                {product.stores?.length || 0} stores nearby
              </span>
            </div>
          )}
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
    </div>
  );
};

export default FashionProductCard;
