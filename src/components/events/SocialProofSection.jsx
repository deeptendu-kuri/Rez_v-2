import { Users, Play, ChevronRight } from 'lucide-react';

const FriendActivity = ({ activity }) => (
  <div className="flex items-center gap-3 p-3 rounded-xl bg-white/5">
    <img
      src={activity.avatar}
      alt={activity.name}
      className="w-10 h-10 rounded-full object-cover"
    />
    <div className="flex-1 min-w-0">
      <p className="text-sm text-white">
        <span className="font-medium">{activity.name}</span>
        <span className="text-gray-400"> {activity.action} </span>
        <span className="text-emerald-400">{activity.event}</span>
      </p>
      <p className="text-xs text-gray-500">{activity.timeAgo}</p>
    </div>
  </div>
);

const UGCReel = ({ imageUrl }) => (
  <div className="min-w-[100px] h-40 rounded-xl overflow-hidden relative shrink-0 group cursor-pointer">
    <img
      src={imageUrl}
      alt="User content"
      className="w-full h-full object-cover group-hover:scale-105 transition-transform"
    />
    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="p-2 rounded-full bg-white/30 backdrop-blur-sm">
        <Play className="w-5 h-5 text-white fill-white" />
      </div>
    </div>
  </div>
);

const SocialProofSection = ({ friendsActivity, ugcImages }) => {
  return (
    <div className="space-y-6">
      {/* Friends Activity */}
      <div>
        <div className="flex items-center justify-between px-4 mb-3">
          <div className="flex items-center gap-2">
            <Users className="w-5 h-5 text-purple-400" />
            <h2 className="font-semibold text-white">Friends Are Going</h2>
          </div>
          <button className="text-xs text-emerald-400 flex items-center gap-1">
            See All <ChevronRight className="w-3 h-3" />
          </button>
        </div>
        <div className="px-4 space-y-2">
          {friendsActivity.slice(0, 3).map((activity) => (
            <FriendActivity key={activity.id} activity={activity} />
          ))}
        </div>
      </div>

      {/* UGC Reels */}
      {ugcImages && ugcImages.length > 0 && (
        <div>
          <div className="flex items-center justify-between px-4 mb-3">
            <div className="flex items-center gap-2">
              <Play className="w-5 h-5 text-pink-400" />
              <h2 className="font-semibold text-white">Event Moments</h2>
            </div>
            <button className="text-xs text-emerald-400 flex items-center gap-1">
              View All <ChevronRight className="w-3 h-3" />
            </button>
          </div>
          <div className="flex gap-2 px-4 overflow-x-auto hide-scrollbar">
            {ugcImages.map((img, index) => (
              <UGCReel key={index} imageUrl={img} />
            ))}
          </div>
        </div>
      )}

      {/* Attend & Earn Banner */}
      <div className="mx-4 p-4 rounded-2xl bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/20">
        <div className="flex items-center gap-4">
          <span className="text-3xl">📸</span>
          <div className="flex-1">
            <h3 className="font-semibold text-white">Attend & Earn</h3>
            <p className="text-sm text-gray-300">Post photos/videos from events, earn bonus coins</p>
          </div>
          <ChevronRight className="w-5 h-5 text-gray-500" />
        </div>
      </div>
    </div>
  );
};

export default SocialProofSection;
