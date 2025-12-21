import { useState, useEffect } from 'react';
import { Clock, ChevronRight, Gift, Zap, Package } from 'lucide-react';
import FleaProductTile from './FleaProductTile';
import Badge from '../common/Badge';

const CountdownTimer = ({ endsIn }) => {
  const [time, setTime] = useState(endsIn);

  useEffect(() => {
    const timer = setInterval(() => {
      // Parse and decrement time
      const parts = time.split(':').map(Number);
      let [h, m, s] = parts;

      if (s > 0) s--;
      else if (m > 0) { m--; s = 59; }
      else if (h > 0) { h--; m = 59; s = 59; }

      setTime(`${h}:${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`);
    }, 1000);

    return () => clearInterval(timer);
  }, [time]);

  return (
    <div className="flex items-center gap-1.5 px-2 py-1 rounded-lg bg-red-500/20">
      <Clock className="w-3.5 h-3.5 text-red-400" />
      <span className="text-sm font-mono font-bold text-red-400">{time}</span>
    </div>
  );
};

const DealCategoryCard = ({ deal, onClick }) => {
  const getIcon = () => {
    switch (deal.icon) {
      case '🔥': return <Zap className="w-6 h-6 text-orange-400" />;
      case '🕒': return <Clock className="w-6 h-6 text-purple-400" />;
      case '🎁': return <Gift className="w-6 h-6 text-emerald-400" />;
      case '⏰': return <Clock className="w-6 h-6 text-amber-400" />;
      case '📦': return <Package className="w-6 h-6 text-blue-400" />;
      default: return <span className="text-2xl">{deal.icon}</span>;
    }
  };

  return (
    <button
      onClick={onClick}
      className={`relative min-w-[140px] p-4 rounded-2xl bg-gradient-to-br ${deal.color} shrink-0 text-left overflow-hidden group`}
    >
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute -right-4 -bottom-4 w-24 h-24 rounded-full bg-white" />
      </div>

      <div className="relative">
        {getIcon()}
        <h4 className="font-semibold text-white mt-2 text-sm">{deal.title}</h4>
        <p className="text-xs text-white/70 mt-0.5">{deal.products.length} items</p>

        {deal.endsIn && (
          <div className="mt-2">
            <CountdownTimer endsIn={deal.endsIn} />
          </div>
        )}
      </div>

      <ChevronRight className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-white/50 group-hover:translate-x-1 transition-transform" />
    </button>
  );
};

const FleaDealsSection = ({ deals }) => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const dealCategories = Object.entries(deals);

  const handleCategoryClick = (key) => {
    setSelectedCategory(selectedCategory === key ? null : key);
  };

  return (
    <div>
      {/* Header */}
      <div className="flex items-center gap-2 mb-4 px-4">
        <span className="text-2xl">💥</span>
        <div>
          <h2 className="text-lg font-bold text-white">Deals & Steals</h2>
          <p className="text-sm text-gray-400">Flea-only crazy prices</p>
        </div>
      </div>

      {/* Deal Categories Scroll */}
      <div className="flex gap-3 px-4 overflow-x-auto hide-scrollbar pb-2">
        {dealCategories.map(([key, deal]) => (
          <DealCategoryCard
            key={key}
            deal={deal}
            onClick={() => handleCategoryClick(key)}
          />
        ))}
      </div>

      {/* Expanded Products Grid */}
      {selectedCategory && deals[selectedCategory] && (
        <div className="mt-4 px-4 animate-fade-in">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <span>{deals[selectedCategory].icon}</span>
              <h3 className="font-semibold text-white">{deals[selectedCategory].title}</h3>
            </div>
            <button
              onClick={() => setSelectedCategory(null)}
              className="text-xs text-gray-400"
            >
              Close
            </button>
          </div>

          <div className="grid grid-cols-2 gap-3">
            {deals[selectedCategory].products.slice(0, 4).map((product) => (
              <FleaProductTile key={product.id} product={product} />
            ))}
          </div>

          {deals[selectedCategory].products.length > 4 && (
            <button className="w-full mt-3 py-2.5 rounded-xl bg-white/5 text-sm text-emerald-400 font-medium">
              View All {deals[selectedCategory].products.length} Items
            </button>
          )}
        </div>
      )}

      {/* Quick stats */}
      <div className="flex justify-center gap-4 mt-4 px-4">
        <div className="text-center">
          <p className="text-lg font-bold text-emerald-400">
            {dealCategories.reduce((sum, [_, d]) => sum + d.products.length, 0)}
          </p>
          <p className="text-xs text-gray-500">Total Deals</p>
        </div>
        <div className="w-px bg-gray-700" />
        <div className="text-center">
          <p className="text-lg font-bold text-amber-400">60%</p>
          <p className="text-xs text-gray-500">Max Discount</p>
        </div>
        <div className="w-px bg-gray-700" />
        <div className="text-center">
          <p className="text-lg font-bold text-purple-400">₹99</p>
          <p className="text-xs text-gray-500">Starting</p>
        </div>
      </div>
    </div>
  );
};

export default FleaDealsSection;
