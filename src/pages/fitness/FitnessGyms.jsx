import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Dumbbell, MapPin, Star, Clock, TrendingUp } from 'lucide-react';

function FitnessGyms() {
  const navigate = useNavigate();
  const gyms = [
    { id: 1, name: 'Cult.fit Gym', distance: 0.8, rating: 4.8, members: 450, price: 999, features: ['Cardio', 'Weights', 'Classes'], open: '5 AM - 11 PM', image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=400', trending: true },
    { id: 2, name: 'Gold\'s Gym', distance: 1.5, rating: 4.7, members: 620, price: 1499, features: ['CrossFit', 'Spa', 'Personal Training'], open: '6 AM - 10 PM', image: 'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=400', trending: false }
  ];

  return (
    <div className="min-h-screen bg-rez-gray-50 dark:bg-dark-900">
      <div className="sticky top-0 z-10 bg-gradient-to-r from-orange-600 to-red-600">
        <div className="px-4 py-4 flex items-center gap-3">
          <button onClick={() => navigate(-1)} className="p-2 -ml-2 rounded-full hover:bg-white/20"><ArrowLeft className="w-5 h-5 text-white" /></button>
          <div><div className="flex items-center gap-2"><Dumbbell className="w-5 h-5 text-white" /><h1 className="text-h3 font-poppins text-white">Gyms Near You</h1></div><p className="text-xs text-white/80">Find your perfect gym</p></div>
        </div>
      </div>
      <div className="px-4 py-4 space-y-3">
        {gyms.map(gym => (
          <div key={gym.id} onClick={() => navigate(`/fitness/gym/${gym.id}`)} className="bg-white dark:bg-dark-800 rounded-2xl overflow-hidden border border-rez-gray-200 dark:border-dark-700 hover:border-orange-500 transition-all cursor-pointer">
            <div className="relative h-40">
              <img src={gym.image} alt={gym.name} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              {gym.trending && <div className="absolute top-3 right-3 px-3 py-1 rounded-full bg-orange-500 text-white text-xs font-bold flex items-center gap-1"><TrendingUp className="w-3 h-3" />Trending</div>}
            </div>
            <div className="p-4">
              <div className="flex items-start justify-between mb-2">
                <div><h3 className="font-bold text-rez-navy dark:text-white">{gym.name}</h3><div className="flex items-center gap-2 mt-1"><div className="flex items-center gap-1"><MapPin className="w-3 h-3 text-rez-gray-400" /><span className="text-sm text-rez-gray-600 dark:text-gray-400">{gym.distance} km</span></div><div className="flex items-center gap-1"><Star className="w-4 h-4 text-amber-400 fill-amber-400" /><span className="text-sm font-semibold">{gym.rating}</span></div></div></div>
                <div className="text-right"><p className="text-xs text-rez-gray-600 dark:text-gray-400">From</p><p className="text-lg font-bold text-orange-600 dark:text-orange-400">₹{gym.price}/mo</p></div>
              </div>
              <div className="flex items-center gap-2 mb-3 text-sm text-rez-gray-600 dark:text-gray-400">
                <Clock className="w-4 h-4" />{gym.open}
              </div>
              <div className="flex flex-wrap gap-2">
                {gym.features.map((feature, i) => (
                  <span key={i} className="px-2 py-1 rounded-md bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-400 text-xs font-bold">{feature}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FitnessGyms;
