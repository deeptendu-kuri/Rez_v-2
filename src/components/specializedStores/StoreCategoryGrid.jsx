import { Link } from 'react-router-dom';
import { Coins } from 'lucide-react';

const StoreCategoryGrid = ({ categories, theme, storeType }) => {
  return (
    <div className="px-4">
      <div className="grid grid-cols-4 gap-3">
        {categories.map((category) => (
          <Link
            key={category.id}
            to={`/store/${storeType}/${category.id}`}
            className="flex flex-col items-center gap-1.5 p-3 rounded-xl bg-[#2C2C2E] active:scale-95 transition-transform"
          >
            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center"
              style={{ backgroundColor: `${theme.primary}20` }}
            >
              <span className="text-2xl">{category.icon}</span>
            </div>
            <span className="text-[10px] text-white text-center leading-tight">
              {category.name}
            </span>
            <div className="flex items-center gap-0.5">
              <Coins className="w-2.5 h-2.5" style={{ color: theme.primary }} />
              <span className="text-[9px]" style={{ color: theme.primary }}>{category.cashback}%</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default StoreCategoryGrid;
