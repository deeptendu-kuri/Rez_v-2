import { Star, Clock, Coins, BadgeCheck, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

const HomeServiceProviderCard = ({ provider }) => {
  return (
    <Link
      to={`/home-services/provider/${provider.id}`}
      className="block p-4 rounded-2xl bg-white dark:bg-[#2C2C2E] active:scale-[0.99] transition-transform"
    >
      <div className="flex gap-4">
        <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-blue-500/30 to-cyan-500/30 flex items-center justify-center shrink-0">
          <span className="text-2xl">
            {provider.category === 'cleaning' ? '🧹' :
             provider.category === 'plumbing' ? '🔧' :
             provider.category === 'electrical' ? '💡' :
             provider.category === 'ac-repair' ? '❄️' :
             provider.category === 'pest-control' ? '🐜' :
             provider.category === 'shifting' ? '🚚' : '🛠️'}
          </span>
        </div>

        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-2 mb-1">
            <div>
              <div className="flex items-center gap-1.5">
                <h3 className="font-medium text-rez-navy dark:text-white">{provider.name}</h3>
                {provider.isVerified && (
                  <BadgeCheck className="w-4 h-4 text-blue-400" />
                )}
              </div>
              <div className="flex items-center gap-2 mt-0.5">
                <div className="flex items-center gap-1">
                  <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                  <span className="text-sm text-rez-navy dark:text-white">{provider.rating}</span>
                  <span className="text-xs text-rez-gray-600 dark:text-gray-500">({provider.reviews.toLocaleString()})</span>
                </div>
              </div>
            </div>
            <span className={`px-2 py-0.5 rounded-full text-[10px] shrink-0 ${
              provider.isTrusted
                ? 'bg-emerald-500/20 text-emerald-400'
                : 'bg-blue-500/20 text-blue-400'
            }`}>
              {provider.badge}
            </span>
          </div>

          <div className="flex flex-wrap gap-1.5 mb-2">
            {provider.services?.slice(0, 3).map((service, index) => (
              <span
                key={index}
                className="px-2 py-0.5 rounded-full bg-rez-gray-100 dark:bg-white/10 text-[10px] text-rez-gray-700 dark:text-gray-300"
              >
                {service}
              </span>
            ))}
          </div>

          <div className="flex items-center gap-3 text-xs text-rez-gray-600 dark:text-gray-400">
            <div className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" />
              <span>ETA: {provider.eta}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between mt-3 pt-3 border-t border-rez-gray-200 dark:border-white/10">
        <div>
          <p className="text-lg font-bold text-rez-navy dark:text-white">₹{provider.startingPrice}<span className="text-xs text-rez-gray-600 dark:text-gray-400 font-normal"> onwards</span></p>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1">
            <Coins className="w-4 h-4 text-amber-400" />
            <span className="text-sm font-medium text-amber-400">{provider.cashbackPercent}% back</span>
          </div>
          <div className="flex items-center gap-1 px-2 py-1 rounded-full bg-amber-500/20">
            <span className="text-xs text-amber-400">+{provider.coinsEarned} coins</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default HomeServiceProviderCard;
