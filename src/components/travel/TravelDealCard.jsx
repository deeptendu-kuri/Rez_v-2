import { Clock, Coins, ChevronRight } from 'lucide-react';
import Badge from '../common/Badge';

const TravelDealCard = ({ deal }) => {
  const getTypeColor = () => {
    switch (deal.type) {
      case 'flight': return 'from-blue-500/30 to-indigo-500/30';
      case 'hotel': return 'from-purple-500/30 to-pink-500/30';
      case 'combo': return 'from-emerald-500/30 to-teal-500/30';
      case 'lastminute': return 'from-red-500/30 to-orange-500/30';
      default: return 'from-gray-500/30 to-gray-600/30';
    }
  };

  return (
    <div className="min-w-[280px] rounded-2xl overflow-hidden shrink-0 group cursor-pointer">
      {/* Image */}
      <div className="relative h-32">
        <img
          src={deal.image}
          alt={deal.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className={`absolute inset-0 bg-gradient-to-r ${getTypeColor()}`} />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />

        {/* Badges */}
        <div className="absolute top-3 left-3 flex items-center gap-2">
          <Badge variant="danger" size="xs">{deal.discount}% OFF</Badge>
        </div>

        {/* Valid till */}
        <div className="absolute top-3 right-3 flex items-center gap-1 px-2 py-0.5 rounded-full bg-white dark:bg-black/60 backdrop-blur-sm">
          <Clock className="w-3 h-3 text-rez-navy dark:text-white" />
          <span className="text-xs text-rez-navy dark:text-white">{deal.validTill}</span>
        </div>

        {/* Content */}
        <div className="absolute bottom-3 left-3 right-3">
          <h3 className="font-semibold text-rez-navy dark:text-white">{deal.title}</h3>
          <p className="text-sm text-rez-gray-700 dark:text-gray-300">{deal.subtitle}</p>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="p-3 bg-white dark:bg-[#2C2C2E] flex items-center justify-between">
        <div className="flex items-center gap-1 text-emerald-400">
          <Coins className="w-3.5 h-3.5" />
          <span className="text-xs">{deal.cashback}% cashback</span>
        </div>
        <ChevronRight className="w-4 h-4 text-rez-gray-600 dark:text-gray-500" />
      </div>
    </div>
  );
};

export default TravelDealCard;
