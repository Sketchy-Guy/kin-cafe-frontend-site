import React from 'react';
import { motion } from 'framer-motion';
import { imageReveal } from '@/lib/animations';
import { cn } from '@/lib/utils';

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
          "w-full h-full object-cover transition-transform duration-500 ease-out hover:scale-[1.03]",
          imgClassName
        )}
      />
    </div>
  );
};
