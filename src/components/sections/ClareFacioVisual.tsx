"use client";

import { useState, useRef } from "react";
import { useTranslations } from "next-intl";
import { motion, useInView } from "framer-motion";
import SectionEyebrow from "@/components/ui/SectionEyebrow";
import { EASE_EDITORIAL } from "@/lib/motion";

// ─── Data ────────────────────────────────────────────────────────────────────
// To add a new video: append an entry here + add its titleKey to all 3 message files.
// Playlist numbers are auto-derived from index — no manual updates needed.

const VIDEOS = [
  { id: "5_cg1YylZNE", titleKey: "video_welcome_title" },
  { id: "4t9G1var2Mw", titleKey: "video_maritime_title" },
  { id: "Vvy7T8bG1ww", titleKey: "video_diligence_title" },
  { id: "LJ6B3XIOrtg", titleKey: "video_deed_title" },
  { id: "6v3kgl-1shs", titleKey: "video_incorporation_title" },
] as const;

// ─── Component ───────────────────────────────────────────────────────────────

export default function ClareFacioVisual() {
  const t = useTranslations("visual");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [activeIndex, setActiveIndex] = useState(0);
  const [autoplay, setAutoplay] = useState(false);

  const eyebrowAnimate = isInView ? { opacity: 1, y: 0 } : {};
  const activeVideo = VIDEOS[activeIndex];
  const embedSrc = `https://www.youtube.com/embed/${activeVideo.id}?rel=0&modestbranding=1${autoplay ? "&autoplay=1" : ""}`;

  function handleSelect(i: number) {
    setActiveIndex(i);
    setAutoplay(true);
  }

  return (
    <section
      id="visual"
      className="relative overflow-hidden"
      style={{ backgroundColor: "#0c0907" }}
    >
      {/* Crosshatch texture */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(237,232,223,0.022) 1px, transparent 1px),
            linear-gradient(90deg, rgba(237,232,223,0.022) 1px, transparent 1px)
          `,
          backgroundSize: "48px 48px",
        }}
      />

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
        <div className="mb-14">
          <SectionEyebrow label={t("eyebrow")} animate={eyebrowAnimate} className="mb-5" />

          <motion.h2
            initial={{ opacity: 0, y: 32 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.15, ease: EASE_EDITORIAL }}
            className="font-light leading-[1.1] mb-4"
            style={{
              fontFamily: "var(--font-garamond)",
              fontSize: "clamp(2rem, 3.6vw, 3.4rem)",
              color: "#ede8df",
              letterSpacing: "-0.01em",
            }}
          >
            {t("title")}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3, ease: EASE_EDITORIAL }}
            style={{
              fontFamily: "var(--font-dm-sans)",
              fontSize: "0.9rem",
              color: "rgba(237,232,223,0.45)",
              lineHeight: "1.75",
              maxWidth: "36rem",
            }}
          >
            {t("subtitle")}
          </motion.p>
        </div>

        {/* ── Playlist + Player ──────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, delay: 0.4, ease: EASE_EDITORIAL }}
          className="flex flex-col lg:flex-row items-stretch"
          style={{ border: "1px solid rgba(237,232,223,0.07)" }}
        >
          {/* ── Playlist ───────────────────────────────────────────────── */}
          <div
            className="lg:w-[38%] flex flex-col"
            style={{ borderRight: "1px solid rgba(237,232,223,0.07)" }}
          >
            {/* Playlist header */}
            <div
              className="flex items-center justify-between px-6 py-4 shrink-0"
              style={{ borderBottom: "1px solid rgba(237,232,223,0.07)" }}
            >
              <span
                className="uppercase tracking-[0.22em]"
                style={{
                  fontFamily: "var(--font-garamond)",
                  fontStyle: "italic",
                  fontSize: "0.75rem",
                  color: "#c41e28",
                }}
              >
                {t("playlist_label")}
              </span>
              <span
                style={{
                  fontFamily: "var(--font-dm-sans)",
                  fontSize: "0.7rem",
                  color: "rgba(237,232,223,0.3)",
                  letterSpacing: "0.08em",
                }}
              >
                {VIDEOS.length} {t("video_count_label")}
              </span>
            </div>

            {/* Playlist items — flex-1 so each fills equal height */}
            <div className="flex flex-col flex-1">
              {VIDEOS.map((video, i) => {
                const isActive = i === activeIndex;
                const num = String(i + 1).padStart(2, "0");

                return (
                  <button
                    key={video.id}
                    onClick={() => handleSelect(i)}
                    className={`relative flex flex-1 items-center gap-5 px-6 py-4 lg:py-0 text-left transition-colors duration-300 cursor-pointer ${
                      isActive
                        ? "bg-[rgba(196,30,40,0.07)]"
                        : "hover:bg-[rgba(237,232,223,0.03)]"
                    }`}
                    style={{
                      borderBottom: i < VIDEOS.length - 1 ? "1px solid rgba(237,232,223,0.05)" : "none",
                      borderLeft: isActive ? "3px solid #c41e28" : "3px solid transparent",
                    }}
                  >
                    {/* Number */}
                    <span
                      className="shrink-0 leading-none transition-colors duration-300"
                      style={{
                        fontFamily: "var(--font-garamond)",
                        fontStyle: "italic",
                        fontSize: "1.35rem",
                        color: isActive ? "rgba(196,30,40,0.9)" : "rgba(196,30,40,0.3)",
                        width: "2rem",
                      }}
                    >
                      {num}
                    </span>

                    {/* Play icon */}
                    <svg
                      className="shrink-0 transition-colors duration-300"
                      width="10"
                      height="10"
                      viewBox="0 0 10 10"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      style={{ color: isActive ? "#c41e28" : "rgba(237,232,223,0.25)" }}
                    >
                      <polygon points="0,0 10,5 0,10" fill="currentColor" />
                    </svg>

                    {/* Title */}
                    <span
                      className="leading-snug transition-colors duration-300"
                      style={{
                        fontFamily: "var(--font-garamond)",
                        fontSize: "clamp(0.95rem, 1.2vw, 1.1rem)",
                        color: isActive ? "#ede8df" : "rgba(237,232,223,0.55)",
                        letterSpacing: "-0.005em",
                      }}
                    >
                      {t(video.titleKey)}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* ── YouTube player ─────────────────────────────────────────── */}
          <div className="lg:w-[62%]">
            <div className="aspect-[4/3] lg:aspect-video w-full h-full">
              <iframe
                key={activeVideo.id}
                src={embedSrc}
                title={t(activeVideo.titleKey)}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
                style={{ display: "block", border: "none" }}
              />
            </div>
          </div>
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
