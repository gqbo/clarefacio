"use client";

import { useRef } from "react";
import { useTranslations } from "next-intl";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import SectionEyebrow from "@/components/ui/SectionEyebrow";
import { EASE_EDITORIAL } from "@/lib/motion";

// ─── Data ────────────────────────────────────────────────────────────────────

// `as const` lets TypeScript infer literal key types automatically.
// Adding a lawyer only requires updating this array + translation files.
const LAWYERS = [
  { image: "/images/lawyers/gabriel-clare-facio.png",     nameKey: "lawyer1_name", titleKey: "lawyer1_title" },
  { image: "/images/lawyers/enrique_loria_brunker.jpg",   nameKey: "lawyer2_name", titleKey: "lawyer2_title" },
  { image: "/images/lawyers/manuel_gimenez_costillo.jpg", nameKey: "lawyer3_name", titleKey: "lawyer3_title" },
  { image: "/images/lawyers/nicole_gonzalez_guardia.jpg", nameKey: "lawyer4_name", titleKey: "lawyer4_title" },
] as const;

const PILLARS = [
  { num: "01", key: "pillar1" },
  { num: "02", key: "pillar2" },
  { num: "03", key: "pillar3" },
] as const;

// ─── Component ───────────────────────────────────────────────────────────────

export default function About() {
  const t = useTranslations("about");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const eyebrowAnimate = isInView ? { opacity: 1, y: 0 } : {};

  return (
    <section
      id="nosotros"
      className="relative overflow-hidden"
      style={{ backgroundColor: "#0c0907" }}
    >
      {/* Top entry gradient */}
      <div
        className="absolute top-0 left-0 right-0 h-32 pointer-events-none"
        style={{ background: "linear-gradient(to bottom, #0c0907 0%, transparent 100%)" }}
      />

      {/* Left ornamental vertical rule */}
      <div
        className="absolute left-0 top-1/4 bottom-1/4 w-px pointer-events-none"
        style={{
          background: "linear-gradient(to bottom, transparent, rgba(196,30,40,0.5), transparent)",
        }}
      />

      {/* Content */}
      <div
        ref={ref}
        className="relative z-10 w-full max-w-7xl mx-auto px-8 lg:px-14 pt-16 pb-20"
      >

        {/* ── Section header ─────────────────────────────────────────────── */}
        <div className="mb-16">
          <SectionEyebrow label={t("eyebrow")} animate={eyebrowAnimate} className="mb-5" />

          <motion.h2
            initial={{ opacity: 0, y: 32 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.15, ease: EASE_EDITORIAL }}
            className="font-light leading-[1.1] mb-5"
            style={{
              fontFamily: "var(--font-garamond)",
              fontSize: "clamp(2rem, 3.6vw, 3.4rem)",
              color: "#ede8df",
              letterSpacing: "-0.01em",
            }}
          >
            {t("title")}
          </motion.h2>
        </div>

        {/* ── Firm pillars — three editorial statements ───────────────────── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 mb-20">
          {PILLARS.map(({ num, key }, i) => (
            <motion.div
              key={num}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.45 + i * 0.1, ease: EASE_EDITORIAL }}
              className={`relative group pt-6 pb-6 ${i > 0 ? "md:pl-8" : ""} ${i < 2 ? "md:pr-8 md:[border-right:1px_solid_rgba(237,232,223,0.08)]" : ""}`}
              style={{ borderTop: "1px solid rgba(237,232,223,0.08)" }}
            >
              <span
                className="block leading-none mb-3"
                style={{
                  fontFamily: "var(--font-garamond)",
                  fontSize: "1.6rem",
                  letterSpacing: "0.05em",
                  color: "rgba(196,30,40,0.5)",
                  fontStyle: "italic",
                }}
              >
                {num}
              </span>

              <p
                style={{
                  fontFamily: "var(--font-dm-sans)",
                  fontSize: "0.875rem",
                  color: "rgba(237,232,223,0.55)",
                  lineHeight: "1.75",
                }}
              >
                {t(key)}
              </p>
            </motion.div>
          ))}

          {/* Bottom border for pillars */}
          <div
            className="col-span-1 md:col-span-3"
            style={{ borderTop: "1px solid rgba(237,232,223,0.08)" }}
          />
        </div>

        {/* ── Lawyers grid ─────────────────────────────────────────────────── */}
        <div
          className="grid grid-cols-2 lg:grid-cols-4 gap-px"
          style={{ border: "1px solid rgba(237,232,223,0.08)" }}
        >
          {LAWYERS.map((lawyer, i) => (
            <motion.div
              key={lawyer.nameKey}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 + i * 0.12, ease: EASE_EDITORIAL }}
              className="relative group overflow-hidden"
              style={{
                backgroundColor: "#0c0907",
                borderRight: i < 3 ? "1px solid rgba(237,232,223,0.08)" : "none",
              }}
            >
              {/* Photo */}
              <div className="relative aspect-[3/4] overflow-hidden">
                <Image
                  src={lawyer.image}
                  alt={t(lawyer.nameKey)}
                  fill
                  className="object-cover object-top transition-all duration-700 group-hover:scale-105"
                  style={{ filter: "grayscale(25%)" }}
                  sizes="(max-width: 768px) 50vw, 25vw"
                />

                {/* Dark overlay */}
                <div
                  className="absolute inset-0 transition-opacity duration-500"
                  style={{
                    background: "linear-gradient(to top, #0c0907 0%, rgba(12,9,7,0.5) 40%, transparent 70%)",
                  }}
                />

                {/* Crimson hover tint */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ backgroundColor: "rgba(196,30,40,0.08)" }}
                />

                {/* Crimson left accent line */}
                <div
                  className="absolute left-0 top-0 bottom-0 w-px opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: "linear-gradient(to bottom, transparent, rgba(196,30,40,0.7), transparent)",
                  }}
                />
              </div>

              {/* Name + Title */}
              <div
                className="px-5 py-5"
                style={{ borderTop: "1px solid rgba(237,232,223,0.06)" }}
              >
                <h3
                  className="leading-tight mb-2 font-light"
                  style={{
                    fontFamily: "var(--font-garamond)",
                    fontSize: "clamp(1.1rem, 1.5vw, 1.3rem)",
                    color: "rgba(237,232,223,0.95)",
                    letterSpacing: "-0.01em",
                  }}
                >
                  {t(lawyer.nameKey)}
                </h3>
                <p
                  style={{
                    fontFamily: "var(--font-dm-sans)",
                    fontSize: "0.68rem",
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    color: "rgba(237,232,223,0.35)",
                    lineHeight: "1.5",
                  }}
                >
                  {t(lawyer.titleKey)}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Bottom fade into next section */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
        style={{ background: "linear-gradient(to top, #0c0907 0%, transparent 100%)" }}
      />
    </section>
  );
}
