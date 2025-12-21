// Deal Store Data - Offers, Cashback, Exclusive

export const nearbyOffers = [
  {
    id: 'o1',
    type: 'offer',
    store: 'Chai Point',
    storeLogo: 'https://logo.clearbit.com/chaipoint.com',
    title: '50% OFF on all beverages',
    discount: '50%',
    discountType: 'percentage',
    distance: '200m',
    validTill: '2024-12-25',
    category: 'Food & Dining',
    image: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=400',
    terms: ['Valid on dine-in only', 'Max discount ₹100', 'Not valid with other offers'],
    redeemCount: 234,
    trending: true
  },
  {
    id: 'o2',
    type: 'offer',
    store: 'Domino\'s Pizza',
    storeLogo: 'https://logo.clearbit.com/dominos.co.in',
    title: 'Buy 1 Get 1 FREE on Medium Pizza',
    discount: 'BOGO',
    discountType: 'bogo',
    distance: '500m',
    validTill: '2024-12-24',
    category: 'Food & Dining',
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400',
    terms: ['Valid on medium pizzas', 'Dine-in & takeaway'],
    redeemCount: 567
  },
  {
    id: 'o3',
    type: 'offer',
    store: 'Decathlon',
    storeLogo: 'https://logo.clearbit.com/decathlon.in',
    title: 'Flat 40% OFF on Winter Wear',
    discount: '40%',
    discountType: 'percentage',
    distance: '1.2km',
    validTill: '2024-12-31',
    category: 'Fashion',
    image: 'https://images.unsplash.com/photo-1483721310020-03333e577078?w=400',
    terms: ['On selected items', 'While stocks last'],
    redeemCount: 89
  },
  {
    id: 'o4',
    type: 'offer',
    store: 'Starbucks',
    storeLogo: 'https://logo.clearbit.com/starbucks.in',
    title: 'Free Croissant with any Grande',
    discount: 'FREE',
    discountType: 'freebie',
    distance: '350m',
    validTill: '2024-12-23',
    category: 'Food & Dining',
    image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=400',
    terms: ['One per customer', 'Valid 2-5 PM only'],
    redeemCount: 156
  }
];

export const todaysOffers = [
  {
    id: 't1',
    type: 'offer',
    store: 'McDonald\'s',
    storeLogo: 'https://logo.clearbit.com/mcdonalds.co.in',
    title: 'McSpicy Combo at ₹199',
    discount: '₹199',
    discountType: 'flat',
    originalPrice: '₹349',
    expiresIn: '4h 32m',
    distance: '400m',
    category: 'Food & Dining',
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400',
    terms: ['Valid today only'],
    redeemCount: 423
  },
  {
    id: 't2',
    type: 'offer',
    store: 'Urban Clap',
    storeLogo: 'https://logo.clearbit.com/urbancompany.com',
    title: '60% OFF on Salon at Home',
    discount: '60%',
    discountType: 'percentage',
    expiresIn: '8h 15m',
    category: 'Beauty & Wellness',
    image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=400',
    terms: ['First booking only', 'Max discount ₹500'],
    redeemCount: 78
  }
];

export const bogoDeals = [
  {
    id: 'b1',
    type: 'offer',
    store: 'Baskin Robbins',
    storeLogo: 'https://logo.clearbit.com/baskinrobbins.co.in',
    title: 'Buy 1 Get 1 on All Scoops',
    discount: 'BOGO',
    discountType: 'bogo',
    distance: '600m',
    validTill: '2024-12-26',
    category: 'Food & Dining',
    image: 'https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?w=400',
    redeemCount: 312
  },
  {
    id: 'b2',
    type: 'offer',
    store: 'Lenskart',
    storeLogo: 'https://logo.clearbit.com/lenskart.com',
    title: 'Buy 1 Get 1 FREE Eyewear',
    discount: 'BOGO',
    discountType: 'bogo',
    distance: '800m',
    validTill: '2024-12-31',
    category: 'Fashion',
    image: 'https://images.unsplash.com/photo-1574258495973-f010dfbb5371?w=400',
    redeemCount: 145
  }
];

export const discountBuckets = [
  { id: 'db1', label: '25% OFF', count: 45, color: '#22C55E' },
  { id: 'db2', label: '50% OFF', count: 28, color: '#F59E0B' },
  { id: 'db3', label: '80% OFF', count: 12, color: '#EF4444' },
  { id: 'db4', label: 'Free Delivery', count: 67, icon: '🚚', color: '#3B82F6' }
];

