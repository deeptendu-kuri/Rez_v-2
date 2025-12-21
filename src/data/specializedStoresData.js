// Specialized Stores Data

// Common tabs for all stores
export const storeTabs = [
  { id: 'explore', label: 'Explore', icon: '🔍' },
  { id: 'offers', label: 'Offers', icon: '🏷️' },
  { id: 'cashback', label: 'Cashback', icon: '💰' },
  { id: 'book', label: 'Book / Buy', icon: '🛒' },
  { id: 'reviews', label: 'Reviews', icon: '⭐' },
];

// ===== LUXURY STORE =====
export const luxuryStore = {
  theme: { primary: '#D4AF37', secondary: '#1C1C1E', accent: '#FFD700' },
  tagline: 'Prestige. Exclusivity. Pride.',
  brands: [
    { id: 'lux-1', name: 'Louis Vuitton', logo: '👜', type: 'Fashion', cashback: 5, isPriveOnly: true },
    { id: 'lux-2', name: 'Rolex', logo: '⌚', type: 'Watches', cashback: 3, isPriveOnly: true },
    { id: 'lux-3', name: 'Hermès', logo: '🧣', type: 'Accessories', cashback: 4, isPriveOnly: false },
    { id: 'lux-4', name: 'Gucci', logo: '👠', type: 'Fashion', cashback: 6, isPriveOnly: false },
    { id: 'lux-5', name: 'Cartier', logo: '💎', type: 'Jewelry', cashback: 4, isPriveOnly: true },
    { id: 'lux-6', name: 'Prada', logo: '👔', type: 'Fashion', cashback: 5, isPriveOnly: false },
  ],
  products: [
    { id: 'lux-p-1', name: 'Limited Edition Handbag', brand: 'Louis Vuitton', price: 185000, cashback: 5, coins: 9250, image: '👜', isLimited: true },
    { id: 'lux-p-2', name: 'Luxury Watch', brand: 'Rolex', price: 850000, cashback: 3, coins: 25500, image: '⌚', isLimited: true },
    { id: 'lux-p-3', name: 'Silk Scarf', brand: 'Hermès', price: 45000, cashback: 4, coins: 1800, image: '🧣', isLimited: false },
    { id: 'lux-p-4', name: 'Designer Shoes', brand: 'Gucci', price: 75000, cashback: 6, coins: 4500, image: '👠', isLimited: false },
  ],
  offers: [
    { id: 'lux-o-1', title: 'Private Preview', description: 'Early access to new collection', type: 'exclusive', validFor: 'Privé Members' },
    { id: 'lux-o-2', title: 'Elite Cashback', description: '2x coins for Elite tier', type: 'tier', validFor: 'Elite+' },
    { id: 'lux-o-3', title: 'Concierge Service', description: 'Free personal shopping', type: 'service', validFor: 'All Members' },
  ],
  stylistPicks: [
    { id: 'sp-1', name: 'Summer Elegance', items: 4, savings: 15000 },
    { id: 'sp-2', name: 'Business Class', items: 3, savings: 8500 },
  ],
};

// ===== ORGANIC STORE =====
export const organicStore = {
  theme: { primary: '#22C55E', secondary: '#F0FDF4', accent: '#16A34A' },
  tagline: 'Trust. Purity. Responsibility.',
  categories: [
    { id: 'org-1', name: 'Organic Groceries', icon: '🥬', items: 245, cashback: 12 },
    { id: 'org-2', name: 'Skincare & Wellness', icon: '🧴', items: 89, cashback: 15 },
    { id: 'org-3', name: 'Eco-Friendly Home', icon: '🏠', items: 67, cashback: 10 },
    { id: 'org-4', name: 'Natural Supplements', icon: '💊', items: 56, cashback: 12 },
  ],
  certifications: [
    { id: 'cert-1', name: 'USDA Organic', icon: '✅' },
    { id: 'cert-2', name: 'India Organic', icon: '🇮🇳' },
    { id: 'cert-3', name: 'Non-GMO', icon: '🌱' },
    { id: 'cert-4', name: 'Cruelty Free', icon: '🐰' },
  ],
  products: [
    { id: 'org-p-1', name: 'Organic Vegetables Box', price: 599, cashback: 12, coins: 72, certifications: ['USDA Organic'], subscription: true },
    { id: 'org-p-2', name: 'Natural Face Serum', price: 1299, cashback: 15, coins: 195, certifications: ['Cruelty Free'], subscription: false },
    { id: 'org-p-3', name: 'Bamboo Toothbrush Set', price: 299, cashback: 10, coins: 30, certifications: ['Eco-Friendly'], subscription: true },
  ],
  ecoActions: [
    { id: 'eco-1', action: 'Bring your own bag', bonus: 10 },
    { id: 'eco-2', action: 'Return packaging', bonus: 15 },
    { id: 'eco-3', action: 'Choose minimal packaging', bonus: 5 },
  ],
  education: [
    { id: 'edu-1', title: 'Why Organic?', description: 'Health benefits of organic food' },
    { id: 'edu-2', title: 'Reading Labels', description: 'Understanding certifications' },
  ],
};

