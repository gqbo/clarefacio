import { routing } from "@/i18n/routing";
import Navbar from "@/components/layout/Navbar";
import LanguageSwitcher from "@/components/layout/LanguageSwitcher";
import Hero from "@/components/sections/Hero";
import WhyCR from "@/components/sections/WhyCR";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default function HomePage() {
  return (
    <main>
      <Navbar />
      <Hero />
      <WhyCR />
      <LanguageSwitcher />
    </main>
  );
}
