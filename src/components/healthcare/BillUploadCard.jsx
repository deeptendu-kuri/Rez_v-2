import { Upload, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const BillUploadCard = ({ types }) => {
  return (
    <div className="p-4 rounded-2xl bg-[#2C2C2E]">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center">
          <Upload className="w-6 h-6 text-blue-400" />
        </div>
        <div>
          <h3 className="font-semibold text-white">Upload Bill & Earn</h3>
          <p className="text-sm text-gray-400">ReZ respects real-world healthcare</p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-2">
        {types.map((type) => (
          <Link
            key={type.id}
            to={`/healthcare/upload/${type.id}`}
            className="p-3 rounded-xl bg-white/5 flex items-center gap-2 active:scale-[0.98] transition-transform"
          >
            <span className="text-xl">{type.icon}</span>
            <div className="flex-1 min-w-0">
              <p className="text-sm text-white">{type.name}</p>
              <p className="text-[10px] text-gray-500 truncate">{type.description}</p>
            </div>
            <ChevronRight className="w-4 h-4 text-gray-500 shrink-0" />
          </Link>
        ))}
      </div>

      <div className="mt-3 p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20">
        <p className="text-xs text-emerald-400">
          💡 Upload any healthcare bill to earn ReZ Coins, even if you didn't pay via ReZ
        </p>
      </div>
    </div>
  );
};

export default BillUploadCard;
