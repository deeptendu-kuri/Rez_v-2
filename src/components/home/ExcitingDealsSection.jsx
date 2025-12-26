import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

const ExcitingDealsSection = () => {
  const dealCategories = [
    {
      id: 'super-cashback',
      title: 'Super Cashback Weekend',
      subtitle: 'Up to 50% cashback',
      badge: '50%',
      color: 'from-emerald-500/20 to-teal-500/10',
      deals: [
        { store: 'Electronics Hub', cashback: '40%', image: 'https://images.unsplash.com/photo-1498049794561-7780e7231661?w=300' },
        { store: 'Fashion Central', cashback: '50%', image: 'https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=300' },
        { store: 'Home Decor', cashback: '35%', image: 'https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?w=300' }
      ]
    },
    {
      id: 'triple-coin-day',
      title: 'Triple Coin Day',
      subtitle: '3X coins on all spends',
      badge: '3X',
      color: 'from-amber-500/20 to-orange-500/10',
      deals: [
        { store: 'Grocery Mart', coins: '3000', image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?w=300' },
        { store: 'Beauty Palace', coins: '2500', image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=300' },
        { store: 'Fitness Zone', coins: '1800', image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=300' }
      ]
    },
    {
      id: 'mega-bank-offers',
      title: 'Mega Bank Offers',
      subtitle: 'HDFC, ICICI, SBI, Axis',
      badge: 'BANKS',
      color: 'from-blue-500/20 to-indigo-500/10',
      deals: [
        { store: 'HDFC Exclusive', cashback: '₹5000 off', image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=300' },
        { store: 'ICICI Bonanza', cashback: '₹3000 off', image: 'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=300' },
        { store: 'SBI Specials', cashback: '20% cashback', image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=300' }
      ]
    },
    {
      id: 'upload-bill-bonanza',
      title: 'Upload Bill Bonanza',
      subtitle: 'Extra ₹100 on every bill',
      badge: '+₹100',
      color: 'from-purple-500/20 to-pink-500/10',
      deals: [
        { store: 'Any Restaurant', bonus: '+₹100 coins', image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=300' },
        { store: 'Any Salon', bonus: '+₹150 coins', image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=300' },
        { store: 'Any Store', bonus: '+₹100 coins', image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=300' }
      ]
    },
    {
      id: 'flash-coin-drops',
      title: 'Flash Coin Drops',
      subtitle: 'Limited time only',
      badge: 'LIVE',
      color: 'from-red-500/20 to-orange-500/10',
      deals: [
        { store: 'Nike Store', drop: '500 coins', endsIn: '2h', image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=300' },
        { store: 'Starbucks', drop: '300 coins', endsIn: '4h', image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=300' },
        { store: 'Zara', drop: '400 coins', endsIn: '6h', image: 'https://images.unsplash.com/photo-1445205170230-053b83016050?w=300' }
      ]
    },
    {
      id: 'new-user-bonanza',
      title: 'New User Bonanza',
      subtitle: 'First purchase rewards',
      badge: 'NEW',
      color: 'from-green-500/20 to-emerald-500/10',
      deals: [
        { store: 'First Order', bonus: '₹500 off', image: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=300' },
        { store: 'First Visit', bonus: '1000 coins', image: 'https://images.unsplash.com/photo-1555529902-5261145633bf?w=300' },
        { store: 'Sign Up Bonus', bonus: '₹300 cashback', image: 'https://images.unsplash.com/photo-1607082349566-187342175e2f?w=300' }
      ]
    }
  ];

  return (
    <div className="px-4 mb-6">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h2 className="text-h3 font-poppins text-rez-navy dark:text-white">💥 Exciting Deals</h2>
          <p className="text-caption text-rez-gray-600 dark:text-gray-400">Limited time only</p>
        </div>
        <Link to="/deal-store" className="text-button text-rez-green-500 dark:text-emerald-400 font-poppins">
          View All →
        </Link>
      </div>

      <div className="space-y-6">
        {dealCategories.map((category) => (
          <div key={category.id}>
            {/* Category Header */}
            <div className={`p-4 rounded-t-2xl bg-gradient-to-r ${category.color} border-b-2 border-white/30 dark:border-white/20`}>
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-base font-bold text-rez-navy dark:text-white mb-1">{category.title}</h3>
                  <p className="text-xs text-rez-gray-600 dark:text-gray-400">{category.subtitle}</p>
                </div>
                <span className="px-3 py-1.5 rounded-full bg-white/80 dark:bg-black/80 text-sm font-bold text-rez-navy dark:text-white">
                  {category.badge}
                </span>
              </div>
            </div>

            {/* Deals Horizontal Scroll */}
            <div className="flex gap-3 overflow-x-auto hide-scrollbar pb-3 pt-3 bg-rez-gray-50 dark:bg-white/5 rounded-b-2xl px-4">
              {category.deals.map((deal, idx) => (
                <Link
                  key={idx}
                  to="/deal-store"
                  className="flex-shrink-0 w-44 rounded-xl bg-white dark:bg-black border border-rez-gray-200 dark:border-white/10 hover:border-rez-green-500 dark:hover:border-emerald-500 transition-all active:scale-95 overflow-hidden"
                >
                  <div className="relative">
                    <img src={deal.image} alt={deal.store} className="w-full h-28 object-cover" />
                    {deal.endsIn && (
                      <div className="absolute top-2 right-2 px-2 py-1 rounded-full bg-red-500 text-white text-xs font-bold">
                        {deal.endsIn} left
                      </div>
                    )}
                  </div>
                  <div className="p-3">
                    <h4 className="text-xs font-bold text-rez-navy dark:text-white mb-1 line-clamp-1">{deal.store}</h4>
                    {deal.cashback && (
                      <p className="text-sm font-bold text-emerald-600 dark:text-emerald-400">{deal.cashback}</p>
                    )}
                    {deal.coins && (
                      <p className="text-sm font-bold text-amber-600 dark:text-amber-400">🪙 {deal.coins}</p>
                    )}
                    {deal.bonus && (
                      <p className="text-sm font-bold text-purple-600 dark:text-purple-400">{deal.bonus}</p>
                    )}
                    {deal.drop && (
                      <p className="text-sm font-bold text-red-600 dark:text-red-400">🎁 {deal.drop}</p>
                    )}
                  </div>
                </Link>
              ))}

              <Link
                to="/deal-store"
                className="flex-shrink-0 w-32 rounded-xl border-2 border-dashed border-rez-gray-300 dark:border-white/20 hover:border-rez-green-500 dark:hover:border-emerald-500 transition-all flex flex-col items-center justify-center gap-2"
              >
                <ChevronRight className="w-6 h-6 text-rez-gray-400 dark:text-gray-400" />
                <p className="text-xs font-semibold text-rez-gray-600 dark:text-gray-400">View All</p>
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* CTA Banner */}
      <div className="mt-6 p-6 rounded-2xl bg-gradient-to-r from-rez-green-500 to-rez-teal-500 text-center">
        <h3 className="text-lg font-bold text-rez-navy dark:text-white mb-2">🔥 Don't Miss Out!</h3>
        <p className="text-sm text-white/90 mb-4">New deals added every hour • Limited quantities</p>
        <Link
          to="/deal-store"
          className="inline-block px-6 py-3 rounded-full bg-white text-rez-navy font-bold hover:bg-gray-100 transition-colors"
        >
          Browse All Deals
        </Link>
      </div>
    </div>
  );
};

export default ExcitingDealsSection;
