import { Heart, Play, Star, Coins } from 'lucide-react';

const BeautyUGCCard = ({ ugc }) => {
  if (ugc.type === 'before-after') {
    return (
      <div className="min-w-[280px] p-4 rounded-2xl bg-[#2C2C2E] shrink-0">
        <div className="flex items-center gap-2 mb-3">
          <div className="w-8 h-8 rounded-full bg-pink-500/30 flex items-center justify-center">
            <span>{ugc.avatar}</span>
          </div>
          <div className="flex-1">
            <p className="text-sm font-medium text-white">{ugc.user}</p>
            <p className="text-xs text-gray-400">{ugc.service} at {ugc.provider}</p>
          </div>
        </div>

        {/* Before/After Images */}
        <div className="flex gap-2 mb-3">
          <div className="flex-1 relative">
            <img
              src={ugc.imageBefore}
              alt="Before"
              className="w-full h-28 object-cover rounded-lg"
            />
            <span className="absolute bottom-1 left-1 px-2 py-0.5 rounded bg-black/60 text-[10px] text-white">
              Before
            </span>
          </div>
          <div className="flex-1 relative">
            <img
              src={ugc.imageAfter}
              alt="After"
              className="w-full h-28 object-cover rounded-lg"
            />
            <span className="absolute bottom-1 left-1 px-2 py-0.5 rounded bg-emerald-500 text-[10px] text-white">
              After
            </span>
          </div>
        </div>

        <p className="text-sm text-white">{ugc.caption}</p>

        <div className="flex items-center justify-between mt-3 pt-3 border-t border-white/10">
          <div className="flex items-center gap-2">
            <Heart className="w-4 h-4 text-gray-400" />
            <span className="text-xs text-gray-400">{ugc.likes} likes</span>
          </div>
          <div className="flex items-center gap-1">
            <Coins className="w-4 h-4 text-amber-400" />
            <span className="text-xs text-amber-400">+{ugc.coinsEarned} coins earned</span>
          </div>
        </div>
      </div>
    );
  }

  if (ugc.type === 'reel') {
    return (
      <div className="min-w-[180px] rounded-2xl bg-[#2C2C2E] shrink-0 overflow-hidden">
        <div className="relative">
          <img
            src={ugc.thumbnail}
            alt={ugc.caption}
            className="w-full h-48 object-cover"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur flex items-center justify-center">
              <Play className="w-6 h-6 text-white fill-white" />
            </div>
          </div>
          <div className="absolute bottom-2 left-2 right-2">
            <div className="flex items-center gap-2 mb-1">
              <div className="w-6 h-6 rounded-full bg-pink-500/30 flex items-center justify-center">
                <span className="text-xs">{ugc.avatar}</span>
              </div>
              <span className="text-xs text-white font-medium">{ugc.user}</span>
            </div>
          </div>
        </div>
        <div className="p-3">
          <p className="text-xs text-white line-clamp-2">{ugc.caption}</p>
          <div className="flex items-center gap-3 mt-2">
            <span className="text-[10px] text-gray-400">{(ugc.views / 1000).toFixed(1)}k views</span>
            <span className="text-[10px] text-gray-400">{ugc.likes} likes</span>
          </div>
        </div>
      </div>
    );
  }

  // Review type
  return (
    <div className="min-w-[260px] p-4 rounded-2xl bg-[#2C2C2E] shrink-0">
      <div className="flex items-center gap-2 mb-3">
        <div className="w-8 h-8 rounded-full bg-blue-500/30 flex items-center justify-center">
          <span>{ugc.avatar}</span>
        </div>
        <div className="flex-1">
          <p className="text-sm font-medium text-white">{ugc.user}</p>
          <div className="flex items-center gap-1">
            {[...Array(ugc.rating)].map((_, i) => (
              <Star key={i} className="w-3 h-3 text-amber-400 fill-amber-400" />
            ))}
          </div>
        </div>
      </div>

      {ugc.image && (
        <img
          src={ugc.image}
          alt={ugc.service}
          className="w-full h-28 object-cover rounded-lg mb-3"
        />
      )}

      <p className="text-xs text-gray-400 mb-1">{ugc.service} at {ugc.provider}</p>
      <p className="text-sm text-white">{ugc.caption}</p>

      <div className="flex items-center justify-between mt-3 pt-3 border-t border-white/10">
        <div className="flex items-center gap-2">
          <Heart className="w-4 h-4 text-gray-400" />
          <span className="text-xs text-gray-400">{ugc.likes} helpful</span>
        </div>
        <div className="flex items-center gap-1">
          <Coins className="w-4 h-4 text-amber-400" />
          <span className="text-xs text-amber-400">+{ugc.coinsEarned}</span>
        </div>
      </div>
    </div>
  );
};

export default BeautyUGCCard;
