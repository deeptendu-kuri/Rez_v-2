import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import {
  ArrowLeft,
  Heart,
  Droplet,
  TreePine,
  Trash2,
  Users,
  MapPin,
  Calendar,
  Award,
  Coins,
  Check,
  Clock,
  TrendingUp,
  Sparkles,
  Building2,
  GraduationCap,
  HandHeart,
  Shirt,
  Book,
  Utensils,
  Waves,
  Lightbulb
} from 'lucide-react';
import BottomNavManager from '../../components/layout/BottomNavManager';

const SocialImpact = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('all');

  const impactActivities = [
    {
      id: 1,
      type: 'blood-donation',
      title: 'Blood Donation Drive',
      icon: '🩸',
      iconBg: 'bg-red-500/20',
      iconColor: 'text-red-500',
      organizer: 'Apollo Hospitals',
      logo: '🏥',
      sponsor: 'Tata Group',
      csrActivity: true,
      date: 'Dec 28, 2024',
      time: '9:00 AM - 5:00 PM',
      location: 'Apollo Hospital, Sector 18',
      distance: '2.3 km',
      rewards: {
        rezCoins: 200,
        brandCoins: 300,
        brandName: 'Tata Coins'
      },
      enrolled: 234,
      goal: 500,
      impact: 'Save 3 lives per donation',
      status: 'upcoming'
    },
    {
      id: 2,
      type: 'tree-plantation',
      title: 'Green India Mission',
      icon: '🌳',
      iconBg: 'bg-green-500/20',
      iconColor: 'text-green-500',
      organizer: 'Green Earth Foundation',
      logo: '🌍',
      sponsor: 'Reliance Industries',
      csrActivity: true,
      date: 'Dec 30, 2024',
      time: '7:00 AM - 11:00 AM',
      location: 'City Park, Botanical Gardens',
      distance: '4.1 km',
      rewards: {
        rezCoins: 150,
        brandCoins: 250,
        brandName: 'Reliance Coins'
      },
      enrolled: 156,
      goal: 200,
      impact: 'Plant 1000+ saplings',
      status: 'upcoming'
    },
    {
      id: 3,
      type: 'cleanup',
      title: 'Swachh Bharat - Beach Cleanup',
      icon: '🏖️',
      iconBg: 'bg-blue-500/20',
      iconColor: 'text-blue-500',
      organizer: 'Clean Beaches Initiative',
      logo: '🌊',
      sponsor: 'Infosys Foundation',
      csrActivity: true,
      date: 'Jan 2, 2025',
      time: '6:00 AM - 9:00 AM',
      location: 'Marina Beach',
      distance: '8.5 km',
      rewards: {
        rezCoins: 120,
        brandCoins: 180,
        brandName: 'Infosys Coins'
      },
      enrolled: 89,
      goal: 150,
      impact: 'Clean 5 km of coastline',
      status: 'upcoming'
    },
    {
      id: 4,
      type: 'education',
      title: 'Digital Literacy Program',
      icon: '📚',
      iconBg: 'bg-indigo-500/20',
      iconColor: 'text-indigo-500',
      organizer: 'Teach India Initiative',
      logo: '✏️',
      sponsor: 'Wipro',
      csrActivity: true,
      date: 'Jan 5, 2025',
      time: '2:00 PM - 5:00 PM',
      location: 'Government School, Whitefield',
      distance: '5.2 km',
      rewards: {
        rezCoins: 180,
        brandCoins: 220,
        brandName: 'Wipro Coins'
      },
      enrolled: 67,
      goal: 100,
      impact: 'Teach 50+ students',
      status: 'upcoming'
    },
    {
      id: 5,
      type: 'food-drive',
      title: 'Hunger-Free India Campaign',
      icon: '🍲',
      iconBg: 'bg-orange-500/20',
      iconColor: 'text-orange-500',
      organizer: 'Feed the Need NGO',
      logo: '🤝',
      sponsor: 'ITC Limited',
      csrActivity: true,
      date: 'Every Sunday',
      time: '11:00 AM - 2:00 PM',
      location: 'Community Center, MG Road',
      distance: '3.7 km',
      rewards: {
        rezCoins: 100,
        brandCoins: 150,
        brandName: 'ITC Coins'
      },
      enrolled: 145,
      goal: 200,
      impact: 'Feed 200+ people',
      status: 'ongoing'
    },
    {
      id: 6,
      type: 'skill-training',
      title: 'Women Empowerment Workshop',
      icon: '💪',
      iconBg: 'bg-pink-500/20',
      iconColor: 'text-pink-500',
      organizer: 'Skill India Mission',
      logo: '👩',
      sponsor: 'HDFC Bank',
      csrActivity: true,
      date: 'Jan 8, 2025',
      time: '10:00 AM - 4:00 PM',
      location: 'HDFC Training Center, HSR Layout',
      distance: '6.4 km',
      rewards: {
        rezCoins: 200,
        brandCoins: 300,
        brandName: 'HDFC Coins'
      },
      enrolled: 78,
      goal: 120,
      impact: 'Empower 60+ women',
      status: 'upcoming'
    },
    {
      id: 7,
      type: 'cloth-donation',
      title: 'Winter Cloth Distribution Drive',
      icon: '🧥',
      iconBg: 'bg-purple-500/20',
      iconColor: 'text-purple-500',
      organizer: 'Warmth for All NGO',
      logo: '🎁',
      sponsor: 'Mahindra Group',
      csrActivity: true,
      date: 'Jan 10, 2025',
      time: '9:00 AM - 1:00 PM',
      location: 'City Square, Koramangala',
      distance: '4.8 km',
      rewards: {
        rezCoins: 150,
        brandCoins: 200,
        brandName: 'Mahindra Coins'
      },
      enrolled: 92,
      goal: 150,
      impact: 'Help 500+ people stay warm',
      status: 'upcoming'
    },
    {
      id: 8,
      type: 'health-camp',
      title: 'Free Health Checkup Camp',
      icon: '⚕️',
      iconBg: 'bg-cyan-500/20',
      iconColor: 'text-cyan-500',
      organizer: 'Healthcare for All',
      logo: '🏥',
      sponsor: 'Sun Pharma',
      csrActivity: true,
      date: 'Jan 12, 2025',
      time: '8:00 AM - 12:00 PM',
      location: 'Community Hall, JP Nagar',
      distance: '7.1 km',
      rewards: {
        rezCoins: 170,
        brandCoins: 230,
        brandName: 'Sun Pharma Coins'
      },
      enrolled: 112,
      goal: 180,
      impact: 'Serve 300+ patients',
      status: 'upcoming'
    },
    {
      id: 9,
      type: 'river-cleanup',
      title: 'Save Our Rivers Initiative',
      icon: '🌊',
      iconBg: 'bg-teal-500/20',
      iconColor: 'text-teal-500',
      organizer: 'Clean Rivers Foundation',
      logo: '💧',
      sponsor: 'L&T',
      csrActivity: true,
      date: 'Jan 15, 2025',
      time: '6:00 AM - 10:00 AM',
      location: 'Vrishabhavathi River Bank',
      distance: '9.3 km',
      rewards: {
        rezCoins: 160,
        brandCoins: 240,
        brandName: 'L&T Coins'
      },
      enrolled: 134,
      goal: 200,
      impact: 'Clean 3 km riverbank',
      status: 'upcoming'
    },
    {
      id: 10,
      type: 'blood-donation',
      title: 'Emergency Blood Camp',
      icon: '🩸',
      iconBg: 'bg-red-500/20',
      iconColor: 'text-red-500',
      organizer: 'Red Cross Society',
      logo: '❤️',
      sponsor: null,
      csrActivity: false,
      date: 'Dec 26, 2024',
      time: 'Completed',
      location: 'City Hospital',
      distance: '1.8 km',
      rewards: {
        rezCoins: 200,
        brandCoins: 0,
        brandName: null
      },
      enrolled: 312,
      goal: 300,
      impact: 'Saved 900+ lives',
      status: 'completed'
    }
  ];

  const tabs = [
    { id: 'all', label: 'All', count: impactActivities.length },
    { id: 'upcoming', label: 'Upcoming', count: impactActivities.filter(a => a.status === 'upcoming').length },
    { id: 'ongoing', label: 'Ongoing', count: impactActivities.filter(a => a.status === 'ongoing').length },
    { id: 'completed', label: 'Completed', count: impactActivities.filter(a => a.status === 'completed').length }
  ];

  const filteredActivities = activeTab === 'all'
    ? impactActivities
    : impactActivities.filter(a => a.status === activeTab);

  const myImpactStats = {
    totalActivities: 12,
    livesImpacted: 2340,
    treesPlanted: 45,
    rezCoinsEarned: 2400,
    brandedCoinsEarned: 1650
  };

  return (
    <div className="min-h-screen bg-white dark:bg-black pb-24">
      {/* Header */}
      <div className="sticky top-0 z-40 bg-white/95 dark:bg-black/95 backdrop-blur-sm border-b border-rez-gray-200 dark:border-white/10">
        <div className="flex items-center gap-3 px-4 py-4">
          <button
            onClick={() => navigate(-1)}
            className="p-2 hover:bg-rez-gray-100 dark:hover:bg-white/10 rounded-xl transition-colors"
          >
            <ArrowLeft className="w-5 h-5 text-rez-navy dark:text-white" />
          </button>
          <div className="flex-1">
            <h1 className="text-h3 font-poppins text-rez-navy dark:text-white">Social Impact</h1>
            <p className="text-caption text-rez-gray-600 dark:text-gray-400">Earn while making a difference</p>
          </div>
        </div>
      </div>

      {/* Hero - CSR Focus */}
      <div className="px-4 py-6">
        <div className="p-6 rounded-2xl bg-gradient-to-br from-emerald-500/10 via-blue-500/10 to-purple-500/10 border border-emerald-500/30 text-center">
          <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-emerald-500 to-blue-500 flex items-center justify-center">
            <Building2 className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-xl font-bold text-rez-navy dark:text-white mb-2">
            Corporate CSR Meets Social Impact
          </h2>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
            Companies sponsor events as CSR activities. You participate, make an impact, and earn both <span className="font-bold text-emerald-600 dark:text-emerald-400">ReZ Coins</span> + <span className="font-bold text-purple-600 dark:text-purple-400">Brand Coins</span>
          </p>

          {/* CSR Benefits */}
          <div className="grid grid-cols-3 gap-3 mt-4">
            <div className="p-3 rounded-xl bg-white dark:bg-dark-800 border border-gray-200 dark:border-gray-700">
              <p className="text-2xl mb-1">🏢</p>
              <p className="text-xs font-semibold text-gray-700 dark:text-gray-300">Corporate CSR</p>
            </div>
            <div className="p-3 rounded-xl bg-white dark:bg-dark-800 border border-gray-200 dark:border-gray-700">
              <p className="text-2xl mb-1">🤝</p>
              <p className="text-xs font-semibold text-gray-700 dark:text-gray-300">Social Good</p>
            </div>
            <div className="p-3 rounded-xl bg-white dark:bg-dark-800 border border-gray-200 dark:border-gray-700">
              <p className="text-2xl mb-1">💰</p>
              <p className="text-xs font-semibold text-gray-700 dark:text-gray-300">Dual Rewards</p>
            </div>
          </div>
        </div>
      </div>

      {/* My Impact Stats */}
      <div className="px-4 mb-6">
        <h2 className="text-h4 font-poppins text-rez-navy dark:text-white mb-3 flex items-center gap-2">
          <Award className="w-5 h-5 text-amber-500" />
          Your Impact
        </h2>
        <div className="grid grid-cols-2 gap-3">
          <div className="p-4 rounded-rez-lg bg-red-50 dark:bg-red-500/10 border border-red-200 dark:border-red-500/30">
            <div className="flex items-center gap-2 mb-2">
              <Heart className="w-5 h-5 text-red-500" />
              <span className="text-caption text-rez-gray-600 dark:text-gray-400">Lives Impacted</span>
            </div>
            <p className="text-h3 font-poppins text-rez-navy dark:text-white">{myImpactStats.livesImpacted.toLocaleString()}</p>
          </div>
          <div className="p-4 rounded-rez-lg bg-green-50 dark:bg-green-500/10 border border-green-200 dark:border-green-500/30">
            <div className="flex items-center gap-2 mb-2">
              <TreePine className="w-5 h-5 text-green-500" />
              <span className="text-caption text-rez-gray-600 dark:text-gray-400">Trees Planted</span>
            </div>
            <p className="text-h3 font-poppins text-rez-navy dark:text-white">{myImpactStats.treesPlanted}</p>
          </div>
          <div className="p-4 rounded-rez-lg bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-200 dark:border-emerald-500/30">
            <div className="flex items-center gap-2 mb-2">
              <Coins className="w-5 h-5 text-emerald-500" />
              <span className="text-caption text-rez-gray-600 dark:text-gray-400">ReZ Coins</span>
            </div>
            <p className="text-h3 font-poppins text-rez-navy dark:text-white">{myImpactStats.rezCoinsEarned.toLocaleString()}</p>
          </div>
          <div className="p-4 rounded-rez-lg bg-purple-50 dark:bg-purple-500/10 border border-purple-200 dark:border-purple-500/30">
            <div className="flex items-center gap-2 mb-2">
              <Sparkles className="w-5 h-5 text-purple-500" />
              <span className="text-caption text-rez-gray-600 dark:text-gray-400">Branded Coins</span>
            </div>
            <p className="text-h3 font-poppins text-rez-navy dark:text-white">{myImpactStats.brandedCoinsEarned.toLocaleString()}</p>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="px-4 mb-4">
        <div className="flex gap-2 overflow-x-auto no-scrollbar">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 rounded-rez-lg whitespace-nowrap transition-all ${
                activeTab === tab.id
                  ? 'bg-emerald-500 text-white'
                  : 'bg-rez-gray-100 dark:bg-white/10 text-rez-gray-600 dark:text-gray-400 hover:bg-rez-gray-200 dark:hover:bg-white/20'
              }`}
            >
              {tab.label} ({tab.count})
            </button>
          ))}
        </div>
      </div>

      {/* Activities List */}
      <div className="px-4 space-y-4">
        {filteredActivities.map((activity) => (
          <div
            key={activity.id}
            className="p-5 rounded-rez-xl bg-white dark:bg-bg-card border border-rez-gray-200 dark:border-white/10 shadow-rez-card hover:shadow-rez-green transition-all"
          >
            {/* Header */}
            <div className="flex items-start gap-4 mb-4">
              <div className={`w-14 h-14 rounded-rez-lg ${activity.iconBg} flex items-center justify-center shrink-0`}>
                <span className="text-3xl">{activity.icon}</span>
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="text-base font-bold text-rez-navy dark:text-white">{activity.title}</h3>
                  {activity.status === 'completed' && (
                    <Check className="w-4 h-4 text-green-500" />
                  )}
                  {activity.csrActivity && (
                    <span className="px-2 py-0.5 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30">
                      <span className="text-[10px] font-bold text-blue-600 dark:text-blue-400">CSR</span>
                    </span>
                  )}
                </div>
                <div className="flex items-center gap-2 text-xs text-gray-600 dark:text-gray-400 mb-1">
                  <span>{activity.logo}</span>
                  <span>{activity.organizer}</span>
                </div>
                {activity.sponsor && (
                  <div className="flex items-center gap-1.5 mt-1">
                    <Building2 className="w-3.5 h-3.5 text-purple-600 dark:text-purple-400" />
                    <span className="text-xs font-semibold text-purple-600 dark:text-purple-400">
                      Sponsored by {activity.sponsor}
                    </span>
                  </div>
                )}
              </div>
            </div>

            {/* Details */}
            <div className="grid grid-cols-2 gap-3 mb-4">
              <div className="flex items-center gap-2 text-body-sm text-rez-gray-600 dark:text-gray-400">
                <Calendar className="w-4 h-4" />
                <span>{activity.date}</span>
              </div>
              <div className="flex items-center gap-2 text-body-sm text-rez-gray-600 dark:text-gray-400">
                <Clock className="w-4 h-4" />
                <span>{activity.time}</span>
              </div>
              <div className="flex items-center gap-2 text-body-sm text-rez-gray-600 dark:text-gray-400 col-span-2">
                <MapPin className="w-4 h-4" />
                <span>{activity.location} • {activity.distance} away</span>
              </div>
            </div>

            {/* Impact & Progress */}
            <div className="mb-4 p-3 rounded-rez-lg bg-blue-50 dark:bg-blue-500/10 border border-blue-200 dark:border-blue-500/30">
              <p className="text-body-sm text-blue-900 dark:text-blue-300 mb-2">
                <TrendingUp className="w-4 h-4 inline mr-1" />
                {activity.impact}
              </p>
              <div className="flex items-center gap-2">
                <div className="flex-1 h-2 bg-rez-gray-200 dark:bg-white/10 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-blue-500 to-emerald-500 rounded-full"
                    style={{ width: `${(activity.enrolled / activity.goal) * 100}%` }}
                  />
                </div>
                <span className="text-caption text-rez-gray-600 dark:text-gray-400">
                  {activity.enrolled}/{activity.goal}
                </span>
              </div>
            </div>

            {/* Rewards - Dual Coin System */}
            <div className="mb-4">
              <p className="text-xs font-semibold text-gray-600 dark:text-gray-400 mb-2">
                🎁 Participation Rewards
              </p>
              <div className="grid grid-cols-2 gap-2">
                <div className="p-3 rounded-xl bg-gradient-to-br from-emerald-500/10 to-green-500/10 border border-emerald-500/20">
                  <div className="flex items-center gap-2 mb-1">
                    <Coins className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                    <span className="text-xs font-medium text-gray-600 dark:text-gray-400">ReZ Coins</span>
                  </div>
                  <p className="text-xl font-bold text-emerald-600 dark:text-emerald-400">
                    +{activity.rewards.rezCoins}
                  </p>
                </div>
                {activity.rewards.brandCoins > 0 && (
                  <div className="p-3 rounded-xl bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/20">
                    <div className="flex items-center gap-2 mb-1">
                      <Sparkles className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                      <span className="text-xs font-medium text-gray-600 dark:text-gray-400">Brand Coins</span>
                    </div>
                    <p className="text-xl font-bold text-purple-600 dark:text-purple-400">
                      +{activity.rewards.brandCoins}
                    </p>
                    <p className="text-[10px] text-purple-600 dark:text-purple-400 mt-0.5">
                      {activity.rewards.brandName}
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* CTA */}
            {activity.status === 'completed' ? (
              <button
                className="w-full py-3 rounded-rez-lg font-semibold bg-rez-gray-200 dark:bg-white/10 text-rez-gray-600 dark:text-gray-400 cursor-not-allowed"
                disabled
              >
                ✓ Completed
              </button>
            ) : (
              <Link
                to={`/earn/social-impact/${activity.id}`}
                className="block w-full py-3 rounded-rez-lg font-semibold bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white text-center transition-all"
              >
                Register Now
              </Link>
            )}
          </div>
        ))}
      </div>

      {/* CTA Section - For Participants */}
      <div className="px-4 py-4">
        <div className="p-6 rounded-2xl bg-gradient-to-r from-emerald-50 to-blue-50 dark:from-emerald-500/10 dark:to-blue-500/10 border border-emerald-200 dark:border-emerald-500/30 text-center">
          <h3 className="text-lg font-bold text-rez-navy dark:text-white mb-2">Every Action Counts</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
            Join thousands making an impact while earning dual rewards
          </p>
          <div className="flex items-center justify-center gap-4 text-xs text-gray-600 dark:text-gray-400">
            <div className="flex items-center gap-1">
              <Users className="w-4 h-4" />
              <span>5,234 members</span>
            </div>
            <div className="flex items-center gap-1">
              <Heart className="w-4 h-4" />
              <span>234 events</span>
            </div>
            <div className="flex items-center gap-1">
              <Building2 className="w-4 h-4" />
              <span>45 CSR Partners</span>
            </div>
          </div>
        </div>
      </div>

      {/* Corporate CSR Partnership CTA */}
      <div className="px-4 pb-6">
        <div className="p-6 rounded-2xl bg-gradient-to-br from-purple-500/10 to-blue-500/10 border-2 border-purple-500/30">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-14 h-14 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center flex-shrink-0">
              <Building2 className="w-7 h-7 text-white" />
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-bold text-rez-navy dark:text-white mb-1">
                For Corporates & CSR Teams
              </h3>
              <p className="text-xs text-gray-600 dark:text-gray-400">
                Sponsor social impact events as part of your CSR initiatives
              </p>
            </div>
          </div>

          <div className="space-y-3 mb-4">
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
              </div>
              <div>
                <p className="text-sm font-semibold text-rez-navy dark:text-white">Fulfil CSR Obligations</p>
                <p className="text-xs text-gray-600 dark:text-gray-400">
                  Sponsor events aligned with your CSR goals
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
              </div>
              <div>
                <p className="text-sm font-semibold text-rez-navy dark:text-white">Brand Visibility</p>
                <p className="text-xs text-gray-600 dark:text-gray-400">
                  Your brand reaches thousands of engaged participants
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
              </div>
              <div>
                <p className="text-sm font-semibold text-rez-navy dark:text-white">Measurable Impact</p>
                <p className="text-xs text-gray-600 dark:text-gray-400">
                  Track participation, impact metrics, and brand engagement
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
              </div>
              <div>
                <p className="text-sm font-semibold text-rez-navy dark:text-white">Branded Coin Rewards</p>
                <p className="text-xs text-gray-600 dark:text-gray-400">
                  Participants earn your branded coins, building long-term engagement
                </p>
              </div>
            </div>
          </div>

          <button className="w-full py-3 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold hover:scale-105 transition-all">
            Partner as CSR Sponsor
          </button>
        </div>
      </div>

      <BottomNavManager />
    </div>
  );
};

export default SocialImpact;
