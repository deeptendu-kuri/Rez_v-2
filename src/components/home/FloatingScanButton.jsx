import { Link } from 'react-router-dom';
import { Camera } from 'lucide-react';

const FloatingScanButton = () => {
  return (
    <Link
      to="/scan"
      className="fixed bottom-24 right-4 z-50 w-14 h-14 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 shadow-lg shadow-emerald-500/30 flex items-center justify-center active:scale-95 transition-transform"
    >
      <Camera className="w-6 h-6 text-white" />
      <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-pulse" />
    </Link>
  );
};

export default FloatingScanButton;
