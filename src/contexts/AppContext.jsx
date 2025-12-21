import { createContext, useContext, useReducer } from 'react';

const AppContext = createContext();

const initialState = {
  // Global Mode: nearYou | mall | cashStore | prive
  globalMode: 'nearYou',

  // Content Filters (can stack)
  filters: {
    halal: false,
    vegan: false,
    vegetarian: false,
    sawan: false,
    adult: false,
    is60Min: false,
  },

  // User Intent
  intent: null, // browsing | save | fast | gift | event | eatingOut | essentials

  // Vibe
  vibe: null, // sunny | romantic | party | beach | winter | fresh | boring | chill | work

  // Occasion
  occasion: null, // newYear | eid | ramadan | diwali | christmas | holi etc.

  // UI States
  showIntentPicker: false,
  showVibePicker: false,
  showFilterSheet: false,
  showModeSwitcher: false,
};

const appReducer = (state, action) => {
  switch (action.type) {
    case 'SET_GLOBAL_MODE':
      return { ...state, globalMode: action.payload };

    case 'TOGGLE_FILTER':
      return {
        ...state,
        filters: {
          ...state.filters,
          [action.payload]: !state.filters[action.payload]
        }
      };

    case 'SET_FILTER':
      return {
        ...state,
        filters: {
          ...state.filters,
          [action.payload.key]: action.payload.value
        }
      };

    case 'CLEAR_FILTERS':
      return {
        ...state,
        filters: initialState.filters
      };

    case 'SET_INTENT':
      return { ...state, intent: action.payload, showIntentPicker: false };

    case 'SET_VIBE':
      return { ...state, vibe: action.payload, showVibePicker: false };

    case 'SET_OCCASION':
      return { ...state, occasion: action.payload };

    case 'TOGGLE_INTENT_PICKER':
      return { ...state, showIntentPicker: !state.showIntentPicker };

    case 'TOGGLE_VIBE_PICKER':
      return { ...state, showVibePicker: !state.showVibePicker };

    case 'TOGGLE_FILTER_SHEET':
      return { ...state, showFilterSheet: !state.showFilterSheet };

    case 'TOGGLE_MODE_SWITCHER':
      return { ...state, showModeSwitcher: !state.showModeSwitcher };

    default:
      return state;
  }
};

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  const value = {
    ...state,
    dispatch,
    // Helper functions
    setGlobalMode: (mode) => dispatch({ type: 'SET_GLOBAL_MODE', payload: mode }),
    toggleFilter: (filter) => dispatch({ type: 'TOGGLE_FILTER', payload: filter }),
    setIntent: (intent) => dispatch({ type: 'SET_INTENT', payload: intent }),
    setVibe: (vibe) => dispatch({ type: 'SET_VIBE', payload: vibe }),
    toggleIntentPicker: () => dispatch({ type: 'TOGGLE_INTENT_PICKER' }),
    toggleVibePicker: () => dispatch({ type: 'TOGGLE_VIBE_PICKER' }),
    toggleFilterSheet: () => dispatch({ type: 'TOGGLE_FILTER_SHEET' }),
    toggleModeSwitcher: () => dispatch({ type: 'TOGGLE_MODE_SWITCHER' }),
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within AppProvider');
  }
  return context;
};

// Intent options with labels
export const intentOptions = [
  { id: 'browsing', icon: '🧭', label: 'Just browsing', description: 'Take your time. Discover what\'s nearby.' },
  { id: 'save', icon: '💸', label: 'Want to save money', description: 'Showing best deals & cashback first.' },
  { id: 'fast', icon: '⚡', label: 'Need it fast', description: 'Only fast-delivery and nearby stores.' },
  { id: 'gift', icon: '🎁', label: 'Buying a gift', description: 'Curated gift-worthy picks.' },
  { id: 'event', icon: '🎉', label: 'Planning something special', description: 'Perfect for events & occasions.' },
  { id: 'eatingOut', icon: '🍽️', label: 'Eating out now', description: 'Great food near you, right now.' },
  { id: 'essentials', icon: '🛒', label: 'Stocking essentials', description: 'Value packs & daily needs.' },
];

// Vibe options
export const vibeOptions = [
  { id: 'sunny', icon: '☀️', label: 'Sunny', color: '#F59E0B' },
  { id: 'romantic', icon: '❤️', label: 'Romantic', color: '#EC4899' },
  { id: 'party', icon: '🎉', label: 'Party', color: '#8B5CF6' },
  { id: 'beach', icon: '🌊', label: 'Beach', color: '#06B6D4' },
  { id: 'winter', icon: '❄️', label: 'Winter', color: '#60A5FA' },
  { id: 'fresh', icon: '🌿', label: 'Fresh', color: '#10B981' },
  { id: 'boring', icon: '😐', label: 'Boring', color: '#6B7280' },
  { id: 'chill', icon: '😌', label: 'Chill', color: '#14B8A6' },
  { id: 'work', icon: '💼', label: 'Work Mode', color: '#3B82F6' },
];

// Global mode options
export const globalModeOptions = [
  { id: 'nearYou', label: 'Near You', icon: '📍', description: 'Local discovery + payments' },
  { id: 'mall', label: 'ReZ Mall', icon: '🏬', description: 'Curated brands, fast delivery' },
  { id: 'cashStore', label: 'Cash Store', icon: '💰', description: 'Affiliate cashback & coupons' },
  { id: 'prive', label: 'Privé', icon: '✨', description: 'Invite-only luxury deals' },
];
