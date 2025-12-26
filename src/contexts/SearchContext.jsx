import { createContext, useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const SearchContext = createContext();

// Mock data for search suggestions
const searchData = {
  stores: [
    { id: 1, name: 'Starbucks', category: 'Coffee & Cafe', icon: '☕' },
    { id: 2, name: 'McDonald\'s', category: 'Fast Food', icon: '🍔' },
    { id: 3, name: 'Nike Store', category: 'Fashion', icon: '👟' },
    { id: 4, name: 'Sephora', category: 'Beauty', icon: '💄' },
    { id: 5, name: 'Best Buy', category: 'Electronics', icon: '📱' },
  ],
  products: [
    { id: 1, name: 'iPhone 15 Pro', category: 'Electronics', price: 999, icon: '📱' },
    { id: 2, name: 'Nike Air Max', category: 'Footwear', price: 150, icon: '👟' },
    { id: 3, name: 'Starbucks Gift Card', category: 'Gift Cards', price: 25, icon: '🎁' },
    { id: 4, name: 'Dyson Vacuum', category: 'Home Appliances', price: 399, icon: '🏠' },
    { id: 5, name: 'MacBook Pro', category: 'Electronics', price: 1999, icon: '💻' },
  ],
  categories: [
    { id: 1, name: 'Electronics', icon: '📱', count: 1250 },
    { id: 2, name: 'Fashion', icon: '👗', count: 890 },
    { id: 3, name: 'Food & Dining', icon: '🍔', count: 456 },
    { id: 4, name: 'Beauty & Wellness', icon: '💄', count: 678 },
    { id: 5, name: 'Fitness & Sports', icon: '⚽', count: 234 },
  ],
  trending: [
    'iPhone 15',
    'Black Friday Deals',
    'Grocery Offers',
    'Movie Tickets',
    'Gym Membership'
  ]
};

export const SearchProvider = ({ children }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState({ stores: [], products: [], categories: [] });
  const [recentSearches, setRecentSearches] = useState(() => {
    const saved = localStorage.getItem('rez-recent-searches');
    return saved ? JSON.parse(saved) : [];
  });
  const [isSearching, setIsSearching] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const navigate = useNavigate();

  // Search function
  useEffect(() => {
    if (searchQuery.trim().length < 2) {
      setSearchResults({ stores: [], products: [], categories: [] });
      setShowResults(false);
      return;
    }

    setIsSearching(true);
    setShowResults(true);

    // Simulate API delay
    const timer = setTimeout(() => {
      const query = searchQuery.toLowerCase();

      const stores = searchData.stores.filter(store =>
        store.name.toLowerCase().includes(query) ||
        store.category.toLowerCase().includes(query)
      );

      const products = searchData.products.filter(product =>
        product.name.toLowerCase().includes(query) ||
        product.category.toLowerCase().includes(query)
      );

      const categories = searchData.categories.filter(cat =>
        cat.name.toLowerCase().includes(query)
      );

      setSearchResults({ stores, products, categories });
      setIsSearching(false);
    }, 300);

    return () => clearTimeout(timer);
  }, [searchQuery]);

  const addRecentSearch = (query) => {
    const updated = [query, ...recentSearches.filter(q => q !== query)].slice(0, 10);
    setRecentSearches(updated);
    localStorage.setItem('rez-recent-searches', JSON.stringify(updated));
  };

  const clearRecentSearches = () => {
    setRecentSearches([]);
    localStorage.removeItem('rez-recent-searches');
  };

  const handleSearch = (query) => {
    if (query.trim()) {
      addRecentSearch(query);
      setSearchQuery('');
      setShowResults(false);
      navigate(`/search?q=${encodeURIComponent(query)}`);
    }
  };

  const value = {
    searchQuery,
    setSearchQuery,
    searchResults,
    recentSearches,
    isSearching,
    showResults,
    setShowResults,
    handleSearch,
    clearRecentSearches,
    trendingSearches: searchData.trending
  };

  return (
    <SearchContext.Provider value={value}>
      {children}
    </SearchContext.Provider>
  );
};

export const useSearch = () => {
  const context = useContext(SearchContext);
  if (!context) {
    throw new Error('useSearch must be used within SearchProvider');
  }
  return context;
};
