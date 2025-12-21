import { useState } from 'react';
import { X, Calendar, Clock, Users, Coins, CheckCircle } from 'lucide-react';
import Button from '../common/Button';

const BookingModal = ({ restaurant, isOpen, onClose }) => {
  const [step, setStep] = useState('form'); // form, confirm, success
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [guests, setGuests] = useState(2);

  if (!isOpen) return null;

  const handleBook = () => {
    setStep('confirm');
  };

  const handleConfirm = () => {
    setStep('success');
  };

  const handleClose = () => {
    setStep('form');
    setDate('');
    setTime('');
    setGuests(2);
    onClose();
  };

  const timeSlots = [
    '12:00 PM', '12:30 PM', '1:00 PM', '1:30 PM',
    '7:00 PM', '7:30 PM', '8:00 PM', '8:30 PM', '9:00 PM'
  ];

  if (step === 'success') {
    return (
      <div className="fixed inset-0 z-50 flex items-end justify-center">
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={handleClose} />
        <div className="relative w-full max-w-lg bg-[#1C1C1E] rounded-t-3xl p-6 animate-slide-up">
          <div className="text-center py-4">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-emerald-500/20 flex items-center justify-center">
              <CheckCircle className="w-8 h-8 text-emerald-400" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Booking Confirmed!</h3>
            <p className="text-gray-400 mb-1">{restaurant.name}</p>
            <p className="text-sm text-white">
              {date} at {time} for {guests} guests
            </p>

            <div className="mt-4 p-3 rounded-xl bg-amber-500/10 border border-amber-500/20">
              <div className="flex items-center justify-center gap-2 text-amber-400">
                <Coins className="w-4 h-4" />
                <span className="text-sm">Earn {restaurant.coinsEarned} coins on check-in!</span>
              </div>
            </div>

            <div className="mt-6">
              <Button variant="primary" fullWidth onClick={handleClose}>
                Done
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (step === 'confirm') {
    return (
      <div className="fixed inset-0 z-50 flex items-end justify-center">
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={handleClose} />
        <div className="relative w-full max-w-lg bg-[#1C1C1E] rounded-t-3xl p-6 animate-slide-up">
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-white/10"
          >
            <X className="w-5 h-5 text-white" />
          </button>

          <h3 className="text-lg font-semibold text-white mb-4">Confirm Booking</h3>

          <div className="p-4 rounded-xl bg-white/5 mb-4">
            <div className="flex items-center gap-3 mb-3">
              <img
                src={restaurant.image}
                alt={restaurant.name}
                className="w-12 h-12 rounded-xl object-cover"
              />
              <div>
                <p className="font-medium text-white">{restaurant.name}</p>
                <p className="text-xs text-gray-400">{restaurant.cuisine.join(' • ')}</p>
              </div>
            </div>

            <div className="space-y-2 text-sm">
              <div className="flex items-center justify-between">
                <span className="text-gray-400">Date</span>
                <span className="text-white">{date}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-400">Time</span>
                <span className="text-white">{time}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-400">Guests</span>
                <span className="text-white">{guests} people</span>
              </div>
            </div>
          </div>

          <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 mb-4">
            <p className="text-sm text-emerald-400 text-center">
              Pay at restaurant & earn {restaurant.cashbackPercent}% cashback
            </p>
          </div>

          <div className="space-y-2">
            <Button variant="primary" fullWidth onClick={handleConfirm}>
              Confirm Booking
            </Button>
            <Button variant="ghost" fullWidth onClick={() => setStep('form')}>
              Go Back
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={handleClose} />
      <div className="relative w-full max-w-lg bg-[#1C1C1E] rounded-t-3xl p-6 animate-slide-up max-h-[80vh] overflow-y-auto">
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-white/10"
        >
          <X className="w-5 h-5 text-white" />
        </button>

        <h3 className="text-lg font-semibold text-white mb-1">Book a Table</h3>
        <p className="text-sm text-gray-400 mb-6">{restaurant.name}</p>

        {/* Date */}
        <div className="mb-4">
          <label className="flex items-center gap-2 text-sm text-gray-400 mb-2">
            <Calendar className="w-4 h-4" />
            Select Date
          </label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="w-full px-4 py-3 rounded-xl bg-white/10 text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
          />
        </div>

        {/* Time */}
        <div className="mb-4">
          <label className="flex items-center gap-2 text-sm text-gray-400 mb-2">
            <Clock className="w-4 h-4" />
            Select Time
          </label>
          <div className="grid grid-cols-3 gap-2">
            {timeSlots.map((slot) => (
              <button
                key={slot}
                onClick={() => setTime(slot)}
                className={`py-2 rounded-lg text-sm transition-colors ${
                  time === slot
                    ? 'bg-emerald-500 text-white'
                    : 'bg-white/10 text-gray-400 hover:bg-white/20'
                }`}
              >
                {slot}
              </button>
            ))}
          </div>
        </div>

        {/* Guests */}
        <div className="mb-6">
          <label className="flex items-center gap-2 text-sm text-gray-400 mb-2">
            <Users className="w-4 h-4" />
            Number of Guests
          </label>
          <div className="flex items-center gap-4">
            <button
              onClick={() => setGuests(Math.max(1, guests - 1))}
              className="w-10 h-10 rounded-full bg-white/10 text-white text-xl"
            >
              -
            </button>
            <span className="text-xl font-semibold text-white w-8 text-center">{guests}</span>
            <button
              onClick={() => setGuests(Math.min(10, guests + 1))}
              className="w-10 h-10 rounded-full bg-white/10 text-white text-xl"
            >
              +
            </button>
          </div>
        </div>

        {/* Rewards info */}
        <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/20 mb-6">
          <div className="flex items-center gap-2 text-amber-400">
            <Coins className="w-4 h-4" />
            <span className="text-sm">Earn bonus coins on check-in!</span>
          </div>
        </div>

        <Button
          variant="primary"
          fullWidth
          onClick={handleBook}
          disabled={!date || !time}
        >
          Book Table
        </Button>
      </div>
    </div>
  );
};

export default BookingModal;
