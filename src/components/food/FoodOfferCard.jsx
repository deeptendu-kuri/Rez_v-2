import { Clock, Coins, ChevronRight } from 'lucide-react';
import Badge from '../common/Badge';

const FoodOfferCard = ({ offer }) => {
  const getTypeColor = () => {
    switch (offer.type) {
      case 'bogo': return 'from-red-500/30 to-orange-500/30';
      case 'happy_hour': return 'from-amber-500/30 to-yellow-500/30';
      case 'student': return 'from-blue-500/30 to-indigo-500/30';
      case 'freebie': return 'from-pink-500/30 to-purple-500/30';
      case 'category': return 'from-emerald-500/30 to-teal-500/30';
      case 'flat': return 'from-green-500/30 to-lime-500/30';
      default: return 'from-gray-500/30 to-gray-600/30';
    }
  };

  const getTypeLabel = () => {
    switch (offer.type) {
      case 'bogo': return 'BOGO';
      case 'happy_hour': return 'Happy Hour';
      case 'student': return 'Student';
      case 'freebie': return 'Free Item';
      case 'category': return 'Category Deal';
      case 'flat': return 'Flat Off';
      default: return 'Offer';
    }
  };

  return (
    <div className="min-w-[280px] rounded-2xl overflow-hidden shrink-0 group cursor-pointer">
      {/* Image */}
      <div className="relative h-32">
        <img
          src={offer.image}
          alt={offer.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className={`absolute inset-0 bg-gradient-to-r ${getTypeColor()}`} />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />

        {/* Badges */}
        <div className="absolute top-3 left-3 flex items-center gap-2">
          {offer.discount > 0 && (
            <Badge variant="danger" size="xs">{offer.discount}% OFF</Badge>
          )}
          <span className="px-2 py-0.5 rounded-full bg-white dark:bg-black/60 text-[10px] text-rez-navy dark:text-white">
            {getTypeLabel()}
          </span>
        </div>

        {/* Mode badges */}
        <div className="absolute top-3 right-3 flex items-center gap-1">
          {offer.isHalal && (
            <span className="px-2 py-0.5 rounded-full bg-emerald-500/90 text-[10px] text-rez-navy dark:text-white">
              Halal
            </span>
          )}
          {offer.isVeg && (
            <span className="px-2 py-0.5 rounded-full bg-green-500/90 text-[10px] text-rez-navy dark:text-white">
              Veg
            </span>
          )}
        </div>

        {/* Content */}
        <div className="absolute bottom-3 left-3 right-3">
          <h3 className="font-semibold text-rez-navy dark:text-white">{offer.title}</h3>
          <p className="text-sm text-rez-gray-700 dark:text-gray-300">{offer.subtitle}</p>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="p-3 bg-white dark:bg-[#2C2C2E]">
        <div className="flex items-center justify-between mb-2">
          <p className="text-xs text-rez-gray-600 dark:text-gray-400">{offer.restaurant}</p>
          <div className="flex items-center gap-1 text-rez-gray-600 dark:text-gray-400">
            <Clock className="w-3 h-3" />
            <span className="text-xs">{offer.validity}</span>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1 text-emerald-400">
              <Coins className="w-3.5 h-3.5" />
              <span className="text-xs">{offer.cashback}% cashback</span>
            </div>
            <span className="text-xs text-amber-400">+{offer.coinsEarned} coins</span>
          </div>
          <ChevronRight className="w-4 h-4 text-rez-gray-600 dark:text-gray-500" />
        </div>
        {offer.minOrder > 0 && (
          <p className="text-[10px] text-rez-gray-600 dark:text-gray-500 mt-1">Min order: ₹{offer.minOrder}</p>
        )}
      </div>
    </div>
  );
};

export default FoodOfferCard;
