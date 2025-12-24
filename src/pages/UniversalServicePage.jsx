import { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import {
  ArrowLeft, Heart, Share2, Star, MapPin, Clock, CheckCircle,
  Calendar, Users, Award, Sparkles, Gift, X, Package,
  TrendingUp, Zap, Trophy, ChevronRight, ChevronDown, ChevronUp,
  Phone, Mail, Image as ImageIcon, Play, Info, ShieldCheck,
  Percent, Tag, Timer, AlertCircle, Camera, Upload
} from 'lucide-react';
import { useWallet } from '../contexts/WalletContext';

const UniversalServicePage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { rezCoins, cashbackBalance } = useWallet();

  const [isSaved, setIsSaved] = useState(false);
  const [selectedImage, setSelectedImage] = useState(0);
  const [activeTab, setActiveTab] = useState('description');
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [useCoins, setUseCoins] = useState(false);
  const [coinsToUse, setCoinsToUse] = useState(0);
  const [expandedFaq, setExpandedFaq] = useState(null);

  // Mock service data - can be product, service, or online
  const service = {
    id: id,
    type: 'service', // 'product', 'service', 'online'
    name: 'Hair Spa + Keratin Treatment',
    category: 'Beauty',
    store: 'Glowzy Salon',
    storeType: 'salon',

    images: [
      'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=600',
      'https://images.unsplash.com/photo-1562322140-8baeececf3df?w=600',
      'https://images.unsplash.com/photo-1633681926022-84c23e8cb2d6?w=600'
    ],
    hasVideo: true,

    rating: 4.8,
    reviews: 156,
    verified: true,

    // Pricing
    originalPrice: 2500,
    rezPrice: 1200,
    savings: 1300,

    // Rewards
    coinsEarned: 120,
    cashback: 60,
    extraCoinsOnShare: 25,

    // Service specific
    duration: '90 minutes',
    location: {
      address: 'Glowzy Salon, 45 Indiranagar Main Road, Bangalore',
      distance: '1.8 km',
      mapUrl: '#'
    },

    // Availability
    availableSlots: [
      { time: '10:00 AM', available: true },
      { time: '11:30 AM', available: true },
      { time: '2:00 PM', available: false },
      { time: '4:00 PM', available: true },
      { time: '6:00 PM', available: true }
    ],

    professional: {
      name: 'Priya Sharma',
      experience: '8 years',
      rating: 4.9,
      specialization: 'Hair Care Expert'
    },

    // Details
    description: 'Revitalize your hair with our signature Hair Spa combined with premium Keratin Treatment. This luxurious treatment deeply nourishes, repairs damage, and leaves your hair silky smooth and frizz-free for weeks.',

    whatsIncluded: [
      'Deep cleansing shampoo',
      'Scalp massage (15 mins)',
      'Hair mask treatment',
      'Keratin smoothing therapy',
      'Blow dry and styling',
      'Complimentary head massage'
    ],

    benefits: [
      'Reduces frizz up to 80%',
      'Adds natural shine',
      'Repairs damaged hair',
      'Results last 4-6 weeks',
      'Safe for colored hair'
    ],

    // AI Insight
    aiInsight: {
      message: 'You usually book salon services once a month — this saves you ₹1,300 compared to regular price.',
      subMessage: 'High demand slot — book now to secure your preferred time.',
      confidence: 'high'
    },

    // Loyalty
    loyalty: {
      current: 3,
      total: 5,
      nextReward: 'Free Hair Spa Session',
      brandCoinsEarned: 360
    },

    // Reviews
    topReviews: [
      {
        id: 1,
        user: 'Anjali Reddy',
        rating: 5,
        date: '3 days ago',
        comment: 'Amazing service! My hair feels so soft and smooth. Priya was very professional. Earned ₹60 cashback too!',
        verified: true,
        helpful: 18,
        images: ['https://images.unsplash.com/photo-1560066984-138dadb4c035?w=200']
      },
      {
        id: 2,
        user: 'Kavita Singh',
        rating: 5,
        date: '1 week ago',
        comment: 'Best keratin treatment I\'ve had. Results lasted over 5 weeks. Worth every penny!',
        verified: true,
        helpful: 12
      }
    ],

    // UGC
    userPhotos: [
      { user: 'Meera', image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=150', coins: 60 },
      { user: 'Pooja', image: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?w=150', coins: 60 },
      { user: 'Sneha', image: 'https://images.unsplash.com/photo-1633681926022-84c23e8cb2d6?w=150', coins: 60 }
    ],

    // Related services
    relatedServices: [
      {
        id: 2,
        name: 'Premium Facial',
        price: 800,
        originalPrice: 1200,
        cashback: 40,
        image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=200',
        duration: '60 min'
      },
      {
        id: 3,
        name: 'Manicure + Pedicure',
        price: 600,
        originalPrice: 900,
        cashback: 30,
        image: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?w=200',
        duration: '45 min'
      }
    ],

    // Urgency
    urgency: {
      type: 'limited_slots',
      message: 'Only 3 slots left today',
      icon: '🔥'
    }
  };

  const maxCoinsUsable = Math.min(rezCoins, Math.floor(service.rezPrice * 0.5)); // Max 50% with coins
  const finalPrice = useCoins ? service.rezPrice - (coinsToUse / 100) : service.rezPrice;

  const handleBookNow = () => {
    if (service.type === 'service' && !selectedSlot) {
      alert('Please select a time slot');
      return;
    }

    navigate(`/checkout/service/${id}`, {
      state: {
        service,
        selectedSlot,
        useCoins,
        coinsToUse,
        finalPrice
      }
    });
  };

  const handleUploadBill = () => {
    navigate('/upload-bill', { state: { service } });
  };

  return (
    <div className="min-h-screen bg-rez-gray-50 dark:bg-dark-900 pb-32">
      {/* 🔝 TOP BAR */}
      <div className="sticky top-0 z-50 bg-white/90 dark:bg-dark-800/90 backdrop-blur-lg border-b border-rez-gray-200 dark:border-dark-700">
        <div className="flex items-center justify-between px-4 py-3">
          <button
            onClick={() => navigate(-1)}
            className="p-2 rounded-full bg-rez-gray-100 dark:bg-dark-700 active:scale-95 transition-all"
          >
            <ArrowLeft className="w-5 h-5 text-rez-navy dark:text-white" />
          </button>

          <div className="flex items-center gap-2">
            {/* Wallet Pill */}
            <Link
              to="/wallet"
              className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-gradient-to-r from-amber-500/20 to-emerald-500/20 border border-amber-500/30"
            >
              <span className="text-sm">🪙</span>
              <span className="text-sm font-semibold text-amber-400">{rezCoins}</span>
              <span className="text-xs text-rez-gray-600 dark:text-gray-400">|</span>
              <span className="text-sm font-semibold text-emerald-400">₹{cashbackBalance}</span>
            </Link>

            <button
              onClick={() => setIsSaved(!isSaved)}
              className={`p-2 rounded-full transition-all active:scale-95 ${
                isSaved ? 'bg-pink-500/20' : 'bg-rez-gray-100 dark:bg-dark-700'
              }`}
            >
              <Heart className={`w-5 h-5 ${
                isSaved ? 'text-pink-500 fill-pink-500' : 'text-rez-navy dark:text-white'
              }`} />
            </button>

            <button className="p-2 rounded-full bg-rez-gray-100 dark:bg-dark-700 active:scale-95 transition-all">
              <Share2 className="w-5 h-5 text-rez-navy dark:text-white" />
            </button>
          </div>
        </div>
      </div>

      <div className="px-4 py-4 space-y-4">
        {/* 🖼 HERO SECTION */}
        <div className="rounded-2xl overflow-hidden bg-white dark:bg-dark-800 border border-rez-gray-200 dark:border-dark-700">
          <div className="relative aspect-video bg-rez-gray-50 dark:bg-dark-700">
            <img
              src={service.images[selectedImage]}
              alt={service.name}
              className="w-full h-full object-cover"
            />

            {/* Badges */}
            <div className="absolute top-4 left-4 flex flex-col gap-2">
              {service.verified && (
                <div className="px-3 py-1 rounded-full bg-emerald-500/90 backdrop-blur-sm flex items-center gap-1">
                  <CheckCircle className="w-3 h-3 text-white" />
                  <span className="text-xs font-semibold text-white">Verified on ReZ</span>
                </div>
              )}
            </div>

            {/* Urgency */}
            {service.urgency && (
              <div className="absolute top-4 right-4">
                <div className="px-3 py-1 rounded-full bg-red-500/90 backdrop-blur-sm">
                  <span className="text-xs font-semibold text-white">{service.urgency.icon} {service.urgency.message}</span>
                </div>
              </div>
            )}

            {/* Rating */}
            <div className="absolute bottom-4 left-4 px-3 py-1.5 rounded-full bg-white/90 dark:bg-black/60 backdrop-blur-sm flex items-center gap-1">
              <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
              <span className="text-sm font-bold text-rez-navy dark:text-white">{service.rating}</span>
              <span className="text-xs text-rez-gray-600 dark:text-gray-400">({service.reviews})</span>
            </div>

            {service.hasVideo && (
              <div className="absolute bottom-4 right-4 p-2 rounded-full bg-black/60 backdrop-blur-sm">
                <Play className="w-5 h-5 text-white" />
              </div>
            )}
          </div>

          {/* Thumbnails */}
          <div className="flex gap-2 p-4 overflow-x-auto hide-scrollbar">
            {service.images.map((img, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedImage(idx)}
                className={`flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 transition-all ${
                  selectedImage === idx
                    ? 'border-rez-green-500 scale-105'
                    : 'border-rez-gray-200 dark:border-dark-600'
                }`}
              >
                <img src={img} alt="" className="w-full h-full object-cover" />
              </button>
            ))}
            {service.hasVideo && (
              <button className="flex-shrink-0 w-16 h-16 rounded-lg bg-rez-gray-100 dark:bg-dark-700 flex items-center justify-center border-2 border-rez-gray-200 dark:border-dark-600">
                <Play className="w-6 h-6 text-rez-navy dark:text-white" />
              </button>
            )}
          </div>
        </div>

        {/* 🏷 TITLE & CATEGORY */}
        <div className="p-4 rounded-2xl bg-white dark:bg-dark-800 border border-rez-gray-200 dark:border-dark-700">
          <div className="flex items-start justify-between mb-2">
            <div className="flex-1">
              <p className="text-xs text-rez-gray-600 dark:text-gray-400 mb-1">
                {service.category} · {service.store}
              </p>
              <h1 className="text-xl font-bold text-rez-navy dark:text-white leading-tight mb-2">
                {service.name}
              </h1>
              {service.duration && (
                <div className="flex items-center gap-4 text-sm text-rez-gray-700 dark:text-gray-300">
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4 text-rez-green-500" />
                    <span>{service.duration}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin className="w-4 h-4 text-rez-green-500" />
                    <span>{service.location.distance} away</span>
                  </div>
                </div>
              )}
            </div>
          </div>

          {service.professional && (
            <div className="mt-3 p-3 rounded-xl bg-blue-500/10 border border-blue-500/20">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 font-bold text-lg">
                  {service.professional.name[0]}
                </div>
                <div className="flex-1">
                  <p className="text-sm font-semibold text-rez-navy dark:text-white">{service.professional.name}</p>
                  <p className="text-xs text-rez-gray-600 dark:text-gray-400">{service.professional.specialization}</p>
                  <div className="flex items-center gap-2 mt-1">
                    <Star className="w-3 h-3 text-amber-400 fill-amber-400" />
                    <span className="text-xs font-semibold text-amber-400">{service.professional.rating}</span>
                    <span className="text-xs text-rez-gray-600 dark:text-gray-400">• {service.professional.experience}</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* 💰 PRICE + SAVINGS */}
        <div className="p-4 rounded-2xl bg-gradient-to-br from-emerald-500/10 via-green-500/10 to-amber-500/10 border border-emerald-500/20">
          <div className="flex items-start justify-between mb-3">
            <div>
              <p className="text-xs text-rez-gray-600 dark:text-gray-400 mb-1">Original Price</p>
              <p className="text-lg text-rez-gray-500 dark:text-gray-400 line-through">₹{service.originalPrice.toLocaleString()}</p>
            </div>
            <div className="text-right">
              <p className="text-xs text-emerald-500 mb-1">ReZ Price</p>
              <p className="text-3xl font-bold text-rez-navy dark:text-white">₹{service.rezPrice.toLocaleString()}</p>
            </div>
          </div>

          <div className="p-3 rounded-xl bg-white/50 dark:bg-black/20 mb-3">
            <div className="flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-emerald-500" />
              <span className="text-lg font-bold text-emerald-500">You Save ₹{service.savings.toLocaleString()}</span>
              <span className="text-sm text-rez-gray-600 dark:text-gray-400">
                ({Math.round((service.savings / service.originalPrice) * 100)}% off)
              </span>
            </div>
          </div>

          {/* Rewards */}
          <div className="space-y-2">
            <p className="text-xs font-semibold text-rez-gray-700 dark:text-gray-300 mb-2">Rewards you'll earn:</p>
            <div className="flex items-center justify-between p-2 rounded-lg bg-amber-500/20 border border-amber-500/30">
              <div className="flex items-center gap-2">
                <span className="text-lg">🪙</span>
                <span className="text-sm font-semibold text-amber-400">ReZ Coins</span>
              </div>
              <span className="text-lg font-bold text-amber-400">{service.coinsEarned}</span>
            </div>
            <div className="flex items-center justify-between p-2 rounded-lg bg-emerald-500/20 border border-emerald-500/30">
              <div className="flex items-center gap-2">
                <span className="text-lg">💸</span>
                <span className="text-sm font-semibold text-emerald-400">Cashback</span>
              </div>
              <span className="text-lg font-bold text-emerald-400">₹{service.cashback}</span>
            </div>
            {service.extraCoinsOnShare > 0 && (
              <div className="flex items-center justify-between p-2 rounded-lg bg-purple-500/20 border border-purple-500/30">
                <div className="flex items-center gap-2">
                  <Share2 className="w-4 h-4 text-purple-400" />
                  <span className="text-sm font-semibold text-purple-400">Bonus on Sharing</span>
                </div>
                <span className="text-sm font-bold text-purple-400">+{service.extraCoinsOnShare} coins</span>
              </div>
            )}
          </div>
        </div>

        {/* 🧠 AI INSIGHT */}
        {service.aiInsight && (
          <div className="p-4 rounded-2xl bg-gradient-to-br from-purple-500/10 to-blue-500/10 border border-purple-500/20">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center flex-shrink-0">
                <Sparkles className="w-5 h-5 text-purple-400" />
              </div>
              <div className="flex-1">
                <h3 className="text-sm font-semibold text-purple-400 mb-1 flex items-center gap-2">
                  AI Smart Deal Insight
                  <span className="text-xs px-2 py-0.5 rounded-full bg-purple-500/20">High Confidence</span>
                </h3>
                <p className="text-sm text-rez-navy dark:text-white mb-1">{service.aiInsight.message}</p>
                <p className="text-xs text-rez-gray-600 dark:text-gray-400">{service.aiInsight.subMessage}</p>
              </div>
            </div>
          </div>
        )}

        {/* 📅 AVAILABLE SLOTS (for services) */}
        {service.type === 'service' && service.availableSlots && (
          <div className="p-4 rounded-2xl bg-white dark:bg-dark-800 border border-rez-gray-200 dark:border-dark-700">
            <h2 className="text-lg font-bold text-rez-navy dark:text-white mb-3 flex items-center gap-2">
              <Calendar className="w-5 h-5 text-rez-green-500" />
              Choose Time Slot
            </h2>
            <div className="grid grid-cols-3 gap-2">
              {service.availableSlots.map((slot, idx) => (
                <button
                  key={idx}
                  onClick={() => slot.available && setSelectedSlot(slot.time)}
                  disabled={!slot.available}
                  className={`p-3 rounded-xl border-2 transition-all text-sm font-semibold ${
                    selectedSlot === slot.time
                      ? 'border-rez-green-500 bg-rez-green-500/20 text-rez-green-500'
                      : slot.available
                      ? 'border-rez-gray-200 dark:border-dark-600 text-rez-navy dark:text-white hover:border-rez-green-500/50'
                      : 'border-rez-gray-200 dark:border-dark-600 text-rez-gray-400 dark:text-gray-600 cursor-not-allowed opacity-50'
                  }`}
                >
                  <div className="flex items-center justify-center gap-1">
                    <Clock className="w-3 h-3" />
                    <span>{slot.time}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* 🪙 PAY WITH REZ */}
        <div className="p-4 rounded-2xl bg-gradient-to-br from-amber-500/10 to-orange-500/10 border border-amber-500/20">
          <h2 className="text-lg font-bold text-rez-navy dark:text-white mb-3 flex items-center gap-2">
            <span className="text-xl">🪙</span>
            Pay with ReZ Coins
          </h2>

          <div className="p-3 rounded-xl bg-white dark:bg-dark-700 mb-3">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-rez-gray-600 dark:text-gray-400">Your Coins</span>
              <span className="text-lg font-bold text-amber-400">{rezCoins} coins</span>
            </div>
            <div className="flex items-center justify-between text-xs text-rez-gray-600 dark:text-gray-400">
              <span>Max usable (50%)</span>
              <span>{maxCoinsUsable} coins = ₹{(maxCoinsUsable / 100).toFixed(0)}</span>
            </div>
          </div>

          <div className="space-y-2 mb-3">
            <button
              onClick={() => {
                setUseCoins(!useCoins);
                if (!useCoins) setCoinsToUse(maxCoinsUsable);
                else setCoinsToUse(0);
              }}
              className={`w-full p-3 rounded-xl border-2 transition-all ${
                useCoins
                  ? 'border-amber-500 bg-amber-500/20'
                  : 'border-rez-gray-200 dark:border-dark-600'
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="text-sm font-semibold text-rez-navy dark:text-white">Use Maximum Coins</span>
                <div className={`w-5 h-5 rounded border-2 flex items-center justify-center ${
                  useCoins ? 'border-amber-500 bg-amber-500' : 'border-rez-gray-300 dark:border-gray-600'
                }`}>
                  {useCoins && <CheckCircle className="w-4 h-4 text-white" />}
                </div>
              </div>
            </button>
          </div>

          {useCoins && (
            <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20">
              <div className="flex items-center justify-between">
                <span className="text-sm text-rez-gray-700 dark:text-gray-300">Final Price</span>
                <div className="text-right">
                  <p className="text-xs text-rez-gray-500 dark:text-gray-400 line-through">₹{service.rezPrice}</p>
                  <p className="text-xl font-bold text-emerald-500">₹{finalPrice.toFixed(0)}</p>
                </div>
              </div>
            </div>
          )}

          <p className="text-xs text-center text-rez-gray-600 dark:text-gray-400 mt-3">
            💡 Coins auto-apply for maximum savings
          </p>
        </div>

        {/* 🎯 LOYALTY PROGRESS */}
        {service.loyalty && (
          <div className="p-4 rounded-2xl bg-gradient-to-br from-pink-500/10 to-purple-500/10 border border-pink-500/20">
            <h2 className="text-lg font-bold text-rez-navy dark:text-white mb-3 flex items-center gap-2">
              <Trophy className="w-5 h-5 text-pink-500" />
              Your Loyalty Progress
            </h2>

            <div className="mb-3">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-rez-gray-700 dark:text-gray-300">Visits</span>
                <span className="text-sm font-bold text-rez-navy dark:text-white">
                  {service.loyalty.current} / {service.loyalty.total}
                </span>
              </div>
              <div className="h-2 bg-rez-gray-200 dark:bg-dark-600 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-pink-500 to-purple-500 rounded-full transition-all"
                  style={{ width: `${(service.loyalty.current / service.loyalty.total) * 100}%` }}
                />
              </div>
            </div>

            <div className="p-3 rounded-xl bg-white/50 dark:bg-black/20">
              <p className="text-xs text-rez-gray-600 dark:text-gray-400 mb-1">Next Reward</p>
              <p className="text-sm font-bold text-rez-navy dark:text-white">{service.loyalty.nextReward}</p>
            </div>

            <div className="mt-3 flex items-center justify-between p-2 rounded-lg bg-amber-500/20">
              <span className="text-sm text-amber-400">Brand Coins Earned</span>
              <span className="text-sm font-bold text-amber-400">{service.loyalty.brandCoinsEarned} 🪙</span>
            </div>
          </div>
        )}

        {/* 📋 DETAILS TABS */}
        <div className="rounded-2xl bg-white dark:bg-dark-800 border border-rez-gray-200 dark:border-dark-700 overflow-hidden">
          <div className="flex border-b border-rez-gray-200 dark:border-dark-700 overflow-x-auto hide-scrollbar">
            {['description', 'whats-included', 'reviews', 'how-rez-works'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`flex-1 min-w-[100px] px-4 py-3 text-sm font-semibold capitalize whitespace-nowrap transition-all ${
                  activeTab === tab
                    ? 'text-rez-green-500 border-b-2 border-rez-green-500'
                    : 'text-rez-gray-600 dark:text-gray-400'
                }`}
              >
                {tab.replace('-', ' ')}
              </button>
            ))}
          </div>

          <div className="p-4">
            {activeTab === 'description' && (
              <div>
                <p className="text-sm text-rez-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                  {service.description}
                </p>
                {service.benefits && (
                  <div>
                    <h3 className="text-sm font-bold text-rez-navy dark:text-white mb-2">Benefits</h3>
                    <div className="space-y-2">
                      {service.benefits.map((benefit, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-rez-gray-700 dark:text-gray-300">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}

            {activeTab === 'whats-included' && service.whatsIncluded && (
              <div className="space-y-2">
                {service.whatsIncluded.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2 p-2 rounded-lg bg-rez-gray-50 dark:bg-dark-700">
                    <CheckCircle className="w-4 h-4 text-rez-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-rez-gray-700 dark:text-gray-300">{item}</span>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'reviews' && (
              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-rez-gray-50 dark:bg-dark-700">
                  <div className="flex items-center gap-4">
                    <div className="text-center">
                      <p className="text-4xl font-bold text-rez-navy dark:text-white">{service.rating}</p>
                      <div className="flex items-center gap-1 mt-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
                        ))}
                      </div>
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-semibold text-rez-navy dark:text-white mb-1">
                        {service.reviews} verified reviews
                      </p>
                      <p className="text-xs text-rez-gray-600 dark:text-gray-400">
                        Rated by verified ReZ users only
                      </p>
                    </div>
                  </div>
                </div>

                {service.topReviews.map((review) => (
                  <div key={review.id} className="pb-4 border-b border-rez-gray-100 dark:border-dark-700 last:border-0">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-full bg-rez-green-500 flex items-center justify-center text-white font-bold">
                        {review.user[0]}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <p className="text-sm font-semibold text-rez-navy dark:text-white">{review.user}</p>
                          {review.verified && <CheckCircle className="w-4 h-4 text-emerald-500" />}
                        </div>
                        <div className="flex items-center gap-2 mb-2">
                          <div className="flex items-center gap-0.5">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={`w-3 h-3 ${
                                  i < review.rating ? 'text-amber-400 fill-amber-400' : 'text-rez-gray-300 dark:text-gray-600'
                                }`}
                              />
                            ))}
                          </div>
                          <span className="text-xs text-rez-gray-600 dark:text-gray-400">{review.date}</span>
                        </div>
                        <p className="text-sm text-rez-gray-700 dark:text-gray-300 mb-2">{review.comment}</p>
                        {review.images && review.images.length > 0 && (
                          <div className="flex gap-2 mb-2">
                            {review.images.map((img, idx) => (
                              <img key={idx} src={img} alt="" className="w-20 h-20 rounded-lg object-cover" />
                            ))}
                          </div>
                        )}
                        <button className="text-xs text-rez-gray-600 dark:text-gray-400 flex items-center gap-1">
                          <Trophy className="w-3 h-3" />
                          Helpful ({review.helpful})
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'how-rez-works' && (
              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20">
                  <h3 className="text-sm font-bold text-emerald-400 mb-3">How it works</h3>
                  <div className="space-y-3">
                    {['Book your service on ReZ', 'Visit the store at your slot', 'Show ReZ booking confirmation', 'Enjoy service & earn rewards automatically'].map((step, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center flex-shrink-0">
                          <span className="text-xs font-bold text-emerald-400">{idx + 1}</span>
                        </div>
                        <p className="text-sm text-rez-gray-700 dark:text-gray-300">{step}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* 📸 SOCIAL & UGC */}
        {service.userPhotos && service.userPhotos.length > 0 && (
          <div className="p-4 rounded-2xl bg-white dark:bg-dark-800 border border-rez-gray-200 dark:border-dark-700">
            <h2 className="text-lg font-bold text-rez-navy dark:text-white mb-3">People Who Used This</h2>
            <div className="flex gap-3 overflow-x-auto hide-scrollbar">
              {service.userPhotos.map((photo, idx) => (
                <div key={idx} className="flex-shrink-0 w-32">
                  <div className="relative rounded-xl overflow-hidden mb-2">
                    <img src={photo.image} alt={photo.user} className="w-full h-32 object-cover" />
                    <div className="absolute bottom-2 left-2 px-2 py-0.5 rounded-full bg-amber-500/90 backdrop-blur-sm">
                      <span className="text-xs font-semibold text-white">🪙 {photo.coins}</span>
                    </div>
                  </div>
                  <p className="text-xs font-semibold text-rez-navy dark:text-white text-center">{photo.user}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 🔁 RELATED SERVICES */}
        {service.relatedServices && service.relatedServices.length > 0 && (
          <div>
            <h2 className="text-lg font-bold text-rez-navy dark:text-white mb-3 px-1">You May Also Like</h2>
            <div className="flex gap-3 overflow-x-auto hide-scrollbar pb-2">
              {service.relatedServices.map((item) => (
                <Link
                  key={item.id}
                  to={`/service/${item.id}`}
                  className="flex-shrink-0 w-40 p-3 rounded-2xl bg-white dark:bg-dark-800 border border-rez-gray-200 dark:border-dark-700 hover:border-rez-green-500 dark:hover:border-emerald-500 transition-all active:scale-95"
                >
                  <img src={item.image} alt={item.name} className="w-full h-32 object-cover rounded-xl mb-2" />
                  <h3 className="text-sm font-semibold text-rez-navy dark:text-white mb-1 line-clamp-2">{item.name}</h3>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm font-bold text-rez-navy dark:text-white">₹{item.price.toLocaleString()}</span>
                    <span className="text-xs text-emerald-500">💰 ₹{item.cashback}</span>
                  </div>
                  {item.duration && (
                    <p className="text-xs text-rez-gray-600 dark:text-gray-400">⏱ {item.duration}</p>
                  )}
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* 🏁 END MESSAGE */}
        <div className="p-6 rounded-2xl bg-gradient-to-br from-rez-green-500/10 to-emerald-500/10 border border-rez-green-500/20 text-center">
          <p className="text-sm text-rez-gray-700 dark:text-gray-300 font-medium">
            Smart people don't just buy — they <span className="text-rez-green-500 font-bold">earn while buying.</span>
            <br />
            <span className="text-emerald-500 font-bold">That's ReZ.</span> ✨
          </p>
        </div>
      </div>

      {/* 🔘 STICKY BOTTOM BAR */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-white/90 dark:bg-dark-800/90 backdrop-blur-lg border-t border-rez-gray-200 dark:border-dark-700 z-40">
        <div className="flex items-center gap-3">
          <div className="flex-1">
            <p className="text-xs text-rez-gray-600 dark:text-gray-400">
              {useCoins ? 'Final Price' : 'ReZ Price'}
            </p>
            <p className="text-xl font-bold text-rez-navy dark:text-white">
              ₹{useCoins ? finalPrice.toFixed(0) : service.rezPrice.toLocaleString()}
            </p>
            <p className="text-xs text-emerald-500">
              💸 Earn ₹{service.cashback} + 🪙 {service.coinsEarned}
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <button
              onClick={handleBookNow}
              className="px-6 py-3 rounded-xl bg-rez-green-500 text-white font-bold text-lg active:scale-95 transition-all shadow-lg flex items-center gap-2"
            >
              {service.type === 'service' ? '📅 Book Now' : service.type === 'online' ? '🌐 Proceed & Earn' : '🛍 Buy Now'}
            </button>

            <button
              onClick={handleUploadBill}
              className="px-4 py-2 rounded-lg bg-rez-gray-100 dark:bg-dark-700 text-rez-navy dark:text-white text-sm font-semibold active:scale-95 transition-all flex items-center justify-center gap-2"
            >
              <Upload className="w-4 h-4" />
              Upload Bill
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UniversalServicePage;
