/**
 * Shared Framer Motion animation utilities.
 * Import from here instead of defining animations inline per-component.
 */

/** Editorial easing — used for headline/card entrances */
export const EASE_EDITORIAL = [0.16, 1, 0.3, 1] as const;

/**
 * Spreads onto a motion element for a simple fade-up on mount.
 * Use for hero-level animations that run immediately (not scroll-triggered).
 */
export const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 18 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay },
});
