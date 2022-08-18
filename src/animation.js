export const pageAnimation = {
  hidden: {
    opacity: 1,
    y: 0,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.25,
      when: 'beforeChildren',
      staggerChildren: 0.35,
    },
  },
  exit: {
    opacity: 0,
    y: 300,
    transition: {
      duration: 1,
    },
  },
};

export const titleAnim = {
  hidden: { y: 100, opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.75, ease: 'easeOut' },
  },
};

export const fade = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: { duration: 0.75, ease: 'easeOut' },
  },
};

export const photoAnim = {
  hidden: {
    opacity: 0,
    scale: 1.2,
  },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.75, ease: 'easeOut' },
  },
};
