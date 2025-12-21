import { Star, Home, Clock, Coins } from 'lucide-react';
import { Link } from 'react-router-dom';

const DiagnosticCard = ({ test, variant = 'default' }) => {
  const discount = Math.round(
    ((test.originalPrice - test.price) / test.originalPrice) * 100
  );

  if (variant === 'compact') {
    return (
      <Link
        to={`/healthcare/test/${test.id}`}
        className="min-w-[180px] p-4 rounded-2xl bg-[#2C2C2E] shrink-0 active:scale-[0.98] transition-transform"
      >
        {test.tag && (
          <span className="px-2 py-0.5 rounded-full bg-blue-500 text-[10px] text-white mb-2 inline-block">
            {test.tag}
          </span>
        )}
        <h3 className="text-sm font-medium text-white line-clamp-2">{test.name}</h3>
        <p className="text-xs text-gray-400 mt-0.5">{test.lab}</p>
        <p className="text-xs text-gray-500 mt-0.5">{test.parameters} parameters</p>

        <div className="flex items-center gap-2 mt-2">
          <span className="text-sm font-bold text-white">₹{test.price}</span>
          <span className="text-xs text-gray-500 line-through">₹{test.originalPrice}</span>
          <span className="text-xs text-emerald-400">{discount}% off</span>
        </div>

        <div className="flex items-center gap-1 mt-1">
          <Coins className="w-3 h-3 text-amber-400" />
          <span className="text-[10px] text-amber-400">+{test.coinsEarned} coins</span>
        </div>
      </Link>
    );
  }

  return (
    <Link
      to={`/healthcare/test/${test.id}`}
      className="p-4 rounded-2xl bg-[#2C2C2E] active:scale-[0.99] transition-transform"
    >
      <div className="flex items-start justify-between">
        <div className="flex-1">
          {test.tag && (
            <span className="px-2 py-0.5 rounded-full bg-blue-500 text-[10px] text-white mb-2 inline-block">
              {test.tag}
            </span>
          )}
          <h3 className="font-semibold text-white">{test.name}</h3>
          <p className="text-sm text-gray-400">{test.lab}</p>

          <div className="flex items-center gap-3 mt-2">
            <div className="flex items-center gap-1">
              <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
              <span className="text-sm text-white">{test.rating}</span>
              <span className="text-xs text-gray-500">({test.reviews})</span>
            </div>
            <span className="text-xs text-gray-500">{test.parameters} parameters</span>
          </div>
        </div>

        <div className="w-12 h-12 rounded-xl bg-purple-500/20 flex items-center justify-center">
          <span className="text-2xl">🧪</span>
        </div>
      </div>

      {/* Features */}
      <div className="flex gap-3 mt-3">
        {test.homeCollection && (
          <div className="flex items-center gap-1">
            <Home className="w-4 h-4 text-emerald-400" />
            <span className="text-xs text-emerald-400">Home Collection</span>
          </div>
        )}
        <div className="flex items-center gap-1">
          <Clock className="w-4 h-4 text-blue-400" />
          <span className="text-xs text-blue-400">Report in {test.reportTime}</span>
        </div>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between mt-3 pt-3 border-t border-white/10">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-lg font-bold text-white">₹{test.price}</span>
            <span className="text-sm text-gray-500 line-through">₹{test.originalPrice}</span>
            <span className="text-sm text-emerald-400">{discount}% off</span>
          </div>
          <div className="flex items-center gap-1 mt-0.5">
            <Coins className="w-4 h-4 text-amber-400" />
            <span className="text-xs text-amber-400">Earn {test.coinsEarned} coins</span>
          </div>
        </div>
        <button className="px-4 py-2 rounded-xl bg-emerald-500 text-sm font-medium text-white">
          Book Now
        </button>
      </div>
    </Link>
  );
};

export default DiagnosticCard;
