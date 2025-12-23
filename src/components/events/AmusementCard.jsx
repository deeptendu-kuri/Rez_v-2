import { MapPin, Star, Users, Coins, Ticket, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Badge from '../common/Badge';
import Button from '../common/Button';

const AmusementCard = ({ park }) => {
  return (
    <Link
      to={`/event/park/${park.id}`}
      className="block min-w-[280px] rounded-2xl overflow-hidden bg-rez-gray-100 dark:bg-[#1C1C1E] shrink-0 group"
    >
      {/* Image */}
      <div className="relative h-36">
        <img
          src={park.image}
          alt={park.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />

        {/* Type */}
        <div className="absolute top-3 left-3">
          <Badge variant="secondary" size="xs">{park.type}</Badge>
        </div>

        {/* Rating */}
        <div className="absolute top-3 right-3 flex items-center gap-1 px-2 py-0.5 rounded-full bg-white dark:bg-black/60 backdrop-blur-sm">
          <Star className="w-3 h-3 text-amber-400 fill-amber-400" />
          <span className="text-xs text-rez-navy dark:text-white">{park.rating}</span>
        </div>

        {/* Family badge */}
        {park.isFamily && (
          <div className="absolute bottom-3 left-3">
            <Badge variant="info" size="xs">
              <Users className="w-3 h-3 mr-1" />
              Family Friendly
            </Badge>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="font-semibold text-rez-navy dark:text-white">{park.name}</h3>

        <div className="flex items-center gap-1 text-rez-gray-600 dark:text-gray-400 mt-1">
          <MapPin className="w-3.5 h-3.5" />
          <span className="text-xs">{park.location}</span>
          <span className="text-rez-gray-700 dark:text-gray-600">•</span>
          <span className="text-xs">{park.distance}</span>
        </div>

        {/* Highlights */}
        <div className="flex flex-wrap gap-1 mt-2">
          {park.highlights.map((highlight) => (
            <span
              key={highlight}
              className="px-2 py-0.5 rounded-full bg-rez-gray-50 dark:bg-white/5 text-[10px] text-rez-gray-600 dark:text-gray-400"
            >
              {highlight}
            </span>
          ))}
        </div>

        {/* Offers */}
        {park.offers.length > 0 && (
          <div className="mt-3 p-2 rounded-lg bg-amber-500/10 border border-amber-500/20">
            <p className="text-xs text-amber-400">{park.offers[0]}</p>
          </div>
        )}

        {/* Price & CTA */}
        <div className="flex items-center justify-between mt-3 pt-3 border-t border-rez-gray-200 dark:border-white/5">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-lg font-semibold text-rez-navy dark:text-white">₹{park.price.adult}</span>
              <span className="text-xs text-rez-gray-600 dark:text-gray-500">/ adult</span>
            </div>
            <div className="flex items-center gap-1 text-emerald-400">
              <Coins className="w-3 h-3" />
              <span className="text-xs">{park.cashback}% cashback</span>
            </div>
          </div>
          <Button variant="primary" size="sm">
            <Ticket className="w-3.5 h-3.5 mr-1" />
            Buy Pass
          </Button>
        </div>
      </div>
    </Link>
  );
};

export default AmusementCard;
