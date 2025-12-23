import { Calendar, Coins, RotateCcw } from 'lucide-react';
import { Link } from 'react-router-dom';

const HomeServiceBookingCard = ({ booking }) => {
  return (
    <div className="p-4 rounded-2xl bg-white dark:bg-[#2C2C2E]">
      <div className="flex items-start justify-between mb-3">
        <div>
          <h3 className="font-medium text-rez-navy dark:text-white">{booking.service}</h3>
          <p className="text-sm text-rez-gray-600 dark:text-gray-400">{booking.provider}</p>
        </div>
        <span className={`px-2 py-0.5 rounded-full text-[10px] ${
          booking.status === 'completed'
            ? 'bg-emerald-500/20 text-emerald-400'
            : 'bg-amber-500/20 text-amber-400'
        }`}>
          {booking.status}
        </span>
      </div>

      <div className="flex items-center gap-4 mb-3 text-sm text-rez-gray-600 dark:text-gray-400">
        <div className="flex items-center gap-1">
          <Calendar className="w-3.5 h-3.5" />
          <span>{booking.date}</span>
        </div>
        <div className="flex items-center gap-1">
          <span>₹{booking.amount}</span>
        </div>
        <div className="flex items-center gap-1">
          <Coins className="w-3.5 h-3.5 text-amber-400" />
          <span className="text-amber-400">+{booking.coinsEarned}</span>
        </div>
      </div>

      {booking.canRebook && (
        <button className="w-full py-2 rounded-xl bg-rez-gray-100 dark:bg-white/10 flex items-center justify-center gap-2 text-sm text-rez-navy dark:text-white active:scale-[0.98] transition-transform">
          <RotateCcw className="w-4 h-4" />
          Rebook
        </button>
      )}
    </div>
  );
};

export default HomeServiceBookingCard;
