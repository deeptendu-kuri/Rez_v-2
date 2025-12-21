import { useState } from 'react';
import { useWallet } from '../contexts/WalletContext';
import { ArrowUpRight, ArrowDownLeft, Clock, ChevronRight, CreditCard, Smartphone } from 'lucide-react';
import Card from '../components/common/Card';
import Badge from '../components/common/Badge';

const Wallet = () => {
  const {
    rezCoins,
    brandedCoins,
    promoCoins,
    totalCoins,
    transactions,
    pendingCashback,
    paymentMethods
  } = useWallet();

  const [activeTab, setActiveTab] = useState('coins'); // coins | history | pending

  return (
    <div className="pb-4">
      {/* Header */}
      <div className="px-4 pt-2 pb-4">
        <h1 className="text-2xl font-bold text-white">Your Rewards</h1>
        <p className="text-sm text-gray-400 mt-1">One wallet. Every reward.</p>
      </div>

      {/* Total Balance Card */}
      <div className="mx-4 p-6 rounded-3xl bg-gradient-to-br from-emerald-500/20 via-emerald-600/10 to-amber-500/20 border border-white/10">
        <p className="text-sm text-gray-400">Total Balance</p>
        <div className="flex items-baseline gap-2 mt-1">
          <span className="text-4xl font-bold text-white">{totalCoins.toLocaleString()}</span>
          <span className="text-amber-400">🪙</span>
        </div>
        <p className="text-sm text-emerald-400 mt-2">≈ ₹{(totalCoins * 0.5).toLocaleString()} value</p>

        {/* Coin Breakdown */}
        <div className="grid grid-cols-3 gap-3 mt-6">
          <div className="p-3 rounded-xl bg-white/5">
            <p className="text-xs text-gray-400">ReZ Coins</p>
            <p className="text-lg font-semibold text-white">{rezCoins.toLocaleString()}</p>
          </div>
          <div className="p-3 rounded-xl bg-white/5">
            <p className="text-xs text-gray-400">Branded</p>
            <p className="text-lg font-semibold text-amber-400">
              {Object.values(brandedCoins).reduce((a, b) => a + b, 0)}
            </p>
          </div>
          <div className="p-3 rounded-xl bg-white/5">
            <p className="text-xs text-gray-400">Promo</p>
            <p className="text-lg font-semibold text-purple-400">{promoCoins}</p>
          </div>
        </div>
      </div>

      {/* Promo Coins Expiry Warning */}
      {promoCoins > 0 && (
        <div className="mx-4 mt-4 p-3 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center gap-3">
          <Clock className="w-5 h-5 text-purple-400" />
          <div className="flex-1">
            <p className="text-sm text-white">{promoCoins} promo coins expiring soon</p>
            <p className="text-xs text-gray-400">Use before Dec 31</p>
          </div>
          <ChevronRight className="w-5 h-5 text-gray-400" />
        </div>
      )}

      {/* Tabs */}
      <div className="flex gap-2 px-4 mt-6 mb-4">
        {[
          { id: 'coins', label: 'Breakdown' },
          { id: 'history', label: 'History' },
          { id: 'pending', label: 'Pending' }
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-4 py-2 rounded-full transition-all ${
              activeTab === tab.id
                ? 'bg-white/20 text-white'
                : 'bg-white/5 text-gray-400'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="px-4">
        {activeTab === 'coins' && (
          <div className="space-y-3">
            {/* Branded Coins List */}
            <h3 className="text-sm font-medium text-gray-400 mb-2">Store-Specific Coins</h3>
            {Object.entries(brandedCoins).map(([store, amount]) => (
              <Card key={store} className="p-4 flex items-center justify-between">
                <div>
                  <p className="font-medium text-white">{store}</p>
                  <p className="text-sm text-gray-400">Use only at this store</p>
                </div>
                <div className="text-right">
                  <p className="font-semibold text-amber-400">{amount} 🪙</p>
                  <p className="text-xs text-gray-400">≈ ₹{amount * 0.5}</p>
                </div>
              </Card>
            ))}

            {/* Payment Methods */}
            <h3 className="text-sm font-medium text-gray-400 mt-6 mb-2">Payment Methods</h3>
            {paymentMethods.map((method) => (
              <Card key={method.id} className="p-4 flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
                  {method.type === 'upi' ? (
                    <Smartphone className="w-5 h-5 text-emerald-400" />
                  ) : (
                    <CreditCard className="w-5 h-5 text-blue-400" />
                  )}
                </div>
                <div className="flex-1">
                  <p className="font-medium text-white">{method.name}</p>
                  <p className="text-sm text-gray-400">{method.type.toUpperCase()}</p>
                </div>
                {method.default && (
                  <Badge variant="primary" size="sm">Default</Badge>
                )}
              </Card>
            ))}
          </div>
        )}

        {activeTab === 'history' && (
          <div className="space-y-3">
            {transactions.map((tx) => (
              <Card key={tx.id} className="p-4 flex items-center gap-4">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                  tx.type === 'earned' || tx.type === 'cashback'
                    ? 'bg-emerald-500/20'
                    : 'bg-red-500/20'
                }`}>
                  {tx.type === 'earned' || tx.type === 'cashback' ? (
                    <ArrowDownLeft className="w-5 h-5 text-emerald-400" />
                  ) : (
                    <ArrowUpRight className="w-5 h-5 text-red-400" />
                  )}
                </div>
                <div className="flex-1">
                  <p className="font-medium text-white">{tx.store}</p>
                  <p className="text-sm text-gray-400">{tx.description}</p>
                  <p className="text-xs text-gray-500">{tx.date}</p>
                </div>
                <div className="text-right">
                  <p className={`font-semibold ${
                    tx.type === 'earned' || tx.type === 'cashback'
                      ? 'text-emerald-400'
                      : 'text-red-400'
                  }`}>
                    {tx.type === 'earned' || tx.type === 'cashback' ? '+' : '-'}{tx.amount}
                  </p>
                  <p className="text-xs text-gray-400">{tx.coinType} coins</p>
                </div>
              </Card>
            ))}
          </div>
        )}

        {activeTab === 'pending' && (
          <div className="space-y-3">
            {pendingCashback.length === 0 ? (
              <div className="text-center py-8">
                <span className="text-4xl">📦</span>
                <p className="text-gray-400 mt-2">No pending cashback</p>
              </div>
            ) : (
              pendingCashback.map((item, i) => (
                <Card key={i} className="p-4 flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/20 flex items-center justify-center">
                    <Clock className="w-5 h-5 text-amber-400" />
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-white">{item.store}</p>
                    <p className="text-sm text-gray-400">
                      {item.status === 'tracking' ? 'Tracking order...' : 'Confirmed, processing'}
                    </p>
                    <p className="text-xs text-gray-500">Expected: {item.expectedDate}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold text-amber-400">+₹{item.amount}</p>
                    <Badge
                      variant={item.status === 'confirmed' ? 'success' : 'default'}
                      size="xs"
                    >
                      {item.status}
                    </Badge>
                  </div>
                </Card>
              ))
            )}

            <div className="mt-4 p-4 rounded-xl bg-white/5">
              <p className="text-sm text-gray-400">
                💡 Cashback from Cash Store purchases is tracked automatically
                and credited within 7-30 days after delivery.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Wallet;
