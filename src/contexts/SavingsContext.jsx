import { createContext, useContext, useState, useEffect } from 'react';

const SavingsContext = createContext();

export const SavingsProvider = ({ children }) => {
  const [savingsData, setSavingsData] = useState(() => {
    const saved = localStorage.getItem('rez-savings-data');
    return saved ? JSON.parse(saved) : {
      totalSaved: 0,
      totalCashback: 0,
      totalCoinsEarned: 0,
      transactions: [],
      monthlyData: {}
    };
  });

  useEffect(() => {
    localStorage.setItem('rez-savings-data', JSON.stringify(savingsData));
  }, [savingsData]);

  const addTransaction = (transaction) => {
    setSavingsData((prev) => {
      const newTransaction = {
        id: Date.now(),
        ...transaction,
        date: new Date().toISOString(),
      };

      const updatedTransactions = [newTransaction, ...prev.transactions];

      // Update monthly data
      const month = new Date().toISOString().slice(0, 7); // YYYY-MM
      const monthlyData = { ...prev.monthlyData };
      if (!monthlyData[month]) {
        monthlyData[month] = {
          totalSaved: 0,
          totalCashback: 0,
          totalCoins: 0,
          transactions: 0
        };
      }

      monthlyData[month].totalSaved += transaction.saved || 0;
      monthlyData[month].totalCashback += transaction.cashback || 0;
      monthlyData[month].totalCoins += transaction.coins || 0;
      monthlyData[month].transactions += 1;

      return {
        totalSaved: prev.totalSaved + (transaction.saved || 0),
        totalCashback: prev.totalCashback + (transaction.cashback || 0),
        totalCoinsEarned: prev.totalCoinsEarned + (transaction.coins || 0),
        transactions: updatedTransactions,
        monthlyData
      };
    });
  };

  const getSavingsByPeriod = (period = 'month') => {
    const now = new Date();
    const transactions = savingsData.transactions.filter((transaction) => {
      const transactionDate = new Date(transaction.date);

      switch (period) {
        case 'week':
          const weekAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
          return transactionDate >= weekAgo;
        case 'month':
          return (
            transactionDate.getMonth() === now.getMonth() &&
            transactionDate.getFullYear() === now.getFullYear()
          );
        case 'year':
          return transactionDate.getFullYear() === now.getFullYear();
        default:
          return true;
      }
    });

    return transactions.reduce(
      (acc, transaction) => ({
        saved: acc.saved + (transaction.saved || 0),
        cashback: acc.cashback + (transaction.cashback || 0),
        coins: acc.coins + (transaction.coins || 0),
        count: acc.count + 1,
      }),
      { saved: 0, cashback: 0, coins: 0, count: 0 }
    );
  };

  const getTopCategories = (limit = 5) => {
    const categoryMap = {};

    savingsData.transactions.forEach((transaction) => {
      const category = transaction.category || 'Other';
      if (!categoryMap[category]) {
        categoryMap[category] = {
          name: category,
          saved: 0,
          count: 0,
        };
      }
      categoryMap[category].saved += transaction.saved || 0;
      categoryMap[category].count += 1;
    });

    return Object.values(categoryMap)
      .sort((a, b) => b.saved - a.saved)
      .slice(0, limit);
  };

  const value = {
    savingsData,
    addTransaction,
    getSavingsByPeriod,
    getTopCategories,
    totalSaved: savingsData.totalSaved,
    totalCashback: savingsData.totalCashback,
    totalCoinsEarned: savingsData.totalCoinsEarned,
    transactionCount: savingsData.transactions.length,
  };

  return <SavingsContext.Provider value={value}>{children}</SavingsContext.Provider>;
};

export const useSavings = () => {
  const context = useContext(SavingsContext);
  if (!context) {
    throw new Error('useSavings must be used within SavingsProvider');
  }
  return context;
};
