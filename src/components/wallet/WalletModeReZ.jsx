import { Link } from 'react-router-dom';
import {
  ArrowLeft,
  QrCode,
  Receipt,
  MapPin,
  Clock,
  Flame,
  TrendingUp,
  ArrowRight,
  Target,
  Award,
  Calendar
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useWallet } from '../../contexts/WalletContext';
import { formatRupees } from '../../utils/wallet';
import BottomNav from '../layout/BottomNav';

/**
 * WalletModeReZ Component
 * ReZ (Rewards Near You) Wallet Experience
 *
 * PURPOSE: Daily local savings, offline payments, habit creation
 * EMOTION: "You saved money today"
 * DESIGN: Red + White, Smart, fast, practical
 * TONE: Reinforces daily habit, offline-first, simple, no clutter
 */
const WalletModeReZ = () => {
  const navigate = useNavigate();
  const wallet = useWallet();

  // Calculate total savings for the month
  const totalSavedThisMonth = wallet.savingsStats.thisMonth;
  const totalRezCoins = wallet.rezCoinsData?.balance || wallet.rezCoins;
  const totalBrandedCoins = wallet.brandedCoins.reduce((sum, brand) => sum + brand.balance, 0);

  return (
    <div className="min-h-screen bg-white dark:bg-dark-900">
      {/* Header */}
      <div className="sticky top-0 z-40 bg-white dark:bg-dark-800 border-b border-rez-gray-200 dark:border-dark-700">
        <div className="flex items-center gap-3 px-4 py-4">
          <button
            onClick={() => navigate(-1)}
            className="p-2 hover:bg-rez-gray-100 dark:hover:bg-white/10 rounded-xl transition-colors"
          >
            <ArrowLeft className="w-5 h-5 text-rez-navy dark:text-white" />
          </button>
          <div className="flex-1">
            <h1 className="text-h4 font-poppins text-rez-navy dark:text-white">
              Wallet
            </h1>
          </div>
        </div>
      </div>

      {/* Top Section - Total Saved This Month */}
      <div className="px-4 py-6 bg-gradient-to-br from-red-500 to-orange-500 text-white">
        <div className="text-center">
          <p className="text-sm font-medium text-red-100 mb-2">
            ₹ Total Saved This Month
          </p>
          <h2 className="text-5xl font-bold font-poppins mb-2">
            {formatRupees(totalSavedThisMonth)}
          </h2>
          <p className="text-red-100 text-sm">
            "You saved money today"
          </p>
        </div>
      </div>

      <div className="p-4 space-y-4 pb-24">
        {/* Coins Snapshot - Horizontal Cards */}
        <div className="space-y-3">
          {/* ReZ Coin */}
          <div className="p-4 rounded-2xl bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-200 dark:border-emerald-500/20">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-emerald-500/20 flex items-center justify-center">
                  <span className="text-2xl">🪙</span>
                </div>
                <div>
                  <h3 className="text-body font-semibold text-rez-navy dark:text-white">
                    ReZ Coin
                  </h3>
                  <p className="text-caption text-rez-gray-600 dark:text-gray-400">
                    Use anywhere
                  </p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-h4 font-bold text-rez-navy dark:text-white">
                  {totalRezCoins}
                </p>
                <p className="text-caption text-rez-gray-600 dark:text-gray-400">
                  = {formatRupees(totalRezCoins)}
                </p>
              </div>
            </div>
          </div>

          {/* Branded Coin - Top 3 */}
          {wallet.brandedCoins.slice(0, 3).map((brand) => (
            <Link
              key={brand.brandId}
              to={`/store/${brand.brandId}`}
              className="block p-4 rounded-2xl bg-blue-50 dark:bg-blue-500/10 border border-blue-200 dark:border-blue-500/20 hover:bg-blue-100 dark:hover:bg-blue-500/20 transition-colors"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-white dark:bg-white/10 flex items-center justify-center border border-blue-200 dark:border-blue-500/30">
                    <span className="text-2xl">{brand.logo}</span>
                  </div>
                  <div>
                    <h3 className="text-body font-semibold text-rez-navy dark:text-white">
                      {brand.merchant} Coin
                    </h3>
                    <p className="text-caption text-rez-gray-600 dark:text-gray-400">
                      {brand.usableAt}
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-h4 font-bold text-rez-navy dark:text-white">
                    {brand.balance}
                  </p>
                </div>
              </div>
            </Link>
          ))}

          {/* Promo Coin - If exists */}
          {wallet.promoCoins.balance > 0 && (
            <div className="p-4 rounded-2xl bg-orange-50 dark:bg-orange-500/10 border-2 border-orange-300 dark:border-orange-500/30">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-orange-500/20 flex items-center justify-center">
                    <Flame className="w-6 h-6 text-orange-600 dark:text-orange-400" />
                  </div>
                  <div>
                    <h3 className="text-body font-semibold text-rez-navy dark:text-white">
                      Promo Coin
                    </h3>
                    <p className="text-caption text-orange-600 dark:text-orange-400 font-medium">
                      Expiring in {wallet.promoCoins.expiry}
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-h4 font-bold text-orange-600 dark:text-orange-400">
                    {wallet.promoCoins.balance}
                  </p>
                </div>
              </div>
              <div className="text-caption text-orange-700 dark:text-orange-300 bg-orange-100 dark:bg-orange-500/20 p-2 rounded-lg">
                ⚠️ {wallet.promoCoins.maxRedemption} • {wallet.promoCoins.campaign}
              </div>
            </div>
          )}
        </div>

        {/* Primary CTA */}
        <Link
          to="/pay-in-store"
          className="w-full flex items-center justify-center gap-3 py-4 rounded-2xl bg-emerald-500 hover:bg-emerald-600 text-white font-semibold transition-all shadow-lg"
        >
          <QrCode className="w-6 h-6" />
          Pay with ReZ
        </Link>

        {/* Quick Actions */}
        <div className="grid grid-cols-4 gap-3">
          <Link
            to="/pay-in-store"
            className="flex flex-col items-center gap-2 p-3 rounded-xl bg-rez-gray-50 dark:bg-white/5 hover:bg-rez-gray-100 dark:hover:bg-white/10 transition-colors"
          >
            <div className="w-12 h-12 rounded-xl bg-red-500/10 flex items-center justify-center">
              <QrCode className="w-6 h-6 text-red-600 dark:text-red-400" />
            </div>
            <span className="text-caption text-rez-navy dark:text-white font-medium text-center">
              Scan & Pay
            </span>
          </Link>

          <Link
            to="/upload-bill"
            className="flex flex-col items-center gap-2 p-3 rounded-xl bg-rez-gray-50 dark:bg-white/5 hover:bg-rez-gray-100 dark:hover:bg-white/10 transition-colors"
          >
            <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center">
              <Receipt className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            </div>
            <span className="text-caption text-rez-navy dark:text-white font-medium text-center">
              Upload Bill
            </span>
          </Link>

          <Link
            to="/lock-price"
            className="flex flex-col items-center gap-2 p-3 rounded-xl bg-rez-gray-50 dark:bg-white/5 hover:bg-rez-gray-100 dark:hover:bg-white/10 transition-colors"
          >
            <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center">
              <Clock className="w-6 h-6 text-purple-600 dark:text-purple-400" />
            </div>
            <span className="text-caption text-rez-navy dark:text-white font-medium text-center">
              Lock Price
            </span>
          </Link>

          <Link
            to="/explore/map"
            className="flex flex-col items-center gap-2 p-3 rounded-xl bg-rez-gray-50 dark:bg-white/5 hover:bg-rez-gray-100 dark:hover:bg-white/10 transition-colors"
          >
            <div className="w-12 h-12 rounded-xl bg-orange-500/10 flex items-center justify-center">
              <MapPin className="w-6 h-6 text-orange-600 dark:text-orange-400" />
            </div>
            <span className="text-caption text-rez-navy dark:text-white font-medium text-center">
              Nearby
            </span>
          </Link>
        </div>

        {/* Savings Timeline */}
        <div className="p-4 rounded-2xl bg-white dark:bg-dark-800 border border-rez-gray-200 dark:border-dark-700">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-body font-semibold text-rez-navy dark:text-white">
              Recent Savings
            </h3>
            <Link
              to="/wallet/transactions"
              className="text-caption text-blue-600 dark:text-blue-400 font-medium flex items-center gap-1"
            >
              See All
              <ArrowRight className="w-3 h-3" />
            </Link>
          </div>

          <div className="space-y-3">
            {wallet.transactions.slice(0, 3).filter(t => t.type === 'earned').map((transaction) => (
              <div key={transaction.id} className="flex items-center justify-between p-3 rounded-xl bg-rez-gray-50 dark:bg-white/5">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{transaction.storeIcon}</span>
                  <div>
                    <p className="text-body-sm font-medium text-rez-navy dark:text-white">
                      {transaction.store}
                    </p>
                    <p className="text-caption text-rez-gray-600 dark:text-gray-400">
                      {transaction.description}
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-body-sm font-bold text-emerald-600 dark:text-emerald-400">
                    +₹{transaction.amount}
                  </p>
                  <p className="text-caption text-rez-gray-600 dark:text-gray-400">
                    {transaction.date}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Expiring Soon */}
        {wallet.promoCoins.balance > 0 && (
          <div className="p-4 rounded-2xl bg-orange-50 dark:bg-orange-500/10 border border-orange-200 dark:border-orange-500/20">
            <div className="flex items-center gap-2 mb-3">
              <Flame className="w-5 h-5 text-orange-600 dark:text-orange-400" />
              <h3 className="text-body font-semibold text-orange-900 dark:text-orange-300">
                Expiring Soon
              </h3>
            </div>
            <div className="space-y-2">
              <div className="p-3 rounded-xl bg-white dark:bg-orange-500/10">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-body-sm font-medium text-rez-navy dark:text-white">
                      {wallet.promoCoins.campaign} Promo
                    </p>
                    <p className="text-caption text-orange-600 dark:text-orange-400">
                      {wallet.promoCoins.balance} coins • {wallet.promoCoins.expiry}
                    </p>
                  </div>
                  <Clock className="w-5 h-5 text-orange-500" />
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Daily Habit Card */}
        <div className="p-4 rounded-2xl bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-500/10 dark:to-pink-500/10 border border-purple-200 dark:border-purple-500/20">
          <div className="flex items-center gap-2 mb-3">
            <Target className="w-5 h-5 text-purple-600 dark:text-purple-400" />
            <h3 className="text-body font-semibold text-rez-navy dark:text-white">
              🎯 Today's Smart Save Task
            </h3>
          </div>
          <div className="p-3 rounded-xl bg-white dark:bg-white/10 mb-3">
            <p className="text-body-sm text-rez-navy dark:text-white font-medium mb-1">
              Pay at any store via ReZ
            </p>
            <p className="text-caption text-rez-gray-600 dark:text-gray-400">
              Earn 20 bonus coins today
            </p>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Award className="w-4 h-4 text-purple-600 dark:text-purple-400" />
              <span className="text-caption text-purple-700 dark:text-purple-300 font-medium">
                2/7 days streak
              </span>
            </div>
            <Link
              to="/pay-in-store"
              className="px-4 py-2 rounded-lg bg-purple-600 hover:bg-purple-700 text-white text-caption font-semibold transition-colors"
            >
              Complete Now
            </Link>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-3">
          <div className="p-4 rounded-2xl bg-white dark:bg-dark-800 border border-rez-gray-200 dark:border-dark-700">
            <div className="flex items-center gap-2 mb-2">
              <TrendingUp className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
              <p className="text-caption text-rez-gray-600 dark:text-gray-400">
                Lifetime Saved
              </p>
            </div>
            <p className="text-h4 font-bold text-rez-navy dark:text-white">
              {formatRupees(wallet.savingsStats.totalSaved)}
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-white dark:bg-dark-800 border border-rez-gray-200 dark:border-dark-700">
            <div className="flex items-center gap-2 mb-2">
              <Calendar className="w-4 h-4 text-blue-600 dark:text-blue-400" />
              <p className="text-caption text-rez-gray-600 dark:text-gray-400">
                Avg Per Visit
              </p>
            </div>
            <p className="text-h4 font-bold text-rez-navy dark:text-white">
              {formatRupees(wallet.savingsStats.avgPerVisit)}
            </p>
          </div>
        </div>
      </div>

      <BottomNav />
    </div>
  );
};

export default WalletModeReZ;
