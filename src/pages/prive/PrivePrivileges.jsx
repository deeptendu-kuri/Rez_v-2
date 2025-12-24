import { Crown, Gift, Calendar, Sparkles, Star, Award } from 'lucide-react';
import Header from '../../components/layout/Header';
import ModeSwitcher from '../../components/home/ModeSwitcher';
import BottomNavManager from '../../components/layout/BottomNavManager';

const PrivePrivileges = () => {
  // Mock privileges data
  const privileges = [
    {
      id: 1,
      title: 'Exclusive Brand Access',
      description: 'Early access to luxury brand launches before public',
      icon: Crown,
      expires: '2026-01-31',
      status: 'active',
      color: 'from-amber-500 to-amber-600'
    },
    {
      id: 2,
      title: 'Concierge Service',
      description: 'Personal shopping assistant available 24/7',
      icon: Sparkles,
      expires: '2026-02-28',
      status: 'active',
      color: 'from-purple-500 to-purple-600'
    },
    {
      id: 3,
      title: 'VIP Events',
      description: 'Invitation-only brand events and experiences',
      icon: Star,
      expires: '2026-01-15',
      status: 'expiring_soon',
      color: 'from-pink-500 to-pink-600'
    },
  ];

  return (
    <div className="min-h-screen bg-rez-gray-50 dark:bg-dark-900 pb-20">
      <Header />
      <ModeSwitcher />

      {/* Page Header */}
      <div className="px-4 py-4">
        <h1 className="text-2xl font-bold text-rez-navy dark:text-white mb-2 flex items-center gap-2">
          <Crown className="w-7 h-7 text-amber-500" />
          Your Privileges
        </h1>
        <p className="text-sm text-rez-gray-600 dark:text-gray-400">Exclusive benefits for Privé members</p>
      </div>

      {/* Active Privileges */}
      <div className="px-4 mb-8">
        <h2 className="text-lg font-bold text-rez-navy dark:text-white mb-4">Active Privileges</h2>
        <div className="space-y-3">
          {privileges.map((privilege) => {
            const Icon = privilege.icon;
            return (
              <div
                key={privilege.id}
                className="p-5 rounded-2xl bg-white dark:bg-dark-800 border border-rez-gray-200 dark:border-dark-700"
              >
                <div className="flex items-start gap-4 mb-3">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${privilege.color} flex items-center justify-center shadow-lg`}>
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-rez-navy dark:text-white mb-1">{privilege.title}</h3>
                    <p className="text-sm text-rez-gray-700 dark:text-gray-300 mb-2">{privilege.description}</p>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-3.5 h-3.5 text-rez-gray-500 dark:text-gray-500" />
                      <span className={`text-xs ${
                        privilege.status === 'expiring_soon'
                          ? 'text-amber-600 dark:text-amber-400 font-semibold'
                          : 'text-rez-gray-500 dark:text-gray-500'
                      }`}>
                        Valid until {privilege.expires}
                        {privilege.status === 'expiring_soon' && ' • Expiring Soon!'}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Unlock More */}
      <div className="px-4 mb-6">
        <div className="p-6 rounded-2xl bg-gradient-to-br from-amber-500 to-amber-600 text-white">
          <Award className="w-10 h-10 mb-3" />
          <h3 className="text-lg font-bold mb-2">Unlock More Privileges</h3>
          <p className="text-white/90 text-sm mb-4">
            Increase your tier by shopping more and referring friends to unlock exclusive benefits.
          </p>
          <button className="px-5 py-2.5 rounded-xl bg-white text-amber-600 font-semibold hover:bg-white/90 transition-colors">
            View Requirements
          </button>
        </div>
      </div>

      <BottomNavManager />
    </div>
  );
};

export default PrivePrivileges;
