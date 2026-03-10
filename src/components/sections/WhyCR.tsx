"use client";

import { useRef } from "react";
import { useTranslations } from "next-intl";
import { motion, useInView } from "framer-motion";

export default function WhyCR() {
  const t = useTranslations("whycr");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const cards = [
    { num: t("card1_num"), title: t("card1_title"), text: t("card1_text") },
    { num: t("card2_num"), title: t("card2_title"), text: t("card2_text") },
    { num: t("card3_num"), title: t("card3_title"), text: t("card3_text") },
  ];

  return (
    <section
      id="costarica"
      className="relative flex items-center overflow-hidden"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-no-repeat"
        style={{
          backgroundImage: "url('/images/whycr-bg.jpg')",
          backgroundPosition: "70% center",
        }}
      />

      {/* Multi-layer dark overlay */}
      <div className="absolute inset-0 bg-linear-to-r from-[#0c0907] via-[#0c0907]/92 to-[#0c0907]/55" />
      <div className="absolute inset-0 bg-linear-to-t from-[#0c0907] via-transparent to-transparent" />

      {/* Top entry gradient */}
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
        className="relative z-10 w-full max-w-7xl mx-auto px-8 lg:px-14 py-16 lg:py-24"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-stretch">

          {/* Left column — heading + intro + stats */}
          <div className="flex flex-col">
            {/* Top group: eyebrow + heading + rule + intro */}
            <div className="flex flex-col gap-4">
              {/* Eyebrow */}
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7 }}
                className="flex items-center gap-4"
              >
                <span className="block w-8 h-px" style={{ backgroundColor: "#c41e28" }} />
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
                className="font-light leading-[1.1] whitespace-nowrap"
                style={{
                  fontFamily: "var(--font-garamond)",
                  fontSize: "clamp(2rem, 3.6vw, 3.4rem)",
                  color: "#ede8df",
                  letterSpacing: "-0.01em",
                }}
              >
                {t("title")}
              </motion.h2>

              {/* Ornamental rule — right below title */}
              <motion.div
                initial={{ scaleX: 0, opacity: 0 }}
                animate={isInView ? { scaleX: 1, opacity: 1 } : {}}
                transition={{ duration: 0.7, delay: 0.35, ease: "easeOut" }}
                className="origin-left"
                style={{ height: "1px", background: "rgba(237,232,223,0.12)", width: "100%" }}
              />

              {/* Intro paragraph */}
              <motion.p
                initial={{ opacity: 0, y: 12 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.45 }}
                style={{
                  fontFamily: "var(--font-dm-sans)",
                  fontSize: "0.9rem",
                  color: "rgba(237,232,223,0.5)",
                  lineHeight: "1.8",
                }}
              >
                {t("intro")}
              </motion.p>
            </div>

            {/* Stats — anchored to bottom */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.6 }}
              className="flex flex-col gap-8 mt-8"
            >
              {[
                { num: "6%", label: t("stat_biodiversity") },
                { num: "75+", label: t("stat_democracy") },
                { num: "99%", label: t("stat_literacy") },
              ].map(({ num, label }, i) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, x: -12 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.65 + i * 0.08 }}
                  className="flex items-baseline gap-4"
                >
                  <span
                    className="font-light leading-none"
                    style={{
                      fontFamily: "var(--font-garamond)",
                      fontSize: "2.2rem",
                      color: "rgba(196,30,40,0.75)",
                      letterSpacing: "-0.02em",
                      minWidth: "3.5rem",
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
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right column — editorial numbered cards */}
          <div className="flex flex-col justify-between">
            {cards.map((card, i) => (
              <motion.div
                key={card.num}
                initial={{ opacity: 0, x: 24 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.4 + i * 0.15, ease: [0.16, 1, 0.3, 1] }}
                className="relative group flex-1"
                style={{
                  borderTop: "1px solid rgba(237,232,223,0.08)",
                  paddingTop: "1.5rem",
                  paddingBottom: "1.5rem",
                  paddingLeft: "1.75rem",
                }}
              >
                {/* Crimson left accent */}
                <div
                  className="absolute left-0 top-0 bottom-0 w-px transition-all duration-500 group-hover:opacity-100"
                  style={{
                    background: "linear-gradient(to bottom, transparent, rgba(196,30,40,0.55), transparent)",
                    opacity: 0.6,
                  }}
                />

                {/* Number — visually prominent */}
                <span
                  className="block leading-none mb-3"
                  style={{
                    fontFamily: "var(--font-garamond)",
                    fontSize: "1.6rem",
                    letterSpacing: "0.05em",
                    color: "rgba(196,30,40,0.55)",
                    fontStyle: "italic",
                  }}
                >
                  {card.num}
                </span>

                {/* Card title */}
                <h3
                  className="mb-3 font-light leading-tight"
                  style={{
                    fontFamily: "var(--font-garamond)",
                    fontSize: "clamp(1.3rem, 1.8vw, 1.6rem)",
                    color: "rgba(237,232,223,0.9)",
                    letterSpacing: "-0.01em",
                  }}
                >
                  {card.title}
                </h3>

                {/* Card text */}
                <p
                  style={{
                    fontFamily: "var(--font-dm-sans)",
                    fontSize: "0.875rem",
                    color: "rgba(237,232,223,0.45)",
                    lineHeight: "1.75",
                  }}
                >
                  {card.text}
                </p>
              </motion.div>
            ))}

            {/* Bottom border */}
            <div style={{ borderTop: "1px solid rgba(237,232,223,0.08)" }} />
          </div>
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
