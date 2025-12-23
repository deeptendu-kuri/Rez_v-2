import { useState } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, ChevronDown, Search, Wallet, SlidersHorizontal, Map } from 'lucide-react';
import { useWallet } from '../../contexts/WalletContext';
import { useApp } from '../../contexts/AppContext';

const ExploreHeader = () => {
  const { rezCoins, totalCoinsValue } = useWallet();
  const { toggleFilterSheet } = useApp();
  const [location, setLocation] = useState('BTM Layout, Bangalore');
  const [radius, setRadius] = useState('3 km');
  const [searchQuery, setSearchQuery] = useState('');

  const searchPlaceholders = [
    "Best sneakers under ₹2,000 near me",
    "Halal biryani under ₹500",
    "Hair spa with cashback",
    "Fastest delivery electronics"
  ];

  const [currentPlaceholder] = useState(
    searchPlaceholders[Math.floor(Math.random() * searchPlaceholders.length)]
  );

  return (
    <div className="sticky top-0 z-50 glass safe-top border-b border-rez-gray-200 dark:border-white/10">
      <div className="px-4 pt-2 pb-3">
        {/* Top Row - Location & Wallet */}
        <div className="flex items-center justify-between mb-3">
          {/* Location Selector */}
          <button className="flex items-center gap-2 px-3 py-2 rounded-full bg-rez-gray-100 dark:bg-white/10 hover:bg-rez-gray-200 dark:hover:bg-white/20 transition-colors">
            <MapPin className="w-4 h-4 text-rez-green-500" />
            <div className="text-left">
              <p className="text-sm font-medium text-rez-navy dark:text-white truncate max-w-[140px]">
                {location}
              </p>
              <p className="text-[10px] text-rez-gray-600 dark:text-gray-400">
                Within {radius}
              </p>
            </div>
            <ChevronDown className="w-4 h-4 text-rez-gray-600 dark:text-gray-400" />
          </button>

          {/* Wallet & Map */}
          <div className="flex items-center gap-2">
            <Link
              to="/explore/map"
              className="p-2 rounded-full bg-rez-gray-100 dark:bg-white/10 hover:bg-rez-gray-200 dark:hover:bg-white/20 transition-colors"
            >
              <Map className="w-5 h-5 text-rez-navy dark:text-white" />
            </Link>
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-amber-500/20">
              <span className="text-amber-400">🪙</span>
              <span className="text-sm font-semibold text-amber-500 dark:text-amber-400">
                {totalCoinsValue?.toLocaleString() || 0}
              </span>
            </div>
          </div>
        </div>

        {/* Search Bar */}
        <div className="flex gap-2">
          <div className="flex-1 flex items-center gap-3 px-4 py-3 rounded-2xl bg-white dark:bg-white/10 border border-rez-gray-200 dark:border-white/10">
            <Search className="w-5 h-5 text-rez-gray-600 dark:text-gray-400" />
            <input
              type="text"
              placeholder={currentPlaceholder}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="flex-1 bg-transparent text-rez-navy dark:text-white placeholder-rez-gray-500 dark:placeholder-gray-500 outline-none text-sm"
            />
          </div>
          <button
            onClick={toggleFilterSheet}
            className="p-3 rounded-2xl bg-rez-green-500/10 dark:bg-white/10 hover:bg-rez-green-500/20 dark:hover:bg-white/20 active:bg-rez-green-500/30 dark:active:bg-white/20 transition-colors"
          >
            <SlidersHorizontal className="w-5 h-5 text-rez-navy dark:text-white" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ExploreHeader;
