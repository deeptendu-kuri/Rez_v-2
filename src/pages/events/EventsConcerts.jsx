import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Music } from 'lucide-react';

function EventsConcerts() {
  const navigate = useNavigate();
  const concerts = [
    { id: 1, name: 'Rock Night', image: 'https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=400', date: 'Jan 25', price: 1500 },
    { id: 2, name: 'Jazz Evening', image: 'https://images.unsplash.com/photo-1511192336575-5a79af67a629?w=400', date: 'Jan 28', price: 2000 }
  ];

  return (
    <div className="min-h-screen bg-rez-gray-50 dark:bg-dark-900">
      <div className="sticky top-0 z-10 bg-gradient-to-r from-purple-600 to-indigo-600">
        <div className="px-4 py-4 flex items-center gap-3">
          <button onClick={() => navigate(-1)} className="p-2 -ml-2 rounded-full hover:bg-white/20"><ArrowLeft className="w-5 h-5 text-white" /></button>
          <div><div className="flex items-center gap-2"><Music className="w-5 h-5 text-white" /><h1 className="text-h3 font-poppins text-white">Concerts</h1></div></div>
        </div>
      </div>
      <div className="px-4 py-4 space-y-3">
        {concerts.map(c => (
          <div key={c.id} onClick={() => navigate(`/event/concert/${c.id}`)} className="relative h-40 rounded-2xl overflow-hidden cursor-pointer">
            <img src={c.image} alt={c.name} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-4">
              <h3 className="text-xl font-bold text-white mb-1">{c.name}</h3>
              <div className="flex justify-between items-center">
                <p className="text-sm text-white/80">{c.date}</p>
                <p className="text-lg font-bold text-white">₹{c.price}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default EventsConcerts;
