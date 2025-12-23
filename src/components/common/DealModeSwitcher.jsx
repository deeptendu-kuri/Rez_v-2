import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Tag,
  Coins,
  Star,
  ChevronRight,
  MapPin,
  Zap,
  Gift,
  Users,
  Lock,
  Clock,
  Sparkles,
  CreditCard,
  Wallet,
  GraduationCap,
  Building2,
  Heart,
  Cake,
  Trophy,
  Shield,
} from 'lucide-react';

const DealModeSwitcher = ({ category = '', offers = [], cashbackStores = [], exclusiveOffers = [] }) => {
  const [activeTab, setActiveTab] = useState('offers');

  const tabs = [
    { id: 'offers', label: 'Offers', icon: Tag, color: 'bg-orange-500' },
    { id: 'cashback', label: 'Cashback', icon: Coins, color: 'bg-amber-500' },
    { id: 'exclusive', label: 'Exclusive', icon: Star, color: 'bg-purple-500' },
  ];

  const offerFilters = [
    { id: 'nearby', label: 'Nearby Offers', icon: MapPin },
    { id: 'today', label: "Today's Deals", icon: Clock },
    { id: 'bogo', label: 'BOGO', icon: Gift },
    { id: 'flat50', label: 'Flat 50%', icon: Tag },
    { id: 'free_delivery', label: 'Free Delivery', icon: Zap },
    { id: 'lightning', label: 'Lightning', icon: Zap },
    { id: 'last_chance', label: 'Last Chance', icon: Clock },
    { id: 'ai_recommended', label: 'For You', icon: Sparkles },
  ];

  const cashbackSections = [
    { id: 'super', label: 'Super Cashback', icon: Coins, desc: 'Up to 25% back' },
    { id: 'double', label: 'Double Day', icon: Zap, desc: '2x coins today' },
    { id: 'big_drops', label: 'Big Coin Drops', icon: Gift, desc: 'Limited time' },
    { id: 'bill_upload', label: 'Upload Bill', icon: CreditCard, desc: '+50 coins' },
    { id: 'bank_deals', label: 'Bank Offers', icon: Wallet, desc: 'Extra discount' },
  ];

  const exclusiveSections = [
    { id: 'student', label: 'Students', icon: GraduationCap, desc: 'Campus Zone', locked: false },
    { id: 'corporate', label: 'Employees', icon: Building2, desc: 'Corporate Perks', locked: false },
    { id: 'women', label: 'Women', icon: Heart, desc: 'Exclusive Deals', locked: false },
    { id: 'birthday', label: 'Birthday', icon: Cake, desc: 'Special Offers', locked: true },
    { id: 'loyalty', label: 'Loyalty', icon: Trophy, desc: 'Milestone Rewards', locked: false },
    { id: 'special', label: 'Army/Doctor', icon: Shield, desc: 'Verified Only', locked: true },
  ];

  return (
    <div className="mt-4">
      {/* Tab Switcher */}
      <div className="px-4 mb-4">
        <div className="flex gap-2 p-1 rounded-xl bg-rez-gray-50 dark:bg-white/5">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                  activeTab === tab.id
                    ? `${tab.color} text-white`
                    : 'text-rez-gray-600 dark:text-gray-400'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Offers Tab */}
      {activeTab === 'offers' && (
        <div className="px-4">
          {/* Sub-filters */}
          <div className="flex gap-2 overflow-x-auto hide-scrollbar pb-3">
            {offerFilters.map((filter) => {
              const Icon = filter.icon;
              return (
                <button
                  key={filter.id}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-rez-gray-100 dark:bg-white/10 text-rez-gray-600 dark:text-gray-400 text-sm shrink-0 hover:bg-white/20 transition-colors"
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span>{filter.label}</span>
                </button>
              );
            })}
          </div>

          {/* Offer Cards */}
          {offers.length > 0 ? (
            <div className="space-y-3 mt-3">
              {offers.slice(0, 5).map((offer, idx) => (
                <div key={idx} className="p-4 rounded-2xl bg-white dark:bg-[#2C2C2E] active:scale-[0.99] transition-transform">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <span className="text-2xl">{offer.icon || '🏷️'}</span>
                        <div>
                          <h3 className="font-medium text-rez-navy dark:text-white">{offer.title || offer.name}</h3>
                          <p className="text-xs text-rez-gray-600 dark:text-gray-400">{offer.store || offer.brand}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3 mt-2">
                        {offer.distance && (
                          <span className="text-xs text-rez-gray-600 dark:text-gray-500">{offer.distance}</span>
                        )}
                        {offer.validity && (
                          <span className="text-xs text-orange-400">{offer.validity}</span>
                        )}
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="text-lg font-bold text-emerald-400">
                        {offer.discount || offer.cashback}
                      </span>
                      {offer.savings && (
                        <p className="text-xs text-rez-gray-600 dark:text-gray-400">Save ₹{offer.savings}</p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-8">
              <span className="text-4xl">🏷️</span>
              <p className="text-rez-gray-600 dark:text-gray-400 mt-2">No offers available right now</p>
              <p className="text-xs text-rez-gray-600 dark:text-gray-500">Check back soon for amazing deals!</p>
            </div>
          )}

          <Link
            to={`/${category}/offers`}
            className="block mt-4 text-center text-sm text-emerald-400"
          >
            View All Offers →
          </Link>
        </div>
      )}

      {/* Cashback Tab */}
      {activeTab === 'cashback' && (
        <div className="px-4">
          {/* Cashback Sections */}
          <div className="grid grid-cols-2 gap-3">
            {cashbackSections.map((section) => {
              const Icon = section.icon;
              return (
                <button
                  key={section.id}
                  className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-left active:scale-[0.98] transition-transform"
                >
                  <Icon className="w-6 h-6 text-amber-400 mb-2" />
                  <h3 className="font-medium text-rez-navy dark:text-white text-sm">{section.label}</h3>
                  <p className="text-xs text-rez-gray-600 dark:text-gray-400 mt-0.5">{section.desc}</p>
                </button>
              );
            })}
          </div>

          {/* Cashback Stores */}
          {cashbackStores.length > 0 && (
            <div className="mt-4 space-y-3">
              <h3 className="font-semibold text-rez-navy dark:text-white">High Cashback Stores</h3>
              {cashbackStores.slice(0, 4).map((store, idx) => (
                <div key={idx} className="flex items-center justify-between p-3 rounded-xl bg-white dark:bg-[#2C2C2E]">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-rez-gray-100 dark:bg-white/10 flex items-center justify-center">
                      <span className="text-lg">{store.icon || '🏪'}</span>
                    </div>
                    <div>
                      <p className="font-medium text-rez-navy dark:text-white text-sm">{store.name}</p>
                      <p className="text-xs text-rez-gray-600 dark:text-gray-400">{store.category}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-sm font-bold text-amber-400">{store.cashback}%</span>
                    <p className="text-[10px] text-rez-gray-600 dark:text-gray-500">cashback</p>
                  </div>
                </div>
              ))}
            </div>
          )}

          <Link
            to={`/${category}/cashback`}
            className="block mt-4 text-center text-sm text-amber-400"
          >
            View All Cashback Stores →
          </Link>
        </div>
      )}

      {/* Exclusive Tab */}
      {activeTab === 'exclusive' && (
        <div className="px-4">
          {/* Exclusive Sections */}
          <div className="grid grid-cols-2 gap-3">
            {exclusiveSections.map((section) => {
              const Icon = section.icon;
              const linkMap = {
                student: '/exclusive/student-zone',
                corporate: '/exclusive/corporate-perks',
                women: '/exclusive/women-exclusive',
                birthday: '/exclusive/birthday-specials',
                loyalty: '/exclusive/loyalty-rewards',
                special: '/exclusive/special-profiles',
              };

              return (
                <Link
                  key={section.id}
                  to={linkMap[section.id]}
                  className={`p-4 rounded-2xl border text-left active:scale-[0.98] transition-transform relative ${
                    section.locked
                      ? 'bg-white/5 border-rez-gray-200 dark:border-white/10'
                      : 'bg-purple-500/10 border-purple-500/20'
                  }`}
                >
                  {section.locked && (
                    <div className="absolute top-2 right-2">
                      <Lock className="w-4 h-4 text-rez-gray-600 dark:text-gray-500" />
                    </div>
                  )}
                  <Icon className={`w-6 h-6 mb-2 ${section.locked ? 'text-rez-gray-600 dark:text-gray-500' : 'text-purple-400'}`} />
                  <h3 className={`font-medium text-sm ${section.locked ? 'text-rez-gray-600 dark:text-gray-400' : 'text-white'}`}>
                    {section.label}
                  </h3>
                  <p className="text-xs text-rez-gray-600 dark:text-gray-400 mt-0.5">{section.desc}</p>
                </Link>
              );
            })}
          </div>

          {/* Exclusive Offers */}
          {exclusiveOffers.length > 0 && (
            <div className="mt-4 space-y-3">
              <h3 className="font-semibold text-rez-navy dark:text-white">Your Exclusive Offers</h3>
              {exclusiveOffers.slice(0, 3).map((offer, idx) => (
                <div key={idx} className="p-4 rounded-2xl bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/20">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium text-rez-navy dark:text-white">{offer.title}</p>
                      <p className="text-xs text-rez-gray-600 dark:text-gray-400">{offer.description}</p>
                    </div>
                    <span className="text-lg font-bold text-purple-400">{offer.discount}</span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default DealModeSwitcher;
