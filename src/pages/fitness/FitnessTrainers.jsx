import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, User, Star, Award, TrendingUp } from 'lucide-react';

function FitnessTrainers() {
  const navigate = useNavigate();
  const trainers = [
    { id: 1, name: 'Rahul Sharma', specialization: 'Weight Loss & Strength', experience: 8, rating: 4.9, reviews: 350, price: 2000, certified: true, image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=400' },
    { id: 2, name: 'Priya Verma', specialization: 'Yoga & Flexibility', experience: 6, rating: 4.8, reviews: 280, price: 1500, certified: true, image: 'https://images.unsplash.com/photo-1550259979-ed79b48d2a30?w=400' }
  ];

  return (
    <div className="min-h-screen bg-rez-gray-50 dark:bg-dark-900">
      <div className="sticky top-0 z-10 bg-gradient-to-r from-blue-600 to-cyan-600">
        <div className="px-4 py-4 flex items-center gap-3">
          <button onClick={() => navigate(-1)} className="p-2 -ml-2 rounded-full hover:bg-white/20"><ArrowLeft className="w-5 h-5 text-white" /></button>
          <div><div className="flex items-center gap-2"><User className="w-5 h-5 text-white" /><h1 className="text-h3 font-poppins text-white">Personal Trainers</h1></div><p className="text-xs text-white/80">Certified fitness experts</p></div>
        </div>
      </div>
      <div className="px-4 py-4 space-y-3">
        {trainers.map(trainer => (
          <div key={trainer.id} onClick={() => navigate(`/fitness/trainer/${trainer.id}`)} className="bg-white dark:bg-dark-800 rounded-2xl p-4 border border-rez-gray-200 dark:border-dark-700 hover:border-blue-500 transition-all cursor-pointer">
            <div className="flex gap-3">
              <img src={trainer.image} alt={trainer.name} className="w-24 h-24 rounded-xl object-cover" />
              <div className="flex-1">
                <div className="flex items-start justify-between mb-1">
                  <div><h3 className="font-bold text-rez-navy dark:text-white">{trainer.name}</h3><p className="text-sm text-blue-600 dark:text-blue-400">{trainer.specialization}</p></div>
                  {trainer.certified && <Award className="w-5 h-5 text-blue-500" />}
                </div>
                <div className="flex items-center gap-3 mb-2">
                  <div className="flex items-center gap-1"><Star className="w-4 h-4 text-amber-400 fill-amber-400" /><span className="text-sm font-semibold">{trainer.rating}</span><span className="text-xs text-rez-gray-600 dark:text-gray-400">({trainer.reviews})</span></div>
                  <span className="text-sm text-rez-gray-600 dark:text-gray-400">{trainer.experience} yrs exp</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold text-rez-navy dark:text-white">₹{trainer.price}/session</span>
                  <button className="px-4 py-2 rounded-lg bg-blue-500 text-white font-bold text-sm">Book Session</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FitnessTrainers;
