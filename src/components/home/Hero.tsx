import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, MapPin } from 'lucide-react';
import { IMAGES } from '@/data/gallery';
import { siteConfig } from '@/data/site';
import { Button } from '@/components/ui/Button';

interface HeroProps {
  onOpenMenu: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenMenu }) => {
  const letters = ['K', 'I', 'N'];

  return (
    <section 
      id="home" 
      className="relative w-full min-h-screen flex flex-col justify-between pt-24 pb-8 px-6 md:px-12 bg-kin-dark text-white select-none overflow-hidden"
    >
      {/* Background Image with Smooth Blur to Cover Graininess */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.img
          src={IMAGES.hero}
          alt="KIN Café Exterior Basanti Nagar Rourkela"
          initial={{ opacity: 0.85 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
          className="w-full h-full object-cover object-center filter blur-[5px] scale-[1.04] brightness-[0.92] contrast-[1.02]"
        />

        {/* Minimal gradient overlays for legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-kin-dark/90 via-black/30 to-black/40" />
        <div className="absolute inset-0 bg-noise opacity-20 pointer-events-none" />
      </div>

      {/* Top Spacer for Floating Navbar */}
      <div className="h-6 md:h-10" />

      {/* Clean Main Content Box (No Box Blur, No Card Outer Box) */}
      <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center justify-center my-auto py-4">
        {/* Eyebrow Location Badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/40 border border-white/20 text-white/90 text-[11px] md:text-xs font-semibold tracking-editorial uppercase mb-4 shadow-md"
        >
          <MapPin className="w-3.5 h-3.5 text-kin-accent-light" />
          <span>ROURKELA · BASANTI NAGAR</span>
        </motion.div>

        {/* Real KIN Brand Logo Image */}
        <motion.img
          src={siteConfig.logo}
          alt="KIN Café Logo"
          initial={{ scale: 0.85, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full object-cover border-2 border-white/50 shadow-2xl mb-3"
        />

        {/* Brand Name Title */}
        <div className="overflow-hidden mb-2">
          <div className="flex items-center justify-center gap-2 sm:gap-4 font-serif-editorial text-6xl sm:text-8xl md:text-9xl lg:text-[10rem] font-light tracking-widest leading-none text-white drop-shadow-xl">
            {letters.map((letter, idx) => (
              <motion.span
                key={idx}
                initial={{ y: '100%', opacity: 0 }}
                animate={{ y: '0%', opacity: 1 }}
                transition={{
                  duration: 0.9,
                  delay: 0.35 + idx * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="inline-block"
              >
                {letter}
              </motion.span>
            ))}
          </div>
        </div>

        {/* Tagline */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.75 }}
          className="font-serif-editorial text-xl sm:text-3xl md:text-4xl font-light text-kin-base tracking-wide max-w-2xl leading-snug mb-3 drop-shadow-md"
        >
          GOOD FOOD. SLOW MOMENTS.
        </motion.h2>

        {/* Supporting Copy */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="text-white/90 text-xs sm:text-sm md:text-base max-w-lg font-light leading-relaxed mb-6 drop-shadow-sm font-sans"
        >
          A warm café space for coffee, conversations, sweet cravings and something worth staying for.
        </motion.p>

        {/* Dual Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.05 }}
          className="flex flex-col sm:flex-row items-center gap-3.5 w-full sm:w-auto"
        >
          <Button
            variant="primary"
            size="lg"
            icon="arrow"
            onClick={onOpenMenu}
            className="w-full sm:w-auto bg-kin-accent hover:bg-white hover:text-kin-dark text-white border-none shadow-xl"
          >
            EXPLORE MENU
          </Button>

          <Button
            variant="outline"
            size="lg"
            asAnchor
            href="#visit"
            className="w-full sm:w-auto text-white border-white/50 hover:bg-white hover:text-kin-dark bg-black/20"
          >
            VISIT KIN
          </Button>
        </motion.div>
      </div>

      {/* Scroll Down Prompt */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3, duration: 0.8 }}
        className="relative z-10 pt-4 flex flex-col items-center gap-1.5 text-white/80 cursor-pointer hover:text-white transition-colors"
        onClick={() => {
          document.getElementById('story')?.scrollIntoView({ behavior: 'smooth' });
        }}
      >
        <span className="text-[10px] uppercase tracking-editorial font-medium drop-shadow-sm">SCROLL TO DISCOVER</span>
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronDown className="w-4 h-4 text-kin-accent-light" />
        </motion.div>
      </motion.div>
    </section>
  );
};
