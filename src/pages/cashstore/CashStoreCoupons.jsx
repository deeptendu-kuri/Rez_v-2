import { useState } from 'react';
import { Search, Copy, Check, Gift, Percent } from 'lucide-react';
import Header from '../../components/layout/Header';
import ModeSwitcher from '../../components/home/ModeSwitcher';
import BottomNavManager from '../../components/layout/BottomNavManager';

const CashStoreCoupons = () => {
  const [copiedCode, setCopiedCode] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  // Mock coupons data
  const coupons = [
    { id: 1, brand: 'Amazon', code: 'SAVE100', discount: '₹100 OFF', minOrder: '₹999', expires: '31 Dec', logo: '📦' },
    { id: 2, brand: 'Flipkart', code: 'FASHION20', discount: '20% OFF', minOrder: '₹1499', expires: '30 Dec', logo: '🛒' },
    { id: 3, brand: 'Myntra', code: 'STYLE15', discount: '15% OFF', minOrder: '₹1999', expires: '28 Dec', logo: '👗' },
    { id: 4, brand: 'Swiggy', code: 'FOOD50', discount: '₹50 OFF', minOrder: '₹299', expires: '27 Dec', logo: '🍔' },
    { id: 5, brand: 'Nykaa', code: 'BEAUTY10', discount: '10% OFF', minOrder: '₹1299', expires: '29 Dec', logo: '💄' },
    { id: 6, brand: 'MakeMyTrip', code: 'TRAVEL500', discount: '₹500 OFF', minOrder: '₹4999', expires: '31 Dec', logo: '✈️' },
  ];

  const copyCoupon = (code) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(code);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  return (
    <div className="min-h-screen bg-rez-gray-50 dark:bg-dark-900 pb-20">
      <Header />
      <ModeSwitcher />

      {/* Page Header */}
      <div className="px-4 py-4">
        <h1 className="text-2xl font-bold text-rez-navy dark:text-white mb-2 flex items-center gap-2">
          <Percent className="w-7 h-7 text-emerald-600 dark:text-emerald-400" />
          Coupons & Gift Cards
        </h1>
        <p className="text-sm text-rez-gray-600 dark:text-gray-400">Save more with exclusive coupon codes</p>
      </div>

      {/* Search */}
      <div className="px-4 mb-6">
        <div className="flex items-center gap-3 px-4 py-3 rounded-2xl bg-white dark:bg-dark-800 border border-rez-gray-200 dark:border-dark-700">
          <Search className="w-5 h-5 text-rez-gray-600 dark:text-gray-400" />
          <input
            type="text"
            placeholder="Search coupons by brand..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="flex-1 bg-transparent text-rez-navy dark:text-white placeholder-rez-gray-500 dark:placeholder-gray-500 outline-none text-sm"
          />
        </div>
      </div>

      {/* Info Banner */}
      <div className="px-4 mb-6">
        <div className="p-4 rounded-2xl bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800">
          <div className="flex items-start gap-3">
            <Gift className="w-5 h-5 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-sm font-semibold text-blue-900 dark:text-blue-300 mb-1">
                Stack Coupons + Earn ReZ Coins
              </p>
              <p className="text-xs text-blue-800 dark:text-blue-400">
                Use these coupons for instant savings. You'll still earn ReZ Coins on your purchase!
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Coupons List */}
      <div className="px-4 mb-6">
        <div className="space-y-3">
          {coupons.map((coupon) => (
            <div
              key={coupon.id}
              className="p-4 rounded-2xl bg-white dark:bg-dark-800 border border-dashed border-rez-gray-300 dark:border-dark-700"
            >
              <div className="flex items-start gap-3 mb-3">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500/20 to-emerald-600/20 flex items-center justify-center text-2xl flex-shrink-0">
                  {coupon.logo}
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-bold text-rez-navy dark:text-white mb-1">{coupon.brand}</h3>
                  <p className="text-sm font-semibold text-emerald-600 dark:text-emerald-400 mb-1">{coupon.discount}</p>
                  <p className="text-xs text-rez-gray-500 dark:text-gray-500">
                    On orders {coupon.minOrder}+ • Expires {coupon.expires}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <code className="flex-1 px-3 py-2 rounded-xl bg-rez-gray-100 dark:bg-dark-700 text-sm font-mono font-bold text-rez-navy dark:text-white text-center">
                  {coupon.code}
                </code>
                <button
                  onClick={() => copyCoupon(coupon.code)}
                  className="px-4 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-medium transition-colors flex items-center gap-2"
                >
                  {copiedCode === coupon.code ? (
                    <>
                      <Check className="w-4 h-4" />
                      Copied!
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" />
                      Copy
                    </>
                  )}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <BottomNavManager />
    </div>
  );
};

export default CashStoreCoupons;
