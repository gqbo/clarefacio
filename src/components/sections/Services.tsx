"use client";

import { useRef } from "react";
import { useTranslations } from "next-intl";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import SectionEyebrow from "@/components/ui/SectionEyebrow";
import { EASE_EDITORIAL } from "@/lib/motion";
import { CARD_BG } from "@/lib/tokens";

// ─── Data ────────────────────────────────────────────────────────────────────

const FEATURED_SERVICES = [
  {
    key: "contratos",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&q=80",
  },
  {
    key: "familia",
    image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&q=80",
  },
  {
    key: "penal",
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&q=80",
  },
  {
    key: "alertas",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80",
  },
  {
    key: "nombre",
    image: "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=800&q=80",
  },
  {
    key: "inmobiliario",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80",
  },
] as const;

// ─── Component ───────────────────────────────────────────────────────────────

export default function Services() {
  const t = useTranslations("services");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const eyebrowAnimate = isInView ? { opacity: 1, y: 0 } : {};

  return (
    <section
      id="servicios"
      className="relative overflow-hidden"
      style={{ backgroundColor: "#0e0b08" }}
    >
      {/* Top fade */}
      <div
        className="absolute top-0 left-0 right-0 h-32 pointer-events-none z-10"
        style={{ background: "linear-gradient(to bottom, #0c0907 0%, transparent 100%)" }}
      />

      {/* Content */}
      <div
        ref={ref}
        className="relative z-10 w-full max-w-7xl mx-auto px-8 lg:px-14 pt-28 pb-28"
      >
        {/* ── Section header ─────────────────────────────────────────────── */}
        <div className="mb-16">
          <div>
            <SectionEyebrow label={t("eyebrow")} animate={eyebrowAnimate} className="mb-5" />

            <motion.h2
              initial={{ opacity: 0, y: 32 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.9, delay: 0.15, ease: EASE_EDITORIAL }}
              className="font-light leading-[1.1]"
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
        </div>

        {/* ── 2×3 grid ──────────────────────────────────────────────────── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {FEATURED_SERVICES.map((service, i) => (
            <motion.div
              key={service.key}
              initial={{ opacity: 0, y: 28 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.85, delay: 0.3 + i * 0.1, ease: EASE_EDITORIAL }}
              className="relative group overflow-hidden flex flex-col"
              style={{
                backgroundColor: CARD_BG,
                border: "1px solid rgba(237,232,223,0.07)",
              }}
            >
              {/* Image */}
              <div className="relative aspect-[16/9] overflow-hidden shrink-0">
                <Image
                  src={service.image}
                  alt={t(`${service.key}_title`)}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />

                {/* Dark gradient overlay */}
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(to top, rgba(12,9,7,0.75) 0%, rgba(12,9,7,0.2) 60%, transparent 100%)",
                  }}
                />

                {/* Crimson hover accent */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ backgroundColor: "rgba(196,30,40,0.06)" }}
                />
              </div>

              {/* Card body */}
              <div className="flex flex-col gap-3 px-6 py-5 grow">
                {/* Crimson accent line */}
                <div
                  className="w-6 h-px opacity-60 group-hover:opacity-100 transition-all duration-500 group-hover:w-10"
                  style={{ backgroundColor: "#c41e28" }}
                />

                <h3
                  className="font-light leading-tight transition-colors duration-300 group-hover:text-[#c41e28]"
                  style={{
                    fontFamily: "var(--font-garamond)",
                    fontSize: "clamp(1.15rem, 1.5vw, 1.35rem)",
                    color: "#ede8df",
                    letterSpacing: "-0.01em",
                  }}
                >
                  {t(`${service.key}_title`)}
                </h3>

                <p
                  style={{
                    fontFamily: "var(--font-dm-sans)",
                    fontSize: "0.8rem",
                    color: "#7a7268",
                    lineHeight: 1.7,
                  }}
                >
                  {t(`${service.key}_desc`)}
                </p>

                <span
                  className="mt-auto inline-flex items-center gap-2 pt-2"
                  style={{
                    fontFamily: "var(--font-garamond)",
                    fontStyle: "italic",
                    fontSize: "0.88rem",
                    color: "#c41e28",
                    letterSpacing: "0.03em",
                  }}
                >
                  {t("learnMore")} &rarr;
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ── CTA ─────────────────────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.95, ease: EASE_EDITORIAL }}
          className="mt-14 flex justify-center"
        >
          <button
            className="inline-flex items-center gap-4 px-12 py-4 transition-all duration-300 cursor-pointer hover:border-[rgba(196,30,40,0.5)]"
            style={{
              fontFamily: "var(--font-garamond)",
              fontSize: "0.9rem",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "#ede8df",
              border: "1px solid rgba(237,232,223,0.18)",
              background: "none",
            }}
          >
            {t("viewAll")}
            <span style={{ color: "#c41e28", fontSize: "1.1rem" }}>→</span>
          </button>
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
        style={{ background: "linear-gradient(to top, #0c0907 0%, transparent 100%)" }}
      />
    </section>
  );
}
