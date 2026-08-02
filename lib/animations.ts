import type { Transition, Variants } from "motion/react";

export const easeOut = [0.22, 1, 0.36, 1] as const;

export const revealTransition: Transition = {
  duration: 0.55,
  ease: easeOut,
};

export const revealVariants: Variants = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0 },
};

export const projectSpring: Transition = {
  type: "spring",
  stiffness: 260,
  damping: 28,
  mass: 0.9,
};
