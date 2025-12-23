import { loyaltyProgressDeals } from '../../data/deals';
import Card from '../common/Card';
import { Gift } from 'lucide-react';

const LoyaltyProgress = () => {
  if (!loyaltyProgressDeals || loyaltyProgressDeals.length === 0) return null;

  return (
    <section className="py-4">
      <div className="px-4 mb-3">
        <div className="flex items-center gap-2">
          <span className="text-xl">🎯</span>
          <div>
            <h2 className="text-lg font-semibold text-rez-navy dark:text-white">Almost There!</h2>
            <p className="text-sm text-rez-gray-600 dark:text-gray-400">Complete to unlock rewards</p>
          </div>
        </div>
      </div>

      <div className="space-y-3 px-4">
        {loyaltyProgressDeals.map((deal) => (
          <Card key={deal.id} className="p-4" hover>
            <div className="flex items-center gap-4">
              <img
                src={deal.storeLogo}
                alt={deal.store}
                className="w-12 h-12 rounded-xl object-contain bg-white"
                onError={(e) => {
                  e.target.style.display = 'none';
                }}
              />

              <div className="flex-1">
                <p className="font-medium text-rez-navy dark:text-white">{deal.store}</p>

                {deal.currentVisits !== undefined && (
                  <p className="text-sm text-rez-gray-600 dark:text-gray-400">
                    {deal.currentVisits} of {deal.requiredVisits} visits
                  </p>
                )}
                {deal.currentSpend !== undefined && (
                  <p className="text-sm text-rez-gray-600 dark:text-gray-400">
                    ₹{deal.currentSpend} of ₹{deal.requiredSpend} spent
                  </p>
                )}

                {/* Progress bar */}
                <div className="mt-2 h-2 bg-rez-gray-100 dark:bg-white/10 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-emerald-500 to-green-400 rounded-full transition-all"
                    style={{ width: `${deal.progress}%` }}
                  />
                </div>
              </div>

              <div className="text-right">
                <div className="w-10 h-10 rounded-xl bg-amber-500/20 flex items-center justify-center mb-1">
                  <Gift className="w-5 h-5 text-amber-400" />
                </div>
                <p className="text-xs text-rez-gray-600 dark:text-gray-400 max-w-[80px]">{deal.reward}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default LoyaltyProgress;
