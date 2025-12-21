import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import StoreCard from '../store/StoreCard';

const StoreSection = ({ title, subtitle, stores, viewAllLink }) => {
  if (!stores || stores.length === 0) return null;

  return (
    <section className="py-4">
      <div className="flex items-center justify-between px-4 mb-3">
        <div>
          <h2 className="text-lg font-semibold text-white">{title}</h2>
          {subtitle && <p className="text-sm text-gray-400">{subtitle}</p>}
        </div>
        {viewAllLink && (
          <Link
            to={viewAllLink}
            className="flex items-center gap-1 text-sm text-emerald-400"
          >
            View all
            <ChevronRight className="w-4 h-4" />
          </Link>
        )}
      </div>

      <div className="flex gap-4 px-4 overflow-x-auto hide-scrollbar pb-2">
        {stores.map((store) => (
          <StoreCard key={store.id} store={store} />
        ))}
      </div>
    </section>
  );
};

export default StoreSection;