// ===== MEN STORE =====
export const menStore = {
  theme: { primary: '#1F2937', secondary: '#111827', accent: '#3B82F6' },
  tagline: 'Confidence. Convenience.',
  categories: [
    { id: 'men-1', name: 'Fashion', icon: '👔', items: 320, cashback: 15 },
    { id: 'men-2', name: 'Grooming', icon: '🧔', items: 145, cashback: 18 },
    { id: 'men-3', name: 'Fitness', icon: '💪', items: 98, cashback: 12 },
    { id: 'men-4', name: 'Gadgets', icon: '📱', items: 210, cashback: 8 },
  ],
  products: [
    { id: 'men-p-1', name: 'Premium Blazer', price: 8999, cashback: 15, coins: 1350, category: 'Fashion' },
    { id: 'men-p-2', name: 'Beard Grooming Kit', price: 1499, cashback: 18, coins: 270, category: 'Grooming' },
    { id: 'men-p-3', name: 'Fitness Tracker Pro', price: 4999, cashback: 12, coins: 600, category: 'Fitness' },
    { id: 'men-p-4', name: 'Wireless Earbuds', price: 2999, cashback: 8, coins: 240, category: 'Gadgets' },
  ],
  bundles: [
    { id: 'bun-1', name: 'Workwear Essentials', items: 5, originalPrice: 12999, price: 9999, savings: 3000 },
    { id: 'bun-2', name: 'Grooming Complete', items: 4, originalPrice: 4999, price: 3499, savings: 1500 },
    { id: 'bun-3', name: 'Gym + Fashion', items: 6, originalPrice: 15999, price: 11999, savings: 4000 },
  ],
  barberServices: [
    { id: 'barb-1', name: 'Premium Haircut', price: 599, cashback: 20, duration: '45 mins' },
    { id: 'barb-2', name: 'Beard Styling', price: 399, cashback: 20, duration: '30 mins' },
    { id: 'barb-3', name: 'Full Grooming Package', price: 1499, cashback: 25, duration: '90 mins' },
  ],
};

