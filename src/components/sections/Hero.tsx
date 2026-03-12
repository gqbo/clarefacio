"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import SectionEyebrow from "@/components/ui/SectionEyebrow";
import { fadeUp } from "@/lib/motion";

// ─── Data ───────────────────────────────────────────────────────────────────

const PRACTICE_AREAS = [
  "Derecho Comercial",
  "Derecho Inmobiliario",
  "Derecho Tributario",
  "Propiedad Intelectual",
  "Derecho Público",
  "Derecho Penal",
  "Derecho de Trabajo",
  "Derecho Administrativo",
  "Derecho de Familia",
  "Contabilidad",
];

// ─── Component ───────────────────────────────────────────────────────────────

export default function Hero() {
  const t = useTranslations("hero");

  return (
    <section className="relative min-h-screen flex items-end overflow-hidden">

      {/* Background video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="/images/Serene_Waterfall_Loop_Video.mp4"
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Multi-layer overlay — deep and warm, not flat tech-black */}
      <div className="absolute inset-0 bg-linear-to-t from-[#0c0907] via-[#0c0907]/80 to-[#0c0907]/30" />
      <div className="absolute inset-0 bg-linear-to-r from-[#0c0907]/70 via-transparent to-transparent" />

      {/* Ornamental vertical rule — left margin */}
      <div
        className="absolute left-0 sm:left-10 top-1/3 bottom-1/3 w-px"
        style={{
          background: "linear-gradient(to bottom, transparent, rgba(196,30,40,0.5), transparent)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-8 lg:px-14 pb-24 pt-48">

        {/* Eyebrow */}
        <SectionEyebrow
          label={t("pretitle")}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        />

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.0, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="mb-10 font-light flex flex-col"
          style={{
            fontFamily: "var(--font-garamond)",
            fontSize: "clamp(3.8rem, 9vw, 8rem)",
            letterSpacing: "-0.01em",
            gap: "0.3em",
          }}
        >
          <span className="block text-[#ede8df]/90 font-light leading-none">
            {t("title_before")}
          </span>
          <span className="block leading-none">
            <span
              className="inline italic font-semibold leading-none"
              style={{ color: "#c41e28", fontFamily: "var(--font-garamond)" }}
            >
              {t("title_highlight")}
            </span>
          </span>
        </motion.h1>

        {/* Ornamental rule */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.55, ease: "easeOut" }}
          className="origin-left mb-8"
          style={{ height: "1px", background: "rgba(237,232,223,0.12)", maxWidth: "28rem" }}
        />

        {/* Subtitle */}
        <motion.p
          {...fadeUp(0.65)}
          className="text-lg leading-relaxed mb-12 max-w-lg"
          style={{
            fontFamily: "var(--font-dm-sans)",
            color: "rgba(237,232,223,0.6)",
            fontSize: "1.05rem",
          }}
        >
          {t("subtitle")}
        </motion.p>

        {/* CTAs */}
        <motion.div
          {...fadeUp(0.82)}
          className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-16"
        >
          <a
            href="#contacto"
            className="group inline-flex items-center justify-center gap-3 px-9 py-4 text-white bg-[#c41e28] hover:bg-[#9c1820] transition-colors duration-300"
            style={{
              fontFamily: "var(--font-dm-sans)",
              fontSize: "0.7rem",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
            }}
          >
            {t("cta_primary")}
            <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform duration-200" />
          </a>

          <a
            href="#nosotros"
            className="inline-flex items-center justify-center gap-3 px-9 py-4 text-[rgba(237,232,223,0.6)] hover:text-[rgba(237,232,223,1)] border border-[rgba(237,232,223,0.2)] hover:border-[rgba(237,232,223,0.45)] transition-all duration-300"
            style={{
              fontFamily: "var(--font-dm-sans)",
              fontSize: "0.7rem",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
            }}
          >
            {t("cta_secondary")}
          </a>
        </motion.div>

        {/* Practice areas ticker */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.9, delay: 1.05 }}
          className="overflow-hidden"
          style={{ borderTop: "1px solid rgba(237,232,223,0.07)", paddingTop: "1.5rem" }}
        >
          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 30, ease: "linear", repeat: Infinity }}
            className="flex items-center whitespace-nowrap w-max"
          >
            {/* Duplicated for seamless infinite loop */}
            {[...PRACTICE_AREAS, ...PRACTICE_AREAS].map((area, i) => (
              <span
                key={i}
                className="inline-flex items-center gap-5 pr-5"
                style={{
                  fontFamily: "var(--font-garamond)",
                  fontSize: "0.85rem",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: "rgba(237,232,223,0.35)",
                  fontStyle: "italic",
                }}
              >
                {area}
                <span
                  className="inline-block w-px h-3 shrink-0"
                  style={{ backgroundColor: "rgba(196,30,40,0.4)" }}
                />
              </span>
            ))}
          </motion.div>
        </motion.div>

      </div>

      {/* Seamless fade into next section */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32"
        style={{ background: "linear-gradient(to top, #0c0907 0%, transparent 100%)" }}
      />
    </section>
  );
}
