import { Link } from 'react-router-dom';
import { Heart, MessageCircle, ShoppingBag, Coins, Play } from 'lucide-react';

const reelsData = [
  {
    id: 1,
    user: { name: 'Priya S.', avatar: '👩' },
    store: 'Starbucks',
    video: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400',
    saved: 120,
    likes: 234,
    comments: 45,
    product: 'Cappuccino & Croissant'
  },
  {
    id: 2,
    user: { name: 'Rahul K.', avatar: '👨' },
    store: 'Nike Store',
    video: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400',
    saved: 2000,
    likes: 456,
    comments: 89,
    product: 'Air Max 90'
  },
  {
    id: 3,
    user: { name: 'Sneha M.', avatar: '👩' },
    store: 'Paradise Biryani',
    video: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=400',
    saved: 150,
    likes: 189,
    comments: 34,
    product: 'Chicken Biryani'
  }
];

const UGCReels = () => {
  return (
    <div className="px-4 py-4">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h2 className="text-h3 font-poppins text-rez-navy dark:text-white flex items-center gap-2">
            Trending Near You 🔥
          </h2>
          <p className="text-xs text-rez-gray-600 dark:text-gray-400 mt-1">
            Real experiences • Real savings
          </p>
        </div>
      </div>

      <div className="flex gap-3 overflow-x-auto hide-scrollbar pb-2">
        {reelsData.map((reel) => (
          <Link
            key={reel.id}
            to={`/store/${reel.store}`}
            className="shrink-0 w-[200px] relative rounded-2xl overflow-hidden group"
          >
            {/* Video Thumbnail */}
            <div className="relative aspect-[9/16] bg-rez-gray-900">
              <img
                src={reel.video}
                alt={reel.product}
                className="w-full h-full object-cover"
              />

              {/* Play Overlay */}
              <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="w-12 h-12 rounded-full bg-white/90 flex items-center justify-center">
                  <Play className="w-6 h-6 text-rez-navy fill-rez-navy ml-1" />
                </div>
              </div>

              {/* Top Overlay - User */}
              <div className="absolute top-3 left-3 right-3">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-blue-500/80 backdrop-blur-sm flex items-center justify-center text-lg">
                    {reel.user.avatar}
                  </div>
                  <span className="text-xs font-semibold text-white drop-shadow-lg">
                    {reel.user.name}
                  </span>
                </div>
              </div>

              {/* Bottom Overlay - Info */}
              <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/80 to-transparent">
                {/* Store & Product */}
                <div className="mb-2">
                  <p className="text-sm font-bold text-white mb-0.5">
                    {reel.product}
                  </p>
                  <p className="text-xs text-white/90">
                    🏪 {reel.store}
                  </p>
                </div>

                {/* Savings Badge */}
                <div className="inline-flex items-center gap-1 px-2 py-1 bg-emerald-500 rounded-full mb-2">
                  <Coins className="w-3 h-3 text-white" />
                  <span className="text-xs font-bold text-white">
                    Saved ₹{reel.saved}
                  </span>
                </div>

                {/* Actions */}
                <div className="flex items-center justify-between text-white">
                  <div className="flex items-center gap-3 text-xs">
                    <div className="flex items-center gap-1">
                      <Heart className="w-4 h-4" />
                      <span>{reel.likes}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MessageCircle className="w-4 h-4" />
                      <span>{reel.comments}</span>
                    </div>
                  </div>
                  <ShoppingBag className="w-4 h-4" />
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* View All Reels */}
      <Link
        to="/explore/trending"
        className="mt-3 block text-center py-2 text-sm font-medium text-rez-green-500"
      >
        View All Reels →
      </Link>
    </div>
  );
};

export default UGCReels;
