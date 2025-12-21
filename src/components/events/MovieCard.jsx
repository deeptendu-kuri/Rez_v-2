import { Star, MapPin, Coins, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import Badge from '../common/Badge';

const MovieCard = ({ movie, variant = 'default' }) => {
  if (variant === 'compact') {
    return (
      <Link
        to={`/event/movie/${movie.id}`}
        className="flex gap-3 p-3 rounded-xl bg-[#2C2C2E] hover:bg-[#3C3C3E] transition-colors"
      >
        <img
          src={movie.poster}
          alt={movie.title}
          className="w-16 h-24 rounded-lg object-cover shrink-0"
        />
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2">
            <h4 className="font-medium text-white truncate">{movie.title}</h4>
            {movie.isNew && <Badge variant="success" size="xs">NEW</Badge>}
          </div>
          <p className="text-xs text-gray-400 mt-0.5">{movie.genre}</p>
          <div className="flex items-center gap-1 mt-1">
            <Star className="w-3 h-3 text-amber-400 fill-amber-400" />
            <span className="text-xs text-white">{movie.rating}</span>
          </div>
          <div className="flex flex-wrap gap-1 mt-2">
            {movie.showtimes.slice(0, 3).map((time) => (
              <span
                key={time}
                className="px-2 py-0.5 rounded bg-white/10 text-[10px] text-gray-300"
              >
                {time}
              </span>
            ))}
          </div>
        </div>
        <div className="flex flex-col items-end justify-between">
          <div className="flex items-center gap-1 text-emerald-400">
            <Coins className="w-3 h-3" />
            <span className="text-xs">{movie.cashback}%</span>
          </div>
          <span className="text-xs text-gray-500">
            ₹{movie.theaters[0]?.price}
          </span>
        </div>
      </Link>
    );
  }

  return (
    <Link
      to={`/event/movie/${movie.id}`}
      className="min-w-[140px] shrink-0 group"
    >
      <div className="relative rounded-xl overflow-hidden">
        <img
          src={movie.poster}
          alt={movie.title}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

        {/* Badges */}
        <div className="absolute top-2 left-2 right-2 flex items-start justify-between">
          {movie.isNew && <Badge variant="success" size="xs">NEW</Badge>}
          <div className="flex items-center gap-1 px-1.5 py-0.5 rounded-full bg-black/60 backdrop-blur-sm">
            <Star className="w-3 h-3 text-amber-400 fill-amber-400" />
            <span className="text-xs text-white">{movie.rating}</span>
          </div>
        </div>

        {/* Cashback badge */}
        <div className="absolute bottom-2 left-2">
          <div className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-500/80">
            <Coins className="w-3 h-3 text-white" />
            <span className="text-[10px] text-white font-medium">{movie.cashback}%</span>
          </div>
        </div>
      </div>

      <div className="mt-2 px-1">
        <h4 className="font-medium text-white text-sm truncate">{movie.title}</h4>
        <p className="text-xs text-gray-400 truncate">{movie.genre}</p>

        {/* Showtimes */}
        <div className="flex items-center gap-1 mt-1.5 overflow-hidden">
          <Clock className="w-3 h-3 text-gray-500 shrink-0" />
          <div className="flex gap-1 overflow-hidden">
            {movie.showtimes.slice(0, 2).map((time) => (
              <span
                key={time}
                className="px-1.5 py-0.5 rounded bg-white/10 text-[10px] text-gray-300 shrink-0"
              >
                {time}
              </span>
            ))}
            {movie.showtimes.length > 2 && (
              <span className="text-[10px] text-gray-500">+{movie.showtimes.length - 2}</span>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default MovieCard;
