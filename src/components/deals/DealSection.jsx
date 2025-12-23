import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import DealCard from './DealCard';

const DealSection = ({
  title,
  subtitle,
  icon,
  deals,
  variant = 'default',
  viewAllLink,
  emptyMessage = 'No deals available',
  cardVariant = 'default',
  showDistance = true
}) => {
  if (!deals || deals.length === 0) {
    return null;
  }

  return (
    <section className="py-4">
      {/* Header */}
      <div className="flex items-center justify-between px-4 mb-3">
        <div className="flex items-center gap-2">
          {icon && <span className="text-xl">{icon}</span>}
          <div>
            <h2 className="text-lg font-semibold text-rez-navy dark:text-white">{title}</h2>
            {subtitle && <p className="text-sm text-rez-gray-600 dark:text-gray-400">{subtitle}</p>}
          </div>
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

      {/* Horizontal scroll for default variant */}
      {variant === 'horizontal' && (
        <div className="flex gap-3 px-4 overflow-x-auto hide-scrollbar pb-2">
          {deals.map((deal) => (
            <DealCard
              key={deal.id}
              deal={deal}
              variant={cardVariant}
              showDistance={showDistance}
            />
          ))}
        </div>
      )}

      {/* Vertical list for list variant */}
      {variant === 'list' && (
        <div className="space-y-3 px-4">
          {deals.map((deal) => (
            <DealCard
              key={deal.id}
              deal={deal}
              variant="list"
              showDistance={showDistance}
            />
          ))}
        </div>
      )}

      {/* Grid for grid variant */}
      {variant === 'grid' && (
        <div className="grid grid-cols-2 gap-3 px-4">
          {deals.map((deal) => (
            <DealCard
              key={deal.id}
              deal={deal}
              variant="compact"
              showDistance={showDistance}
            />
          ))}
        </div>
      )}
    </section>
  );
};

export default DealSection;
