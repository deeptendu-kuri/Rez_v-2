import { Wallet, Lock, Receipt, Heart, Share2, MapPin, Clock, Gift } from 'lucide-react';

const StoreQuickActions = ({ store, storeConfig, onAction }) => {
  const features = storeConfig.features || {};

  const actions = [
    {
      id: 'pay',
      label: 'Pay with ReZ',
      icon: Wallet,
      color: 'from-emerald-500 to-teal-500',
      show: true,
      primary: true,
    },
    {
      id: 'lock',
      label: 'Lock Price',
      icon: Lock,
      color: 'from-amber-500 to-orange-500',
      show: features.lockPrice,
      description: 'Pay 10%, reserve item',
    },
    {
      id: 'upload',
      label: 'Upload Bill',
      icon: Receipt,
      color: 'from-purple-500 to-pink-500',
      show: features.uploadBill,
      description: 'Earn extra coins',
    },
    {
      id: 'book',
      label: 'Book Appointment',
      icon: Clock,
      color: 'from-blue-500 to-cyan-500',
      show: features.appointment,
    },
    {
      id: 'concierge',
      label: 'Concierge',
      icon: Gift,
      color: 'from-amber-600 to-yellow-500',
      show: features.concierge,
      description: 'Personal assistance',
    },
  ];

  const visibleActions = actions.filter(action => action.show);
  const primaryAction = visibleActions.find(a => a.primary);
  const secondaryActions = visibleActions.filter(a => !a.primary);

  return (
    <div className="px-4 py-4 bg-white dark:bg-dark-800 border-b border-rez-gray-200 dark:border-dark-700">
      {/* Primary Action - Full Width */}
      {primaryAction && (
        <button
          onClick={() => onAction(primaryAction.id)}
          className={`w-full py-3.5 rounded-xl bg-gradient-to-r ${primaryAction.color} text-white font-bold mb-3 flex items-center justify-center gap-2 shadow-lg active:scale-[0.98] transition-transform`}
        >
          <primaryAction.icon className="w-5 h-5" />
          {primaryAction.label}
        </button>
      )}

      {/* Secondary Actions - Grid */}
      {secondaryActions.length > 0 && (
        <div className={`grid ${secondaryActions.length === 2 ? 'grid-cols-2' : 'grid-cols-3'} gap-2`}>
          {secondaryActions.map(action => (
            <button
              key={action.id}
              onClick={() => onAction(action.id)}
              className="p-3 rounded-xl bg-rez-gray-100 dark:bg-dark-700 active:scale-[0.98] transition-transform"
            >
              <action.icon className={`w-5 h-5 mx-auto mb-1.5 bg-gradient-to-r ${action.color} bg-clip-text text-transparent`} style={{WebkitTextFillColor: 'transparent'}} />
              <p className="text-xs font-medium text-rez-navy dark:text-white text-center leading-tight">
                {action.label}
              </p>
              {action.description && (
                <p className="text-[10px] text-rez-gray-600 dark:text-gray-400 text-center mt-0.5">
                  {action.description}
                </p>
              )}
            </button>
          ))}
        </div>
      )}

      {/* ReZ Advantage Message */}
      {(features.lockPrice || features.uploadBill) && (
        <div className="mt-3 p-3 rounded-xl bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-800">
          <p className="text-xs text-emerald-700 dark:text-emerald-400 text-center">
            ✨ Why ReZ is better: {features.lockPrice && 'Lock now, pay later'}{features.lockPrice && features.uploadBill && ' • '}{features.uploadBill && 'Extra coins on bills'}
          </p>
        </div>
      )}
    </div>
  );
};

export default StoreQuickActions;
