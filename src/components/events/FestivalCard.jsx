import { Calendar, MapPin, Store, Coins, Users, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Badge from '../common/Badge';

const FestivalCard = ({ festival }) => {
  return (
    <Link
      to={`/event/festival/${festival.id}`}
      className="block min-w-[260px] rounded-2xl overflow-hidden bg-rez-gray-100 dark:bg-[#1C1C1E] shrink-0 group"
    >
      {/* Image */}
      <div className="relative h-32">
        <img
          src={festival.image}
          alt={festival.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />

        {/* Type badge */}
        <div className="absolute top-3 left-3">
          <Badge variant="secondary" size="xs">{festival.type}</Badge>
        </div>

        {/* Entry */}
        <div className="absolute top-3 right-3">
          <Badge variant={festival.entry === 'Free' ? 'success' : 'secondary'} size="xs">
            {festival.entry === 'Free' ? 'FREE Entry' : `₹${festival.entry}`}
          </Badge>
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="font-semibold text-rez-navy dark:text-white">{festival.name}</h3>

        <div className="flex flex-wrap gap-2 mt-2">
          <div className="flex items-center gap-1 text-rez-gray-600 dark:text-gray-400">
            <Calendar className="w-3.5 h-3.5" />
            <span className="text-xs">{festival.date}</span>
          </div>
          <div className="flex items-center gap-1 text-rez-gray-600 dark:text-gray-400">
            <MapPin className="w-3.5 h-3.5" />
            <span className="text-xs">{festival.distance}</span>
          </div>
        </div>

        {/* Special tag */}
        <div className="mt-3 p-2 rounded-lg bg-emerald-500/10 border border-emerald-500/20">
          <div className="flex items-center gap-2">
            <Coins className="w-4 h-4 text-emerald-400" />
            <span className="text-xs text-emerald-400">{festival.specialTag}</span>
          </div>
          <p className="text-xs text-rez-gray-600 dark:text-gray-400 mt-0.5">
            Earn up to {festival.cashbackAtStalls}% at {festival.vendors}+ vendors
          </p>
        </div>

        {/* Highlights */}
        <div className="flex flex-wrap gap-1 mt-3">
          {festival.highlights.map((highlight) => (
            <span
              key={highlight}
              className="px-2 py-0.5 rounded-full bg-rez-gray-50 dark:bg-white/5 text-[10px] text-rez-gray-600 dark:text-gray-400"
            >
              {highlight}
            </span>
          ))}
        </div>

        {/* CTA */}
        <div className="flex items-center justify-between mt-3 pt-3 border-t border-rez-gray-200 dark:border-white/5">
          <div className="flex items-center gap-1 text-rez-gray-600 dark:text-gray-400">
            <Store className="w-3.5 h-3.5" />
            <span className="text-xs">{festival.vendors} vendors</span>
          </div>
          <span className="text-xs text-emerald-400 flex items-center gap-1">
            Explore <ChevronRight className="w-3 h-3" />
          </span>
        </div>
      </div>
    </Link>
  );
};

export default FestivalCard;
