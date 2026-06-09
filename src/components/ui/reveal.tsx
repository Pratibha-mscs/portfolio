"use client";

import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";
import { fadeUp, viewportOnce } from "@/lib/motion";

/**
 * Fades + slides an element into place the first time it scrolls into view.
 * Wrap any block with it instead of hand-rolling `motion.div` boilerplate.
 */
export function Reveal({
  children,
  variants = fadeUp,
  className,
}: {
  children: ReactNode;
  variants?: Variants;
  className?: string;
}) {
  return (
    <motion.div initial="hidden" whileInView="visible" viewport={viewportOnce} variants={variants} className={className}>
      {children}
    </motion.div>
  );
}
