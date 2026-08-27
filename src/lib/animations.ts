import { Variants } from 'framer-motion';

export const EASE_EMPATHIC: [number, number, number, number] = [0.22, 1, 0.36, 1];
export const EASE_CINEMATIC: [number, number, number, number] = [0.16, 1, 0.3, 1];

export const fadeUp: Variants = {
  hidden: {
    opacity: 0,
    y: 35,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.9,
      ease: EASE_EMPATHIC,
    },
  },
};

export const fadeIn: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: 'easeOut',
    },
  },
};

export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.05,
    },
  },
};

export const staggerFast: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.06,
      delayChildren: 0.02,
    },
  },
};

export const wordMaskReveal: Variants = {
  hidden: {
    y: '100%',
    opacity: 0,
  },
  visible: {
    y: '0%',
    opacity: 1,
    transition: {
      duration: 0.85,
      ease: EASE_EMPATHIC,
    },
  },
};

export const imageReveal: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.7,
      ease: 'easeOut',
    },
  },
};

export const scaleUp: Variants = {
  hidden: {
    scale: 0.95,
    opacity: 0,
  },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: EASE_EMPATHIC,
    },
  },
};

export const menuOverlayVariants: Variants = {
  closed: {
    opacity: 0,
    pointerEvents: 'none',
    transition: {
      duration: 0.4,
      ease: EASE_EMPATHIC,
    },
  },
  open: {
    opacity: 1,
    pointerEvents: 'auto',
    transition: {
      duration: 0.4,
      ease: EASE_EMPATHIC,
    },
  },
};

export const drawerVariants: Variants = {
  closed: {
    x: '100%',
    transition: {
      duration: 0.45,
      ease: [0.32, 0, 0.67, 0],
    },
  },
  open: {
    x: '0%',
    transition: {
      duration: 0.6,
      ease: EASE_EMPATHIC,
    },
  },
};
