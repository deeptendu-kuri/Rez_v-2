import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, BookOpen } from 'lucide-react';

function EventsWorkshops() {
  const navigate = useNavigate();
  const workshops = [{ id: 1, name: 'Photography Workshop', date: 'Jan 26', price: 999, image: 'https://images.unsplash.com/photo-1542038784456-1ea8e935640e?w=400' }, { id: 2, name: 'Cooking Class', date: 'Jan 29', price: 799, image: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=400' }];

  return (<div className="min-h-screen bg-rez-gray-50 dark:bg-dark-900"><div className="sticky top-0 z-10 bg-gradient-to-r from-blue-600 to-cyan-600"><div className="px-4 py-4 flex items-center gap-3"><button onClick={() => navigate(-1)} className="p-2 -ml-2 rounded-full hover:bg-white/20"><ArrowLeft className="w-5 h-5 text-white" /></button><div><div className="flex items-center gap-2"><BookOpen className="w-5 h-5 text-white" /><h1 className="text-h3 font-poppins text-white">Workshops</h1></div></div></div></div><div className="px-4 py-4 space-y-3">{workshops.map(w => (<div key={w.id} onClick={() => navigate(`/event/workshop/${w.id}`)} className="bg-white dark:bg-dark-800 rounded-2xl overflow-hidden border cursor-pointer"><img src={w.image} alt={w.name} className="w-full h-32 object-cover" /><div className="p-3"><h3 className="font-bold">{w.name}</h3><div className="flex justify-between mt-2"><p className="text-sm text-rez-gray-600">{w.date}</p><p className="font-bold">₹{w.price}</p></div></div></div>))}</div></div>);
}

export default EventsWorkshops;
