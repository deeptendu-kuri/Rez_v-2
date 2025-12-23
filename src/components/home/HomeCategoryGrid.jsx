import { Link } from 'react-router-dom';
import { ChevronRight, Coins } from 'lucide-react';

const HomeCategoryGrid = () => {
  const categories = [
    { id: 'food', name: 'Dining', icon: '🍽️', cashback: 20, link: '/food', color: 'from-orange-500/20 to-red-500/20' },
    { id: 'grocery', name: 'Grocery', icon: '🥬', cashback: 15, link: '/grocery', color: 'from-green-500/20 to-emerald-500/20' },
    { id: 'fashion', name: 'Fashion', icon: '👗', cashback: 35, link: '/fashion', color: 'from-pink-500/20 to-purple-500/20' },
    { id: 'beauty', name: 'Beauty', icon: '💆', cashback: 25, link: '/beauty', color: 'from-rose-500/20 to-violet-500/20' },
    { id: 'health', name: 'Health', icon: '🏥', cashback: 12, link: '/healthcare', color: 'from-blue-500/20 to-cyan-500/20' },
    { id: 'fitness', name: 'Fitness', icon: '🏋️', cashback: 18, link: '/fitness', color: 'from-red-500/20 to-orange-500/20' },
    { id: 'electronics', name: 'Electronics', icon: '📱', cashback: 8, link: '/electronics', color: 'from-blue-500/20 to-indigo-500/20' },
    { id: 'services', name: 'Home', icon: '🔧', cashback: 15, link: '/home-services', color: 'from-cyan-500/20 to-blue-500/20' },
    { id: 'travel', name: 'Travel', icon: '✈️', cashback: 20, link: '/travel', color: 'from-emerald-500/20 to-teal-500/20' },
    { id: 'luxury', name: 'Luxury', icon: '👑', cashback: 6, link: '/store/luxury', color: 'from-amber-500/20 to-yellow-500/20' },
  ];

  return (
    <div className="px-4 py-4">
      {/* Section Header */}
      <div className="flex items-center justify-between mb-4">
        <div>
          <h2 className="text-lg font-bold text-rez-navy dark:text-white">🎉 Earn rewards in every category</h2>
          <p className="text-xs text-rez-gray-600 dark:text-gray-400 mt-0.5">Shop anywhere. Earn everywhere.</p>
        </div>
        <Link to="/categories" className="flex items-center gap-1 text-xs text-emerald-400">
          All <ChevronRight className="w-3 h-3" />
        </Link>
      </div>

      {/* Category Grid - 2 rows scrollable */}
      <div className="grid grid-rows-2 grid-flow-col gap-3 overflow-x-auto hide-scrollbar pb-2">
        {categories.map((category) => (
          <Link
            key={category.id}
            to={category.link}
            className={`min-w-[100px] p-3 rounded-2xl bg-gradient-to-br ${category.color} border border-white/5 active:scale-[0.98] transition-transform`}
          >
            <span className="text-2xl block mb-1">{category.icon}</span>
            <h3 className="text-sm font-medium text-rez-navy dark:text-white">{category.name}</h3>
            <div className="flex items-center gap-1 mt-1">
              <Coins className="w-3 h-3 text-amber-400" />
              <span className="text-[10px] text-amber-400">Up to {category.cashback}%</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default HomeCategoryGrid;
