export const offers = [
  {
    id: 1,
    title: "Flash Sale",
    subtitle: "Up to 50% OFF on Food",
    description: "Limited time offer on selected restaurants",
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600",
    discount: "50%",
    category: "Food & Dining",
    validTill: "Today",
    code: "FLASH50",
    type: "flash"
  },
  {
    id: 2,
    title: "New User Special",
    subtitle: "Flat ₹200 OFF",
    description: "On your first order above ₹500",
    image: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=600",
    discount: "₹200",
    category: "All",
    validTill: "7 days",
    code: "WELCOME200",
    type: "new_user"
  },
  {
    id: 3,
    title: "Weekend Bonanza",
    subtitle: "2X ReZ Coins",
    description: "Earn double coins on all purchases this weekend",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600",
    discount: "2X",
    category: "All",
    validTill: "Sunday",
    code: null,
    type: "coins"
  },
  {
    id: 4,
    title: "Grocery Saver",
    subtitle: "15% Cashback",
    description: "On all grocery orders above ₹300",
    image: "https://images.unsplash.com/photo-1543168256-418811576931?w=600",
    discount: "15%",
    category: "Grocery & Essentials",
    validTill: "This week",
    code: "GROCERY15",
    type: "cashback"
  },
  {
    id: 5,
    title: "Fashion Friday",
    subtitle: "Extra 20% OFF",
    description: "On all clothing & accessories",
    image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=600",
    discount: "20%",
    category: "Fashion",
    validTill: "Friday",
    code: "FASHION20",
    type: "discount"
  },
  {
    id: 6,
    title: "Halal Exclusive",
    subtitle: "Special 10% Extra",
    description: "For Halal mode users on verified stores",
    image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=600",
    discount: "10%",
    category: "Halal",
    validTill: "Ongoing",
    code: "HALAL10",
    type: "mode_specific"
  },
  {
    id: 7,
    title: "Vegan Love",
    subtitle: "Free Delivery",
    description: "On all vegan restaurant orders",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=600",
    discount: "Free",
    category: "Vegan",
    validTill: "Ongoing",
    code: null,
    type: "mode_specific"
  },
  {
    id: 8,
    title: "Privé Members",
    subtitle: "30% OFF Luxury",
    description: "Exclusive deals for Privé members",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600",
    discount: "30%",
    category: "Luxury",
    validTill: "Members only",
    code: null,
    type: "prive"
  }
];

export const flashDeals = offers.filter(o => o.type === 'flash');
export const modeOffers = offers.filter(o => o.type === 'mode_specific');
