import { bankDeals } from '../../data/deals';
import Card from '../common/Card';
import { CreditCard } from 'lucide-react';

const BankDeals = () => {
  return (
    <section className="py-4">
      <div className="px-4 mb-3">
        <div className="flex items-center gap-2">
          <span className="text-xl">🏦</span>
          <div>
            <h2 className="text-lg font-semibold text-white">Bank & Wallet Offers</h2>
            <p className="text-sm text-gray-400">Extra rewards on select payment methods</p>
          </div>
        </div>
      </div>

      <div className="flex gap-3 px-4 overflow-x-auto hide-scrollbar pb-2">
        {bankDeals.map((deal) => (
          <Card
            key={deal.id}
            className="min-w-[200px] p-4 shrink-0"
            hover
          >
            <div className="flex items-center gap-3 mb-3">
              <img
                src={deal.logo}
                alt={deal.bank}
                className="w-10 h-10 rounded-lg object-contain bg-white"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.parentElement.innerHTML = `<div class="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center"><span class="text-blue-400"><CreditCard /></span></div>`;
                }}
              />
              <div>
                <p className="font-medium text-white">{deal.bank}</p>
                <p className="text-xs text-gray-400">{deal.cardType}</p>
              </div>
            </div>

            <p className="text-emerald-400 font-semibold">{deal.offer}</p>
            {deal.minSpend && (
              <p className="text-xs text-gray-400 mt-1">Min. spend: {deal.minSpend}</p>
            )}
            {deal.maxDiscount && (
              <p className="text-xs text-gray-400 mt-1">Max: {deal.maxDiscount}</p>
            )}
          </Card>
        ))}
      </div>
    </section>
  );
};

export default BankDeals;
