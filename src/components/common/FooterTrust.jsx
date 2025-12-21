import { Link } from 'react-router-dom';
import { Coins, Clock, Shield, HelpCircle, AlertCircle, FileText } from 'lucide-react';

const FooterTrust = ({
  coinsEarnable = 250,
  expiringCoins = 50,
  expiryDays = 3,
}) => {
  return (
    <div className="px-4 mt-8 mb-4">
      {/* Coins Summary */}
      <div className="p-4 rounded-2xl bg-gradient-to-r from-amber-500/10 to-yellow-500/10 border border-amber-500/20 mb-4">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <Coins className="w-5 h-5 text-amber-400" />
            <span className="font-medium text-white">Coins Summary</span>
          </div>
        </div>

        <div className="flex items-center justify-between mb-2">
          <span className="text-sm text-gray-400">Earnable today</span>
          <span className="font-bold text-amber-400">+{coinsEarnable} coins</span>
        </div>

        {expiringCoins > 0 && (
          <div className="flex items-center justify-between p-2 rounded-lg bg-red-500/10 border border-red-500/20">
            <div className="flex items-center gap-2">
              <AlertCircle className="w-4 h-4 text-red-400" />
              <span className="text-xs text-red-400">
                {expiringCoins} coins expiring in {expiryDays} days
              </span>
            </div>
            <Link to="/wallet" className="text-xs text-red-400 underline">
              Use Now
            </Link>
          </div>
        )}
      </div>

      {/* Trust & Transparency */}
      <div className="p-4 rounded-2xl bg-[#2C2C2E]">
        <h3 className="font-medium text-white mb-3 flex items-center gap-2">
          <Shield className="w-4 h-4 text-emerald-400" />
          Trust & Transparency
        </h3>

        <div className="space-y-2">
          <Link
            to="/terms"
            className="flex items-center justify-between p-2 rounded-lg hover:bg-white/5 transition-colors"
          >
            <div className="flex items-center gap-2">
              <FileText className="w-4 h-4 text-gray-500" />
              <span className="text-sm text-gray-400">Terms & Conditions</span>
            </div>
          </Link>

          <Link
            to="/help"
            className="flex items-center justify-between p-2 rounded-lg hover:bg-white/5 transition-colors"
          >
            <div className="flex items-center gap-2">
              <HelpCircle className="w-4 h-4 text-gray-500" />
              <span className="text-sm text-gray-400">Help & Support</span>
            </div>
          </Link>

          <button className="flex items-center justify-between w-full p-2 rounded-lg hover:bg-white/5 transition-colors">
            <div className="flex items-center gap-2">
              <AlertCircle className="w-4 h-4 text-gray-500" />
              <span className="text-sm text-gray-400">Report an Issue</span>
            </div>
          </button>
        </div>
      </div>

      {/* Made with ReZ */}
      <div className="text-center mt-4">
        <p className="text-xs text-gray-600">
          Made with 💚 by ReZ • Save smarter, live better
        </p>
      </div>
    </div>
  );
};

export default FooterTrust;
