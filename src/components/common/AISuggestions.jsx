import { Link } from 'react-router-dom';
import { Sparkles, ChevronRight } from 'lucide-react';

const AISuggestions = ({
  category = '',
  suggestions = [],
  chips = []
}) => {
  // Default suggestions if none provided
  const defaultSuggestions = [
    { id: 1, title: 'Best for you', icon: '✨', link: `/${category}?filter=recommended` },
    { id: 2, title: 'Under ₹500', icon: '💰', link: `/${category}?filter=budget` },
    { id: 3, title: 'Trending nearby', icon: '📍', link: `/${category}?filter=trending` },
    { id: 4, title: 'High cashback', icon: '🪙', link: `/${category}?filter=cashback` },
  ];

  const defaultChips = [
    { id: 'budget', label: 'Budget', icon: '💰' },
    { id: 'distance', label: 'Nearby', icon: '📍' },
    { id: 'time', label: 'Quick', icon: '⏱️' },
    { id: 'rating', label: 'Top Rated', icon: '⭐' },
    { id: 'occasion', label: 'Occasion', icon: '🎉' },
  ];

  const displaySuggestions = suggestions.length > 0 ? suggestions : defaultSuggestions;
  const displayChips = chips.length > 0 ? chips : defaultChips;

  return (
    <div className="px-4 mt-6">
      <div className="p-4 rounded-2xl bg-gradient-to-r from-purple-500/10 to-blue-500/10 border border-purple-500/20">
        <div className="flex items-center gap-2 mb-3">
          <Sparkles className="w-5 h-5 text-purple-400" />
          <h3 className="font-semibold text-rez-navy dark:text-white">AI Suggestions</h3>
        </div>

        {/* Smart Suggestions */}
        <div className="grid grid-cols-2 gap-2 mb-4">
          {displaySuggestions.map((suggestion) => (
            <Link
              key={suggestion.id}
              to={suggestion.link}
              className="flex items-center gap-2 p-3 rounded-xl bg-rez-gray-50 dark:bg-white/5 hover:bg-rez-gray-100 dark:bg-white/10 transition-colors active:scale-[0.98]"
            >
              <span className="text-lg">{suggestion.icon}</span>
              <span className="text-sm text-rez-navy dark:text-white">{suggestion.title}</span>
            </Link>
          ))}
        </div>

        {/* Filter Chips */}
        <div className="flex flex-wrap gap-2">
          {displayChips.map((chip) => (
            <button
              key={chip.id}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-rez-gray-100 dark:bg-white/10 text-rez-gray-600 dark:text-gray-400 text-xs hover:bg-white/20 transition-colors"
            >
              <span>{chip.icon}</span>
              <span>{chip.label}</span>
            </button>
          ))}
        </div>

        {/* Ask ReZ AI */}
        <div className="mt-4 p-3 rounded-xl bg-purple-500/20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-xl">🤖</span>
            <div>
              <p className="text-sm font-medium text-rez-navy dark:text-white">Ask ReZ AI</p>
              <p className="text-xs text-rez-gray-600 dark:text-gray-400">"Find me the best deals under ₹1000"</p>
            </div>
          </div>
          <ChevronRight className="w-5 h-5 text-rez-gray-600 dark:text-gray-500" />
        </div>
      </div>
    </div>
  );
};

export default AISuggestions;
