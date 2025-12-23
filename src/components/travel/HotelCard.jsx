import { Star, MapPin, Coins } from 'lucide-react';
import Badge from '../common/Badge';
import Button from '../common/Button';

const HotelCard = ({ hotel, variant = 'default' }) => {
  const discount = Math.round(((hotel.originalPrice - hotel.pricePerNight) / hotel.originalPrice) * 100);

  if (variant === 'compact') {
    return (
      <div className="flex gap-3 p-3 rounded-xl bg-white dark:bg-[#2C2C2E]">
        <div className="w-20 h-20 rounded-xl overflow-hidden shrink-0">
          <img src={hotel.image} alt={hotel.name} className="w-full h-full object-cover" />
        </div>
        <div className="flex-1 min-w-0">
          <h4 className="font-medium text-rez-navy dark:text-white truncate">{hotel.name}</h4>
          <div className="flex items-center gap-1 text-rez-gray-600 dark:text-gray-400 mt-0.5">
            <MapPin className="w-3 h-3" />
            <span className="text-xs truncate">{hotel.location}</span>
          </div>
          <div className="flex items-center gap-2 mt-1">
            <div className="flex items-center gap-0.5">
              <Star className="w-3 h-3 text-amber-400 fill-amber-400" />
              <span className="text-xs text-rez-navy dark:text-white">{hotel.rating}</span>
            </div>
            <span className="text-xs text-emerald-400">₹{hotel.pricePerNight}/night</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-w-[260px] rounded-2xl overflow-hidden bg-rez-gray-100 dark:bg-[#1C1C1E] shrink-0 group">
      {/* Image */}
      <div className="relative h-36">
        <img
          src={hotel.image}
          alt={hotel.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

        {/* Discount badge */}
        {discount > 0 && (
          <div className="absolute top-3 left-3">
            <Badge variant="success" size="xs">{discount}% OFF</Badge>
          </div>
        )}

        {/* Rating */}
        <div className="absolute top-3 right-3 flex items-center gap-1 px-2 py-0.5 rounded-full bg-white dark:bg-black/60 backdrop-blur-sm">
          <Star className="w-3 h-3 text-amber-400 fill-amber-400" />
          <span className="text-xs text-rez-navy dark:text-white">{hotel.rating}</span>
        </div>

        {/* Category */}
        <div className="absolute bottom-3 left-3">
          <Badge variant="secondary" size="xs">{hotel.category}</Badge>
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="font-semibold text-rez-navy dark:text-white truncate">{hotel.name}</h3>
        <div className="flex items-center gap-1 text-rez-gray-600 dark:text-gray-400 mt-1">
          <MapPin className="w-3.5 h-3.5" />
          <span className="text-xs truncate">{hotel.location}</span>
        </div>
        <p className="text-xs text-rez-gray-600 dark:text-gray-500 mt-0.5">{hotel.distance}</p>

        {/* Amenities */}
        <div className="flex flex-wrap gap-1 mt-2">
          {hotel.amenities.slice(0, 3).map((amenity) => (
            <span
              key={amenity}
              className="px-2 py-0.5 rounded-full bg-rez-gray-50 dark:bg-white/5 text-[10px] text-rez-gray-600 dark:text-gray-400"
            >
              {amenity}
            </span>
          ))}
        </div>

        {/* Price */}
        <div className="flex items-center justify-between mt-3 pt-3 border-t border-rez-gray-200 dark:border-white/5">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-lg font-bold text-rez-navy dark:text-white">₹{hotel.pricePerNight.toLocaleString()}</span>
              <span className="text-xs text-rez-gray-600 dark:text-gray-500 line-through">₹{hotel.originalPrice.toLocaleString()}</span>
            </div>
            <div className="flex items-center gap-1 text-emerald-400">
              <Coins className="w-3 h-3" />
              <span className="text-xs">Earn ₹{hotel.coinsEarned}</span>
            </div>
          </div>
          <Button variant="primary" size="sm">Book</Button>
        </div>
      </div>
    </div>
  );
};

export default HotelCard;
