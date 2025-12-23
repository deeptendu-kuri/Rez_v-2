import { Link } from 'react-router-dom';
import { Store, CreditCard, Share2, Coins, ArrowRight } from 'lucide-react';

const steps = [
  {
    id: 1,
    icon: Store,
    title: 'Visit Store',
    description: 'Choose from 1000+ nearby stores',
    color: 'bg-blue-500'
  },
  {
    id: 2,
    icon: CreditCard,
    title: 'Pay with ReZ',
    description: 'Scan QR or enter amount',
    color: 'bg-purple-500'
  },
  {
    id: 3,
    icon: Share2,
    title: 'Share / Review',
    description: 'Help others discover',
    color: 'bg-pink-500'
  },
  {
    id: 4,
    icon: Coins,
    title: 'Earn More',
    description: 'Get cashback + bonus coins',
    color: 'bg-emerald-500'
  }
];

const EarnCTA = () => {
  return (
    <div className="px-4 py-6">
      <div className="p-6 bg-gradient-to-br from-rez-green-500/10 via-teal-500/10 to-emerald-500/10 border-2 border-rez-green-500/20 rounded-3xl">
        {/* Header */}
        <div className="text-center mb-6">
          <h2 className="text-h2 font-poppins text-rez-navy dark:text-white mb-2">
            Earn Like Them
          </h2>
          <p className="text-sm text-rez-gray-600 dark:text-gray-400">
            Start your rewarding journey in 4 simple steps
          </p>
        </div>

        {/* Steps */}
        <div className="space-y-4 mb-6">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={step.id} className="flex items-start gap-4">
                {/* Step Number & Icon */}
                <div className="relative shrink-0">
                  <div className={`w-12 h-12 rounded-xl ${step.color} flex items-center justify-center`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="absolute -top-1 -left-1 w-6 h-6 rounded-full bg-white dark:bg-black border-2 border-rez-green-500 flex items-center justify-center">
                    <span className="text-xs font-bold text-rez-green-500">{step.id}</span>
                  </div>
                  {/* Connector Line */}
                  {index < steps.length - 1 && (
                    <div className="absolute top-12 left-6 w-0.5 h-8 bg-rez-gray-200 dark:bg-white/10" />
                  )}
                </div>

                {/* Content */}
                <div className="flex-1 pt-1">
                  <h3 className="text-sm font-bold text-rez-navy dark:text-white mb-1">
                    {step.title}
                  </h3>
                  <p className="text-xs text-rez-gray-600 dark:text-gray-400">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Stat Cards */}
        <div className="grid grid-cols-2 gap-3 mb-6">
          <div className="p-3 bg-white dark:bg-white/10 rounded-xl text-center">
            <p className="text-2xl font-bold text-rez-navy dark:text-white mb-1">1000+</p>
            <p className="text-xs text-rez-gray-600 dark:text-gray-400">Partner Stores</p>
          </div>
          <div className="p-3 bg-white dark:bg-white/10 rounded-xl text-center">
            <p className="text-2xl font-bold text-emerald-500 mb-1">Up to 25%</p>
            <p className="text-xs text-rez-gray-600 dark:text-gray-400">Cashback</p>
          </div>
        </div>

        {/* CTA Button */}
        <Link
          to="/pay-in-store"
          className="flex items-center justify-center gap-2 w-full py-4 bg-rez-green-500 hover:bg-rez-green-600 text-white font-bold rounded-2xl transition-all active:scale-95 shadow-lg"
        >
          <span>Start Earning Nearby</span>
          <ArrowRight className="w-5 h-5" />
        </Link>

        {/* Trust Badge */}
        <div className="mt-4 p-3 bg-white/50 dark:bg-white/5 rounded-xl">
          <p className="text-xs text-center text-rez-gray-700 dark:text-gray-300">
            ✨ <span className="font-semibold">Join 50,000+ users</span> who are earning while spending
          </p>
        </div>
      </div>
    </div>
  );
};

export default EarnCTA;
