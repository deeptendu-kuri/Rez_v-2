import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ArrowLeft, Wallet, TrendingUp } from 'lucide-react';

function CashbackDetail() {
  const navigate = useNavigate();
  const { id } = useParams();
  const cashback = { title: 'Extra 20% Cashback', description: 'Shop and earn 20% cashback on all purchases', rate: 20, maxCashback: 1000, validUntil: '2024-01-31', eligibleCategories: ['Electronics', 'Fashion', 'Beauty', 'Grocery'] };

  return (
    <div className="min-h-screen bg-rez-gray-50 dark:bg-dark-900">
      <div className="sticky top-0 z-10 bg-white dark:bg-dark-800 border-b border-rez-gray-200 dark:border-dark-700">
        <div className="px-4 py-4 flex items-center gap-3">
          <button onClick={() => navigate(-1)} className="p-2 -ml-2 rounded-full hover:bg-rez-gray-100 dark:hover:bg-dark-700"><ArrowLeft className="w-5 h-5" /></button>
          <h1 className="text-h3 font-poppins text-rez-navy dark:text-white">Cashback Details</h1>
        </div>
      </div>
      <div className="px-4 py-4 space-y-4">
        <div className="p-6 rounded-2xl bg-gradient-to-br from-emerald-500 to-green-500 text-center text-white">
          <Wallet className="w-16 h-16 mx-auto mb-3" />
          <h2 className="text-2xl font-bold mb-2">{cashback.title}</h2>
          <p className="text-sm opacity-90">{cashback.description}</p>
          <div className="mt-4 p-4 rounded-xl bg-white/20 backdrop-blur-sm">
            <p className="text-4xl font-bold">{cashback.rate}%</p>
            <p className="text-sm opacity-90 mt-1">Cashback Rate</p>
          </div>
        </div>
        <div className="p-4 rounded-xl bg-white dark:bg-dark-800 border border-rez-gray-200 dark:border-dark-700">
          <div className="flex items-center gap-2 mb-3"><TrendingUp className="w-5 h-5 text-emerald-500" /><h3 className="font-bold text-rez-navy dark:text-white">How It Works</h3></div>
          <ol className="space-y-2 text-sm text-rez-gray-700 dark:text-gray-300 list-decimal list-inside">
            <li>Shop from eligible categories</li>
            <li>Complete your purchase</li>
            <li>Get {cashback.rate}% cashback instantly</li>
            <li>Use cashback in your next purchase</li>
          </ol>
        </div>
        <div className="p-4 rounded-xl bg-rez-gray-100 dark:bg-dark-800 space-y-2">
          <div className="flex justify-between"><span className="text-sm text-rez-gray-600 dark:text-gray-400">Maximum Cashback</span><span className="text-sm font-bold text-emerald-600">₹{cashback.maxCashback}</span></div>
          <div className="flex justify-between"><span className="text-sm text-rez-gray-600 dark:text-gray-400">Valid Until</span><span className="text-sm font-bold">{new Date(cashback.validUntil).toLocaleDateString()}</span></div>
        </div>
        <div><h3 className="font-bold text-rez-navy dark:text-white mb-2">Eligible Categories</h3><div className="flex gap-2 flex-wrap">{cashback.eligibleCategories.map((cat, i) => (<span key={i} className="px-3 py-1 rounded-full bg-emerald-500/20 text-sm font-medium text-emerald-600 dark:text-emerald-400">{cat}</span>))}</div></div>
      </div>
    </div>
  );
}

export default CashbackDetail;
