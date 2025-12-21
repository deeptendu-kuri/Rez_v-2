import { Star, ShoppingBag, Store, BadgeCheck, Instagram, Twitter, ChevronRight } from 'lucide-react';
import Badge from '../common/Badge';
import Button from '../common/Button';

const SellerSpotlight = ({ seller, showProducts = true }) => {
  return (
    <div className="rounded-2xl overflow-hidden bg-[#1C1C1E]">
      {/* Cover + Avatar */}
      <div className="relative h-32">
        <img
          src={seller.coverImage}
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1C1C1E] via-black/50 to-transparent" />

        {/* Avatar */}
        <div className="absolute -bottom-8 left-4">
          <div className="relative">
            <img
              src={seller.image}
              alt={seller.name}
              className="w-20 h-20 rounded-2xl object-cover border-4 border-[#1C1C1E]"
            />
            {seller.badges.includes('Verified') && (
              <div className="absolute -bottom-1 -right-1 p-1 rounded-full bg-blue-500">
                <BadgeCheck className="w-4 h-4 text-white" />
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="pt-10 px-4 pb-4">
        {/* Name + Social */}
        <div className="flex items-start justify-between">
          <div>
            <h3 className="text-xl font-bold text-white">{seller.name}</h3>
            <p className="text-sm text-gray-400">{seller.tagline}</p>
          </div>
          <div className="flex items-center gap-2">
            {seller.socialHandles.instagram && (
              <a
                href={`https://instagram.com/${seller.socialHandles.instagram.replace('@', '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
              >
                <Instagram className="w-4 h-4 text-pink-400" />
              </a>
            )}
            {seller.socialHandles.twitter && (
              <a
                href={`https://twitter.com/${seller.socialHandles.twitter.replace('@', '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
              >
                <Twitter className="w-4 h-4 text-blue-400" />
              </a>
            )}
          </div>
        </div>

        {/* Badges */}
        <div className="flex flex-wrap gap-2 mt-3">
          {seller.badges.map((badge) => (
            <Badge
              key={badge}
              variant={badge === 'Top Seller' ? 'amber' : badge === 'Verified' ? 'info' : 'secondary'}
              size="xs"
            >
              {badge}
            </Badge>
          ))}
        </div>

        {/* Story */}
        <p className="text-sm text-gray-300 mt-4 leading-relaxed">
          "{seller.story}"
        </p>

        {/* Stats */}
        <div className="grid grid-cols-4 gap-2 mt-4">
          <div className="p-2 rounded-xl bg-white/5 text-center">
            <div className="flex items-center justify-center gap-1 text-amber-400">
              <Star className="w-3.5 h-3.5 fill-amber-400" />
              <span className="font-bold">{seller.stats.rating}</span>
            </div>
            <p className="text-[10px] text-gray-500 mt-0.5">Rating</p>
          </div>
          <div className="p-2 rounded-xl bg-white/5 text-center">
            <p className="font-bold text-white">{seller.stats.reviews}</p>
            <p className="text-[10px] text-gray-500">Reviews</p>
          </div>
          <div className="p-2 rounded-xl bg-white/5 text-center">
            <p className="font-bold text-emerald-400">{seller.stats.totalSold}</p>
            <p className="text-[10px] text-gray-500">Sold</p>
          </div>
          <div className="p-2 rounded-xl bg-white/5 text-center">
            <p className="font-bold text-purple-400">{seller.stats.fleaMarkets}</p>
            <p className="text-[10px] text-gray-500">Markets</p>
          </div>
        </div>

        {/* Recent Products */}
        {showProducts && seller.recentProducts && seller.recentProducts.length > 0 && (
          <div className="mt-4">
            <div className="flex items-center justify-between mb-2">
              <p className="text-sm font-medium text-gray-400">Recent Products</p>
              <button className="text-xs text-emerald-400">View All</button>
            </div>
            <div className="flex gap-2 overflow-x-auto hide-scrollbar">
              {seller.recentProducts.slice(0, 4).map((product) => (
                <div
                  key={product.id}
                  className="w-20 shrink-0"
                >
                  <div className="aspect-square rounded-lg overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <p className="text-xs text-emerald-400 mt-1">₹{product.fleaPrice}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* CTA */}
        <div className="flex gap-2 mt-4">
          <Button variant="primary" size="sm" className="flex-1">
            <Store className="w-4 h-4 mr-1" />
            Visit Booth
          </Button>
          <Button variant="secondary" size="sm">
            Follow
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SellerSpotlight;
