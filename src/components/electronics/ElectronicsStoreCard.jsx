import { MapPin, Star, Clock, Zap, Navigation } from 'lucide-react';
import Button from '../common/Button';

const ElectronicsStoreCard = ({ store }) => {
  return (
    <div className="p-4 rounded-2xl bg-[#2C2C2E]">
      {/* Header */}
      <div className="flex gap-3">
        <img
          src={store.image}
          alt={store.name}
          className="w-16 h-16 rounded-xl object-cover"
        />
        <div className="flex-1">
          <div className="flex items-start justify-between">
            <div>
              <h3 className="font-semibold text-white">{store.name}</h3>
              <p className="text-xs text-gray-400">{store.type}</p>
            </div>
            {store.isOpen ? (
              <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-xs text-emerald-400">
                Open
              </span>
            ) : (
              <span className="px-2 py-0.5 rounded-full bg-red-500/20 text-xs text-red-400">
                Closed
              </span>
            )}
          </div>

          {/* Meta */}
          <div className="flex items-center gap-3 mt-2 text-gray-400">
            <div className="flex items-center gap-1">
              <MapPin className="w-3 h-3" />
              <span className="text-xs">{store.distance}</span>
            </div>
            <div className="flex items-center gap-1">
              <Star className="w-3 h-3 text-amber-400 fill-amber-400" />
              <span className="text-xs text-white">{store.rating}</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="w-3 h-3" />
              <span className="text-xs">Till {store.openTill}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Badges */}
      <div className="flex items-center gap-2 mt-3">
        {store.is60Min && (
          <span className="flex items-center gap-1 px-2 py-1 rounded-full bg-amber-500 text-xs text-black font-medium">
            <Zap className="w-3 h-3" />
            60-min delivery
          </span>
        )}
        <span className="px-2 py-1 rounded-full bg-emerald-500/20 text-xs text-emerald-400">
          {store.cashbackPercent}% cashback
        </span>
      </div>

      {/* Brands */}
      <div className="mt-3">
        <p className="text-xs text-gray-500 mb-1">Brands Available</p>
        <div className="flex flex-wrap gap-1">
          {store.brands.map((brand, index) => (
            <span
              key={index}
              className="px-2 py-0.5 rounded-full bg-white/5 text-xs text-gray-400"
            >
              {brand}
            </span>
          ))}
        </div>
      </div>

      {/* Payments */}
      <div className="mt-3">
        <p className="text-xs text-gray-500 mb-1">Accepts</p>
        <div className="flex flex-wrap gap-1">
          {store.payments.map((payment, index) => (
            <span
              key={index}
              className="px-2 py-0.5 rounded-full bg-blue-500/10 text-xs text-blue-400"
            >
              {payment}
            </span>
          ))}
        </div>
      </div>

      {/* CTAs */}
      <div className="flex gap-2 mt-4">
        <Button variant="secondary" size="sm" className="flex-1">
          <Navigation className="w-3.5 h-3.5 mr-1" />
          Navigate
        </Button>
        <Button variant="primary" size="sm" className="flex-1">
          Pay at Store
        </Button>
      </div>
    </div>
  );
};

export default ElectronicsStoreCard;
