import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const GlobalPreloader = ({ onComplete }) => {
  const [stage, setStage] = useState(0);

  useEffect(() => {
    // Stage 0: Black fade in (300ms)
    const timer1 = setTimeout(() => setStage(1), 300);

    // Stage 1: Logo reveal (600ms + 100ms delay)
    const timer2 = setTimeout(() => setStage(2), 1000);

    // Stage 2: Tagline fade (450ms + 150ms delay)
    const timer3 = setTimeout(() => setStage(3), 1600);

    // Stage 3: Complete after minimum 1.5s total
    const timer4 = setTimeout(() => {
      if (onComplete) onComplete();
    }, 2000);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
    };
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#0E0E0E]"
      style={{
        backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 400 400\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\' opacity=\'0.03\'/%3E%3C/svg%3E")',
      }}
    >
      <div className="relative flex flex-col items-center">
        {/* Logo Reveal */}
        <AnimatePresence>
          {stage >= 1 && (
            <motion.div
              initial={{ scale: 0.85, opacity: 0, filter: 'blur(4px)' }}
              animate={{ scale: 1, opacity: 1, filter: 'blur(0px)' }}
              transition={{
                duration: 0.6,
                ease: [0.16, 1, 0.3, 1], // Apple-like ease-out
              }}
              className="relative"
            >
              {/* ReZ Coin Logo */}
              <div className="relative w-24 h-24 mb-6">
                {/* Loader Pulse Ring */}
                {stage >= 3 && (
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 1.2,
                      repeat: Infinity,
                      ease: 'linear',
                    }}
                    className="absolute inset-0 rounded-full"
                    style={{
                      border: '2px solid transparent',
                      borderTopColor: '#FF3B30',
                      borderRightColor: '#FF9500',
                    }}
                  />
                )}

                {/* Coin */}
                <div className="absolute inset-2 rounded-full bg-gradient-to-br from-amber-400 via-yellow-500 to-orange-500 shadow-2xl flex items-center justify-center">
                  <span className="text-4xl font-bold text-white">R</span>

                  {/* Shine effect */}
                  <motion.div
                    initial={{ x: '-100%', opacity: 0 }}
                    animate={{ x: '100%', opacity: [0, 1, 0] }}
                    transition={{
                      duration: 0.6,
                      delay: 0.4,
                      ease: 'easeOut',
                    }}
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                    style={{ transform: 'skewX(-20deg)' }}
                  />
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Tagline Fade */}
        <AnimatePresence>
          {stage >= 2 && (
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.45,
                delay: 0.15,
                ease: 'easeOut',
              }}
              className="text-center"
            >
              <p className="text-lg font-medium text-white/90 mb-2">
                Smart people save with ReZ
              </p>
              <p className="text-sm text-white/40">
                Loading your rewards…
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default GlobalPreloader;
