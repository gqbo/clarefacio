"use client";

import { useTranslations, useLocale } from "next-intl";

// ─── Social icon SVGs ────────────────────────────────────────────────────────

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width="17" height="17" aria-hidden="true">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" width="17" height="17" aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

function YouTubeIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width="17" height="17" aria-hidden="true">
      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
      <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="var(--color-bg)" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width="17" height="17" aria-hidden="true">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" width="17" height="17" aria-hidden="true">
      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" width="17" height="17" aria-hidden="true">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 8.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

// ─── Column header ────────────────────────────────────────────────────────────

function ColLabel({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <p
      className={`mb-6 uppercase tracking-[0.28em] italic ${className}`}
      style={{
        fontFamily: "var(--font-garamond)",
        color: "rgba(237,232,223,0.38)",
        fontSize: "0.65rem",
      }}
    >
      {children}
    </p>
  );
}

// ─── Main component ───────────────────────────────────────────────────────────

export default function Footer() {
  const t = useTranslations("footer");
  const ts = useTranslations("services");
  const tn = useTranslations("nav");
  const locale = useLocale();

  const navLinks = [
    { label: tn("home"),    href: `/${locale}` },
    { label: t("whycr"),    href: "#costarica" },
    { label: tn("about"),   href: "#nosotros" },
    { label: tn("visual"),  href: "#visual" },
    { label: tn("contact"), href: "#contacto" },
  ] as const;

  const services = [
    ts("contratos_title"),
    ts("familia_title"),
    ts("penal_title"),
    ts("alertas_title"),
    ts("nombre_title"),
    ts("inmobiliario_title"),
  ] as const;

  const socials = [
    {
      label: "Facebook",
      href: "https://www.facebook.com/clarefacio",
      icon: <FacebookIcon />,
    },
    {
      label: "Instagram",
      href: "https://www.instagram.com/clarefaciolegal/",
      icon: <InstagramIcon />,
    },
    {
      label: "YouTube",
      href: "https://www.youtube.com/@clarefaciovisual3577",
      icon: <YouTubeIcon />,
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/company/clarefacio/",
      icon: <LinkedInIcon />,
    },
    {
      label: "WhatsApp",
      href: "https://api.whatsapp.com/send/?phone=50640520600&text&type=phone_number&app_absent=0",
      icon: <WhatsAppIcon />,
    },
    {
      label: t("call_label"),
      href: "tel:+50640520600",
      icon: <PhoneIcon />,
    },
  ] as const;

  return (
    <footer
      style={{
        background: "#0e0b08",
        backgroundImage:
          "linear-gradient(rgba(237,232,223,0.016) 1px, transparent 1px), " +
          "linear-gradient(90deg, rgba(237,232,223,0.016) 1px, transparent 1px)",
        backgroundSize: "48px 48px",
      }}
    >
      {/* Top gradient rule — marks the visual break from the Contact section */}
      <div
        className="w-full"
        style={{
          height: "1px",
          background:
            "linear-gradient(90deg, transparent 0%, rgba(196,30,40,0.55) 25%, rgba(196,158,89,0.25) 65%, transparent 100%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* ── Main grid ─────────────────────────────────────────────────────── */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10 lg:gap-10 pt-12 pb-12 items-start">

          {/* Col 1 — Brand + contact info · mobile: row 1 col 1 */}
          <div className="order-1 lg:order-1">
            <ColLabel className="mb-5">{t("contact_title")}</ColLabel>

            {/* Contact details stack */}
            <div className="space-y-3">
              {/* Hours */}
              <div>
                <p
                  className="mb-0.5 uppercase tracking-[0.18em]"
                  style={{
                    fontFamily: "var(--font-dm-sans)",
                    color: "rgba(196,30,40,0.65)",
                    fontSize: "0.6rem",
                  }}
                >
                  {t("hours_label")}
                </p>
                <p
                  style={{
                    fontFamily: "var(--font-dm-sans)",
                    color: "#ede8df",
                    fontSize: "0.75rem",
                  }}
                >
                  {t("hours")}
                </p>
              </div>

              {/* Email */}
              <div>
                <p
                  className="mb-0.5 uppercase tracking-[0.18em]"
                  style={{
                    fontFamily: "var(--font-dm-sans)",
                    color: "rgba(196,30,40,0.65)",
                    fontSize: "0.6rem",
                  }}
                >
                  {t("email_label")}
                </p>
                <a
                  href="mailto:info@clarefacio.com"
                  className="hover:text-[#c41e28] transition-colors duration-300 break-all"
                  style={{
                    fontFamily: "var(--font-dm-sans)",
                    color: "#7a7268",
                    fontSize: "0.75rem",
                  }}
                >
                  info@clarefacio.com
                </a>
              </div>

              {/* Phone */}
              <div>
                <p
                  className="mb-0.5 uppercase tracking-[0.18em]"
                  style={{
                    fontFamily: "var(--font-dm-sans)",
                    color: "rgba(196,30,40,0.65)",
                    fontSize: "0.6rem",
                  }}
                >
                  {t("phone_label")}
                </p>
                <a
                  href="tel:+50640520600"
                  className="hover:text-[#c41e28] transition-colors duration-300"
                  style={{
                    fontFamily: "var(--font-dm-sans)",
                    color: "#7a7268",
                    fontSize: "0.75rem",
                  }}
                >
                  +506 4052 0600
                </a>
              </div>
            </div>
          </div>

          {/* Col 4 — Social · mobile: row 1 col 2 */}
          <div className="order-2 lg:order-4">
            <ColLabel className="mb-5">{t("social_title")}</ColLabel>
            <div className="grid grid-cols-2 gap-2">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target={s.href.startsWith("tel:") ? undefined : "_blank"}
                  rel={s.href.startsWith("tel:") ? undefined : "noopener noreferrer"}
                  aria-label={s.label}
                  className="w-10 h-10 flex items-center justify-center text-[#7a7268] hover:text-[#c41e28] hover:border-[rgba(196,30,40,0.4)] transition-colors duration-300"
                  style={{ border: "1px solid rgba(237,232,223,0.09)" }}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Col 2 — Navigation · mobile: row 2 col 1 */}
          <div className="order-3 lg:order-2">
            <ColLabel>{t("nav_title")}</ColLabel>
            <ul className="space-y-[0.75rem]">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="hover:text-[#ede8df] transition-colors duration-300"
                    style={{
                      fontFamily: "var(--font-dm-sans)",
                      color: "#7a7268",
                      fontSize: "0.8rem",
                    }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 — Services · mobile: row 2 col 2 */}
          <div className="order-4 lg:order-3">
            <ColLabel>{t("services_title")}</ColLabel>
            <ul className="space-y-[0.75rem]">
              {services.map((svc) => (
                <li key={svc}>
                  <span
                    className="cursor-default"
                    style={{
                      fontFamily: "var(--font-dm-sans)",
                      color: "#7a7268",
                      fontSize: "0.8rem",
                    }}
                  >
                    {svc}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* ── Bottom bar ────────────────────────────────────────────────────── */}
        <div
          className="flex flex-col sm:flex-row items-center justify-between gap-4 py-7"
          style={{ borderTop: "1px solid rgba(237,232,223,0.07)" }}
        >
          <p
            style={{
              fontFamily: "var(--font-dm-sans)",
              color: "rgba(122,114,104,0.6)",
              fontSize: "0.69rem",
              letterSpacing: "0.04em",
            }}
          >
            © {new Date().getFullYear()} Clare Facio Legal. {t("rights")}
          </p>

          <p
            className="italic"
            style={{
              fontFamily: "var(--font-garamond)",
              color: "rgba(237,232,223,0.18)",
              fontSize: "0.75rem",
              letterSpacing: "0.08em",
            }}
          >
            San José · Tamarindo · Cóbano
          </p>
        </div>
      </div>
    </footer>
  );
}
