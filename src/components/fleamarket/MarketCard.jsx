import { MapPin, Clock, Store, Coins, Users, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Badge from '../common/Badge';

const MarketCard = ({ market, variant = 'default' }) => {
  const isLive = market.isLive;

  if (variant === 'featured') {
    return (
      <Link
        to={`/flea-market/${market.id}`}
        className="block relative rounded-3xl overflow-hidden min-w-[300px] shrink-0"
      >
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={market.image}
            alt={market.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
        </div>

        {/* Content */}
        <div className="relative p-5 min-h-[200px] flex flex-col justify-end">
          {/* Live badge */}
          {isLive && (
            <div className="absolute top-4 left-4">
              <Badge variant="danger" size="sm" className="animate-pulse">
                <span className="w-2 h-2 rounded-full bg-white mr-1.5" />
                LIVE NOW
              </Badge>
            </div>
          )}

          {/* Visitors */}
          {isLive && market.visitors > 0 && (
            <div className="absolute top-4 right-4 flex items-center gap-1.5 px-2 py-1 rounded-full bg-white dark:bg-black/50 backdrop-blur-sm">
              <Users className="w-3 h-3 text-emerald-400" />
              <span className="text-xs text-rez-navy dark:text-white">{market.visitors}</span>
            </div>
          )}

          <h3 className="text-xl font-bold text-rez-navy dark:text-white mb-1">{market.name}</h3>

          <div className="flex items-center gap-2 text-rez-gray-700 dark:text-gray-300 text-sm mb-2">
            <MapPin className="w-3.5 h-3.5" />
            <span>{market.location}</span>
            <span className="text-rez-gray-600 dark:text-gray-500">•</span>
            <span>{market.distance}</span>
          </div>

          <div className="flex items-center gap-2 text-rez-gray-700 dark:text-gray-300 text-sm mb-3">
            <Clock className="w-3.5 h-3.5" />
            <span>{market.date} • {market.time}</span>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-rez-gray-100 dark:bg-white/10">
                <Store className="w-3.5 h-3.5 text-purple-400" />
                <span className="text-xs text-rez-navy dark:text-white">{market.stallCount} stalls</span>
              </div>
              <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/20">
                <Coins className="w-3.5 h-3.5 text-emerald-400" />
                <span className="text-xs text-emerald-400">Up to {market.maxCashback}%</span>
              </div>
            </div>
            <ChevronRight className="w-5 h-5 text-white/50" />
          </div>
        </div>
      </Link>
    );
  }

  // Default compact card
  return (
    <Link
      to={`/flea-market/${market.id}`}
      className="block p-4 rounded-2xl bg-white dark:bg-[#2C2C2E] hover:bg-rez-gray-200 dark:bg-[#3C3C3E] transition-colors"
    >
      <div className="flex gap-4">
        <div className="w-20 h-20 rounded-xl overflow-hidden shrink-0">
          <img
            src={market.image}
            alt={market.name}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-2">
            <h3 className="font-semibold text-rez-navy dark:text-white truncate">{market.name}</h3>
            {isLive && (
              <Badge variant="danger" size="xs">LIVE</Badge>
            )}
          </div>

          <div className="flex items-center gap-1.5 text-rez-gray-600 dark:text-gray-400 text-sm mt-1">
            <MapPin className="w-3 h-3" />
            <span className="truncate">{market.location} • {market.distance}</span>
          </div>

          <div className="flex items-center gap-1.5 text-rez-gray-600 dark:text-gray-400 text-sm mt-0.5">
            <Clock className="w-3 h-3" />
            <span>{market.date} • {market.time}</span>
          </div>

          <div className="flex items-center gap-2 mt-2">
            <span className="text-xs text-purple-400">{market.stallCount} stalls</span>
            <span className="text-rez-gray-700 dark:text-gray-600">•</span>
            <span className="text-xs text-emerald-400">{market.maxCashback}% coins</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default MarketCard;
