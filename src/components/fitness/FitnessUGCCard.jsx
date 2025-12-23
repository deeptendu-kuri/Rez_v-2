import { Heart, Coins, MessageCircle } from 'lucide-react';

const FitnessUGCCard = ({ item }) => {
  return (
    <div className="min-w-[200px] p-3 rounded-2xl bg-white dark:bg-[#2C2C2E] shrink-0">
      <div className="flex items-center gap-2 mb-2">
        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500/30 to-purple-500/30 flex items-center justify-center">
          <span>{item.avatar}</span>
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-sm font-medium text-rez-navy dark:text-white truncate">{item.user}</p>
          <p className="text-[10px] text-rez-gray-600 dark:text-gray-400">at {item.gym}</p>
        </div>
      </div>

      <p className="text-sm text-rez-gray-700 dark:text-gray-300 mb-3 line-clamp-2">{item.content}</p>

      <div className="flex items-center justify-between pt-2 border-t border-rez-gray-200 dark:border-white/10">
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-1 text-rez-gray-600 dark:text-gray-400 hover:text-red-400 transition-colors">
            <Heart className="w-4 h-4" />
            <span className="text-xs">{item.likes}</span>
          </button>
          <button className="flex items-center gap-1 text-rez-gray-600 dark:text-gray-400 hover:text-blue-400 transition-colors">
            <MessageCircle className="w-4 h-4" />
          </button>
        </div>
        <div className="flex items-center gap-1">
          <Coins className="w-3 h-3 text-amber-400" />
          <span className="text-xs text-amber-400">+{item.coins}</span>
        </div>
      </div>
    </div>
  );
};

export default FitnessUGCCard;
