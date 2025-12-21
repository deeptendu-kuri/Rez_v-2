import { useState } from 'react';
import { Heart, Lock, MessageCircle, Coins, MapPin } from 'lucide-react';
import Badge from '../common/Badge';

const FleaProductTile = ({ product, onLock, onSave, onChat }) => {
  const [isSaved, setIsSaved] = useState(false);
  const discount = Math.round(((product.originalPrice - product.fleaPrice) / product.originalPrice) * 100);

  const handleSave = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsSaved(!isSaved);
    onSave?.(product.id);
  };

  const handleLock = (e) => {
    e.preventDefault();
    e.stopPropagation();
    onLock?.(product.id);
  };

  const handleChat = (e) => {
    e.preventDefault();
    e.stopPropagation();
    onChat?.(product.id);
  };

  return (
    <div className="relative rounded-2xl overflow-hidden bg-[#2C2C2E] group">
      {/* Image */}
      <div className="relative aspect-square">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

        {/* Top badges */}
        <div className="absolute top-2 left-2 right-2 flex items-start justify-between">
          <Badge variant="success" size="xs">
            {discount}% OFF
          </Badge>
          <button
            onClick={handleSave}
            className={`p-2 rounded-full backdrop-blur-sm transition-colors ${
              isSaved ? 'bg-red-500/80' : 'bg-black/40 hover:bg-black/60'
            }`}
          >
            <Heart
              className={`w-4 h-4 ${isSaved ? 'text-white fill-white' : 'text-white'}`}
            />
          </button>
        </div>

        {/* Stock warning */}
        {product.stockLeft <= 3 && (
          <div className="absolute bottom-2 left-2">
            <Badge variant="danger" size="xs" className="animate-pulse">
              Only {product.stockLeft} left!
            </Badge>
          </div>
        )}

        {/* Flea tag */}
        <div className="absolute bottom-2 right-2">
          <span className="px-2 py-0.5 rounded-full bg-purple-500/80 text-[10px] text-white font-medium">
            Flea Find
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-3">
        <h4 className="font-medium text-white text-sm truncate">{product.name}</h4>

        {/* Tags */}
        <div className="flex flex-wrap gap-1 mt-1.5">
          {product.tags.slice(0, 2).map((tag) => (
            <span
              key={tag}
              className="px-1.5 py-0.5 rounded bg-white/5 text-[10px] text-gray-400"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Price */}
        <div className="flex items-center gap-2 mt-2">
          <span className="text-lg font-bold text-white">₹{product.fleaPrice}</span>
          <span className="text-sm text-gray-500 line-through">₹{product.originalPrice}</span>
        </div>

        {/* Coins + Distance */}
        <div className="flex items-center justify-between mt-2">
          <div className="flex items-center gap-1 text-amber-400">
            <Coins className="w-3.5 h-3.5" />
            <span className="text-xs">Earn ₹{product.coinsEarned}</span>
          </div>
          <div className="flex items-center gap-1 text-gray-500">
            <MapPin className="w-3 h-3" />
            <span className="text-xs">{product.sellerDistance}</span>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="flex items-center gap-2 mt-3">
          {product.lockable && (
            <button
              onClick={handleLock}
              className="flex-1 flex items-center justify-center gap-1.5 py-2 rounded-lg bg-emerald-500/20 text-emerald-400 text-xs font-medium hover:bg-emerald-500/30 transition-colors"
            >
              <Lock className="w-3.5 h-3.5" />
              Lock @ 10%
            </button>
          )}
          <button
            onClick={handleChat}
            className="p-2 rounded-lg bg-white/10 text-white hover:bg-white/20 transition-colors"
          >
            <MessageCircle className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default FleaProductTile;
