import { Link } from 'react-router-dom';
import { ChevronRight, Star, MapPin, Coins, Zap, Clock, Sparkles, Heart, TrendingUp } from 'lucide-react';

const StoreDiscovery = () => {
  const topStores = [
    { id: 1, name: 'Starbucks', rating: 4.5, cashback: 15, distance: '0.8 km', image: '☕', is60Min: true },
    { id: 2, name: 'Zara', rating: 4.3, cashback: 20, distance: '1.2 km', image: '👗', is60Min: true },
    { id: 3, name: 'Nike', rating: 4.7, cashback: 12, distance: '1.5 km', image: '👟', is60Min: false },
    { id: 4, name: 'Sephora', rating: 4.4, cashback: 18, distance: '2.0 km', image: '💄', is60Min: true },
    { id: 5, name: 'Apple', rating: 4.8, cashback: 5, distance: '2.5 km', image: '📱', is60Min: true },
  ];

  const newArrivals = [
    { id: 1, name: 'Blue Tokai Coffee', type: 'Cafe', cashback: 25, image: '☕', badge: 'NEW' },
    { id: 2, name: 'Cult.fit', type: 'Fitness', cashback: 15, image: '🏋️', badge: 'NEW' },
    { id: 3, name: 'Lenskart', type: 'Eyewear', cashback: 18, image: '👓', badge: 'NEW' },
  ];

  const popularNearby = [
    { id: 1, name: 'Chai Point', type: 'Beverages', orders: '2.3K', cashback: 12, image: '🍵' },
    { id: 2, name: 'Dominos', type: 'Pizza', orders: '5.1K', cashback: 8, image: '🍕' },
    { id: 3, name: 'Decathlon', type: 'Sports', orders: '1.8K', cashback: 10, image: '⛺' },
  ];

  return (
    <div className="py-4">
      {/* Today's Top Stores */}
      <div className="px-4 mb-6">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-orange-400" />
            <h2 className="font-semibold text-rez-navy dark:text-white">Today's Top Stores</h2>
          </div>
          <Link to="/explore" className="flex items-center gap-1 text-xs text-emerald-400">
            View all <ChevronRight className="w-3 h-3" />
          </Link>
        </div>
        <div className="flex gap-3 overflow-x-auto hide-scrollbar pb-2">
          {topStores.map((store) => (
            <Link
              key={store.id}
              to={`/store/${store.id}`}
              className="min-w-[140px] p-3 rounded-2xl bg-white dark:bg-[#2C2C2E] shrink-0 active:scale-[0.98] transition-transform"
            >
              <div className="flex items-start justify-between mb-2">
                <span className="text-3xl">{store.image}</span>
                {store.is60Min && (
                  <span className="flex items-center gap-0.5 px-1.5 py-0.5 rounded-full bg-amber-500/20 text-[10px] text-amber-400">
                    <Zap className="w-2.5 h-2.5" />
                    60m
                  </span>
                )}
              </div>
              <h3 className="text-sm font-medium text-rez-navy dark:text-white">{store.name}</h3>
              <div className="flex items-center gap-1 mt-1">
                <Star className="w-3 h-3 text-amber-400 fill-amber-400" />
                <span className="text-xs text-rez-gray-600 dark:text-gray-400">{store.rating}</span>
                <span className="text-rez-gray-700 dark:text-gray-600">•</span>
                <MapPin className="w-3 h-3 text-rez-gray-600 dark:text-gray-500" />
                <span className="text-xs text-rez-gray-600 dark:text-gray-400">{store.distance}</span>
              </div>
              <div className="flex items-center gap-1 mt-2">
                <Coins className="w-3 h-3 text-emerald-400" />
                <span className="text-xs text-emerald-400">{store.cashback}% cashback</span>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* New Arrivals */}
      <div className="px-4 mb-6">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-purple-400" />
            <h2 className="font-semibold text-rez-navy dark:text-white">New Arrivals</h2>
          </div>
          <Link to="/new" className="flex items-center gap-1 text-xs text-emerald-400">
            View all <ChevronRight className="w-3 h-3" />
          </Link>
        </div>
        <div className="flex gap-3 overflow-x-auto hide-scrollbar pb-2">
          {newArrivals.map((store) => (
            <Link
              key={store.id}
              to={`/store/${store.id}`}
              className="min-w-[160px] p-3 rounded-2xl bg-gradient-to-br from-purple-500/20 to-pink-500/10 border border-purple-500/20 shrink-0 active:scale-[0.98] transition-transform relative"
            >
              <span className="absolute top-2 right-2 px-1.5 py-0.5 rounded-full bg-purple-500 text-[10px] text-rez-navy dark:text-white font-bold">
                {store.badge}
              </span>
              <span className="text-3xl block mb-2">{store.image}</span>
              <h3 className="text-sm font-medium text-rez-navy dark:text-white">{store.name}</h3>
              <p className="text-xs text-rez-gray-600 dark:text-gray-400">{store.type}</p>
              <div className="flex items-center gap-1 mt-2">
                <Coins className="w-3 h-3 text-emerald-400" />
                <span className="text-xs text-emerald-400">{store.cashback}% cashback</span>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Popular Near You */}
      <div className="px-4">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <Heart className="w-5 h-5 text-red-400" />
            <h2 className="font-semibold text-rez-navy dark:text-white">Popular Near You</h2>
          </div>
          <Link to="/popular" className="flex items-center gap-1 text-xs text-emerald-400">
            View all <ChevronRight className="w-3 h-3" />
          </Link>
        </div>
        <div className="space-y-3">
          {popularNearby.map((store) => (
            <Link
              key={store.id}
              to={`/store/${store.id}`}
              className="flex items-center gap-3 p-3 rounded-2xl bg-white dark:bg-[#2C2C2E] active:scale-[0.99] transition-transform"
            >
              <div className="w-12 h-12 rounded-xl bg-rez-gray-50 dark:bg-white/5 flex items-center justify-center shrink-0">
                <span className="text-2xl">{store.image}</span>
              </div>
              <div className="flex-1">
                <h3 className="text-sm font-medium text-rez-navy dark:text-white">{store.name}</h3>
                <p className="text-xs text-rez-gray-600 dark:text-gray-400">{store.type} • {store.orders} orders</p>
              </div>
              <div className="flex items-center gap-1 px-2 py-1 rounded-full bg-emerald-500/20">
                <Coins className="w-3 h-3 text-emerald-400" />
                <span className="text-xs text-emerald-400">{store.cashback}%</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StoreDiscovery;
