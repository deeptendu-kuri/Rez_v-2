import { useState, useEffect } from 'react';
import { socialProof } from '../../data/foodData';

const FoodSocialProof = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % socialProof.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const proof = socialProof[currentIndex];

  return (
    <div className="px-4 py-2">
      <div className="flex items-center gap-2 px-3 py-2 rounded-full bg-rez-gray-50 dark:bg-white/5 animate-fade-in">
        <span className="text-lg">{proof.avatar}</span>
        <p className="text-sm text-rez-gray-700 dark:text-gray-300">
          <span className="font-medium text-rez-navy dark:text-white">{proof.user}</span>{' '}
          {proof.action}{' '}
          <span className="text-emerald-400">{proof.restaurant}</span>
        </p>
        <span className="text-xs text-rez-gray-600 dark:text-gray-500 ml-auto">{proof.time}</span>
      </div>
    </div>
  );
};

export default FoodSocialProof;
