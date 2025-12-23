import { useState } from 'react';
import { QrCode, Search, Coins, ArrowRight, Sparkles, CheckCircle } from 'lucide-react';
import { useWallet } from '../../contexts/WalletContext';
import { restaurants } from '../../data/foodData';
import Button from '../common/Button';

const PayAtRestaurant = () => {
  const { rezCoins } = useWallet();
  const [step, setStep] = useState('select'); // select, amount, confirm, success
  const [selectedRestaurant, setSelectedRestaurant] = useState(null);
  const [billAmount, setBillAmount] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  const payEnabledRestaurants = restaurants.filter((r) => r.hasPayAtRestaurant);
  const filteredRestaurants = payEnabledRestaurants.filter((r) =>
    r.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSelectRestaurant = (restaurant) => {
    setSelectedRestaurant(restaurant);
    setStep('amount');
  };

  const handleProceed = () => {
    if (billAmount && parseFloat(billAmount) > 0) {
      setStep('confirm');
    }
  };

  const handlePay = () => {
    setStep('success');
  };

  const handleReset = () => {
    setStep('select');
    setSelectedRestaurant(null);
    setBillAmount('');
    setSearchQuery('');
  };

  const bill = parseFloat(billAmount) || 0;
  const cashback = selectedRestaurant ? (bill * selectedRestaurant.cashbackPercent) / 100 : 0;
  const coinsUsable = Math.min(rezCoins, bill * 0.2); // Max 20% of bill
  const finalAmount = bill - coinsUsable;
  const coinsEarned = selectedRestaurant?.coinsEarned || 0;

  if (step === 'success') {
    return (
      <div className="text-center py-8">
        <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-emerald-500/20 flex items-center justify-center">
          <CheckCircle className="w-10 h-10 text-emerald-400" />
        </div>
        <h3 className="text-xl font-bold text-rez-navy dark:text-white mb-2">Payment Successful!</h3>
        <p className="text-rez-gray-600 dark:text-gray-400 mb-4">
          You paid ₹{finalAmount.toFixed(0)} at {selectedRestaurant.name}
        </p>

        <div className="mx-4 p-4 rounded-2xl bg-amber-500/10 border border-amber-500/20 mb-4">
          <div className="flex items-center justify-center gap-2 mb-2">
            <Sparkles className="w-5 h-5 text-amber-400" />
            <span className="text-lg font-bold text-amber-400">You earned!</span>
          </div>
          <div className="flex items-center justify-center gap-4">
            <div className="text-center">
              <p className="text-2xl font-bold text-rez-navy dark:text-white">{coinsEarned}</p>
              <p className="text-xs text-rez-gray-600 dark:text-gray-400">ReZ Coins</p>
            </div>
            <div className="w-px h-8 bg-rez-gray-100 dark:bg-white/10" />
            <div className="text-center">
              <p className="text-2xl font-bold text-emerald-400">₹{cashback.toFixed(0)}</p>
              <p className="text-xs text-rez-gray-600 dark:text-gray-400">Cashback</p>
            </div>
          </div>
        </div>

        <div className="px-4 space-y-2">
          <Button variant="primary" fullWidth>
            Share & Earn +₹{selectedRestaurant.reviewBonus}
          </Button>
          <Button variant="secondary" fullWidth onClick={handleReset}>
            Done
          </Button>
        </div>
      </div>
    );
  }

  if (step === 'confirm') {
    return (
      <div className="p-4">
        <h3 className="text-lg font-semibold text-rez-navy dark:text-white mb-4">Confirm Payment</h3>

        {/* Restaurant */}
        <div className="flex items-center gap-3 p-3 rounded-xl bg-rez-gray-50 dark:bg-white/5 mb-4">
          <img
            src={selectedRestaurant.image}
            alt={selectedRestaurant.name}
            className="w-12 h-12 rounded-xl object-cover"
          />
          <div>
            <p className="font-medium text-rez-navy dark:text-white">{selectedRestaurant.name}</p>
            <p className="text-xs text-rez-gray-600 dark:text-gray-400">{selectedRestaurant.distance}</p>
          </div>
        </div>

        {/* Bill breakdown */}
        <div className="p-4 rounded-xl bg-rez-gray-100 dark:bg-[#1C1C1E] space-y-3 mb-4">
          <div className="flex items-center justify-between">
            <span className="text-rez-gray-600 dark:text-gray-400">Bill Amount</span>
            <span className="text-rez-navy dark:text-white">₹{bill.toFixed(0)}</span>
          </div>
          <div className="flex items-center justify-between text-amber-400">
            <span>ReZ Coins Used</span>
            <span>-₹{coinsUsable.toFixed(0)}</span>
          </div>
          <div className="h-px bg-rez-gray-100 dark:bg-white/10" />
          <div className="flex items-center justify-between">
            <span className="font-semibold text-rez-navy dark:text-white">You Pay</span>
            <span className="text-xl font-bold text-emerald-400">₹{finalAmount.toFixed(0)}</span>
          </div>
        </div>

        {/* Rewards */}
        <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 mb-4">
          <p className="text-xs text-rez-gray-600 dark:text-gray-400 mb-2">You'll earn</p>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1 text-amber-400">
              <Coins className="w-4 h-4" />
              <span className="font-medium">{coinsEarned} coins</span>
            </div>
            <div className="flex items-center gap-1 text-emerald-400">
              <span className="font-medium">₹{cashback.toFixed(0)} cashback</span>
            </div>
          </div>
        </div>

        <div className="space-y-2">
          <Button variant="primary" fullWidth onClick={handlePay}>
            Pay ₹{finalAmount.toFixed(0)}
          </Button>
          <Button variant="ghost" fullWidth onClick={() => setStep('amount')}>
            Go Back
          </Button>
        </div>
      </div>
    );
  }

  if (step === 'amount') {
    return (
      <div className="p-4">
        <button
          onClick={() => setStep('select')}
          className="text-sm text-emerald-400 mb-4"
        >
          ← Change restaurant
        </button>

        {/* Selected restaurant */}
        <div className="flex items-center gap-3 p-3 rounded-xl bg-rez-gray-50 dark:bg-white/5 mb-6">
          <img
            src={selectedRestaurant.image}
            alt={selectedRestaurant.name}
            className="w-12 h-12 rounded-xl object-cover"
          />
          <div className="flex-1">
            <p className="font-medium text-rez-navy dark:text-white">{selectedRestaurant.name}</p>
            <p className="text-xs text-emerald-400">
              {selectedRestaurant.cashbackPercent}% cashback
            </p>
          </div>
        </div>

        {/* Amount input */}
        <div className="mb-6">
          <label className="block text-sm text-rez-gray-600 dark:text-gray-400 mb-2">Enter Bill Amount</label>
          <div className="relative">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-2xl text-rez-gray-600 dark:text-gray-500">
              ₹
            </span>
            <input
              type="number"
              value={billAmount}
              onChange={(e) => setBillAmount(e.target.value)}
              placeholder="0"
              className="w-full pl-12 pr-4 py-4 rounded-xl bg-rez-gray-100 dark:bg-white/10 text-2xl font-bold text-rez-navy dark:text-white placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>
        </div>

        {/* Quick amounts */}
        <div className="grid grid-cols-4 gap-2 mb-6">
          {[500, 1000, 1500, 2000].map((amount) => (
            <button
              key={amount}
              onClick={() => setBillAmount(amount.toString())}
              className="py-2 rounded-lg bg-rez-gray-50 dark:bg-white/5 text-sm text-rez-gray-600 dark:text-gray-400 hover:bg-rez-gray-100 dark:bg-white/10 transition-colors"
            >
              ₹{amount}
            </button>
          ))}
        </div>

        {/* Coins available */}
        <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/20 mb-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Coins className="w-4 h-4 text-amber-400" />
              <span className="text-sm text-rez-navy dark:text-white">ReZ Coins Available</span>
            </div>
            <span className="text-sm font-medium text-amber-400">{rezCoins}</span>
          </div>
          <p className="text-xs text-rez-gray-600 dark:text-gray-400 mt-1">Use up to 20% of bill with coins</p>
        </div>

        <Button
          variant="primary"
          fullWidth
          onClick={handleProceed}
          disabled={!billAmount || parseFloat(billAmount) <= 0}
        >
          Proceed <ArrowRight className="w-4 h-4 ml-1" />
        </Button>
      </div>
    );
  }

  // Select restaurant step
  return (
    <div className="p-4">
      {/* Header */}
      <div className="text-center mb-6">
        <div className="w-16 h-16 mx-auto mb-3 rounded-2xl bg-emerald-500/20 flex items-center justify-center">
          <QrCode className="w-8 h-8 text-emerald-400" />
        </div>
        <h3 className="text-lg font-semibold text-rez-navy dark:text-white">Pay at Restaurant</h3>
        <p className="text-sm text-rez-gray-600 dark:text-gray-400">Scan QR or select restaurant</p>
      </div>

      {/* Scan QR Button */}
      <Button variant="primary" fullWidth className="mb-4">
        <QrCode className="w-4 h-4 mr-2" />
        Scan Restaurant QR
      </Button>

      <div className="flex items-center gap-3 mb-4">
        <div className="flex-1 h-px bg-rez-gray-100 dark:bg-white/10" />
        <span className="text-xs text-rez-gray-600 dark:text-gray-500">or select manually</span>
        <div className="flex-1 h-px bg-rez-gray-100 dark:bg-white/10" />
      </div>

      {/* Search */}
      <div className="relative mb-4">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-rez-gray-600 dark:text-gray-500" />
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search restaurant..."
          className="w-full pl-10 pr-4 py-3 rounded-xl bg-rez-gray-100 dark:bg-white/10 text-rez-navy dark:text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald-500"
        />
      </div>

      {/* Restaurant list */}
      <div className="space-y-2 max-h-64 overflow-y-auto">
        {filteredRestaurants.map((restaurant) => (
          <button
            key={restaurant.id}
            onClick={() => handleSelectRestaurant(restaurant)}
            className="w-full flex items-center gap-3 p-3 rounded-xl bg-rez-gray-50 dark:bg-white/5 hover:bg-rez-gray-100 dark:bg-white/10 transition-colors text-left"
          >
            <img
              src={restaurant.image}
              alt={restaurant.name}
              className="w-12 h-12 rounded-xl object-cover"
            />
            <div className="flex-1">
              <p className="font-medium text-rez-navy dark:text-white">{restaurant.name}</p>
              <p className="text-xs text-rez-gray-600 dark:text-gray-400">{restaurant.distance}</p>
            </div>
            <div className="text-right">
              <p className="text-sm font-medium text-emerald-400">
                {restaurant.cashbackPercent}%
              </p>
              <p className="text-[10px] text-rez-gray-600 dark:text-gray-500">cashback</p>
            </div>
          </button>
        ))}
      </div>

      {/* UX Copy */}
      <div className="mt-4 p-3 rounded-xl bg-rez-gray-50 dark:bg-white/5 text-center">
        <p className="text-sm text-rez-gray-700 dark:text-gray-300">
          <span className="text-emerald-400">Scan. Pay. Save. Earn.</span>
        </p>
        <p className="text-xs text-rez-gray-600 dark:text-gray-500 mt-1">
          Every payment earns you coins & cashback
        </p>
      </div>
    </div>
  );
};

export default PayAtRestaurant;
