import { Gift, ChevronRight } from 'lucide-react';

const DealCard = ({ deal }) => (
  <div className={`min-w-[160px] p-4 rounded-2xl bg-gradient-to-br ${deal.color} shrink-0`}>
    <span className="text-3xl">{deal.icon}</span>
    <h4 className="font-semibold text-rez-navy dark:text-white mt-2">{deal.title}</h4>
    <p className="text-xs text-white/80 mt-1">{deal.description}</p>
    <p className="text-[10px] text-white/60 mt-2">{deal.validTill}</p>
  </div>
);

const PerkCard = ({ perk }) => (
  <div className="flex items-center gap-3 p-3 rounded-xl bg-rez-gray-50 dark:bg-white/5">
    <span className="text-2xl">{perk.icon}</span>
    <div>
      <p className="text-sm font-medium text-rez-navy dark:text-white">{perk.title}</p>
      <p className="text-xs text-rez-gray-600 dark:text-gray-400">{perk.description}</p>
    </div>
  </div>
);

const EventDealsSection = ({ deals, perks }) => {
  return (
    <div className="space-y-6">
      {/* Deals */}
      <div>
        <div className="flex items-center justify-between px-4 mb-3">
          <div className="flex items-center gap-2">
            <span className="text-xl">🪙</span>
            <h2 className="font-semibold text-rez-navy dark:text-white">Event Rewards</h2>
          </div>
          <button className="text-xs text-emerald-400 flex items-center gap-1">
            View All <ChevronRight className="w-3 h-3" />
          </button>
        </div>
        <div className="flex gap-3 px-4 overflow-x-auto hide-scrollbar pb-2">
          {deals.map((deal) => (
            <DealCard key={deal.id} deal={deal} />
          ))}
        </div>
      </div>

      {/* Perks */}
      <div className="px-4">
        <div className="flex items-center gap-2 mb-3">
          <Gift className="w-5 h-5 text-purple-400" />
          <h2 className="font-semibold text-rez-navy dark:text-white">Special Perks</h2>
        </div>
        <div className="grid grid-cols-2 gap-2">
          {perks.map((perk) => (
            <PerkCard key={perk.id} perk={perk} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default EventDealsSection;
