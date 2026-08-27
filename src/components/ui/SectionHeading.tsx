import React from 'react';
import { FadeIn } from './FadeIn';
import { RevealText } from './RevealText';
import { cn } from '@/lib/utils';

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center' | 'right';
  className?: string;
  titleClassName?: string;
  eyebrowClassName?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  eyebrow,
  title,
  subtitle,
  align = 'left',
  className,
  titleClassName,
  eyebrowClassName,
}) => {
  const alignStyles = {
    left: 'text-left items-start',
    center: 'text-center items-center mx-auto',
    right: 'text-right items-end ml-auto',
  };

  return (
    <div className={cn('flex flex-col mb-12 md:mb-16 max-w-4xl', alignStyles[align], className)}>
      {eyebrow && (
        <FadeIn delay={0.05}>
          <div className={cn(
            "flex items-center gap-2 text-[11px] md:text-xs font-semibold tracking-editorial uppercase text-kin-accent mb-3.5",
            eyebrowClassName
          )}>
            <span className="w-6 h-[1px] bg-kin-accent/60 inline-block"></span>
            <span>{eyebrow}</span>
          </div>
        </FadeIn>
      )}

      <h2 className={cn(
        "font-serif-editorial text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-kin-text leading-[1.08]",
        titleClassName
      )}>
        <RevealText text={title} />
      </h2>

      {subtitle && (
        <FadeIn delay={0.25} className="mt-4 max-w-xl">
          <p className="text-kin-muted text-sm sm:text-base leading-relaxed font-normal">
            {subtitle}
          </p>
        </FadeIn>
      )}
    </div>
  );
};
