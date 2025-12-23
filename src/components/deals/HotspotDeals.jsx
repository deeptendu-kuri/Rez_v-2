import { Link } from 'react-router-dom';
import { hotspotDeals } from '../../data/deals';
import { MapPin, ChevronRight } from 'lucide-react';

const HotspotDeals = () => {
  return (
    <section className="py-4">
      <div className="px-4 mb-3">
        <div className="flex items-center gap-2">
          <span className="text-xl">📍</span>
          <div>
            <h2 className="text-lg font-semibold text-rez-navy dark:text-white">Nearby Hotspots</h2>
            <p className="text-sm text-rez-gray-600 dark:text-gray-400">Top deals by area</p>
          </div>
        </div>
      </div>

      <div className="flex gap-3 px-4 overflow-x-auto hide-scrollbar pb-2">
        {hotspotDeals.map((hotspot, index) => (
          <Link
            key={index}
            to={`/deal-store?area=${encodeURIComponent(hotspot.area)}`}
            className="min-w-[180px] p-4 rounded-2xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-blue-500/20 shrink-0 active:bg-blue-500/10"
          >
            <div className="flex items-center gap-2 mb-2">
              <MapPin className="w-4 h-4 text-blue-400" />
              <span className="font-semibold text-rez-navy dark:text-white">{hotspot.area}</span>
            </div>

            <p className="text-sm text-rez-gray-700 dark:text-gray-300">{hotspot.topDeal}</p>

            <div className="flex items-center justify-between mt-3">
              <span className="text-xs text-rez-gray-600 dark:text-gray-400">{hotspot.count} deals</span>
              <ChevronRight className="w-4 h-4 text-rez-gray-600 dark:text-gray-400" />
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default HotspotDeals;
