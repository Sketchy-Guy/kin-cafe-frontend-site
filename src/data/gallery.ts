import kinFront from '@/assets/images/kin front image.jpg';
import kinInside from '@/assets/images/kin inside image.jpg';
import kin12 from '@/assets/images/kin12.jpg';
import kin11 from '@/assets/images/kin11.jpg';
import kin10 from '@/assets/images/kin 10.jpg';
import kin9 from '@/assets/images/kin9.jpg';
import kin8 from '@/assets/images/kin8.jpg';
import kin7 from '@/assets/images/kin 7.jpg';
import kin6 from '@/assets/images/kin6.jpg';
import kin5 from '@/assets/images/kin 5.jpg';
import kin4 from '@/assets/images/kin4.jpg';
import kin3 from '@/assets/images/kin3.jpg';

export interface GalleryPhoto {
  id: string;
  src: string;
  title: string;
  category: 'Food' | 'Coffee' | 'Atmosphere' | 'Interior' | 'Exterior';
  aspectRatio: 'portrait' | 'landscape' | 'square';
  caption: string;
  instagramTag: string;
}

export const GALLERY_PHOTOS: GalleryPhoto[] = [
  {
    id: 'g1',
    src: kin12,
    title: 'Indulgent Chocolate Pancakes',
    category: 'Food',
    aspectRatio: 'portrait',
    caption: 'Fluffy stacked pancakes drenched in warm chocolate drizzle',
    instagramTag: '@kin_rkl'
  },
  {
    id: 'g2',
    src: kin8,
    title: 'Velvet Latte Art',
    category: 'Coffee',
    aspectRatio: 'square',
    caption: 'Freshly pulled espresso with silky micro-foam art',
    instagramTag: '@kin_rkl'
  },
  {
    id: 'g3',
    src: kinInside,
    title: 'Warm Pendant Lighting & Seats',
    category: 'Interior',
    aspectRatio: 'landscape',
    caption: 'Cream upholstered seating under soft golden lighting',
    instagramTag: '@kin_rkl'
  },
  {
    id: 'g4',
    src: kin11,
    title: 'Bakery & Dessert Display',
    category: 'Food',
    aspectRatio: 'portrait',
    caption: 'Artisanal cheesecakes and freshly baked treats',
    instagramTag: '@kin_rkl'
  },
  {
    id: 'g5',
    src: kin6,
    title: 'Stone-Fired Pizza',
    category: 'Food',
    aspectRatio: 'landscape',
    caption: 'Thin-crust savory pizza with rich herbs and cheese',
    instagramTag: '@kin_rkl'
  },
  {
    id: 'g6',
    src: kin10,
    title: 'The Café Ambiance',
    category: 'Atmosphere',
    aspectRatio: 'square',
    caption: 'Cozy seating corners made for conversation',
    instagramTag: '@kin_rkl'
  },
  {
    id: 'g7',
    src: kin7,
    title: 'Plated Brunch Delights',
    category: 'Food',
    aspectRatio: 'portrait',
    caption: 'Continental plated bites prepared fresh',
    instagramTag: '@kin_rkl'
  },
  {
    id: 'g8',
    src: kin9,
    title: 'Contemporary Artwork Corner',
    category: 'Interior',
    aspectRatio: 'portrait',
    caption: 'Artistic wall decor accenting warm wooden furniture',
    instagramTag: '@kin_rkl'
  },
  {
    id: 'g9',
    src: kin5,
    title: 'Savory Wraps & Wedges',
    category: 'Food',
    aspectRatio: 'landscape',
    caption: 'Crispy wraps paired with golden seasoned fries',
    instagramTag: '@kin_rkl'
  },
  {
    id: 'g10',
    src: kin4,
    title: 'Pasta & Sweet Cravings',
    category: 'Food',
    aspectRatio: 'square',
    caption: 'Rich pasta dishes paired with sweet cafe desserts',
    instagramTag: '@kin_rkl'
  },
  {
    id: 'g11',
    src: kin3,
    title: 'Glass Pastry Counter',
    category: 'Interior',
    aspectRatio: 'landscape',
    caption: 'Daily baked creations showcased in the glass counter',
    instagramTag: '@kin_rkl'
  },
  {
    id: 'g12',
    src: kinFront,
    title: 'KIN Storefront Facade',
    category: 'Exterior',
    aspectRatio: 'landscape',
    caption: 'The welcoming entrance at Basanti Nagar, Rourkela',
    instagramTag: '@kin_rkl'
  }
];

export const IMAGES = {
  hero: kinFront,
  intro: kinInside,
  coffee: kin8,
  pancakes: kin12,
  pastry: kin11,
  pizza: kin6,
  pasta: kin4,
  space1: kin10,
  space2: kin9,
  space3: kin3,
  breakfast: kin7,
  wraps: kin5
};
