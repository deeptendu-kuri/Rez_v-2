import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

const FashionExclusiveCard = ({ offer }) => {
  return (
    <Link
      to={`/exclusive/${offer.id}`}
      className={`min-w-[280px] p-4 rounded-2xl shrink-0 relative overflow-hidden active:scale-[0.98] transition-transform bg-gradient-to-r ${offer.gradient}`}
    >
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <span className="text-3xl">{offer.icon}</span>
          <h3 className="text-lg font-bold text-rez-navy dark:text-white mt-2">{offer.title}</h3>
          <p className="text-2xl font-bold text-rez-navy dark:text-white mt-1">{offer.discount}</p>
          <p className="text-sm text-white/80 mt-1">{offer.description}</p>
        </div>
        <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
          <ChevronRight className="w-5 h-5 text-rez-navy dark:text-white" />
        </div>
      </div>

      {/* Decorative circles */}
      <div className="absolute -right-6 -bottom-6 w-24 h-24 rounded-full bg-rez-gray-100 dark:bg-white/10" />
      <div className="absolute -right-2 -bottom-2 w-16 h-16 rounded-full bg-rez-gray-100 dark:bg-white/10" />
    </Link>
  );
};

export default FashionExclusiveCard;
