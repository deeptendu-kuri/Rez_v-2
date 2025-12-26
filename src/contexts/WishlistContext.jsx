import { createContext, useContext, useState, useEffect } from 'react';

const WishlistContext = createContext();

export const WishlistProvider = ({ children }) => {
  const [wishlist, setWishlist] = useState(() => {
    const saved = localStorage.getItem('rez-wishlist');
    return saved ? JSON.parse(saved) : [];
  });

  const [recentlyViewed, setRecentlyViewed] = useState(() => {
    const saved = localStorage.getItem('rez-recently-viewed');
    return saved ? JSON.parse(saved) : [];
  });

  // Save to localStorage whenever wishlist changes
  useEffect(() => {
    localStorage.setItem('rez-wishlist', JSON.stringify(wishlist));
  }, [wishlist]);

  // Save to localStorage whenever recentlyViewed changes
  useEffect(() => {
    localStorage.setItem('rez-recently-viewed', JSON.stringify(recentlyViewed));
  }, [recentlyViewed]);

  const addToWishlist = (item) => {
    setWishlist((prev) => {
      // Check if item already exists
      if (prev.some((i) => i.id === item.id && i.type === item.type)) {
        return prev;
      }
      return [...prev, { ...item, addedAt: new Date().toISOString() }];
    });
  };

  const removeFromWishlist = (itemId, type) => {
    setWishlist((prev) => prev.filter((item) => !(item.id === itemId && item.type === type)));
  };

  const isInWishlist = (itemId, type) => {
    return wishlist.some((item) => item.id === itemId && item.type === type);
  };

  const toggleWishlist = (item) => {
    if (isInWishlist(item.id, item.type)) {
      removeFromWishlist(item.id, item.type);
    } else {
      addToWishlist(item);
    }
  };

  const clearWishlist = () => {
    if (confirm('Are you sure you want to clear your entire wishlist?')) {
      setWishlist([]);
    }
  };

  // Recently Viewed functions
  const addToRecentlyViewed = (item) => {
    setRecentlyViewed((prev) => {
      // Remove if already exists
      const filtered = prev.filter((i) => !(i.id === item.id && i.type === item.type));
      // Add to beginning
      const updated = [{ ...item, viewedAt: new Date().toISOString() }, ...filtered];
      // Keep only last 20 items
      return updated.slice(0, 20);
    });
  };

  const clearRecentlyViewed = () => {
    setRecentlyViewed([]);
  };

  const value = {
    wishlist,
    wishlistCount: wishlist.length,
    addToWishlist,
    removeFromWishlist,
    isInWishlist,
    toggleWishlist,
    clearWishlist,
    recentlyViewed,
    addToRecentlyViewed,
    clearRecentlyViewed,
  };

  return <WishlistContext.Provider value={value}>{children}</WishlistContext.Provider>;
};

export const useWishlist = () => {
  const context = useContext(WishlistContext);
  if (!context) {
    throw new Error('useWishlist must be used within WishlistProvider');
  }
  return context;
};
