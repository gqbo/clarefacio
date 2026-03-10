"use client";

import { motion } from "framer-motion";

interface Props {
  label: string;
  /** Pass `{ opacity: 1, y: 0 }` for hero (always animates) or `isInView ? { opacity: 1, y: 0 } : {}` for scroll-triggered sections */
  animate: object;
  className?: string;
}

/**
 * Section eyebrow: a short crimson horizontal rule followed by an italic label.
 * Shared across Hero, WhyCR, About (and any future section).
 */
export default function SectionEyebrow({ label, animate, className = "" }: Props) {
  return (
    <motion.p
      initial={{ opacity: 0, y: 16 }}
      animate={animate}
      transition={{ duration: 0.7 }}
      className={`flex items-center gap-4 ${className}`}
    >
      <span className="block w-8 h-px" style={{ backgroundColor: "#c41e28" }} />
      <span
        className="italic tracking-[0.35em] uppercase"
        style={{ fontFamily: "var(--font-garamond)", fontSize: "0.8rem", color: "#c41e28" }}
      >
        {label}
      </span>
    </motion.p>
  );
}
