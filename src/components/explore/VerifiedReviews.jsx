import { Link } from 'react-router-dom';
import { Star, BadgeCheck, Coins } from 'lucide-react';

const reviewsData = [
  {
    id: 1,
    user: 'Priya S.',
    rating: 5,
    review: 'Best biryani in town! The portion size is generous and ReZ cashback made it even better.',
    store: 'Paradise Biryani',
    cashback: 52,
    verified: true,
    time: '2 days ago'
  },
  {
    id: 2,
    user: 'Rahul K.',
    rating: 4.5,
    review: 'Great quality sneakers and authentic products. Fast delivery and good cashback.',
    store: 'Nike Store',
    cashback: 1260,
    verified: true,
    time: '1 week ago'
  },
  {
    id: 3,
    user: 'Ananya M.',
    rating: 5,
    review: 'Amazing spa experience! Professional service and the ReZ rewards were a nice bonus.',
    store: 'Wellness Spa',
    cashback: 400,
    verified: true,
    time: '3 days ago'
  }
];

const VerifiedReviews = () => {
  return (
    <div className="px-4 py-4">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h2 className="text-h3 font-poppins text-rez-navy dark:text-white">
            Top Reviews Near You
          </h2>
          <p className="text-xs text-rez-gray-600 dark:text-gray-400 mt-1">
            Trusted feedback from verified purchases
          </p>
        </div>
        <Link to="/explore/review-earn" className="text-sm font-medium text-rez-green-500">
          All Reviews
        </Link>
      </div>

      <div className="space-y-3">
        {reviewsData.map((review) => (
          <Link
            key={review.id}
            to={`/store/${review.store}`}
            className="block p-4 bg-white dark:bg-white/10 border border-rez-gray-200 dark:border-white/10 rounded-2xl shadow-sm dark:shadow-none hover:shadow-md dark:hover:border-white/20 transition-all"
          >
            {/* Header */}
            <div className="flex items-start justify-between mb-2">
              <div className="flex items-center gap-2">
                {/* Rating Stars */}
                <div className="flex items-center gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-3.5 h-3.5 ${
                        i < Math.floor(review.rating)
                          ? 'text-amber-400 fill-amber-400'
                          : 'text-rez-gray-300 dark:text-gray-600'
                      }`}
                    />
                  ))}
                </div>
                <span className="text-sm font-bold text-rez-navy dark:text-white">
                  {review.rating}
                </span>
              </div>

              {/* Cashback Badge */}
              <div className="flex items-center gap-1 px-2 py-1 bg-emerald-500/20 rounded-full">
                <Coins className="w-3 h-3 text-emerald-500" />
                <span className="text-xs font-semibold text-emerald-500">
                  ₹{review.cashback}
                </span>
              </div>
            </div>

            {/* Review Text */}
            <p className="text-sm text-rez-navy dark:text-white mb-3 line-clamp-2">
              "{review.review}"
            </p>

            {/* Footer */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <p className="text-xs font-semibold text-rez-green-500">
                  {review.store}
                </p>
                {review.verified && (
                  <div className="flex items-center gap-1">
                    <BadgeCheck className="w-3.5 h-3.5 text-blue-500" />
                    <span className="text-xs text-blue-500 font-medium">
                      Verified Purchase
                    </span>
                  </div>
                )}
              </div>
            </div>

            {/* User & Time */}
            <div className="flex items-center gap-2 mt-2 text-xs text-rez-gray-600 dark:text-gray-400">
              <span>{review.user}</span>
              <span>•</span>
              <span>{review.time}</span>
            </div>
          </Link>
        ))}
      </div>

      {/* Write Review CTA */}
      <Link
        to="/explore/review-earn"
        className="mt-4 block p-4 bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-2xl hover:border-purple-500/40 transition-colors"
      >
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-sm font-semibold text-rez-navy dark:text-white mb-1">
              Share Your Experience
            </h3>
            <p className="text-xs text-rez-gray-600 dark:text-gray-400">
              Earn ₹25-100 for each review
            </p>
          </div>
          <div className="px-4 py-2 bg-rez-green-500 text-white text-sm font-semibold rounded-full">
            Write Review
          </div>
        </div>
      </Link>
    </div>
  );
};

export default VerifiedReviews;
