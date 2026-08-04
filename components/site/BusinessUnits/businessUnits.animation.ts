import { Variants } from "framer-motion";

export const containerVariants: Variants = {
  hidden: {},

  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.15,
    },
  },
};

export const cardVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 40,
    scale: 0.96,
  },

  visible: {
    opacity: 1,
    y: 0,
    scale: 1,

    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export const imageVariants: Variants = {
  rest: {
    scale: 1,
  },

  hover: {
    scale: 1.08,

    transition: {
      duration: 0.6,
    },
  },
};

export const buttonVariants: Variants = {
  rest: {
    x: 0,
  },

  hover: {
    x: 6,

    transition: {
      duration: 0.25,
    },
  },
};
