import { Link } from 'react-router-dom';
import { ChevronRight, Percent, Store, Package } from 'lucide-react';

const ProgramOffersSection = ({ program }) => {
  // Sample data - in real app, this would come from props or API
  const programData = {
    'student-zone': {
      title: 'Student Zone Exclusive Offers',
      subtitle: 'Special discounts for verified students',
      icon: '🎓',
      color: 'from-blue-500 to-purple-500',
      bgColor: 'from-blue-500/10 to-purple-500/10',
      offers: [
        {
          id: 1,
          type: 'product',
          name: 'Apple MacBook Air M2',
          store: 'Apple Education Store',
          originalPrice: 114900,
          discountedPrice: 99900,
          discount: 15,
          image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400',
          badge: 'Student Special',
          verified: true
        },
        {
          id: 2,
          type: 'store',
          name: 'Zomato Gold',
          store: 'Food & Dining',
          originalPrice: 999,
          discountedPrice: 499,
          discount: 50,
          image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400',
          badge: 'Membership',
          verified: true
        },
        {
          id: 3,
          type: 'product',
          name: 'Nike Air Force 1',
          store: 'Nike Student Discount',
          originalPrice: 7999,
          discountedPrice: 6399,
          discount: 20,
          image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400',
          badge: 'Fashion',
          verified: true
        },
        {
          id: 4,
          type: 'offer',
          name: 'Spotify Premium Student',
          store: 'Music Streaming',
          originalPrice: 119,
          discountedPrice: 59,
          discount: 50,
          image: 'https://images.unsplash.com/photo-1614680376593-902f74cf0d41?w=400',
          badge: 'Monthly',
          verified: true
        },
      ]
    },
    'corporate-perks': {
      title: 'Corporate Employee Perks',
      subtitle: 'Exclusive benefits for verified employees',
      icon: '💼',
      color: 'from-gray-500 to-slate-600',
      bgColor: 'from-gray-500/10 to-slate-500/10',
      offers: [
        {
          id: 1,
          type: 'product',
          name: 'Dell XPS 13 Laptop',
          store: 'Dell Corporate Store',
          originalPrice: 134999,
          discountedPrice: 114999,
          discount: 15,
          image: 'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=400',
          badge: 'Tech',
          verified: true
        },
        {
          id: 2,
          type: 'offer',
          name: 'Cult.fit Pro Membership',
          store: 'Fitness & Wellness',
          originalPrice: 15000,
          discountedPrice: 9999,
          discount: 33,
          image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=400',
          badge: 'Annual',
          verified: true
        },
        {
          id: 3,
          type: 'store',
          name: 'Amazon Prime',
          store: 'Shopping & Entertainment',
          originalPrice: 1499,
          discountedPrice: 999,
          discount: 33,
          image: 'https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?w=400',
          badge: 'Yearly',
          verified: true
        },
        {
          id: 4,
          type: 'product',
          name: 'Noise ColorFit Pro 4',
          store: 'Wearables',
          originalPrice: 4999,
          discountedPrice: 3499,
          discount: 30,
          image: 'https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?w=400',
          badge: 'Smartwatch',
          verified: true
        },
      ]
    },
    'women-exclusive': {
      title: 'Women Exclusive Offers',
      subtitle: 'Curated deals for women',
      icon: '👗',
      color: 'from-pink-500 to-rose-500',
      bgColor: 'from-pink-500/10 to-rose-500/10',
      offers: [
        {
          id: 1,
          type: 'product',
          name: 'Lakme Makeup Kit',
          store: 'Beauty & Cosmetics',
          originalPrice: 2499,
          discountedPrice: 1749,
          discount: 30,
          image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=400',
          badge: 'Bestseller',
          verified: true
        },
        {
          id: 2,
          type: 'product',
          name: 'Titan Raga Watch',
          store: 'Accessories',
          originalPrice: 8995,
          discountedPrice: 6296,
          discount: 30,
          image: 'https://images.unsplash.com/photo-1524805444758-089113d48a6d?w=400',
          badge: 'Luxury',
          verified: true
        },
        {
          id: 3,
          type: 'offer',
          name: 'Nykaa Beauty Bonus',
          store: 'Skincare & Wellness',
          originalPrice: 5000,
          discountedPrice: 3500,
          discount: 30,
          image: 'https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=400',
          badge: 'Exclusive',
          verified: true
        },
        {
          id: 4,
          type: 'product',
          name: 'FabIndia Ethnic Wear',
          store: 'Fashion',
          originalPrice: 3499,
          discountedPrice: 2449,
          discount: 30,
          image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=400',
          badge: 'Traditional',
          verified: true
        },
      ]
    },
    'senior-citizen': {
      title: 'Senior Citizen Benefits',
      subtitle: 'Special care and discounts for seniors',
      icon: '👴',
      color: 'from-amber-500 to-orange-500',
      bgColor: 'from-amber-500/10 to-orange-500/10',
      offers: [
        {
          id: 1,
          type: 'product',
          name: 'Health Monitoring Kit',
          store: 'Healthcare',
          originalPrice: 3999,
          discountedPrice: 2799,
          discount: 30,
          image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=400',
          badge: 'Medical',
          verified: true
        },
        {
          id: 2,
          type: 'offer',
          name: 'Apollo 247 Consultation',
          store: 'Telemedicine',
          originalPrice: 500,
          discountedPrice: 250,
          discount: 50,
          image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=400',
          badge: 'Healthcare',
          verified: true
        },
        {
          id: 3,
          type: 'store',
          name: 'BigBasket Grocery',
          store: 'Daily Essentials',
          originalPrice: 2000,
          discountedPrice: 1700,
          discount: 15,
          image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?w=400',
          badge: 'Groceries',
          verified: true
        },
        {
          id: 4,
          type: 'product',
          name: 'Comfort Walking Shoes',
          store: 'Footwear',
          originalPrice: 2999,
          discountedPrice: 2099,
          discount: 30,
          image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400',
          badge: 'Comfort',
          verified: true
        },
      ]
    },
  };

  const data = programData[program] || programData['student-zone'];

  const getTypeIcon = (type) => {
    switch(type) {
      case 'product': return <Package className="w-4 h-4" />;
      case 'store': return <Store className="w-4 h-4" />;
      case 'offer': return <Percent className="w-4 h-4" />;
      default: return <Package className="w-4 h-4" />;
    }
  };

  return (
    <div className="px-4 mb-8">
      {/* Section Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${data.bgColor} flex items-center justify-center text-2xl`}>
            {data.icon}
          </div>
          <div>
            <h2 className="text-lg font-bold text-rez-navy dark:text-white">{data.title}</h2>
            <p className="text-xs text-rez-gray-600 dark:text-gray-400">{data.subtitle}</p>
          </div>
        </div>
        <Link
          to={`/programs/${program}`}
          className="text-sm font-semibold text-rez-green-500 dark:text-emerald-400 flex items-center gap-1 hover:gap-2 transition-all"
        >
          View All
          <ChevronRight className="w-4 h-4" />
        </Link>
      </div>

      {/* Offers Grid */}
      <div className="grid grid-cols-2 gap-3">
        {data.offers.map((offer) => (
          <Link
            key={offer.id}
            to={`/offer/${offer.id}`}
            className="group bg-white dark:bg-[#2C2C2E] rounded-xl overflow-hidden border border-rez-gray-200 dark:border-white/10 hover:shadow-rez-card transition-all"
          >
            {/* Image */}
            <div className="relative aspect-square overflow-hidden">
              <img
                src={offer.image}
                alt={offer.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
              {/* Discount Badge */}
              <div className="absolute top-2 left-2 px-2 py-1 bg-red-500 rounded-lg flex items-center gap-1">
                <Percent className="w-3 h-3 text-white" />
                <span className="text-xs font-bold text-white">{offer.discount}% OFF</span>
              </div>
              {/* Type Badge */}
              <div className="absolute top-2 right-2 p-1.5 bg-white/90 dark:bg-black/90 rounded-lg">
                {getTypeIcon(offer.type)}
              </div>
              {/* Verified Badge */}
              {offer.verified && (
                <div className="absolute bottom-2 right-2 px-2 py-1 bg-emerald-500/90 rounded-full">
                  <span className="text-xs font-semibold text-white">✓ {offer.badge}</span>
                </div>
              )}
            </div>

            {/* Content */}
            <div className="p-3">
              <h3 className="text-sm font-semibold text-rez-navy dark:text-white line-clamp-1 mb-1">
                {offer.name}
              </h3>
              <p className="text-xs text-rez-gray-600 dark:text-gray-400 line-clamp-1 mb-2">
                {offer.store}
              </p>

              {/* Price */}
              <div className="flex items-center gap-2">
                <span className="text-base font-bold text-rez-navy dark:text-white">
                  ₹{offer.discountedPrice.toLocaleString()}
                </span>
                <span className="text-xs text-rez-gray-500 line-through">
                  ₹{offer.originalPrice.toLocaleString()}
                </span>
              </div>

              {/* Savings */}
              <div className="mt-2 text-xs text-emerald-600 dark:text-emerald-400 font-semibold">
                Save ₹{(offer.originalPrice - offer.discountedPrice).toLocaleString()}
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* View All Button */}
      <Link
        to={`/programs/${program}`}
        className={`mt-4 block w-full py-3 rounded-xl bg-gradient-to-r ${data.color} text-white font-semibold text-center hover:shadow-lg transition-all`}
      >
        Explore All {data.title.split(' ')[0]} Offers →
      </Link>
    </div>
  );
};

export default ProgramOffersSection;
