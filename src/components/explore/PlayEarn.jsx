import { Link } from 'react-router-dom';
import { CheckCircle, Gift, Share2, TrendingUp, Zap } from 'lucide-react';

const activities = [
  {
    id: 'checkin',
    title: 'Daily Check-in',
    icon: CheckCircle,
    reward: '10 coins',
    color: 'bg-blue-500/20 text-blue-500',
    path: '/explore/daily-checkin'
  },
  {
    id: 'spin',
    title: 'Spin & Win',
    icon: Gift,
    reward: 'Up to ₹500',
    color: 'bg-purple-500/20 text-purple-500',
    path: '/explore/spin-win'
  },
  {
    id: 'review',
    title: 'Review & Earn',
    icon: TrendingUp,
    reward: '50 coins',
    color: 'bg-emerald-500/20 text-emerald-500',
    path: '/explore/review-earn'
  },
  {
    id: 'share',
    title: 'Share & Earn',
    icon: Share2,
    reward: '25 coins',
    color: 'bg-orange-500/20 text-orange-500',
    path: '/refer'
  },
  {
    id: 'streak',
    title: 'Visit Streaks',
    icon: Zap,
    reward: '5× bonus',
    color: 'bg-amber-500/20 text-amber-500',
    path: '/explore/map'
  },
];

const PlayEarn = () => {
  return (
    <div className="px-4 py-4">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h2 className="text-h3 font-poppins text-rez-navy dark:text-white">
            Play & Earn
          </h2>
          <p className="text-xs text-rez-gray-600 dark:text-gray-400 mt-1">
            Complete tasks, win rewards
          </p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3">
        {activities.map((activity) => {
          const Icon = activity.icon;
          return (
            <Link
              key={activity.id}
              to={activity.path}
              className="p-4 bg-white dark:bg-white/10 border border-rez-gray-200 dark:border-white/10 rounded-2xl shadow-sm dark:shadow-none hover:shadow-md dark:hover:border-white/20 transition-all active:scale-[0.98] text-left block"
            >
              <div className={`w-12 h-12 rounded-xl ${activity.color} flex items-center justify-center mb-3`}>
                <Icon className="w-6 h-6" />
              </div>
              <h3 className="text-sm font-semibold text-rez-navy dark:text-white mb-1">
                {activity.title}
              </h3>
              <p className="text-xs font-medium text-emerald-500">
                {activity.reward}
              </p>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default PlayEarn;
