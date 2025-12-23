import { Store, Truck, Globe, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';

const compareItems = [
  {
    id: 1,
    product: 'Nike Air Max 90',
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=200',
    options: [
      { platform: 'Store Nearby', icon: Store, price: 6999, cashback: '10%', delivery: 'Pickup', isBest: false },
      { platform: 'ReZ Mall', icon: Truck, price: 7199, cashback: '15%', delivery: '60 min', isBest: true },
      { platform: 'Brand Website', icon: Globe, price: 7499, cashback: 'None', delivery: '3 days', isBest: false },
    ]
  },
];

const CompareDecide = () => {
  return (
    <div className="px-4 py-4">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h2 className="text-h3 font-poppins text-rez-navy dark:text-white">
            Compare & Decide
          </h2>
          <p className="text-xs text-rez-gray-600 dark:text-gray-400 mt-1">
            Same product, best deal
          </p>
        </div>
        <Link to="/explore/compare-smart-find" className="text-sm font-medium text-rez-green-500">
          Compare More
        </Link>
      </div>

      {compareItems.map((item) => (
        <div
          key={item.id}
          className="bg-white dark:bg-white/10 border border-rez-gray-200 dark:border-white/10 rounded-2xl overflow-hidden shadow-sm dark:shadow-none"
        >
          {/* Product Header */}
          <div className="p-4 border-b border-rez-gray-200 dark:border-white/10 flex items-center gap-3">
            <img
              src={item.image}
              alt={item.product}
              className="w-16 h-16 rounded-xl object-cover"
            />
            <div>
              <h3 className="font-semibold text-rez-navy dark:text-white">{item.product}</h3>
              <p className="text-xs text-rez-gray-600 dark:text-gray-400 mt-0.5">
                3 options available
              </p>
            </div>
          </div>

          {/* Comparison Table */}
          <div className="p-3 space-y-2">
            {item.options.map((option, index) => {
              const Icon = option.icon;
              return (
                <div
                  key={index}
                  className={`p-3 rounded-xl flex items-center justify-between ${
                    option.isBest
                      ? 'bg-emerald-500/10 border-2 border-emerald-500'
                      : 'bg-rez-gray-50 dark:bg-white/5'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <Icon className="w-4 h-4 text-rez-gray-600 dark:text-gray-400" />
                    <div>
                      <p className="text-sm font-medium text-rez-navy dark:text-white">
                        {option.platform}
                      </p>
                      <p className="text-xs text-rez-gray-600 dark:text-gray-400">
                        {option.delivery}
                      </p>
                    </div>
                  </div>

                  <div className="text-right">
                    <p className="text-sm font-bold text-rez-navy dark:text-white">
                      ₹{option.price.toLocaleString()}
                    </p>
                    <p className={`text-xs font-semibold ${
                      option.cashback === 'None'
                        ? 'text-rez-gray-500 dark:text-gray-500'
                        : 'text-emerald-500'
                    }`}>
                      {option.cashback === 'None' ? 'No cashback' : `${option.cashback} back`}
                    </p>
                  </div>

                  {option.isBest && (
                    <div className="absolute -top-1 right-2 px-2 py-0.5 bg-emerald-500 rounded-full">
                      <span className="text-[10px] font-bold text-white flex items-center gap-1">
                        <TrendingUp className="w-3 h-3" />
                        Best Value
                      </span>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* CTA */}
          <div className="p-3 pt-0">
            <button className="w-full py-3 rounded-xl bg-rez-green-500 hover:bg-rez-green-600 active:bg-rez-green-700 text-white font-semibold transition-colors">
              View All Options
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CompareDecide;
