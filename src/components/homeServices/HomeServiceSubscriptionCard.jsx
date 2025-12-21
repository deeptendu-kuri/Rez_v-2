import { Check, Coins, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const HomeServiceSubscriptionCard = ({ subscription }) => {
  return (
    <div className={`p-4 rounded-2xl border ${
      subscription.popular
        ? 'bg-gradient-to-r from-emerald-500/20 to-teal-500/20 border-emerald-500/30'
        : 'bg-[#2C2C2E] border-white/10'
    }`}>
      {subscription.popular && (
        <div className="flex items-center gap-1 mb-2">
          <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
          <span className="text-xs text-amber-400 font-medium">Most Popular</span>
        </div>
      )}

      <h3 className="font-semibold text-white mb-1">{subscription.name}</h3>
      <p className="text-sm text-gray-400 mb-3">{subscription.description}</p>

      <div className="flex items-baseline gap-2 mb-3">
        <span className="text-2xl font-bold text-white">₹{subscription.price}</span>
        <span className="text-sm text-gray-500 line-through">₹{subscription.originalPrice}</span>
        <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-xs text-emerald-400">
          Save ₹{subscription.savings}
        </span>
      </div>

      <div className="space-y-2 mb-4">
        {subscription.benefits.map((benefit, index) => (
          <div key={index} className="flex items-center gap-2">
            <Check className="w-4 h-4 text-emerald-400" />
            <span className="text-sm text-gray-300">{benefit}</span>
          </div>
        ))}
      </div>

      <div className="flex items-center gap-2 mb-4 p-2 rounded-lg bg-amber-500/10">
        <Coins className="w-4 h-4 text-amber-400" />
        <span className="text-sm text-amber-400">+{subscription.extraCoins} Bonus Coins</span>
      </div>

      <button className={`w-full py-2.5 rounded-xl text-sm font-medium active:scale-[0.98] transition-transform ${
        subscription.popular
          ? 'bg-emerald-500 text-white'
          : 'bg-white/10 text-white'
      }`}>
        Subscribe Now
      </button>
    </div>
  );
};

export default HomeServiceSubscriptionCard;
