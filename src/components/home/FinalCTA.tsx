import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { FadeIn } from '@/components/ui/FadeIn';
import { IMAGES } from '@/data/gallery';
import { siteConfig } from '@/data/site';

interface FinalCTAProps {
  onOpenMenu: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onOpenMenu }) => {
  return (
    <section className="relative py-32 md:py-48 bg-kin-dark text-white overflow-hidden select-none">
      {/* Background Image */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src={IMAGES.hero}
          alt="KIN Cafe Rourkela Facade"
          className="w-full h-full object-cover filter brightness-[0.45] contrast-[1.1]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-kin-dark via-black/50 to-kin-dark/80" />
        <div className="absolute inset-0 bg-noise opacity-30 pointer-events-none" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center flex flex-col items-center">
        <FadeIn>
          <span className="text-xs font-semibold uppercase tracking-editorial text-kin-accent-light block mb-4">
            BASANTI NAGAR · ROURKELA
          </span>

          <h2 className="font-serif-editorial text-5xl sm:text-7xl md:text-8xl font-light tracking-wide text-white mb-6">
            SEE YOU AT KIN.
          </h2>

          <p className="text-white/80 text-lg sm:text-xl font-serif-editorial italic font-light max-w-md mx-auto mb-10">
            Good food. Good company. One more coffee?
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
            <Button
              variant="primary"
              size="lg"
              onClick={onOpenMenu}
              className="w-full sm:w-auto bg-kin-accent hover:bg-white hover:text-kin-dark text-white border-none"
            >
              EXPLORE THE MENU
            </Button>

            <Button
              variant="outline"
              size="lg"
              asAnchor
              href={siteConfig.socials.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              icon="external"
              className="w-full sm:w-auto text-white border-white/40 hover:bg-white hover:text-kin-dark"
            >
              @KIN_RKL INSTAGRAM
            </Button>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};
