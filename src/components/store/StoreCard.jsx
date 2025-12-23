import { Link } from 'react-router-dom';
import { Star, Clock, MapPin, Heart } from 'lucide-react';
import Badge from '../common/Badge';
import { useUser } from '../../contexts/UserContext';

const StoreCard = ({ store, variant = 'default' }) => {
  const { isStoresSaved, toggleSavedStore } = useUser();
  const isSaved = isStoresSaved(store.id);

  const handleSave = (e) => {
    e.preventDefault();
    e.stopPropagation();
    toggleSavedStore(store.id);
  };

  if (variant === 'list') {
    return (
      <Link
        to={`/store/${store.id}`}
        className="flex gap-4 p-4 bg-white dark:bg-[#2C2C2E] border border-rez-gray-200 dark:border-transparent shadow-sm dark:shadow-none rounded-2xl active:bg-[#3A3A3C] transition-colors"
      >
        {/* Image */}
        <div className="w-24 h-24 rounded-xl overflow-hidden shrink-0">
          <img
            src={store.image}
            alt={store.name}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-2">
            <h3 className="font-semibold text-rez-navy dark:text-white truncate">{store.name}</h3>
            <button onClick={handleSave} className="shrink-0 p-1">
              <Heart
                className={`w-5 h-5 ${isSaved ? 'fill-red-500 text-red-500' : 'text-rez-gray-600 dark:text-gray-400'}`}
              />
            </button>
          </div>

          {/* Badges */}
          <div className="flex flex-wrap gap-1 mt-1">
            {store.isHalal && <Badge variant="halal" size="xs">Halal</Badge>}
            {store.isVegan && <Badge variant="vegan" size="xs">Vegan</Badge>}
            {store.is60Min && <Badge variant="fast" size="xs">⚡ 60min</Badge>}
            {store.isPrive && <Badge variant="prive" size="xs">Privé</Badge>}
          </div>

          {/* Info Row */}
          <div className="flex items-center gap-3 mt-2 text-sm text-rez-gray-600 dark:text-gray-400">
            <span className="flex items-center gap-1">
              <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
              {store.rating}
            </span>
            <span className="flex items-center gap-1">
              <MapPin className="w-4 h-4" />
              {store.distance}
            </span>
            {store.deliveryTime && (
              <span className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                {store.deliveryTime}
              </span>
            )}
          </div>

          {/* Cashback */}
          <div className="mt-2">
            <span className="text-sm text-emerald-400 font-medium">
              {store.cashback}% cashback
            </span>
          </div>
        </div>
      </Link>
    );
  }

  // Default card variant
  return (
    <Link
      to={`/store/${store.id}`}
      className="min-w-[200px] w-[200px] bg-white dark:bg-[#2C2C2E] border border-rez-gray-200 dark:border-transparent shadow-sm dark:shadow-none rounded-2xl overflow-hidden active:bg-[#3A3A3C] transition-colors shrink-0"
    >
      {/* Image */}
      <div className="relative h-28">
        <img
          src={store.image}
          alt={store.name}
          className="w-full h-full object-cover"
        />

        {/* Save button */}
        <button
          onClick={handleSave}
          className="absolute top-2 right-2 p-2 rounded-full bg-white dark:bg-black/50 backdrop-blur"
        >
          <Heart
            className={`w-4 h-4 ${isSaved ? 'fill-red-500 text-red-500' : 'text-white'}`}
          />
        </button>

        {/* Cashback badge */}
        <div className="absolute bottom-2 left-2 px-2 py-1 rounded-full bg-emerald-500/90 backdrop-blur">
          <span className="text-xs font-medium text-rez-navy dark:text-white">{store.cashback}% back</span>
        </div>
      </div>

      {/* Content */}
      <div className="p-3">
        <h3 className="font-semibold text-rez-navy dark:text-white truncate">{store.name}</h3>

        {/* Badges */}
        <div className="flex gap-1 mt-1 overflow-hidden">
          {store.isHalal && <Badge variant="halal" size="xs">Halal</Badge>}
          {store.isVegan && <Badge variant="vegan" size="xs">Vegan</Badge>}
          {store.is60Min && <Badge variant="fast" size="xs">⚡</Badge>}
        </div>

        {/* Rating & Distance */}
        <div className="flex items-center gap-2 mt-2 text-xs text-rez-gray-600 dark:text-gray-400">
          <span className="flex items-center gap-0.5">
            <Star className="w-3 h-3 text-amber-400 fill-amber-400" />
            {store.rating}
          </span>
          <span>•</span>
          <span>{store.distance}</span>
          {store.deliveryTime && (
            <>
              <span>•</span>
              <span>{store.deliveryTime}</span>
            </>
          )}
        </div>
      </div>
    </Link>
  );
};

export default StoreCard;
