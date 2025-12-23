import { Link } from 'react-router-dom';
import { Coins, MapPin, ChevronDown } from 'lucide-react';
import { useWallet } from '../../contexts/WalletContext';

const StoreHeader = ({ title, tagline, theme, modes = [] }) => {
  const { rezCoins } = useWallet();

  return (
    <div className="sticky top-0 z-40 glass">
      <div className="px-4 py-3">
        <div className="flex items-center justify-between mb-2">
          <div>
            <h1 className="text-xl font-bold text-rez-navy dark:text-white">{title}</h1>
            <p className="text-xs text-rez-gray-600 dark:text-gray-400">{tagline}</p>
          </div>
          <Link to="/wallet" className="flex items-center gap-1.5 px-3 py-1.5 rounded-full" style={{ backgroundColor: `${theme.primary}30` }}>
            <Coins className="w-4 h-4" style={{ color: theme.primary }} />
            <span className="text-sm font-medium" style={{ color: theme.primary }}>{rezCoins}</span>
          </Link>
        </div>

        {/* Mode Indicators */}
        {modes.length > 0 && (
          <div className="flex gap-2 mb-2">
            {modes.map((mode, index) => (
              <span
                key={index}
                className="px-2 py-0.5 rounded-full text-[10px]"
                style={{ backgroundColor: `${theme.primary}20`, color: theme.primary }}
              >
                {mode}
              </span>
            ))}
          </div>
        )}

        {/* Location Toggle */}
        <div className="flex items-center justify-between">
          <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-rez-gray-100 dark:bg-white/10">
            <MapPin className="w-3.5 h-3.5 text-emerald-400" />
            <span className="text-xs text-rez-navy dark:text-white">Near Me</span>
            <ChevronDown className="w-3 h-3 text-rez-gray-600 dark:text-gray-400" />
          </button>
          <div className="flex items-center gap-2 text-xs text-rez-gray-600 dark:text-gray-400">
            <span>Cashback: <span style={{ color: theme.primary }}>Up to 20%</span></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoreHeader;
