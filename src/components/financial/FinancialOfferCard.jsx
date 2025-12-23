import { Clock, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const FinancialOfferCard = ({ offer }) => {
  return (
    <Link
      to={`/financial/offer/${offer.id}`}
      className="min-w-[200px] p-3 rounded-2xl shrink-0 active:scale-[0.98] transition-transform"
      style={{ backgroundColor: `${offer.color}20` }}
    >
      <div className="flex items-center gap-2 mb-2">
        <span className="text-2xl">{offer.icon}</span>
        <span
          className="text-lg font-bold"
          style={{ color: offer.color }}
        >
          {offer.title}
        </span>
      </div>

      <p className="text-sm text-rez-gray-700 dark:text-gray-300 mb-2">{offer.description}</p>

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-1 text-xs text-rez-gray-600 dark:text-gray-400">
          <Clock className="w-3 h-3" />
          <span>{offer.validTill}</span>
        </div>
        <ChevronRight className="w-4 h-4 text-rez-gray-600 dark:text-gray-500" />
      </div>
    </Link>
  );
};

export default FinancialOfferCard;
