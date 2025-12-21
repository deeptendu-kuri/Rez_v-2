import { Star, MapPin, Clock, Zap, Coins, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const GroceryStoreCard = ({ store, variant = 'default' }) => {
  if (variant === 'compact') {
    return (
      <Link
        to={`/grocery/store/${store.id}`}
        className="min-w-[180px] p-4 rounded-2xl bg-[#2C2C2E] shrink-0 active:scale-[0.98] transition-transform"
      >
        <div className="flex items-center gap-3 mb-2">
          <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center overflow-hidden">
            {store.logo ? (
              <img
                src={store.logo}
                alt={store.name}
                className="w-10 h-10 object-contain"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.parentElement.innerHTML = '<span class="text-xl">🏪</span>';
                }}
              />
            ) : (
              <span className="text-xl">🏪</span>
            )}
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="font-medium text-white truncate">{store.name}</h3>
            <div className="flex items-center gap-1">
              <Star className="w-3 h-3 text-amber-400 fill-amber-400" />
              <span className="text-xs text-white">{store.rating}</span>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2 text-xs text-gray-400 mb-2">
          <MapPin className="w-3 h-3" />
          <span>{store.distance}</span>
          {store.walkTime && (
            <>
              <span>•</span>
              <span>{store.walkTime}</span>
            </>
          )}
        </div>

        <div className="flex items-center gap-2">
          <span className="px-2 py-1 rounded-full bg-emerald-500/20 text-xs text-emerald-400">
            {store.cashbackPercent}% Cashback
          </span>
          {store.is60Min && (
            <span className="flex items-center gap-0.5 px-2 py-1 rounded-full bg-amber-500/20 text-xs text-amber-400">
              <Zap className="w-3 h-3" />
              {store.deliveryTime || '60-min'}
            </span>
          )}
        </div>
      </Link>
    );
  }

  return (
    <Link
      to={`/grocery/store/${store.id}`}
      className="p-4 rounded-2xl bg-[#2C2C2E] active:scale-[0.99] transition-transform"
    >
      <div className="flex gap-4">
        {/* Logo */}
        <div className="w-16 h-16 rounded-xl bg-white/10 flex items-center justify-center overflow-hidden shrink-0">
          {store.logo ? (
            <img
              src={store.logo}
              alt={store.name}
              className="w-12 h-12 object-contain"
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.parentElement.innerHTML = '<span class="text-2xl">🏪</span>';
              }}
            />
          ) : (
            <span className="text-2xl">🏪</span>
          )}
        </div>

        {/* Info */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2">
            <h3 className="font-semibold text-white truncate">{store.name}</h3>
            {store.isOpen && (
              <span className="flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                <span className="text-xs text-emerald-400">Open</span>
              </span>
            )}
          </div>

          <div className="flex items-center gap-3 mt-1">
            <div className="flex items-center gap-1">
              <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
              <span className="text-sm text-white">{store.rating}</span>
              <span className="text-xs text-gray-500">({store.reviews})</span>
            </div>
            <div className="flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5 text-gray-400" />
              <span className="text-sm text-gray-400">{store.distance}</span>
            </div>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-1.5 mt-2">
            {store.tags?.slice(0, 3).map((tag, index) => (
              <span
                key={index}
                className="px-2 py-0.5 rounded-full bg-white/10 text-[10px] text-gray-400"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <ChevronRight className="w-5 h-5 text-gray-500 shrink-0" />
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between mt-3 pt-3 border-t border-white/10">
        <div className="flex items-center gap-2">
          <Coins className="w-4 h-4 text-amber-400" />
          <span className="text-sm text-amber-400">{store.cashbackPercent}% ReZ Coins</span>
        </div>
        <div className="flex gap-2">
          {store.hasBillUpload && (
            <span className="px-2 py-1 rounded-lg bg-blue-500/20 text-xs text-blue-400">
              Bill Upload
            </span>
          )}
          <span className="px-3 py-1 rounded-lg bg-emerald-500 text-xs text-white font-medium">
            {store.type === 'online' ? 'Order Now' : 'Pay in Store'}
          </span>
        </div>
      </div>
    </Link>
  );
};

export default GroceryStoreCard;
