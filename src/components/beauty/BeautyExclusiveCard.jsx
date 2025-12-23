import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

const BeautyExclusiveCard = ({ offer }) => {
  return (
    <Link
      to={`/exclusive/${offer.id}`}
      className={`min-w-[240px] p-4 rounded-2xl shrink-0 relative overflow-hidden active:scale-[0.98] transition-transform bg-gradient-to-r ${offer.gradient}`}
    >
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <span className="text-3xl">{offer.icon}</span>
          <h3 className="text-base font-bold text-rez-navy dark:text-white mt-2">{offer.title}</h3>
          <p className="text-lg font-bold text-rez-navy dark:text-white mt-0.5">{offer.discount}</p>
          <p className="text-xs text-white/80 mt-0.5">{offer.description}</p>
        </div>
        <div className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center">
          <ChevronRight className="w-4 h-4 text-rez-navy dark:text-white" />
        </div>
      </div>

      {/* Decorative circles */}
      <div className="absolute -right-4 -bottom-4 w-20 h-20 rounded-full bg-rez-gray-100 dark:bg-white/10" />
      <div className="absolute -right-1 -bottom-1 w-12 h-12 rounded-full bg-rez-gray-100 dark:bg-white/10" />
    </Link>
  );
};

export default BeautyExclusiveCard;