// ===== WOMEN STORE =====
export const womenStore = {
  theme: { primary: '#EC4899', secondary: '#FDF2F8', accent: '#DB2777' },
  tagline: 'Choice. Empowerment.',
  categories: [
    { id: 'wom-1', name: 'Fashion', icon: '👗', items: 450, cashback: 18 },
    { id: 'wom-2', name: 'Beauty', icon: '💄', items: 320, cashback: 20 },
    { id: 'wom-3', name: 'Wellness', icon: '🧘', items: 145, cashback: 15 },
    { id: 'wom-4', name: 'Self-Care', icon: '💆', items: 189, cashback: 18 },
  ],
  products: [
    { id: 'wom-p-1', name: 'Designer Dress', price: 5999, cashback: 18, coins: 1080, category: 'Fashion' },
    { id: 'wom-p-2', name: 'Luxury Makeup Set', price: 3499, cashback: 20, coins: 700, category: 'Beauty' },
    { id: 'wom-p-3', name: 'Yoga Mat Premium', price: 1299, cashback: 15, coins: 195, category: 'Wellness' },
    { id: 'wom-p-4', name: 'Spa Gift Box', price: 2499, cashback: 18, coins: 450, category: 'Self-Care' },
  ],
  occasions: [
    { id: 'occ-1', name: 'Wedding Season', offers: 25, avgCashback: 22 },
    { id: 'occ-2', name: 'Festival Special', offers: 40, avgCashback: 20 },
    { id: 'occ-3', name: 'Office Wear', offers: 18, avgCashback: 15 },
  ],
  communityReviews: [
    { id: 'rev-1', user: 'Priya S.', bodyType: 'Petite', review: 'Perfect fit!', product: 'Designer Dress', rating: 5 },
    { id: 'rev-2', user: 'Anita M.', concern: 'Dry Skin', review: 'Loved the hydration!', product: 'Face Serum', rating: 5 },
  ],
  creatorReels: [
    { id: 'reel-1', creator: '@fashionista', views: '125K', product: 'Summer Collection' },
    { id: 'reel-2', creator: '@beautyqueen', views: '89K', product: 'Makeup Tutorial' },
  ],
};

// ===== CHILDREN STORE =====
export const childrenStore = {
  theme: { primary: '#8B5CF6', secondary: '#F5F3FF', accent: '#7C3AED' },
  tagline: 'Safety. Care. Joy.',
  categories: [
    { id: 'kid-1', name: 'Clothing', icon: '👕', items: 280, cashback: 15, ageRange: '0-14' },
    { id: 'kid-2', name: 'Toys', icon: '🧸', items: 350, cashback: 12, ageRange: '0-12' },
    { id: 'kid-3', name: 'Learning Kits', icon: '📚', items: 120, cashback: 18, ageRange: '3-14' },
    { id: 'kid-4', name: 'Healthcare', icon: '🩺', items: 95, cashback: 10, ageRange: 'All' },
  ],
  ageFilters: ['0-2 years', '3-5 years', '6-9 years', '10-14 years'],
  products: [
    { id: 'kid-p-1', name: 'Cotton T-Shirt Set', price: 999, cashback: 15, coins: 150, ageRange: '3-8', safetyBadge: true },
    { id: 'kid-p-2', name: 'Educational Toy Set', price: 1499, cashback: 12, coins: 180, ageRange: '4-8', safetyBadge: true },
    { id: 'kid-p-3', name: 'Science Learning Kit', price: 2499, cashback: 18, coins: 450, ageRange: '8-14', safetyBadge: true },
    { id: 'kid-p-4', name: 'Kids Multivitamins', price: 599, cashback: 10, coins: 60, ageRange: '4+', safetyBadge: true },
  ],
  bundles: [
    { id: 'kid-b-1', name: 'Back to School', items: 8, originalPrice: 4999, price: 3499, savings: 1500 },
    { id: 'kid-b-2', name: 'Birthday Party Pack', items: 10, originalPrice: 2999, price: 1999, savings: 1000 },
  ],
  safetyBadges: [
    { id: 'safe-1', name: 'Age Appropriate', icon: '✅' },
    { id: 'safe-2', name: 'Non-Toxic', icon: '🛡️' },
    { id: 'safe-3', name: 'BIS Certified', icon: '🏅' },
  ],
  familyWallet: {
    enabled: true,
    description: 'Share coins with family members',
    maxMembers: 5,
  },
};

