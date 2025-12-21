import { ChevronRight } from 'lucide-react';

const ElectronicsBrandCard = ({ brand }) => {
  return (
    <div className="min-w-[160px] p-4 rounded-2xl bg-[#2C2C2E] shrink-0 group cursor-pointer hover:bg-[#3C3C3E] transition-colors">
      {/* Logo */}
      <div
        className="w-14 h-14 rounded-xl flex items-center justify-center mb-3"
        style={{ backgroundColor: `${brand.color}20` }}
      >
        <span className="text-3xl">{brand.logo}</span>
      </div>

      {/* Info */}
      <h3 className="font-semibold text-white">{brand.name}</h3>
      <p className="text-xs text-gray-400 mt-0.5">{brand.tagline}</p>

      {/* Cashback */}
      <div className="mt-2 px-2 py-1 rounded-full bg-emerald-500/10 inline-block">
        <span className="text-xs text-emerald-400">{brand.cashback}</span>
      </div>

      {/* CTA */}
      <div className="flex items-center justify-between mt-3 pt-3 border-t border-white/5">
        <span className="text-xs text-gray-500">{brand.products} products</span>
        <ChevronRight className="w-4 h-4 text-gray-500 group-hover:text-white transition-colors" />
      </div>
    </div>
  );
};

export default ElectronicsBrandCard;
