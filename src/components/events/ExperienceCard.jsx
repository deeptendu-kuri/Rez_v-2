import { MapPin, Clock, Star, Coins, Sparkles, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';
import Badge from '../common/Badge';
import Button from '../common/Button';

const ExperienceCard = ({ experience }) => {
  const getCategoryStyle = () => {
    switch (experience.category) {
      case 'Date Night': return { bg: 'bg-pink-500/20', text: 'text-pink-400', border: 'border-pink-500/30' };
      case 'Adventure': return { bg: 'bg-orange-500/20', text: 'text-orange-400', border: 'border-orange-500/30' };
      case 'Creative': return { bg: 'bg-purple-500/20', text: 'text-purple-400', border: 'border-purple-500/30' };
      case 'Lifestyle': return { bg: 'bg-amber-500/20', text: 'text-amber-400', border: 'border-amber-500/30' };
      default: return { bg: 'bg-emerald-500/20', text: 'text-emerald-400', border: 'border-emerald-500/30' };
    }
  };

  const style = getCategoryStyle();

  return (
    <Link
      to={`/event/experience/${experience.id}`}
      className="block min-w-[280px] rounded-2xl overflow-hidden bg-rez-gray-100 dark:bg-[#1C1C1E] shrink-0 group"
    >
      {/* Image */}
      <div className="relative h-40">
        <img
          src={experience.image}
          alt={experience.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

        {/* AI Pick badge */}
        {experience.aiPick && (
          <div className="absolute top-3 left-3">
            <Badge variant="info" size="xs" className="animate-pulse">
              <Sparkles className="w-3 h-3 mr-1" />
              AI Pick
            </Badge>
          </div>
        )}

        {/* Save button */}
        <button className="absolute top-3 right-3 p-2 rounded-full bg-white dark:bg-black/40 backdrop-blur-sm hover:bg-white dark:bg-black/60 transition-colors">
          <Heart className="w-4 h-4 text-rez-navy dark:text-white" />
        </button>

        {/* Category */}
        <div className="absolute bottom-3 left-3">
          <span className={`px-2 py-1 rounded-full text-xs font-medium ${style.bg} ${style.text}`}>
            {experience.category}
          </span>
        </div>

        {/* Rating */}
        <div className="absolute bottom-3 right-3 flex items-center gap-1 px-2 py-0.5 rounded-full bg-white dark:bg-black/60 backdrop-blur-sm">
          <Star className="w-3 h-3 text-amber-400 fill-amber-400" />
          <span className="text-xs text-rez-navy dark:text-white">{experience.rating}</span>
          <span className="text-[10px] text-rez-gray-600 dark:text-gray-400">({experience.reviews})</span>
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="font-semibold text-rez-navy dark:text-white">{experience.title}</h3>
        <p className="text-sm text-rez-gray-600 dark:text-gray-400 mt-1 line-clamp-2">{experience.description}</p>

        <div className="flex flex-wrap gap-2 mt-3">
          <div className="flex items-center gap-1 text-rez-gray-600 dark:text-gray-400">
            <Clock className="w-3.5 h-3.5" />
            <span className="text-xs">{experience.duration}</span>
          </div>
          <div className="flex items-center gap-1 text-rez-gray-600 dark:text-gray-400">
            <MapPin className="w-3.5 h-3.5" />
            <span className="text-xs">{experience.distance}</span>
          </div>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-1 mt-2">
          {experience.tags.map((tag) => (
            <span
              key={tag}
              className={`px-2 py-0.5 rounded-full text-[10px] ${style.bg} ${style.text} border ${style.border}`}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Price & CTA */}
        <div className="flex items-center justify-between mt-4 pt-3 border-t border-rez-gray-200 dark:border-white/5">
          <div>
            <p className="text-lg font-semibold text-rez-navy dark:text-white">₹{experience.price.toLocaleString()}</p>
            <div className="flex items-center gap-2 mt-0.5">
              <div className="flex items-center gap-1 text-emerald-400">
                <Coins className="w-3 h-3" />
                <span className="text-xs">{experience.cashback}%</span>
              </div>
              <span className="text-[10px] text-amber-400">+{experience.coinsBonus} bonus</span>
            </div>
          </div>
          <Button variant="primary" size="sm">Book Now</Button>
        </div>
      </div>
    </Link>
  );
};

export default ExperienceCard;
