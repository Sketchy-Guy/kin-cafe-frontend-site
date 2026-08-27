import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { siteConfig } from '@/data/site';

export const Preloader: React.FC<{ onComplete?: () => void }> = ({ onComplete }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      if (onComplete) onComplete();
    }, 750); // <1s duration target

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-kin-base text-kin-text"
        >
          <div className="overflow-hidden mb-4 flex flex-col items-center">
            <motion.img
              src={siteConfig.logo}
              alt="KIN Logo"
              initial={{ scale: 0.7, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="w-16 h-16 md:w-20 md:h-20 rounded-full object-cover border-2 border-kin-accent/60 shadow-xl mb-3"
            />
            <motion.h1
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="font-serif-editorial text-5xl sm:text-6xl tracking-widest font-normal"
            >
              KIN
            </motion.h1>
          </div>
          
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.6, ease: 'easeInOut' }}
            className="w-24 h-[1px] bg-kin-accent/60 origin-center"
          />

          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.4 }}
            className="text-[10px] uppercase tracking-editorial text-kin-muted mt-3"
          >
            ROURKELA · BASANTI NAGAR
          </motion.span>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
