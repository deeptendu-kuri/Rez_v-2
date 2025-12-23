import { Link } from 'react-router-dom';
import { ThumbsUp, MessageCircle, Share2, MapPin, Coins } from 'lucide-react';

const postsData = [
  {
    id: 1,
    user: { name: 'Arjun Kumar', avatar: '👨', distance: '0.5 km away' },
    store: 'Cafe Noir',
    image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400',
    caption: 'Saved ₹90 at this café using ReZ 🪙 Amazing coffee and service!',
    earned: 90,
    likes: 45,
    comments: 12,
    time: '2 hours ago'
  },
  {
    id: 2,
    user: { name: 'Neha Patel', avatar: '👩', distance: '1.2 km away' },
    store: 'Fresh Groceries',
    image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?w=400',
    caption: 'Monthly grocery shopping with 15% cashback. ReZ makes it so easy!',
    earned: 340,
    likes: 78,
    comments: 23,
    time: '5 hours ago'
  },
  {
    id: 3,
    user: { name: 'Vikram Singh', avatar: '👨', distance: '0.8 km away' },
    store: 'Gym Plus',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=400',
    caption: 'Got my gym membership renewal with 20% cashback. Fitness goals + savings! 💪',
    earned: 600,
    likes: 92,
    comments: 18,
    time: '1 day ago'
  }
];

const UGCPostsFeed = () => {
  return (
    <div className="px-4 py-4">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h2 className="text-h3 font-poppins text-rez-navy dark:text-white">
            People Are Saving Here
          </h2>
          <p className="text-xs text-rez-gray-600 dark:text-gray-400 mt-1">
            Real experiences from your neighborhood
          </p>
        </div>
        <Link to="/explore/friends" className="text-sm font-medium text-rez-green-500">
          See All
        </Link>
      </div>

      <div className="space-y-4">
        {postsData.map((post) => (
          <div
            key={post.id}
            className="bg-white dark:bg-white/10 border border-rez-gray-200 dark:border-white/10 rounded-2xl overflow-hidden shadow-sm dark:shadow-none"
          >
            {/* User Header */}
            <div className="p-4 pb-3 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center text-xl">
                {post.user.avatar}
              </div>
              <div className="flex-1">
                <h3 className="text-sm font-semibold text-rez-navy dark:text-white">
                  {post.user.name}
                </h3>
                <div className="flex items-center gap-2 text-xs text-rez-gray-600 dark:text-gray-400">
                  <MapPin className="w-3 h-3" />
                  <span>{post.user.distance}</span>
                  <span>•</span>
                  <span>{post.time}</span>
                </div>
              </div>
              <Link
                to={`/store/${post.store}`}
                className="px-3 py-1.5 bg-rez-green-500/10 text-rez-green-500 text-xs font-semibold rounded-full hover:bg-rez-green-500/20 transition-colors"
              >
                View Store
              </Link>
            </div>

            {/* Image */}
            <div className="relative aspect-[4/3]">
              <img
                src={post.image}
                alt={post.store}
                className="w-full h-full object-cover"
              />
              {/* Earnings Badge */}
              <div className="absolute top-3 right-3 flex items-center gap-1 px-3 py-1.5 bg-emerald-500 rounded-full shadow-lg">
                <Coins className="w-4 h-4 text-white" />
                <span className="text-sm font-bold text-white">
                  ₹{post.earned}
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="p-4">
              {/* Store Name */}
              <p className="text-sm font-semibold text-rez-green-500 mb-2">
                🏪 {post.store}
              </p>

              {/* Caption */}
              <p className="text-sm text-rez-navy dark:text-white mb-3">
                {post.caption}
              </p>

              {/* Actions */}
              <div className="flex items-center gap-4 pt-3 border-t border-rez-gray-200 dark:border-white/10">
                <button className="flex items-center gap-2 text-rez-gray-600 dark:text-gray-400 hover:text-rez-green-500 transition-colors">
                  <ThumbsUp className="w-4 h-4" />
                  <span className="text-sm font-medium">{post.likes}</span>
                  <span className="text-xs">Helpful</span>
                </button>
                <button className="flex items-center gap-2 text-rez-gray-600 dark:text-gray-400 hover:text-rez-green-500 transition-colors">
                  <MessageCircle className="w-4 h-4" />
                  <span className="text-sm font-medium">{post.comments}</span>
                  <span className="text-xs">Comment</span>
                </button>
                <button className="flex items-center gap-2 text-rez-gray-600 dark:text-gray-400 hover:text-rez-green-500 transition-colors ml-auto">
                  <Share2 className="w-4 h-4" />
                  <span className="text-xs">Share</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UGCPostsFeed;
