export interface MenuItem {
  id: string;
  name: string;
  category: MenuCategoryId;
  description: string;
  price?: string;
  tags?: string[];
  image?: string;
  isSignature?: boolean;
}

export type MenuCategoryId = 
  | 'coffee' 
  | 'pancakes' 
  | 'bakery' 
  | 'pizza' 
  | 'pasta' 
  | 'breakfast' 
  | 'beverages';

export interface MenuCategory {
  id: MenuCategoryId;
  title: string;
  subtitle: string;
  description: string;
}

export const MENU_CATEGORIES: MenuCategory[] = [
  {
    id: 'coffee',
    title: 'Coffee & Espresso',
    subtitle: 'Hand-crafted extractions',
    description: 'Slow-drip brews, velvety cappuccinos, and signature iced coffee concoctions roasted with care.'
  },
  {
    id: 'pancakes',
    title: 'Fluffy Pancakes',
    subtitle: 'Sweet morning indulgences',
    description: 'Golden stacked pancakes drizzled with warm cocoa, maple syrup, and fresh berries.'
  },
  {
    id: 'bakery',
    title: 'Bakery & Cheesecakes',
    subtitle: 'Baked fresh daily',
    description: 'Artisanal cheesecakes, warm pastries, butter croissants, and rich dessert slices.'
  },
  {
    id: 'pizza',
    title: 'Artisan Pizzas',
    subtitle: 'Stone-fired goodness',
    description: 'Thin-crust savory pizzas loaded with fresh herbs, mozzarella, and gourmet toppings.'
  },
  {
    id: 'pasta',
    title: 'Comfort Pasta & Bowls',
    subtitle: 'Warm & hearty favorites',
    description: 'Creamy Alfredo, classic Arrabbiata, and savory pasta creations cooked to order.'
  },
  {
    id: 'breakfast',
    title: 'Brunch & Plated Bites',
    subtitle: 'All-day breakfast',
    description: 'Crispy wraps, seasoned wedges, continental platters, and savory café bites.'
  },
  {
    id: 'beverages',
    title: 'Coolers & Refreshers',
    subtitle: 'Chilled signature sips',
    description: 'Sparkling fruit coolers, iced matchas, creamy shakes, and artisanal thirst-quenchers.'
  }
];

export const MENU_ITEMS: MenuItem[] = [
  // Coffee
  {
    id: 'c1',
    name: 'KIN Velvet Cappuccino',
    category: 'coffee',
    description: 'Rich espresso topped with smooth micro-foam and delicate latte art.',
    isSignature: true,
    tags: ['Best Seller', 'Hot']
  },
  {
    id: 'c2',
    name: 'Espresso Tonic',
    category: 'coffee',
    description: 'Double shot of signature roast layered over crisp tonic water and citrus peel.',
    tags: ['Chilled']
  },
  {
    id: 'c3',
    name: 'Salted Caramel Cold Brew',
    category: 'coffee',
    description: 'Steeped for 18 hours, finished with house caramel cream float.',
    isSignature: true,
    tags: ['Popular']
  },
  {
    id: 'c4',
    name: 'Spanish Latte',
    category: 'coffee',
    description: 'Silky condensed milk espresso blend with a dash of warm cinnamon.',
    tags: ['Sweet']
  },

  // Pancakes
  {
    id: 'p1',
    name: 'Signature Chocolate Drizzle Stack',
    category: 'pancakes',
    description: 'Triple stacked airy pancakes drenched in belgian dark chocolate and toasted hazelnuts.',
    isSignature: true,
    tags: ['Must Try', 'Chef Special']
  },
  {
    id: 'p2',
    name: 'Classic Maple & Butter Pancakes',
    category: 'pancakes',
    description: 'Fluffy pancake stack served with pure maple syrup and whipped compound butter.',
    tags: ['Classic']
  },
  {
    id: 'p3',
    name: 'Berry Bliss Pancakes',
    category: 'pancakes',
    description: 'Infused with wild berry compote, dusted with vanilla snow sugar.',
    tags: ['Fruity']
  },

  // Bakery & Desserts
  {
    id: 'b1',
    name: 'Basque Burnt Cheesecake',
    category: 'bakery',
    description: 'Caramelized top with a velvety soft custard center.',
    isSignature: true,
    tags: ['House Specialty']
  },
  {
    id: 'b2',
    name: 'Double Chocolate Fudge Cake',
    category: 'bakery',
    description: 'Moist cocoa layers glazed in dark ganache.',
    tags: ['Indulgent']
  },
  {
    id: 'b3',
    name: 'Butter Croissant',
    category: 'bakery',
    description: 'Golden flaky layers baked fresh every morning.',
    tags: ['Fresh Baked']
  },

  // Pizza
  {
    id: 'pz1',
    name: 'Classico Margherita',
    category: 'pizza',
    description: 'San Marzano plum tomatoes, fresh basil leaves, and melted mozzarella.',
    isSignature: true,
    tags: ['Classic']
  },
  {
    id: 'pz2',
    name: 'Truffle Mushroom & Garlic',
    category: 'pizza',
    description: 'Wild roasted mushrooms, garlic confit, and truffle oil drizzle.',
    tags: ['Gourmet']
  },
  {
    id: 'pz3',
    name: 'Smoky Paneer Tikka Crisp',
    category: 'pizza',
    description: 'Char-broiled paneer cubes, charred peppers, and aromatic oregano.',
    tags: ['Local Favorite']
  },

  // Pasta
  {
    id: 'ps1',
    name: 'Creamy Garlic Mushroom Alfredo',
    category: 'pasta',
    description: 'Fettuccine tossed in rich garlic parmesan cream with sautéed mushrooms.',
    isSignature: true,
    tags: ['Comfort']
  },
  {
    id: 'ps2',
    name: 'Penne Arrabbiata',
    category: 'pasta',
    description: 'Spicy slow-cooked herb tomato sauce topped with aged parmesan.',
    tags: ['Spicy']
  },

  // Brunch & Plated
  {
    id: 'br1',
    name: 'KIN Sunrise Brunch Platter',
    category: 'breakfast',
    description: 'Seasoned potato wedges, grilled veggies, buttered sourdough toasts, and house dip.',
    isSignature: true,
    tags: ['Hearty']
  },
  {
    id: 'br2',
    name: 'Crispy Cottage Cheese Wrap',
    category: 'breakfast',
    description: 'Tortilla wrap stuffed with crunchy greens, spiced paneer, and garlic aioli.',
    tags: ['Snack']
  },

  // Beverages
  {
    id: 'bv1',
    name: 'Passionfruit Mint Cooler',
    category: 'beverages',
    description: 'Tangy passionfruit puree with crushed ice, fresh mint, and sparkling soda.',
    tags: ['Refreshing']
  },
  {
    id: 'bv2',
    name: 'Iced Matcha Oat Latte',
    category: 'beverages',
    description: 'Ceremonial grade Japanese green tea layered over iced creamy oat milk.',
    isSignature: true,
    tags: ['Wellness']
  }
];
