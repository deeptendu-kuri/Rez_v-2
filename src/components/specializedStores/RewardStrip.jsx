import { Coins, Share2, MessageSquare, Clock } from 'lucide-react';

const RewardStrip = ({ theme, payAmount, cashbackAmount, shareBonus, reviewBonus, expiryDays }) => {
  return (
    <div className="mx-4 mb-4 p-3 rounded-xl bg-[#2C2C2E]">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1.5">
            <Coins className="w-4 h-4" style={{ color: theme.primary }} />
            <span className="text-xs text-white">
              Pay ₹{payAmount} → Get <span style={{ color: theme.primary }}>₹{cashbackAmount}</span> back
            </span>
          </div>
          <div className="flex items-center gap-1.5">
            <Share2 className="w-3.5 h-3.5 text-blue-400" />
            <span className="text-[10px] text-gray-400">+{shareBonus}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <MessageSquare className="w-3.5 h-3.5 text-purple-400" />
            <span className="text-[10px] text-gray-400">+{reviewBonus}</span>
          </div>
        </div>
        {expiryDays && (
          <div className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-amber-500/20">
            <Clock className="w-3 h-3 text-amber-400" />
            <span className="text-[10px] text-amber-400">{expiryDays}</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default RewardStrip;
