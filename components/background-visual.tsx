"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";

export function BackgroundVisual() {
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const drift = useTransform(scrollYProgress, [0, 1], [0, -90]);

  return (
    <div className="background-visual" aria-hidden="true">
      <div className="background-visual__grid" />
      <motion.div
        className="background-visual__contours"
        style={{ y: reduceMotion ? 0 : drift }}
      >
        <i />
        <i />
        <i />
        <i />
      </motion.div>
      <div className="background-visual__grain" />
    </div>
  );
}
