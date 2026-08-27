import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu as MenuIcon, X, ArrowUpRight } from 'lucide-react';
import { useScrollProgress } from '@/hooks/useScrollProgress';
import { siteConfig } from '@/data/site';
import { cn } from '@/lib/utils';

interface NavbarProps {
  onOpenMenuOverlay: () => void;
}

const NAV_LINKS = [
  { name: 'Home', href: '#home' },
  { name: 'Menu', href: '#menu-preview', action: 'menuOverlay' },
  { name: 'Story', href: '#story' },
  { name: 'Experience', href: '#experience' },
  { name: 'Gallery', href: '#gallery' },
  { name: 'Visit', href: '#visit' },
];

export const Navbar: React.FC<NavbarProps> = ({ onOpenMenuOverlay }) => {
  const { isScrolled } = useScrollProgress();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'story', 'experience', 'signature', 'gallery', 'visit'];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string, action?: string) => {
    if (action === 'menuOverlay') {
      e.preventDefault();
      onOpenMenuOverlay();
      if (mobileMenuOpen) setMobileMenuOpen(false);
      return;
    }

    if (href.startsWith('#')) {
      e.preventDefault();
      const targetEl = document.querySelector(href);
      if (targetEl) {
        targetEl.scrollIntoView({ behavior: 'smooth' });
        if (mobileMenuOpen) setMobileMenuOpen(false);
      }
    }
  };

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-40 transition-all duration-500",
          isScrolled
            ? "py-3.5 bg-kin-base/85 backdrop-blur-md border-b border-kin-border/80 shadow-sm"
            : "py-6 bg-gradient-to-b from-black/40 via-black/20 to-transparent text-white"
        )}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Brand Logo */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="flex items-center gap-3 group focus:outline-none"
          >
            <img
              src={siteConfig.logo}
              alt="KIN Café Logo"
              className="w-9 h-9 md:w-10 md:h-10 rounded-full object-cover border border-kin-accent/40 shadow-sm transition-transform group-hover:scale-105"
            />
            <span className={cn(
              "font-serif-editorial text-2xl md:text-3xl tracking-widest font-medium transition-colors duration-300",
              isScrolled ? "text-kin-text group-hover:text-kin-accent" : "text-white group-hover:text-kin-accent-light"
            )}>
              KIN
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8 lg:gap-10">
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href, link.action)}
                className={cn(
                  "text-xs uppercase tracking-widest transition-all duration-300 relative py-1 focus:outline-none",
                  isScrolled
                    ? activeSection === link.href.replace('#', '')
                      ? "text-kin-accent font-semibold"
                      : "text-kin-text/80 hover:text-kin-text"
                    : activeSection === link.href.replace('#', '')
                      ? "text-white font-semibold"
                      : "text-white/80 hover:text-white"
                )}
              >
                {link.name}
                <span className={cn(
                  "absolute bottom-0 left-0 w-full h-[1px] transform scale-x-0 transition-transform duration-300 origin-left group-hover:scale-x-100",
                  isScrolled ? "bg-kin-accent" : "bg-white"
                )} />
              </a>
            ))}
          </nav>

          {/* Desktop Right Action */}
          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={onOpenMenuOverlay}
              className={cn(
                "px-4 py-2 text-[11px] font-medium tracking-widest uppercase transition-all duration-300 border",
                isScrolled
                  ? "border-kin-text/30 text-kin-text hover:bg-kin-text hover:text-kin-base"
                  : "border-white/40 text-white hover:bg-white hover:text-kin-dark"
              )}
            >
              Menu
            </button>
            <a
              href={siteConfig.socials.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "inline-flex items-center gap-1 text-xs uppercase tracking-widest transition-colors duration-300",
                isScrolled ? "text-kin-accent hover:text-kin-accent-dark" : "text-white/90 hover:text-white"
              )}
            >
              <span>Instagram</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Hamburger Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={cn(
              "md:hidden p-2 rounded-sm transition-colors focus:outline-none",
              isScrolled ? "text-kin-text" : "text-white"
            )}
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Full Screen Menu Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 bg-kin-dark text-kin-base flex flex-col justify-between p-8 md:hidden overflow-y-auto"
          >
            {/* Header */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <img
                  src={siteConfig.logo}
                  alt="KIN Logo"
                  className="w-10 h-10 rounded-full object-cover border border-kin-accent/40"
                />
                <span className="font-serif-editorial text-3xl tracking-widest font-normal text-white">
                  KIN
                </span>
              </div>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 text-white/80 hover:text-white"
                aria-label="Close Mobile Menu"
              >
                <X className="w-7 h-7" />
              </button>
            </div>

            {/* Menu Links */}
            <div className="flex flex-col gap-6 my-auto py-12">
              {NAV_LINKS.map((link, idx) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href, link.action)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.08 + 0.1, duration: 0.4 }}
                  className="font-serif-editorial text-4xl sm:text-5xl tracking-wide text-white/90 hover:text-kin-accent transition-colors duration-300"
                >
                  {link.name}
                </motion.a>
              ))}

              <motion.button
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5, duration: 0.4 }}
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenMenuOverlay();
                }}
                className="text-left font-serif-editorial text-4xl text-kin-accent hover:text-white transition-colors duration-300 mt-4 flex items-center justify-between"
              >
                <span>EXPLORE MENU</span>
                <ArrowUpRight className="w-8 h-8" />
              </motion.button>
            </div>

            {/* Mobile Footer Meta */}
            <div className="pt-8 border-t border-white/10 flex flex-col gap-4 text-xs text-kin-muted">
              <p>{siteConfig.address.full}</p>
              <div className="flex items-center justify-between">
                <a
                  href={siteConfig.socials.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-white hover:text-kin-accent uppercase tracking-widest text-[11px]"
                >
                  Instagram <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
                <span>{siteConfig.hours.tueSun}</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
