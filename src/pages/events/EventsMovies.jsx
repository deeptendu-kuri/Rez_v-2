import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Film, Star } from 'lucide-react';

function EventsMovies() {
  const navigate = useNavigate();
  const movies = [
    { id: 1, title: 'Action Blockbuster', image: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=400', rating: 4.5, language: 'English', genre: 'Action' },
    { id: 2, title: 'Romantic Drama', image: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=400', rating: 4.2, language: 'Hindi', genre: 'Romance' }
  ];

  return (
    <div className="min-h-screen bg-rez-gray-50 dark:bg-dark-900">
      <div className="sticky top-0 z-10 bg-gradient-to-r from-red-600 to-pink-600">
        <div className="px-4 py-4 flex items-center gap-3">
          <button onClick={() => navigate(-1)} className="p-2 -ml-2 rounded-full hover:bg-white/20"><ArrowLeft className="w-5 h-5 text-white" /></button>
          <div><div className="flex items-center gap-2"><Film className="w-5 h-5 text-white" /><h1 className="text-h3 font-poppins text-white">Movies</h1></div><p className="text-xs text-white/80">Now showing</p></div>
        </div>
      </div>
      <div className="px-4 py-4 grid grid-cols-2 gap-3">
        {movies.map(m => (
          <div key={m.id} onClick={() => navigate(`/event/movie/${m.id}`)} className="bg-white dark:bg-dark-800 rounded-2xl overflow-hidden border border-rez-gray-200 dark:border-dark-700 cursor-pointer">
            <img src={m.image} alt={m.title} className="w-full h-48 object-cover" />
            <div className="p-3">
              <h3 className="font-bold text-sm text-rez-navy dark:text-white mb-1">{m.title}</h3>
              <div className="flex items-center gap-1 mb-1"><Star className="w-3 h-3 text-amber-400 fill-amber-400" /><span className="text-xs">{m.rating}</span></div>
              <p className="text-xs text-rez-gray-600 dark:text-gray-400">{m.language} • {m.genre}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default EventsMovies;
