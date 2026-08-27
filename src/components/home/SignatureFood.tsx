import React from 'react';
import { ArrowRight } from 'lucide-react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { FadeIn } from '@/components/ui/FadeIn';
import { ImageReveal } from '@/components/ui/ImageReveal';
import { Button } from '@/components/ui/Button';
import { IMAGES } from '@/data/gallery';

interface FoodFeatureItem {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
}

const FOOD_FEATURES: FoodFeatureItem[] = [
  {
    id: 'f1',
    title: 'SIGNATURE PANCAKES',
    category: 'Sweet / Brunch',
    description: 'Fluffy stacked pancakes drenched in warm chocolate drizzle for slow mornings.',
    image: IMAGES.pancakes,
  },
  {
    id: 'f2',
    title: 'VELVET ESPRESSO',
    category: 'Coffee / Roasts',
    description: 'Rich dark espresso topped with silky micro-foam art and golden crema.',
    image: IMAGES.coffee,
  },
  {
    id: 'f3',
    title: 'BAKERY & CHEESECAKE',
    category: 'Dessert / Bakery',
    description: 'Artisanal cheesecakes with caramelized crusts and freshly baked delights.',
    image: IMAGES.pastry,
  },
  {
    id: 'f4',
    title: 'STONE-FIRED PIZZA',
    category: 'Savory / Artisanal',
    description: 'Crispy thin-crust pizzas loaded with fresh herbs, mozzarella, and garlic.',
    image: IMAGES.pizza,
  },
  {
    id: 'f5',
    title: 'CREAMY PASTA BOWLS',
    category: 'Comfort / Pasta',
    description: 'Fettuccine & Penne tossed in garlic Alfredo and spicy tomato sauces.',
    image: IMAGES.pasta,
  },
  {
    id: 'f6',
    title: 'PLATED BRUNCH BITES',
    category: 'Brunch / Bites',
    description: 'Continental breakfast platters, crispy wraps, and seasoned potato wedges.',
    image: IMAGES.breakfast,
  },
];

interface SignatureFoodProps {
  onOpenMenu: () => void;
}

export const SignatureFood: React.FC<SignatureFoodProps> = ({ onOpenMenu }) => {
  return (
    <section id="signature" className="py-24 md:py-36 bg-kin-base relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <SectionHeading
            eyebrow="FOOD & DRINK SHOWCASE"
            title="THINGS WORTH COMING BACK FOR."
            subtitle="An editorial glance at our guest favorites prepared fresh in our kitchen."
            className="mb-0"
          />

          <FadeIn delay={0.2} className="mt-6 md:mt-0 shrink-0">
            <Button
              variant="outline"
              icon="arrow"
              onClick={onOpenMenu}
              className="border-kin-text text-kin-text hover:bg-kin-text hover:text-white"
            >
              EXPLORE FULL MENU
            </Button>
          </FadeIn>
        </div>

        {/* Editorial Feature Blocks Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {FOOD_FEATURES.map((item, idx) => (
            <FadeIn key={item.id} delay={idx * 0.08} viewportOnce={true}>
              <div 
                className="group relative cursor-pointer flex flex-col bg-kin-card border border-kin-border/70 p-4 transition-all duration-500 hover:shadow-xl hover:-translate-y-1.5"
                onClick={onOpenMenu}
                data-cursor="EXPLORE"
              >
                {/* Image Container with Zoom */}
                <div className="overflow-hidden relative aspect-[4/3] mb-5 bg-kin-surface">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.08]"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3 bg-kin-dark/80 backdrop-blur-sm text-white px-2.5 py-1 text-[10px] uppercase tracking-widest font-medium">
                    {item.category}
                  </div>
                </div>

                {/* Text Content */}
                <div className="flex flex-col flex-grow justify-between pt-1">
                  <div>
                    <h3 className="font-serif-editorial text-2xl md:text-3xl font-light text-kin-text tracking-wide group-hover:text-kin-accent transition-colors duration-300 mb-2 flex items-center justify-between">
                      <span>{item.title}</span>
                      <ArrowRight className="w-5 h-5 text-kin-accent opacity-0 -translate-x-3 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                    </h3>

                    <p className="text-kin-muted text-xs sm:text-sm leading-relaxed font-normal">
                      {item.description}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-kin-border/50 flex items-center justify-between text-[11px] uppercase tracking-widest text-kin-accent font-semibold">
                    <span>SEE IN MENU</span>
                    <span className="text-kin-muted group-hover:text-kin-accent transition-colors">→</span>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};
