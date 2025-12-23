import { Clock, Users, Coins, Ticket } from 'lucide-react';
import Badge from '../common/Badge';
import Button from '../common/Button';

const FleaEventCard = ({ event }) => {
  const isFree = event.price === 0;
  const isSoldOut = event.spotsLeft === 0;
  const isLimited = event.spotsLeft !== null && event.spotsLeft <= 5;

  return (
    <div className="min-w-[260px] rounded-2xl overflow-hidden bg-white dark:bg-[#2C2C2E] shrink-0">
      {/* Image */}
      <div className="relative h-32">
        <img
          src={event.image}
          alt={event.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

        {/* Price badge */}
        <div className="absolute top-3 right-3">
          {isFree ? (
            <Badge variant="success" size="sm">FREE</Badge>
          ) : (
            <Badge variant="secondary" size="sm">₹{event.price}</Badge>
          )}
        </div>

        {/* Time */}
        <div className="absolute bottom-3 left-3 flex items-center gap-1.5 px-2 py-1 rounded-full bg-white dark:bg-black/60 backdrop-blur-sm">
          <Clock className="w-3 h-3 text-rez-navy dark:text-white" />
          <span className="text-xs text-rez-navy dark:text-white">{event.time}</span>
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        <h4 className="font-semibold text-rez-navy dark:text-white">{event.name}</h4>
        <p className="text-sm text-rez-gray-600 dark:text-gray-400 mt-0.5">{event.duration}</p>

        {/* Stats row */}
        <div className="flex items-center gap-3 mt-3">
          {event.spots !== null && (
            <div className="flex items-center gap-1.5">
              <Users className="w-3.5 h-3.5 text-purple-400" />
              <span className={`text-xs ${isLimited ? 'text-red-400' : 'text-rez-gray-600 dark:text-gray-400'}`}>
                {isSoldOut ? 'Sold Out' : `${event.spotsLeft} spots left`}
              </span>
            </div>
          )}
          <div className="flex items-center gap-1.5">
            <Coins className="w-3.5 h-3.5 text-amber-400" />
            <span className="text-xs text-amber-400">+{event.coinsEarned} coins</span>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-3">
          {isSoldOut ? (
            <Button variant="secondary" size="sm" fullWidth disabled>
              Sold Out
            </Button>
          ) : (
            <Button variant="primary" size="sm" fullWidth>
              <Ticket className="w-4 h-4 mr-1" />
              {isFree ? 'Register Free' : `Book for ₹${event.price}`}
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default FleaEventCard;
