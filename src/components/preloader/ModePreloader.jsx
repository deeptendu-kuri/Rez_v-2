import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, ShoppingBag, Coins, Crown } from 'lucide-react';

const ModePreloader = ({ mode, onComplete }) => {
  // Mode configurations
  const modeConfigs = {
    rez: {
      bg: 'bg-gradient-to-br from-red-50 to-orange-50 dark:from-red-950/20 dark:to-orange-950/20',
      icons: [
        { Icon: MapPin, delay: 0, color: 'text-red-500' },
        { Icon: ShoppingBag, delay: 0.12, color: 'text-orange-500' },
        { Icon: Coins, delay: 0.24, color: 'text-amber-500' },
      ],
      copy: 'Finding rewards near you…',
      copyColor: 'text-gray-700 dark:text-gray-300',
      duration: 800,
    },
    mall: {
      bg: 'bg-white dark:bg-gray-900',
      tiles: true,
      copy: 'Curating trusted brands for you…',
      copyColor: 'text-gray-700 dark:text-gray-300',
      duration: 900,
    },
    'cash-store': {
      bg: 'bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-950/20 dark:to-teal-950/20',
      cashback: true,
      copy: 'Tracking cashback across stores…',
      copyColor: 'text-gray-700 dark:text-gray-300',
      duration: 900,
    },
    prive: {
      bg: 'bg-[#0B0B0B]',
      premium: true,
      copy: 'Privileged access unlocked',
      copyColor: 'text-amber-400',
      duration: 1200,
    },
  };

  const config = modeConfigs[mode] || modeConfigs.rez;

  // Auto-complete after duration
  setTimeout(() => {
    if (onComplete) onComplete();
  }, config.duration);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 0.92 }}
      transition={{ duration: 0.4, ease: 'easeInOut' }}
      className={`fixed inset-0 z-[9998] flex items-center justify-center ${config.bg}`}
    >
      <div className="flex flex-col items-center">
        {/* ReZ Mode - Icons Animation */}
        {mode === 'rez' && (
          <div className="flex gap-6 mb-6">
            {config.icons.map(({ Icon, delay, color }, index) => (
              <motion.div
                key={index}
                initial={{ scale: 0.7, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{
                  duration: 0.22,
                  delay,
                  ease: 'easeOut',
                }}
              >
                <div className={`w-16 h-16 rounded-2xl bg-white dark:bg-gray-800 shadow-lg flex items-center justify-center ${color}`}>
                  <Icon className="w-8 h-8" />
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {/* Mall Mode - Brand Tiles */}
        {mode === 'mall' && (
          <div className="grid grid-cols-3 gap-3 mb-6">
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: i * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="w-20 h-20 rounded-xl bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 shadow-md"
              />
            ))}
          </div>
        )}

        {/* Cash Store Mode - Money Flow */}
        {mode === 'cash-store' && (
          <div className="relative mb-6">
            {/* Wallet */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
              className="w-24 h-24 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-500 shadow-xl flex items-center justify-center relative overflow-hidden"
            >
              <span className="text-4xl font-bold text-white">₹</span>

              {/* Flowing coins */}
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ y: 40, opacity: 0 }}
                  animate={{ y: -60, opacity: [0, 1, 0] }}
                  transition={{
                    duration: 0.7,
                    delay: i * 0.2,
                    repeat: Infinity,
                    ease: 'easeOut',
                  }}
                  className="absolute"
                  style={{ left: `${30 + i * 20}%` }}
                >
                  <Coins className="w-5 h-5 text-white/60" />
                </motion.div>
              ))}
            </motion.div>

            {/* Counter */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="mt-4 text-center"
            >
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-2xl font-bold text-emerald-600 dark:text-emerald-400"
              >
                ₹
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.7, ease: 'easeOut' }}
                >
                  2,450
                </motion.span>
              </motion.span>
            </motion.div>
          </div>
        )}

        {/* Privé Mode - Premium */}
        {mode === 'prive' && (
          <div className="flex flex-col items-center">
            {/* Gold Monogram */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.6,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="relative mb-6"
            >
              {/* Glow */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 0.6, 0.4] }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                className="absolute inset-0 bg-amber-400/20 blur-2xl rounded-full scale-150"
              />

              {/* Monogram */}
              <div className="relative w-20 h-20 rounded-full border-2 border-amber-400/40 bg-gradient-to-br from-amber-400/10 to-yellow-600/10 flex items-center justify-center">
                <Crown className="w-10 h-10 text-amber-400" />
              </div>
            </motion.div>

            {/* Gold Line */}
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: 120 }}
              transition={{
                duration: 0.4,
                delay: 0.4,
                ease: 'easeInOut',
              }}
              className="h-[1px] bg-gradient-to-r from-transparent via-amber-400 to-transparent mb-4"
            />
          </div>
        )}

        {/* Copy */}
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.45,
            delay: mode === 'prive' ? 0.6 : 0.3,
            ease: 'easeOut',
          }}
          className={`text-sm font-medium ${config.copyColor} ${
            mode === 'prive' ? 'tracking-wide' : ''
          }`}
        >
          {config.copy}
        </motion.p>
      </div>
    </motion.div>
  );
};

export default ModePreloader;
