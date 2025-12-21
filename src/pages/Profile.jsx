import { useUser, shoppingForOptions } from '../contexts/UserContext';
import { useApp } from '../contexts/AppContext';
import {
  User, Settings, Heart, MapPin, CreditCard, Bell, HelpCircle,
  ChevronRight, Shield, Star, Gift, LogOut
} from 'lucide-react';
import Card from '../components/common/Card';
import Badge from '../components/common/Badge';

const Profile = () => {
  const { user, updatePreferences, setShoppingFor } = useUser();
  const { filters, toggleFilter } = useApp();

  const menuItems = [
    { icon: Heart, label: 'Saved Stores', count: user.savedStores.length, link: '/saved' },
    { icon: MapPin, label: 'My Addresses', link: '/addresses' },
    { icon: CreditCard, label: 'Payment Methods', link: '/payments' },
    { icon: Bell, label: 'Notifications', link: '/notifications' },
    { icon: Shield, label: 'Privacy & Security', link: '/privacy' },
    { icon: HelpCircle, label: 'Help & Support', link: '/help' },
  ];

  return (
    <div className="pb-4">
      {/* Header */}
      <div className="px-4 pt-2 pb-4 flex items-center justify-between">
        <h1 className="text-2xl font-bold text-white">Profile</h1>
        <button className="p-2 rounded-full bg-white/10">
          <Settings className="w-5 h-5 text-white" />
        </button>
      </div>

      {/* User Card */}
      <div className="mx-4 mb-6 p-4 rounded-2xl bg-[#2C2C2E] flex items-center gap-4">
        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-emerald-500 to-blue-500 flex items-center justify-center">
          <span className="text-2xl font-bold text-white">{user.name[0]}</span>
        </div>
        <div className="flex-1">
          <h2 className="text-xl font-semibold text-white">{user.name}</h2>
          <p className="text-sm text-gray-400">{user.email}</p>
          <div className="flex items-center gap-2 mt-1">
            <Badge variant="primary" size="sm">
              <Star className="w-3 h-3" />
              {user.tier} Member
            </Badge>
            {user.isPriveMember && (
              <Badge variant="prive" size="sm">✨ Privé</Badge>
            )}
          </div>
        </div>
        <ChevronRight className="w-5 h-5 text-gray-400" />
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-3 px-4 mb-6">
        <div className="p-4 rounded-2xl bg-[#2C2C2E] text-center">
          <p className="text-2xl font-bold text-white">{user.stats.totalOrders}</p>
          <p className="text-xs text-gray-400">Orders</p>
        </div>
        <div className="p-4 rounded-2xl bg-[#2C2C2E] text-center">
          <p className="text-2xl font-bold text-emerald-400">₹{user.stats.totalSaved.toLocaleString()}</p>
          <p className="text-xs text-gray-400">Saved</p>
        </div>
        <div className="p-4 rounded-2xl bg-[#2C2C2E] text-center">
          <p className="text-2xl font-bold text-amber-400">{user.stats.reviewsWritten}</p>
          <p className="text-xs text-gray-400">Reviews</p>
        </div>
      </div>

      {/* Shopping For */}
      <div className="px-4 mb-6">
        <h3 className="text-sm font-medium text-gray-400 mb-3">Shopping For</h3>
        <div className="flex gap-2 overflow-x-auto hide-scrollbar pb-2">
          {shoppingForOptions.map((option) => (
            <button
              key={option.id}
              onClick={() => setShoppingFor(option.id)}
              className={`px-4 py-2 rounded-full shrink-0 transition-all flex items-center gap-2 ${
                user.shoppingFor === option.id
                  ? 'bg-emerald-500/20 border border-emerald-500/50 text-emerald-400'
                  : 'bg-white/10 text-gray-300'
              }`}
            >
              <span>{option.icon}</span>
              <span className="text-sm">{option.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Personal Preferences */}
      <div className="px-4 mb-6">
        <h3 className="text-sm font-medium text-gray-400 mb-3">Always Apply</h3>
        <Card className="divide-y divide-white/5">
          {[
            { id: 'halal', icon: '🕌', label: 'Always Halal', key: 'alwaysHalal' },
            { id: 'vegan', icon: '🌱', label: 'Always Vegan', key: 'alwaysVegan' },
            { id: 'vegetarian', icon: '🥗', label: 'Always Vegetarian', key: 'alwaysVegetarian' },
          ].map((pref) => (
            <div key={pref.id} className="flex items-center justify-between p-4">
              <div className="flex items-center gap-3">
                <span className="text-xl">{pref.icon}</span>
                <span className="text-white">{pref.label}</span>
              </div>
              <button
                onClick={() => {
                  updatePreferences(pref.key, !user.preferences[pref.key]);
                  toggleFilter(pref.id);
                }}
                className={`w-12 h-7 rounded-full p-1 transition-colors ${
                  user.preferences[pref.key] ? 'bg-emerald-500' : 'bg-white/20'
                }`}
              >
                <div className={`w-5 h-5 bg-white rounded-full shadow-md transition-transform ${
                  user.preferences[pref.key] ? 'translate-x-5' : 'translate-x-0'
                }`} />
              </button>
            </div>
          ))}
        </Card>
      </div>

      {/* Menu Items */}
      <div className="px-4 mb-6">
        <Card className="divide-y divide-white/5">
          {menuItems.map((item) => (
            <button
              key={item.label}
              className="w-full flex items-center gap-4 p-4 active:bg-white/5"
            >
              <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
                <item.icon className="w-5 h-5 text-gray-400" />
              </div>
              <span className="flex-1 text-left text-white">{item.label}</span>
              {item.count !== undefined && (
                <span className="text-sm text-gray-400">{item.count}</span>
              )}
              <ChevronRight className="w-5 h-5 text-gray-400" />
            </button>
          ))}
        </Card>
      </div>

      {/* Referral */}
      <div className="mx-4 mb-6 p-4 rounded-2xl bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/20">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-purple-500/20 flex items-center justify-center">
            <Gift className="w-6 h-6 text-purple-400" />
          </div>
          <div className="flex-1">
            <p className="font-semibold text-white">Refer & Earn</p>
            <p className="text-sm text-gray-400">Get ₹100 for every friend who joins</p>
          </div>
          <ChevronRight className="w-5 h-5 text-gray-400" />
        </div>
      </div>

      {/* Logout */}
      <div className="px-4">
        <button className="w-full flex items-center justify-center gap-2 p-4 rounded-2xl bg-red-500/10 text-red-400">
          <LogOut className="w-5 h-5" />
          <span>Log Out</span>
        </button>
      </div>

      {/* Version */}
      <p className="text-center text-xs text-gray-600 mt-6">
        ReZ v1.0.0 • Made with ❤️
      </p>
    </div>
  );
};

export default Profile;
