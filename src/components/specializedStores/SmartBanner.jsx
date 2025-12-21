import { Zap, Users } from 'lucide-react';

const SmartBanner = ({ theme, earnAmount, nearbyCount }) => {
  return (
    <div
      className="mx-4 my-3 p-4 rounded-2xl border"
      style={{
        backgroundColor: `${theme.primary}15`,
        borderColor: `${theme.primary}30`,
      }}
    >
      <div className="flex items-center gap-3">
        <div
          className="w-12 h-12 rounded-xl flex items-center justify-center"
          style={{ backgroundColor: `${theme.primary}30` }}
        >
          <Zap className="w-6 h-6" style={{ color: theme.primary }} />
        </div>
        <div className="flex-1">
          <p className="text-sm font-medium text-white">
            Earn up to <span style={{ color: theme.primary }}>₹{earnAmount.toLocaleString()}</span> back in ReZ Coins today
          </p>
          <div className="flex items-center gap-1 mt-1">
            <Users className="w-3.5 h-3.5 text-gray-400" />
            <span className="text-xs text-gray-400">{nearbyCount} people nearby earned rewards here today</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SmartBanner;
