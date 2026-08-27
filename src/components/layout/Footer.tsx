import React from 'react';
import { ArrowUpRight, MapPin, Instagram, Clock } from 'lucide-react';
import { siteConfig } from '@/data/site';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-kin-dark text-kin-base pt-20 pb-12 border-t border-kin-dark-surface relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16 pb-16 border-b border-white/10">
          {/* Brand & Statement */}
          <div className="md:col-span-5 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <img
                  src={siteConfig.logo}
                  alt="KIN Café Logo"
                  className="w-12 h-12 rounded-full object-cover border border-kin-accent/40 shadow-md"
                />
                <h2 className="font-serif-editorial text-4xl sm:text-5xl lg:text-6xl tracking-widest text-white">
                  KIN
                </h2>
              </div>
              <p className="text-kin-muted text-sm sm:text-base leading-relaxed max-w-sm font-light">
                {siteConfig.subTagline}
              </p>
            </div>
            <div className="mt-8 pt-6">
              <span className="text-xs uppercase tracking-editorial text-kin-accent block mb-2">
                Basanti Nagar · Rourkela
              </span>
              <p className="text-xs text-white/60">
                Category: {siteConfig.category} · Rating: {siteConfig.rating.score} ★ ({siteConfig.rating.reviewsCount} Google Reviews)
              </p>
            </div>
          </div>

          {/* Location & Contact */}
          <div className="md:col-span-4 flex flex-col gap-6">
            <h3 className="text-xs uppercase tracking-editorial text-kin-accent font-semibold">
              Location & Hours
            </h3>
            
            <div className="flex gap-3 items-start text-sm text-white/80 leading-relaxed">
              <MapPin className="w-4 h-4 text-kin-accent shrink-0 mt-1" />
              <div>
                <p className="font-medium text-white">{siteConfig.address.street}, {siteConfig.address.neighborhood}</p>
                <p>{siteConfig.address.city}, {siteConfig.address.state} {siteConfig.address.pincode}</p>
              </div>
            </div>

            <div className="flex gap-3 items-start text-sm text-white/80 leading-relaxed mt-2">
              <Clock className="w-4 h-4 text-kin-accent shrink-0 mt-1" />
              <div>
                <p className="text-xs text-white/60 uppercase tracking-wider mb-1">Operating Hours</p>
                <p className="text-xs">Mon: {siteConfig.hours.monday}</p>
                <p className="text-xs">Tue – Sun: {siteConfig.hours.tueSun}</p>
              </div>
            </div>
          </div>

          {/* Quick Links & Socials */}
          <div className="md:col-span-3 flex flex-col gap-6">
            <h3 className="text-xs uppercase tracking-editorial text-kin-accent font-semibold">
              Connect & Directions
            </h3>
            
            <div className="flex flex-col gap-3 text-sm">
              <a
                href={siteConfig.socials.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-between text-white/90 hover:text-kin-accent py-1 transition-colors border-b border-white/5"
              >
                <span className="flex items-center gap-2">
                  <Instagram className="w-4 h-4" /> Instagram
                </span>
                <ArrowUpRight className="w-4 h-4" />
              </a>

              <a
                href={siteConfig.socials.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-between text-white/90 hover:text-kin-accent py-1 transition-colors border-b border-white/5"
              >
                <span>Google Maps Directions</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright & Agency Demo Credit */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/40">
          <p>© 2026 KIN Café & Bakery. All rights reserved.</p>
          <p className="text-[11px] tracking-wider uppercase text-white/30 hover:text-white/60 transition-colors">
            Digital experience concept by <span className="text-kin-accent">LogiSaar</span>
          </p>
        </div>
      </div>
    </footer>
  );
};
