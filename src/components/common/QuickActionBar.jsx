import { Link } from 'react-router-dom';
import {
  Tag,
  Coins,
  Star,
  Zap,
  GitCompare,
  Gamepad2,
  Camera,
  Heart,
} from 'lucide-react';

const QuickActionBar = ({ category = '' }) => {
  const actions = [
    {
      id: 'offers',
      label: 'Offers',
      icon: Tag,
      color: 'text-orange-400',
      bgColor: 'bg-orange-500/20',
      link: category ? `/${category}/offers` : '/offers',
    },
    {
      id: 'cashback',
      label: 'Cashback',
      icon: Coins,
      color: 'text-amber-400',
      bgColor: 'bg-amber-500/20',
      link: category ? `/${category}/cashback` : '/cashback',
    },
    {
      id: 'exclusive',
      label: 'Exclusive',
      icon: Star,
      color: 'text-purple-400',
      bgColor: 'bg-purple-500/20',
      link: '/exclusive/special-profiles',
    },
    {
      id: '60min',
      label: '60 Min',
      icon: Zap,
      color: 'text-yellow-400',
      bgColor: 'bg-yellow-500/20',
      link: category ? `/${category}?filter=60min` : '/explore?filter=60min',
    },
    {
      id: 'compare',
      label: 'Compare',
      icon: GitCompare,
      color: 'text-blue-400',
      bgColor: 'bg-blue-500/20',
      link: '/compare',
    },
    {
      id: 'play',
      label: 'Play & Earn',
      icon: Gamepad2,
      color: 'text-pink-400',
      bgColor: 'bg-pink-500/20',
      link: '/play-earn',
    },
    {
      id: 'ugc',
      label: 'UGC',
      icon: Camera,
      color: 'text-cyan-400',
      bgColor: 'bg-cyan-500/20',
      link: category ? `/${category}/reviews` : '/ugc',
    },
    {
      id: 'saved',
      label: 'Saved',
      icon: Heart,
      color: 'text-red-400',
      bgColor: 'bg-red-500/20',
      link: '/saved',
    },
  ];

  return (
    <div className="px-4 py-3">
      <div className="flex gap-3 overflow-x-auto hide-scrollbar">
        {actions.map((action) => {
          const Icon = action.icon;
          return (
            <Link
              key={action.id}
              to={action.link}
              className="flex flex-col items-center gap-1.5 shrink-0"
            >
              <div className={`w-12 h-12 rounded-xl ${action.bgColor} flex items-center justify-center`}>
                <Icon className={`w-5 h-5 ${action.color}`} />
              </div>
              <span className="text-[10px] text-rez-gray-600 dark:text-gray-400">{action.label}</span>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default QuickActionBar;
