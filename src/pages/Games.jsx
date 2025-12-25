import { Link } from 'react-router-dom';
import { ArrowLeft, Gamepad2, Trophy, Coins, Users, Flame, Clock, Star, Gift, Zap, TrendingUp, Heart } from 'lucide-react';
import { useWallet } from '../contexts/WalletContext';
import BottomNavManager from '../components/layout/BottomNavManager';

const Games = () => {
  const { coins } = useWallet();

  const dailyGames = [
    { id: 1, title: 'Spin the Wheel', icon: '🎡', coins: 50, plays: '3 left', color: 'from-purple-500/20 to-pink-500/20', route: '/explore/spin-win' },
    { id: 2, title: 'Daily Check-in', icon: '📅', coins: 25, plays: 'Today', color: 'from-blue-500/20 to-cyan-500/20', route: '/explore/daily-checkin' },
    { id: 3, title: 'Scratch Card', icon: '🎫', coins: 100, plays: '1 left', color: 'from-amber-500/20 to-orange-500/20', route: '/earn/scratch-card' },
    { id: 4, title: 'Coin Hunt', icon: '🪙', coins: 75, plays: 'Unlimited', color: 'from-green-500/20 to-emerald-500/20', route: '/earn/coin-hunt' },
  ];

  const challenges = [
    { id: 1, title: 'Shop 3 Stores Today', progress: 66, reward: 200, icon: '🏪', timeLeft: '6h left' },
    { id: 2, title: 'Invite 5 Friends', progress: 40, reward: 500, icon: '👥', timeLeft: '2d left' },
    { id: 3, title: 'Scan 10 Bills', progress: 80, reward: 300, icon: '📄', timeLeft: '1d left' },
    { id: 4, title: 'Complete Profile', progress: 90, reward: 150, icon: '✅', timeLeft: 'Anytime' },
  ];

  const tournaments = [
    {
      id: 1,
      title: 'Weekend Shopping Sprint',
      prize: '₹10,000',
      participants: 1247,
      endsIn: '2d 5h',
      status: 'Live',
      rank: 23,
      icon: '🏆'
    },
    {
      id: 2,
      title: 'Coin Master Challenge',
      prize: '50,000 coins',
      participants: 892,
      endsIn: '5d',
      status: 'Live',
      rank: 45,
      icon: '🪙'
    },
    {
      id: 3,
      title: 'Referral Rally',
      prize: '₹5,000',
      participants: 543,
      endsIn: '1d 12h',
      status: 'Ending Soon',
      rank: 12,
      icon: '👥'
    },
  ];

  const miniGames = [
    { id: 1, title: 'Quiz Master', icon: '🧠', plays: '5/day', earnings: '250 coins/day' },
    { id: 2, title: 'Memory Match', icon: '🃏', plays: '3/day', earnings: '150 coins/day' },
    { id: 3, title: 'Lucky Draw', icon: '🎰', plays: '1/day', earnings: 'Up to 1000 coins' },
    { id: 4, title: 'Guess the Price', icon: '💰', plays: 'Unlimited', earnings: '50 coins/win' },
  ];

  const achievements = [
    { id: 1, title: 'First Purchase', icon: '🎯', unlocked: true, coins: 100 },
    { id: 2, title: 'Week Streak', icon: '🔥', unlocked: true, coins: 500 },
    { id: 3, title: 'Social Butterfly', icon: '🦋', unlocked: false, coins: 300, progress: 60 },
    { id: 4, title: 'Deal Hunter', icon: '🎪', unlocked: false, coins: 400, progress: 25 },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-black pb-24">
      {/* Header */}
      <div className="sticky top-0 z-40 glass">
        <div className="flex items-center gap-3 px-4 py-3">
          <Link to="/" className="p-2 rounded-full hover:bg-white/10 active:scale-95 transition-all">
            <ArrowLeft className="w-5 h-5 text-rez-navy dark:text-white" />
          </Link>
          <div className="flex-1">
            <h1 className="text-h3 font-poppins text-rez-navy dark:text-white">🎮 Play & Earn</h1>
            <p className="text-caption text-rez-gray-600 dark:text-gray-400">Win coins, compete & have fun!</p>
          </div>
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-amber-500/20">
            <Coins className="w-4 h-4 text-amber-400" />
            <span className="text-sm font-bold text-amber-400">{coins?.toLocaleString() || 0}</span>
          </div>
        </div>
      </div>

      {/* Daily Games */}
      <div className="px-4 py-4">
        <div className="flex items-center justify-between mb-3">
          <div>
            <h2 className="text-h4 font-poppins text-rez-navy dark:text-white">Daily Games</h2>
            <p className="text-caption text-rez-gray-600 dark:text-gray-400">Free coins every day!</p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-3">
          {dailyGames.map((game) => (
            <Link
              key={game.id}
              to={game.route}
              className={`p-4 rounded-2xl bg-gradient-to-br ${game.color} border border-white/20 hover:border-white/40 transition-all active:scale-95`}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-3xl">{game.icon}</span>
                <span className="px-2 py-0.5 rounded-full bg-amber-500/20 text-xs font-bold text-amber-400">
                  +{game.coins}
                </span>
              </div>
              <h3 className="text-sm font-bold text-rez-navy dark:text-white mb-1">{game.title}</h3>
              <p className="text-xs text-rez-gray-600 dark:text-gray-400">{game.plays}</p>
            </Link>
          ))}
        </div>
      </div>

      {/* Active Challenges */}
      <div className="px-4 py-4">
        <div className="flex items-center justify-between mb-3">
          <div>
            <h2 className="text-h4 font-poppins text-rez-navy dark:text-white">Active Challenges</h2>
            <p className="text-caption text-rez-gray-600 dark:text-gray-400">Complete to earn bonus coins</p>
          </div>
          <Link to="/missions" className="text-xs text-emerald-400">View all →</Link>
        </div>
        <div className="space-y-3">
          {challenges.map((challenge) => (
            <div
              key={challenge.id}
              className="p-4 rounded-2xl bg-rez-gray-50 dark:bg-white/5 border border-rez-gray-200 dark:border-white/10"
            >
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <span className="text-2xl">{challenge.icon}</span>
                  <div>
                    <h3 className="text-sm font-bold text-rez-navy dark:text-white">{challenge.title}</h3>
                    <p className="text-xs text-rez-gray-600 dark:text-gray-400">{challenge.timeLeft}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-xs text-amber-400 font-bold">+{challenge.reward} coins</p>
                  <p className="text-xs text-rez-gray-600 dark:text-gray-400">{challenge.progress}%</p>
                </div>
              </div>
              <div className="w-full h-1.5 bg-rez-gray-200 dark:bg-white/10 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full transition-all"
                  style={{ width: `${challenge.progress}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Live Tournaments */}
      <div className="px-4 py-4">
        <div className="flex items-center justify-between mb-3">
          <div>
            <h2 className="text-h4 font-poppins text-rez-navy dark:text-white">🏆 Live Tournaments</h2>
            <p className="text-caption text-rez-gray-600 dark:text-gray-400">Compete with thousands</p>
          </div>
        </div>
        <div className="space-y-3">
          {tournaments.map((tournament) => (
            <div
              key={tournament.id}
              className="p-4 rounded-2xl bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/20"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <span className="text-2xl">{tournament.icon}</span>
                  <div>
                    <h3 className="text-sm font-bold text-rez-navy dark:text-white">{tournament.title}</h3>
                    <p className="text-xs text-rez-gray-600 dark:text-gray-400">
                      {tournament.participants.toLocaleString()} players
                    </p>
                  </div>
                </div>
                {tournament.status === 'Ending Soon' && (
                  <span className="px-2 py-0.5 rounded-full bg-red-500 text-xs font-bold text-white">
                    {tournament.status}
                  </span>
                )}
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs text-rez-gray-600 dark:text-gray-400">Prize Pool</p>
                  <p className="text-sm font-bold text-purple-400">{tournament.prize}</p>
                </div>
                <div className="text-center">
                  <p className="text-xs text-rez-gray-600 dark:text-gray-400">Your Rank</p>
                  <p className="text-sm font-bold text-rez-navy dark:text-white">#{tournament.rank}</p>
                </div>
                <div className="text-right">
                  <p className="text-xs text-rez-gray-600 dark:text-gray-400">Ends In</p>
                  <p className="text-sm font-bold text-red-400">{tournament.endsIn}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Mini Games */}
      <div className="px-4 py-4">
        <div className="flex items-center justify-between mb-3">
          <div>
            <h2 className="text-h4 font-poppins text-rez-navy dark:text-white">Mini Games</h2>
            <p className="text-caption text-rez-gray-600 dark:text-gray-400">Quick & fun</p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-3">
          {miniGames.map((game) => (
            <div
              key={game.id}
              className="p-4 rounded-2xl bg-white dark:bg-white/5 border border-rez-gray-200 dark:border-white/10 hover:border-emerald-500 dark:hover:border-emerald-500 transition-all active:scale-95"
            >
              <span className="text-3xl mb-2 block">{game.icon}</span>
              <h3 className="text-sm font-bold text-rez-navy dark:text-white mb-1">{game.title}</h3>
              <p className="text-xs text-rez-gray-600 dark:text-gray-400 mb-1">{game.plays}</p>
              <p className="text-xs text-emerald-400 font-semibold">{game.earnings}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Achievements */}
      <div className="px-4 py-4">
        <div className="flex items-center justify-between mb-3">
          <div>
            <h2 className="text-h4 font-poppins text-rez-navy dark:text-white">Achievements</h2>
            <p className="text-caption text-rez-gray-600 dark:text-gray-400">Unlock badges & coins</p>
          </div>
          <Link to="/earn/achievements" className="text-xs text-emerald-400">View all →</Link>
        </div>
        <div className="grid grid-cols-2 gap-3">
          {achievements.map((achievement) => (
            <div
              key={achievement.id}
              className={`p-4 rounded-2xl border ${
                achievement.unlocked
                  ? 'bg-gradient-to-br from-amber-500/20 to-yellow-500/20 border-amber-500/30'
                  : 'bg-rez-gray-50 dark:bg-white/5 border-rez-gray-200 dark:border-white/10 opacity-60'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-3xl">{achievement.icon}</span>
                {achievement.unlocked && (
                  <span className="text-xs">✅</span>
                )}
              </div>
              <h3 className="text-sm font-bold text-rez-navy dark:text-white mb-1">{achievement.title}</h3>
              <p className="text-xs text-amber-400 font-semibold">+{achievement.coins} coins</p>
              {!achievement.unlocked && achievement.progress && (
                <div className="mt-2">
                  <div className="w-full h-1 bg-rez-gray-200 dark:bg-white/10 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-emerald-500 rounded-full"
                      style={{ width: `${achievement.progress}%` }}
                    />
                  </div>
                  <p className="text-[10px] text-rez-gray-600 dark:text-gray-400 mt-1">{achievement.progress}% complete</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Leaderboard Preview */}
      <div className="px-4 py-4">
        <div className="p-6 rounded-2xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-blue-500/20 text-center">
          <Trophy className="w-12 h-12 text-amber-400 mx-auto mb-3" />
          <h3 className="text-h4 font-poppins text-rez-navy dark:text-white mb-2">Weekly Leaderboard</h3>
          <p className="text-caption text-rez-gray-600 dark:text-gray-400 mb-4">
            You're ranked #147 this week<br/>
            Top 100 win bonus coins!
          </p>
          <Link
            to="/earn/leaderboard"
            className="inline-block px-6 py-2.5 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-semibold text-sm"
          >
            View Leaderboard
          </Link>
        </div>
      </div>

      {/* Bottom Navigation */}
      <BottomNavManager />
    </div>
  );
};

export default Games;
