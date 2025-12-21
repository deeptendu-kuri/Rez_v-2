import { Link } from 'react-router-dom';
import { Star, Clock, MapPin, Coins, BadgeCheck, Zap } from 'lucide-react';
import Badge from '../common/Badge';

const RestaurantCard = ({ restaurant, variant = 'default' }) => {
  const isCompact = variant === 'compact';

  return (
    <Link
      to={`/food/restaurant/${restaurant.id}`}
      className={`block rounded-2xl overflow-hidden bg-[#2C2C2E] group ${
        isCompact ? 'min-w-[200px] shrink-0' : ''
      }`}
    >
      {/* Image */}
      <div className={`relative ${isCompact ? 'h-28' : 'h-36'}`}>
        <img
          src={restaurant.image}
          alt={restaurant.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />

        {/* Badges */}
        <div className="absolute top-2 left-2 flex flex-wrap gap-1">
          {restaurant.is60Min && (
            <span className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-amber-500 text-[10px] text-black font-bold">
              <Zap className="w-2.5 h-2.5" />
              60 min
            </span>
          )}
          {restaurant.isHalal && (
            <span className="px-2 py-0.5 rounded-full bg-emerald-500/90 text-[10px] text-white font-medium">
              Halal
            </span>
          )}
          {restaurant.isVeg && (
            <span className="px-2 py-0.5 rounded-full bg-green-500/90 text-[10px] text-white font-medium">
              Pure Veg
            </span>
          )}
        </div>

        {/* Cashback Badge */}
        <div className="absolute top-2 right-2">
          <span className="px-2 py-1 rounded-full bg-black/60 backdrop-blur-sm text-[10px] text-emerald-400 font-medium">
            {restaurant.cashbackPercent}% cashback
          </span>
        </div>

        {/* Rating */}
        <div className="absolute bottom-2 left-2 flex items-center gap-1 px-2 py-1 rounded-full bg-black/60 backdrop-blur-sm">
          <Star className="w-3 h-3 text-amber-400 fill-amber-400" />
          <span className="text-xs text-white font-medium">{restaurant.rating}</span>
          <span className="text-[10px] text-gray-400">({restaurant.reviews})</span>
        </div>
      </div>

      {/* Content */}
      <div className="p-3">
        <div className="flex items-start justify-between gap-2">
          <div className="flex-1 min-w-0">
            <h3 className="font-semibold text-white truncate">{restaurant.name}</h3>
            <p className="text-xs text-gray-400 truncate">
              {restaurant.cuisine.join(' • ')}
            </p>
          </div>
          {restaurant.featured && (
            <BadgeCheck className="w-4 h-4 text-blue-400 shrink-0" />
          )}
        </div>

        {/* Meta */}
        <div className="flex items-center gap-3 mt-2 text-gray-400">
          <div className="flex items-center gap-1">
            <MapPin className="w-3 h-3" />
            <span className="text-xs">{restaurant.distance}</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock className="w-3 h-3" />
            <span className="text-xs">{restaurant.deliveryTime}</span>
          </div>
          <span className="text-xs">₹{restaurant.avgCost} for two</span>
        </div>

        {/* Coins earned */}
        <div className="flex items-center justify-between mt-3 pt-2 border-t border-white/5">
          <div className="flex items-center gap-1 text-amber-400">
            <Coins className="w-3.5 h-3.5" />
            <span className="text-xs font-medium">Earn ₹{restaurant.coinsEarned} coins</span>
          </div>
          {restaurant.reviewBonus > 0 && (
            <span className="text-[10px] text-gray-500">
              +₹{restaurant.reviewBonus} for review
            </span>
          )}
        </div>

        {/* Loyalty Progress */}
        {restaurant.loyaltyVisits > 0 && (
          <div className="mt-2">
            <div className="flex items-center justify-between mb-1">
              <span className="text-[10px] text-gray-400">
                {restaurant.loyaltyVisits}/{restaurant.loyaltyTarget} visits
              </span>
              <span className="text-[10px] text-purple-400">Unlock reward</span>
            </div>
            <div className="h-1 bg-white/10 rounded-full overflow-hidden">
              <div
                className="h-full bg-purple-500 rounded-full transition-all"
                style={{
                  width: `${(restaurant.loyaltyVisits / restaurant.loyaltyTarget) * 100}%`,
                }}
              />
            </div>
          </div>
        )}

        {/* Tags */}
        {restaurant.tags && restaurant.tags.length > 0 && !isCompact && (
          <div className="flex flex-wrap gap-1 mt-2">
            {restaurant.tags.map((tag, index) => (
              <span
                key={index}
                className="px-2 py-0.5 rounded-full bg-white/5 text-[10px] text-gray-400"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </Link>
  );
};

export default RestaurantCard;
