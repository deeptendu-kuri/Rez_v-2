import { Link } from 'react-router-dom';
import { ChevronRight, Ticket, CreditCard, Wallet, Gift } from 'lucide-react';

const HowRezWorks = () => {
  const steps = [
    { id: 1, icon: Ticket, title: 'Grab', subtitle: 'Deals & vouchers', color: 'bg-purple-500/20', iconColor: 'text-purple-400' },
    { id: 2, icon: CreditCard, title: 'Use & Save', subtitle: 'Pay online or at store', color: 'bg-blue-500/20', iconColor: 'text-blue-400' },
    { id: 3, icon: Wallet, title: 'Earn', subtitle: 'Coins & cashback', color: 'bg-emerald-500/20', iconColor: 'text-emerald-400' },
    { id: 4, icon: Gift, title: 'Redeem', subtitle: 'Use coins again', color: 'bg-amber-500/20', iconColor: 'text-amber-400' },
  ];

  return (
    <div className="px-4 py-4">
      <div className="p-4 rounded-2xl bg-rez-gray-100 dark:bg-[#1C1C1E]">
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-sm font-semibold text-rez-navy dark:text-white">How ReZ Works</h2>
          <Link to="/how-it-works" className="flex items-center gap-1 text-xs text-emerald-400">
            Full guide <ChevronRight className="w-3 h-3" />
          </Link>
        </div>

        {/* Steps */}
        <div className="flex justify-between">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={step.id} className="flex flex-col items-center text-center">
                <div className={`relative w-12 h-12 rounded-xl ${step.color} flex items-center justify-center mb-2`}>
                  <Icon className={`w-5 h-5 ${step.iconColor}`} />
                  <span className="absolute -top-1 -left-1 w-5 h-5 rounded-full bg-rez-gray-100 dark:bg-white/10 text-[10px] font-bold text-rez-navy dark:text-white flex items-center justify-center">
                    {step.id}
                  </span>
                </div>
                <p className="text-xs font-medium text-rez-navy dark:text-white">{step.title}</p>
                <p className="text-[10px] text-rez-gray-600 dark:text-gray-500">{step.subtitle}</p>
                {index < steps.length - 1 && (
                  <div className="absolute hidden">→</div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default HowRezWorks;
