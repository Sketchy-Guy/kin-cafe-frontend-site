import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';
import { fadeUp, imageReveal } from '@/lib/animations';
import { cn } from '@/lib/utils';

interface FadeInProps extends HTMLMotionProps<'div'> {
  children: React.ReactNode;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  duration?: number;
  className?: string;
  viewportOnce?: boolean;
}

export const FadeIn: React.FC<FadeInProps> = ({
  children,
  delay = 0,
  direction = 'up',
  duration = 0.8,
  className,
  viewportOnce = true,
  ...props
}) => {
  const getInitialY = () => {
    if (direction === 'up') return 30;
    if (direction === 'down') return -30;
    return 0;
  };

  const getInitialX = () => {
    if (direction === 'left') return 30;
    if (direction === 'right') return -30;
    return 0;
  };

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: getInitialY(),
        x: getInitialX(),
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        x: 0,
      }}
      viewport={{ once: viewportOnce, margin: '-60px' }}
      transition={{
        duration,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
};

interface ImageRevealProps {
  src: string;
  alt: string;
  className?: string;
  imgClassName?: string;
  aspectRatio?: string;
  priority?: boolean;
}

export const ImageReveal: React.FC<ImageRevealProps> = ({
  src,
  alt,
  className,
  imgClassName,
  aspectRatio,
  priority = false,
}) => {
  return (
    <div className={cn("overflow-hidden relative bg-kin-surface", className, aspectRatio)}>
      <motion.img
        src={src}
        alt={alt}
        loading={priority ? 'eager' : 'lazy'}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-40px' }}
        variants={imageReveal}
        className={cn(
          "w-full h-full object-cover transition-transform duration-700 ease-out hover:scale-105",
          imgClassName
        )}
      />
    </div>
  );
};
