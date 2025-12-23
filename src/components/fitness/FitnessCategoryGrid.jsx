import { Link } from 'react-router-dom';
import { Coins } from 'lucide-react';

const FitnessCategoryGrid = ({ categories }) => {
  return (
    <div className="px-4">
      <div className="grid grid-cols-5 gap-3">
        {categories.map((category) => (
          <Link
            key={category.id}
            to={`/fitness/${category.id}`}
            className="flex flex-col items-center gap-1.5 active:scale-95 transition-transform"
          >
            <div
              className="w-14 h-14 rounded-2xl flex items-center justify-center"
              style={{ backgroundColor: `${category.color}20` }}
            >
              <span className="text-2xl">{category.icon}</span>
            </div>
            <span className="text-[10px] text-rez-gray-700 dark:text-gray-300 text-center leading-tight line-clamp-2">
              {category.name}
            </span>
            <div className="flex items-center gap-0.5">
              <Coins className="w-2.5 h-2.5 text-amber-400" />
              <span className="text-[9px] text-amber-400">{category.cashback}%</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default FitnessCategoryGrid;
