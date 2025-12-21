import { Upload, Camera } from 'lucide-react';
import { uploadBillOffers } from '../../data/deals';
import Card from '../common/Card';

const UploadBillCard = () => {
  return (
    <section className="py-4">
      <div className="px-4 mb-3">
        <div className="flex items-center gap-2">
          <span className="text-xl">📄</span>
          <div>
            <h2 className="text-lg font-semibold text-white">Upload Bill, Earn Coins</h2>
            <p className="text-sm text-gray-400">Offline purchases = ReZ rewards</p>
          </div>
        </div>
      </div>

      <div className="px-4 space-y-3">
        {uploadBillOffers.map((offer) => (
          <Card key={offer.id} className="p-4" hover>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/20 flex items-center justify-center">
                <Camera className="w-6 h-6 text-emerald-400" />
              </div>

              <div className="flex-1">
                <p className="font-medium text-white">{offer.store}</p>
                <p className="text-sm text-gray-400">
                  Min. bill: {offer.minBillAmount} • {offer.maxBillsPerDay} bills/day
                </p>
              </div>

              <div className="text-right">
                <div className="flex items-center gap-1">
                  <span className="text-amber-400">🪙</span>
                  <span className="font-semibold text-amber-400">+{offer.coinsPerBill}</span>
                </div>
                <span className="text-xs text-gray-500">per bill</span>
              </div>
            </div>
          </Card>
        ))}

        <button className="w-full p-4 rounded-2xl border-2 border-dashed border-white/20 flex items-center justify-center gap-2 text-gray-400 active:bg-white/5">
          <Upload className="w-5 h-5" />
          <span>Upload a bill now</span>
        </button>
      </div>
    </section>
  );
};

export default UploadBillCard;
