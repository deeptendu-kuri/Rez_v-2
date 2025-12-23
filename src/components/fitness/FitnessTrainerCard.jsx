import { Star, Clock, Coins, Award } from 'lucide-react';
import { Link } from 'react-router-dom';

const FitnessTrainerCard = ({ trainer }) => {
  return (
    <Link
      to={`/fitness/trainer/${trainer.id}`}
      className="min-w-[200px] p-4 rounded-2xl bg-white dark:bg-[#2C2C2E] shrink-0 active:scale-[0.98] transition-transform"
    >
      <div className="flex items-center gap-3 mb-3">
        <div className="w-14 h-14 rounded-full bg-gradient-to-br from-blue-500/30 to-purple-500/30 flex items-center justify-center">
          <span className="text-2xl">👤</span>
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="font-medium text-rez-navy dark:text-white truncate">{trainer.name}</h3>
          <p className="text-xs text-rez-gray-600 dark:text-gray-400">{trainer.speciality}</p>
        </div>
      </div>

      <div className="flex items-center gap-2 mb-2">
        <div className="flex items-center gap-1">
          <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
          <span className="text-sm text-rez-navy dark:text-white">{trainer.rating}</span>
        </div>
        <span className="text-rez-gray-600 dark:text-gray-500">•</span>
        <span className="text-xs text-rez-gray-600 dark:text-gray-400">{trainer.experience} exp</span>
      </div>

      <div className="flex flex-wrap gap-1.5 mb-3">
        {trainer.certifications?.slice(0, 2).map((cert, index) => (
          <span
            key={index}
            className="px-2 py-0.5 rounded-full bg-blue-500/20 text-[10px] text-blue-400 flex items-center gap-1"
          >
            <Award className="w-2.5 h-2.5" />
            {cert}
          </span>
        ))}
      </div>

      <div className="flex items-center gap-2 text-xs text-rez-gray-600 dark:text-gray-400 mb-3">
        <Clock className="w-3.5 h-3.5" />
        <span className="truncate">{trainer.availability}</span>
      </div>

      <div className="flex items-center justify-between pt-3 border-t border-rez-gray-200 dark:border-white/10">
        <p className="text-lg font-bold text-rez-navy dark:text-white">₹{trainer.pricePerSession}<span className="text-xs text-rez-gray-600 dark:text-gray-400 font-normal">/session</span></p>
        <div className="flex items-center gap-1">
          <Coins className="w-4 h-4 text-amber-400" />
          <span className="text-sm text-amber-400">{trainer.coinsEarned}</span>
        </div>
      </div>
    </Link>
  );
};

export default FitnessTrainerCard;
