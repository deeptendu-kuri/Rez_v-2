import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, TrendingUp, Star, Zap } from 'lucide-react';
import Header from '../../components/layout/Header';
import ModeSwitcher from '../../components/home/ModeSwitcher';
import BottomNavManager from '../../components/layout/BottomNavManager';

const CashStoreStores = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');

  // Mock stores data
  const stores = [
    { id: 1, name: 'Amazon', logo: '📦', category: 'Shopping', cashback: 'Earn up to 12% ReZ Coins', coupons: 145, trending: true },
    { id: 2, name: 'Flipkart', logo: '🛒', category: 'Shopping', cashback: 'Earn up to 15% ReZ Coins', coupons: 98, trending: true },
    { id: 3, name: 'Myntra', logo: '👗', category: 'Fashion', cashback: 'Earn up to 20% ReZ Coins', coupons: 67 },
    { id: 4, name: 'Swiggy', logo: '🍔', category: 'Food', cashback: 'Earn up to 10% ReZ Coins', coupons: 52 },
    { id: 5, name: 'Nykaa', logo: '💄', category: 'Beauty', cashback: 'Earn up to 18% ReZ Coins', coupons: 73 },
    { id: 6, name: 'MakeMyTrip', logo: '✈️', category: 'Travel', cashback: 'Earn up to 25% ReZ Coins', coupons: 89, trending: true },
  ];

  return (
    <div className="min-h-screen bg-rez-gray-50 dark:bg-dark-900 pb-20">
      <Header />
      <ModeSwitcher />

      {/* Page Header */}
      <div className="px-4 py-4">
        <h1 className="text-2xl font-bold text-rez-navy dark:text-white mb-2">All Online Stores</h1>
        <p className="text-sm text-rez-gray-600 dark:text-gray-400">1000+ brands with cashback as ReZ Coins</p>
      </div>

      {/* Search */}
      <div className="px-4 mb-6">
        <div className="flex items-center gap-3 px-4 py-3 rounded-2xl bg-white dark:bg-dark-800 border border-rez-gray-200 dark:border-dark-700">
          <Search className="w-5 h-5 text-rez-gray-600 dark:text-gray-400" />
          <input
            type="text"
            placeholder="Search stores..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="flex-1 bg-transparent text-rez-navy dark:text-white placeholder-rez-gray-500 dark:placeholder-gray-500 outline-none text-sm"
          />
        </div>
      </div>

      {/* Stores Grid */}
      <div className="px-4 mb-6">
        <div className="grid gap-3">
          {stores.map((store) => (
            <div
              key={store.id}
              onClick={() => navigate(`/cash-store/brand/${store.id}`)}
              className="p-4 rounded-2xl bg-white dark:bg-dark-800 border border-rez-gray-200 dark:border-dark-700 hover:border-emerald-500 dark:hover:border-emerald-500 transition-all cursor-pointer"
            >
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-500/20 to-emerald-600/20 flex items-center justify-center text-3xl">
                  {store.logo}
                </div>
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-1">
                    <div>
                      <h3 className="font-bold text-rez-navy dark:text-white">{store.name}</h3>
                      <p className="text-xs text-rez-gray-600 dark:text-gray-400">{store.category}</p>
                    </div>
                    {store.trending && (
                      <div className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-orange-500/10">
                        <TrendingUp className="w-3 h-3 text-orange-600 dark:text-orange-400" />
                        <span className="text-xs font-medium text-orange-600 dark:text-orange-400">Hot</span>
                      </div>
                    )}
                  </div>
                  <div className="flex items-center gap-1.5 mb-2">
                    <Zap className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                    <span className="text-sm font-semibold text-emerald-600 dark:text-emerald-400">{store.cashback}</span>
                  </div>
                  <p className="text-xs text-rez-gray-500 dark:text-gray-500">{store.coupons} coupons available</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <BottomNavManager />
    </div>
  );
};

export default CashStoreStores;
