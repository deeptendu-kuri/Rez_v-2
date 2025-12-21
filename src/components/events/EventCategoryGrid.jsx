import { ChevronRight } from 'lucide-react';

const CategoryCard = ({ category, onClick }) => (
  <button
    onClick={() => onClick?.(category.id)}
    className="flex flex-col items-center p-3 rounded-2xl bg-[#2C2C2E] hover:bg-[#3C3C3E] transition-colors"
  >
    <span className="text-3xl mb-2">{category.icon}</span>
    <span className="text-xs text-white text-center font-medium leading-tight">
      {category.label}
    </span>
    <div className="flex items-center gap-1 mt-1.5">
      <span className="text-[10px] text-emerald-400">{category.cashback}%</span>
      <span className="text-[10px] text-gray-500">•</span>
      <span className="text-[10px] text-gray-400">{category.nearbyCount}</span>
    </div>
  </button>
);

const EventCategoryGrid = ({ categories, onCategoryClick }) => {
  // Show first 8, then "More" button
  const visibleCategories = categories.slice(0, 8);
  const hasMore = categories.length > 8;

  return (
    <div className="px-4">
      <div className="grid grid-cols-4 gap-2">
        {visibleCategories.map((category) => (
          <CategoryCard
            key={category.id}
            category={category}
            onClick={onCategoryClick}
          />
        ))}
      </div>

      {hasMore && (
        <button className="w-full mt-3 py-2.5 rounded-xl bg-white/5 flex items-center justify-center gap-1 text-sm text-gray-400 hover:bg-white/10 transition-colors">
          View All Categories
          <ChevronRight className="w-4 h-4" />
        </button>
      )}
    </div>
  );
};

export default EventCategoryGrid;
