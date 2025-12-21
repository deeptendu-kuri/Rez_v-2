import { useState, useEffect } from 'react';
import { Users, Coins } from 'lucide-react';

const LiveActivityFeed = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const activities = [
    { id: 1, user: 'Aman K.', avatar: '👨', action: 'earned', amount: 45, store: 'Starbucks', time: '2 min ago' },
    { id: 2, user: 'Sara M.', avatar: '👩', action: 'saved', amount: 120, store: 'BigBasket', time: '5 min ago' },
    { id: 3, user: 'Vikram S.', avatar: '🧔', action: 'earned', amount: 85, store: 'Zara', time: '8 min ago' },
    { id: 4, user: 'Priya R.', avatar: '👩‍🦱', action: 'saved', amount: 200, store: 'Sephora', time: '12 min ago' },
    { id: 5, user: 'Rahul P.', avatar: '👨‍💼', action: 'earned', amount: 150, store: 'Croma', time: '15 min ago' },
    { id: 6, user: 'Kavita L.', avatar: '👩‍💼', action: 'saved', amount: 75, store: 'Lakme Salon', time: '18 min ago' },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % activities.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const getVisibleActivities = () => {
    const visible = [];
    for (let i = 0; i < 3; i++) {
      visible.push(activities[(currentIndex + i) % activities.length]);
    }
    return visible;
  };

  return (
    <div className="px-4 py-4">
      <div className="p-4 rounded-2xl bg-[#1C1C1E]">
        {/* Header */}
        <div className="flex items-center gap-2 mb-3">
          <div className="relative">
            <Users className="w-5 h-5 text-emerald-400" />
            <span className="absolute -top-1 -right-1 w-2 h-2 bg-green-500 rounded-full animate-pulse" />
          </div>
          <h3 className="text-sm font-medium text-white">People near you are earning</h3>
          <span className="text-[10px] text-green-400 ml-auto">LIVE</span>
        </div>

        {/* Activity Feed */}
        <div className="space-y-2">
          {getVisibleActivities().map((activity, index) => (
            <div
              key={`${activity.id}-${index}`}
              className={`flex items-center gap-3 p-2 rounded-xl bg-white/5 transition-all duration-500 ${
                index === 0 ? 'animate-slide-down' : ''
              }`}
              style={{ opacity: 1 - index * 0.2 }}
            >
              <span className="text-lg">{activity.avatar}</span>
              <div className="flex-1">
                <p className="text-sm text-white">
                  <span className="font-medium">{activity.user}</span>
                  <span className="text-gray-400"> {activity.action} </span>
                  <span className="text-emerald-400 font-medium">₹{activity.amount}</span>
                  <span className="text-gray-400"> at </span>
                  <span className="text-white">{activity.store}</span>
                </p>
              </div>
              <span className="text-[10px] text-gray-500">{activity.time}</span>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="flex items-center justify-center gap-4 mt-4 pt-3 border-t border-white/10">
          <div className="text-center">
            <p className="text-lg font-bold text-emerald-400">₹24,500</p>
            <p className="text-[10px] text-gray-400">Saved today nearby</p>
          </div>
          <div className="w-px h-8 bg-white/10" />
          <div className="text-center">
            <p className="text-lg font-bold text-amber-400">1,240</p>
            <p className="text-[10px] text-gray-400">Active users</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LiveActivityFeed;
