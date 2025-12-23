import { Link } from 'react-router-dom';
import { Users, Flame, BadgeCheck } from 'lucide-react';

const communityActivity = [
  {
    id: 1,
    type: 'trending',
    message: '23 people near you redeemed this',
    store: 'Starbucks',
    offer: '20% off on coffee',
    time: '2 hours ago'
  },
  {
    id: 2,
    type: 'friend',
    friend: 'Arjun',
    message: 'Your friend Arjun earned ₹120 here',
    store: 'Nike Store',
    time: '5 hours ago'
  },
  {
    id: 3,
    type: 'popular',
    message: 'Most saved this week',
    store: 'Paradise Biryani',
    saves: 156,
    time: 'This week'
  },
];

const FriendsCommunity = () => {
  return (
    <div className="px-4 py-4">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <Users className="w-5 h-5 text-rez-green-500" />
          <h2 className="text-h3 font-poppins text-rez-navy dark:text-white">
            Friends & Community
          </h2>
        </div>
        <Link to="/explore/friends" className="text-sm font-medium text-rez-green-500">
          See All
        </Link>
      </div>

      <div className="space-y-3">
        {communityActivity.map((activity) => (
          <div
            key={activity.id}
            className="p-4 bg-white dark:bg-white/10 border border-rez-gray-200 dark:border-white/10 rounded-2xl shadow-sm dark:shadow-none"
          >
            <div className="flex items-start gap-3">
              {/* Icon */}
              <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                activity.type === 'trending'
                  ? 'bg-orange-500/20'
                  : activity.type === 'friend'
                  ? 'bg-blue-500/20'
                  : 'bg-purple-500/20'
              }`}>
                {activity.type === 'trending' && (
                  <Flame className="w-5 h-5 text-orange-500" />
                )}
                {activity.type === 'friend' && (
                  <Users className="w-5 h-5 text-blue-500" />
                )}
                {activity.type === 'popular' && (
                  <BadgeCheck className="w-5 h-5 text-purple-500" />
                )}
              </div>

              {/* Content */}
              <div className="flex-1">
                <p className="text-sm text-rez-navy dark:text-white font-medium mb-1">
                  {activity.message}
                </p>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-semibold text-rez-green-500">
                    {activity.store}
                  </span>
                  <span className="text-xs text-rez-gray-500 dark:text-gray-500">
                    •
                  </span>
                  <span className="text-xs text-rez-gray-600 dark:text-gray-400">
                    {activity.time}
                  </span>
                </div>
                {activity.offer && (
                  <div className="mt-2 px-2 py-1 bg-emerald-500/10 rounded-lg inline-block">
                    <p className="text-xs font-medium text-emerald-500">
                      {activity.offer}
                    </p>
                  </div>
                )}
              </div>

              {/* Action */}
              <Link
                to="/explore/friends"
                className="px-3 py-1.5 bg-rez-green-500 hover:bg-rez-green-600 text-white text-xs font-semibold rounded-full transition-colors"
              >
                View
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Trust Indicators */}
      <div className="mt-4 p-3 bg-rez-gray-50 dark:bg-white/5 rounded-xl">
        <div className="flex items-center justify-center gap-4 text-xs">
          <div className="flex items-center gap-1 text-rez-gray-600 dark:text-gray-400">
            <BadgeCheck className="w-4 h-4 text-emerald-500" />
            <span>Verified buyers</span>
          </div>
          <span className="text-rez-gray-400 dark:text-gray-600">•</span>
          <div className="flex items-center gap-1 text-rez-gray-600 dark:text-gray-400">
            <BadgeCheck className="w-4 h-4 text-emerald-500" />
            <span>Real transactions</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FriendsCommunity;
