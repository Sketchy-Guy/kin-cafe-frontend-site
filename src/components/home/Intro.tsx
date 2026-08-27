import React from 'react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { FadeIn } from '@/components/ui/FadeIn';
import { ImageReveal } from '@/components/ui/ImageReveal';
import { IMAGES } from '@/data/gallery';

export const Intro: React.FC = () => {
  return (
    <section id="story" className="py-24 md:py-36 bg-kin-base relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Asymmetrical Typography */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <SectionHeading
              eyebrow="OUR ESSENCE"
              title="A LITTLE PLACE TO PAUSE."
              className="mb-8"
            />

            <FadeIn delay={0.2} className="space-y-6">
              <p className="text-kin-text/90 text-lg md:text-xl font-light leading-relaxed font-serif-editorial italic">
                “Come for the food. Stay for the moment.”
              </p>
              
              <p className="text-kin-muted text-base md:text-lg leading-relaxed font-normal max-w-xl">
                KIN is a café and bakery space in Basanti Nagar, Rourkela, designed for coffee, food, conversations and everyday moments. We invite you to slow down, savor hand-crafted flavors, and enjoy warm surroundings crafted for community.
              </p>

              <div className="pt-6 grid grid-cols-2 gap-8 border-t border-kin-border/80">
                <div>
                  <span className="font-serif-editorial text-3xl md:text-4xl font-light text-kin-text block">
                    Basanti Nagar
                  </span>
                  <span className="text-xs uppercase tracking-widest text-kin-accent mt-1 block">
                    Heart of Rourkela
                  </span>
                </div>
                <div>
                  <span className="font-serif-editorial text-3xl md:text-4xl font-light text-kin-text block">
                    All-Day
                  </span>
                  <span className="text-xs uppercase tracking-widest text-kin-accent mt-1 block">
                    Coffee & Bakery
                  </span>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Right Column: Editorial Image Frame */}
          <div className="lg:col-span-5 relative">
            <FadeIn delay={0.3} direction="left">
              <div className="relative">
                {/* Decorative border frame offset */}
                <div className="absolute -inset-3 border border-kin-accent/30 translate-x-3 translate-y-3 pointer-events-none hidden sm:block" />
                
                <ImageReveal
                  src={IMAGES.intro}
                  alt="KIN Warm Interior Seating Basanti Nagar"
                  aspectRatio="aspect-[4/5]"
                  className="rounded-sm shadow-xl"
                />

                <div className="absolute bottom-4 left-4 right-4 bg-kin-base/90 backdrop-blur-md p-4 border border-kin-border/60">
                  <p className="text-xs uppercase tracking-editorial font-semibold text-kin-accent mb-1">
                    ATMOSPHERE
                  </p>
                  <p className="text-xs text-kin-text/80">
                    Warm pendant lights, cozy wooden seating & minimalist aesthetic.
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
};
