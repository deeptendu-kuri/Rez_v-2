import { Clock, Users, Star, Coins, Calendar } from 'lucide-react';
import Badge from '../common/Badge';
import Button from '../common/Button';

const FoodExperienceCard = ({ experience }) => {
  const discountPercent = Math.round(
    ((experience.originalPrice - experience.price) / experience.originalPrice) * 100
  );

  return (
    <div className="min-w-[300px] rounded-2xl overflow-hidden bg-white dark:bg-[#2C2C2E] shrink-0 group">
      {/* Image */}
      <div className="relative h-40">
        <img
          src={experience.image}
          alt={experience.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

        {/* Badges */}
        <div className="absolute top-3 left-3 flex items-center gap-2">
          <Badge variant="danger" size="xs">{discountPercent}% OFF</Badge>
        </div>

        {/* Rating */}
        <div className="absolute top-3 right-3 flex items-center gap-1 px-2 py-1 rounded-full bg-white dark:bg-black/60 backdrop-blur-sm">
          <Star className="w-3 h-3 text-amber-400 fill-amber-400" />
          <span className="text-xs text-rez-navy dark:text-white font-medium">{experience.rating}</span>
        </div>

        {/* Title */}
        <div className="absolute bottom-3 left-3 right-3">
          <h3 className="font-semibold text-rez-navy dark:text-white">{experience.title}</h3>
          <p className="text-sm text-rez-gray-700 dark:text-gray-300">{experience.subtitle}</p>
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        {/* Restaurant & Meta */}
        <div className="flex items-center gap-3 text-rez-gray-600 dark:text-gray-400 mb-3">
          <span className="text-xs">{experience.restaurant}</span>
          <span className="w-1 h-1 rounded-full bg-gray-600" />
          <div className="flex items-center gap-1">
            <Clock className="w-3 h-3" />
            <span className="text-xs">{experience.duration}</span>
          </div>
          <div className="flex items-center gap-1">
            <Users className="w-3 h-3" />
            <span className="text-xs">{experience.guests}</span>
          </div>
        </div>

        {/* Date & Time */}
        <div className="flex items-center gap-2 mb-3">
          <div className="flex items-center gap-1 px-2 py-1 rounded-full bg-purple-500/20 text-purple-400">
            <Calendar className="w-3 h-3" />
            <span className="text-xs">{experience.date}</span>
          </div>
          <span className="text-xs text-rez-gray-600 dark:text-gray-400">{experience.time}</span>
        </div>

        {/* Includes */}
        <div className="mb-3">
          <p className="text-[10px] text-rez-gray-600 dark:text-gray-500 mb-1">INCLUDES</p>
          <div className="flex flex-wrap gap-1">
            {experience.includes.slice(0, 3).map((item, index) => (
              <span
                key={index}
                className="px-2 py-0.5 rounded-full bg-rez-gray-50 dark:bg-white/5 text-[10px] text-rez-gray-600 dark:text-gray-400"
              >
                {item}
              </span>
            ))}
            {experience.includes.length > 3 && (
              <span className="px-2 py-0.5 rounded-full bg-rez-gray-50 dark:bg-white/5 text-[10px] text-rez-gray-600 dark:text-gray-400">
                +{experience.includes.length - 3} more
              </span>
            )}
          </div>
        </div>

        {/* Price & CTA */}
        <div className="flex items-center justify-between pt-3 border-t border-rez-gray-200 dark:border-white/5">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-lg font-bold text-rez-navy dark:text-white">₹{experience.price}</span>
              <span className="text-sm text-rez-gray-600 dark:text-gray-500 line-through">
                ₹{experience.originalPrice}
              </span>
            </div>
            <div className="flex items-center gap-1 text-amber-400">
              <Coins className="w-3 h-3" />
              <span className="text-xs">Earn {experience.coinsEarned} coins</span>
            </div>
          </div>
          <Button variant="primary" size="sm">Book Now</Button>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-1 mt-3">
          {experience.tags.map((tag, index) => (
            <span
              key={index}
              className="px-2 py-0.5 rounded-full bg-emerald-500/10 text-[10px] text-emerald-400"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FoodExperienceCard;
