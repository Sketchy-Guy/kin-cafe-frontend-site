import React from 'react';
import { Instagram, ArrowUpRight } from 'lucide-react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { FadeIn } from '@/components/ui/FadeIn';
import { GALLERY_PHOTOS } from '@/data/gallery';
import { siteConfig } from '@/data/site';

export const Gallery: React.FC = () => {
  return (
    <section id="gallery" className="py-24 md:py-36 bg-kin-base relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <SectionHeading
            eyebrow="PHOTO JOURNAL"
            title="SEEN AT KIN."
            subtitle="Moments, plates, coffee and everything in between."
            className="mb-0"
          />

          <FadeIn delay={0.2} className="mt-6 md:mt-0">
            <a
              href={siteConfig.socials.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-kin-accent hover:text-kin-text transition-colors border-b border-kin-accent pb-1"
            >
              <Instagram className="w-4 h-4" />
              <span>FOLLOW @KIN_RKL ON INSTAGRAM</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </FadeIn>
        </div>

        {/* Asymmetric Masonry Photo Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {GALLERY_PHOTOS.map((photo, idx) => {
            const aspectClasses = {
              portrait: 'aspect-[3/4]',
              landscape: 'aspect-[4/3]',
              square: 'aspect-square',
            }[photo.aspectRatio];

            return (
              <FadeIn key={photo.id} delay={idx * 0.05} viewportOnce={true}>
                <a
                  href={siteConfig.socials.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative block overflow-hidden rounded-sm bg-kin-surface cursor-pointer"
                  data-cursor="VIEW"
                >
                  <div className={`w-full ${aspectClasses} overflow-hidden`}>
                    <img
                      src={photo.src}
                      alt={photo.title}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.08]"
                    />
                  </div>

                  {/* Dark Gradient Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-5 text-white">
                    <div className="flex justify-end">
                      <span className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white">
                        <Instagram className="w-4 h-4" />
                      </span>
                    </div>

                    <div>
                      <span className="text-[10px] uppercase tracking-widest text-kin-accent-light block font-semibold mb-1">
                        {photo.category}
                      </span>
                      <h4 className="font-serif-editorial text-xl font-light leading-snug mb-1">
                        {photo.title}
                      </h4>
                      <p className="text-xs text-white/80 line-clamp-1">
                        {photo.caption}
                      </p>
                    </div>
                  </div>
                </a>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
};
