"use client";

import { useState, useRef } from "react";
import { useTranslations } from "next-intl";
import { motion, useInView } from "framer-motion";
import SectionEyebrow from "@/components/ui/SectionEyebrow";
import { EASE_EDITORIAL } from "@/lib/motion";
import { CARD_BG } from "@/lib/tokens";

// ─── Data ────────────────────────────────────────────────────────────────────

const OFFICES = [
  {
    key: "sanjose",
    labelKey: "office_sanjose",
    embedUrl:
      "https://maps.google.com/maps?q=Clare+Facio+Abogados+San+Jose+Costa+Rica&output=embed&z=15",
  },
  {
    key: "tamarindo",
    labelKey: "office_tamarindo",
    embedUrl:
      "https://maps.google.com/maps?q=Clare+Facio+Abogados+Tamarindo+Guanacaste+Costa+Rica&output=embed&z=14",
  },
  {
    key: "cobano",
    labelKey: "office_cobano",
    embedUrl:
      "https://maps.google.com/maps?q=Clare+Facio+Abogados+Cobano+Puntarenas+Costa+Rica&output=embed&z=14",
  },
] as const;

const SERVICE_KEYS = [
  "service_comercial",
  "service_inmobiliario",
  "service_tributario",
  "service_intelectual",
  "service_publico",
  "service_penal",
  "service_trabajo",
  "service_administrativo",
  "service_familia",
  "service_contabilidad",
] as const;

// ─── Styles ───────────────────────────────────────────────────────────────────

// Hoisted: reused across multiple motion.* elements — avoids new object per render
const ANIMATE_IN = { opacity: 1, y: 0 } as const;

// Shared by all three SVG icons
const ICON_STYLE: React.CSSProperties = {
  color: "#c41e28",
  flexShrink: 0,
  marginTop: "2px",
};

// Base inline styles for form inputs (border/outline handled via Tailwind focus: classes)
const inputStyle: React.CSSProperties = {
  background: "rgba(19,16,8,0.85)",
  color: "#ede8df",
  fontFamily: "var(--font-dm-sans)",
  fontSize: "0.875rem",
  padding: "13px 16px",
  borderRadius: "1px",
};

// Tailwind class applied to all form fields — handles border, focus ring, transition
const INPUT_CLASS =
  "w-full border border-[rgba(237,232,223,0.10)] focus:border-[rgba(196,30,40,0.6)] outline-none transition-colors duration-200";

const labelStyle: React.CSSProperties = {
  display: "block",
  fontFamily: "var(--font-dm-sans)",
  fontSize: "0.7rem",
  letterSpacing: "0.14em",
  textTransform: "uppercase",
  color: "rgba(237,232,223,0.45)",
  marginBottom: "8px",
};

const rowLabelStyle: React.CSSProperties = {
  fontFamily: "var(--font-dm-sans)",
  fontSize: "0.68rem",
  letterSpacing: "0.14em",
  textTransform: "uppercase",
  color: "rgba(237,232,223,0.35)",
  marginBottom: "4px",
};

const rowValueStyle: React.CSSProperties = {
  fontFamily: "var(--font-dm-sans)",
  fontSize: "0.9rem",
  color: "rgba(237,232,223,0.85)",
};

// ─── ContactRow ───────────────────────────────────────────────────────────────

function ContactRow({
  icon,
  label,
  value,
  href,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href?: string;
}) {
  const inner = (
    <>
      {icon}
      <div>
        <p style={rowLabelStyle}>{label}</p>
        <p
          className={
            href ? "group-hover:text-[#c41e28] transition-colors duration-200" : ""
          }
          style={rowValueStyle}
        >
          {value}
        </p>
      </div>
    </>
  );

  return href ? (
    <a href={href} className="flex items-start gap-4 group">
      {inner}
    </a>
  ) : (
    <div className="flex items-start gap-4">{inner}</div>
  );
}

// ─── Component ───────────────────────────────────────────────────────────────

