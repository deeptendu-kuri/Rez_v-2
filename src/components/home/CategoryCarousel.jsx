import { Link } from 'react-router-dom';
import { categories, iconMap } from '../../data/categories';

// Map category names to routes
const categoryRoutes = {
  'Food & Dining': '/food',
  'Grocery & Essentials': '/grocery',
  'Fashion': '/fashion',
  'Electronics': '/electronics',
  'Beauty & Wellness': '/beauty',
  'Healthcare': '/healthcare',
  'Fitness & Sports': '/fitness',
  'Home Services': '/home-services',
  'Financial Lifestyle': '/financial',
  'Events & Entertainment': '/events',
  'Travel': '/travel',
  'Flea Market': '/flea-market',
  'Deals Store': '/deal-store',
  'Sample Store': '/explore?category=samples',
  'Luxury Store': '/explore?category=luxury',
  'Organic Store': '/explore?category=organic',
  '60-Min Delivery': '/explore?delivery=fast',
};

const CategoryCarousel = () => {
  return (
    <section className="py-4">
      <div className="px-4 mb-3">
        <h2 className="text-lg font-semibold text-rez-navy dark:text-white">Explore Categories</h2>
        <p className="text-sm text-rez-gray-600 dark:text-gray-400">Earn rewards in every category</p>
      </div>

      <div className="flex gap-3 px-4 overflow-x-auto hide-scrollbar pb-2">
        {categories.slice(0, 10).map((category) => {
          const IconComponent = iconMap[category.icon];
          const route = categoryRoutes[category.name] || '/explore';

          return (
            <Link
              to={route}
              key={category.id}
              className="flex flex-col items-center gap-2 min-w-[72px] group"
            >
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center transition-transform group-active:scale-95"
                style={{ backgroundColor: `${category.color}20` }}
              >
                {IconComponent && (
                  <IconComponent
                    className="w-6 h-6"
                    style={{ color: category.color }}
                  />
                )}
              </div>
              <span className="text-xs text-rez-gray-700 dark:text-gray-300 text-center leading-tight">
                {category.name.split(' ')[0]}
              </span>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default CategoryCarousel;
