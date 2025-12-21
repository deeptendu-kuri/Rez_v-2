import { Coins, TrendingUp, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const HomeServicePopularCard = ({ service }) => {
  return (
    <Link
      to={`/home-services/book/${service.id}`}
      className="min-w-[180px] p-3 rounded-2xl bg-[#2C2C2E] shrink-0 active:scale-[0.98] transition-transform"
    >
      <h3 className="font-medium text-white mb-1">{service.name}</h3>

      <div className="flex items-center gap-1 mb-2">
        <TrendingUp className="w-3 h-3 text-emerald-400" />
        <span className="text-[10px] text-gray-400">{service.bookings}</span>
      </div>

      <div className="flex items-center justify-between">
        <div>
          <p className="text-lg font-bold text-white">₹{service.price}</p>
          <div className="flex items-center gap-1">
            <Coins className="w-3 h-3 text-amber-400" />
            <span className="text-xs text-amber-400">{service.cashback}% back</span>
          </div>
        </div>
        <div className="p-2 rounded-full bg-emerald-500/20">
          <ChevronRight className="w-4 h-4 text-emerald-400" />
        </div>
      </div>
    </Link>
  );
};

export default HomeServicePopularCard;
