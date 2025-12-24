import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Crown, Star, Gift, Zap } from 'lucide-react';

function RezPrive() {
  const navigate = useNavigate();
  const benefits = [
    { icon: Star, title: 'Priority Access', description: 'Early access to exclusive deals' },
    { icon: Gift, title: 'Extra Rewards', description: '2x cashback on all purchases' },
    { icon: Zap, title: 'Free Delivery', description: 'Unlimited free delivery' },
    { icon: Crown, title: 'VIP Support', description: 'Dedicated support team' }
  ];

  return (
    <div className="min-h-screen bg-rez-gray-50 dark:bg-dark-900">
      <div className="sticky top-0 z-10 bg-gradient-to-r from-amber-600 to-yellow-600">
        <div className="px-4 py-4 flex items-center gap-3">
          <button onClick={() => navigate(-1)} className="p-2 -ml-2 rounded-full hover:bg-white/20"><ArrowLeft className="w-5 h-5 text-white" /></button>
          <div><div className="flex items-center gap-2"><Crown className="w-5 h-5 text-white fill-white" /><h1 className="text-h3 font-poppins text-white">ReZ Privé</h1></div><p className="text-xs text-white/80">Exclusive membership program</p></div>
        </div>
      </div>
      <div className="px-4 py-4 space-y-4">
        <div className="p-6 rounded-2xl bg-gradient-to-br from-amber-500 to-orange-500 text-center text-white">
          <Crown className="w-20 h-20 mx-auto mb-4 fill-white/20" />
          <h2 className="text-2xl font-bold mb-2">Join ReZ Privé</h2>
          <p className="text-sm opacity-90 mb-4">Unlock exclusive benefits & rewards</p>
          <div className="inline-flex items-baseline gap-1 mb-4">
            <span className="text-sm">Only</span>
            <span className="text-4xl font-bold">₹999</span>
            <span className="text-sm">/year</span>
          </div>
        </div>
        <div className="space-y-3">
          {benefits.map((benefit, i) => (
            <div key={i} className="p-4 rounded-xl bg-white dark:bg-dark-800 border border-rez-gray-200 dark:border-dark-700">
              <div className="flex items-start gap-3">
                <div className="w-12 h-12 rounded-xl bg-amber-500/20 flex items-center justify-center flex-shrink-0">
                  <benefit.icon className="w-6 h-6 text-amber-500" />
                </div>
                <div>
                  <h3 className="font-bold text-rez-navy dark:text-white mb-1">{benefit.title}</h3>
                  <p className="text-sm text-rez-gray-600 dark:text-gray-400">{benefit.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <button className="w-full py-4 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 text-white font-bold text-lg">Join Now</button>
      </div>
    </div>
  );
}

export default RezPrive;
