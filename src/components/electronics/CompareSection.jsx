import { Search, ArrowRight, CheckCircle } from 'lucide-react';
import Button from '../common/Button';

const CompareSection = () => {
  return (
    <div className="mx-4 p-4 rounded-2xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-blue-500/20">
      {/* Header */}
      <div className="flex items-center gap-3 mb-4">
        <div className="w-12 h-12 rounded-xl bg-blue-500/30 flex items-center justify-center">
          <span className="text-2xl">🧠</span>
        </div>
        <div>
          <h3 className="font-semibold text-white">Smart Compare</h3>
          <p className="text-sm text-gray-400">ReZ AI-powered price comparison</p>
        </div>
      </div>

      {/* Benefits */}
      <div className="space-y-2 mb-4">
        <div className="flex items-center gap-2">
          <CheckCircle className="w-4 h-4 text-emerald-400" />
          <span className="text-sm text-gray-300">Compare across nearby stores</span>
        </div>
        <div className="flex items-center gap-2">
          <CheckCircle className="w-4 h-4 text-emerald-400" />
          <span className="text-sm text-gray-300">Compare online platforms</span>
        </div>
        <div className="flex items-center gap-2">
          <CheckCircle className="w-4 h-4 text-emerald-400" />
          <span className="text-sm text-gray-300">Find the best final price + cashback</span>
        </div>
      </div>

      {/* Search */}
      <div className="relative mb-4">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
        <input
          type="text"
          placeholder="Search any product to compare..."
          className="w-full pl-10 pr-4 py-3 rounded-xl bg-black/30 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* CTA */}
      <Button variant="primary" fullWidth>
        Compare Prices <ArrowRight className="w-4 h-4 ml-1" />
      </Button>

      {/* Tagline */}
      <p className="text-center text-xs text-gray-500 mt-3">
        "Don't overpay. Compare first."
      </p>
    </div>
  );
};

export default CompareSection;
