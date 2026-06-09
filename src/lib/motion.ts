import type { Variants } from "framer-motion";

/** Shared easing + scroll-reveal variants so every section animates consistently. */

export const EASE_SOFT = [0.16, 1, 0.3, 1] as const;

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: EASE_SOFT },
  },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.7, ease: EASE_SOFT },
  },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.94 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: EASE_SOFT },
  },
};

/** Wrap a list with this on the parent to stagger each child's `fadeUp`/`scaleIn`. */
export function staggerContainer(stagger = 0.12, delayChildren = 0): Variants {
  return {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: stagger,
        delayChildren,
      },
    },
  };
}

/** Default viewport options for `whileInView` — animate once, slightly before entering view. */
export const viewportOnce = { once: true, margin: "-80px 0px -80px 0px" } as const;