export const lightningDeals = [
  {
    id: 'l1',
    type: 'offer',
    store: 'Zomato',
    storeLogo: 'https://logo.clearbit.com/zomato.com',
    title: 'Flat ₹150 OFF',
    discount: '₹150',
    discountType: 'flat',
    code: 'FLASH150',
    expiresIn: '23m',
    remaining: 15,
    total: 100,
    category: 'Food & Dining'
  },
  {
    id: 'l2',
    type: 'offer',
    store: 'Swiggy Instamart',
    storeLogo: 'https://logo.clearbit.com/swiggy.com',
    title: 'Free Delivery + 20% OFF',
    discount: '20%',
    discountType: 'percentage',
    code: 'QUICK20',
    expiresIn: '45m',
    remaining: 32,
    total: 50,
    category: 'Grocery'
  }
];

// Cashback Deals
export const superCashbackStores = [
  {
    id: 'c1',
    type: 'cashback',
    store: 'Croma',
    storeLogo: 'https://logo.clearbit.com/croma.com',
    title: 'Up to 25% Cashback',
    cashback: '25%',
    maxCashback: '₹5000',
    distance: '2km',
    category: 'Electronics',
    image: 'https://images.unsplash.com/photo-1468495244123-6c6c332eeece?w=400',
    coinsEarned: 500,
    featured: true
  },
  {
    id: 'c2',
    type: 'cashback',
    store: 'Shoppers Stop',
    storeLogo: 'https://logo.clearbit.com/shoppersstop.com',
    title: '20% Cashback on Fashion',
    cashback: '20%',
    maxCashback: '₹2000',
    distance: '1.5km',
    category: 'Fashion',
    image: 'https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=400',
    coinsEarned: 400,
    featured: true
  },
  {
    id: 'c3',
    type: 'cashback',
    store: 'Apollo Pharmacy',
    storeLogo: 'https://logo.clearbit.com/apollopharmacy.in',
    title: '15% Cashback on Medicines',
    cashback: '15%',
    maxCashback: '₹500',
    distance: '300m',
    category: 'Healthcare',
    coinsEarned: 150
  }
];

export const doubleCashbackDay = {
  active: true,
  title: 'Double Coin Tuesday',
  subtitle: 'Earn 2X ReZ Coins on all purchases today!',
  endsIn: '8h 45m',
  multiplier: 2
};

export const uploadBillOffers = [
  {
    id: 'ub1',
    store: 'Any Grocery Store',
    coinsPerBill: 50,
    maxBillsPerDay: 3,
    minBillAmount: '₹200'
  },
  {
    id: 'ub2',
    store: 'Any Restaurant',
    coinsPerBill: 100,
    maxBillsPerDay: 2,
    minBillAmount: '₹300'
  }
];

export const bankDeals = [
  {
    id: 'bd1',
    bank: 'HDFC Bank',
    logo: 'https://logo.clearbit.com/hdfcbank.com',
    offer: 'Extra ₹200 cashback',
    minSpend: '₹1000',
    cardType: 'Credit/Debit'
  },
  {
    id: 'bd2',
    bank: 'ICICI Bank',
    logo: 'https://logo.clearbit.com/icicibank.com',
    offer: '10% instant discount',
    maxDiscount: '₹500',
    cardType: 'Credit Card'
  },
  {
    id: 'bd3',
    bank: 'Paytm',
    logo: 'https://logo.clearbit.com/paytm.com',
    offer: '₹50 cashback',
    minSpend: '₹300',
    cardType: 'Wallet'
  }
];

// Exclusive Deals
export const studentDeals = [
  {
    id: 's1',
    type: 'exclusive',
    store: 'Cafe Coffee Day',
    storeLogo: 'https://logo.clearbit.com/cafecoffeeday.com',
    title: 'Student Special: 30% OFF',
    discount: '30%',
    badge: '🎓 Students Only',
    category: 'Food & Dining',
    image: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=400',
    eligibility: 'Valid student ID required'
  },
  {
    id: 's2',
    type: 'exclusive',
    store: 'Spotify',
    storeLogo: 'https://logo.clearbit.com/spotify.com',
    title: 'Student Plan at ₹59/month',
    discount: '₹59',
    discountType: 'flat',
    originalPrice: '₹119',
    badge: '🎓 Students Only',
    category: 'Entertainment',
    eligibility: 'Verified student email'
  }
];

