import { Star, MapPin, Shield, Users, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const BeautyClinicCard = ({ clinic }) => {
  return (
    <Link
      to={`/beauty/clinic/${clinic.id}`}
      className="p-4 rounded-2xl bg-[#2C2C2E] active:scale-[0.99] transition-transform"
    >
      <div className="flex gap-4">
        {/* Logo/Image */}
        <div className="w-16 h-16 rounded-xl bg-white/10 flex items-center justify-center overflow-hidden shrink-0">
          {clinic.logo ? (
            <img
              src={clinic.logo}
              alt={clinic.name}
              className="w-12 h-12 object-contain"
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.parentElement.innerHTML = '<span class="text-2xl">🏥</span>';
              }}
            />
          ) : (
            <span className="text-2xl">🏥</span>
          )}
        </div>

        {/* Info */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2">
            <h3 className="font-semibold text-white truncate">{clinic.name}</h3>
            {clinic.isVerified && (
              <Shield className="w-4 h-4 text-emerald-400" />
            )}
          </div>

          <p className="text-xs text-gray-400 mt-0.5">{clinic.credentials}</p>

          {/* Rating & Distance */}
          <div className="flex items-center gap-3 mt-1.5">
            <div className="flex items-center gap-1">
              <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
              <span className="text-xs text-white">{clinic.rating}</span>
              <span className="text-xs text-gray-500">({clinic.reviews})</span>
            </div>
            <div className="flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5 text-gray-400" />
              <span className="text-xs text-gray-400">{clinic.distance}</span>
            </div>
            <div className="flex items-center gap-1">
              <Users className="w-3.5 h-3.5 text-gray-400" />
              <span className="text-xs text-gray-400">{clinic.doctorCount} doctors</span>
            </div>
          </div>
        </div>

        <ChevronRight className="w-5 h-5 text-gray-500 shrink-0" />
      </div>

      {/* Specializations */}
      <div className="flex flex-wrap gap-2 mt-3">
        {clinic.specializations.slice(0, 3).map((spec, index) => (
          <span
            key={index}
            className="px-2 py-1 rounded-full bg-blue-500/20 text-xs text-blue-400"
          >
            {spec}
          </span>
        ))}
        {clinic.specializations.length > 3 && (
          <span className="px-2 py-1 rounded-full bg-white/10 text-xs text-gray-400">
            +{clinic.specializations.length - 3} more
          </span>
        )}
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between mt-3 pt-3 border-t border-white/10">
        <div>
          <p className="text-xs text-gray-400">Consultation Fee</p>
          <p className="text-sm font-medium text-white">₹{clinic.consultationFee}</p>
        </div>
        <div className="text-right">
          <p className="text-xs text-gray-400">Earn Cashback</p>
          <p className="text-sm font-medium text-emerald-400">{clinic.cashbackPercent}%</p>
        </div>
        <button className="px-4 py-2 rounded-xl bg-emerald-500 text-sm font-medium text-white">
          Book Now
        </button>
      </div>
    </Link>
  );
};

export default BeautyClinicCard;
