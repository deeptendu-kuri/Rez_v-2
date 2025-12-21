import { MapPin, Star, Users, Coins, Gamepad2, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Badge from '../common/Badge';

const GamingCard = ({ venue }) => {
  const getTypeColor = () => {
    switch (venue.type) {
      case 'Gaming Arena': return 'from-purple-500/30 to-pink-500/30';
      case 'VR Experience': return 'from-blue-500/30 to-cyan-500/30';
      case 'Escape Room': return 'from-amber-500/30 to-red-500/30';
      case 'Gaming Cafe': return 'from-emerald-500/30 to-teal-500/30';
      default: return 'from-gray-500/30 to-gray-600/30';
    }
  };

  return (
    <Link
      to={`/event/gaming/${venue.id}`}
      className="block min-w-[240px] rounded-2xl overflow-hidden shrink-0 group"
    >
      {/* Image with gradient overlay */}
      <div className="relative h-32">
        <img
          src={venue.image}
          alt={venue.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className={`absolute inset-0 bg-gradient-to-t ${getTypeColor()} opacity-80`} />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />

        {/* Type badge */}
        <div className="absolute top-3 left-3">
          <Badge variant="secondary" size="xs">{venue.type}</Badge>
        </div>

        {/* Rating */}
        <div className="absolute top-3 right-3 flex items-center gap-1 px-2 py-0.5 rounded-full bg-black/60 backdrop-blur-sm">
          <Star className="w-3 h-3 text-amber-400 fill-amber-400" />
          <span className="text-xs text-white">{venue.rating}</span>
        </div>

        {/* Group friendly */}
        {venue.isGroupFriendly && (
          <div className="absolute bottom-3 left-3 flex items-center gap-1 px-2 py-0.5 rounded-full bg-purple-500/80">
            <Users className="w-3 h-3 text-white" />
            <span className="text-[10px] text-white">Group Fun</span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-4 bg-[#1C1C1E]">
        <h3 className="font-semibold text-white">{venue.name}</h3>

        <div className="flex items-center gap-1 text-gray-400 mt-1">
          <MapPin className="w-3.5 h-3.5" />
          <span className="text-xs">{venue.location}</span>
          <span className="text-gray-600">•</span>
          <span className="text-xs">{venue.distance}</span>
        </div>

        {/* Activities */}
        <div className="flex flex-wrap gap-1 mt-2">
          {venue.activities.slice(0, 3).map((activity) => (
            <span
              key={activity}
              className="px-2 py-0.5 rounded-full bg-white/5 text-[10px] text-gray-400"
            >
              {activity}
            </span>
          ))}
          {venue.activities.length > 3 && (
            <span className="text-[10px] text-gray-500">+{venue.activities.length - 3}</span>
          )}
        </div>

        {/* Offer */}
        {venue.offers.length > 0 && (
          <div className="mt-2 p-2 rounded-lg bg-emerald-500/10">
            <p className="text-[10px] text-emerald-400">{venue.offers[0]}</p>
          </div>
        )}

        {/* Price & Cashback */}
        <div className="flex items-center justify-between mt-3 pt-3 border-t border-white/5">
          <span className="text-sm text-gray-400">{venue.priceRange}</span>
          <div className="flex items-center gap-1 text-emerald-400">
            <Coins className="w-3.5 h-3.5" />
            <span className="text-xs font-medium">{venue.cashback}% back</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default GamingCard;
