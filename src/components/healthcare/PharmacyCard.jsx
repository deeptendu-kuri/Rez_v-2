import { Star, MapPin, Clock, Truck, Coins } from 'lucide-react';
import { Link } from 'react-router-dom';

const PharmacyCard = ({ pharmacy }) => {
  return (
    <Link
      to={`/healthcare/pharmacy/${pharmacy.id}`}
      className="min-w-[200px] p-4 rounded-2xl bg-white dark:bg-[#2C2C2E] shrink-0 active:scale-[0.98] transition-transform"
    >
      <div className="flex items-center gap-3 mb-3">
        <div className="w-12 h-12 rounded-xl bg-rez-gray-100 dark:bg-white/10 flex items-center justify-center overflow-hidden">
          {pharmacy.logo ? (
            <img
              src={pharmacy.logo}
              alt={pharmacy.name}
              className="w-10 h-10 object-contain"
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.parentElement.innerHTML = '<span class="text-xl">💊</span>';
              }}
            />
          ) : (
            <span className="text-xl">💊</span>
          )}
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="font-medium text-rez-navy dark:text-white truncate">{pharmacy.name}</h3>
          <div className="flex items-center gap-1">
            <Star className="w-3 h-3 text-amber-400 fill-amber-400" />
            <span className="text-xs text-rez-navy dark:text-white">{pharmacy.rating}</span>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap gap-2 mb-3">
        {pharmacy.tags?.slice(0, 2).map((tag, index) => (
          <span
            key={index}
            className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-[10px] text-emerald-400"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="space-y-1.5">
        {pharmacy.distance !== 'Online' && (
          <div className="flex items-center gap-2">
            <MapPin className="w-3.5 h-3.5 text-rez-gray-600 dark:text-gray-400" />
            <span className="text-xs text-rez-gray-600 dark:text-gray-400">{pharmacy.distance}</span>
          </div>
        )}
        {pharmacy.hasDelivery && (
          <div className="flex items-center gap-2">
            <Truck className="w-3.5 h-3.5 text-blue-400" />
            <span className="text-xs text-blue-400">Delivery in {pharmacy.deliveryTime}</span>
          </div>
        )}
        {pharmacy.is24Hour && (
          <div className="flex items-center gap-2">
            <Clock className="w-3.5 h-3.5 text-emerald-400" />
            <span className="text-xs text-emerald-400">Open 24/7</span>
          </div>
        )}
      </div>

      <div className="flex items-center justify-between mt-3 pt-3 border-t border-rez-gray-200 dark:border-white/10">
        <div className="flex items-center gap-1">
          <Coins className="w-4 h-4 text-amber-400" />
          <span className="text-sm text-amber-400">{pharmacy.cashbackPercent}% cashback</span>
        </div>
        <span className={`w-2 h-2 rounded-full ${pharmacy.isOpen ? 'bg-emerald-400' : 'bg-red-400'}`} />
      </div>
    </Link>
  );
};

export default PharmacyCard;
