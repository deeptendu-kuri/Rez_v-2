import { createContext, useContext, useState, useEffect } from 'react';

const GamificationContext = createContext();

// Badge definitions
const BADGES = {
  FIRST_PURCHASE: {
    id: 'first_purchase',
    name: 'First Steps',
    description: 'Made your first purchase',
    icon: '🎯',
    color: 'from-blue-500 to-cyan-500'
  },
  SAVER_10: {
    id: 'saver_10',
    name: 'Smart Saver',
    description: 'Saved $10 or more',
    icon: '💰',
    color: 'from-green-500 to-emerald-500'
  },
  SAVER_100: {
    id: 'saver_100',
    name: 'Savings Master',
    description: 'Saved $100 or more',
    icon: '💎',
    color: 'from-purple-500 to-pink-500'
  },
  STREAK_7: {
    id: 'streak_7',
    name: 'Week Warrior',
    description: '7-day check-in streak',
    icon: '🔥',
    color: 'from-orange-500 to-red-500'
  },
  STREAK_30: {
    id: 'streak_30',
    name: 'Monthly Champion',
    description: '30-day check-in streak',
    icon: '⚡',
    color: 'from-yellow-500 to-amber-500'
  },
  EXPLORER: {
    id: 'explorer',
    name: 'Explorer',
    description: 'Visited 10 different stores',
    icon: '🗺️',
    color: 'from-teal-500 to-cyan-500'
  },
  REVIEWER: {
    id: 'reviewer',
    name: 'Community Voice',
    description: 'Left 5 helpful reviews',
    icon: '⭐',
    color: 'from-indigo-500 to-purple-500'
  },
  REFERRER: {
    id: 'referrer',
    name: 'Friend Connector',
    description: 'Referred 3 friends',
    icon: '🤝',
    color: 'from-pink-500 to-rose-500'
  },
};

export const GamificationProvider = ({ children }) => {
  const [gamificationData, setGamificationData] = useState(() => {
    const saved = localStorage.getItem('rez-gamification');
    return saved ? JSON.parse(saved) : {
      level: 1,
      xp: 0,
      xpToNextLevel: 100,
      streak: 0,
      lastCheckIn: null,
      badges: [],
      totalPurchases: 0,
      totalSavings: 0,
      storesVisited: [],
      reviewsGiven: 0,
      friendsReferred: 0,
    };
  });

  useEffect(() => {
    localStorage.setItem('rez-gamification', JSON.stringify(gamificationData));
  }, [gamificationData]);

  // Check if streak should be reset
  useEffect(() => {
    if (gamificationData.lastCheckIn) {
      const lastCheckIn = new Date(gamificationData.lastCheckIn);
      const today = new Date();
      const diffDays = Math.floor((today - lastCheckIn) / (1000 * 60 * 60 * 24));

      if (diffDays > 1) {
        // Streak broken
        setGamificationData((prev) => ({
          ...prev,
          streak: 0,
        }));
      }
    }
  }, []);

  const addXP = (amount, reason = '') => {
    setGamificationData((prev) => {
      const newXP = prev.xp + amount;
      let newLevel = prev.level;
      let xpToNextLevel = prev.xpToNextLevel;

      // Level up logic
      if (newXP >= prev.xpToNextLevel) {
        newLevel += 1;
        xpToNextLevel = Math.floor(100 * Math.pow(1.5, newLevel - 1));
      }

      return {
        ...prev,
        xp: newXP,
        level: newLevel,
        xpToNextLevel,
      };
    });

    // Show notification for XP gain
    return { amount, reason };
  };

  const dailyCheckIn = () => {
    const today = new Date().toDateString();
    const lastCheckIn = gamificationData.lastCheckIn
      ? new Date(gamificationData.lastCheckIn).toDateString()
      : null;

    if (today === lastCheckIn) {
      return { success: false, message: 'Already checked in today!' };
    }

    setGamificationData((prev) => {
      const yesterday = new Date(Date.now() - 24 * 60 * 60 * 1000).toDateString();
      const isConsecutive = lastCheckIn === yesterday;
      const newStreak = isConsecutive ? prev.streak + 1 : 1;

      // Check for streak badges
      const newBadges = [...prev.badges];
      if (newStreak >= 7 && !prev.badges.includes('streak_7')) {
        newBadges.push('streak_7');
      }
      if (newStreak >= 30 && !prev.badges.includes('streak_30')) {
        newBadges.push('streak_30');
      }

      return {
        ...prev,
        streak: newStreak,
        lastCheckIn: new Date().toISOString(),
        badges: newBadges,
      };
    });

    // Award XP for check-in
    const streakBonus = Math.min(gamificationData.streak, 10);
    addXP(10 + streakBonus, 'Daily check-in');

    return {
      success: true,
      streak: gamificationData.streak + 1,
      xpEarned: 10 + streakBonus,
    };
  };

  const unlockBadge = (badgeId) => {
    if (gamificationData.badges.includes(badgeId)) {
      return false; // Already unlocked
    }

    setGamificationData((prev) => ({
      ...prev,
      badges: [...prev.badges, badgeId],
    }));

    // Award XP for unlocking badge
    addXP(50, `Badge unlocked: ${BADGES[badgeId]?.name}`);

    return true;
  };

  const recordPurchase = (amount, savings) => {
    setGamificationData((prev) => {
      const newTotal = prev.totalPurchases + 1;
      const newSavings = prev.totalSavings + savings;
      const newBadges = [...prev.badges];

      // Check for badges
      if (newTotal === 1 && !prev.badges.includes('first_purchase')) {
        newBadges.push('first_purchase');
      }
      if (newSavings >= 10 && !prev.badges.includes('saver_10')) {
        newBadges.push('saver_10');
      }
      if (newSavings >= 100 && !prev.badges.includes('saver_100')) {
        newBadges.push('saver_100');
      }

      return {
        ...prev,
        totalPurchases: newTotal,
        totalSavings: newSavings,
        badges: newBadges,
      };
    });

    addXP(20, 'Purchase made');
  };

  const visitStore = (storeId) => {
    setGamificationData((prev) => {
      if (prev.storesVisited.includes(storeId)) {
        return prev;
      }

      const newStores = [...prev.storesVisited, storeId];
      const newBadges = [...prev.badges];

      if (newStores.length >= 10 && !prev.badges.includes('explorer')) {
        newBadges.push('explorer');
      }

      return {
        ...prev,
        storesVisited: newStores,
        badges: newBadges,
      };
    });
  };

  const value = {
    ...gamificationData,
    badges: BADGES,
    unlockedBadges: gamificationData.badges.map((id) => BADGES[id.toUpperCase()]).filter(Boolean),
    addXP,
    dailyCheckIn,
    unlockBadge,
    recordPurchase,
    visitStore,
    progressToNextLevel: (gamificationData.xp / gamificationData.xpToNextLevel) * 100,
  };

  return <GamificationContext.Provider value={value}>{children}</GamificationContext.Provider>;
};

export const useGamification = () => {
  const context = useContext(GamificationContext);
  if (!context) {
    throw new Error('useGamification must be used within GamificationProvider');
  }
  return context;
};