export const corporateDeals = [
  {
    id: 'corp1',
    type: 'exclusive',
    store: 'Box8',
    storeLogo: 'https://logo.clearbit.com/box8.in',
    title: 'Office Lunch: 25% OFF',
    discount: '25%',
    badge: '🏢 Corporate',
    validTime: '12 PM - 3 PM',
    category: 'Food & Dining'
  },
  {
    id: 'corp2',
    type: 'exclusive',
    store: 'Urban Company',
    storeLogo: 'https://logo.clearbit.com/urbancompany.com',
    title: 'After-work Spa: 40% OFF',
    discount: '40%',
    badge: '🏢 Corporate',
    validTime: 'After 6 PM',
    category: 'Wellness'
  }
];

export const womenExclusiveDeals = [
  {
    id: 'w1',
    type: 'exclusive',
    store: 'Nykaa',
    storeLogo: 'https://logo.clearbit.com/nykaa.com',
    title: 'Women\'s Day Special: 35% OFF',
    discount: '35%',
    badge: '👩 Women Exclusive',
    category: 'Beauty',
    image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=400'
  },
  {
    id: 'w2',
    type: 'exclusive',
    store: 'Curves Fitness',
    storeLogo: null,
    title: 'First Month FREE',
    discount: 'FREE',
    badge: '👩 Women Exclusive',
    category: 'Fitness'
  }
];

export const birthdayDeals = [
  {
    id: 'bd1',
    type: 'exclusive',
    store: 'Baskin Robbins',
    title: 'FREE Ice Cream Cake',
    discount: 'FREE',
    badge: '🎂 Birthday Special',
    terms: 'Valid during birthday week'
  },
  {
    id: 'bd2',
    type: 'exclusive',
    store: 'Cinepolis',
    title: 'FREE Movie Ticket',
    discount: 'FREE',
    badge: '🎂 Birthday Special',
    terms: 'Valid on birthday'
  },
  {
    id: 'bd3',
    type: 'exclusive',
    store: 'ReZ',
    title: '500 Bonus Coins',
    coins: 500,
    badge: '🎂 Birthday Gift',
    terms: 'Auto-credited on birthday'
  }
];

export const loyaltyProgressDeals = [
  {
    id: 'lp1',
    store: 'Starbucks',
    storeLogo: 'https://logo.clearbit.com/starbucks.in',
    currentVisits: 4,
    requiredVisits: 5,
    reward: 'Free Grande Beverage',
    progress: 80
  },
  {
    id: 'lp2',
    store: 'Wow Momo',
    storeLogo: 'https://logo.clearbit.com/wowmomo.com',
    currentSpend: 800,
    requiredSpend: 1000,
    reward: '50% OFF next order',
    progress: 80
  }
];

export const specialProfileDeals = [
  {
    id: 'sp1',
    profile: 'Army',
    icon: '🪖',
    title: 'Defence Personnel: 20% OFF',
    stores: ['PVR', 'Shoppers Stop', 'Tanishq'],
    eligibility: 'Valid defence ID required'
  },
  {
    id: 'sp2',
    profile: 'Healthcare',
    icon: '🩺',
    title: 'Frontline Heroes: 15% OFF',
    stores: ['Reliance Fresh', 'DMart', 'More'],
    eligibility: 'Valid hospital ID required'
  }
];

export const trendingDeals = [
  {
    id: 'tr1',
    type: 'offer',
    store: 'Zepto',
    storeLogo: 'https://logo.clearbit.com/zeptonow.com',
    title: '₹1 Deals on First 3 Orders',
    discount: '₹1',
    discountType: 'flat',
    redeemCount: 2456,
    trending: true,
    hot: true
  },
  ...nearbyOffers.filter(o => o.trending)
];

export const hotspotDeals = [
  {
    area: 'BTM Layout',
    count: 23,
    topDeal: '60% OFF at Truffles'
  },
  {
    area: 'Koramangala',
    count: 45,
    topDeal: 'BOGO at Third Wave'
  },
  {
    area: 'Indiranagar',
    count: 34,
    topDeal: 'Free dessert at Toit'
  }
];

export const friendsRedeemed = [
  {
    dealId: 'o1',
    friendCount: 5,
    friendNames: ['Rahul', 'Priya', 'Amit']
  }
];

