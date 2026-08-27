import React from 'react';
import { Marquee } from '@/components/ui/Marquee';

export const FoodEditorial: React.FC = () => {
  return (
    <section className="py-10 bg-kin-surface/60 border-y border-kin-border/80">
      <Marquee speed="slow" />
    </section>
  );
};
