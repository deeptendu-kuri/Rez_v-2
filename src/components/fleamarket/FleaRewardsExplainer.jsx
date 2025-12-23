import { Coins, Camera, MessageSquare, Share2, Star, Gift } from 'lucide-react';

const RewardItem = ({ icon: Icon, title, coins, color }) => (
  <div className="flex items-center gap-3 p-3 rounded-xl bg-rez-gray-50 dark:bg-white/5">
    <div className={`p-2 rounded-lg ${color}`}>
      <Icon className="w-4 h-4 text-rez-navy dark:text-white" />
    </div>
    <div className="flex-1">
      <p className="text-sm text-rez-navy dark:text-white">{title}</p>
    </div>
    <div className="flex items-center gap-1 text-amber-400">
      <Coins className="w-3.5 h-3.5" />
      <span className="text-sm font-medium">+{coins}</span>
    </div>
  </div>
);

const FleaRewardsExplainer = ({ compact = false }) => {
  const rewards = [
    { icon: Coins, title: 'Every purchase', coins: '5-20%', color: 'bg-emerald-500/30' },
    { icon: Share2, title: 'Share on social', coins: '10', color: 'bg-blue-500/30' },
    { icon: Camera, title: 'Upload stall photo', coins: '15', color: 'bg-purple-500/30' },
    { icon: Star, title: 'Write a review', coins: '20', color: 'bg-amber-500/30' },
    { icon: MessageSquare, title: 'First chat with seller', coins: '5', color: 'bg-pink-500/30' },
  ];

  if (compact) {
    return (
      <div className="p-4 rounded-2xl bg-gradient-to-r from-amber-500/20 to-emerald-500/20 border border-amber-500/20">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-xl bg-amber-500/30 flex items-center justify-center">
            <Coins className="w-6 h-6 text-amber-400" />
          </div>
          <div className="flex-1">
            <p className="font-semibold text-rez-navy dark:text-white">Earn ReZ Coins</p>
            <p className="text-sm text-rez-gray-700 dark:text-gray-300">Spend ₹500 · Earn ₹100 back</p>
          </div>
          <Gift className="w-6 h-6 text-emerald-400" />
        </div>
      </div>
    );
  }

  return (
    <div className="rounded-2xl overflow-hidden">
      {/* Header */}
      <div className="p-4 bg-gradient-to-r from-amber-500/20 to-emerald-500/20">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-xl bg-amber-500/30 flex items-center justify-center">
            <Coins className="w-6 h-6 text-amber-400" />
          </div>
          <div>
            <h3 className="font-bold text-rez-navy dark:text-white">ReZ Coins at Flea Market</h3>
            <p className="text-sm text-rez-gray-700 dark:text-gray-300">Multiple ways to earn rewards</p>
          </div>
        </div>
      </div>

      {/* Reward items */}
      <div className="p-4 bg-rez-gray-100 dark:bg-[#1C1C1E] space-y-2">
        {rewards.map((reward, index) => (
          <RewardItem key={index} {...reward} />
        ))}
      </div>

      {/* Bottom note */}
      <div className="p-4 bg-white dark:bg-[#2C2C2E] border-t border-rez-gray-200 dark:border-white/5">
        <p className="text-xs text-rez-gray-600 dark:text-gray-400 text-center">
          Some booths accept <span className="text-amber-400">full coin payment</span> ·
          Coins expire in 30 days
        </p>
      </div>
    </div>
  );
};

export default FleaRewardsExplainer;
