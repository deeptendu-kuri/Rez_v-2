import { Link } from 'react-router-dom';
import { Star, Zap, Store, Coins, ChevronRight } from 'lucide-react';
import Badge from '../common/Badge';
import Button from '../common/Button';

const ElectronicsProductCard = ({ product, variant = 'default' }) => {
  const isCompact = variant === 'compact';
  const discount = Math.round(
    ((product.originalPrice - product.price) / product.originalPrice) * 100
  );

  return (
    <div
      className={`rounded-2xl overflow-hidden bg-[#2C2C2E] group ${
        isCompact ? 'min-w-[200px] shrink-0' : ''
      }`}
    >
      {/* Image */}
      <div className={`relative ${isCompact ? 'h-32' : 'h-44'} bg-white/5`}>
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-300"
        />

        {/* Badges */}
        <div className="absolute top-2 left-2 flex flex-wrap gap-1">
          {discount > 0 && (
            <Badge variant="danger" size="xs">{discount}% OFF</Badge>
          )}
          {product.tag && (
            <span className="px-2 py-0.5 rounded-full bg-black/60 text-[10px] text-white">
              {product.tag}
            </span>
          )}
        </div>

        {/* Delivery badges */}
        <div className="absolute top-2 right-2 flex flex-col gap-1">
          {product.is60Min && (
            <span className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-amber-500 text-[10px] text-black font-bold">
              <Zap className="w-2.5 h-2.5" />
              60 min
            </span>
          )}
          {product.hasPickup && (
            <span className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-blue-500/80 text-[10px] text-white">
              <Store className="w-2.5 h-2.5" />
              Pickup
            </span>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="p-3">
        {/* Brand */}
        <p className="text-xs text-gray-500 mb-1">{product.brand}</p>

        {/* Name */}
        <h3 className={`font-medium text-white ${isCompact ? 'text-sm line-clamp-1' : 'line-clamp-2'}`}>
          {product.name}
        </h3>

        {/* Specs */}
        {!isCompact && product.specs && (
          <div className="flex flex-wrap gap-1 mt-2">
            {product.specs.slice(0, 3).map((spec, index) => (
              <span
                key={index}
                className="px-2 py-0.5 rounded-full bg-white/5 text-[10px] text-gray-400"
              >
                {spec}
              </span>
            ))}
          </div>
        )}

        {/* Rating */}
        <div className="flex items-center gap-2 mt-2">
          <div className="flex items-center gap-1">
            <Star className="w-3 h-3 text-amber-400 fill-amber-400" />
            <span className="text-xs text-white">{product.rating}</span>
          </div>
          <span className="text-xs text-gray-500">({product.reviews})</span>
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

        {/* Coins & Cashback */}
        <div className="flex items-center gap-3 mt-2">
          <div className="flex items-center gap-1 text-amber-400">
            <Coins className="w-3.5 h-3.5" />
            <span className="text-xs">Earn {product.coinsEarned}</span>
          </div>
          <span className="text-xs text-emerald-400">
            {product.cashbackPercent}% cashback
          </span>
        </div>

        {/* Offers */}
        {!isCompact && product.offers && product.offers.length > 0 && (
          <div className="mt-2 p-2 rounded-lg bg-blue-500/10 border border-blue-500/20">
            <p className="text-xs text-blue-400">{product.offers[0]}</p>
          </div>
        )}

        {/* CTAs */}
        {!isCompact && (
          <div className="flex gap-2 mt-3">
            <Button variant="secondary" size="sm" className="flex-1">
              Compare
            </Button>
            <Button variant="primary" size="sm" className="flex-1">
              Buy Now
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ElectronicsProductCard;
