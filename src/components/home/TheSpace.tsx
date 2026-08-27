import React from 'react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { FadeIn } from '@/components/ui/FadeIn';
import { ImageReveal } from '@/components/ui/ImageReveal';
import { IMAGES } from '@/data/gallery';

export const TheSpace: React.FC = () => {
  return (
    <section id="space" className="py-24 md:py-36 bg-kin-dark text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-16">
          <div className="lg:col-span-6">
            <SectionHeading
              eyebrow="PHYSICAL ATMOSPHERE"
              title="THE SPACE MATTERS TOO."
              titleClassName="text-white"
              eyebrowClassName="text-kin-accent-light"
              subtitle="Designed with warm natural textures, cream upholstery, warm pendant lamps, and contemporary wall artwork—creating an inviting backdrop for every coffee and conversation."
            />
          </div>

          <div className="lg:col-span-6 flex flex-col justify-end text-white/70 text-sm leading-relaxed font-light">
            <p className="border-l-2 border-kin-accent pl-4 py-2">
              Every detail in KIN—from our glass pastry counters to intimate seating nooks—was curated to feel personal, relaxed, and visually memorable.
            </p>
          </div>
        </div>

        {/* Interior Photography Grid Progression */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          <FadeIn delay={0.1}>
            <div className="group relative overflow-hidden rounded-sm bg-kin-dark-surface">
              <ImageReveal
                src={IMAGES.space1}
                alt="KIN Seating and Atmosphere"
                aspectRatio="aspect-[4/5]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="text-[10px] uppercase tracking-widest text-kin-accent-light block mb-1">
                  SEATING & LIGHTING
                </span>
                <p className="text-xs text-white/90">Warm pendant illumination over cozy wooden tables.</p>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.25}>
            <div className="group relative overflow-hidden rounded-sm bg-kin-dark-surface">
              <ImageReveal
                src={IMAGES.space2}
                alt="KIN Wall Artwork Corner"
                aspectRatio="aspect-[4/5]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="text-[10px] uppercase tracking-widest text-kin-accent-light block mb-1">
                  WALL ARTWORK
                </span>
                <p className="text-xs text-white/90">Contemporary art pieces bringing character to the space.</p>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.4} className="sm:col-span-2 lg:col-span-1">
            <div className="group relative overflow-hidden rounded-sm bg-kin-dark-surface">
              <ImageReveal
                src={IMAGES.space3}
                alt="KIN Pastry Counter Display"
                aspectRatio="aspect-[4/5]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="text-[10px] uppercase tracking-widest text-kin-accent-light block mb-1">
                  PASTRY COUNTER
                </span>
                <p className="text-xs text-white/90">Glass counter showcasing freshly prepared desserts.</p>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};
