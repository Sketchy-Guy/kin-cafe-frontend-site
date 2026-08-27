import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export const CursorFollower: React.FC = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [cursorText, setCursorText] = useState('');
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    // Check if device supports fine hover
    const mediaQuery = window.matchMedia('(pointer: fine)');
    setIsMobile(!mediaQuery.matches);

    const handleMediaChange = (e: MediaQueryListEvent) => {
      setIsMobile(!e.matches);
    };

    mediaQuery.addEventListener('change', handleMediaChange);

    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      // Check hover targets
      const target = e.target as HTMLElement | null;
      if (target) {
        const hoverable = target.closest('[data-cursor]');
        if (hoverable) {
          const text = hoverable.getAttribute('data-cursor') || '';
          setCursorText(text);
          setIsHovered(true);
        } else {
          setIsHovered(false);
          setCursorText('');
        }
      }
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      mediaQuery.removeEventListener('change', handleMediaChange);
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isVisible]);

  if (isMobile || !isVisible) return null;

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-50 mix-blend-difference hidden md:block"
      animate={{
        x: position.x - (isHovered ? 36 : 12),
        y: position.y - (isHovered ? 36 : 12),
        scale: isHovered ? 1.5 : 1,
      }}
      transition={{
        type: 'spring',
        stiffness: 400,
        damping: 28,
        mass: 0.5,
      }}
    >
      <div
        className={`rounded-full flex items-center justify-center transition-all duration-300 ${
          isHovered
            ? 'w-18 h-18 bg-white text-black text-[10px] font-bold tracking-widest uppercase p-2 text-center'
            : 'w-6 h-6 border border-white/80 bg-white/10 backdrop-blur-[1px]'
        }`}
      >
        {isHovered && <span>{cursorText}</span>}
      </div>
    </motion.div>
  );
};
