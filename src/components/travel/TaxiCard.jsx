import { Car, Clock, MapPin, Coins, ArrowRight } from 'lucide-react';
import Button from '../common/Button';

const TaxiCard = ({ taxi }) => {
  const isAirport = taxi.type === 'Airport Taxi';

  return (
    <div className="p-4 rounded-2xl bg-white dark:bg-[#2C2C2E]">
      {/* Header */}
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <div className="p-2 rounded-lg bg-amber-500/20">
            <Car className="w-5 h-5 text-amber-400" />
          </div>
          <div>
            <p className="font-medium text-rez-navy dark:text-white">{taxi.type}</p>
            <p className="text-xs text-rez-gray-600 dark:text-gray-400">{taxi.carType}</p>
          </div>
        </div>
        {taxi.available && (
          <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-xs text-emerald-400">
            Available
          </span>
        )}
      </div>

      {/* Route or Description */}
      {isAirport ? (
        <div className="flex items-center gap-3 mb-3">
          <div className="flex-1">
            <p className="text-sm text-rez-navy dark:text-white">{taxi.from}</p>
          </div>
          <ArrowRight className="w-4 h-4 text-rez-gray-600 dark:text-gray-500" />
          <div className="flex-1 text-right">
            <p className="text-sm text-rez-navy dark:text-white">{taxi.to}</p>
          </div>
        </div>
      ) : (
        <p className="text-sm text-rez-gray-700 dark:text-gray-300 mb-3">{taxi.description}</p>
      )}

      {/* Details */}
      {isAirport && (
        <div className="flex items-center gap-4 mb-3 text-rez-gray-600 dark:text-gray-400">
          <div className="flex items-center gap-1">
            <MapPin className="w-3.5 h-3.5" />
            <span className="text-xs">{taxi.distance}</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock className="w-3.5 h-3.5" />
            <span className="text-xs">{taxi.duration}</span>
          </div>
        </div>
      )}

      {/* Price & CTA */}
      <div className="flex items-center justify-between pt-3 border-t border-rez-gray-200 dark:border-white/5">
        <div>
          <p className="text-lg font-bold text-rez-navy dark:text-white">₹{taxi.price}</p>
          <div className="flex items-center gap-1 text-emerald-400">
            <Coins className="w-3 h-3" />
            <span className="text-xs">Earn ₹{taxi.coinsEarned}</span>
          </div>
        </div>
        <Button variant="primary" size="sm">Book Now</Button>
      </div>
    </div>
  );
};

export default TaxiCard;
