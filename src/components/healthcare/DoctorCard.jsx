import { Star, MapPin, Clock, Shield, Coins, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const DoctorCard = ({ doctor, variant = 'default' }) => {
  if (variant === 'compact') {
    return (
      <Link
        to={`/healthcare/doctor/${doctor.id}`}
        className="min-w-[200px] p-4 rounded-2xl bg-white dark:bg-[#2C2C2E] shrink-0 active:scale-[0.98] transition-transform"
      >
        <div className="flex items-center gap-3 mb-3">
          <img
            src={doctor.image}
            alt={doctor.name}
            className="w-14 h-14 rounded-xl object-cover"
          />
          <div className="flex-1 min-w-0">
            <h3 className="font-medium text-rez-navy dark:text-white truncate">{doctor.name}</h3>
            <p className="text-xs text-rez-gray-600 dark:text-gray-400">{doctor.specialization}</p>
          </div>
        </div>

        <div className="flex items-center gap-2 mb-2">
          <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
          <span className="text-sm text-rez-navy dark:text-white">{doctor.rating}</span>
          <span className="text-xs text-rez-gray-600 dark:text-gray-500">• {doctor.experience}</span>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-sm font-bold text-rez-navy dark:text-white">₹{doctor.consultationFee}</span>
          <span className="px-2 py-1 rounded-full bg-emerald-500/20 text-xs text-emerald-400">
            +{doctor.coinsEarned} coins
          </span>
        </div>
      </Link>
    );
  }

  return (
    <Link
      to={`/healthcare/doctor/${doctor.id}`}
      className="p-4 rounded-2xl bg-white dark:bg-[#2C2C2E] active:scale-[0.99] transition-transform"
    >
      <div className="flex gap-4">
        {/* Image */}
        <div className="relative">
          <img
            src={doctor.image}
            alt={doctor.name}
            className="w-20 h-20 rounded-xl object-cover"
          />
          {doctor.isVerified && (
            <div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-emerald-500 flex items-center justify-center">
              <Shield className="w-3.5 h-3.5 text-rez-navy dark:text-white" />
            </div>
          )}
        </div>

        {/* Info */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2">
            <h3 className="font-semibold text-rez-navy dark:text-white truncate">{doctor.name}</h3>
            {doctor.tags?.slice(0, 1).map((tag, i) => (
              <span key={i} className="px-2 py-0.5 rounded-full bg-blue-500/20 text-[10px] text-blue-400">
                {tag}
              </span>
            ))}
          </div>
          <p className="text-sm text-rez-gray-600 dark:text-gray-400">{doctor.specialization}</p>
          <p className="text-xs text-rez-gray-600 dark:text-gray-500">{doctor.clinic}</p>

          <div className="flex items-center gap-3 mt-2">
            <div className="flex items-center gap-1">
              <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
              <span className="text-sm text-rez-navy dark:text-white">{doctor.rating}</span>
              <span className="text-xs text-rez-gray-600 dark:text-gray-500">({doctor.reviews})</span>
            </div>
            <span className="text-xs text-rez-gray-600 dark:text-gray-500">• {doctor.experience}</span>
            <div className="flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5 text-rez-gray-600 dark:text-gray-400" />
              <span className="text-xs text-rez-gray-600 dark:text-gray-400">{doctor.distance}</span>
            </div>
          </div>
        </div>

        <ChevronRight className="w-5 h-5 text-rez-gray-600 dark:text-gray-500 shrink-0" />
      </div>

      {/* Slots */}
      {doctor.availability && doctor.availability.length > 0 && (
        <div className="flex gap-2 mt-3 overflow-x-auto hide-scrollbar">
          {doctor.availability.slice(0, 3).map((slot, index) => (
            <span
              key={index}
              className="px-3 py-1.5 rounded-lg bg-emerald-500/20 text-xs text-emerald-400 shrink-0"
            >
              {slot}
            </span>
          ))}
        </div>
      )}

      {/* Footer */}
      <div className="flex items-center justify-between mt-3 pt-3 border-t border-rez-gray-200 dark:border-white/10">
        <div>
          <p className="text-xs text-rez-gray-600 dark:text-gray-400">Consultation Fee</p>
          <p className="text-lg font-bold text-rez-navy dark:text-white">₹{doctor.consultationFee}</p>
        </div>
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1">
            <Coins className="w-4 h-4 text-amber-400" />
            <span className="text-sm text-amber-400">+{doctor.coinsEarned}</span>
          </div>
          <button className="px-4 py-2 rounded-xl bg-emerald-500 text-sm font-medium text-rez-navy dark:text-white">
            Book Now
          </button>
        </div>
      </div>
    </Link>
  );
};

export default DoctorCard;
