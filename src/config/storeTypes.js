// Universal Store Type Configuration
// Defines behavior, features, and UI for each store type

export const STORE_TYPES = {
  '60MIN': {
    id: '60min',
    name: '60-Min Delivery',
    icon: '⚡',
    theme: {
      primary: 'from-blue-500 to-cyan-500',
      accent: 'text-cyan-400',
      badge: 'bg-cyan-500/20 text-cyan-400',
    },
    features: {
      delivery: true,
      eta: true,
      lockPrice: true,
      uploadBill: true,
      liveTracking: true,
      instantOrder: true,
    },
    rewardMultiplier: 1.2,
    allowedModes: ['halal', 'vegan', 'vegetarian'],
    sections: ['products', 'offers', 'cashback', 'reviews'],
    cta: 'Order Now',
    savingsMessage: 'Delivery fee returned as ReZ Coins',
  },

  CONVENIENCE: {
    id: 'convenience',
    name: 'Convenience Store',
    icon: '🏪',
    theme: {
      primary: 'from-green-500 to-emerald-500',
      accent: 'text-emerald-400',
      badge: 'bg-emerald-500/20 text-emerald-400',
    },
    features: {
      delivery: true,
      pickup: true,
      lockPrice: true,
      uploadBill: true,
      subscriptions: true,
    },
    rewardMultiplier: 1.0,
    allowedModes: ['halal', 'vegan', 'vegetarian'],
    sections: ['products', 'offers', 'subscriptions', 'reviews'],
    cta: 'Shop Now',
  },

  SAMPLE: {
    id: 'sample',
    name: 'Sample Store',
    icon: '🎁',
    theme: {
      primary: 'from-purple-500 to-pink-500',
      accent: 'text-purple-400',
      badge: 'bg-purple-500/20 text-purple-400',
    },
    features: {
      trial: true,
      delivery: true,
      reviewReward: true,
      shareReward: true,
    },
    rewardMultiplier: 1.5,
    allowedModes: ['vegan', 'organic'],
    sections: ['trials', 'products', 'reviews', 'reels'],
    cta: 'Try @ ₹1',
    savingsMessage: 'Triple coins for reviews + shares',
  },

  LUXURY: {
    id: 'luxury',
    name: 'Luxury Store',
    icon: '💎',
    theme: {
      primary: 'from-amber-500 to-yellow-500',
      accent: 'text-amber-400',
      badge: 'bg-amber-500/20 text-amber-400',
      background: 'bg-black',
      text: 'text-amber-100',
    },
    features: {
      appointment: true,
      concierge: true,
      exclusive: true,
      prive: true,
      personalization: true,
    },
    rewardMultiplier: 2.0,
    allowedModes: ['prive'],
    sections: ['collections', 'exclusive', 'experiences', 'concierge'],
    cta: 'Book Experience',
    savingsMessage: 'Earn Privé Coins + Exclusive Perks',
  },

  ORGANIC: {
    id: 'organic',
    name: 'Organic Store',
    icon: '🌱',
    theme: {
      primary: 'from-green-600 to-teal-500',
      accent: 'text-green-400',
      badge: 'bg-green-500/20 text-green-400',
    },
    features: {
      delivery: true,
      subscriptions: true,
      certifications: true,
      transparency: true,
      ecoImpact: true,
    },
    rewardMultiplier: 1.3,
    allowedModes: ['vegan', 'vegetarian', 'organic'],
    sections: ['products', 'subscriptions', 'certifications', 'impact'],
    cta: 'Shop Organic',
    savingsMessage: 'Earn eco-impact + streak rewards',
  },

  MEN: {
    id: 'men',
    name: 'Men Store',
    icon: '👔',
    theme: {
      primary: 'from-blue-600 to-indigo-600',
      accent: 'text-blue-400',
      badge: 'bg-blue-500/20 text-blue-400',
    },
    features: {
      virtualTryOn: true,
      sizeGuide: true,
      styleAI: true,
      lockPrice: true,
      comparePrice: true,
    },
    rewardMultiplier: 1.1,
    allowedModes: ['occasion', 'vibes'],
    sections: ['clothing', 'footwear', 'accessories', 'offers'],
    cta: 'Shop Men',
  },

  WOMEN: {
    id: 'women',
    name: 'Women Store',
    icon: '👗',
    theme: {
      primary: 'from-pink-500 to-rose-500',
      accent: 'text-pink-400',
      badge: 'bg-pink-500/20 text-pink-400',
    },
    features: {
      virtualTryOn: true,
      sizeGuide: true,
      styleAI: true,
      lockPrice: true,
      comparePrice: true,
      exclusive: true,
    },
    rewardMultiplier: 1.1,
    allowedModes: ['occasion', 'vibes', 'womenExclusive'],
    sections: ['clothing', 'footwear', 'accessories', 'beauty', 'offers'],
    cta: 'Shop Women',
  },

  CHILDREN: {
    id: 'children',
    name: 'Children Store',
    icon: '🧸',
    theme: {
      primary: 'from-orange-500 to-red-500',
      accent: 'text-orange-400',
      badge: 'bg-orange-500/20 text-orange-400',
    },
    features: {
      ageFilter: true,
      safetyInfo: true,
      parentalControls: true,
      giftWrapping: true,
    },
    rewardMultiplier: 1.0,
    allowedModes: ['age', 'occasion'],
    sections: ['toys', 'clothing', 'books', 'offers'],
    cta: 'Shop Kids',
  },

  RENTAL: {
    id: 'rental',
    name: 'Rental Store',
    icon: '🔄',
    theme: {
      primary: 'from-cyan-500 to-blue-500',
      accent: 'text-cyan-400',
      badge: 'bg-cyan-500/20 text-cyan-400',
    },
    features: {
      rentalPricing: true,
      deposit: true,
      duration: true,
      pickupReturn: true,
      damagePolicy: true,
    },
    rewardMultiplier: 1.2,
    allowedModes: ['occasion'],
    sections: ['available', 'popular', 'pricing', 'policy'],
    cta: 'Rent Now',
    savingsMessage: 'Reduced deposit for trusted users',
  },

  GIFTING: {
    id: 'gifting',
    name: 'Gifting Store',
    icon: '🎀',
    theme: {
      primary: 'from-red-500 to-pink-500',
      accent: 'text-red-400',
      badge: 'bg-red-500/20 text-red-400',
    },
    features: {
      occasionFilter: true,
      budgetSlider: true,
      giftCards: true,
      personalization: true,
      surpriseRewards: true,
    },
    rewardMultiplier: 1.3,
    allowedModes: ['occasion'],
    sections: ['occasions', 'gifts', 'cards', 'hampers'],
    cta: 'Send Gift',
    savingsMessage: 'Sender & receiver both earn coins',
  },

  DEALS: {
    id: 'deals',
    name: 'Deals Store',
    icon: '🏷️',
    theme: {
      primary: 'from-orange-500 to-amber-500',
      accent: 'text-orange-400',
      badge: 'bg-orange-500/20 text-orange-400',
    },
    features: {
      flashDeals: true,
      countdown: true,
      limitedStock: true,
      notify: true,
    },
    rewardMultiplier: 1.5,
    allowedModes: ['all'],
    sections: ['flash', 'today', 'trending', 'ending'],
    cta: 'Grab Deal',
  },

  FLEA: {
    id: 'flea',
    name: 'Flea Market',
    icon: '🛍️',
    theme: {
      primary: 'from-purple-500 to-violet-500',
      accent: 'text-purple-400',
      badge: 'bg-purple-500/20 text-purple-400',
    },
    features: {
      localVendors: true,
      negotiation: true,
      events: true,
      community: true,
    },
    rewardMultiplier: 1.0,
    allowedModes: ['local'],
    sections: ['vendors', 'events', 'trending', 'community'],
    cta: 'Visit Market',
  },
};

