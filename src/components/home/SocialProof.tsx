import React from 'react';
import { Star } from 'lucide-react';
import { FadeIn } from '@/components/ui/FadeIn';
import { siteConfig } from '@/data/site';

export const SocialProof: React.FC = () => {
  return (
    <section className="py-20 bg-kin-surface/70 border-y border-kin-border/80 relative">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <FadeIn>
          <div className="inline-flex items-center gap-1.5 text-amber-600 mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-amber-500 text-amber-500" />
            ))}
          </div>

          <div className="flex items-center justify-center gap-3 font-serif-editorial text-5xl sm:text-6xl md:text-7xl font-light text-kin-text mb-3">
            <span>{siteConfig.rating.score}</span>
            <span className="text-2xl text-kin-muted">/ 5.0</span>
          </div>

          <p className="text-xs sm:text-sm font-semibold uppercase tracking-editorial text-kin-accent mb-2">
            BASED ON {siteConfig.rating.reviewsCount}+ GOOGLE REVIEWS
          </p>

          <h3 className="font-serif-editorial text-2xl sm:text-3xl italic text-kin-text/90 font-light">
            “Loved around Rourkela.”
          </h3>
        </FadeIn>
      </div>
    </section>
  );
};
