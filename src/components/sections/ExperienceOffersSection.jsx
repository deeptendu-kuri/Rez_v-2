import { Link } from 'react-router-dom';
import { ChevronRight, Percent, Star, TrendingUp } from 'lucide-react';

const ExperienceOffersSection = ({ experience }) => {
  // Sample data - in real app, this would come from props or API
  const experienceData = {
    'luxury': {
      title: 'Luxury Store',
      subtitle: 'Premium brands & exclusive collections',
      icon: '💎',
      color: 'from-purple-500 to-pink-500',
      bgColor: 'from-purple-500/10 to-pink-500/10',
      products: [
        {
          id: 1,
          name: 'Rolex Submariner',
          brand: 'Rolex',
          originalPrice: 850000,
          discountedPrice: 799000,
          discount: 6,
          image: 'https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=400',
          rating: 4.9,
          luxury: true,
          trending: true
        },
        {
          id: 2,
          name: 'Louis Vuitton Handbag',
          brand: 'Louis Vuitton',
          originalPrice: 145000,
          discountedPrice: 135000,
          discount: 7,
          image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=400',
          rating: 4.8,
          luxury: true
        },
        {
          id: 3,
          name: 'Gucci Ace Sneakers',
          brand: 'Gucci',
          originalPrice: 52000,
          discountedPrice: 46800,
          discount: 10,
          image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400',
          rating: 4.7,
          luxury: true
        },
        {
          id: 4,
          name: 'Mont Blanc Pen',
          brand: 'Mont Blanc',
          originalPrice: 35000,
          discountedPrice: 31500,
          discount: 10,
          image: 'https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?w=400',
          rating: 4.9,
          luxury: true,
          trending: true
        },
      ]
    },
    'organic': {
      title: 'Organic Store',
      subtitle: '100% natural & chemical-free products',
      icon: '🌿',
      color: 'from-green-500 to-emerald-500',
      bgColor: 'from-green-500/10 to-emerald-500/10',
      products: [
        {
          id: 1,
          name: 'Organic Quinoa',
          brand: 'Organic India',
          originalPrice: 450,
          discountedPrice: 360,
          discount: 20,
          image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=400',
          rating: 4.6,
          certified: true
        },
        {
          id: 2,
          name: 'Cold Pressed Coconut Oil',
          brand: 'Nature\'s Basket',
          originalPrice: 650,
          discountedPrice: 520,
          discount: 20,
          image: 'https://images.unsplash.com/photo-1601464787169-c8e05ecd8909?w=400',
          rating: 4.7,
          certified: true,
          trending: true
        },
        {
          id: 3,
          name: 'Organic Honey',
          brand: 'Fabelle',
          originalPrice: 550,
          discountedPrice: 440,
          discount: 20,
          image: 'https://images.unsplash.com/photo-1587049352846-4a222e784137?w=400',
          rating: 4.8,
          certified: true
        },
        {
          id: 4,
          name: 'Herbal Tea Collection',
          brand: 'Organic Wellness',
          originalPrice: 350,
          discountedPrice: 280,
          discount: 20,
          image: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=400',
          rating: 4.5,
          certified: true
        },
      ]
    },
    'men': {
      title: 'Men Store',
      subtitle: 'Curated collection for modern men',
      icon: '👔',
      color: 'from-gray-600 to-slate-700',
      bgColor: 'from-gray-500/10 to-slate-500/10',
      products: [
        {
          id: 1,
          name: 'Premium Leather Wallet',
          brand: 'Allen Solly',
          originalPrice: 2499,
          discountedPrice: 1749,
          discount: 30,
          image: 'https://images.unsplash.com/photo-1627123424574-724758594e93?w=400',
          rating: 4.5
        },
        {
          id: 2,
          name: 'Formal Shirt',
          brand: 'Van Heusen',
          originalPrice: 1999,
          discountedPrice: 1399,
          discount: 30,
          image: 'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=400',
          rating: 4.6,
          trending: true
        },
        {
          id: 3,
          name: 'Smart Watch',
          brand: 'Fossil',
          originalPrice: 14995,
          discountedPrice: 10497,
          discount: 30,
          image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400',
          rating: 4.7
        },
        {
          id: 4,
          name: 'Running Shoes',
          brand: 'Nike',
          originalPrice: 6999,
          discountedPrice: 4899,
          discount: 30,
          image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400',
          rating: 4.8,
          trending: true
        },
      ]
    },
    'women': {
      title: 'Women Store',
      subtitle: 'Fashion & lifestyle curated for her',
      icon: '👗',
      color: 'from-pink-500 to-rose-500',
      bgColor: 'from-pink-500/10 to-rose-500/10',
      products: [
        {
          id: 1,
          name: 'Designer Saree',
          brand: 'FabIndia',
          originalPrice: 4999,
          discountedPrice: 3499,
          discount: 30,
          image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=400',
          rating: 4.7,
          trending: true
        },
        {
          id: 2,
          name: 'Handbag Collection',
          brand: 'Baggit',
          originalPrice: 2499,
          discountedPrice: 1749,
          discount: 30,
          image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=400',
          rating: 4.6
        },
        {
          id: 3,
          name: 'Makeup Kit',
          brand: 'Lakme',
          originalPrice: 2999,
          discountedPrice: 2099,
          discount: 30,
          image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=400',
          rating: 4.8
        },
        {
          id: 4,
          name: 'Ethnic Jewelry Set',
          brand: 'Tanishq',
          originalPrice: 15999,
          discountedPrice: 11199,
          discount: 30,
          image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400',
          rating: 4.9,
          trending: true
        },
      ]
    },
    'children': {
      title: 'Children Store',
      subtitle: 'Everything for your little ones',
      icon: '🧸',
      color: 'from-yellow-500 to-amber-500',
      bgColor: 'from-yellow-500/10 to-amber-500/10',
      products: [
        {
          id: 1,
          name: 'Educational Toy Set',
          brand: 'Fisher Price',
          originalPrice: 1999,
          discountedPrice: 1399,
          discount: 30,
          image: 'https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=400',
          rating: 4.7,
          trending: true
        },
        {
          id: 2,
          name: 'Kids Dress Collection',
          brand: 'H&M Kids',
          originalPrice: 1499,
          discountedPrice: 1049,
          discount: 30,
          image: 'https://images.unsplash.com/photo-1503944583220-79d8926ad5e2?w=400',
          rating: 4.5
        },
        {
          id: 3,
          name: 'School Bag',
          brand: 'Wildcraft',
          originalPrice: 1799,
          discountedPrice: 1259,
          discount: 30,
          image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400',
          rating: 4.6
        },
        {
          id: 4,
          name: 'Baby Care Essentials',
          brand: 'Johnson & Johnson',
          originalPrice: 899,
          discountedPrice: 629,
          discount: 30,
          image: 'https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=400',
          rating: 4.8
        },
      ]
    },
    'rental': {
      title: 'Rental Store',
      subtitle: 'Rent premium items, save money',
      icon: '🔄',
      color: 'from-indigo-500 to-blue-500',
      bgColor: 'from-indigo-500/10 to-blue-500/10',
      products: [
        {
          id: 1,
          name: 'Designer Wedding Sherwani',
          brand: 'Rent It Bae',
          originalPrice: 25000,
          discountedPrice: 3999,
          discount: 84,
          image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400',
          rating: 4.8,
          trending: true,
          rental: '3-day rental'
        },
        {
          id: 2,
          name: 'DSLR Camera Kit',
          brand: 'Rent2Own',
          originalPrice: 75000,
          discountedPrice: 1999,
          discount: 97,
          image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=400',
          rating: 4.7,
          rental: 'Weekly rental'
        },
        {
          id: 3,
          name: 'Gaming Console PS5',
          brand: 'Rent Macha',
          originalPrice: 50000,
          discountedPrice: 2499,
          discount: 95,
          image: 'https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?w=400',
          rating: 4.9,
          rental: '10-day rental',
          trending: true
        },
        {
          id: 4,
          name: 'Party Wear Lehenga',
          brand: 'Flyrobe',
          originalPrice: 30000,
          discountedPrice: 4499,
          discount: 85,
          image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=400',
          rating: 4.6,
          rental: '4-day rental'
        },
      ]
    },
    'gifting': {
      title: 'Gifting Store',
      subtitle: 'Perfect gifts for every occasion',
      icon: '🎁',
      color: 'from-red-500 to-pink-500',
      bgColor: 'from-red-500/10 to-pink-500/10',
      products: [
        {
          id: 1,
          name: 'Personalized Photo Frame',
          brand: 'PrintVenue',
          originalPrice: 999,
          discountedPrice: 699,
          discount: 30,
          image: 'https://images.unsplash.com/photo-1513885535751-8b9238bd345a?w=400',
          rating: 4.7,
          customizable: true
        },
        {
          id: 2,
          name: 'Chocolate Gift Hamper',
          brand: 'Cadbury Celebrations',
          originalPrice: 1499,
          discountedPrice: 1049,
          discount: 30,
          image: 'https://images.unsplash.com/photo-1549007994-cb92caebd54b?w=400',
          rating: 4.8,
          trending: true
        },
        {
          id: 3,
          name: 'Customized Mug Set',
          brand: 'Zoomin',
          originalPrice: 799,
          discountedPrice: 559,
          discount: 30,
          image: 'https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=400',
          rating: 4.5,
          customizable: true
        },
        {
          id: 4,
          name: 'Flower Bouquet',
          brand: 'Ferns N Petals',
          originalPrice: 1999,
          discountedPrice: 1399,
          discount: 30,
          image: 'https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=400',
          rating: 4.9,
          trending: true
        },
      ]
    },
    'sample-trial': {
      title: 'Sample/Trial Store',
      subtitle: 'Try before you buy',
      icon: '🧪',
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'from-blue-500/10 to-cyan-500/10',
      products: [
        {
          id: 1,
          name: 'Perfume Sample Kit',
          brand: 'Niche Essence',
          originalPrice: 499,
          discountedPrice: 99,
          discount: 80,
          image: 'https://images.unsplash.com/photo-1541643600914-78b084683601?w=400',
          rating: 4.6,
          sample: '5 samples'
        },
        {
          id: 2,
          name: 'Skincare Trial Set',
          brand: 'Minimalist',
          originalPrice: 999,
          discountedPrice: 299,
          discount: 70,
          image: 'https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=400',
          rating: 4.7,
          sample: '7-day trial',
          trending: true
        },
        {
          id: 3,
          name: 'Coffee Beans Sample Pack',
          brand: 'Blue Tokai',
          originalPrice: 599,
          discountedPrice: 199,
          discount: 67,
          image: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=400',
          rating: 4.8,
          sample: '4 varieties'
        },
        {
          id: 4,
          name: 'Protein Supplement Trial',
          brand: 'MuscleBlaze',
          originalPrice: 799,
          discountedPrice: 249,
          discount: 69,
          image: 'https://images.unsplash.com/photo-1579722820308-d74e571900a9?w=400',
          rating: 4.5,
          sample: '5 servings',
          trending: true
        },
      ]
    },
    '60-min-delivery': {
      title: '60 Min Delivery',
      subtitle: 'Ultra-fast delivery to your doorstep',
      icon: '⚡',
      color: 'from-orange-500 to-red-500',
      bgColor: 'from-orange-500/10 to-red-500/10',
      products: [
        {
          id: 1,
          name: 'Fresh Vegetables Pack',
          brand: 'Dunzo Daily',
          originalPrice: 299,
          discountedPrice: 249,
          discount: 17,
          image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?w=400',
          rating: 4.6,
          delivery: '45 min'
        },
        {
          id: 2,
          name: 'Dairy Products Bundle',
          brand: 'Swiggy Instamart',
          originalPrice: 499,
          discountedPrice: 399,
          discount: 20,
          image: 'https://images.unsplash.com/photo-1628088062854-d1870b4553da?w=400',
          rating: 4.7,
          delivery: '30 min',
          trending: true
        },
        {
          id: 3,
          name: 'Snacks & Beverages',
          brand: 'Zepto',
          originalPrice: 349,
          discountedPrice: 279,
          discount: 20,
          image: 'https://images.unsplash.com/photo-1585636795203-b6c846d61367?w=400',
          rating: 4.5,
          delivery: '50 min'
        },
        {
          id: 4,
          name: 'Personal Care Essentials',
          brand: 'Blinkit',
          originalPrice: 599,
          discountedPrice: 479,
          discount: 20,
          image: 'https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=400',
          rating: 4.8,
          delivery: '40 min',
          trending: true
        },
      ]
    },
  };

  const data = experienceData[experience] || experienceData['luxury'];

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
          to={`/experience/${experience}`}
          className="text-sm font-semibold text-rez-green-500 dark:text-emerald-400 flex items-center gap-1 hover:gap-2 transition-all"
        >
          View All
          <ChevronRight className="w-4 h-4" />
        </Link>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-2 gap-3">
        {data.products.map((product) => (
          <Link
            key={product.id}
            to={`/product/${product.id}`}
            className="group bg-white dark:bg-[#2C2C2E] rounded-xl overflow-hidden border border-rez-gray-200 dark:border-white/10 hover:shadow-rez-card transition-all"
          >
            {/* Image */}
            <div className="relative aspect-square overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
              {/* Discount Badge */}
              <div className="absolute top-2 left-2 px-2 py-1 bg-red-500 rounded-lg flex items-center gap-1">
                <Percent className="w-3 h-3 text-white" />
                <span className="text-xs font-bold text-white">{product.discount}% OFF</span>
              </div>
              {/* Special Badges */}
              {product.trending && (
                <div className="absolute top-2 right-2 p-1.5 bg-orange-500 rounded-lg">
                  <TrendingUp className="w-3 h-3 text-white" />
                </div>
              )}
              {/* Bottom Badge */}
              <div className="absolute bottom-2 right-2 px-2 py-1 bg-black/80 rounded-lg">
                <div className="flex items-center gap-1">
                  <Star className="w-3 h-3 text-yellow-400 fill-yellow-400" />
                  <span className="text-xs font-semibold text-white">{product.rating}</span>
                </div>
              </div>
              {/* Extra Info Badges */}
              {product.rental && (
                <div className="absolute bottom-2 left-2 px-2 py-1 bg-indigo-500/90 rounded-full">
                  <span className="text-xs font-semibold text-white">{product.rental}</span>
                </div>
              )}
              {product.sample && (
                <div className="absolute bottom-2 left-2 px-2 py-1 bg-blue-500/90 rounded-full">
                  <span className="text-xs font-semibold text-white">{product.sample}</span>
                </div>
              )}
              {product.delivery && (
                <div className="absolute bottom-2 left-2 px-2 py-1 bg-orange-500/90 rounded-full">
                  <span className="text-xs font-semibold text-white">⚡ {product.delivery}</span>
                </div>
              )}
            </div>

            {/* Content */}
            <div className="p-3">
              <h3 className="text-sm font-semibold text-rez-navy dark:text-white line-clamp-1 mb-1">
                {product.name}
              </h3>
              <p className="text-xs text-rez-gray-600 dark:text-gray-400 line-clamp-1 mb-2">
                {product.brand}
              </p>

              {/* Price */}
              <div className="flex items-center gap-2">
                <span className="text-base font-bold text-rez-navy dark:text-white">
                  ₹{product.discountedPrice.toLocaleString()}
                </span>
                <span className="text-xs text-rez-gray-500 line-through">
                  ₹{product.originalPrice.toLocaleString()}
                </span>
              </div>

              {/* Savings */}
              <div className="mt-2 text-xs text-emerald-600 dark:text-emerald-400 font-semibold">
                Save ₹{(product.originalPrice - product.discountedPrice).toLocaleString()}
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* View All Button */}
      <Link
        to={`/experience/${experience}`}
        className={`mt-4 block w-full py-3 rounded-xl bg-gradient-to-r ${data.color} text-white font-semibold text-center hover:shadow-lg transition-all`}
      >
        Explore All {data.title} Products →
      </Link>
    </div>
  );
};

export default ExperienceOffersSection;
