const StoreSocialProof = ({ theme, count, amount, label = 'purchases' }) => {
  return (
    <div className="mx-4 mb-6 p-4 rounded-2xl bg-[#2C2C2E]">
      <div className="flex items-center gap-3">
        <div className="flex -space-x-2">
          <div
            className="w-8 h-8 rounded-full border-2 border-[#2C2C2E] flex items-center justify-center"
            style={{ backgroundColor: `${theme.primary}30` }}
          >
            <span className="text-xs">🛍️</span>
          </div>
          <div className="w-8 h-8 rounded-full bg-blue-500/30 border-2 border-[#2C2C2E] flex items-center justify-center">
            <span className="text-xs">💰</span>
          </div>
          <div className="w-8 h-8 rounded-full bg-purple-500/30 border-2 border-[#2C2C2E] flex items-center justify-center">
            <span className="text-xs">⭐</span>
          </div>
        </div>
        <div className="flex-1">
          <p className="text-sm text-white">{count} {label} this week</p>
          <p className="text-xs text-gray-400">₹{amount.toLocaleString()} saved with ReZ</p>
        </div>
      </div>
    </div>
  );
};

export default StoreSocialProof;
