import { Star, Clock, Shield, Users, Coins } from 'lucide-react';
import { Link } from 'react-router-dom';

const DentalCard = ({ treatment }) => {
  const discount = Math.round(
    ((treatment.originalPrice - treatment.price) / treatment.originalPrice) * 100
  );

  return (
    <Link
      to={`/healthcare/dental/${treatment.id}`}
      className="min-w-[280px] p-4 rounded-2xl bg-[#2C2C2E] shrink-0 active:scale-[0.98] transition-transform"
    >
      <div className="relative mb-3">
        <img
          src={treatment.image}
          alt={treatment.name}
          className="w-full h-36 object-cover rounded-xl"
        />
        {treatment.tag && (
          <span className="absolute top-2 left-2 px-2 py-0.5 rounded-full bg-blue-500 text-[10px] text-white">
            {treatment.tag}
          </span>
        )}
        {treatment.isVerified && (
          <div className="absolute top-2 right-2 w-6 h-6 rounded-full bg-emerald-500 flex items-center justify-center">
            <Shield className="w-3.5 h-3.5 text-white" />
          </div>
        )}
      </div>

      <h3 className="font-semibold text-white">{treatment.name}</h3>
      <p className="text-sm text-gray-400">{treatment.provider}</p>

      <div className="flex items-center gap-3 mt-2">
        <div className="flex items-center gap-1">
          <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
          <span className="text-sm text-white">{treatment.rating}</span>
        </div>
        <div className="flex items-center gap-1">
          <Clock className="w-3.5 h-3.5 text-gray-400" />
          <span className="text-xs text-gray-400">{treatment.duration}</span>
        </div>
        <div className="flex items-center gap-1">
          <Users className="w-3.5 h-3.5 text-gray-400" />
          <span className="text-xs text-gray-400">{treatment.trustedBy}+ trusted</span>
        </div>
      </div>

      <div className="flex items-center justify-between mt-3 pt-3 border-t border-white/10">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-lg font-bold text-white">₹{treatment.price.toLocaleString()}</span>
            <span className="text-sm text-gray-500 line-through">₹{treatment.originalPrice.toLocaleString()}</span>
          </div>
          <div className="flex items-center gap-1 mt-0.5">
            <Coins className="w-4 h-4 text-amber-400" />
            <span className="text-xs text-amber-400">Earn {treatment.coinsEarned.toLocaleString()} coins</span>
          </div>
        </div>
        <span className="px-3 py-1.5 rounded-lg bg-emerald-500/20 text-sm text-emerald-400 font-medium">
          {discount}% OFF
        </span>
      </div>
    </Link>
  );
};

export default DentalCard;
