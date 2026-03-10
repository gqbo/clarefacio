"use client";

import { useRef } from "react";
import { useTranslations } from "next-intl";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

// ─── Data ────────────────────────────────────────────────────────────────────

const LAWYERS = [
  {
    image: "/images/lawyers/gabriel-clare-facio.png",
    nameKey: "lawyer1_name",
    titleKey: "lawyer1_title",
  },
  {
    image: "/images/lawyers/enrique_loria_brunker.jpg",
    nameKey: "lawyer2_name",
    titleKey: "lawyer2_title",
  },
  {
    image: "/images/lawyers/manuel_gimenez_costillo.jpg",
    nameKey: "lawyer3_name",
    titleKey: "lawyer3_title",
  },
  {
    image: "/images/lawyers/nicole_gonzalez_guardia.jpg",
    nameKey: "lawyer4_name",
    titleKey: "lawyer4_title",
  },
];

// ─── Component ───────────────────────────────────────────────────────────────

export default function About() {
  const t = useTranslations("about");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const pillars = [
    { num: "01", text: t("pillar1") },
    { num: "02", text: t("pillar2") },
    { num: "03", text: t("pillar3") },
  ];

  return (
    <section
      id="nosotros"
      className="relative overflow-hidden"
      style={{ backgroundColor: "#0c0907" }}
    >
      {/* Crosshatch background — legal ledger paper texture */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(237,232,223,0.022) 1px, transparent 1px), linear-gradient(90deg, rgba(237,232,223,0.022) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      {/* Radial vignette to blend edges */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 50%, transparent 30%, #0c0907 100%)",
        }}
      />

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
        className="relative z-10 w-full max-w-7xl mx-auto px-8 lg:px-14 pt-24 pb-32"
      >

        {/* ── Section header ─────────────────────────────────────────────── */}
        <div className="mb-16">
          {/* Eyebrow */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="flex items-center gap-4 mb-5"
          >
            <span className="block w-8 h-px" style={{ backgroundColor: "#c41e28" }} />
            <span
              className="italic tracking-[0.35em] uppercase"
              style={{
                fontFamily: "var(--font-garamond)",
                fontSize: "0.8rem",
                color: "#c41e28",
              }}
            >
              {t("eyebrow")}
            </span>
          </motion.p>

          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 32 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
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
          {pillars.map((pillar, i) => (
            <motion.div
              key={pillar.num}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.45 + i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="relative group"
              style={{
                borderTop: "1px solid rgba(237,232,223,0.08)",
                borderRight: i < 2 ? "1px solid rgba(237,232,223,0.08)" : "none",
                paddingTop: "1.5rem",
                paddingRight: i < 2 ? "2rem" : "0",
                paddingLeft: i > 0 ? "2rem" : "0",
                paddingBottom: "1.5rem",
              }}
            >
              {/* Section number */}
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
                {pillar.num}
              </span>

              <p
                style={{
                  fontFamily: "var(--font-dm-sans)",
                  fontSize: "0.875rem",
                  color: "rgba(237,232,223,0.55)",
                  lineHeight: "1.75",
                }}
              >
                {pillar.text}
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
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px"
          style={{ border: "1px solid rgba(237,232,223,0.08)" }}
        >
          {LAWYERS.map((lawyer, i) => (
            <motion.div
              key={lawyer.nameKey}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 + i * 0.12, ease: [0.16, 1, 0.3, 1] }}
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
                  alt={t(lawyer.nameKey as any)}
                  fill
                  className="object-cover object-top transition-all duration-700 group-hover:scale-105"
                  style={{ filter: "grayscale(25%)" }}
                  sizes="(max-width: 768px) 50vw, 25vw"
                />

                {/* Dark overlay — always present, deepens on hover */}
                <div
                  className="absolute inset-0 transition-opacity duration-500"
                  style={{
                    background:
                      "linear-gradient(to top, #0c0907 0%, rgba(12,9,7,0.5) 40%, transparent 70%)",
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
                    background:
                      "linear-gradient(to bottom, transparent, rgba(196,30,40,0.7), transparent)",
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
                  {t(lawyer.nameKey as any)}
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
                  {t(lawyer.titleKey as any)}
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
