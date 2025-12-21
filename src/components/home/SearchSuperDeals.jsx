import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Search, Zap, Sparkles } from 'lucide-react';

const SearchSuperDeals = () => {
  const [placeholderIndex, setPlaceholderIndex] = useState(0);

  const placeholders = [
    'Pizza under ₹300 near me',
    'Halal biryani in BTM',
    'Yellow shirt under ₹1000 in 1 hour',
    'Best salon with cashback',
    'Electronics with 60-min delivery',
    'Coffee shops with offers',
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setPlaceholderIndex((prev) => (prev + 1) % placeholders.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="px-4 py-2">
      <div className="flex gap-2">
        {/* Search Bar - 70% */}
        <Link
          to="/search"
          className="flex-[7] flex items-center gap-3 px-4 py-3 rounded-2xl bg-[#2C2C2E] border border-white/5"
        >
          <Search className="w-5 h-5 text-gray-400" />
          <div className="flex-1 overflow-hidden">
            <p className="text-sm text-gray-500 truncate animate-fade-in" key={placeholderIndex}>
              <Sparkles className="w-3 h-3 inline mr-1 text-purple-400" />
              {placeholders[placeholderIndex]}
            </p>
          </div>
        </Link>

        {/* Super Deals Button - 30% */}
        <Link
          to="/super-deals"
          className="flex-[3] flex items-center justify-center gap-1.5 px-3 py-3 rounded-2xl bg-gradient-to-r from-amber-500 to-orange-500 shadow-lg shadow-orange-500/30 animate-pulse-subtle"
        >
          <Zap className="w-4 h-4 text-white fill-white" />
          <span className="text-sm font-bold text-white">Deals</span>
        </Link>
      </div>
    </div>
  );
};

export default SearchSuperDeals;
