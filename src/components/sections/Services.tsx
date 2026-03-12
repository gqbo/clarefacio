"use client";

import { useRef } from "react";
import { useTranslations } from "next-intl";
import { motion, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";
import SectionEyebrow from "@/components/ui/SectionEyebrow";
import { fadeUp, EASE_EDITORIAL } from "@/lib/motion";

// ─── Data ────────────────────────────────────────────────────────────────────

const SERVICES = [
  { key: "contratos" },
  { key: "familia" },
  { key: "penal" },
  { key: "alertas" },
  { key: "nombre" },
  { key: "inmobiliario" },
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
        className="relative z-20 w-full max-w-7xl mx-auto px-8 lg:px-14 pt-16 pb-16"
      >
        {/* ── Section header ─────────────────────────────────────────────── */}
        <div className="mb-14">
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

        {/* ── Practice area index ────────────────────────────────────────── */}
        <div style={{ borderTop: "1px solid rgba(237,232,223,0.08)" }}>
          {SERVICES.map((service, i) => (
            <motion.div
              key={service.key}
              {...fadeUp(0.3 + i * 0.08)}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }}
              className="group flex items-center justify-between py-7 transition-all duration-300 cursor-default border-l-2 border-l-transparent hover:border-l-[#c41e28] hover:pl-5"
              style={{
                borderBottom: "1px solid rgba(237,232,223,0.08)",
              }}
            >
              <span
                className="transition-colors duration-300 group-hover:text-[#c41e28]"
                style={{
                  fontFamily: "var(--font-garamond)",
                  fontSize: "clamp(1.5rem, 2.2vw, 2.1rem)",
                  color: "#ede8df",
                  letterSpacing: "-0.01em",
                  fontWeight: 300,
                }}
              >
                {t(`${service.key}_title`)}
              </span>

              <ArrowRight
                size={18}
                className="shrink-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ml-4"
                style={{ color: "#c41e28" }}
              />
            </motion.div>
          ))}
        </div>

        {/* ── CTA ─────────────────────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.9, ease: EASE_EDITORIAL }}
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
            <span style={{ fontSize: "1.1rem" }}>→</span>
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
