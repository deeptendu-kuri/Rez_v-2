import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Gamepad2 } from 'lucide-react';

function EventsGaming() {
  const navigate = useNavigate();
  return (<div className="min-h-screen bg-rez-gray-50 dark:bg-dark-900"><div className="sticky top-0 z-10 bg-gradient-to-r from-purple-600 to-pink-600"><div className="px-4 py-4 flex items-center gap-3"><button onClick={() => navigate(-1)} className="p-2 -ml-2 rounded-full hover:bg-white/20"><ArrowLeft className="w-5 h-5 text-white" /></button><div><div className="flex items-center gap-2"><Gamepad2 className="w-5 h-5 text-white" /><h1 className="text-h3 font-poppins text-white">Gaming Venues</h1></div></div></div></div><div className="px-4 py-4"><div className="text-center py-12"><Gamepad2 className="w-16 h-16 text-rez-gray-400 mx-auto mb-4" /><p className="text-rez-gray-600 dark:text-gray-400">Gaming zones & arcades</p></div></div></div>);
}

export default EventsGaming;
