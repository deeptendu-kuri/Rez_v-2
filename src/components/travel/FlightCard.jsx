import { Plane, Clock, Coins, Users } from 'lucide-react';
import Badge from '../common/Badge';
import Button from '../common/Button';

const FlightCard = ({ flight }) => {
  return (
    <div className="p-4 rounded-2xl bg-white dark:bg-[#2C2C2E] hover:bg-rez-gray-200 dark:bg-[#3C3C3E] transition-colors">
      {/* Airline & Route */}
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center p-1">
            <img
              src={flight.airlineLogo}
              alt={flight.airline}
              className="w-full h-full object-contain"
              onError={(e) => { e.target.style.display = 'none'; }}
            />
          </div>
          <div>
            <p className="font-medium text-rez-navy dark:text-white">{flight.airline}</p>
            <p className="text-xs text-rez-gray-600 dark:text-gray-400">{flight.stops}</p>
          </div>
        </div>
        {flight.seatsLeft <= 10 && (
          <Badge variant="warning" size="xs">{flight.seatsLeft} seats left</Badge>
        )}
      </div>

      {/* Flight Times */}
      <div className="flex items-center justify-between mb-3">
        <div className="text-center">
          <p className="text-xl font-bold text-rez-navy dark:text-white">{flight.departTime}</p>
          <p className="text-sm text-rez-gray-600 dark:text-gray-400">{flight.from}</p>
        </div>

        <div className="flex-1 mx-4">
          <div className="flex items-center justify-center gap-2">
            <div className="h-px flex-1 bg-gray-600" />
            <div className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-rez-gray-50 dark:bg-white/5">
              <Clock className="w-3 h-3 text-rez-gray-600 dark:text-gray-400" />
              <span className="text-xs text-rez-gray-600 dark:text-gray-400">{flight.duration}</span>
            </div>
            <div className="h-px flex-1 bg-gray-600" />
          </div>
          <div className="flex justify-center mt-1">
            <Plane className="w-4 h-4 text-emerald-400 rotate-90" />
          </div>
        </div>

        <div className="text-center">
          <p className="text-xl font-bold text-rez-navy dark:text-white">{flight.arriveTime}</p>
          <p className="text-sm text-rez-gray-600 dark:text-gray-400">{flight.to}</p>
        </div>
      </div>

      {/* Date */}
      <p className="text-xs text-rez-gray-600 dark:text-gray-500 text-center mb-3">{flight.date}</p>

      {/* Price & CTA */}
      <div className="flex items-center justify-between pt-3 border-t border-rez-gray-200 dark:border-white/5">
        <div>
          <p className="text-xl font-bold text-rez-navy dark:text-white">₹{flight.price.toLocaleString()}</p>
          <div className="flex items-center gap-1 text-emerald-400">
            <Coins className="w-3 h-3" />
            <span className="text-xs">Earn ₹{flight.coinsEarned}</span>
          </div>
        </div>
        <Button variant="primary" size="sm">Book Now</Button>
      </div>
    </div>
  );
};

export default FlightCard;
