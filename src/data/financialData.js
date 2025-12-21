// Financial Lifestyle Data

export const financialCategories = {
  payments: [
    { id: 'mobile-recharge', name: 'Mobile Recharge', icon: '📱', cashback: 5, avgCoins: 20 },
    { id: 'broadband', name: 'Broadband / DTH', icon: '🌐', cashback: 3, avgCoins: 30 },
    { id: 'electricity', name: 'Electricity', icon: '⚡', cashback: 2, avgCoins: 50 },
    { id: 'water', name: 'Water', icon: '💧', cashback: 2, avgCoins: 20 },
    { id: 'rent', name: 'Rent', icon: '🧾', cashback: 1, avgCoins: 200 },
    { id: 'ott', name: 'OTT Subscriptions', icon: '🎬', cashback: 8, avgCoins: 40 },
  ],
  savings: [
    { id: 'insurance', name: 'Insurance', icon: '🛡️', cashback: 5, avgCoins: 500, types: ['Health', 'Motor', 'Life'] },
    { id: 'gold', name: 'Gold Savings', icon: '💰', cashback: 2, avgCoins: 100 },
    { id: 'donations', name: 'Donations', icon: '❤️', cashback: 3, avgCoins: 50 },
    { id: 'education', name: 'Education Fees', icon: '🎓', cashback: 2, avgCoins: 200 },
  ],
  credit: [
    { id: 'bnpl', name: 'Buy Now Pay Later', icon: '🕒', benefit: 'No Cost EMI' },
    { id: 'emi', name: 'No-Cost EMI', icon: '💳', benefit: 'Bank Offers' },
    { id: 'store-emi', name: 'EMI at Offline Stores', icon: '🏪', benefit: 'ReZ QR' },
  ],
};

export const financialBillTypes = [
  { id: 'mobile', name: 'Mobile Prepaid', icon: '📱', operators: ['Jio', 'Airtel', 'Vi', 'BSNL'] },
  { id: 'postpaid', name: 'Mobile Postpaid', icon: '📞', operators: ['Jio', 'Airtel', 'Vi'] },
  { id: 'electricity', name: 'Electricity', icon: '⚡', operators: ['BSES', 'Tata Power', 'Adani', 'MSEDCL'] },
  { id: 'gas', name: 'Piped Gas', icon: '🔥', operators: ['IGL', 'Mahanagar Gas', 'Adani Gas'] },
  { id: 'water', name: 'Water', icon: '💧', operators: ['Delhi Jal Board', 'BWSSB'] },
  { id: 'broadband', name: 'Broadband', icon: '🌐', operators: ['Jio Fiber', 'Airtel Xstream', 'ACT'] },
  { id: 'dth', name: 'DTH', icon: '📺', operators: ['Tata Play', 'Airtel Digital TV', 'Dish TV', 'Sun Direct'] },
  { id: 'landline', name: 'Landline', icon: '☎️', operators: ['BSNL', 'Airtel', 'MTNL'] },
];

export const financialInsurance = [
  {
    id: 'ins-1',
    type: 'Health Insurance',
    provider: 'Star Health',
    premium: '₹12,000/year',
    cashbackPercent: 5,
    coinsEarned: 500,
    features: ['Cashless Claims', 'No Waiting Period', 'Family Cover'],
  },
  {
    id: 'ins-2',
    type: 'Motor Insurance',
    provider: 'HDFC Ergo',
    premium: '₹8,000/year',
    cashbackPercent: 4,
    coinsEarned: 350,
    features: ['Zero Depreciation', '24/7 Support', 'Quick Claims'],
  },
  {
    id: 'ins-3',
    type: 'Life Insurance',
    provider: 'LIC',
    premium: '₹20,000/year',
    cashbackPercent: 3,
    coinsEarned: 600,
    features: ['Term Plan', 'Tax Benefits', 'High Cover'],
  },
];

