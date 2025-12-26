import { Link } from 'react-router-dom';

const PlayAndEarnSection = () => {
  return (
    <div className="px-4 mb-6">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h2 className="text-h3 font-poppins text-rez-navy dark:text-white">🎮 Play & Earn</h2>
          <p className="text-caption text-rez-gray-600 dark:text-gray-400">Free games, real rewards</p>
        </div>
        <Link to="/earn" className="text-button text-rez-green-500 dark:text-emerald-400 font-poppins">View All →</Link>
      </div>

      <div className="grid grid-cols-2 gap-3 mb-3">
        <Link
          to="/earn/coin-hunt"
          className="p-4 rounded-rez-lg bg-gradient-to-br from-green-500/20 to-emerald-500/10 dark:from-green-500/20 dark:to-emerald-500/10 border border-green-500/30 dark:border-green-500/30 hover:border-green-500/50 dark:hover:border-green-500/50 transition-all active:scale-95"
        >
          <div className="flex items-center gap-2 mb-2">
            <span className="text-3xl">🪙</span>
            <span className="px-2 py-0.5 rounded-full bg-green-500 text-white text-[10px] font-bold">PLAY</span>
          </div>
          <h3 className="text-sm font-semibold text-rez-navy dark:text-white mb-1">Coin Hunt</h3>
          <p className="text-xs text-rez-gray-600 dark:text-gray-400 mb-2">Catch falling coins</p>
          <p className="text-xs font-bold text-green-600 dark:text-green-400">Earn up to 200 coins</p>
        </Link>

        <Link
          to="/earn/scratch-card"
          className="p-4 rounded-rez-lg bg-gradient-to-br from-amber-500/20 to-orange-500/10 dark:from-amber-500/20 dark:to-orange-500/10 border border-amber-500/30 dark:border-amber-500/30 hover:border-amber-500/50 dark:hover:border-amber-500/50 transition-all active:scale-95"
        >
          <div className="flex items-center gap-2 mb-2">
            <span className="text-3xl">🎫</span>
            <span className="px-2 py-0.5 rounded-full bg-amber-500 text-white text-[10px] font-bold">DAILY</span>
          </div>
          <h3 className="text-sm font-semibold text-rez-navy dark:text-white mb-1">Scratch Card</h3>
          <p className="text-xs text-rez-gray-600 dark:text-gray-400 mb-2">1 free card daily</p>
          <p className="text-xs font-bold text-amber-600 dark:text-amber-400">Win 25-200 coins</p>
        </Link>
      </div>

      <div className="grid grid-cols-4 gap-2">
        <Link
          to="/earn/achievements"
          className="p-3 rounded-rez-lg bg-white dark:bg-white/10 border border-rez-gray-200 dark:border-white/10 hover:border-purple-500 dark:hover:border-purple-500 transition-all active:scale-95"
        >
          <span className="text-xl mb-1 block">🏅</span>
          <p className="text-xs font-semibold text-rez-navy dark:text-white mb-0.5">Badges</p>
        </Link>

        <Link
          to="/earn/leaderboard"
          className="p-3 rounded-rez-lg bg-white dark:bg-white/10 border border-rez-gray-200 dark:border-white/10 hover:border-amber-500 dark:hover:border-amber-500 transition-all active:scale-95"
        >
          <span className="text-xl mb-1 block">🏆</span>
          <p className="text-xs font-semibold text-rez-navy dark:text-white mb-0.5">Leaderboard</p>
        </Link>

        <Link
          to="/earn"
          className="p-3 rounded-rez-lg bg-white dark:bg-white/10 border border-rez-gray-200 dark:border-white/10 hover:border-blue-500 dark:hover:border-blue-500 transition-all active:scale-95"
        >
          <span className="text-xl mb-1 block">🎯</span>
          <p className="text-xs font-semibold text-rez-navy dark:text-white mb-0.5">Missions</p>
        </Link>

        <Link
          to="/earn"
          className="p-3 rounded-rez-lg bg-white dark:bg-white/10 border border-rez-gray-200 dark:border-white/10 hover:border-green-500 dark:hover:border-green-500 transition-all active:scale-95"
        >
          <span className="text-xl mb-1 block">🎮</span>
          <p className="text-xs font-semibold text-rez-navy dark:text-white mb-0.5">More</p>
        </Link>
      </div>
    </div>
  );
};

export default PlayAndEarnSection;
