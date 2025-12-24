import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Activity, MapPin, Star, Users } from 'lucide-react';

function FitnessStudios() {
  const navigate = useNavigate();
  const studios = [
    { id: 1, name: 'Yoga Studio Plus', type: 'Yoga & Meditation', distance: 0.5, rating: 4.9, members: 280, price: 799, image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400' },
    { id: 2, name: 'Zumba Fitness', type: 'Dance Fitness', distance: 1.2, rating: 4.7, members: 340, price: 599, image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?w=400' },
    { id: 3, name: 'Pilates Power', type: 'Pilates', distance: 2.0, rating: 4.8, members: 190, price: 899, image: 'https://images.unsplash.com/photo-1518310952931-b1de897abd40?w=400' }
  ];

  return (
    <div className="min-h-screen bg-rez-gray-50 dark:bg-dark-900">
      <div className="sticky top-0 z-10 bg-gradient-to-r from-purple-600 to-pink-600">
        <div className="px-4 py-4 flex items-center gap-3">
          <button onClick={() => navigate(-1)} className="p-2 -ml-2 rounded-full hover:bg-white/20"><ArrowLeft className="w-5 h-5 text-white" /></button>
          <div><div className="flex items-center gap-2"><Activity className="w-5 h-5 text-white" /><h1 className="text-h3 font-poppins text-white">Fitness Studios</h1></div><p className="text-xs text-white/80">Specialized fitness classes</p></div>
        </div>
      </div>
      <div className="px-4 py-4 space-y-3">
        {studios.map(studio => (
          <div key={studio.id} onClick={() => navigate(`/fitness/studio/${studio.id}`)} className="bg-white dark:bg-dark-800 rounded-2xl p-4 border border-rez-gray-200 dark:border-dark-700 hover:border-purple-500 transition-all cursor-pointer">
            <div className="flex gap-3">
              <img src={studio.image} alt={studio.name} className="w-24 h-24 rounded-xl object-cover" />
              <div className="flex-1">
                <h3 className="font-bold text-rez-navy dark:text-white mb-1">{studio.name}</h3>
                <p className="text-sm text-purple-600 dark:text-purple-400 mb-2">{studio.type}</p>
                <div className="flex items-center gap-3 mb-2">
                  <div className="flex items-center gap-1"><MapPin className="w-3 h-3 text-rez-gray-400" /><span className="text-sm text-rez-gray-600 dark:text-gray-400">{studio.distance} km</span></div>
                  <div className="flex items-center gap-1"><Star className="w-4 h-4 text-amber-400 fill-amber-400" /><span className="text-sm font-semibold">{studio.rating}</span></div>
                  <div className="flex items-center gap-1"><Users className="w-4 h-4 text-rez-gray-400" /><span className="text-sm text-rez-gray-600 dark:text-gray-400">{studio.members}</span></div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold text-rez-navy dark:text-white">₹{studio.price}/mo</span>
                  <button className="px-4 py-2 rounded-lg bg-purple-500 text-white font-bold text-sm">View Classes</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FitnessStudios;
