import React from 'react';
import { MapPin, Clock, ArrowUpRight, Navigation, Phone, Mail } from 'lucide-react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { FadeIn } from '@/components/ui/FadeIn';
import { Button } from '@/components/ui/Button';
import { siteConfig } from '@/data/site';
import { locationData } from '@/data/locations';

export const VisitKin: React.FC = () => {
  return (
    <section id="visit" className="py-24 md:py-36 bg-kin-base relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <SectionHeading
          eyebrow="FIND US IN BASANTI NAGAR"
          title="COME FIND US."
          subtitle="Stop by for your daily morning coffee, afternoon sweet craving, or late-evening catch-up."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          {/* Location & Hours Card */}
          <div className="lg:col-span-6 bg-kin-card border border-kin-border p-8 md:p-12 flex flex-col justify-between rounded-sm shadow-md">
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-kin-border/70 mb-8">
                <div className="flex items-center gap-3">
                  <img
                    src={siteConfig.logo}
                    alt="KIN Logo"
                    className="w-9 h-9 rounded-full object-cover border border-kin-accent/40"
                  />
                  <span className="font-serif-editorial text-3xl md:text-4xl tracking-widest text-kin-text font-medium">
                    KIN
                  </span>
                </div>
                <span className="text-[11px] uppercase tracking-editorial font-semibold px-3 py-1 bg-kin-accent/15 text-kin-accent rounded-full">
                  BASANTI NAGAR
                </span>
              </div>

              {/* Address */}
              <div className="mb-8">
                <div className="flex items-start gap-3 mb-2">
                  <MapPin className="w-5 h-5 text-kin-accent shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs uppercase tracking-widest font-semibold text-kin-accent mb-1">
                      ADDRESS
                    </h4>
                    <p className="text-base sm:text-lg text-kin-text font-serif-editorial font-normal leading-relaxed">
                      {siteConfig.address.full}
                    </p>
                    <p className="text-xs text-kin-muted mt-1">
                      {locationData.landmark}
                    </p>
                  </div>
                </div>
              </div>

              {/* Hours */}
              <div className="mb-8">
                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-kin-accent shrink-0 mt-0.5" />
                  <div className="w-full">
                    <h4 className="text-xs uppercase tracking-widest font-semibold text-kin-accent mb-3">
                      OPERATING HOURS
                    </h4>
                    
                    <div className="space-y-2 text-sm text-kin-text border-l-2 border-kin-border/80 pl-4 py-1">
                      <div className="flex justify-between items-center py-1 border-b border-kin-border/40">
                        <span className="font-medium">MONDAY</span>
                        <span className="font-mono text-xs text-kin-muted">{siteConfig.hours.monday}</span>
                      </div>
                      <div className="flex justify-between items-center py-1">
                        <span className="font-medium">TUESDAY — SUNDAY</span>
                        <span className="font-mono text-xs text-kin-muted">{siteConfig.hours.tueSun}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="pt-6 border-t border-kin-border/70 flex flex-col sm:flex-row items-center gap-4">
              <Button
                variant="primary"
                icon="external"
                asAnchor
                href={siteConfig.socials.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto bg-kin-accent text-white hover:bg-kin-dark"
              >
                GET DIRECTIONS
              </Button>

              <Button
                variant="outline"
                icon="external"
                asAnchor
                href={siteConfig.socials.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto border-kin-border text-kin-text hover:bg-kin-surface"
              >
                OPEN INSTAGRAM
              </Button>
            </div>
          </div>

          {/* Editorial Styled Map Card */}
          <div className="lg:col-span-6 min-h-[380px] bg-kin-surface border border-kin-border rounded-sm relative overflow-hidden flex flex-col justify-between p-8 md:p-12 shadow-sm">
            {/* Map Decorative Pattern / Visualizer */}
            <div className="absolute inset-0 bg-noise opacity-20 pointer-events-none" />
            
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 text-xs uppercase tracking-editorial text-kin-accent font-semibold mb-4">
                <Navigation className="w-4 h-4" />
                <span>ROURKELA CENTRAL MAP</span>
              </div>

              <h3 className="font-serif-editorial text-3xl sm:text-4xl text-kin-text font-light leading-tight mb-4">
                Located in the heart of Basanti Nagar.
              </h3>

              <p className="text-sm text-kin-muted leading-relaxed max-w-md">
                Easily accessible from main avenues in Rourkela with convenient street parking and indoor seating.
              </p>
            </div>

            {/* Styled Map Graphic Representation */}
            <div className="relative z-10 my-8 p-6 bg-kin-base/90 border border-kin-border rounded-sm flex items-center justify-between">
              <div className="flex items-center gap-4">
                <img
                  src={siteConfig.logo}
                  alt="KIN Pin Logo"
                  className="w-12 h-12 rounded-full object-cover border-2 border-kin-accent shadow-md shrink-0"
                />
                <div>
                  <h4 className="text-sm font-semibold text-kin-text">KIN Coffee Shop & Bakery</h4>
                  <p className="text-xs text-kin-muted">M-39, Basanti Nagar, Rourkela</p>
                </div>
              </div>
              <span className="w-3 h-3 rounded-full bg-emerald-500 animate-ping"></span>
            </div>

            <div className="relative z-10 flex items-center justify-between text-xs text-kin-muted pt-4 border-t border-kin-border">
              <span>Category: Coffee Shop & Bakery</span>
              <a
                href={siteConfig.socials.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-kin-accent font-semibold hover:underline flex items-center gap-1 uppercase tracking-wider text-[11px]"
              >
                View on Google Maps <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
