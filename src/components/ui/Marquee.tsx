import React from 'react';
import { cn } from '@/lib/utils';

interface MarqueeProps {
  items?: string[];
  className?: string;
  speed?: 'normal' | 'slow';
  reverse?: boolean;
}

const DEFAULT_ITEMS = [
  'COFFEE',
  'PANCAKES',
  'DESSERTS',
  'PIZZA',
  'PASTA',
  'SLOW MOMENTS',
  'BASANTI NAGAR',
  'BAKERY',
  'ROURKELA LIFESTYLE',
  'CHEESECAKE'
];

export const Marquee: React.FC<MarqueeProps> = ({
  items = DEFAULT_ITEMS,
  className,
  speed = 'slow',
  reverse = false,
}) => {
  const content = (
    <div className="flex items-center shrink-0">
      {items.map((item, idx) => (
        <div key={idx} className="flex items-center">
          <span className="font-serif-editorial text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light tracking-wider text-kin-text/80 hover:text-kin-accent transition-colors duration-300 px-6 sm:px-10 uppercase">
            {item}
          </span>
          <span className="w-2 h-2 rounded-full bg-kin-accent/40 inline-block"></span>
        </div>
      ))}
    </div>
  );

  return (
    <div className={cn("relative w-full overflow-hidden py-6 border-y border-kin-border/60 bg-kin-surface/40 select-none group", className)}>
      <div 
        className={cn(
          "flex w-max group-hover:[animation-play-state:paused]",
          speed === 'slow' ? 'animate-marquee-slow' : 'animate-marquee',
          reverse && '[animation-direction:reverse]'
        )}
      >
        {content}
        {content}
      </div>
    </div>
  );
};
