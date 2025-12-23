import { CreditCard, Calendar, Clock, Coins } from 'lucide-react';
import { bankOffers, emiOptions } from '../../data/electronicsData';

const BankOffersSection = () => {
  return (
    <div className="px-4">
      <div className="flex items-center gap-2 mb-4">
        <CreditCard className="w-5 h-5 text-blue-400" />
        <h2 className="font-semibold text-rez-navy dark:text-white">Smart Payments</h2>
      </div>

      {/* Payment Options */}
      <div className="grid grid-cols-2 gap-3 mb-4">
        <div className="p-3 rounded-xl bg-white dark:bg-[#2C2C2E]">
          <div className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center mb-2">
            <span className="text-xl">🏦</span>
          </div>
          <h4 className="text-sm font-medium text-rez-navy dark:text-white">Bank Offers</h4>
          <p className="text-xs text-rez-gray-600 dark:text-gray-400">Up to ₹5,000 off</p>
        </div>

        <div className="p-3 rounded-xl bg-white dark:bg-[#2C2C2E]">
          <div className="w-10 h-10 rounded-lg bg-green-500/20 flex items-center justify-center mb-2">
            <Calendar className="w-5 h-5 text-green-400" />
          </div>
          <h4 className="text-sm font-medium text-rez-navy dark:text-white">No Cost EMI</h4>
          <p className="text-xs text-rez-gray-600 dark:text-gray-400">0% interest</p>
        </div>

        <div className="p-3 rounded-xl bg-white dark:bg-[#2C2C2E]">
          <div className="w-10 h-10 rounded-lg bg-purple-500/20 flex items-center justify-center mb-2">
            <Clock className="w-5 h-5 text-purple-400" />
          </div>
          <h4 className="text-sm font-medium text-rez-navy dark:text-white">Buy Now Pay Later</h4>
          <p className="text-xs text-rez-gray-600 dark:text-gray-400">Pay in 30 days</p>
        </div>

        <div className="p-3 rounded-xl bg-white dark:bg-[#2C2C2E]">
          <div className="w-10 h-10 rounded-lg bg-amber-500/20 flex items-center justify-center mb-2">
            <Coins className="w-5 h-5 text-amber-400" />
          </div>
          <h4 className="text-sm font-medium text-rez-navy dark:text-white">Pay with Coins</h4>
          <p className="text-xs text-rez-gray-600 dark:text-gray-400">Use ReZ Coins</p>
        </div>
      </div>

      {/* Bank Offers */}
      <h3 className="text-sm font-medium text-rez-navy dark:text-white mb-3">Active Bank Offers</h3>
      <div className="space-y-2">
        {bankOffers.map((offer) => (
          <div
            key={offer.id}
            className="flex items-center gap-3 p-3 rounded-xl bg-white dark:bg-[#2C2C2E]"
          >
            <div className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center">
              <span className="text-lg">{offer.icon}</span>
            </div>
            <div className="flex-1">
              <p className="text-sm font-medium text-rez-navy dark:text-white">{offer.bank}</p>
              <p className="text-xs text-emerald-400">{offer.offer}</p>
            </div>
            <div className="text-right">
              <p className="text-xs text-rez-gray-600 dark:text-gray-400">Max ₹{offer.maxDiscount}</p>
              <p className="text-[10px] text-rez-gray-600 dark:text-gray-500">{offer.cardType}</p>
            </div>
          </div>
        ))}
      </div>

      {/* EMI Calculator Preview */}
      <div className="mt-4 p-4 rounded-xl bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20">
        <h4 className="text-sm font-medium text-rez-navy dark:text-white mb-2">Example EMI</h4>
        <p className="text-xs text-rez-gray-600 dark:text-gray-400 mb-3">For ₹30,000 purchase</p>
        <div className="flex items-center justify-between">
          <div className="text-center">
            <p className="text-lg font-bold text-rez-navy dark:text-white">₹5,000</p>
            <p className="text-[10px] text-rez-gray-600 dark:text-gray-400">6 months @ 0%</p>
          </div>
          <div className="text-center">
            <p className="text-lg font-bold text-amber-400">-₹5,000</p>
            <p className="text-[10px] text-rez-gray-600 dark:text-gray-400">ReZ Coins</p>
          </div>
          <div className="text-center">
            <p className="text-lg font-bold text-emerald-400">₹4,167</p>
            <p className="text-[10px] text-rez-gray-600 dark:text-gray-400">per month</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BankOffersSection;
