import { Star, BadgeCheck } from 'lucide-react';

const StoreReviewCard = ({ review, theme }) => {
  return (
    <div className="min-w-[200px] p-4 rounded-2xl bg-white dark:bg-[#2C2C2E] shrink-0">
      <div className="flex items-center gap-2 mb-2">
        <div
          className="w-8 h-8 rounded-full flex items-center justify-center"
          style={{ backgroundColor: `${theme.primary}20` }}
        >
          <span className="text-sm">👤</span>
        </div>
        <div className="flex-1">
          <div className="flex items-center gap-1">
            <p className="text-sm font-medium text-rez-navy dark:text-white">{review.user}</p>
            <BadgeCheck className="w-3.5 h-3.5 text-blue-400" />
          </div>
          {(review.bodyType || review.concern) && (
            <p className="text-[10px] text-rez-gray-600 dark:text-gray-400">
              {review.bodyType || review.concern}
            </p>
          )}
        </div>
      </div>

      <div className="flex items-center gap-1 mb-2">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`w-3 h-3 ${i < review.rating ? 'text-amber-400 fill-amber-400' : 'text-rez-gray-700 dark:text-gray-600'}`}
          />
        ))}
      </div>

      <p className="text-sm text-rez-gray-700 dark:text-gray-300 mb-2">"{review.review}"</p>

      <p className="text-xs text-rez-gray-600 dark:text-gray-400">on {review.product}</p>
    </div>
  );
};

export default StoreReviewCard;
