import { Star, Zap, Store, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const FashionStoreCard = ({ store }) => {
  return (
    <Link
      to={`/store/${store.id}`}
      className="min-w-[200px] p-4 rounded-2xl bg-[#2C2C2E] shrink-0 active:scale-[0.98] transition-transform"
    >
      <div className="flex items-center gap-3">
        {/* Store Logo */}
        <div className="w-14 h-14 rounded-xl bg-white/10 flex items-center justify-center overflow-hidden">
          {store.logo.startsWith('http') ? (
            <img
              src={store.logo}
              alt={store.name}
              className="w-10 h-10 object-contain"
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.parentElement.innerHTML = `<span class="text-2xl">🏪</span>`;
              }}
            />
          ) : (
            <span className="text-2xl">{store.logo}</span>
          )}
        </div>

        <div className="flex-1 min-w-0">
          <h3 className="font-semibold text-white truncate">{store.name}</h3>
          <div className="flex items-center gap-2 mt-0.5">
            <div className="flex items-center gap-1">
              <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
              <span className="text-xs text-white">{store.rating}</span>
            </div>
            <span className="text-xs text-gray-500">•</span>
            <div className="flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5 text-gray-400" />
              <span className="text-xs text-gray-400">{store.distance}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Badges */}
      <div className="flex flex-wrap gap-2 mt-3">
        <span className="px-2 py-1 rounded-full bg-emerald-500/20 text-xs text-emerald-400">
          {store.cashback}% Cashback
        </span>
        {store.is60Min && (
          <span className="flex items-center gap-1 px-2 py-1 rounded-full bg-amber-500/20 text-xs text-amber-400">
            <Zap className="w-3 h-3" />
            60-min Try
          </span>
        )}
        {store.hasPickup && (
          <span className="flex items-center gap-1 px-2 py-1 rounded-full bg-blue-500/20 text-xs text-blue-400">
            <Store className="w-3 h-3" />
            Pickup
          </span>
        )}
      </div>

      {/* Categories */}
      <div className="flex flex-wrap gap-1 mt-2">
        {store.categories.slice(0, 3).map((cat) => (
          <span key={cat} className="text-[10px] text-gray-500 capitalize">
            {cat}
          </span>
        ))}
      </div>
    </Link>
  );
};

export default FashionStoreCard;
