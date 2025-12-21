import { Link } from 'react-router-dom';
import { discountBuckets } from '../../data/deals';

const DiscountBuckets = () => {
  return (
    <section className="py-4">
      <div className="px-4 mb-3">
        <h2 className="text-lg font-semibold text-white">Shop by Discount</h2>
      </div>

      <div className="grid grid-cols-4 gap-2 px-4">
        {discountBuckets.map((bucket) => (
          <Link
            key={bucket.id}
            to={`/deal-store?discount=${encodeURIComponent(bucket.label)}`}
            className="flex flex-col items-center p-3 rounded-2xl bg-[#2C2C2E] active:bg-[#3A3A3C] transition-colors"
          >
            <div
              className="w-10 h-10 rounded-full flex items-center justify-center mb-2"
              style={{ backgroundColor: `${bucket.color}20` }}
            >
              {bucket.icon ? (
                <span className="text-lg">{bucket.icon}</span>
              ) : (
                <span className="text-xs font-bold" style={{ color: bucket.color }}>
                  %
                </span>
              )}
            </div>
            <span className="text-xs font-medium text-white text-center">{bucket.label}</span>
            <span className="text-[10px] text-gray-500">{bucket.count} deals</span>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default DiscountBuckets;