// ===== RENTAL STORE =====
export const rentalStore = {
  theme: { primary: '#0EA5E9', secondary: '#F0F9FF', accent: '#0284C7' },
  tagline: 'Smart Savings.',
  categories: [
    { id: 'rent-1', name: 'Clothes', icon: '👔', items: 180, cashback: 20 },
    { id: 'rent-2', name: 'Electronics', icon: '📱', items: 120, cashback: 15 },
    { id: 'rent-3', name: 'Furniture', icon: '🛋️', items: 95, cashback: 12 },
    { id: 'rent-4', name: 'Vehicles', icon: '🚗', items: 45, cashback: 10 },
  ],
  rentals: [
    { id: 'rent-p-1', name: 'Designer Sherwani', dailyRate: 999, weeklyRate: 4999, deposit: 5000, cashback: 20 },
    { id: 'rent-p-2', name: 'MacBook Pro', dailyRate: 599, weeklyRate: 2999, deposit: 15000, cashback: 15 },
    { id: 'rent-p-3', name: 'Sofa Set', monthlyRate: 2499, deposit: 8000, cashback: 12 },
    { id: 'rent-p-4', name: 'Scooty', dailyRate: 299, weeklyRate: 1499, deposit: 3000, cashback: 10 },
  ],
  bonuses: [
    { id: 'bon-1', action: 'Timely return', bonus: 50, description: '+50 coins for on-time return' },
    { id: 'bon-2', action: 'Repeat rental', bonus: 100, description: '+100 coins for 3+ rentals' },
    { id: 'bon-3', action: 'First rental', bonus: 200, description: 'Welcome bonus' },
  ],
  addons: [
    { id: 'add-1', name: 'Damage Protection', price: 199, description: 'Cover accidental damage' },
    { id: 'add-2', name: 'Express Delivery', price: 99, description: 'Same-day delivery' },
    { id: 'add-3', name: 'Extended Rental', price: 149, description: 'Extend by 24 hours' },
  ],
};

// ===== GIFTING STORE =====
export const giftingStore = {
  theme: { primary: '#F59E0B', secondary: '#FFFBEB', accent: '#D97706' },
  tagline: 'Thoughtfulness.',
  categories: [
    { id: 'gift-1', name: 'Gift Cards', icon: '🎁', items: 150, cashback: 5 },
    { id: 'gift-2', name: 'Physical Gifts', icon: '📦', items: 320, cashback: 12 },
    { id: 'gift-3', name: 'Experiences', icon: '🎭', items: 85, cashback: 15 },
    { id: 'gift-4', name: 'Personalized', icon: '✨', items: 110, cashback: 18 },
  ],
  giftCards: [
    { id: 'gc-1', brand: 'Amazon', values: [500, 1000, 2000, 5000], cashback: 5 },
    { id: 'gc-2', brand: 'Flipkart', values: [500, 1000, 2000, 5000], cashback: 5 },
    { id: 'gc-3', brand: 'Myntra', values: [500, 1000, 2000], cashback: 8 },
    { id: 'gc-4', brand: 'Zomato', values: [300, 500, 1000], cashback: 10 },
  ],
  experiences: [
    { id: 'exp-1', name: 'Spa Day', price: 3999, cashback: 15, coins: 600 },
    { id: 'exp-2', name: 'Cooking Class', price: 2499, cashback: 15, coins: 375 },
    { id: 'exp-3', name: 'Adventure Sports', price: 4999, cashback: 15, coins: 750 },
  ],
  occasions: [
    { id: 'occ-1', name: 'Birthday', icon: '🎂', offers: 45 },
    { id: 'occ-2', name: 'Anniversary', icon: '💕', offers: 30 },
    { id: 'occ-3', name: 'Festival', icon: '🪔', offers: 60 },
    { id: 'occ-4', name: 'Corporate', icon: '💼', offers: 25 },
  ],
  features: {
    scheduledDelivery: true,
    personalMessage: true,
    giftWrap: true,
    videoMessage: true,
  },
  socialBonus: {
    shareGift: 25,
    reviewGift: 20,
    referFriend: 100,
  },
};

// Common reward strip data
export const rewardStrip = {
  payback: { amount: 500, cashback: 75 },
  shareBonus: 25,
  reviewBonus: 50,
  coinExpiry: '30 days',
};

// Social proof data
export const socialProof = {
  luxury: { recentPurchases: 23, totalSaved: 125000 },
  organic: { recentPurchases: 156, totalSaved: 45000 },
  men: { recentPurchases: 89, totalSaved: 67000 },
  women: { recentPurchases: 234, totalSaved: 156000 },
  children: { recentPurchases: 67, totalSaved: 34000 },
  rental: { recentBookings: 45, totalSaved: 89000 },
  gifting: { giftsSent: 178, totalSaved: 23000 },
};
