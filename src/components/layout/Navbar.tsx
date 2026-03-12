"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { useTranslations, useLocale } from "next-intl";
import { useRouter, usePathname } from "@/i18n/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";

const localeLabels: Record<string, string> = { es: "ES", en: "EN", fr: "FR" };

export default function Navbar() {
  const t = useTranslations("nav");
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { key: "home", href: "#" },
    { key: "about", href: "#nosotros" },
    { key: "services", href: "#servicios" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-500 ${
        scrolled
          ? "bg-[#0c0907]/95 backdrop-blur-sm border-b border-[rgba(237,232,223,0.07)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href={`/${locale}`} className="shrink-0">
            <Image
              src="/images/logo.png"
              alt="Clare Facio Legal"
              width={120}
              height={56}
              className="h-11 w-auto object-contain"
              priority
            />
          </a>

          {/* Desktop Nav Links — absolutely centered on the page */}
          <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.key}
                href={link.href}
                className="text-xs tracking-[0.15em] uppercase font-medium text-[#f5f0eb]/60 hover:text-[#f5f0eb] transition-colors duration-200"
                style={{ fontFamily: "var(--font-dm-sans)" }}
              >
                {t(link.key)}
              </a>
            ))}
          </div>

          {/* Right: CTA only */}
          <div className="hidden lg:flex items-center">
            <a
              href="#contacto"
              className="group inline-flex items-center gap-3 px-9 py-4 text-white bg-[#c41e28] hover:bg-[#9c1820] transition-colors duration-300"
              style={{
                fontFamily: "var(--font-dm-sans)",
                fontSize: "0.7rem",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
              }}
            >
              {t("contact")}
              <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform duration-200" />
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden text-[#f5f0eb]/70 hover:text-[#f5f0eb] transition-colors"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden bg-[#0c0907] border-t border-[rgba(237,232,223,0.07)] overflow-hidden"
          >
            <div className="px-6 py-6 flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.key}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-xs tracking-[0.15em] uppercase font-medium text-[#f5f0eb]/60 hover:text-[#f5f0eb] transition-colors py-3 border-b border-white/5"
                  style={{ fontFamily: "var(--font-dm-sans)" }}
                >
                  {t(link.key)}
                </a>
              ))}

              <a
                href="#contacto"
                onClick={() => setMobileOpen(false)}
                className="group mt-4 inline-flex items-center justify-center gap-3 px-5 py-4 text-xs tracking-[0.2em] uppercase font-medium bg-[#c41e28] text-white hover:bg-[#9c1820] transition-colors"
                style={{ fontFamily: "var(--font-dm-sans)" }}
              >
                {t("contact")}
                <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform duration-200" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
