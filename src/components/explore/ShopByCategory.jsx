import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

const categories = [
  { id: 'food', name: 'Food & Dining', icon: '🍔', avgCashback: '12%', stores: 234 },
  { id: 'fashion', name: 'Fashion', icon: '🛍', avgCashback: '15%', stores: 156 },
  { id: 'electronics', name: 'Electronics', icon: '📱', avgCashback: '8%', stores: 89 },
  { id: 'beauty', name: 'Beauty & Wellness', icon: '💄', avgCashback: '18%', stores: 178 },
  { id: 'grocery', name: 'Grocery', icon: '🛒', avgCashback: '5%', stores: 312 },
  { id: 'healthcare', name: 'Healthcare', icon: '🏥', avgCashback: '10%', stores: 145 },
  { id: 'fitness', name: 'Fitness', icon: '🏋️', avgCashback: '20%', stores: 67 },
  { id: 'home', name: 'Home Services', icon: '🏠', avgCashback: '15%', stores: 98 },
  { id: 'travel', name: 'Travel', icon: '✈️', avgCashback: '12%', stores: 54 },
  { id: 'events', name: 'Events', icon: '🎉', avgCashback: '10%', stores: 87 },
  { id: 'luxury', name: 'Luxury', icon: '💎', avgCashback: '25%', stores: 23 },
];

const ShopByCategory = () => {
  return (
    <div className="px-4 py-4">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-h3 font-poppins text-rez-navy dark:text-white">
          Shop by Category
        </h2>
      </div>

      <div className="grid grid-cols-2 gap-3">
        {categories.map((category) => (
          <Link
            key={category.id}
            to={`/explore/category/${category.id}`}
            className="p-4 bg-white dark:bg-white/10 border border-rez-gray-200 dark:border-white/10 rounded-2xl shadow-sm dark:shadow-none hover:shadow-md dark:hover:border-white/20 transition-all active:scale-[0.98]"
          >
            <div className="flex items-start justify-between mb-3">
              <div className="w-12 h-12 rounded-xl bg-rez-gray-100 dark:bg-white/10 flex items-center justify-center text-2xl">
                {category.icon}
              </div>
              <ChevronRight className="w-4 h-4 text-rez-gray-400 dark:text-gray-500" />
            </div>
            <h3 className="text-sm font-semibold text-rez-navy dark:text-white mb-1">
              {category.name}
            </h3>
            <div className="flex items-center gap-2">
              <span className="text-xs text-emerald-500 font-semibold">
                {category.avgCashback} avg
              </span>
              <span className="text-xs text-rez-gray-600 dark:text-gray-500">
                {category.stores} stores
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ShopByCategory;
