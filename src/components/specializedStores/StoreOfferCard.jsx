import { ChevronRight, Crown, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const StoreOfferCard = ({ offer, theme }) => {
  const getIcon = (type) => {
    switch (type) {
      case 'exclusive': return <Crown className="w-4 h-4" />;
      case 'tier': return <Star className="w-4 h-4" />;
      default: return null;
    }
  };

  return (
    <Link
      to={`/offer/${offer.id}`}
      className="min-w-[220px] p-4 rounded-2xl shrink-0 active:scale-[0.98] transition-transform"
      style={{ backgroundColor: `${theme.primary}15` }}
    >
      <div className="flex items-start justify-between mb-2">
        <div
          className="p-2 rounded-lg"
          style={{ backgroundColor: `${theme.primary}30` }}
        >
          {getIcon(offer.type) || <span>🏷️</span>}
        </div>
        <span
          className="px-2 py-0.5 rounded-full text-[10px]"
          style={{ backgroundColor: `${theme.primary}30`, color: theme.primary }}
        >
          {offer.validFor}
        </span>
      </div>

      <h3 className="font-medium text-white mb-1">{offer.title}</h3>
      <p className="text-xs text-gray-400 mb-2">{offer.description}</p>

      <div className="flex items-center justify-between pt-2 border-t border-white/10">
        <span className="text-xs" style={{ color: theme.primary }}>Claim Now</span>
        <ChevronRight className="w-4 h-4" style={{ color: theme.primary }} />
      </div>
    </Link>
  );
};

export default StoreOfferCard;