// Mode definitions
export const MODES = {
  halal: {
    id: 'halal',
    name: 'Halal',
    icon: '🕌',
    filterKey: 'isHalal',
  },
  vegan: {
    id: 'vegan',
    name: 'Vegan',
    icon: '🌱',
    filterKey: 'isVegan',
  },
  vegetarian: {
    id: 'vegetarian',
    name: 'Vegetarian',
    icon: '🥬',
    filterKey: 'isVegetarian',
  },
  organic: {
    id: 'organic',
    name: 'Organic',
    icon: '🌿',
    filterKey: 'isOrganic',
  },
  adult: {
    id: 'adult',
    name: 'Adult',
    icon: '🔞',
    filterKey: 'isAdult',
  },
  prive: {
    id: 'prive',
    name: 'Privé',
    icon: '✨',
    filterKey: 'isPrive',
  },
};

// Get store type config
export const getStoreTypeConfig = (storeTypeId) => {
  const typeKey = storeTypeId?.toUpperCase().replace(/-/g, '');
  return STORE_TYPES[typeKey] || STORE_TYPES.CONVENIENCE;
};

// Check if mode is allowed for store type
export const isModeAllowed = (storeTypeId, modeId) => {
  const config = getStoreTypeConfig(storeTypeId);
  return config.allowedModes.includes(modeId) || config.allowedModes.includes('all');
};

// Get filtered products based on active modes
export const filterProductsByMode = (products, activeModes) => {
  if (!activeModes || activeModes.length === 0) return products;

  return products.map(product => {
    let isHidden = false;
    let hideReason = null;

    activeModes.forEach(modeId => {
      const mode = MODES[modeId];
      if (mode && mode.filterKey && !product[mode.filterKey]) {
        isHidden = true;
        hideReason = `Not ${mode.name}-certified`;
      }
    });

    return { ...product, isHidden, hideReason };
  });
};

export default STORE_TYPES;
