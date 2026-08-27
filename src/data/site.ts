import kinLogo from '@/assets/kin logo.jpeg';

export interface SiteConfig {
  name: string;
  logo: string;
  category: string;
  tagline: string;
  subTagline: string;
  address: {
    street: string;
    neighborhood: string;
    city: string;
    state: string;
    pincode: string;
    full: string;
  };
  socials: {
    instagramHandle: string;
    instagramUrl: string;
    googleMapsUrl: string;
  };
  hours: {
    monday: string;
    tueSun: string;
  };
  rating: {
    score: number;
    maxScore: number;
    reviewsCount: number;
    priceRange: string;
  };
}

export const siteConfig: SiteConfig = {
  name: "KIN",
  logo: kinLogo,
  category: "Coffee Shop & Bakery",
  tagline: "GOOD FOOD. SLOW MOMENTS.",
  subTagline: "A warm café space in Basanti Nagar, Rourkela for coffee, food, sweet cravings and something worth staying for.",
  address: {
    street: "M-39",
    neighborhood: "Basanti Nagar",
    city: "Rourkela",
    state: "Odisha",
    pincode: "769012",
    full: "M-39, Basanti Nagar, Rourkela, Odisha 769012, India",
  },
  socials: {
    instagramHandle: "@kin_rkl",
    instagramUrl: "https://www.instagram.com/kin_rkl/",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=KIN+Cafe+Basanti+Nagar+Rourkela+Odisha",
  },
  hours: {
    monday: "8:30 AM – 10:30 PM",
    tueSun: "8:00 AM – 10:30 PM",
  },
  rating: {
    score: 4.6,
    maxScore: 5,
    reviewsCount: 143,
    priceRange: "₹200–₹1,000",
  },
};
