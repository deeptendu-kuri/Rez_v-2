import { Clock, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const BeautyOfferCard = ({ offer }) => {
  // Calculate time remaining
  const getTimeRemaining = (validTill) => {
    const now = new Date();
    const end = new Date(validTill);
    const diff = end - now;

    if (diff <= 0) return 'Expired';

    const hours = Math.floor(diff / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));

    if (hours > 24) {
      const days = Math.floor(hours / 24);
      return `${days}d left`;
    }
    return `${hours}h ${minutes}m left`;
  };

  return (
    <Link
      to="/beauty/offers"
      className="min-w-[280px] p-4 rounded-2xl shrink-0 relative overflow-hidden active:scale-[0.98] transition-transform"
      style={{ backgroundColor: `${offer.color}15` }}
    >
      {/* Tag */}
      {offer.tag && (
        <span
          className="absolute top-3 right-3 px-2 py-0.5 rounded-full text-[10px] text-rez-navy dark:text-white font-medium"
          style={{ backgroundColor: offer.color }}
        >
          {offer.tag}
        </span>
      )}

      <div className="flex items-start gap-3">
        <div
          className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
          style={{ backgroundColor: `${offer.color}30` }}
        >
          <span className="text-2xl">{offer.icon}</span>
        </div>

        <div className="flex-1 min-w-0">
          <h3 className="font-semibold text-rez-navy dark:text-white">{offer.title}</h3>
          <p className="text-sm text-rez-gray-600 dark:text-gray-400 mt-0.5">{offer.description}</p>

          <div className="flex items-center gap-2 mt-2">
            <Clock className="w-4 h-4 text-rez-gray-600 dark:text-gray-500" />
            <span className="text-xs text-rez-gray-600 dark:text-gray-400">
              {getTimeRemaining(offer.validTill)}
            </span>
          </div>
        </div>
      </div>

      {/* Discount Badge */}
      <div className="flex items-center justify-between mt-3">
        <span
          className="px-3 py-1.5 rounded-lg font-bold text-rez-navy dark:text-white"
          style={{ backgroundColor: offer.color }}
        >
          {offer.discount} OFF
        </span>
        <div className="flex items-center gap-1 text-sm" style={{ color: offer.color }}>
          <span>Claim Now</span>
          <ChevronRight className="w-4 h-4" />
        </div>
      </div>
    </Link>
  );
};

export default BeautyOfferCard;
