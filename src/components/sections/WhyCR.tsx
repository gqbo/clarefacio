"use client";

import { useRef } from "react";
import { useTranslations } from "next-intl";
import { motion, useInView } from "framer-motion";

const reasons = [1, 2, 3, 4, 5, 6] as const;

export default function WhyCR() {
  const t = useTranslations("whycr");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section
      id="nosotros"
      className="relative py-32 overflow-hidden"
      style={{ backgroundColor: "#0c0907" }}
    >
      {/*
        Background: fine legal ledger paper crosshatch
        Pure CSS — no image dependency, feels like a law office document
      */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(rgba(237,232,223,0.022) 1px, transparent 1px),
            linear-gradient(90deg, rgba(237,232,223,0.022) 1px, transparent 1px)
          `,
          backgroundSize: "48px 48px",
        }}
      />

      {/* Vignette to blend the grid into the edges */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 40%, #0c0907 100%)",
        }}
      />

      {/* Left ornamental vertical rule */}
      <div
        className="absolute left-0 top-32 bottom-32 w-px"
        style={{
          background:
            "linear-gradient(to bottom, transparent, rgba(196,30,40,0.45), transparent)",
        }}
      />

      <div
        className="relative z-10 max-w-7xl mx-auto px-8 lg:px-14"
        ref={ref}
      >
        {/* ── Section header ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          {/* Label */}
          <p className="flex items-center gap-4 mb-7">
            <span
              className="block w-8 h-px"
              style={{ backgroundColor: "#c41e28" }}
            />
            <span
              className="italic text-[#c41e28] tracking-[0.35em] uppercase text-xs"
              style={{ fontFamily: "var(--font-garamond)", fontSize: "0.8rem" }}
            >
              Costa Rica
            </span>
          </p>

          {/* Headline */}
          <h2
            className="font-light leading-[1.05]"
            style={{
              fontFamily: "var(--font-garamond)",
              fontSize: "clamp(2.4rem, 6vw, 4.5rem)",
              color: "#ede8df",
              letterSpacing: "-0.01em",
            }}
          >
            {t("title")}
          </h2>

          {/* Subtitle */}
          <p
            className="mt-5 max-w-xl leading-relaxed"
            style={{
              fontFamily: "var(--font-dm-sans)",
              color: "rgba(237,232,223,0.45)",
              fontSize: "1rem",
            }}
          >
            {t("subtitle")}
          </p>
        </motion.div>

        {/* ── Reasons — editorial numbered list ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0">
          {reasons.map((num, i) => (
            <motion.article
              key={num}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.06 * i }}
              className="group relative py-10 px-8 cursor-default"
              style={{
                borderTop: "1px solid rgba(237,232,223,0.07)",
                borderRight: i % 3 !== 2 ? "1px solid rgba(237,232,223,0.07)" : "none",
              }}
            >
              {/* Hover fill — very subtle warm tint */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ backgroundColor: "rgba(196,30,40,0.03)" }}
              />

              {/* Number — large Cormorant, high-contrast serif strokes */}
              <p
                className="relative font-light leading-none mb-6 select-none"
                style={{
                  fontFamily: "var(--font-garamond)",
                  fontSize: "3.5rem",
                  color: "rgba(196,30,40,0.22)",
                  letterSpacing: "-0.03em",
                  transition: "color 0.3s",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = "rgba(196,30,40,0.45)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = "rgba(196,30,40,0.22)")
                }
              >
                {String(num).padStart(2, "0")}
              </p>

              {/* Thin crimson rule under number */}
              <div
                className="relative mb-5 w-6 group-hover:w-10 transition-all duration-400"
                style={{ height: "1px", backgroundColor: "#c41e28" }}
              />

              {/* Title — Cormorant, medium weight */}
              <h3
                className="relative mb-3 leading-tight"
                style={{
                  fontFamily: "var(--font-garamond)",
                  fontSize: "1.35rem",
                  fontWeight: 500,
                  color: "#ede8df",
                  letterSpacing: "0.01em",
                }}
              >
                {t(`reason${num}_title`)}
              </h3>

              {/* Description — Lora, body serif */}
              <p
                className="relative leading-relaxed"
                style={{
                  fontFamily: "var(--font-dm-sans)",
                  fontSize: "0.875rem",
                  color: "rgba(237,232,223,0.42)",
                  lineHeight: "1.7",
                }}
              >
                {t(`reason${num}_desc`)}
              </p>
            </motion.article>
          ))}
        </div>

        {/* Bottom rule */}
        <div
          className="mt-0"
          style={{
            borderTop: "1px solid rgba(237,232,223,0.07)",
          }}
        />
      </div>
    </section>
  );
}
