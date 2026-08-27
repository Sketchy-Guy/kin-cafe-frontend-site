import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Search, Utensils, Coffee, ChevronRight } from 'lucide-react';
import { MENU_CATEGORIES, MENU_ITEMS, MenuCategoryId } from '@/data/menu';
import { MenuCategory } from './MenuCategory';
import { siteConfig } from '@/data/site';
import { cn } from '@/lib/utils';

interface MenuOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MenuOverlay: React.FC<MenuOverlayProps> = ({ isOpen, onClose }) => {
  const [selectedCategory, setSelectedCategory] = useState<MenuCategoryId | 'all'>('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Handle ESC key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  // Filter items
  const filteredItems = MENU_ITEMS.filter((item) => {
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    const matchesSearch = searchQuery === '' || 
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
      item.description.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex justify-end"
        >
          {/* Backdrop click to close */}
          <div className="absolute inset-0" onClick={onClose} />

          {/* Drawer Content */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: '0%' }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-10 w-full max-w-4xl h-full bg-kin-base text-kin-text flex flex-col shadow-2xl overflow-hidden"
          >
            {/* Drawer Header */}
            <div className="p-6 md:p-8 bg-kin-surface/80 border-b border-kin-border flex items-center justify-between shrink-0">
              <div className="flex items-center gap-3.5">
                <img
                  src={siteConfig.logo}
                  alt="KIN Logo"
                  className="w-11 h-11 rounded-full object-cover border border-kin-accent/40 shadow-sm"
                />
                <div>
                  <span className="text-[10px] uppercase tracking-editorial text-kin-accent font-semibold block mb-0.5">
                    KIN CAFÉ & BAKERY MENU
                  </span>
                  <h2 className="font-serif-editorial text-2xl md:text-3xl text-kin-text font-light">
                    FOOD & DRINK EXPERIENCE
                  </h2>
                </div>
              </div>

              <button
                onClick={onClose}
                className="w-10 h-10 rounded-full bg-kin-base border border-kin-border flex items-center justify-center text-kin-text hover:bg-kin-text hover:text-white transition-colors"
                aria-label="Close Menu Drawer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Filter Tabs & Search Bar */}
            <div className="p-6 border-b border-kin-border bg-kin-base shrink-0 space-y-4">
              {/* Search Bar */}
              <div className="relative max-w-md">
                <Search className="w-4 h-4 text-kin-muted absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Search coffee, pancakes, pizza, desserts..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 bg-kin-surface border border-kin-border/80 text-xs sm:text-sm text-kin-text rounded-sm focus:outline-none focus:ring-2 focus:ring-kin-accent/40"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-kin-muted hover:text-kin-text"
                  >
                    Clear
                  </button>
                )}
              </div>

              {/* Category Quick Filter Pills */}
              <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
                <button
                  onClick={() => setSelectedCategory('all')}
                  className={cn(
                    "px-4 py-2 text-xs uppercase tracking-widest font-medium whitespace-nowrap rounded-full transition-all border shrink-0",
                    selectedCategory === 'all'
                      ? "bg-kin-text text-white border-kin-text shadow-sm"
                      : "bg-kin-surface text-kin-text/80 border-kin-border hover:bg-kin-border"
                  )}
                >
                  All Items ({MENU_ITEMS.length})
                </button>

                {MENU_CATEGORIES.map((cat) => {
                  const count = MENU_ITEMS.filter(i => i.category === cat.id).length;
                  return (
                    <button
                      key={cat.id}
                      onClick={() => setSelectedCategory(cat.id)}
                      className={cn(
                        "px-4 py-2 text-xs uppercase tracking-widest font-medium whitespace-nowrap rounded-full transition-all border shrink-0",
                        selectedCategory === cat.id
                          ? "bg-kin-accent text-white border-kin-accent shadow-sm"
                          : "bg-kin-surface text-kin-text/80 border-kin-border hover:bg-kin-border"
                      )}
                    >
                      {cat.title} ({count})
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Scrollable Menu Items Content */}
            <div className="flex-1 overflow-y-auto p-6 md:p-10 space-y-8">
              {selectedCategory === 'all' && searchQuery === '' ? (
                MENU_CATEGORIES.map((cat) => {
                  const catItems = MENU_ITEMS.filter((i) => i.category === cat.id);
                  return <MenuCategory key={cat.id} category={cat} items={catItems} />;
                })
              ) : (
                <div>
                  <div className="mb-6 pb-2 border-b border-kin-border flex items-center justify-between">
                    <h3 className="font-serif-editorial text-2xl text-kin-text">
                      {searchQuery ? `Search Results for "${searchQuery}"` : MENU_CATEGORIES.find(c => c.id === selectedCategory)?.title}
                    </h3>
                    <span className="text-xs text-kin-muted">
                      Showing {filteredItems.length} item{filteredItems.length !== 1 ? 's' : ''}
                    </span>
                  </div>

                  {filteredItems.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2">
                      {filteredItems.map((item) => (
                        <MenuCategory key={item.id} category={{ id: item.category, title: '', subtitle: '', description: '' }} items={[item]} />
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-16 text-kin-muted">
                      <p className="font-serif-editorial text-2xl mb-2">No menu items found</p>
                      <p className="text-xs">Try searching for coffee, pancakes, pizza, pasta or bakery items.</p>
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Menu Footer */}
            <div className="p-6 bg-kin-surface/90 border-t border-kin-border flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-kin-muted shrink-0">
              <p>📍 {siteConfig.address.street}, {siteConfig.address.city} · Open Mon–Sun</p>
              <div className="flex items-center gap-4">
                <a
                  href={siteConfig.socials.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-kin-accent font-semibold hover:underline"
                >
                  Visit Café Directions ↗
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
