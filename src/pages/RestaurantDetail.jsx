import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import {
  ArrowLeft,
  Star,
  MapPin,
  Clock,
  Phone,
  Share2,
  Heart,
  Coins,
  ChevronRight,
  Plus,
  Minus,
  ShoppingBag,
  BadgeCheck,
  Zap,
  Users,
} from 'lucide-react';
import { useWallet } from '../contexts/WalletContext';
import { restaurants, menuItems } from '../data/foodData';
import BookingModal from '../components/food/BookingModal';
import Button from '../components/common/Button';
import Badge from '../components/common/Badge';

const RestaurantDetail = () => {
  const { id } = useParams();
  const { rezCoins } = useWallet();
  const [activeSection, setActiveSection] = useState('menu');
  const [cart, setCart] = useState([]);
  const [showBooking, setShowBooking] = useState(false);
  const [liked, setLiked] = useState(false);

  const restaurant = restaurants.find((r) => r.id === id);

  if (!restaurant) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-center">
          <p className="text-gray-400 mb-4">Restaurant not found</p>
          <Link to="/food" className="text-emerald-400">
            ← Back to Food & Dining
          </Link>
        </div>
      </div>
    );
  }

  const restaurantMenu = menuItems.filter((item) => item.restaurantId === id);

  const addToCart = (item) => {
    const existingItem = cart.find((c) => c.id === item.id);
    if (existingItem) {
      setCart(cart.map((c) =>
        c.id === item.id ? { ...c, quantity: c.quantity + 1 } : c
      ));
    } else {
      setCart([...cart, { ...item, quantity: 1 }]);
    }
  };

  const removeFromCart = (itemId) => {
    const existingItem = cart.find((c) => c.id === itemId);
    if (existingItem && existingItem.quantity > 1) {
      setCart(cart.map((c) =>
        c.id === itemId ? { ...c, quantity: c.quantity - 1 } : c
      ));
    } else {
      setCart(cart.filter((c) => c.id !== itemId));
    }
  };

  const getItemQuantity = (itemId) => {
    const item = cart.find((c) => c.id === itemId);
    return item ? item.quantity : 0;
  };

  const cartTotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const cartItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const estimatedCashback = (cartTotal * restaurant.cashbackPercent) / 100;
  const coinsEarned = Math.floor(cartTotal / 10);

  return (
    <div className="min-h-screen bg-black pb-32">
      {/* Hero Image */}
      <div className="relative h-56">
        <img
          src={restaurant.image}
          alt={restaurant.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />

        {/* Back button */}
        <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
          <Link to="/food" className="p-2 rounded-full bg-black/50 backdrop-blur-sm">
            <ArrowLeft className="w-5 h-5 text-white" />
          </Link>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setLiked(!liked)}
              className="p-2 rounded-full bg-black/50 backdrop-blur-sm"
            >
              <Heart
                className={`w-5 h-5 ${liked ? 'text-red-500 fill-red-500' : 'text-white'}`}
              />
            </button>
            <button className="p-2 rounded-full bg-black/50 backdrop-blur-sm">
              <Share2 className="w-5 h-5 text-white" />
            </button>
          </div>
        </div>

        {/* Badges */}
        <div className="absolute bottom-4 left-4 flex items-center gap-2">
          {restaurant.is60Min && (
            <span className="flex items-center gap-1 px-2 py-1 rounded-full bg-amber-500 text-xs text-black font-bold">
              <Zap className="w-3 h-3" />
              60 min
            </span>
          )}
          {restaurant.isHalal && (
            <Badge variant="success" size="sm">Halal</Badge>
          )}
          {restaurant.isVeg && (
            <Badge variant="success" size="sm">Pure Veg</Badge>
          )}
        </div>
      </div>

      {/* Restaurant Info */}
      <div className="px-4 -mt-2 relative z-10">
        <div className="p-4 rounded-2xl bg-[#1C1C1E]">
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <div className="flex items-center gap-2">
                <h1 className="text-xl font-bold text-white">{restaurant.name}</h1>
                {restaurant.featured && (
                  <BadgeCheck className="w-5 h-5 text-blue-400" />
                )}
              </div>
              <p className="text-sm text-gray-400 mt-1">
                {restaurant.cuisine.join(' • ')}
              </p>
            </div>
            <div className="flex items-center gap-1 px-2 py-1 rounded-lg bg-emerald-500/20">
              <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
              <span className="text-sm font-medium text-white">{restaurant.rating}</span>
            </div>
          </div>

          {/* Meta */}
          <div className="flex items-center gap-4 mt-3 text-gray-400">
            <div className="flex items-center gap-1">
              <MapPin className="w-4 h-4" />
              <span className="text-sm">{restaurant.distance}</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              <span className="text-sm">{restaurant.deliveryTime}</span>
            </div>
            <span className="text-sm">₹{restaurant.avgCost} for two</span>
          </div>

          {/* Rewards */}
          <div className="flex items-center gap-4 mt-3 pt-3 border-t border-white/10">
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10">
              <span className="text-sm text-emerald-400">
                {restaurant.cashbackPercent}% cashback
              </span>
            </div>
            <div className="flex items-center gap-1 text-amber-400">
              <Coins className="w-4 h-4" />
              <span className="text-sm">Earn ₹{restaurant.coinsEarned} coins</span>
            </div>
          </div>

          {/* Loyalty Progress */}
          {restaurant.loyaltyVisits > 0 && (
            <div className="mt-3 p-3 rounded-xl bg-purple-500/10 border border-purple-500/20">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-purple-400">
                  Loyalty Progress
                </span>
                <span className="text-xs text-gray-400">
                  {restaurant.loyaltyVisits}/{restaurant.loyaltyTarget} visits
                </span>
              </div>
              <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                <div
                  className="h-full bg-purple-500 rounded-full transition-all"
                  style={{
                    width: `${(restaurant.loyaltyVisits / restaurant.loyaltyTarget) * 100}%`,
                  }}
                />
              </div>
              <p className="text-xs text-gray-400 mt-1">
                {restaurant.loyaltyTarget - restaurant.loyaltyVisits} more visits to unlock special reward!
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex gap-3 px-4 mt-4">
        {restaurant.hasDineIn && (
          <Button
            variant="secondary"
            className="flex-1"
            onClick={() => setShowBooking(true)}
          >
            <Users className="w-4 h-4 mr-2" />
            Book Table
          </Button>
        )}
        <Button variant="secondary" className="flex-1">
          <Phone className="w-4 h-4 mr-2" />
          Call
        </Button>
        <Button variant="secondary" className="flex-1">
          <MapPin className="w-4 h-4 mr-2" />
          Directions
        </Button>
      </div>

      {/* Offers */}
      {restaurant.offers && restaurant.offers.length > 0 && (
        <div className="px-4 mt-6">
          <h2 className="font-semibold text-white mb-3">Available Offers</h2>
          <div className="space-y-2">
            {restaurant.offers.map((offer, index) => (
              <div
                key={index}
                className="flex items-center gap-3 p-3 rounded-xl bg-amber-500/10 border border-amber-500/20"
              >
                <span className="text-xl">🎁</span>
                <span className="text-sm text-white flex-1">{offer}</span>
                <ChevronRight className="w-4 h-4 text-gray-500" />
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Section Tabs */}
      <div className="px-4 mt-6">
        <div className="flex gap-2">
          {['menu', 'reviews', 'photos'].map((section) => (
            <button
              key={section}
              onClick={() => setActiveSection(section)}
              className={`px-4 py-2 rounded-full text-sm capitalize ${
                activeSection === section
                  ? 'bg-emerald-500 text-white'
                  : 'bg-white/10 text-gray-400'
              }`}
            >
              {section}
            </button>
          ))}
        </div>
      </div>

      {/* Menu Section */}
      {activeSection === 'menu' && (
        <div className="px-4 mt-4">
          <h2 className="font-semibold text-white mb-3">Menu</h2>
          {restaurantMenu.length > 0 ? (
            <div className="space-y-3">
              {restaurantMenu.map((item) => (
                <div
                  key={item.id}
                  className="flex gap-3 p-3 rounded-xl bg-[#2C2C2E]"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-20 rounded-xl object-cover"
                  />
                  <div className="flex-1">
                    <div className="flex items-start justify-between">
                      <div>
                        <div className="flex items-center gap-2">
                          {item.isVeg ? (
                            <span className="w-4 h-4 border border-green-500 flex items-center justify-center">
                              <span className="w-2 h-2 bg-green-500 rounded-full" />
                            </span>
                          ) : (
                            <span className="w-4 h-4 border border-red-500 flex items-center justify-center">
                              <span className="w-2 h-2 bg-red-500 rounded-full" />
                            </span>
                          )}
                          <h3 className="font-medium text-white">{item.name}</h3>
                        </div>
                        {item.isBestseller && (
                          <span className="text-xs text-amber-400">⭐ Bestseller</span>
                        )}
                      </div>
                    </div>
                    <p className="text-xs text-gray-400 mt-1 line-clamp-2">
                      {item.description}
                    </p>
                    <div className="flex items-center justify-between mt-2">
                      <span className="font-medium text-white">₹{item.price}</span>
                      {getItemQuantity(item.id) === 0 ? (
                        <button
                          onClick={() => addToCart(item)}
                          className="px-4 py-1.5 rounded-lg bg-emerald-500 text-white text-sm font-medium"
                        >
                          Add
                        </button>
                      ) : (
                        <div className="flex items-center gap-3 px-2 py-1 rounded-lg bg-emerald-500">
                          <button onClick={() => removeFromCart(item.id)}>
                            <Minus className="w-4 h-4 text-white" />
                          </button>
                          <span className="text-white font-medium">
                            {getItemQuantity(item.id)}
                          </span>
                          <button onClick={() => addToCart(item)}>
                            <Plus className="w-4 h-4 text-white" />
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="p-8 rounded-2xl bg-[#2C2C2E] text-center">
              <p className="text-gray-400">Menu coming soon</p>
              <p className="text-sm text-gray-500 mt-1">
                Visit the restaurant or call for details
              </p>
            </div>
          )}
        </div>
      )}

      {/* Reviews Section */}
      {activeSection === 'reviews' && (
        <div className="px-4 mt-4">
          <div className="flex items-center justify-between mb-3">
            <h2 className="font-semibold text-white">Reviews</h2>
            <span className="text-sm text-gray-400">{restaurant.reviews} reviews</span>
          </div>
          <div className="p-4 rounded-2xl bg-[#2C2C2E] text-center">
            <div className="flex items-center justify-center gap-1 mb-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  className={`w-6 h-6 ${
                    star <= Math.floor(restaurant.rating)
                      ? 'text-amber-400 fill-amber-400'
                      : 'text-gray-600'
                  }`}
                />
              ))}
            </div>
            <p className="text-2xl font-bold text-white">{restaurant.rating}</p>
            <p className="text-sm text-gray-400">Based on {restaurant.reviews} reviews</p>

            <div className="mt-4 p-3 rounded-xl bg-amber-500/10 border border-amber-500/20">
              <div className="flex items-center justify-center gap-2 text-amber-400">
                <Coins className="w-4 h-4" />
                <span className="text-sm">
                  Write a review & earn ₹{restaurant.reviewBonus} coins!
                </span>
              </div>
            </div>

            <Button variant="primary" fullWidth className="mt-4">
              Write a Review
            </Button>
          </div>
        </div>
      )}

      {/* Photos Section */}
      {activeSection === 'photos' && (
        <div className="px-4 mt-4">
          <h2 className="font-semibold text-white mb-3">Photos</h2>
          <div className="grid grid-cols-3 gap-2">
            <div className="aspect-square rounded-xl overflow-hidden">
              <img
                src={restaurant.image}
                alt="Photo 1"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="aspect-square rounded-xl bg-[#2C2C2E] flex items-center justify-center">
              <span className="text-gray-500">+3</span>
            </div>
          </div>
        </div>
      )}

      {/* Cart Footer */}
      {cartItems > 0 && (
        <div className="fixed bottom-20 left-0 right-0 px-4 z-50">
          <div className="p-4 rounded-2xl bg-emerald-600 shadow-xl">
            <div className="flex items-center justify-between">
              <div>
                <div className="flex items-center gap-2">
                  <ShoppingBag className="w-5 h-5 text-white" />
                  <span className="font-semibold text-white">
                    {cartItems} item{cartItems > 1 ? 's' : ''} • ₹{cartTotal}
                  </span>
                </div>
                <div className="flex items-center gap-2 mt-1">
                  <span className="text-xs text-emerald-200">
                    Cashback: ₹{estimatedCashback.toFixed(0)}
                  </span>
                  <span className="text-xs text-amber-300">
                    +{coinsEarned} coins
                  </span>
                </div>
              </div>
              <Button variant="secondary" size="sm">
                View Cart
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Booking Modal */}
      <BookingModal
        restaurant={restaurant}
        isOpen={showBooking}
        onClose={() => setShowBooking(false)}
      />
    </div>
  );
};

export default RestaurantDetail;
