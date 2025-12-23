import { Link } from 'react-router-dom';
import { Flame, MapPin, Users, TrendingUp, Zap } from 'lucide-react';

const trendingStoresData = [
  {
    id: 1,
    name: 'Paradise Biryani',
    logo: '🍛',
    offer: '20% Cashback',
    distance: '0.8 km',
    activity: '12 people earned here today',
    badge: 'Hot Deal',
    color: 'bg-orange-500'
  },
  {
    id: 2,
    name: 'Nike Store',
    logo: '👟',
    offer: '15% + Bonus Coins',
    distance: '1.2 km',
    activity: '8 people shopping now',
    badge: 'Trending',
    color: 'bg-red-500'
  },
  {
    id: 3,
    name: 'Wellness Spa',
    logo: '💆',
    offer: '25% Cashback',
    distance: '2.1 km',
    activity: '5 people booked today',
    badge: 'High Cashback',
    color: 'bg-emerald-500'
  },
  {
    id: 4,
    name: 'Fresh Mart',
    logo: '🛒',
    offer: '10% on Groceries',
    distance: '0.5 km',
    activity: '15 people bought today',
    badge: 'Nearby',
    color: 'bg-blue-500'
  },
  {
    id: 5,
    name: 'Cafe Noir',
    logo: '☕',
    offer: 'Buy 1 Get 1',
    distance: '0.9 km',
    activity: '20 people visited today',
    badge: 'Popular',
    color: 'bg-amber-500'
  }
];

const TrendingStores = () => {
  return (
    <div className="px-4 py-4">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h2 className="text-h3 font-poppins text-rez-navy dark:text-white flex items-center gap-2">
            <Flame className="w-5 h-5 text-orange-500" />
            Hot Right Now
          </h2>
          <p className="text-xs text-rez-gray-600 dark:text-gray-400 mt-1">
            Live activity • Real-time deals
          </p>
        </div>
        <Link to="/explore/map" className="text-sm font-medium text-rez-green-500">
          Map View
        </Link>
      </div>

      <div className="flex gap-3 overflow-x-auto hide-scrollbar pb-2">
        {trendingStoresData.map((store) => (
          <Link
            key={store.id}
            to={`/store/${store.id}`}
            className="shrink-0 w-[280px] p-4 bg-white dark:bg-white/10 border border-rez-gray-200 dark:border-white/10 rounded-2xl shadow-sm dark:shadow-none hover:shadow-lg dark:hover:border-white/20 transition-all active:scale-[0.98]"
          >
            {/* Header */}
            <div className="flex items-start gap-3 mb-3">
              {/* Logo */}
              <div className="w-14 h-14 rounded-xl bg-rez-gray-100 dark:bg-white/10 flex items-center justify-center text-3xl">
                {store.logo}
              </div>

              {/* Info */}
              <div className="flex-1">
                <h3 className="text-sm font-bold text-rez-navy dark:text-white mb-1 line-clamp-1">
                  {store.name}
                </h3>
                <div className="flex items-center gap-1 text-xs text-rez-gray-600 dark:text-gray-400">
                  <MapPin className="w-3 h-3" />
                  <span>{store.distance}</span>
                </div>
              </div>

              {/* Badge */}
              <div className={`px-2 py-1 ${store.color} rounded-full`}>
                <span className="text-[10px] font-bold text-white whitespace-nowrap">
                  {store.badge}
                </span>
              </div>
            </div>

            {/* Offer */}
            <div className="p-3 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 border border-emerald-500/20 rounded-xl mb-3">
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-emerald-500" />
                <span className="text-sm font-bold text-rez-navy dark:text-white">
                  {store.offer}
                </span>
              </div>
            </div>

            {/* Live Activity */}
            <div className="flex items-center gap-2 mb-3">
              <div className="relative flex items-center">
                <div className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
                <div className="absolute w-2 h-2 rounded-full bg-orange-500 animate-ping" />
              </div>
              <div className="flex items-center gap-1 text-xs text-orange-500 font-medium">
                <Users className="w-3.5 h-3.5" />
                <span>{store.activity}</span>
              </div>
            </div>

            {/* CTA */}
            <button className="w-full py-2.5 bg-rez-green-500 hover:bg-rez-green-600 text-white font-semibold rounded-xl transition-colors">
              Pay Now
            </button>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default TrendingStores;