export default function Contact() {
  const t = useTranslations("contact");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  // String key instead of index — more semantic and resilient to array reordering
  const [activeOffice, setActiveOffice] = useState<(typeof OFFICES)[number]["key"]>(OFFICES[0].key);

  const eyebrowAnimate = isInView ? ANIMATE_IN : {};

  return (
    <section
      id="contacto"
      className="relative overflow-hidden"
      style={{ backgroundColor: "#0c0907" }}
    >
      {/* Top entry gradient */}
      <div
        className="absolute top-0 left-0 right-0 h-32 pointer-events-none"
        style={{
          background: "linear-gradient(to bottom, #0c0907 0%, transparent 100%)",
        }}
      />

      {/* Right ornamental vertical rule */}
      <div
        className="absolute right-0 top-1/4 bottom-1/4 w-px pointer-events-none"
        style={{
          background:
            "linear-gradient(to bottom, transparent, rgba(196,30,40,0.4), transparent)",
        }}
      />

      {/* Content */}
      <div
        ref={ref}
        className="relative z-10 w-full max-w-7xl mx-auto px-8 lg:px-14 pt-20 pb-24"
      >
        {/* ── TOP: Header + Info | Form ─────────────────────────────────── */}
        <div className="flex flex-col lg:grid lg:grid-cols-5 gap-10 lg:gap-14 mb-14">

          {/* LEFT: Section header + contact info */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? ANIMATE_IN : {}}
            transition={{ duration: 0.8, delay: 0.15, ease: EASE_EDITORIAL }}
            className="lg:col-span-2 flex flex-col gap-8"
          >
            {/* Section header */}
            <div>
              <SectionEyebrow
                label={t("eyebrow")}
                animate={eyebrowAnimate}
                className="mb-5"
              />

              <motion.h2
                initial={{ opacity: 0, y: 32 }}
                animate={isInView ? ANIMATE_IN : {}}
                transition={{ duration: 0.9, delay: 0.2, ease: EASE_EDITORIAL }}
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
                initial={{ opacity: 0, y: 16 }}
                animate={isInView ? ANIMATE_IN : {}}
                transition={{ duration: 0.8, delay: 0.32, ease: EASE_EDITORIAL }}
                style={{
                  fontFamily: "var(--font-dm-sans)",
                  fontSize: "0.9rem",
                  color: "rgba(237,232,223,0.5)",
                  lineHeight: "1.7",
                }}
              >
                {t("subtitle")}
              </motion.p>
            </div>

            {/* Contact info card */}
            <div
              style={{
                backgroundColor: CARD_BG,
                border: "1px solid rgba(237,232,223,0.07)",
                padding: "28px",
              }}
            >
              <p
                className="mb-6"
                style={{
                  fontFamily: "var(--font-dm-sans)",
                  fontSize: "0.68rem",
                  letterSpacing: "0.16em",
                  textTransform: "uppercase",
                  color: "rgba(237,232,223,0.3)",
                }}
              >
                {t("info_title")}
              </p>

              <ContactRow
                icon={<PhoneIcon />}
                label={t("phone_label")}
                value="+506 4052 0600"
                href="tel:+50640520600"
              />
              <div style={{ borderTop: "1px solid rgba(237,232,223,0.06)", margin: "20px 0" }} />
              <ContactRow
                icon={<EmailIcon />}
                label={t("email")}
                value="info@clarefacio.com"
                href="mailto:info@clarefacio.com"
              />
              <div style={{ borderTop: "1px solid rgba(237,232,223,0.06)", margin: "20px 0" }} />
              <ContactRow
                icon={<ClockIcon />}
                label={t("hours_label")}
                value={t("hours_value")}
              />
            </div>
          </motion.div>

          {/* RIGHT: Form */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? ANIMATE_IN : {}}
            transition={{ duration: 0.8, delay: 0.35, ease: EASE_EDITORIAL }}
            className="lg:col-span-3"
          >
            <form
              onSubmit={(e) => e.preventDefault()}
              style={{
                backgroundColor: CARD_BG,
                border: "1px solid rgba(237,232,223,0.07)",
                padding: "36px 36px 40px",
              }}
            >
              {/* Name + Phone */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
                <div>
                  <label style={labelStyle}>{t("name")}</label>
                  <input
                    type="text"
                    name="name"
                    placeholder={t("name_placeholder")}
                    className={INPUT_CLASS}
                    style={inputStyle}
                  />
                </div>
                <div>
                  <label style={labelStyle}>{t("phone_label")}</label>
                  <input
                    type="tel"
                    name="phone"
                    placeholder={t("phone_placeholder")}
                    className={INPUT_CLASS}
                    style={inputStyle}
                  />
                </div>
              </div>

              {/* Email */}
              <div className="mb-5">
                <label style={labelStyle}>{t("email")}</label>
                <input
                  type="email"
                  name="email"
                  placeholder={t("email_placeholder")}
                  className={INPUT_CLASS}
                  style={inputStyle}
                />
              </div>

              {/* Service */}
              <div className="mb-5">
                <label style={labelStyle}>{t("service_label")}</label>
                <div className="relative">
                  <select
                    name="service"
                    defaultValue=""
                    className={INPUT_CLASS}
                    style={{
                      ...inputStyle,
                      appearance: "none",
                      cursor: "pointer",
                      paddingRight: "40px",
                    }}
                  >
                    <option value="" disabled style={{ color: "#7a7268" }}>
                      {t("service_placeholder")}
                    </option>
                    {SERVICE_KEYS.map((key) => (
                      <option
                        key={key}
                        value={key}
                        style={{ backgroundColor: "#131008", color: "#ede8df" }}
                      >
                        {t(key)}
                      </option>
                    ))}
                  </select>
                  <div
                    className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2"
                    style={{ color: "rgba(237,232,223,0.35)" }}
                  >
                    <svg width="12" height="8" viewBox="0 0 12 8" fill="none">
                      <path
                        d="M1 1L6 7L11 1"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Message */}
              <div className="mb-8">
                <label style={labelStyle}>{t("message")}</label>
                <textarea
                  name="message"
                  rows={5}
                  placeholder={t("message_placeholder")}
                  className={INPUT_CLASS}
                  style={{ ...inputStyle, resize: "vertical", minHeight: "120px" }}
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full py-4 text-white transition-colors duration-300 bg-[#c41e28] hover:bg-[#9c1820] cursor-pointer"
                style={{
                  fontFamily: "var(--font-garamond)",
                  fontSize: "0.9rem",
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  border: "none",
                }}
              >
                {t("send")}
              </button>
            </form>
          </motion.div>
        </div>

        {/* ── BOTTOM: Office map (full width) ───────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? ANIMATE_IN : {}}
          transition={{ duration: 0.8, delay: 0.5, ease: EASE_EDITORIAL }}
        >
          {/* Tabs */}
          <div
            className="flex"
            style={{ borderBottom: "1px solid rgba(237,232,223,0.08)" }}
          >
            {OFFICES.map(({ key, labelKey }) => (
              <button
                key={key}
                onClick={() => setActiveOffice(key)}
                className="px-8 py-3 transition-colors duration-200 cursor-pointer"
                style={{
                  fontFamily: "var(--font-dm-sans)",
                  fontSize: "0.72rem",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: activeOffice === key ? "#ede8df" : "rgba(237,232,223,0.38)",
                  background: "transparent",
                  border: "none",
                  borderBottom:
                    activeOffice === key
                      ? "2px solid #c41e28"
                      : "2px solid transparent",
                  marginBottom: "-1px",
                }}
              >
                {t(labelKey)}
              </button>
            ))}
          </div>

          {/* Maps — all preloaded with eager, toggled via visibility */}
          <div
            className="relative overflow-hidden"
            style={{
              border: "1px solid rgba(237,232,223,0.07)",
              borderTop: "none",
              height: "380px",
            }}
          >
            {OFFICES.map(({ key, embedUrl, labelKey }) => (
              <iframe
                key={key}
                src={embedUrl}
                width="100%"
                height="100%"
                style={{
                  border: 0,
                  position: "absolute",
                  inset: 0,
                  opacity: activeOffice === key ? 1 : 0,
                  pointerEvents: activeOffice === key ? "auto" : "none",
                  transition: "opacity 0.25s ease",
                  filter: "grayscale(25%) contrast(1.05) brightness(0.88)",
                }}
                loading="eager"
                referrerPolicy="no-referrer-when-downgrade"
                title={t(labelKey)}
              />
            ))}
          </div>
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none"
        style={{
          background: "linear-gradient(to top, #0c0907 0%, transparent 100%)",
        }}
      />
    </section>
  );
}

// ─── Icons ────────────────────────────────────────────────────────────────────

function PhoneIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" style={ICON_STYLE}>
      <path
        d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1V20a1 1 0 01-1 1C10.01 21 3 13.99 3 5a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.46.57 3.58a1 1 0 01-.25 1.01l-2.2 2.2z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function EmailIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" style={ICON_STYLE}>
      <path
        d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <polyline
        points="22,6 12,13 2,6"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" style={ICON_STYLE}>
      <circle
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <polyline
        points="12,6 12,12 16,14"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
