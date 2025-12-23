import { useApp } from '../contexts/AppContext';
import { Link } from 'react-router-dom';
import HomeHeader from '../components/home/HomeHeader';
import ModeSwitcher from '../components/home/ModeSwitcher';
import SearchSuperDeals from '../components/home/SearchSuperDeals';
import HomeQuickActions from '../components/home/HomeQuickActions';
import HomeCategoryGrid from '../components/home/HomeCategoryGrid';
import HowRezWorks from '../components/home/HowRezWorks';
import DealStorePreview from '../components/home/DealStorePreview';
import WalletPreview from '../components/home/WalletPreview';
import StoreDiscovery from '../components/home/StoreDiscovery';
import HomeReels from '../components/home/HomeReels';
import StreaksGamification from '../components/home/StreaksGamification';
import LiveActivityFeed from '../components/home/LiveActivityFeed';
import FloatingScanButton from '../components/home/FloatingScanButton';

const Home = () => {
  const { globalMode, filters, vibe } = useApp();

  return (
    <div className="min-h-screen bg-white dark:bg-black pb-24 transition-colors">
      {/* 1️⃣ HEADER (Sticky) */}
      <HomeHeader />

      {/* 2️⃣ MODE SWITCHER */}
      <ModeSwitcher />

      {/* 3️⃣ SEARCH + SUPER DEALS BAR */}
      <SearchSuperDeals />

      {/* 4️⃣ QUICK ACTIONS */}
      <HomeQuickActions />

      {/* 💳 PAY IN STORE - HERO CTA */}
      <div className="px-4 mb-6">
        <Link
          to="/pay-in-store"
          className="block p-6 rounded-rez-2xl bg-gradient-to-r from-rez-green-500 via-rez-teal-500 to-rez-gold relative overflow-hidden shadow-rez-green"
        >
          <div className="relative z-10">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-3">
                <div className="w-14 h-14 rounded-rez-lg bg-white/20 backdrop-blur-sm flex items-center justify-center">
                  <span className="text-3xl">💳</span>
                </div>
                <div>
                  <h3 className="text-h3 font-poppins text-rez-navy dark:text-white">Pay in Store</h3>
                  <p className="text-body-sm text-white/90">Scan QR & earn instant rewards</p>
                </div>
              </div>
              <span className="text-rez-navy dark:text-white text-2xl">→</span>
            </div>

            <div className="grid grid-cols-3 gap-2">
              <div className="p-2 rounded-lg bg-white/20 backdrop-blur-sm text-center">
                <p className="text-xl font-bold text-rez-navy dark:text-white">10%</p>
                <p className="text-[10px] text-white/80">Cashback</p>
              </div>
              <div className="p-2 rounded-lg bg-white/20 backdrop-blur-sm text-center">
                <p className="text-xl font-bold text-rez-navy dark:text-white">🪙</p>
                <p className="text-[10px] text-white/80">Earn Coins</p>
              </div>
              <div className="p-2 rounded-lg bg-white/20 backdrop-blur-sm text-center">
                <p className="text-xl font-bold text-rez-navy dark:text-white">⚡</p>
                <p className="text-[10px] text-white/80">Instant</p>
              </div>
            </div>
          </div>

          {/* Animated background pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-white rounded-full blur-3xl animate-pulse animation-delay-1000" />
          </div>
        </Link>
      </div>

      {/* 💡 HOW ReZ WORKS - ENTRY POINT */}
      <div className="px-4 mb-6">
        <Link
          to="/how-rez-works"
          className="block p-5 rounded-rez-lg bg-gradient-to-r from-blue-500/20 to-purple-500/20 dark:from-blue-500/20 dark:to-purple-500/20 border border-blue-500/30 dark:border-blue-500/30 hover:border-blue-500/50 dark:hover:border-blue-500/50 transition-all group"
        >
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-rez-lg bg-blue-500/30 dark:bg-blue-500/30 flex items-center justify-center group-hover:scale-110 transition-transform">
              <span className="text-3xl">💡</span>
            </div>
            <div className="flex-1">
              <h3 className="text-h4 font-poppins text-rez-navy dark:text-white mb-1">New to ReZ? See how it works</h3>
              <p className="text-caption text-rez-gray-600 dark:text-gray-400">Save money on things you already buy — online & offline</p>
            </div>
            <span className="text-blue-400 dark:text-blue-400 text-xl group-hover:translate-x-1 transition-transform">→</span>
          </div>
        </Link>
      </div>

      {/* 5️⃣ CATEGORY GRID */}
      <HomeCategoryGrid />

      {/* 🗂️ VIEW ALL CATEGORIES */}
      <div className="px-4 mb-6">
        <Link
          to="/categories"
          className="block p-4 rounded-rez-lg bg-gradient-to-r from-blue-500/20 to-purple-500/20 dark:from-blue-500/20 dark:to-purple-500/20 border border-blue-500/30 dark:border-blue-500/30"
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-rez-md bg-blue-500/30 dark:bg-blue-500/30 flex items-center justify-center">
                <span className="text-2xl">🗂️</span>
              </div>
              <div>
                <h3 className="text-h4 font-poppins text-rez-navy dark:text-white">View All Categories</h3>
                <p className="text-caption text-rez-gray-600 dark:text-gray-400">Explore everything ReZ offers</p>
              </div>
            </div>
            <span className="text-blue-400 dark:text-blue-400 text-button font-poppins">Browse →</span>
          </div>
        </Link>
      </div>

      {/* 6️⃣ HOW ReZ WORKS */}
      <HowRezWorks />

      {/* 7️⃣ DEAL STORE PREVIEW */}
      <DealStorePreview />

      {/* 8️⃣ ReZ WALLET PREVIEW */}
      <WalletPreview />

      {/* 🏆 LOYALTY & REWARDS HUB */}
      <div className="px-4 mb-6">
        <Link
          to="/loyalty-rewards"
          className="block p-6 rounded-rez-2xl bg-gradient-to-r from-rez-green-500/20 via-rez-gold/20 to-purple-500/20 dark:from-emerald-500/20 dark:via-amber-500/20 dark:to-purple-500/20 border border-rez-green-500/30 dark:border-emerald-500/30"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-14 h-14 rounded-rez-lg bg-gradient-to-br from-rez-green-500/30 to-rez-gold/30 dark:from-emerald-500/30 dark:to-amber-500/30 flex items-center justify-center">
              <span className="text-3xl">🏆</span>
            </div>
            <div className="flex-1">
              <h3 className="text-h4 font-poppins text-rez-navy dark:text-white">Loyalty & Rewards Hub</h3>
              <p className="text-body-sm text-rez-gray-600 dark:text-gray-400">Your progress with every brand</p>
            </div>
            <span className="text-rez-green-500 dark:text-emerald-400 text-button font-poppins">View →</span>
          </div>

          <div className="grid grid-cols-4 gap-2">
            <div className="p-3 rounded-rez-md bg-rez-gray-100 dark:bg-white/10 text-center">
              <p className="text-h3 font-poppins text-rez-navy dark:text-white">7</p>
              <p className="text-caption text-rez-gray-600 dark:text-gray-400 mt-1">Active Brands</p>
            </div>
            <div className="p-3 rounded-rez-md bg-rez-gray-100 dark:bg-white/10 text-center">
              <p className="text-h3 font-poppins text-rez-warning dark:text-orange-400">4</p>
              <p className="text-caption text-rez-gray-600 dark:text-gray-400 mt-1">Streaks</p>
            </div>
            <div className="p-3 rounded-rez-md bg-rez-gray-100 dark:bg-white/10 text-center">
              <p className="text-h3 font-poppins text-rez-gold dark:text-amber-400">12</p>
              <p className="text-caption text-rez-gray-600 dark:text-gray-400 mt-1">Unlocked</p>
            </div>
            <div className="p-3 rounded-rez-md bg-rez-gray-100 dark:bg-white/10 text-center">
              <p className="text-h3 font-poppins text-purple-500 dark:text-purple-400">3</p>
              <p className="text-caption text-rez-gray-600 dark:text-gray-400 mt-1">Tiers</p>
            </div>
          </div>
        </Link>
      </div>

      {/* 🔥 DEMO: NEW FEATURES */}
      <div className="px-4 mb-6 space-y-3">
        <Link
          to="/product/sony-headphones"
          className="block p-6 rounded-rez-2xl bg-gradient-to-br from-purple-500/20 to-blue-600/10 dark:from-purple-500/20 dark:to-blue-600/10 border border-purple-500/30 dark:border-purple-500/30"
        >
          <div className="flex items-center gap-3 mb-3">
            <span className="text-3xl">🎧</span>
            <div>
              <p className="text-h4 font-poppins text-rez-navy dark:text-white">🔥 Try Lock Product Feature</p>
              <p className="text-body-sm text-rez-gray-700 dark:text-gray-300">Lock price, visit store or get delivered</p>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-caption text-rez-gray-600 dark:text-gray-400 mb-1">Sony WH-1000XM5</p>
              <p className="text-rez-green-500 dark:text-emerald-400 text-button font-poppins">Save ₹5,000 + Earn 2,499 coins</p>
            </div>
            <span className="text-button text-purple-500 dark:text-purple-400 font-poppins">Try Now →</span>
          </div>
        </Link>

        <Link
          to="/booking/hair-spa"
          className="block p-6 rounded-rez-2xl bg-gradient-to-br from-pink-500/20 to-purple-600/10 dark:from-pink-500/20 dark:to-purple-600/10 border border-pink-500/30 dark:border-pink-500/30"
        >
          <div className="flex items-center gap-3 mb-3">
            <span className="text-3xl">💇‍♀️</span>
            <div>
              <p className="text-h4 font-poppins text-rez-navy dark:text-white">✨ Try Service Booking</p>
              <p className="text-body-sm text-rez-gray-700 dark:text-gray-300">Choose date, time & professional</p>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-caption text-rez-gray-600 dark:text-gray-400 mb-1">Hair Spa (Keratin Treatment)</p>
              <p className="text-rez-green-500 dark:text-emerald-400 text-button font-poppins">Save ₹1,000 + Earn 250 coins</p>
            </div>
            <span className="text-button text-pink-500 dark:text-pink-400 font-poppins">Book Now →</span>
          </div>
        </Link>
      </div>

      {/* 9️⃣ STORE & DISCOVERY SECTIONS */}
      <StoreDiscovery />

      {/* 🔟 UGC / SOCIAL PROOF */}
      <HomeReels />

      {/* 1️⃣1️⃣ STREAKS & GAMIFICATION */}
      <StreaksGamification />

      {/* 1️⃣2️⃣ PEOPLE NEAR YOU ARE EARNING */}
      <LiveActivityFeed />

      {/* Vibe-based indicator */}
      {vibe && (
        <div className="mx-4 mb-4 p-4 rounded-rez-lg bg-purple-500/10 dark:bg-purple-500/10 border border-purple-500/20 dark:border-purple-500/20">
          <p className="text-body-sm text-purple-600 dark:text-purple-300">
            ✨ Showing picks that match your <strong>{vibe}</strong> vibe
          </p>
        </div>
      )}

      {/* Mode-specific filters indicator */}
      {(filters.halal || filters.vegan || filters.vegetarian) && (
        <div className="mx-4 mb-4 p-3 rounded-rez-md bg-rez-green-500/10 dark:bg-emerald-500/10 border border-rez-green-500/20 dark:border-emerald-500/20">
          <p className="text-caption text-rez-green-700 dark:text-emerald-300">
            🌿 Filtering for:
            {filters.halal && ' Halal'}
            {filters.vegan && ' Vegan'}
            {filters.vegetarian && ' Vegetarian'}
          </p>
        </div>
      )}

      {/* 1️⃣3️⃣ FLOATING CTA */}
      <FloatingScanButton />
    </div>
  );
};

export default Home;
