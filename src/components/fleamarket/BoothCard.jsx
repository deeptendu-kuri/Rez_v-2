import { Eye, Package, Coins, Star, ChevronRight, BadgeCheck } from 'lucide-react';
import { Link } from 'react-router-dom';
import Badge from '../common/Badge';

const BoothCard = ({ booth, variant = 'default' }) => {
  if (variant === 'featured') {
    return (
      <Link
        to={`/booth/${booth.id}`}
        className="block relative rounded-2xl overflow-hidden min-w-[260px] shrink-0 group"
      >
        {/* Background */}
        <div className="relative h-36">
          <img
            src={booth.image}
            alt={booth.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />

          {/* Viewing now */}
          {booth.viewingNow > 0 && (
            <div className="absolute top-3 left-3 flex items-center gap-1.5 px-2 py-1 rounded-full bg-black/60 backdrop-blur-sm">
              <Eye className="w-3 h-3 text-amber-400" />
              <span className="text-xs text-white">{booth.viewingNow} viewing</span>
            </div>
          )}

          {/* Stock warning */}
          {booth.stockLeft <= 10 && (
            <div className="absolute top-3 right-3">
              <Badge variant="danger" size="xs">Only {booth.stockLeft} left</Badge>
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-4 bg-[#2C2C2E]">
          {/* Seller row */}
          <div className="flex items-center gap-2 mb-2">
            <img
              src={booth.seller.image}
              alt={booth.seller.name}
              className="w-6 h-6 rounded-full object-cover"
            />
            <span className="text-xs text-gray-400">{booth.seller.name}</span>
            {booth.seller.verified && (
              <BadgeCheck className="w-3.5 h-3.5 text-blue-400" />
            )}
          </div>

          <h3 className="font-semibold text-white mb-1">{booth.name}</h3>

          {/* Categories */}
          <div className="flex flex-wrap gap-1 mb-3">
            {booth.categories.slice(0, 2).map((cat) => (
              <span
                key={cat}
                className="px-2 py-0.5 rounded-full bg-white/5 text-xs text-gray-400"
              >
                {cat}
              </span>
            ))}
          </div>

          {/* Bottom row */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="text-sm text-white">
                From <span className="font-semibold text-emerald-400">₹{booth.startingPrice}</span>
              </span>
            </div>
            <div className="flex items-center gap-1 text-amber-400">
              <Coins className="w-3.5 h-3.5" />
              <span className="text-xs font-medium">{booth.cashback}%</span>
            </div>
          </div>
        </div>
      </Link>
    );
  }

  // Compact list variant
  return (
    <Link
      to={`/booth/${booth.id}`}
      className="flex items-center gap-4 p-3 rounded-xl bg-[#2C2C2E] hover:bg-[#3C3C3E] transition-colors"
    >
      <div className="relative w-16 h-16 rounded-xl overflow-hidden shrink-0">
        <img
          src={booth.image}
          alt={booth.name}
          className="w-full h-full object-cover"
        />
        {booth.viewingNow > 0 && (
          <div className="absolute bottom-0 left-0 right-0 bg-black/70 text-center py-0.5">
            <span className="text-[10px] text-amber-400">{booth.viewingNow} viewing</span>
          </div>
        )}
      </div>

      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2">
          <h4 className="font-medium text-white truncate">{booth.name}</h4>
          {booth.seller.verified && (
            <BadgeCheck className="w-3.5 h-3.5 text-blue-400 shrink-0" />
          )}
        </div>
        <p className="text-xs text-gray-400 truncate">{booth.seller.name}</p>
        <div className="flex items-center gap-2 mt-1">
          <span className="text-xs text-emerald-400">From ₹{booth.startingPrice}</span>
          <span className="text-gray-600">•</span>
          <span className="text-xs text-amber-400">{booth.cashback}% coins</span>
        </div>
      </div>

      <div className="flex flex-col items-end gap-1">
        {booth.stockLeft <= 10 && (
          <span className="text-[10px] text-red-400">{booth.stockLeft} left</span>
        )}
        <ChevronRight className="w-4 h-4 text-gray-500" />
      </div>
    </Link>
  );
};

export default BoothCard;