export const financialOffers = [
  {
    id: 'offer-1',
    title: '2x Coins on Electricity',
    description: 'Pay electricity bill today',
    validTill: 'Today',
    icon: '⚡',
    color: '#F59E0B',
  },
  {
    id: 'offer-2',
    title: 'Extra ₹20 on Recharge',
    description: 'Recharge before 8 PM',
    validTill: '8 PM Today',
    icon: '📱',
    color: '#3B82F6',
  },
  {
    id: 'offer-3',
    title: '5% Cashback on Insurance',
    description: 'Renew your health insurance',
    validTill: '31 Dec',
    icon: '🛡️',
    color: '#22C55E',
  },
  {
    id: 'offer-4',
    title: 'Gold @ 0% Making',
    description: 'Buy digital gold with no charges',
    validTill: 'This Week',
    icon: '💰',
    color: '#EAB308',
  },
];

export const financialNudges = [
  { id: 'nudge-1', text: 'Pay electricity bill today → earn 2x coins', icon: '⚡', priority: 'high' },
  { id: 'nudge-2', text: 'Recharge before 8pm → extra ₹20 benefit', icon: '📱', priority: 'medium' },
  { id: 'nudge-3', text: 'Your Jio bill is due in 3 days', icon: '📞', priority: 'low' },
];

export const financialDashboard = {
  thisMonth: {
    saved: 2450,
    billsPaid: 8,
    coinsEarned: 890,
    upcomingRewards: 3,
  },
  recentTransactions: [
    { id: 'txn-1', type: 'Mobile Recharge', amount: 599, coins: 30, date: '20 Dec' },
    { id: 'txn-2', type: 'Electricity Bill', amount: 2340, coins: 120, date: '18 Dec' },
    { id: 'txn-3', type: 'DTH Recharge', amount: 499, coins: 40, date: '15 Dec' },
    { id: 'txn-4', type: 'Broadband', amount: 999, coins: 50, date: '12 Dec' },
  ],
  upcomingBills: [
    { id: 'bill-1', type: 'Mobile Postpaid', dueDate: '25 Dec', amount: 799, urgency: 'soon' },
    { id: 'bill-2', type: 'Electricity', dueDate: '28 Dec', amount: 1850, urgency: 'normal' },
    { id: 'bill-3', type: 'Insurance', dueDate: '15 Jan', amount: 12000, urgency: 'normal' },
  ],
};

export const financialPaymentMethods = [
  { id: 'upi', name: 'UPI', icon: '📲', description: 'Pay via any UPI app' },
  { id: 'card', name: 'Credit/Debit Card', icon: '💳', description: 'All major cards accepted' },
  { id: 'netbanking', name: 'Net Banking', icon: '🏦', description: '50+ banks supported' },
  { id: 'wallet', name: 'ReZ Wallet', icon: '👝', description: 'Use your ReZ balance' },
  { id: 'bnpl', name: 'Pay Later', icon: '🕒', description: 'Pay next month' },
];

export const financialTrust = [
  { icon: '🔒', text: 'Bank-grade Encryption' },
  { icon: '✅', text: 'RBI Compliant Partners' },
  { icon: '📋', text: 'Clear Transaction History' },
  { icon: '📤', text: 'Export Statements' },
];

export const financialGoldSavings = {
  currentBalance: 2.5, // grams
  currentValue: 15250, // INR
  totalInvested: 14000,
  returns: 8.9, // percentage
  monthlyPlan: {
    amount: 500,
    grams: 0.08,
    nextDebit: '1 Jan 2025',
  },
};

export const financialOTT = [
  { id: 'ott-1', name: 'Netflix', price: 199, cashback: 8, icon: '🎬' },
  { id: 'ott-2', name: 'Amazon Prime', price: 179, cashback: 10, icon: '📦' },
  { id: 'ott-3', name: 'Disney+ Hotstar', price: 149, cashback: 8, icon: '🏰' },
  { id: 'ott-4', name: 'Spotify', price: 119, cashback: 12, icon: '🎵' },
  { id: 'ott-5', name: 'YouTube Premium', price: 129, cashback: 10, icon: '▶️' },
];
