import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import {
  ArrowLeft,
  MapPin,
  Calendar,
  Clock,
  Star,
  Users,
  Coins,
  Share2,
  Heart,
  Ticket,
  ChevronRight,
  CheckCircle,
  Info,
  CreditCard,
  Smartphone,
} from 'lucide-react';
import { liveEvents, movies, curatedExperiences } from '../data/eventsData';
import { useWallet } from '../contexts/WalletContext';
import Badge from '../components/common/Badge';
import Button from '../components/common/Button';

const EventDetail = () => {
  const { id, type } = useParams();
  const { rezCoins } = useWallet();
  const [selectedTicket, setSelectedTicket] = useState(null);
  const [isSaved, setIsSaved] = useState(false);
  const [showPayment, setShowPayment] = useState(false);

  // Find the event based on type and id
  let event = null;
  if (type === 'movie') {
    event = movies.find((m) => m.id === id);
  } else {
    event = liveEvents.find((e) => e.id === id) ||
            curatedExperiences.find((e) => e.id === id);
  }

  // Mock event for demo if not found
  if (!event) {
    event = {
      id: id,
      title: 'Sample Event',
      type: 'Concert',
      artist: 'Various Artists',
      date: 'Jan 20, 2025',
      time: '7:00 PM',
      venue: 'Sample Venue',
      city: 'Bangalore',
      distance: '5 km',
      image: 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=800',
      price: { min: 500, max: 5000 },
      cashback: 15,
      coinsBonus: 200,
      seatsLeft: 150,
      description: 'An amazing event experience awaits you!',
    };
  }

  const ticketTiers = [
    { id: 't1', name: 'General', price: event.price?.min || 500, perks: ['Standard seating', 'Entry pass'] },
    { id: 't2', name: 'Premium', price: Math.round((event.price?.min || 500) * 1.8), perks: ['Priority seating', 'Entry pass', 'Complimentary drink'] },
    { id: 't3', name: 'VIP', price: event.price?.max || 2000, perks: ['Front row seats', 'Backstage access', 'Merch pack', 'Meet & greet'] },
  ];

  const selectedTierData = ticketTiers.find((t) => t.id === selectedTicket);
  const coinDeduction = Math.min(rezCoins, selectedTierData?.price * 0.2 || 0);
  const finalPrice = selectedTierData ? selectedTierData.price - coinDeduction : 0;
  const earnableCoins = Math.round((selectedTierData?.price || 0) * (event.cashback / 100));

  return (
    <div className="min-h-screen bg-black pb-32">
      {/* Hero Image */}
      <div className="relative h-64">
        <img
          src={event.image || event.poster}
          alt={event.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />

        {/* Header */}
        <div className="absolute top-0 left-0 right-0 p-4 flex items-center justify-between">
          <Link to="/events" className="p-2 rounded-full bg-black/50 backdrop-blur-sm">
            <ArrowLeft className="w-5 h-5 text-white" />
          </Link>
          <div className="flex items-center gap-2">
            <button className="p-2 rounded-full bg-black/50 backdrop-blur-sm">
              <Share2 className="w-5 h-5 text-white" />
            </button>
            <button
              onClick={() => setIsSaved(!isSaved)}
              className={`p-2 rounded-full backdrop-blur-sm ${isSaved ? 'bg-red-500' : 'bg-black/50'}`}
            >
              <Heart className={`w-5 h-5 ${isSaved ? 'text-white fill-white' : 'text-white'}`} />
            </button>
          </div>
        </div>

        {/* Bottom info */}
        <div className="absolute bottom-4 left-4 right-4">
          <Badge variant={event.isTrending ? 'danger' : 'secondary'} size="sm">
            {event.type || 'Event'}
          </Badge>
          <h1 className="text-2xl font-bold text-white mt-2">{event.title}</h1>
          {event.artist && (
            <p className="text-gray-300 mt-1">{event.artist}</p>
          )}
        </div>
      </div>

      {/* Quick Info */}
      <div className="px-4 py-4 border-b border-white/5">
        <div className="flex flex-wrap gap-4">
          <div className="flex items-center gap-2 text-gray-300">
            <Calendar className="w-4 h-4 text-emerald-400" />
            <span className="text-sm">{event.date}</span>
          </div>
          <div className="flex items-center gap-2 text-gray-300">
            <Clock className="w-4 h-4 text-emerald-400" />
            <span className="text-sm">{event.time}</span>
          </div>
          <div className="flex items-center gap-2 text-gray-300">
            <MapPin className="w-4 h-4 text-emerald-400" />
            <span className="text-sm">{event.venue || 'Venue'} • {event.distance}</span>
          </div>
        </div>

        {event.seatsLeft && event.seatsLeft < 200 && (
          <div className="mt-3 p-2 rounded-lg bg-amber-500/10 border border-amber-500/20">
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4 text-amber-400" />
              <span className="text-sm text-amber-400">{event.seatsLeft} seats left - Book now!</span>
            </div>
          </div>
        )}
      </div>

      {/* Rewards Banner */}
      <div className="mx-4 mt-4 p-4 rounded-2xl bg-gradient-to-r from-emerald-500/20 to-teal-500/20 border border-emerald-500/20">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-300">Earn with this booking</p>
            <div className="flex items-center gap-3 mt-1">
              <div className="flex items-center gap-1 text-emerald-400">
                <Coins className="w-4 h-4" />
                <span className="font-semibold">{event.cashback}% cashback</span>
              </div>
              {event.coinsBonus && (
                <div className="flex items-center gap-1 text-amber-400">
                  <span className="font-semibold">+{event.coinsBonus} bonus</span>
                </div>
              )}
            </div>
          </div>
          <span className="text-3xl">🪙</span>
        </div>
      </div>

      {/* Description */}
      <div className="px-4 mt-6">
        <h2 className="font-semibold text-white mb-2">About</h2>
        <p className="text-sm text-gray-400 leading-relaxed">
          {event.description || 'Experience an unforgettable event with amazing performances, great atmosphere, and exclusive rewards for ReZ members.'}
        </p>
      </div>

      {/* Ticket Selection */}
      <div className="px-4 mt-6">
        <h2 className="font-semibold text-white mb-3">Select Tickets</h2>
        <div className="space-y-3">
          {ticketTiers.map((tier) => (
            <button
              key={tier.id}
              onClick={() => setSelectedTicket(tier.id)}
              className={`w-full p-4 rounded-xl text-left transition-all ${
                selectedTicket === tier.id
                  ? 'bg-emerald-500/20 border-2 border-emerald-500'
                  : 'bg-[#2C2C2E] border-2 border-transparent'
              }`}
            >
              <div className="flex items-start justify-between">
                <div>
                  <h4 className="font-medium text-white">{tier.name}</h4>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {tier.perks.map((perk) => (
                      <div key={perk} className="flex items-center gap-1">
                        <CheckCircle className="w-3 h-3 text-emerald-400" />
                        <span className="text-xs text-gray-400">{perk}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-lg font-semibold text-white">₹{tier.price.toLocaleString()}</p>
                  <p className="text-xs text-emerald-400">Earn ₹{Math.round(tier.price * event.cashback / 100)}</p>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Venue Map Placeholder */}
      <div className="px-4 mt-6">
        <h2 className="font-semibold text-white mb-3">Venue</h2>
        <div className="p-4 rounded-xl bg-[#2C2C2E]">
          <div className="flex items-start gap-3">
            <div className="p-3 rounded-xl bg-white/10">
              <MapPin className="w-5 h-5 text-emerald-400" />
            </div>
            <div className="flex-1">
              <p className="font-medium text-white">{event.venue}</p>
              <p className="text-sm text-gray-400">{event.city || 'Bangalore'}</p>
              <p className="text-xs text-emerald-400 mt-1">{event.distance} away</p>
            </div>
            <button className="px-3 py-1.5 rounded-lg bg-white/10 text-sm text-white">
              Directions
            </button>
          </div>
        </div>
      </div>

      {/* Cancellation Policy */}
      <div className="px-4 mt-6">
        <div className="p-4 rounded-xl bg-[#2C2C2E]">
          <div className="flex items-start gap-3">
            <Info className="w-5 h-5 text-gray-400 shrink-0" />
            <div>
              <p className="text-sm text-white">Cancellation Policy</p>
              <p className="text-xs text-gray-400 mt-1">
                Full refund if cancelled 48 hours before event. 50% refund within 48 hours. No refund on event day.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Payment Section (if ticket selected) */}
      {selectedTicket && showPayment && (
        <div className="px-4 mt-6">
          <h2 className="font-semibold text-white mb-3">Payment</h2>
          <div className="p-4 rounded-xl bg-[#1C1C1E] space-y-4">
            {/* Price breakdown */}
            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-400">Ticket Price</span>
                <span className="text-white">₹{selectedTierData.price.toLocaleString()}</span>
              </div>
              {coinDeduction > 0 && (
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-400">ReZ Coins Applied</span>
                  <span className="text-emerald-400">-₹{Math.round(coinDeduction)}</span>
                </div>
              )}
              <div className="pt-2 border-t border-white/10 flex items-center justify-between">
                <span className="font-medium text-white">Total</span>
                <span className="text-lg font-semibold text-white">₹{Math.round(finalPrice).toLocaleString()}</span>
              </div>
            </div>

            {/* Coin usage */}
            <div className="p-3 rounded-lg bg-amber-500/10 border border-amber-500/20">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Coins className="w-4 h-4 text-amber-400" />
                  <span className="text-sm text-white">Use {rezCoins} coins</span>
                </div>
                <span className="text-sm text-amber-400">-₹{Math.round(coinDeduction)}</span>
              </div>
            </div>

            {/* Payment methods */}
            <div className="space-y-2">
              <p className="text-sm text-gray-400">Pay remaining with</p>
              <div className="grid grid-cols-2 gap-2">
                <button className="p-3 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center gap-2">
                  <Smartphone className="w-4 h-4 text-emerald-400" />
                  <span className="text-sm text-white">UPI</span>
                </button>
                <button className="p-3 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center gap-2">
                  <CreditCard className="w-4 h-4 text-blue-400" />
                  <span className="text-sm text-white">Card</span>
                </button>
              </div>
            </div>

            {/* Earnings preview */}
            <div className="p-3 rounded-lg bg-emerald-500/10 border border-emerald-500/20">
              <p className="text-sm text-emerald-400">
                You'll earn ₹{earnableCoins + (event.coinsBonus || 0)} back after attending
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Fixed Bottom CTA */}
      <div className="fixed bottom-0 left-0 right-0 p-4 glass border-t border-white/5">
        {selectedTicket ? (
          <div className="flex items-center gap-3">
            <div className="flex-1">
              <p className="text-sm text-gray-400">{selectedTierData?.name} Ticket</p>
              <div className="flex items-center gap-2">
                <p className="text-xl font-bold text-white">₹{selectedTierData?.price.toLocaleString()}</p>
                <span className="text-xs text-emerald-400">+₹{earnableCoins} back</span>
              </div>
            </div>
            {showPayment ? (
              <Button variant="primary" className="px-8">
                Pay ₹{Math.round(finalPrice).toLocaleString()}
              </Button>
            ) : (
              <Button variant="primary" onClick={() => setShowPayment(true)}>
                <Ticket className="w-5 h-5 mr-2" />
                Book Now
              </Button>
            )}
          </div>
        ) : (
          <div className="flex items-center gap-3">
            <div className="flex-1">
              <p className="text-sm text-gray-400">Starting from</p>
              <p className="text-xl font-bold text-white">₹{(event.price?.min || 500).toLocaleString()}</p>
            </div>
            <Button variant="secondary" disabled>
              Select a ticket
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default EventDetail;
