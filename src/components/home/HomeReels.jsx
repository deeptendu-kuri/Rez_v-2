import { Link } from 'react-router-dom';
import { ChevronRight, Play, Heart, Bookmark, ShoppingBag } from 'lucide-react';

const HomeReels = () => {
  const reels = [
    { id: 1, user: 'Priya M.', avatar: '👩', title: 'Saved ₹2,500!', views: '12.5K', likes: '1.2K', store: 'Zara', thumbnail: '👗' },
    { id: 2, user: 'Rahul K.', avatar: '👨', title: 'Best coffee deal', views: '8.3K', likes: '890', store: 'Starbucks', thumbnail: '☕' },
    { id: 3, user: 'Sneha R.', avatar: '👩‍🦱', title: 'Salon experience', views: '15.2K', likes: '2.1K', store: 'Lakme', thumbnail: '💇' },
    { id: 4, user: 'Amit P.', avatar: '🧔', title: 'Gym membership', views: '6.7K', likes: '560', store: 'Cult.fit', thumbnail: '🏋️' },
    { id: 5, user: 'Kavita S.', avatar: '👩‍💼', title: 'Tech unboxing', views: '22.1K', likes: '3.4K', store: 'Croma', thumbnail: '📱' },
  ];

  return (
    <div className="px-4 py-4">
      {/* Section Header */}
      <div className="flex items-center justify-between mb-3">
        <div>
          <h2 className="font-semibold text-rez-navy dark:text-white">🔥 Real people. Real savings.</h2>
          <p className="text-xs text-rez-gray-600 dark:text-gray-400">Watch how others save with ReZ</p>
        </div>
        <Link to="/reels" className="flex items-center gap-1 text-xs text-emerald-400">
          View all <ChevronRight className="w-3 h-3" />
        </Link>
      </div>

      {/* Reels Horizontal Scroll */}
      <div className="flex gap-3 overflow-x-auto hide-scrollbar pb-2">
        {reels.map((reel) => (
          <Link
            key={reel.id}
            to={`/reel/${reel.id}`}
            className="min-w-[140px] h-[200px] rounded-2xl bg-gradient-to-b from-purple-500/30 to-pink-500/30 shrink-0 relative overflow-hidden active:scale-[0.98] transition-transform"
          >
            {/* Thumbnail */}
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-5xl opacity-50">{reel.thumbnail}</span>
            </div>

            {/* Play Button */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur flex items-center justify-center">
                <Play className="w-5 h-5 text-rez-navy dark:text-white fill-white ml-0.5" />
              </div>
            </div>

            {/* User Info Top */}
            <div className="absolute top-2 left-2 right-2 flex items-center gap-2">
              <span className="text-lg">{reel.avatar}</span>
              <span className="text-xs text-rez-navy dark:text-white font-medium truncate">{reel.user}</span>
            </div>

            {/* Actions Right */}
            <div className="absolute right-2 top-1/2 -translate-y-1/2 flex flex-col gap-3">
              <button className="p-1.5 rounded-full bg-rez-gray-100 dark:bg-white/10">
                <Heart className="w-4 h-4 text-rez-navy dark:text-white" />
              </button>
              <button className="p-1.5 rounded-full bg-rez-gray-100 dark:bg-white/10">
                <Bookmark className="w-4 h-4 text-rez-navy dark:text-white" />
              </button>
              <button className="p-1.5 rounded-full bg-rez-gray-100 dark:bg-white/10">
                <ShoppingBag className="w-4 h-4 text-rez-navy dark:text-white" />
              </button>
            </div>

            {/* Bottom Info */}
            <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/80">
              <p className="text-sm font-medium text-rez-navy dark:text-white">{reel.title}</p>
              <p className="text-[10px] text-rez-gray-600 dark:text-gray-400">@ {reel.store} • {reel.views} views</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default HomeReels;
