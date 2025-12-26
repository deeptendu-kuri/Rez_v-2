import { Link } from 'react-router-dom';

const UGCFeedSection = () => {
  const ugcContent = [
    {
      type: 'review',
      user: 'Priya S.',
      avatar: '👩',
      content: 'Loved the new Nike store at Phoenix! Got 20% cashback + 500 coins 🎉',
      store: 'Nike Store Phoenix',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400',
      coins: 100,
      timeAgo: '2h ago'
    },
    {
      type: 'post',
      user: 'Rahul K.',
      avatar: '👨',
      content: 'Just discovered this amazing cafe with 30% off on ReZ! Best coffee in town ☕',
      store: 'Cafe Coffee Day',
      image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=400',
      likes: 45,
      timeAgo: '4h ago'
    },
    {
      type: 'ugc',
      user: 'Ananya M.',
      avatar: '👩‍🦱',
      content: 'My OOTD from Zara! Saved ₹2000 using ReZ Lock Price feature 💃',
      store: 'Zara Fashion',
      image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=400',
      coins: 250,
      timeAgo: '6h ago'
    }
  ];

  return (
    <div className="px-4 mb-6">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h2 className="text-h3 font-poppins text-rez-navy dark:text-white">🎉 New on ReZ</h2>
          <p className="text-caption text-rez-gray-600 dark:text-gray-400">Community stories & reviews</p>
        </div>
        <Link to="/explore" className="text-button text-rez-green-500 dark:text-emerald-400 font-poppins">Explore →</Link>
      </div>

      {/* UGC Content Feed */}
      <div className="space-y-3 mb-4">
        {ugcContent.map((item, idx) => (
          <div
            key={idx}
            className="p-4 rounded-2xl bg-white dark:bg-white/5 border border-rez-gray-200 dark:border-white/10"
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500/30 to-pink-500/30 flex items-center justify-center text-xl">
                {item.avatar}
              </div>
              <div className="flex-1">
                <p className="text-sm font-semibold text-rez-navy dark:text-white">{item.user}</p>
                <div className="flex items-center gap-2">
                  <p className="text-xs text-rez-gray-600 dark:text-gray-400">{item.timeAgo}</p>
                  {item.type === 'review' && (
                    <div className="flex">
                      {[...Array(item.rating)].map((_, i) => (
                        <span key={i} className="text-amber-400 text-xs">⭐</span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
              {item.coins && (
                <span className="px-2 py-1 rounded-full bg-amber-500/20 text-xs font-bold text-amber-400">
                  +{item.coins} coins
                </span>
              )}
            </div>
            <p className="text-sm text-rez-navy dark:text-white mb-3">{item.content}</p>
            {item.image && (
              <img src={item.image} alt={item.store} className="w-full h-48 object-cover rounded-xl mb-3" />
            )}
            <div className="flex items-center justify-between">
              <Link to={`/store/${idx}`} className="text-xs text-emerald-500 font-semibold">
                {item.store} →
              </Link>
              {item.likes && (
                <div className="flex items-center gap-4 text-xs text-rez-gray-600 dark:text-gray-400">
                  <span>❤️ {item.likes}</span>
                  <span>💬 12</span>
                  <span>🔄 8</span>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-2 gap-3">
        <Link
          to="/contests"
          className="p-4 rounded-rez-lg bg-gradient-to-br from-amber-500/20 to-orange-500/10 dark:from-amber-500/20 dark:to-orange-500/10 border border-amber-500/30 dark:border-amber-500/30 hover:border-amber-500/50 dark:hover:border-amber-500/50 transition-all active:scale-95"
        >
          <div className="flex items-center gap-2 mb-2">
            <span className="text-2xl">🏆</span>
            <span className="px-2 py-0.5 rounded-full bg-red-500 text-white text-[10px] font-bold">NEW</span>
          </div>
          <h3 className="text-sm font-semibold text-rez-navy dark:text-white mb-1">Contests</h3>
          <p className="text-xs text-rez-gray-600 dark:text-gray-400">Vote & win prizes</p>
        </Link>

        <Link
          to="/savings-tracker"
          className="p-4 rounded-rez-lg bg-gradient-to-br from-emerald-500/20 to-green-500/10 dark:from-emerald-500/20 dark:to-green-500/10 border border-emerald-500/30 dark:border-emerald-500/30 hover:border-emerald-500/50 dark:hover:border-emerald-500/50 transition-all active:scale-95"
        >
          <div className="flex items-center gap-2 mb-2">
            <span className="text-2xl">💰</span>
            <span className="px-2 py-0.5 rounded-full bg-red-500 text-white text-[10px] font-bold">NEW</span>
          </div>
          <h3 className="text-sm font-semibold text-rez-navy dark:text-white mb-1">Savings Tracker</h3>
          <p className="text-xs text-rez-gray-600 dark:text-gray-400">Track your savings</p>
        </Link>
      </div>
    </div>
  );
};

export default UGCFeedSection;
