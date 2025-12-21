import { ChevronRight, Sparkles } from 'lucide-react';

const GrocerySuggestionCard = ({ suggestion }) => {
  return (
    <div className="p-4 rounded-2xl bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/20">
      <div className="flex items-start gap-3">
        <div className="w-10 h-10 rounded-xl bg-blue-500/30 flex items-center justify-center shrink-0">
          <span className="text-xl">{suggestion.icon}</span>
        </div>

        <div className="flex-1">
          <div className="flex items-center gap-2 mb-1">
            <Sparkles className="w-4 h-4 text-purple-400" />
            <span className="text-xs text-purple-400">Smart Suggestion</span>
          </div>
          <h3 className="text-sm font-medium text-white">{suggestion.title}</h3>
          <p className="text-xs text-gray-400 mt-0.5">{suggestion.description}</p>
        </div>

        <button className="flex items-center gap-1 px-3 py-1.5 rounded-lg bg-white/10 text-xs text-white shrink-0">
          {suggestion.action}
          <ChevronRight className="w-3 h-3" />
        </button>
      </div>
    </div>
  );
};

export default GrocerySuggestionCard;
