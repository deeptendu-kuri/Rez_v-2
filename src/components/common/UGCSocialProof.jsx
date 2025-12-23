import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Camera, Play, Star, MessageSquare, ChevronRight, Coins, BadgeCheck } from 'lucide-react';

const UGCSocialProof = ({
  category = '',
  reels = [],
  photos = [],
  reviews = [],
}) => {
  const [activeTab, setActiveTab] = useState('reels');

  const tabs = [
    { id: 'reels', label: 'Reels', icon: Play },
    { id: 'photos', label: 'Photos', icon: Camera },
    { id: 'reviews', label: 'Reviews', icon: MessageSquare },
  ];

  // Default sample data
  const defaultReels = [
    { id: 1, user: 'Priya S.', avatar: '👩', views: '12.3K', coins: 150, verified: true },
    { id: 2, user: 'Rahul M.', avatar: '👨', views: '8.7K', coins: 120, verified: true },
    { id: 3, user: 'Anita K.', avatar: '👩', views: '5.2K', coins: 80, verified: false },
  ];

  const defaultPhotos = [
    { id: 1, user: 'Vikram P.', avatar: '👨', likes: 234, coins: 50, verified: true },
    { id: 2, user: 'Sneha R.', avatar: '👩', likes: 189, coins: 45, verified: true },
    { id: 3, user: 'Amit J.', avatar: '👨', likes: 156, coins: 40, verified: false },
    { id: 4, user: 'Divya S.', avatar: '👩', likes: 142, coins: 35, verified: true },
  ];

  const defaultReviews = [
    { id: 1, user: 'Karan M.', avatar: '👨', rating: 5, text: 'Amazing experience! Saved ₹500 with ReZ.', coins: 30, verified: true, deal: 'Used 25% off deal' },
    { id: 2, user: 'Meera L.', avatar: '👩', rating: 4, text: 'Good quality, quick delivery.', coins: 25, verified: true, deal: 'Used BOGO offer' },
    { id: 3, user: 'Rohit S.', avatar: '👨', rating: 5, text: 'Love the cashback feature!', coins: 30, verified: false, deal: 'Earned 15% cashback' },
  ];

  const displayReels = reels.length > 0 ? reels : defaultReels;
  const displayPhotos = photos.length > 0 ? photos : defaultPhotos;
  const displayReviews = reviews.length > 0 ? reviews : defaultReviews;

  return (
    <div className="px-4 mt-6">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <Camera className="w-5 h-5 text-pink-400" />
          <h2 className="font-semibold text-rez-navy dark:text-white">Community</h2>
        </div>
        <Link to={`/${category}/community`} className="text-xs text-emerald-400 flex items-center gap-1">
          View All <ChevronRight className="w-3 h-3" />
        </Link>
      </div>

      {/* Tab Switcher */}
      <div className="flex gap-2 mb-4">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm transition-colors ${
                activeTab === tab.id
                  ? 'bg-pink-500 text-white'
                  : 'bg-white/10 text-rez-gray-600 dark:text-gray-400'
              }`}
            >
              <Icon className="w-4 h-4" />
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* Reels Tab */}
      {activeTab === 'reels' && (
        <div className="flex gap-3 overflow-x-auto hide-scrollbar pb-2">
          {displayReels.map((reel) => (
            <div
              key={reel.id}
              className="min-w-[120px] shrink-0 rounded-2xl bg-gradient-to-b from-pink-500/20 to-purple-500/20 border border-pink-500/20 overflow-hidden"
            >
              <div className="h-40 bg-rez-gray-50 dark:bg-white/5 flex items-center justify-center relative">
                <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                  <Play className="w-6 h-6 text-rez-navy dark:text-white fill-white" />
                </div>
                <span className="absolute bottom-2 left-2 text-xs text-white/80">{reel.views}</span>
              </div>
              <div className="p-2">
                <div className="flex items-center gap-1">
                  <span>{reel.avatar}</span>
                  <span className="text-xs text-rez-navy dark:text-white truncate">{reel.user}</span>
                  {reel.verified && <BadgeCheck className="w-3 h-3 text-blue-400" />}
                </div>
                <div className="flex items-center gap-1 mt-1 text-amber-400">
                  <Coins className="w-3 h-3" />
                  <span className="text-[10px]">+{reel.coins} earned</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Photos Tab */}
      {activeTab === 'photos' && (
        <div className="grid grid-cols-2 gap-3">
          {displayPhotos.map((photo) => (
            <div
              key={photo.id}
              className="rounded-xl bg-white dark:bg-[#2C2C2E] overflow-hidden"
            >
              <div className="h-28 bg-rez-gray-50 dark:bg-white/5" />
              <div className="p-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    <span>{photo.avatar}</span>
                    <span className="text-xs text-rez-navy dark:text-white">{photo.user}</span>
                    {photo.verified && <BadgeCheck className="w-3 h-3 text-blue-400" />}
                  </div>
                  <span className="text-xs text-rez-gray-600 dark:text-gray-400">❤️ {photo.likes}</span>
                </div>
                <div className="flex items-center gap-1 mt-1 text-amber-400">
                  <Coins className="w-3 h-3" />
                  <span className="text-[10px]">+{photo.coins} earned</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Reviews Tab */}
      {activeTab === 'reviews' && (
        <div className="space-y-3">
          {displayReviews.map((review) => (
            <div
              key={review.id}
              className="p-4 rounded-xl bg-white dark:bg-[#2C2C2E]"
            >
              <div className="flex items-start justify-between mb-2">
                <div className="flex items-center gap-2">
                  <span className="text-xl">{review.avatar}</span>
                  <div>
                    <div className="flex items-center gap-1">
                      <span className="text-sm font-medium text-rez-navy dark:text-white">{review.user}</span>
                      {review.verified && <BadgeCheck className="w-3 h-3 text-blue-400" />}
                    </div>
                    <div className="flex gap-0.5">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          className={`w-3 h-3 ${
                            i < review.rating ? 'text-amber-400 fill-amber-400' : 'text-rez-gray-700 dark:text-gray-600'
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-1 text-amber-400">
                  <Coins className="w-3 h-3" />
                  <span className="text-xs">+{review.coins}</span>
                </div>
              </div>
              <p className="text-sm text-rez-gray-700 dark:text-gray-300 mb-2">{review.text}</p>
              <div className="flex items-center justify-between">
                <span className="text-xs text-emerald-400 px-2 py-0.5 rounded-full bg-emerald-500/20">
                  {review.deal}
                </span>
                <button className="text-xs text-pink-400">Use same deal →</button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Upload CTA */}
      <div className="mt-4 p-3 rounded-xl bg-pink-500/10 border border-pink-500/20 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Camera className="w-5 h-5 text-pink-400" />
          <div>
            <p className="text-sm font-medium text-rez-navy dark:text-white">Share your experience</p>
            <p className="text-xs text-rez-gray-600 dark:text-gray-400">Earn up to 150 coins per post</p>
          </div>
        </div>
        <button className="px-3 py-1.5 rounded-lg bg-pink-500 text-rez-navy dark:text-white text-sm font-medium">
          Upload
        </button>
      </div>
    </div>
  );
};

export default UGCSocialProof;
