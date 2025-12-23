import { Link } from 'react-router-dom';
import { Flame, Clock, Award, TrendingDown, Users, Video, Sparkles, Star } from 'lucide-react';

const discoveryOptions = [
  { id: 'trending', label: 'Trending Near You', icon: Flame, color: 'text-orange-500', path: '/explore/trending' },
  { id: '60min', label: '60 Min Delivery', icon: Clock, color: 'text-blue-500', path: '/explore/category/food' },
  { id: 'cashback', label: 'Highest Cashback', icon: Award, color: 'text-emerald-500', path: '/explore/category/luxury' },
  { id: 'lowest', label: 'Lowest Price', icon: TrendingDown, color: 'text-purple-500', path: '/explore/compare-smart-find' },
  { id: 'friends', label: 'Friends Bought', icon: Users, color: 'text-pink-500', path: '/explore/friends' },
  { id: 'reels', label: 'Reels', icon: Video, color: 'text-red-500', path: '/explore/trending' },
  { id: 'new', label: 'New Stores', icon: Sparkles, color: 'text-amber-500', path: '/explore/trending' },
  { id: 'rated', label: 'Top Rated', icon: Star, color: 'text-yellow-500', path: '/explore/trending' },
];

const QuickDiscoveryChips = ({ onSelect }) => {
  return (
    <div className="px-4 py-3">
      <div className="flex gap-2 overflow-x-auto hide-scrollbar">
        {discoveryOptions.map((option) => {
          const Icon = option.icon;
          return (
            <Link
              key={option.id}
              to={option.path}
              className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-white dark:bg-white/10 border border-rez-gray-200 dark:border-white/10 hover:border-rez-green-500 dark:hover:border-emerald-500 active:scale-95 transition-all shrink-0 shadow-sm dark:shadow-none"
            >
              <Icon className={`w-4 h-4 ${option.color}`} />
              <span className="text-sm font-medium text-rez-navy dark:text-white whitespace-nowrap">
                {option.label}
              </span>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default QuickDiscoveryChips;
