import { Calendar, Coins, Plane, Building2, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const DestinationCard = ({ destination }) => {
  return (
    <Link
      to={`/travel/destination/${destination.id}`}
      className="block min-w-[200px] rounded-2xl overflow-hidden shrink-0 group"
    >
      {/* Image */}
      <div className="relative h-48">
        <img
          src={destination.image}
          alt={destination.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

        {/* Content overlay */}
        <div className="absolute inset-0 p-4 flex flex-col justify-end">
          <h3 className="text-xl font-bold text-white">{destination.name}</h3>

          <div className="flex items-center gap-1 text-gray-300 mt-1">
            <Calendar className="w-3.5 h-3.5" />
            <span className="text-xs">Best: {destination.bestTime}</span>
          </div>

          {/* Savings */}
          <div className="mt-2 px-2 py-1 rounded-lg bg-emerald-500/20 border border-emerald-500/30 inline-flex items-center gap-1 self-start">
            <Coins className="w-3.5 h-3.5 text-emerald-400" />
            <span className="text-xs text-emerald-400">Avg save ₹{destination.savings.toLocaleString()}</span>
          </div>

          {/* Quick prices */}
          <div className="flex items-center gap-3 mt-2">
            <div className="flex items-center gap-1">
              <Plane className="w-3 h-3 text-gray-400" />
              <span className="text-xs text-gray-300">₹{destination.flightsFrom.toLocaleString()}</span>
            </div>
            <div className="flex items-center gap-1">
              <Building2 className="w-3 h-3 text-gray-400" />
              <span className="text-xs text-gray-300">₹{destination.hotelsFrom.toLocaleString()}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="p-3 bg-[#2C2C2E] flex items-center justify-between">
        <div className="flex gap-2">
          {destination.highlights.slice(0, 2).map((h) => (
            <span key={h} className="text-[10px] text-gray-400">{h}</span>
          ))}
        </div>
        <ChevronRight className="w-4 h-4 text-gray-500" />
      </div>
    </Link>
  );
};

export default DestinationCard;
