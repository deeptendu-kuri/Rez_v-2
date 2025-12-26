import { Link } from 'react-router-dom';

const ShopByExperience = () => {
  const experiences = [
    {
      id: 'sample-trial',
      title: 'Sample/Trial Store',
      subtitle: 'Try before you buy',
      icon: '🧪',
      color: 'from-blue-500/20 to-cyan-500/10',
      iconColor: 'text-blue-500',
      path: '/experience/sample-trial'
    },
    {
      id: '60-min-delivery',
      title: '60 Min Delivery',
      subtitle: 'Ultra-fast delivery',
      icon: '⚡',
      color: 'from-orange-500/20 to-red-500/10',
      iconColor: 'text-orange-500',
      path: '/experience/60-min-delivery'
    },
    {
      id: 'luxury',
      title: 'Luxury Store',
      subtitle: 'Premium brands',
      icon: '💎',
      color: 'from-purple-500/20 to-pink-500/10',
      iconColor: 'text-purple-500',
      path: '/experience/luxury'
    },
    {
      id: 'organic',
      title: 'Organic Store',
      subtitle: '100% natural',
      icon: '🌿',
      color: 'from-green-500/20 to-emerald-500/10',
      iconColor: 'text-green-500',
      path: '/experience/organic'
    },
    {
      id: 'men',
      title: 'Men Store',
      subtitle: 'For modern men',
      icon: '👔',
      color: 'from-gray-500/20 to-slate-500/10',
      iconColor: 'text-gray-600 dark:text-gray-400',
      path: '/experience/men'
    },
    {
      id: 'women',
      title: 'Women Store',
      subtitle: 'Curated for her',
      icon: '👗',
      color: 'from-pink-500/20 to-rose-500/10',
      iconColor: 'text-pink-500',
      path: '/experience/women'
    },
    {
      id: 'children',
      title: 'Children Store',
      subtitle: 'Kids essentials',
      icon: '🧸',
      color: 'from-yellow-500/20 to-amber-500/10',
      iconColor: 'text-yellow-600 dark:text-yellow-400',
      path: '/experience/children'
    },
    {
      id: 'rental',
      title: 'Rental Store',
      subtitle: 'Rent not buy',
      icon: '🔄',
      color: 'from-indigo-500/20 to-blue-500/10',
      iconColor: 'text-indigo-500',
      path: '/experience/rental'
    },
    {
      id: 'gifting',
      title: 'Gifting Store',
      subtitle: 'Perfect presents',
      icon: '🎁',
      color: 'from-red-500/20 to-pink-500/10',
      iconColor: 'text-red-500',
      path: '/experience/gifting'
    }
  ];

  return (
    <div className="px-4 mb-6">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h2 className="text-h3 font-poppins text-rez-navy dark:text-white">🛍️ Shop by Experience</h2>
          <p className="text-caption text-rez-gray-600 dark:text-gray-400">Curated shopping experiences</p>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-3">
        {experiences.map((exp) => (
          <Link
            key={exp.id}
            to={exp.path}
            className={`p-4 rounded-2xl bg-gradient-to-br ${exp.color} border border-white/20 dark:border-white/10 hover:border-white/40 dark:hover:border-white/30 transition-all active:scale-95`}
          >
            <div className="text-center">
              <div className={`text-4xl mb-2 ${exp.iconColor}`}>{exp.icon}</div>
              <h3 className="text-xs font-bold text-rez-navy dark:text-white mb-1">{exp.title}</h3>
              <p className="text-[10px] text-rez-gray-600 dark:text-gray-400">{exp.subtitle}</p>
            </div>
          </Link>
        ))}
      </div>

      <div className="mt-4 p-4 rounded-2xl bg-gradient-to-r from-rez-green-50 to-purple-50 dark:from-rez-green-500/10 dark:to-purple-500/10 border border-rez-green-200 dark:border-rez-green-500/20">
        <p className="text-xs text-center text-rez-navy dark:text-white">
          ✨ <span className="font-semibold">All experiences</span> come with ReZ cashback & coins
        </p>
      </div>
    </div>
  );
};

export default ShopByExperience;
