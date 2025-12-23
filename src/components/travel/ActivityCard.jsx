import { Clock, MapPin, Star, Coins, CheckCircle } from 'lucide-react';
import Badge from '../common/Badge';
import Button from '../common/Button';

const ActivityCard = ({ activity }) => {
  const getCategoryColor = () => {
    switch (activity.category) {
      case 'Adventure': return 'bg-orange-500/20 text-orange-400';
      case 'Sightseeing': return 'bg-blue-500/20 text-blue-400';
      case 'Wellness': return 'bg-green-500/20 text-green-400';
      case 'Local Experience': return 'bg-purple-500/20 text-purple-400';
      default: return 'bg-emerald-500/20 text-emerald-400';
    }
  };

  return (
    <div className="min-w-[240px] rounded-2xl overflow-hidden bg-rez-gray-100 dark:bg-[#1C1C1E] shrink-0 group">
      {/* Image */}
      <div className="relative h-32">
        <img
          src={activity.image}
          alt={activity.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

        {/* Category */}
        <div className="absolute top-3 left-3">
          <span className={`px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor()}`}>
            {activity.category}
          </span>
        </div>

        {/* Rating */}
        <div className="absolute top-3 right-3 flex items-center gap-1 px-2 py-0.5 rounded-full bg-white dark:bg-black/60 backdrop-blur-sm">
          <Star className="w-3 h-3 text-amber-400 fill-amber-400" />
          <span className="text-xs text-rez-navy dark:text-white">{activity.rating}</span>
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="font-semibold text-rez-navy dark:text-white">{activity.name}</h3>

        <div className="flex items-center gap-2 mt-1">
          <div className="flex items-center gap-1 text-rez-gray-600 dark:text-gray-400">
            <MapPin className="w-3.5 h-3.5" />
            <span className="text-xs">{activity.location}</span>
          </div>
        </div>

        <div className="flex items-center gap-1 text-rez-gray-600 dark:text-gray-400 mt-1">
          <Clock className="w-3.5 h-3.5" />
          <span className="text-xs">{activity.duration}</span>
        </div>

        {/* Includes */}
        <div className="flex flex-wrap gap-2 mt-2">
          {activity.includes.slice(0, 2).map((item) => (
            <div key={item} className="flex items-center gap-1">
              <CheckCircle className="w-3 h-3 text-emerald-400" />
              <span className="text-[10px] text-rez-gray-600 dark:text-gray-400">{item}</span>
            </div>
          ))}
        </div>

        {/* Price */}
        <div className="flex items-center justify-between mt-3 pt-3 border-t border-rez-gray-200 dark:border-white/5">
          <div>
            <p className="text-lg font-bold text-rez-navy dark:text-white">₹{activity.price.toLocaleString()}</p>
            <div className="flex items-center gap-1 text-emerald-400">
              <Coins className="w-3 h-3" />
              <span className="text-xs">Earn ₹{activity.coinsEarned}</span>
            </div>
          </div>
          <Button variant="primary" size="sm">Book</Button>
        </div>
      </div>
    </div>
  );
};

export default ActivityCard;
