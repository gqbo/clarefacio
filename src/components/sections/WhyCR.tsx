"use client";

import { useRef } from "react";
import { useTranslations } from "next-intl";
import { motion, useInView } from "framer-motion";

export default function WhyCR() {
  const t = useTranslations("whycr");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const paragraphs = [
    t("body_p1"),
    t("body_p2"),
    t("body_p3"),
    t("body_p4"),
  ] as const;

  return (
    <section
      id="nosotros"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background image — parrot; on mobile shift right to show the bird */}
      <div
        className="absolute inset-0 bg-cover bg-no-repeat"
        style={{
          backgroundImage: "url('/images/whycr-bg.jpg')",
          backgroundPosition: "70% center",
        }}
      />

      {/* Multi-layer dark overlay — same warmth as hero */}
      <div className="absolute inset-0 bg-linear-to-r from-[#0c0907] via-[#0c0907]/90 to-[#0c0907]/40" />
      <div className="absolute inset-0 bg-linear-to-t from-[#0c0907] via-transparent to-transparent" />

      {/* Top entry gradient — blends flush with the hero's bottom fade */}
      <div
        className="absolute top-0 left-0 right-0 h-90 pointer-events-none"
        style={{ background: "linear-gradient(to bottom, #0c0907 0%, transparent 100%)" }}
      />

      {/* Left ornamental vertical rule */}
      <div
        className="absolute left-0 top-1/4 bottom-1/4 w-px"
        style={{
          background:
            "linear-gradient(to bottom, transparent, rgba(196,30,40,0.5), transparent)",
        }}
      />

      {/* Content */}
      <div
        ref={ref}
        className="relative z-10 w-full max-w-7xl mx-auto px-8 lg:px-14 py-32"
      >
        <div className="max-w-2xl">
          {/* Eyebrow label */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="flex items-center gap-4 mb-7"
          >
            <span
              className="block w-8 h-px"
              style={{ backgroundColor: "#c41e28" }}
            />
            <span
              className="italic text-[#c41e28] tracking-[0.35em] uppercase"
              style={{ fontFamily: "var(--font-garamond)", fontSize: "0.8rem" }}
            >
              Costa Rica
            </span>
          </motion.p>

          {/* Headline */}
          <motion.h2
            initial={{ opacity: 0, y: 32 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="font-light leading-[1.05] mb-10"
            style={{
              fontFamily: "var(--font-garamond)",
              fontSize: "clamp(2.8rem, 6vw, 5rem)",
              color: "#ede8df",
              letterSpacing: "-0.01em",
            }}
          >
            {t("title")}
          </motion.h2>

          {/* Ornamental rule */}
          <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            animate={isInView ? { scaleX: 1, opacity: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.35, ease: "easeOut" }}
            className="origin-left mb-10"
            style={{ height: "1px", background: "rgba(237,232,223,0.1)", maxWidth: "20rem" }}
          />

          {/* Prose paragraphs */}
          <div className="space-y-5">
            {paragraphs.map((para, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 16 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.45 + i * 0.1 }}
                style={{
                  fontFamily: "var(--font-dm-sans)",
                  fontSize: "1rem",
                  color: i === 0
                    ? "rgba(237,232,223,0.75)"
                    : "rgba(237,232,223,0.5)",
                  lineHeight: "1.8",
                }}
              >
                {para}
              </motion.p>
            ))}
          </div>

          {/* Stats strip */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.9 }}
            className="mt-14 flex flex-wrap gap-x-8 gap-y-5"
            style={{ borderTop: "1px solid rgba(237,232,223,0.07)", paddingTop: "1.75rem" }}
          >
            {[
              { num: "6%", label: t("stat_biodiversity") },
              { num: "75+", label: t("stat_democracy") },
              { num: "99%", label: t("stat_literacy") },
            ].map(({ num, label }) => (
              <div key={label} className="flex items-baseline gap-3">
                <span
                  className="font-light leading-none"
                  style={{
                    fontFamily: "var(--font-garamond)",
                    fontSize: "2rem",
                    color: "rgba(196,30,40,0.7)",
                    letterSpacing: "-0.02em",
                  }}
                >
                  {num}
                </span>
                <span
                  style={{
                    fontFamily: "var(--font-dm-sans)",
                    fontSize: "0.72rem",
                    letterSpacing: "0.14em",
                    textTransform: "uppercase",
                    color: "rgba(237,232,223,0.35)",
                  }}
                >
                  {label}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Seamless transition into next section */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32"
        style={{ background: "linear-gradient(to top, #0c0907 0%, transparent 100%)" }}
      />
    </section>
  );
}
