import { Star, MapPin, Clock, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const BeautyNearbyCard = ({ store }) => {
  return (
    <Link
      to={`/store/${store.id}`}
      className="min-w-[200px] p-4 rounded-2xl bg-[#2C2C2E] shrink-0 active:scale-[0.98] transition-transform"
    >
      <div className="flex items-center gap-3">
        {/* Logo */}
        <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center overflow-hidden">
          {store.logo ? (
            <img
              src={store.logo}
              alt={store.name}
              className="w-10 h-10 object-contain"
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.parentElement.innerHTML = '<span class="text-xl">💇</span>';
              }}
            />
          ) : (
            <span className="text-xl">💇</span>
          )}
        </div>

        <div className="flex-1 min-w-0">
          <h3 className="font-medium text-white truncate">{store.name}</h3>
          <p className="text-xs text-gray-400">{store.type}</p>
        </div>
      </div>

      {/* Stats */}
      <div className="flex items-center gap-3 mt-3">
        <div className="flex items-center gap-1">
          <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
          <span className="text-xs text-white">{store.rating}</span>
        </div>
        <div className="flex items-center gap-1">
          <MapPin className="w-3.5 h-3.5 text-gray-400" />
          <span className="text-xs text-gray-400">{store.distance}</span>
        </div>
        <div className="flex items-center gap-1">
          <Clock className="w-3.5 h-3.5 text-gray-400" />
          <span className="text-xs text-gray-400">{store.walkTime}</span>
        </div>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between mt-3 pt-3 border-t border-white/10">
        <div>
          <span className="px-2 py-1 rounded-full bg-emerald-500/20 text-xs text-emerald-400">
            {store.cashback}% Cashback
          </span>
        </div>
        {store.isOpen && (
          <div className="flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-xs text-emerald-400">Open</span>
          </div>
        )}
      </div>

      {/* Next Slot */}
      {store.nextSlot && (
        <div className="flex items-center justify-between mt-2">
          <span className="text-xs text-gray-400">Next slot: {store.nextSlot}</span>
          <ChevronRight className="w-4 h-4 text-gray-500" />
        </div>
      )}
    </Link>
  );
};

export default BeautyNearbyCard;
