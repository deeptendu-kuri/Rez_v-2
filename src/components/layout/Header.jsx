import { Search, Bell, SlidersHorizontal } from 'lucide-react';
import { useApp, globalModeOptions } from '../../contexts/AppContext';
import { useWallet } from '../../contexts/WalletContext';
import ThemeToggle from '../ThemeToggle';

const Header = () => {
  const { globalMode, toggleFilterSheet, toggleModeSwitcher } = useApp();
  const { totalCoinsValue } = useWallet();

  const currentMode = globalModeOptions.find(m => m.id === globalMode);

  return (
    <header className="sticky top-0 z-50 glass safe-top border-b border-rez-gray-200 dark:border-white/10">
      <div className="px-4 pt-2 pb-3">
        {/* Top Row */}
        <div className="flex items-center justify-between mb-3">
          {/* Logo & Mode Indicator */}
          <button
            onClick={toggleModeSwitcher}
            className="flex items-center gap-2"
          >
            <span className="text-2xl font-bold text-rez-navy dark:text-white">ReZ</span>
            <div className="flex items-center gap-1 px-2 py-1 rounded-full bg-rez-green-500/10 dark:bg-white/10">
              <span className="text-sm">{currentMode?.icon}</span>
              <span className="text-xs text-rez-gray-700 dark:text-gray-300">{currentMode?.label}</span>
            </div>
          </button>

          {/* Right Actions */}
          <div className="flex items-center gap-3">
            {/* Coins */}
            <div className="flex items-center gap-1 px-3 py-1.5 rounded-full bg-amber-500/20 dark:bg-amber-500/20">
              <span className="text-amber-400">🪙</span>
              <span className="text-sm font-medium text-amber-500 dark:text-amber-400">{totalCoinsValue?.toLocaleString() || 0}</span>
            </div>

            {/* Theme Toggle */}
            <ThemeToggle />

            {/* Notifications */}
            <button className="relative p-2 rounded-full bg-rez-green-500/10 dark:bg-white/10 hover:bg-rez-green-500/20 dark:hover:bg-white/20 transition-colors">
              <Bell className="w-5 h-5 text-rez-navy dark:text-white" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>
          </div>
        </div>

        {/* Search Bar */}
        <div className="flex gap-2">
          <div className="flex-1 flex items-center gap-3 px-4 py-3 rounded-2xl bg-rez-gray-100 dark:bg-white/10 border border-rez-gray-200 dark:border-white/10">
            <Search className="w-5 h-5 text-rez-gray-600 dark:text-gray-400" />
            <input
              type="text"
              placeholder="Search stores, products, or tell us what you need..."
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
    </header>
  );
};

export default Header;
