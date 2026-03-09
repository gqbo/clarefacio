"use client";

import { useState, useEffect } from "react";
import { useLocale } from "next-intl";
import { useRouter, usePathname } from "@/i18n/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { routing } from "@/i18n/routing";

const localeLabels: Record<string, string> = {
  es: "ES",
  en: "EN",
  fr: "FR",
};

const localeFull: Record<string, string> = {
  es: "Español",
  en: "English",
  fr: "Français",
};

export default function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const handler = () => setOpen(false);
    window.addEventListener("click", handler);
    return () => window.removeEventListener("click", handler);
  }, [open]);

  const switchLocale = (newLocale: string) => {
    router.replace(pathname, { locale: newLocale });
    setOpen(false);
  };

  return (
    <div
      className="fixed bottom-6 right-6 z-50"
      onClick={(e) => e.stopPropagation()}
    >
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.96 }}
            transition={{ duration: 0.18, ease: "easeOut" }}
            className="absolute bottom-full right-0 mb-3 w-40 overflow-hidden"
            style={{
              background: "#131008",
              border: "1px solid rgba(237,232,223,0.10)",
              boxShadow: "0 8px 40px rgba(0,0,0,0.55), 0 1px 0 rgba(196,158,89,0.08) inset",
            }}
          >
            {routing.locales.map((loc, i) => (
              <button
                key={loc}
                onClick={() => switchLocale(loc)}
                className="w-full text-left px-4 py-3 flex items-center justify-between transition-colors duration-150 group"
                style={{
                  borderBottom:
                    i < routing.locales.length - 1
                      ? "1px solid rgba(237,232,223,0.06)"
                      : "none",
                  background: loc === locale ? "rgba(196,30,40,0.08)" : "transparent",
                }}
                onMouseEnter={(e) => {
                  if (loc !== locale)
                    (e.currentTarget as HTMLButtonElement).style.background =
                      "rgba(237,232,223,0.04)";
                }}
                onMouseLeave={(e) => {
                  if (loc !== locale)
                    (e.currentTarget as HTMLButtonElement).style.background =
                      "transparent";
                }}
              >
                <span
                  className="text-xs tracking-[0.18em] uppercase font-medium"
                  style={{
                    fontFamily: "var(--font-dm-sans)",
                    color: loc === locale ? "#c41e28" : "rgba(237,232,223,0.55)",
                  }}
                >
                  {localeLabels[loc]}
                </span>
                <span
                  className="text-[11px]"
                  style={{
                    fontFamily: "var(--font-dm-sans)",
                    color:
                      loc === locale
                        ? "rgba(196,30,40,0.6)"
                        : "rgba(237,232,223,0.25)",
                  }}
                >
                  {localeFull[loc]}
                </span>
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Trigger pill */}
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 transition-all duration-200"
        style={{
          background: open ? "#1a1410" : "#131008",
          border: `1px solid ${open ? "rgba(196,30,40,0.4)" : "rgba(237,232,223,0.12)"}`,
          boxShadow: open
            ? "0 0 0 1px rgba(196,30,40,0.15), 0 4px 20px rgba(0,0,0,0.4)"
            : "0 2px 12px rgba(0,0,0,0.35)",
          padding: "8px 14px",
        }}
        aria-label="Cambiar idioma"
      >
        {/* Globe icon — SVG for precision */}
        <svg
          width="13"
          height="13"
          viewBox="0 0 13 13"
          fill="none"
          style={{ opacity: open ? 0.9 : 0.45, transition: "opacity 0.2s" }}
        >
          <circle cx="6.5" cy="6.5" r="5.5" stroke="#EDE8DF" strokeWidth="0.9" />
          <ellipse cx="6.5" cy="6.5" rx="2.2" ry="5.5" stroke="#EDE8DF" strokeWidth="0.9" />
          <line x1="1" y1="6.5" x2="12" y2="6.5" stroke="#EDE8DF" strokeWidth="0.9" />
          <line x1="1.8" y1="3.8" x2="11.2" y2="3.8" stroke="#EDE8DF" strokeWidth="0.7" />
          <line x1="1.8" y1="9.2" x2="11.2" y2="9.2" stroke="#EDE8DF" strokeWidth="0.7" />
        </svg>
        <span
          className="text-xs tracking-[0.18em] uppercase font-medium"
          style={{
            fontFamily: "var(--font-dm-sans)",
            color: open ? "#EDE8DF" : "rgba(237,232,223,0.55)",
            transition: "color 0.2s",
          }}
        >
          {localeLabels[locale]}
        </span>
        <svg
          width="8"
          height="8"
          viewBox="0 0 8 8"
          fill="none"
          style={{
            transform: open ? "rotate(180deg)" : "rotate(0deg)",
            transition: "transform 0.2s",
            opacity: 0.4,
          }}
        >
          <path d="M1 2.5L4 5.5L7 2.5" stroke="#EDE8DF" strokeWidth="1.2" strokeLinecap="round" />
        </svg>
      </button>
    </div>
  );
}
