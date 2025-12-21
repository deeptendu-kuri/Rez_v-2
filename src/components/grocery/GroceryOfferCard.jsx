import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const GroceryOfferCard = ({ offer }) => {
  return (
    <Link
      to="/grocery/offers"
      className="min-w-[260px] p-4 rounded-2xl shrink-0 relative overflow-hidden active:scale-[0.98] transition-transform"
      style={{ backgroundColor: `${offer.color}15` }}
    >
      {offer.tag && (
        <span
          className="absolute top-3 right-3 px-2 py-0.5 rounded-full text-[10px] text-white font-medium"
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
          <h3 className="font-semibold text-white">{offer.title}</h3>
          <p className="text-sm text-gray-400 mt-0.5">{offer.description}</p>
        </div>
      </div>

      <div className="flex items-center justify-between mt-3">
        <span
          className="px-3 py-1.5 rounded-lg font-bold text-white"
          style={{ backgroundColor: offer.color }}
        >
          {offer.discount}
        </span>
        <div className="flex items-center gap-1 text-sm" style={{ color: offer.color }}>
          <span>Claim</span>
          <ChevronRight className="w-4 h-4" />
        </div>
      </div>
    </Link>
  );
};

export default GroceryOfferCard;
