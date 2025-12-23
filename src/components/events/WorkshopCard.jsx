import { Calendar, Clock, MapPin, Users, Coins, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import Badge from '../common/Badge';
import Button from '../common/Button';

const WorkshopCard = ({ workshop, variant = 'default' }) => {
  const getCategoryColor = () => {
    switch (workshop.category) {
      case 'Photography': return 'bg-blue-500/20 text-blue-400';
      case 'Dance': return 'bg-pink-500/20 text-pink-400';
      case 'Cooking': return 'bg-orange-500/20 text-orange-400';
      case 'Business': return 'bg-purple-500/20 text-purple-400';
      default: return 'bg-emerald-500/20 text-emerald-400';
    }
  };

  if (variant === 'featured') {
    return (
      <Link
        to={`/event/workshop/${workshop.id}`}
        className="block min-w-[280px] rounded-2xl overflow-hidden bg-rez-gray-100 dark:bg-[#1C1C1E] shrink-0"
      >
        {/* Image */}
        <div className="relative h-36">
          <img
            src={workshop.image}
            alt={workshop.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />

          {/* Category */}
          <div className="absolute top-3 left-3">
            <span className={`px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor()}`}>
              {workshop.category}
            </span>
          </div>

          {/* Spots left */}
          {workshop.spotsLeft <= 10 && (
            <div className="absolute top-3 right-3">
              <Badge variant="warning" size="xs">
                {workshop.spotsLeft} spots left
              </Badge>
            </div>
          )}

          {/* Level */}
          <div className="absolute bottom-3 left-3">
            <Badge variant="secondary" size="xs">{workshop.level}</Badge>
          </div>
        </div>

        {/* Content */}
        <div className="p-4">
          <h3 className="font-semibold text-rez-navy dark:text-white">{workshop.title}</h3>
          <p className="text-sm text-rez-gray-600 dark:text-gray-400 mt-0.5">by {workshop.instructor}</p>

          <div className="flex flex-wrap gap-2 mt-2">
            <div className="flex items-center gap-1 text-rez-gray-600 dark:text-gray-400">
              <Calendar className="w-3.5 h-3.5" />
              <span className="text-xs">{workshop.date}</span>
            </div>
            <div className="flex items-center gap-1 text-rez-gray-600 dark:text-gray-400">
              <Clock className="w-3.5 h-3.5" />
              <span className="text-xs">{workshop.duration}</span>
            </div>
          </div>

          <div className="flex items-center gap-1 text-rez-gray-600 dark:text-gray-400 mt-1">
            <MapPin className="w-3.5 h-3.5" />
            <span className="text-xs truncate">{workshop.venue}</span>
          </div>

          {/* Includes */}
          <div className="flex flex-wrap gap-2 mt-3">
            {workshop.includes.slice(0, 2).map((item) => (
              <div key={item} className="flex items-center gap-1">
                <CheckCircle className="w-3 h-3 text-emerald-400" />
                <span className="text-[10px] text-rez-gray-600 dark:text-gray-400">{item}</span>
              </div>
            ))}
          </div>

          {/* Price & CTA */}
          <div className="flex items-center justify-between mt-3 pt-3 border-t border-rez-gray-200 dark:border-white/5">
            <div>
              <p className="text-lg font-semibold text-rez-navy dark:text-white">₹{workshop.price.toLocaleString()}</p>
              <div className="flex items-center gap-1 text-emerald-400">
                <Coins className="w-3 h-3" />
                <span className="text-xs">{workshop.cashback}% back</span>
              </div>
            </div>
            <Button variant="primary" size="sm">Reserve</Button>
          </div>
        </div>
      </Link>
    );
  }

  // Compact variant
  return (
    <Link
      to={`/event/workshop/${workshop.id}`}
      className="flex gap-4 p-3 rounded-xl bg-white dark:bg-[#2C2C2E] hover:bg-rez-gray-200 dark:bg-[#3C3C3E] transition-colors"
    >
      <div className="w-20 h-20 rounded-xl overflow-hidden shrink-0">
        <img
          src={workshop.image}
          alt={workshop.title}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="flex-1 min-w-0">
        <span className={`inline-block px-2 py-0.5 rounded-full text-[10px] font-medium ${getCategoryColor()}`}>
          {workshop.category}
        </span>
        <h4 className="font-medium text-rez-navy dark:text-white truncate mt-1">{workshop.title}</h4>
        <p className="text-xs text-rez-gray-600 dark:text-gray-400">{workshop.date} • {workshop.duration}</p>

        <div className="flex items-center gap-2 mt-1">
          <span className="text-sm font-medium text-rez-navy dark:text-white">₹{workshop.price}</span>
          <span className="text-xs text-emerald-400">{workshop.cashback}% back</span>
        </div>
      </div>

      <div className="flex flex-col items-end">
        {workshop.spotsLeft <= 10 && (
          <span className="text-[10px] text-amber-400">{workshop.spotsLeft} left</span>
        )}
      </div>
    </Link>
  );
};

export default WorkshopCard;
