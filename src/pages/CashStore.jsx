import { useState } from 'react';
import { cashStoreBrands, brandCategories } from '../data/brands';
import { ExternalLink, Info, TrendingUp } from 'lucide-react';
import Card from '../components/common/Card';
import Badge from '../components/common/Badge';

const CashStore = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredBrands = selectedCategory === 'All'
    ? cashStoreBrands
    : cashStoreBrands.filter(b => b.category === selectedCategory);

  const featuredBrands = cashStoreBrands.filter(b => b.featured);

  return (
    <div className="pb-4">
      {/* Header */}
      <div className="px-4 pt-2 pb-4">
        <h1 className="text-2xl font-bold text-white">Cash Store</h1>
        <p className="text-sm text-gray-400 mt-1">Shop as usual. Cashback tracks automatically.</p>
      </div>

      {/* How it works */}
      <div className="mx-4 mb-6 p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/20">
        <div className="flex items-start gap-3">
          <Info className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
          <div>
            <p className="font-medium text-white mb-1">How it works</p>
            <ol className="text-sm text-gray-300 space-y-1">
              <li>1. Click on a brand below</li>
              <li>2. Shop on their website as usual</li>
              <li>3. Cashback tracks automatically</li>
              <li>4. Get credited within 7-30 days</li>
            </ol>
          </div>
        </div>
      </div>

      {/* Featured Brands */}
      <div className="px-4 mb-3">
        <div className="flex items-center gap-2">
          <TrendingUp className="w-5 h-5 text-amber-400" />
          <h2 className="text-lg font-semibold text-white">Top Cashback</h2>
        </div>
      </div>

      <div className="flex gap-3 px-4 overflow-x-auto hide-scrollbar pb-4 mb-4">
        {featuredBrands.map((brand) => (
          <button
            key={brand.id}
            className="min-w-[140px] p-4 rounded-2xl bg-[#2C2C2E] active:bg-[#3A3A3C] transition-colors flex flex-col items-center gap-3"
          >
            <div
              className="w-16 h-16 rounded-2xl flex items-center justify-center"
              style={{ backgroundColor: `${brand.color}20` }}
            >
              <img
                src={brand.logo}
                alt={brand.name}
                className="w-10 h-10 object-contain rounded-lg"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.parentElement.innerHTML = `<span class="text-2xl font-bold" style="color:${brand.color}">${brand.name[0]}</span>`;
                }}
              />
            </div>
            <div className="text-center">
              <p className="font-medium text-white text-sm">{brand.name}</p>
              <p className="text-emerald-400 text-sm font-semibold">{brand.cashback}</p>
            </div>
          </button>
        ))}
      </div>

      {/* Category Filter */}
      <div className="flex gap-2 px-4 overflow-x-auto hide-scrollbar pb-3">
        {brandCategories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2 rounded-full shrink-0 transition-all ${
              selectedCategory === cat
                ? 'bg-emerald-500 text-white'
                : 'bg-white/10 text-gray-300'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* All Brands */}
      <div className="px-4 mt-4 space-y-3">
        {filteredBrands.map((brand) => (
          <Card key={brand.id} hover className="p-4">
            <div className="flex items-center gap-4">
              <div
                className="w-14 h-14 rounded-xl flex items-center justify-center shrink-0"
                style={{ backgroundColor: `${brand.color}20` }}
              >
                <img
                  src={brand.logo}
                  alt={brand.name}
                  className="w-8 h-8 object-contain rounded"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.parentElement.innerHTML = `<span class="text-xl font-bold" style="color:${brand.color}">${brand.name[0]}</span>`;
                  }}
                />
              </div>

              <div className="flex-1">
                <h3 className="font-semibold text-white">{brand.name}</h3>
                <p className="text-sm text-gray-400">{brand.category}</p>
              </div>

              <div className="text-right">
                <p className="font-semibold text-emerald-400">{brand.cashback}</p>
                <Badge variant="default" size="xs">
                  <ExternalLink className="w-3 h-3" />
                  Shop
                </Badge>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Important Note */}
      <div className="mx-4 mt-6 p-4 rounded-2xl bg-amber-500/10 border border-amber-500/20">
        <p className="text-sm text-amber-200">
          <strong>Note:</strong> Gift cards cannot be purchased using ReZ or Branded coins.
          Promo coins are allowed.
        </p>
      </div>
    </div>
  );
};

export default CashStore;
