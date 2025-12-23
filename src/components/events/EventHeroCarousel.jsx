import { useState, useEffect } from 'react';
import { ChevronRight, Coins } from 'lucide-react';
import Badge from '../common/Badge';
import Button from '../common/Button';

const EventHeroCarousel = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % items.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [items.length]);

  return (
    <div className="relative">
      {/* Carousel */}
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {items.map((item) => (
            <div key={item.id} className="min-w-full px-4">
              <div className="relative h-48 rounded-2xl overflow-hidden">
                {/* Background */}
                <img
                  src={item.image}
                  alt={item.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className={`absolute inset-0 bg-gradient-to-r ${item.color}`} />

                {/* Content */}
                <div className="relative h-full p-5 flex flex-col justify-between">
                  <div>
                    {item.tag && (
                      <Badge variant="secondary" size="xs" className="mb-2">
                        {item.tag}
                      </Badge>
                    )}
                    <h2 className="text-2xl font-bold text-rez-navy dark:text-white">{item.title}</h2>
                    <p className="text-white/80 text-sm mt-1">{item.subtitle}</p>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white dark:bg-black/30 backdrop-blur-sm">
                      <Coins className="w-4 h-4 text-amber-400" />
                      <span className="text-sm text-rez-navy dark:text-white">Earn ₹{item.coins}</span>
                    </div>
                    <Button variant="secondary" size="sm">
                      {item.cta}
                      <ChevronRight className="w-4 h-4 ml-1" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Indicators */}
      <div className="flex justify-center gap-1.5 mt-3">
        {items.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-1.5 rounded-full transition-all ${
              index === currentIndex
                ? 'w-6 bg-emerald-500'
                : 'w-1.5 bg-white/30'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default EventHeroCarousel;
