import { Star, Clock, MapPin, Zap, Coins, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';
import Badge from '../common/Badge';

const BeautyServiceCard = ({ service, variant = 'default' }) => {
  const discount = Math.round(
    ((service.originalPrice - service.price) / service.originalPrice) * 100
  );

  if (variant === 'compact') {
    return (
      <Link
        to={`/beauty/service/${service.id}`}
        className="min-w-[200px] p-3 rounded-xl bg-[#2C2C2E] shrink-0 active:scale-[0.98] transition-transform"
      >
        <div className="relative">
          <img
            src={service.image}
            alt={service.name}
            className="w-full h-28 object-cover rounded-lg"
          />
          {service.tag && (
            <span className="absolute top-2 left-2 px-2 py-0.5 rounded-full bg-blue-500 text-[10px] text-white">
              {service.tag}
            </span>
          )}
        </div>
        <h3 className="text-sm font-medium text-white mt-2 line-clamp-1">{service.name}</h3>
        <p className="text-xs text-gray-400">{service.provider}</p>
        <div className="flex items-center gap-2 mt-1">
          <span className="text-sm font-bold text-white">₹{service.price.toLocaleString()}</span>
          <span className="text-xs text-gray-500 line-through">₹{service.originalPrice.toLocaleString()}</span>
        </div>
        <div className="flex items-center gap-1 mt-1">
          <Coins className="w-3 h-3 text-amber-400" />
          <span className="text-xs text-amber-400">Earn {service.coinsEarned} coins</span>
        </div>
      </Link>
    );
  }

  return (
    <Link
      to={`/beauty/service/${service.id}`}
      className="p-4 rounded-2xl bg-[#2C2C2E] active:scale-[0.99] transition-transform"
    >
      <div className="flex gap-4">
        {/* Image */}
        <div className="relative w-28 h-32 shrink-0">
          <img
            src={service.image}
            alt={service.name}
            className="w-full h-full object-cover rounded-xl"
          />
          {discount > 0 && (
            <span className="absolute top-2 left-2 px-2 py-0.5 rounded-full bg-red-500 text-[10px] text-white font-medium">
              {discount}% OFF
            </span>
          )}
          {service.tag && (
            <span className="absolute bottom-2 left-2 px-2 py-0.5 rounded-full bg-blue-500 text-[10px] text-white">
              {service.tag}
            </span>
          )}
        </div>

        {/* Info */}
        <div className="flex-1 min-w-0">
          <h3 className="text-sm font-medium text-white line-clamp-2">{service.name}</h3>
          <p className="text-xs text-gray-400 mt-0.5">{service.provider}</p>

          {/* Rating & Duration */}
          <div className="flex items-center gap-3 mt-1.5">
            <div className="flex items-center gap-1">
              <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
              <span className="text-xs text-white">{service.rating}</span>
              <span className="text-xs text-gray-500">({service.reviews})</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-gray-400" />
              <span className="text-xs text-gray-400">{service.duration}</span>
            </div>
          </div>

          {/* Distance */}
          <div className="flex items-center gap-1 mt-1">
            <MapPin className="w-3.5 h-3.5 text-gray-400" />
            <span className="text-xs text-gray-400">{service.distance}</span>
            {service.isWalkIn && (
              <>
                <span className="text-gray-500 mx-1">•</span>
                <span className="text-xs text-emerald-400">Walk-in Available</span>
              </>
            )}
          </div>

          {/* Price */}
          <div className="flex items-center gap-2 mt-2">
            <span className="text-lg font-bold text-white">₹{service.price.toLocaleString()}</span>
            <span className="text-sm text-gray-500 line-through">₹{service.originalPrice.toLocaleString()}</span>
          </div>

          {/* Cashback */}
          <div className="flex items-center gap-1.5 mt-1">
            <Coins className="w-4 h-4 text-amber-400" />
            <span className="text-xs text-amber-400">
              Earn ₹{Math.round(service.price * service.cashbackPercent / 100)} + {service.coinsEarned} coins
            </span>
          </div>
        </div>
      </div>

      {/* Slots */}
      {service.slots && service.slots.length > 0 && (
        <div className="mt-3 pt-3 border-t border-white/10">
          <div className="flex items-center gap-2 mb-2">
            <Calendar className="w-4 h-4 text-emerald-400" />
            <span className="text-xs text-gray-400">Available Slots</span>
          </div>
          <div className="flex gap-2 overflow-x-auto hide-scrollbar">
            {service.slots.slice(0, 4).map((slot, index) => (
              <span
                key={index}
                className="px-3 py-1.5 rounded-lg bg-emerald-500/20 text-xs text-emerald-400 shrink-0"
              >
                {slot}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Offers */}
      {service.offers && service.offers.length > 0 && (
        <div className="flex flex-wrap gap-2 mt-3">
          {service.offers.map((offer, index) => (
            <span
              key={index}
              className="px-2 py-1 rounded-lg bg-blue-500/10 text-xs text-blue-400"
            >
              🎁 {offer}
            </span>
          ))}
        </div>
      )}
    </Link>
  );
};

export default BeautyServiceCard;
