import { Variants } from "framer-motion";

export const containerVariants: Variants = {
  hidden: {},

  visible: {
    transition: {
      staggerChildren: .12,
      delayChildren: .15,
    },
  },
};

export const cardVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 40,
  },

  visible: {
    opacity: 1,
    y: 0,

    transition: {
      duration: .6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export const hoverCard = {
  y: -12,
  transition: {
    duration: .3,
  },
};
