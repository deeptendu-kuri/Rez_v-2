import { Link } from 'react-router-dom';
import { Heart, TrendingUp, Eye, CheckCircle } from 'lucide-react';
import { useCreator } from '../../contexts/CreatorContext';
import { useApp } from '../../contexts/AppContext';

/**
 * CreatorPickCard Component
 * Displays a creator's product recommendation
 */
const CreatorPickCard = ({ pick, showCreator = true }) => {
  const { getCreator, toggleSavePick, isPickSaved } = useCreator();
  const { theme } = useApp();
  const isDark = theme === 'dark';

  const creator = getCreator(pick.creatorId);
  const saved = isPickSaved(pick.id);

  if (!creator) return null;

  const handleSave = (e) => {
    e.preventDefault();
    e.stopPropagation();
    toggleSavePick(pick.id);
  };

  return (
    <Link
      to={`/creators/${creator.username}/pick/${pick.id}`}
      className={`block rounded-xl overflow-hidden ${
        isDark ? 'bg-gray-800' : 'bg-white'
      } shadow-md hover:shadow-lg transition-all`}
    >
      {/* Product Image */}
      <div className="aspect-square relative overflow-hidden">
        <img
          src={pick.productImage}
          alt={pick.productName}
          className="w-full h-full object-cover"
        />

        {/* Save Button */}
        <button
          onClick={handleSave}
          className="absolute top-2 right-2 p-2 rounded-full bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm hover:scale-110 transition-transform"
        >
          <Heart
            className={`w-4 h-4 ${
              saved ? 'fill-red-500 text-red-500' : 'text-gray-900 dark:text-white'
            }`}
          />
        </button>

        {/* Stats Badge */}
        <div className="absolute bottom-2 right-2 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm px-2 py-1 rounded-full flex items-center gap-1">
          <TrendingUp className="w-3 h-3 text-pink-600" />
          <span className="text-xs font-medium text-gray-900 dark:text-white">
            {(pick.stats.views / 1000).toFixed(1)}k
          </span>
        </div>

        {/* Tags */}
        {pick.tags && pick.tags.length > 0 && (
          <div className="absolute top-2 left-2">
            <span className="px-2 py-1 rounded-full text-xs font-medium bg-black/60 text-white backdrop-blur-sm">
              #{pick.tags[0]}
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-3">
        {/* Creator Info (if shown) */}
        {showCreator && (
          <div className="flex items-center gap-2 mb-2">
            <img
              src={creator.avatar}
              alt={creator.name}
              className="w-6 h-6 rounded-full object-cover"
            />
            <div className="flex items-center gap-1 flex-1 min-w-0">
              <span className="text-xs font-medium text-gray-700 dark:text-gray-300 truncate">
                {creator.name}
              </span>
              {creator.verified && (
                <CheckCircle className="w-3 h-3 text-blue-500 flex-shrink-0" />
              )}
            </div>
          </div>
        )}

        {/* Pick Title */}
        <h3 className="text-sm font-medium text-gray-900 dark:text-white line-clamp-2 mb-1">
          {pick.title}
        </h3>

        {/* Product Info */}
        <div className="flex items-baseline gap-2">
          <span className="text-lg font-bold text-gray-900 dark:text-white">
            ₹{pick.productPrice.toLocaleString()}
          </span>
          <span className="text-xs text-gray-600 dark:text-gray-400 truncate">
            {pick.productBrand}
          </span>
        </div>

        {/* Stats */}
        <div className="flex items-center gap-3 mt-2 text-xs text-gray-600 dark:text-gray-400">
          <div className="flex items-center gap-1">
            <Eye className="w-3 h-3" />
            <span>{(pick.stats.views / 1000).toFixed(1)}k</span>
          </div>
          <div className="flex items-center gap-1">
            <span>•</span>
            <span>{pick.stats.purchases} sold</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CreatorPickCard;
