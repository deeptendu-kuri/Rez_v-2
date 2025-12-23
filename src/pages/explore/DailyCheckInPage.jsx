import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Calendar, Coins, Flame, Gift, TrendingUp, CheckCircle2 } from 'lucide-react';

const checkInRewards = [
  { day: 1, coins: 10, claimed: true },
  { day: 2, coins: 15, claimed: true },
  { day: 3, coins: 20, claimed: true },
  { day: 4, coins: 25, claimed: false, today: true },
  { day: 5, coins: 30, claimed: false },
  { day: 6, coins: 40, claimed: false },
  { day: 7, coins: 100, claimed: false, bonus: true },
];

const DailyCheckInPage = () => {
  const navigate = useNavigate();
  const [currentStreak, setCurrentStreak] = useState(3);
  const [totalEarned, setTotalEarned] = useState(45);
  const [showReward, setShowReward] = useState(false);

  const handleCheckIn = () => {
    const todayReward = checkInRewards.find(r => r.today);
    if (todayReward && !todayReward.claimed) {
      setShowReward(true);
      setCurrentStreak(prev => prev + 1);
      setTotalEarned(prev => prev + todayReward.coins);
      todayReward.claimed = true;

      setTimeout(() => {
        setShowReward(false);
      }, 3000);
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-black pb-24 transition-colors">
      {/* Header */}
      <div className="sticky top-0 z-50 glass border-b border-rez-gray-200 dark:border-white/10">
        <div className="px-4 py-3">
          <div className="flex items-center gap-3">
            <button
              onClick={() => navigate(-1)}
              className="p-2 rounded-full bg-rez-gray-100 dark:bg-white/10 active:scale-95 transition-all"
            >
              <ArrowLeft className="w-5 h-5 text-rez-navy dark:text-white" />
            </button>
            <div className="flex-1">
              <h1 className="text-h3 font-poppins text-rez-navy dark:text-white flex items-center gap-2">
                <Calendar className="w-5 h-5 text-blue-500" />
                Daily Check-In
              </h1>
              <p className="text-xs text-rez-gray-600 dark:text-gray-400 mt-0.5">
                Check in daily to earn bonus coins
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="px-4 py-4">
        <div className="grid grid-cols-3 gap-3">
          <div className="p-3 bg-orange-500/10 border border-orange-500/20 rounded-2xl text-center">
            <Flame className="w-5 h-5 text-orange-500 mx-auto mb-1" />
            <p className="text-lg font-bold text-rez-navy dark:text-white">{currentStreak}</p>
            <p className="text-[10px] text-rez-gray-600 dark:text-gray-400">Day streak</p>
          </div>
          <div className="p-3 bg-emerald-500/10 border border-emerald-500/20 rounded-2xl text-center">
            <Coins className="w-5 h-5 text-emerald-500 mx-auto mb-1" />
            <p className="text-lg font-bold text-rez-navy dark:text-white">₹{totalEarned}</p>
            <p className="text-[10px] text-rez-gray-600 dark:text-gray-400">Total earned</p>
          </div>
          <div className="p-3 bg-purple-500/10 border border-purple-500/20 rounded-2xl text-center">
            <TrendingUp className="w-5 h-5 text-purple-500 mx-auto mb-1" />
            <p className="text-lg font-bold text-rez-navy dark:text-white">7</p>
            <p className="text-[10px] text-rez-gray-600 dark:text-gray-400">Best streak</p>
          </div>
        </div>
      </div>

      {/* Info Banner */}
      <div className="px-4 mb-6">
        <div className="p-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl">
          <div className="flex items-center gap-2 mb-2">
            <Gift className="w-5 h-5 text-white" />
            <h3 className="text-sm font-bold text-white">7-Day Challenge</h3>
          </div>
          <p className="text-xs text-white/90">
            Check in 7 days straight to win ₹100 bonus! Don't break your streak.
          </p>
        </div>
      </div>

      {/* Check-In Calendar */}
      <div className="px-4 mb-6">
        <div className="grid grid-cols-7 gap-2">
          {checkInRewards.map((reward) => (
            <div
              key={reward.day}
              className={`aspect-square rounded-2xl flex flex-col items-center justify-center p-2 ${
                reward.claimed
                  ? 'bg-emerald-500/20 border-2 border-emerald-500'
                  : reward.today
                  ? 'bg-blue-500/20 border-2 border-blue-500 animate-pulse'
                  : 'bg-rez-gray-100 dark:bg-white/10 border border-rez-gray-200 dark:border-white/10'
              } ${reward.bonus ? 'col-span-7' : ''}`}
            >
              <span className="text-[10px] text-rez-gray-600 dark:text-gray-400 mb-1">
                Day {reward.day}
              </span>
              <div className="flex items-center gap-0.5 mb-1">
                <Coins className={`w-3 h-3 ${
                  reward.claimed ? 'text-emerald-500' : reward.today ? 'text-blue-500' : 'text-amber-500'
                }`} />
                <span className={`text-xs font-bold ${
                  reward.claimed ? 'text-emerald-500' : reward.today ? 'text-blue-500' : 'text-rez-navy dark:text-white'
                }`}>
                  ₹{reward.coins}
                </span>
              </div>
              {reward.claimed && (
                <CheckCircle2 className="w-4 h-4 text-emerald-500 fill-emerald-500" />
              )}
              {reward.bonus && (
                <span className="text-[10px] font-bold text-amber-500">BONUS!</span>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Check-In Button */}
      <div className="px-4 mb-6">
        <button
          onClick={handleCheckIn}
          disabled={checkInRewards.find(r => r.today)?.claimed}
          className={`w-full py-4 rounded-2xl font-bold text-white transition-all ${
            checkInRewards.find(r => r.today)?.claimed
              ? 'bg-rez-gray-400 cursor-not-allowed'
              : 'bg-rez-green-500 hover:bg-rez-green-600 active:scale-95 shadow-lg'
          }`}
        >
          {checkInRewards.find(r => r.today)?.claimed ? (
            <span className="flex items-center justify-center gap-2">
              <CheckCircle2 className="w-5 h-5" />
              Checked In Today
            </span>
          ) : (
            <span className="flex items-center justify-center gap-2">
              <Calendar className="w-5 h-5" />
              Check In Now (+₹{checkInRewards.find(r => r.today)?.coins})
            </span>
          )}
        </button>
      </div>

      {/* Reward Animation */}
      {showReward && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
          <div className="p-8 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-3xl text-center animate-bounce mx-4">
            <Coins className="w-16 h-16 text-white mx-auto mb-4" />
            <h3 className="text-3xl font-bold text-white mb-2">
              +₹{checkInRewards.find(r => r.today)?.coins}
            </h3>
            <p className="text-white/90">
              Check-in successful! Keep the streak going!
            </p>
          </div>
        </div>
      )}

      {/* Streak Bonuses */}
      <div className="px-4 mb-6">
        <h3 className="text-sm font-semibold text-rez-navy dark:text-white mb-3">
          Streak Bonuses
        </h3>
        <div className="space-y-2">
          <div className="flex items-center justify-between p-3 bg-white dark:bg-white/10 border border-rez-gray-200 dark:border-white/10 rounded-xl">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center">
                <Flame className="w-5 h-5 text-blue-500" />
              </div>
              <div>
                <p className="text-sm font-semibold text-rez-navy dark:text-white">7-Day Streak</p>
                <p className="text-xs text-rez-gray-600 dark:text-gray-400">Complete 7 days</p>
              </div>
            </div>
            <span className="text-sm font-bold text-amber-500">₹100</span>
          </div>
          <div className="flex items-center justify-between p-3 bg-white dark:bg-white/10 border border-rez-gray-200 dark:border-white/10 rounded-xl">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-purple-500/20 rounded-lg flex items-center justify-center">
                <Flame className="w-5 h-5 text-purple-500" />
              </div>
              <div>
                <p className="text-sm font-semibold text-rez-navy dark:text-white">30-Day Streak</p>
                <p className="text-xs text-rez-gray-600 dark:text-gray-400">Complete 30 days</p>
              </div>
            </div>
            <span className="text-sm font-bold text-amber-500">₹500</span>
          </div>
          <div className="flex items-center justify-between p-3 bg-white dark:bg-white/10 border border-rez-gray-200 dark:border-white/10 rounded-xl">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-pink-500/20 rounded-lg flex items-center justify-center">
                <Flame className="w-5 h-5 text-pink-500" />
              </div>
              <div>
                <p className="text-sm font-semibold text-rez-navy dark:text-white">100-Day Streak</p>
                <p className="text-xs text-rez-gray-600 dark:text-gray-400">Complete 100 days</p>
              </div>
            </div>
            <span className="text-sm font-bold text-amber-500">₹2000</span>
          </div>
        </div>
      </div>

      {/* Tips */}
      <div className="px-4 py-6">
        <div className="p-4 bg-rez-gray-50 dark:bg-white/5 rounded-2xl">
          <h3 className="text-sm font-semibold text-rez-navy dark:text-white mb-3">
            Pro Tips
          </h3>
          <div className="space-y-2 text-sm text-rez-gray-700 dark:text-gray-300">
            <div className="flex items-start gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-rez-green-500 mt-1.5" />
              <p>Check in at the same time daily to build a habit</p>
            </div>
            <div className="flex items-start gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-rez-green-500 mt-1.5" />
              <p>Set a daily reminder so you never miss a day</p>
            </div>
            <div className="flex items-start gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-rez-green-500 mt-1.5" />
              <p>Missing even one day resets your streak to zero</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DailyCheckInPage;
