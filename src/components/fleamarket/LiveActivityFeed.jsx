import { ShoppingBag, Coins, Clock, Eye, TrendingUp } from 'lucide-react';

const ActivityItem = ({ activity }) => {
  const getIcon = () => {
    switch (activity.type) {
      case 'purchase':
        return <ShoppingBag className="w-4 h-4 text-emerald-400" />;
      case 'coins':
        return <Coins className="w-4 h-4 text-amber-400" />;
      case 'soldOut':
        return <Clock className="w-4 h-4 text-red-400" />;
      case 'viewing':
        return <Eye className="w-4 h-4 text-purple-400" />;
      default:
        return <TrendingUp className="w-4 h-4 text-blue-400" />;
    }
  };

  const getMessage = () => {
    switch (activity.type) {
      case 'purchase':
        return (
          <>
            <span className="text-white font-medium">{activity.user}</span>
            <span className="text-gray-400"> just bought </span>
            <span className="text-emerald-400">{activity.item}</span>
          </>
        );
      case 'coins':
        return (
          <>
            <span className="text-white font-medium">{activity.user}</span>
            <span className="text-gray-400"> earned </span>
            <span className="text-amber-400">{activity.coins} coins</span>
            <span className="text-gray-400"> at {activity.booth}</span>
          </>
        );
      case 'soldOut':
        return (
          <>
            <span className="text-red-400">{activity.item}</span>
            <span className="text-gray-400"> sold out in </span>
            <span className="text-white">{activity.soldIn}</span>
          </>
        );
      case 'viewing':
        return (
          <>
            <span className="text-purple-400">{activity.count} people</span>
            <span className="text-gray-400"> viewing </span>
            <span className="text-white">{activity.booth}</span>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <div className="flex items-center gap-3 py-2 px-3 rounded-xl bg-white/5 animate-fade-in">
      <div className="p-2 rounded-full bg-white/10">{getIcon()}</div>
      <div className="flex-1 text-sm">{getMessage()}</div>
      <span className="text-xs text-gray-500 shrink-0">{activity.timeAgo}</span>
    </div>
  );
};

const LiveActivityFeed = ({ activities, compact = false }) => {
  if (compact) {
    // Scrolling banner style
    return (
      <div className="overflow-hidden py-2">
        <div className="flex gap-3 animate-scroll">
          {activities.map((activity) => (
            <div
              key={activity.id}
              className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 shrink-0"
            >
              {activity.type === 'purchase' && (
                <>
                  <ShoppingBag className="w-3 h-3 text-emerald-400" />
                  <span className="text-xs text-gray-300">
                    {activity.user} bought {activity.item}
                  </span>
                </>
              )}
              {activity.type === 'coins' && (
                <>
                  <Coins className="w-3 h-3 text-amber-400" />
                  <span className="text-xs text-gray-300">
                    {activity.coins} coins earned
                  </span>
                </>
              )}
              {activity.type === 'soldOut' && (
                <>
                  <Clock className="w-3 h-3 text-red-400" />
                  <span className="text-xs text-gray-300">
                    {activity.item} sold out!
                  </span>
                </>
              )}
              {activity.type === 'viewing' && (
                <>
                  <Eye className="w-3 h-3 text-purple-400" />
                  <span className="text-xs text-gray-300">
                    {activity.count} viewing {activity.booth}
                  </span>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-2">
      <div className="flex items-center gap-2 mb-3">
        <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
        <h3 className="font-semibold text-white">Live Activity</h3>
      </div>
      <div className="space-y-2">
        {activities.slice(0, 5).map((activity) => (
          <ActivityItem key={activity.id} activity={activity} />
        ))}
      </div>
    </div>
  );
};

export default LiveActivityFeed;
