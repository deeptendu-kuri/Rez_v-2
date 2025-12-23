import { Link } from 'react-router-dom';
import { MapPin, Clock, Users, Zap, Coins } from 'lucide-react';
import Badge from '../common/Badge';

const DealCard = ({ deal, variant = 'default', showDistance = true }) => {
  const getDiscountColor = () => {
    if (deal.discountType === 'bogo') return 'text-purple-400 bg-purple-500/20';
    if (deal.discountType === 'freebie' || deal.discount === 'FREE') return 'text-emerald-400 bg-emerald-500/20';
    if (deal.type === 'cashback') return 'text-amber-400 bg-amber-500/20';
    return 'text-red-400 bg-red-500/20';
  };

  // Compact horizontal card (for horizontal scroll sections)
  if (variant === 'compact') {
    return (
      <Link
        to={`/deal/${deal.id}`}
        className="min-w-[160px] w-[160px] bg-white dark:bg-[#2C2C2E] border border-rez-gray-200 dark:border-transparent shadow-sm dark:shadow-none rounded-2xl overflow-hidden shrink-0 active:bg-[#3A3A3C] transition-colors"
      >
        {/* Image */}
        <div className="relative h-24">
          {deal.image ? (
            <img src={deal.image} alt={deal.store} className="w-full h-full object-cover" />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center">
              <span className="text-3xl">🏪</span>
            </div>
          )}

          {/* Discount Badge */}
          <div className={`absolute top-2 left-2 px-2 py-1 rounded-lg ${getDiscountColor()}`}>
            <span className="text-xs font-bold">{deal.discount}</span>
          </div>

          {/* Distance */}
          {showDistance && deal.distance && (
            <div className="absolute bottom-2 right-2 px-2 py-0.5 rounded-full bg-white dark:bg-black/60 backdrop-blur">
              <span className="text-[10px] text-rez-navy dark:text-white">{deal.distance}</span>
            </div>
          )}
        </div>

        <div className="p-3">
          <p className="text-xs text-rez-gray-600 dark:text-gray-400 truncate">{deal.store}</p>
          <p className="text-sm font-medium text-rez-navy dark:text-white line-clamp-2 mt-0.5">{deal.title}</p>
        </div>
      </Link>
    );
  }

  // Lightning deal card (urgent, with timer and progress)
  if (variant === 'lightning') {
    const progressPercent = ((deal.total - deal.remaining) / deal.total) * 100;

    return (
      <Link
        to={`/deal/${deal.id}`}
        className="min-w-[200px] p-4 bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-2xl border border-orange-500/30 shrink-0"
      >
        <div className="flex items-center gap-3 mb-3">
          <img
            src={deal.storeLogo}
            alt={deal.store}
            className="w-10 h-10 rounded-xl bg-white object-contain"
            onError={(e) => { e.target.style.display = 'none'; }}
          />
          <div className="flex-1">
            <p className="font-medium text-rez-navy dark:text-white text-sm">{deal.store}</p>
            <p className="text-xs text-rez-gray-600 dark:text-gray-400">{deal.title}</p>
          </div>
        </div>

        <div className="flex items-center justify-between mb-2">
          <span className="text-lg font-bold text-orange-400">{deal.discount}</span>
          <div className="flex items-center gap-1 text-red-400">
            <Zap className="w-4 h-4" />
            <span className="text-sm font-medium">{deal.expiresIn}</span>
          </div>
        </div>

        {/* Progress bar */}
        <div className="h-2 bg-rez-gray-100 dark:bg-white/10 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-orange-500 to-red-500 rounded-full transition-all"
            style={{ width: `${progressPercent}%` }}
          />
        </div>
        <p className="text-xs text-rez-gray-600 dark:text-gray-400 mt-1">{deal.remaining} left of {deal.total}</p>

        {deal.code && (
          <div className="mt-3 px-3 py-1.5 bg-rez-gray-100 dark:bg-white/10 rounded-lg text-center">
            <span className="text-sm font-mono text-amber-400">{deal.code}</span>
          </div>
        )}
      </Link>
    );
  }

  // Cashback card
  if (variant === 'cashback') {
    return (
      <Link
        to={`/deal/${deal.id}`}
        className="min-w-[180px] bg-white dark:bg-[#2C2C2E] border border-rez-gray-200 dark:border-transparent shadow-sm dark:shadow-none rounded-2xl overflow-hidden shrink-0 active:bg-[#3A3A3C]"
      >
        {deal.image ? (
          <div className="h-28 relative">
            <img src={deal.image} alt={deal.store} className="w-full h-full object-cover" />
            {deal.featured && (
              <div className="absolute top-2 left-2 px-2 py-1 rounded-lg bg-amber-500/90">
                <span className="text-xs font-bold text-black">💰 Super</span>
              </div>
            )}
          </div>
        ) : (
          <div className="h-20 bg-gradient-to-br from-amber-500/20 to-orange-500/20 flex items-center justify-center">
            <img
              src={deal.storeLogo}
              alt={deal.store}
              className="w-12 h-12 rounded-xl object-contain"
              onError={(e) => { e.target.innerHTML = '💰'; }}
            />
          </div>
        )}

        <div className="p-3">
          <p className="text-xs text-rez-gray-600 dark:text-gray-400">{deal.store}</p>
          <p className="text-lg font-bold text-amber-400">{deal.cashback} Cashback</p>
          {deal.coinsEarned && (
            <div className="flex items-center gap-1 mt-1">
              <span className="text-amber-400">🪙</span>
              <span className="text-xs text-rez-gray-600 dark:text-gray-400">Earn up to {deal.coinsEarned} coins</span>
            </div>
          )}
          {deal.distance && (
            <p className="text-xs text-rez-gray-600 dark:text-gray-500 mt-1 flex items-center gap-1">
              <MapPin className="w-3 h-3" />
              {deal.distance}
            </p>
          )}
        </div>
      </Link>
    );
  }

  // Full width list card
  if (variant === 'list') {
    return (
      <Link
        to={`/deal/${deal.id}`}
        className="flex gap-4 p-4 bg-white dark:bg-[#2C2C2E] border border-rez-gray-200 dark:border-transparent shadow-sm dark:shadow-none rounded-2xl active:bg-[#3A3A3C] transition-colors"
      >
        {/* Image or Logo */}
        <div className="w-20 h-20 rounded-xl overflow-hidden shrink-0">
          {deal.image ? (
            <img src={deal.image} alt={deal.store} className="w-full h-full object-cover" />
          ) : deal.storeLogo ? (
            <div className="w-full h-full bg-rez-gray-50 dark:bg-white/5 flex items-center justify-center">
              <img src={deal.storeLogo} alt={deal.store} className="w-12 h-12 object-contain" />
            </div>
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center">
              <span className="text-2xl">🏪</span>
            </div>
          )}
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-2">
            <div>
              <p className="text-sm text-rez-gray-600 dark:text-gray-400">{deal.store}</p>
              <p className="font-medium text-rez-navy dark:text-white">{deal.title}</p>
            </div>
            <div className={`px-2 py-1 rounded-lg shrink-0 ${getDiscountColor()}`}>
              <span className="text-sm font-bold">{deal.discount || deal.cashback}</span>
            </div>
          </div>

          {/* Badges */}
          <div className="flex flex-wrap gap-1 mt-2">
            {deal.badge && <Badge variant="prive" size="xs">{deal.badge}</Badge>}
            {deal.trending && <Badge variant="danger" size="xs">🔥 Trending</Badge>}
            {deal.expiresIn && (
              <Badge variant="default" size="xs">
                <Clock className="w-3 h-3" />
                {deal.expiresIn}
              </Badge>
            )}
          </div>

          {/* Meta */}
          <div className="flex items-center gap-3 mt-2 text-xs text-rez-gray-600 dark:text-gray-500">
            {deal.distance && (
              <span className="flex items-center gap-1">
                <MapPin className="w-3 h-3" />
                {deal.distance}
              </span>
            )}
            {deal.redeemCount && (
              <span className="flex items-center gap-1">
                <Users className="w-3 h-3" />
                {deal.redeemCount} used
              </span>
            )}
          </div>
        </div>
      </Link>
    );
  }

  // Default card variant
  return (
    <Link
      to={`/deal/${deal.id}`}
      className="min-w-[220px] w-[220px] bg-white dark:bg-[#2C2C2E] border border-rez-gray-200 dark:border-transparent shadow-sm dark:shadow-none rounded-2xl overflow-hidden shrink-0 active:bg-[#3A3A3C] transition-colors"
    >
      {/* Image */}
      <div className="relative h-32">
        {deal.image ? (
          <img src={deal.image} alt={deal.store} className="w-full h-full object-cover" />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center">
            <img
              src={deal.storeLogo}
              alt={deal.store}
              className="w-16 h-16 rounded-xl object-contain"
              onError={(e) => { e.target.innerHTML = '🏪'; }}
            />
          </div>
        )}

        {/* Discount Badge */}
        <div className={`absolute top-3 left-3 px-2.5 py-1 rounded-xl ${getDiscountColor()}`}>
          <span className="text-sm font-bold">{deal.discount || deal.cashback}</span>
        </div>

        {/* Trending/Hot badge */}
        {(deal.trending || deal.hot) && (
          <div className="absolute top-3 right-3 px-2 py-1 rounded-lg bg-red-500/90">
            <span className="text-xs font-bold text-rez-navy dark:text-white">🔥</span>
          </div>
        )}

        {/* Timer for expiring deals */}
        {deal.expiresIn && (
          <div className="absolute bottom-3 left-3 px-2 py-1 rounded-lg bg-white dark:bg-black/70 backdrop-blur flex items-center gap-1">
            <Clock className="w-3 h-3 text-red-400" />
            <span className="text-xs text-rez-navy dark:text-white">{deal.expiresIn}</span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-3">
        <div className="flex items-center gap-2">
          {deal.storeLogo && (
            <img
              src={deal.storeLogo}
              alt=""
              className="w-6 h-6 rounded object-contain bg-white"
              onError={(e) => { e.target.style.display = 'none'; }}
            />
          )}
          <p className="text-sm text-rez-gray-600 dark:text-gray-400 truncate">{deal.store}</p>
        </div>
        <p className="font-medium text-rez-navy dark:text-white mt-1 line-clamp-2">{deal.title}</p>

        <div className="flex items-center justify-between mt-2">
          {showDistance && deal.distance && (
            <span className="text-xs text-rez-gray-600 dark:text-gray-500 flex items-center gap-1">
              <MapPin className="w-3 h-3" />
              {deal.distance}
            </span>
          )}
          {deal.redeemCount && (
            <span className="text-xs text-rez-gray-600 dark:text-gray-500">{deal.redeemCount} used</span>
          )}
        </div>
      </div>
    </Link>
  );
};

export default DealCard;
