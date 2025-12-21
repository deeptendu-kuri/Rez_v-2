import { Calendar, MapPin, Clock, Users, Coins, Ticket } from 'lucide-react';
import { Link } from 'react-router-dom';
import Badge from '../common/Badge';
import Button from '../common/Button';

const LiveEventCard = ({ event, variant = 'default' }) => {
  const getTypeColor = () => {
    switch (event.type) {
      case 'Concert': return 'text-purple-400';
      case 'Comedy': return 'text-amber-400';
      case 'Club Night': return 'text-pink-400';
      case 'Cultural': return 'text-blue-400';
      default: return 'text-emerald-400';
    }
  };

  if (variant === 'featured') {
    return (
      <Link
        to={`/event/${event.id}`}
        className="block min-w-[280px] rounded-2xl overflow-hidden bg-[#1C1C1E] shrink-0 group"
      >
        {/* Image */}
        <div className="relative h-36">
          <img
            src={event.image}
            alt={event.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />

          {/* Top badges */}
          <div className="absolute top-3 left-3 right-3 flex items-start justify-between">
            <Badge variant={event.isTrending ? 'danger' : 'secondary'} size="xs">
              {event.isTrending ? '🔥 Trending' : event.type}
            </Badge>
            {event.seatsLeft < 100 && (
              <Badge variant="warning" size="xs">
                {event.seatsLeft} seats left
              </Badge>
            )}
          </div>

          {/* Bottom - Artist */}
          <div className="absolute bottom-3 left-3">
            <p className="text-xs text-gray-300">{event.artist}</p>
          </div>
        </div>

        {/* Content */}
        <div className="p-4">
          <h3 className="font-semibold text-white">{event.title}</h3>

          <div className="flex flex-wrap gap-2 mt-2">
            <div className="flex items-center gap-1 text-gray-400">
              <Calendar className="w-3.5 h-3.5" />
              <span className="text-xs">{event.date}</span>
            </div>
            <div className="flex items-center gap-1 text-gray-400">
              <Clock className="w-3.5 h-3.5" />
              <span className="text-xs">{event.time}</span>
            </div>
          </div>

          <div className="flex items-center gap-1 text-gray-400 mt-1">
            <MapPin className="w-3.5 h-3.5" />
            <span className="text-xs truncate">{event.venue}</span>
            <span className="text-xs text-gray-500">• {event.distance}</span>
          </div>

          {/* Price & Rewards */}
          <div className="flex items-center justify-between mt-3 pt-3 border-t border-white/5">
            <div>
              <p className="text-sm text-white">
                ₹{event.price.min.toLocaleString()} - ₹{event.price.max.toLocaleString()}
              </p>
              <div className="flex items-center gap-1 text-amber-400 mt-0.5">
                <Coins className="w-3 h-3" />
                <span className="text-xs">+{event.coinsBonus} bonus coins</span>
              </div>
            </div>
            <Button variant="primary" size="sm">
              <Ticket className="w-3.5 h-3.5 mr-1" />
              Book
            </Button>
          </div>
        </div>
      </Link>
    );
  }

  // Compact list variant
  return (
    <Link
      to={`/event/${event.id}`}
      className="flex gap-4 p-3 rounded-xl bg-[#2C2C2E] hover:bg-[#3C3C3E] transition-colors"
    >
      <div className="w-20 h-20 rounded-xl overflow-hidden shrink-0">
        <img
          src={event.image}
          alt={event.title}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2">
          <span className={`text-xs font-medium ${getTypeColor()}`}>{event.type}</span>
          {event.isTrending && <Badge variant="danger" size="xs">Hot</Badge>}
        </div>
        <h4 className="font-medium text-white truncate mt-0.5">{event.title}</h4>
        <p className="text-xs text-gray-400 truncate">{event.artist}</p>

        <div className="flex items-center gap-2 mt-1.5">
          <span className="text-xs text-gray-300">{event.date}</span>
          <span className="text-gray-600">•</span>
          <span className="text-xs text-emerald-400">{event.cashback}% back</span>
        </div>
      </div>

      <div className="flex flex-col items-end justify-between">
        <span className="text-sm font-medium text-white">₹{event.price.min}</span>
        <span className="text-[10px] text-gray-500">{event.seatsLeft} left</span>
      </div>
    </Link>
  );
};

export default LiveEventCard;
