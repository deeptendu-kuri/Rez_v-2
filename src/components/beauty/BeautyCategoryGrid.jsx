import { Link } from 'react-router-dom';

const BeautyCategoryGrid = ({ categories, title, type = 'services' }) => {
  return (
    <div className="px-4">
      {title && <h2 className="font-semibold text-rez-navy dark:text-white mb-3">{title}</h2>}
      <div className="grid grid-cols-4 gap-3">
        {categories.map((category) => (
          <Link
            key={category.id}
            to={`/beauty/${type}/${category.id}`}
            className="flex flex-col items-center gap-1.5 p-3 rounded-2xl bg-white dark:bg-[#2C2C2E] active:scale-95 transition-transform"
          >
            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center"
              style={{ backgroundColor: `${category.color}20` }}
            >
              <span className="text-2xl">{category.icon}</span>
            </div>
            <span className="text-xs text-rez-navy dark:text-white text-center leading-tight">
              {category.name}
            </span>
            <span className="text-[10px] text-emerald-400">
              Up to {category.cashback}%
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default BeautyCategoryGrid;
