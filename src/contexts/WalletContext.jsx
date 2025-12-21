import { createContext, useContext, useReducer } from 'react';

const WalletContext = createContext();

const initialState = {
  // Coin balances
  rezCoins: 2450,
  brandedCoins: {
    'Biryani Blues': 120,
    'Fresh Mart': 85,
  },
  promoCoins: 500, // Limited time

  // Transaction history
  transactions: [
    {
      id: 1,
      type: 'earned',
      amount: 54,
      coinType: 'rez',
      store: 'Biryani Blues',
      date: '2024-12-20',
      description: 'Earned on order #1234'
    },
    {
      id: 2,
      type: 'spent',
      amount: 200,
      coinType: 'rez',
      store: 'Fashion Hub',
      date: '2024-12-19',
      description: 'Redeemed on order #1233'
    },
    {
      id: 3,
      type: 'earned',
      amount: 120,
      coinType: 'branded',
      store: 'Biryani Blues',
      date: '2024-12-18',
      description: 'Welcome bonus'
    },
    {
      id: 4,
      type: 'earned',
      amount: 500,
      coinType: 'promo',
      store: 'ReZ',
      date: '2024-12-15',
      description: 'Festival bonus - expires Dec 31'
    },
    {
      id: 5,
      type: 'cashback',
      amount: 89,
      coinType: 'rez',
      store: 'Amazon (via Cash Store)',
      date: '2024-12-14',
      description: 'Affiliate cashback credited'
    }
  ],

  // Pending cashback (from Cash Store)
  pendingCashback: [
    { store: 'Myntra', amount: 156, status: 'tracking', expectedDate: '2024-12-28' },
    { store: 'Zomato', amount: 45, status: 'confirmed', expectedDate: '2024-12-25' },
  ],

  // Saved payment methods
  paymentMethods: [
    { id: 1, type: 'upi', name: 'Google Pay', default: true },
    { id: 2, type: 'upi', name: 'PhonePe', default: false },
    { id: 3, type: 'card', name: '•••• 4242', cardType: 'Visa', default: false },
  ]
};

const walletReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_REZ_COINS':
      return { ...state, rezCoins: state.rezCoins + action.payload };

    case 'SPEND_REZ_COINS':
      return { ...state, rezCoins: Math.max(0, state.rezCoins - action.payload) };

    case 'ADD_TRANSACTION':
      return {
        ...state,
        transactions: [action.payload, ...state.transactions]
      };

    case 'SET_DEFAULT_PAYMENT':
      return {
        ...state,
        paymentMethods: state.paymentMethods.map(pm => ({
          ...pm,
          default: pm.id === action.payload
        }))
      };

    default:
      return state;
  }
};

export const WalletProvider = ({ children }) => {
  const [state, dispatch] = useReducer(walletReducer, initialState);

  const totalCoins = state.rezCoins + state.promoCoins +
    Object.values(state.brandedCoins).reduce((a, b) => a + b, 0);

  const value = {
    ...state,
    totalCoins,
    dispatch,
    addRezCoins: (amount) => dispatch({ type: 'ADD_REZ_COINS', payload: amount }),
    spendRezCoins: (amount) => dispatch({ type: 'SPEND_REZ_COINS', payload: amount }),
    setDefaultPayment: (id) => dispatch({ type: 'SET_DEFAULT_PAYMENT', payload: id }),
  };

  return <WalletContext.Provider value={value}>{children}</WalletContext.Provider>;
};

export const useWallet = () => {
  const context = useContext(WalletContext);
  if (!context) {
    throw new Error('useWallet must be used within WalletProvider');
  }
  return context;
};
