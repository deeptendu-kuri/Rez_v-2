import { MapPin, Truck, Store, Coins } from 'lucide-react';
import { Link } from 'react-router-dom';

const hotItems = [
  {
    id: 1,
    name: 'Nike Air Max 90',
    store: 'Nike Store',
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400',
    offer: '20% Cashback',
    type: 'offline',
    distance: '1.2 km',
    price: 6999,
    coins: 1400
  },
  {
    id: 2,
    name: 'iPhone 15 Pro',
    store: 'Apple Store',
    image: 'https://images.unsplash.com/photo-1678685888221-cda773a3dcdb?w=400',
    offer: '15% Cashback',
    type: 'online',
    deliveryTime: '45 mins',
    price: 129900,
    coins: 19485
  },
  {
    id: 3,
    name: 'Chicken Biryani',
    store: 'Paradise Biryani',
    image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=400',
    offer: 'Flat ₹100 Off',
    type: 'offline',
    distance: '800 m',
    price: 350,
    coins: 35
  },
  {
    id: 4,
    name: 'MacBook Pro M3',
    store: 'Croma',
    image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400',
    offer: '10% Cashback',
    type: 'online',
    deliveryTime: '60 mins',
    price: 199000,
    coins: 19900
  },
];

const WhatsHotNearYou = () => {
  return (
    <div className="px-4 py-4">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-h3 font-poppins text-rez-navy dark:text-white">
          What's Hot Near You
        </h2>
        <Link to="/explore/trending" className="text-sm font-medium text-rez-green-500">
          View All
        </Link>
      </div>

      <div className="grid grid-cols-2 gap-3">
        {hotItems.map((item) => (
          <Link
            key={item.id}
            to={`/explore/product/${item.id}`}
            className="block bg-white dark:bg-white/10 border border-rez-gray-200 dark:border-white/10 rounded-2xl overflow-hidden shadow-sm dark:shadow-none hover:shadow-md dark:hover:border-white/20 transition-all active:scale-[0.98]"
          >
            {/* Image */}
            <div className="relative aspect-square">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-full object-cover"
              />
              {/* Offer Badge */}
              <div className="absolute top-2 left-2 px-2 py-1 rounded-full bg-red-500 text-white text-[10px] font-bold">
                {item.offer}
              </div>
              {/* Type Badge */}
              <div className="absolute top-2 right-2 flex items-center gap-1 px-2 py-1 rounded-full bg-black/60 backdrop-blur-sm">
                {item.type === 'offline' ? (
                  <>
                    <Store className="w-3 h-3 text-white" />
                    <span className="text-[10px] text-white">{item.distance}</span>
                  </>
                ) : (
                  <>
                    <Truck className="w-3 h-3 text-white" />
                    <span className="text-[10px] text-white">{item.deliveryTime}</span>
                  </>
                )}
              </div>
            </div>

            {/* Content */}
            <div className="p-3">
              <p className="text-xs text-rez-gray-600 dark:text-gray-400 mb-1">
                {item.store}
              </p>
              <h3 className="text-sm font-semibold text-rez-navy dark:text-white line-clamp-2 mb-2">
                {item.name}
              </h3>
              <div className="flex items-center justify-between">
                <span className="text-lg font-bold text-rez-navy dark:text-white">
                  ₹{item.price.toLocaleString()}
                </span>
                <div className="flex items-center gap-1 text-amber-500">
                  <Coins className="w-3.5 h-3.5" />
                  <span className="text-xs font-semibold">₹{item.coins}</span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default WhatsHotNearYou;