// New Today Deals
export const newTodayDeals = [
  {
    id: 'new1',
    type: 'offer',
    store: 'Burger King',
    storeLogo: 'https://logo.clearbit.com/burgerking.in',
    title: 'Whopper Wednesday: 50% OFF',
    discount: '50%',
    discountType: 'percentage',
    distance: '1.5km',
    category: 'Food & Dining',
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400',
    isNew: true,
    addedToday: true
  },
  {
    id: 'new2',
    type: 'offer',
    store: 'Reliance Digital',
    storeLogo: 'https://logo.clearbit.com/reliancedigital.in',
    title: 'New Launch: Extra 15% OFF',
    discount: '15%',
    discountType: 'percentage',
    distance: '3km',
    category: 'Electronics',
    image: 'https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=400',
    isNew: true,
    addedToday: true
  }
];

// AI Recommended Deals
export const aiRecommendedDeals = [
  {
    id: 'ai1',
    type: 'offer',
    store: 'Chaayos',
    storeLogo: 'https://logo.clearbit.com/chaayos.com',
    title: 'Your favorite chai spot: 25% OFF',
    discount: '25%',
    distance: '800m',
    category: 'Food & Dining',
    image: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=400',
    aiReason: 'Based on your past visits'
  },
  {
    id: 'ai2',
    type: 'offer',
    store: 'Crossword',
    storeLogo: 'https://logo.clearbit.com/crossword.in',
    title: 'Books you\'ll love: 30% OFF',
    discount: '30%',
    distance: '2km',
    category: 'Books',
    image: 'https://images.unsplash.com/photo-1524578271613-d550eacf6090?w=400',
    aiReason: 'You bought books last month'
  }
];

// Sales & Seasonal Deals
export const salesDeals = [
  {
    id: 'sale1',
    type: 'offer',
    store: 'Lifestyle',
    storeLogo: 'https://logo.clearbit.com/lifestylestores.com',
    title: 'End of Season Sale: Up to 70% OFF',
    discount: '70%',
    discountType: 'percentage',
    distance: '2.5km',
    category: 'Fashion',
    image: 'https://images.unsplash.com/photo-1607082349566-187342175e2f?w=400',
    saleType: 'seasonal'
  },
  {
    id: 'sale2',
    type: 'offer',
    store: 'Central',
    storeLogo: 'https://logo.clearbit.com/centralandme.com',
    title: 'Winter Clearance: Flat 60% OFF',
    discount: '60%',
    discountType: 'percentage',
    distance: '3km',
    category: 'Fashion',
    image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?w=400',
    saleType: 'clearance'
  }
];

// Free Delivery Deals
export const freeDeliveryDeals = [
  {
    id: 'fd1',
    type: 'offer',
    store: 'Swiggy',
    storeLogo: 'https://logo.clearbit.com/swiggy.com',
    title: 'Free Delivery on All Orders',
    discount: 'FREE',
    discountType: 'freebie',
    category: 'Food & Dining',
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400'
  },
  {
    id: 'fd2',
    type: 'offer',
    store: 'BigBasket',
    storeLogo: 'https://logo.clearbit.com/bigbasket.com',
    title: 'Free Delivery Above ₹500',
    discount: 'FREE',
    discountType: 'freebie',
    category: 'Grocery',
    image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?w=400'
  }
];

// Sponsored Cashback
export const sponsoredCashback = [
  {
    id: 'sp1',
    type: 'cashback',
    store: 'Samsung',
    storeLogo: 'https://logo.clearbit.com/samsung.com',
    title: 'Galaxy S24: 30% Cashback',
    cashback: '30%',
    maxCashback: '₹10000',
    category: 'Electronics',
    image: 'https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=400',
    sponsored: true,
    coinsEarned: 1000
  },
  {
    id: 'sp2',
    type: 'cashback',
    store: 'LG',
    storeLogo: 'https://logo.clearbit.com/lg.com',
    title: 'Appliances: 25% Cashback',
    cashback: '25%',
    maxCashback: '₹8000',
    category: 'Electronics',
    sponsored: true,
    coinsEarned: 800
  }
];

// Big Coin Drops
export const bigCoinDrops = [
  {
    id: 'bcd1',
    store: 'ReZ Special',
    title: '5X Coins Today Only',
    multiplier: 5,
    validStores: ['All Restaurants'],
    expiresIn: '6h 30m'
  },
  {
    id: 'bcd2',
    store: 'Fashion Week',
    title: '3X Coins on Fashion',
    multiplier: 3,
    validStores: ['Myntra', 'Ajio', 'Lifestyle'],
    expiresIn: '2 days'
  }
];
