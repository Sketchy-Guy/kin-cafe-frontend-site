import React, { useState } from 'react';
import { Preloader } from '@/components/ui/Preloader';
import { ScrollProgress } from '@/components/ui/ScrollProgress';
import { CursorFollower } from '@/components/ui/CursorFollower';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Hero } from '@/components/home/Hero';
import { Intro } from '@/components/home/Intro';
import { Experience } from '@/components/home/Experience';
import { SignatureFood } from '@/components/home/SignatureFood';
import { FoodEditorial } from '@/components/home/FoodEditorial';
import { TheSpace } from '@/components/home/TheSpace';
import { Gallery } from '@/components/home/Gallery';
import { SocialProof } from '@/components/home/SocialProof';
import { VisitKin } from '@/components/home/VisitKin';
import { FinalCTA } from '@/components/home/FinalCTA';
import { MenuOverlay } from '@/components/menu/MenuOverlay';

export const App: React.FC = () => {
  const [menuOverlayOpen, setMenuOverlayOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-kin-base text-kin-text selection:bg-kin-accent selection:text-white">
      {/* Short initial loading screen */}
      <Preloader />

      {/* Top Scroll Progress Bar */}
      <ScrollProgress />

      {/* Desktop Custom Follower Cursor */}
      <CursorFollower />

      {/* Header Navigation */}
      <Navbar onOpenMenuOverlay={() => setMenuOverlayOpen(true)} />

      {/* Main Homepage Flow */}
      <main className="relative z-10">
        <Hero onOpenMenu={() => setMenuOverlayOpen(true)} />
        <Intro />
        <Experience />
        <SignatureFood onOpenMenu={() => setMenuOverlayOpen(true)} />
        <FoodEditorial />
        <TheSpace />
        <Gallery />
        <SocialProof />
        <VisitKin />
        <FinalCTA onOpenMenu={() => setMenuOverlayOpen(true)} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Menu Overlay Drawer Modal */}
      <MenuOverlay
        isOpen={menuOverlayOpen}
        onClose={() => setMenuOverlayOpen(false)}
      />
    </div>
  );
};
export default App;
