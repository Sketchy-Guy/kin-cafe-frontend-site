import React from 'react';
import { motion } from 'framer-motion';
import { wordMaskReveal, EASE_EMPATHIC } from '@/lib/animations';
import { cn } from '@/lib/utils';

interface RevealTextProps {
  text: string;
  className?: string;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'span' | 'div';
  delay?: number;
  stagger?: number;
}

export const RevealText: React.FC<RevealTextProps> = ({
  text,
  className,
  as: Component = 'div',
  delay = 0,
  stagger = 0.04,
}) => {
  const words = text.split(' ');

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: stagger,
        delayChildren: delay,
      },
    },
  };

  return (
    <Component className={cn("inline-block", className)}>
      <motion.span
        className="inline-flex flex-wrap gap-x-[0.25em] gap-y-[0.1em]"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-50px' }}
      >
        {words.map((word, idx) => (
          <span key={idx} className="overflow-hidden inline-block align-bottom py-[0.05em]">
            <motion.span
              className="inline-block"
              variants={wordMaskReveal}
              transition={{ duration: 0.8, ease: EASE_EMPATHIC }}
            >
              {word}
            </motion.span>
          </span>
        ))}
      </motion.span>
    </Component>
  );
};
