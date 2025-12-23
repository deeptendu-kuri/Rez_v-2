import { Link } from 'react-router-dom';
import { Sparkles, Coins, MapPin, Clock, TrendingUp } from 'lucide-react';

const smartPicksData = [
  {
    id: 1,
    type: 'similar-users',
    title: 'Popular with people like you',
    items: [
      {
        id: 1,
        name: 'Premium Haircut',
        store: 'Style Studio',
        price: 399,
        cashback: '20%',
        distance: '0.6 km',
        buyers: 45
      },
      {
        id: 2,
        name: 'Veg Thali',
        store: 'Sagar Ratna',
        price: 250,
        cashback: '15%',
        distance: '1.2 km',
        buyers: 78
      }
    ]
  },
  {
    id: 2,
    type: 'budget',
    title: 'Best deals in your budget',
    items: [
      {
        id: 3,
        name: 'Coffee & Sandwich',
        store: 'Cafe Delight',
        price: 180,
        cashback: '12%',
        distance: '0.4 km',
        trending: true
      },
      {
        id: 4,
        name: 'Movie Ticket',
        store: 'PVR Cinemas',
        price: 350,
        cashback: '10%',
        distance: '2.1 km',
        trending: true
      }
    ]
  },
  {
    id: 3,
    type: 'time-based',
    title: 'Perfect for lunch time',
    items: [
      {
        id: 5,
        name: 'Chicken Biryani',
        store: 'Biryani House',
        price: 280,
        cashback: '18%',
        distance: '0.9 km',
        delivery: '25 min'
      },
      {
        id: 6,
        name: 'North Indian Thali',
        store: 'Punjabi Dhaba',
        price: 320,
        cashback: '15%',
        distance: '1.5 km',
        delivery: '30 min'
      }
    ]
  }
];

const SmartPicks = () => {
  return (
    <div className="px-4 py-4">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h2 className="text-h3 font-poppins text-rez-navy dark:text-white flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-purple-500" />
            Smart Picks by ReZ
          </h2>
          <p className="text-xs text-rez-gray-600 dark:text-gray-400 mt-1">
            Based on what people like you are buying
          </p>
        </div>
      </div>

      <div className="space-y-6">
        {smartPicksData.map((section) => (
          <div key={section.id}>
            {/* Section Title */}
            <h3 className="text-sm font-semibold text-rez-navy dark:text-white mb-3 flex items-center gap-2">
              <div className="w-1 h-4 bg-purple-500 rounded-full" />
              {section.title}
            </h3>

            {/* Items */}
            <div className="space-y-2">
              {section.items.map((item) => (
                <Link
                  key={item.id}
                  to={`/explore/product/${item.id}`}
                  className="block p-3 bg-white dark:bg-white/10 border border-rez-gray-200 dark:border-white/10 rounded-xl hover:border-purple-500/30 dark:hover:border-purple-500/30 transition-all"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <h4 className="text-sm font-semibold text-rez-navy dark:text-white mb-1">
                        {item.name}
                      </h4>
                      <p className="text-xs text-rez-green-500 font-medium mb-2">
                        {item.store}
                      </p>
                      <div className="flex items-center gap-3 text-xs text-rez-gray-600 dark:text-gray-400">
                        <div className="flex items-center gap-1">
                          <MapPin className="w-3 h-3" />
                          <span>{item.distance}</span>
                        </div>
                        {item.delivery && (
                          <>
                            <span>•</span>
                            <div className="flex items-center gap-1">
                              <Clock className="w-3 h-3" />
                              <span>{item.delivery}</span>
                            </div>
                          </>
                        )}
                        {item.buyers && (
                          <>
                            <span>•</span>
                            <span className="text-orange-500 font-medium">
                              {item.buyers} bought
                            </span>
                          </>
                        )}
                        {item.trending && (
                          <>
                            <span>•</span>
                            <div className="flex items-center gap-1 text-orange-500">
                              <TrendingUp className="w-3 h-3" />
                              <span className="font-medium">Trending</span>
                            </div>
                          </>
                        )}
                      </div>
                    </div>

                    <div className="text-right ml-3">
                      <p className="text-lg font-bold text-rez-navy dark:text-white mb-1">
                        ₹{item.price}
                      </p>
                      <div className="flex items-center gap-1 px-2 py-0.5 bg-emerald-500/20 rounded-full">
                        <Coins className="w-3 h-3 text-emerald-500" />
                        <span className="text-xs font-semibold text-emerald-500">
                          {item.cashback}
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* AI Info */}
      <div className="mt-4 p-3 bg-purple-500/10 border border-purple-500/20 rounded-xl">
        <div className="flex items-start gap-2">
          <Sparkles className="w-4 h-4 text-purple-500 mt-0.5" />
          <p className="text-xs text-rez-gray-700 dark:text-gray-300">
            These picks are personalized based on your budget, location, time of day, and what similar users are choosing.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SmartPicks;
