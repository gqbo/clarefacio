import { routing } from "@/i18n/routing";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default function HomePage() {
  return (
    <main className="flex min-h-screen items-center justify-center">
      <p className="text-lg font-medium">Clare Facio — coming soon</p>
    </main>
  );
}
