import React from 'react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { FadeIn } from '@/components/ui/FadeIn';
import { ImageReveal } from '@/components/ui/ImageReveal';
import { IMAGES } from '@/data/gallery';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 md:py-36 bg-kin-surface relative overflow-hidden">
      {/* Background Subtle Grain */}
      <div className="absolute inset-0 bg-noise opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Vertical Text Column for Desktop */}
          <div className="hidden lg:flex lg:col-span-1 justify-center">
            <span className="text-[11px] font-semibold uppercase tracking-[0.35em] text-kin-accent [writing-mode:vertical-rl] rotate-180 select-none opacity-80">
              COFFEE · FOOD · PEOPLE · MOMENTS
            </span>
          </div>

          {/* Editorial Overlapping Photo Spread */}
          <div className="lg:col-span-6 relative order-2 lg:order-1">
            <div className="relative w-full max-w-lg mx-auto lg:max-w-none">
              {/* Primary Large Image */}
              <FadeIn delay={0.1}>
                <ImageReveal
                  src={IMAGES.space1}
                  alt="KIN Cafe Aesthetic Interior Seating"
                  aspectRatio="aspect-[4/3]"
                  className="rounded-sm shadow-xl w-[85%] md:w-[80%]"
                />
              </FadeIn>

              {/* Secondary Overlapping Image */}
              <FadeIn 
                delay={0.3} 
                direction="up"
                className="absolute -bottom-10 -right-2 sm:-right-6 w-[55%] md:w-[50%] z-10"
              >
                <div className="p-2 bg-kin-base rounded-sm shadow-2xl">
                  <ImageReveal
                    src={IMAGES.coffee}
                    alt="KIN Cappuccino Coffee Latte Art"
                    aspectRatio="aspect-square"
                    className="rounded-sm"
                  />
                </div>
              </FadeIn>

              {/* Decorative Accent Tag */}
              <div className="absolute top-6 left-6 z-20 bg-kin-dark text-white px-3 py-1.5 text-[10px] uppercase tracking-widest font-medium">
                EST. ROURKELA
              </div>
            </div>
          </div>

          {/* Text & Narrative Content */}
          <div className="lg:col-span-5 flex flex-col justify-center order-1 lg:order-2">
            <SectionHeading
              eyebrow="THE KIN EXPERIENCE"
              title="MORE THAN A COFFEE BREAK."
              subtitle="Whether you are grabbing a morning latte, catching up over pancakes with friends, or unwinding after a long day, KIN is built around social moments and visual warmth."
            />

            <FadeIn delay={0.3} className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 bg-kin-base/60 border border-kin-border/60 rounded-sm">
                  <div className="w-8 h-8 rounded-full bg-kin-accent/15 text-kin-accent flex items-center justify-center font-serif-editorial text-lg font-bold shrink-0">
                    01
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-kin-text uppercase tracking-wider mb-1">
                      Artisanal Coffee & Roasts
                    </h4>
                    <p className="text-xs text-kin-muted leading-relaxed">
                      Silky espresso brews, aromatic flat whites, and chilled cold brews prepared fresh by our skilled baristas.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-kin-base/60 border border-kin-border/60 rounded-sm">
                  <div className="w-8 h-8 rounded-full bg-kin-accent/15 text-kin-accent flex items-center justify-center font-serif-editorial text-lg font-bold shrink-0">
                    02
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-kin-text uppercase tracking-wider mb-1">
                      Freshly Baked Indulgences
                    </h4>
                    <p className="text-xs text-kin-muted leading-relaxed">
                      Decadent cheesecakes, fluffy cocoa-drizzled pancakes, and daily baked bakery slices.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-kin-base/60 border border-kin-border/60 rounded-sm">
                  <div className="w-8 h-8 rounded-full bg-kin-accent/15 text-kin-accent flex items-center justify-center font-serif-editorial text-lg font-bold shrink-0">
                    03
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-kin-text uppercase tracking-wider mb-1">
                      Comfort Savory Dining
                    </h4>
                    <p className="text-xs text-kin-muted leading-relaxed">
                      Stone-fired pizzas, hearty pasta bowls, savory breakfast platters, and crispy wraps.
                    </p>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>

        </div>
      </div>
    </section>
  );
};
