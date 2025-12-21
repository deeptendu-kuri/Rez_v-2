import { Link } from 'react-router-dom';

const foodCategories = [
  { id: 'biryani', name: 'Biryani', icon: '🍚', color: '#F59E0B', count: 45 },
  { id: 'pizza', name: 'Pizza', icon: '🍕', color: '#EF4444', count: 32 },
  { id: 'burger', name: 'Burgers', icon: '🍔', color: '#F97316', count: 28 },
  { id: 'chinese', name: 'Chinese', icon: '🥡', color: '#EC4899', count: 38 },
  { id: 'south-indian', name: 'South Indian', icon: '🥘', color: '#10B981', count: 52 },
  { id: 'north-indian', name: 'North Indian', icon: '🍛', color: '#8B5CF6', count: 48 },
  { id: 'desserts', name: 'Desserts', icon: '🍰', color: '#F472B6', count: 35 },
  { id: 'cafe', name: 'Café', icon: '☕', color: '#A78BFA', count: 42 },
  { id: 'healthy', name: 'Healthy', icon: '🥗', color: '#22C55E', count: 25 },
  { id: 'street-food', name: 'Street Food', icon: '🌮', color: '#FBBF24', count: 30 },
  { id: 'thali', name: 'Thali', icon: '🍱', color: '#14B8A6', count: 22 },
  { id: 'ice-cream', name: 'Ice Cream', icon: '🍨', color: '#60A5FA', count: 18 },
];

const FoodCategoryGrid = ({ onCategorySelect }) => {
  return (
    <div className="px-4 mt-4">
      <h2 className="font-semibold text-white mb-3">What are you craving?</h2>
      <div className="grid grid-cols-4 gap-3">
        {foodCategories.map((category) => (
          <button
            key={category.id}
            onClick={() => onCategorySelect && onCategorySelect(category.id)}
            className="flex flex-col items-center gap-1.5 p-3 rounded-2xl bg-[#2C2C2E] active:scale-95 transition-transform"
          >
            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center"
              style={{ backgroundColor: `${category.color}20` }}
            >
              <span className="text-2xl">{category.icon}</span>
            </div>
            <span className="text-xs text-white text-center leading-tight">
              {category.name}
            </span>
            <span className="text-[10px] text-gray-500">{category.count}+ places</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default FoodCategoryGrid;
