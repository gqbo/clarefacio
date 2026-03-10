# Clare Facio — Law Firm Website

## Project Overview

Costa Rican law firm landing page. Phase 1: static single-page site pending client approval. Phase 2 (post-approval): contact form, newsletter, blog, custom domain.

## Tech Stack

| Layer | Tool |
|---|---|
| Framework | Next.js 16 (App Router) |
| Language | TypeScript (strict) |
| Styling | Tailwind CSS v4 |
| Animations | Framer Motion |
| i18n | next-intl |
| Deploy | Vercel (auto-deploy on push to `main`) |

## Project Structure

```
src/
├── app/[locale]/page.tsx       # Main entry point
├── components/
│   ├── layout/                 # Navbar, Footer
│   ├── sections/               # Hero, WhyCR, About, Services, Visual, Contact
│   └── ui/                     # Shared components (SectionEyebrow, etc.)
├── lib/motion.ts               # fadeUp(), EASE_EDITORIAL
└── messages/                   # es.json (primary), en.json, fr.json
public/images/                  # Lawyer photos, hero-bg.webp, logo
src/proxy.ts                    # next-intl routing (replaces middleware.ts in Next.js 16)
```

## Commands

- **Dev:** `npm run dev`
- **Build:** `npm run build`
- **Lint:** `npm run lint`

## Git Commits

Use Conventional Commits: `<type>(<scope>): <description>`

| Type | Use |
|---|---|
| `feat` | New feature or section |
| `fix` | Bug fix |
| `style` | CSS/design only |
| `refactor` | Code restructure, no behavior change |
| `content` | Text, translations, copy |
| `chore` | Config, deps, tooling |
| `docs` | README, CLAUDE.md |

Scope = section or file name (`hero`, `navbar`, `i18n`, etc.).

## Engineering Rules

### Components

- **Never rewrite `SectionEyebrow`** — import from `src/components/ui/`. It's the crimson rule + italic label used at every section top.
- **Never hardcode easing** — use `EASE_EDITORIAL` from `src/lib/motion.ts` (`[0.16, 1, 0.3, 1]`).
- **Never hardcode animation variants** — use `fadeUp(delay)` from `src/lib/motion.ts`.
- **New section**: model after `About.tsx`. Use `SectionEyebrow` + `fadeUp` + `EASE_EDITORIAL`.

### TypeScript

- **Never use `as any`.**
- **Use `as const` on static data arrays** — lets TypeScript infer literal types, no manual unions needed:
  ```ts
  const LAWYERS = [{ nameKey: "lawyer1_name" }] as const; // Good
  type LawyerKey = "lawyer1_name" | ...;                  // Bad — breaks on every addition
  ```

### React / Next.js

- **`"use client"` only when needed** — hooks, Framer Motion, `useTranslations` require it.
- **Hover states via Tailwind**, never inline `onMouseEnter/Leave`:
  ```tsx
  className="bg-[#c41e28] hover:bg-[#9c1820] transition-colors duration-300" // Good
  onMouseEnter={(e) => ...}                                                    // Bad
  ```
- **`next/image` with `fill` + `sizes`** for all photos — never `<img>`.

### i18n

- Add every new string to all 3 files: `es.json`, `en.json`, `fr.json`.
- Consume with `const t = useTranslations('SectionName')`.
- New lawyer: add entry to `LAWYERS` in `About.tsx` + keys to all 3 JSON files. No TS changes needed.

## Design System

### Palette

| Token | Value | Use |
|---|---|---|
| `--color-bg` | `#0C0907` | Page background |
| `--color-accent` | `#C41E28` | Crimson accent |
| `--color-accent-hover` | `#9C1820` | Hover state |
| `--color-text` | `#EDE8DF` | Body text |
| `--color-muted` | `#7A7268` | Secondary text |
| `--color-surface` | `#131008` | Card backgrounds |
| `--color-border` | `rgba(237,232,223,0.07)` | Hairline dividers |
| `--color-brass` | `rgba(196,158,89,0.18)` | Ornamental accents (sparingly) |

**Never use** `#000000` or `#FFFFFF` — they read as tech/sterile.

### Typography

| Font | Variable | Use |
|---|---|---|
| Cormorant Garamond | `var(--font-garamond)` | All headings, display, numbers |
| Lora | `var(--font-dm-sans)` | Body, subtitles, nav, labels |

- Headings: Cormorant, `font-light`/`font-medium`, `tracking-[-0.01em]`
- Eyebrows: Cormorant italic, all-caps, `tracking-[0.35em]`, crimson
- Section numbers (`01`, `02`...): Cormorant, large, low-opacity crimson
- **Never use** DM Sans, Inter, Roboto, or any geometric sans-serif.

### Layout Patterns

- **Section header**: eyebrow label → `w-8 h-px` red rule → large Cormorant heading (all left-aligned)
- **Cards**: numbered `01`, `02`... with hairline borders — no icon boxes with shadows
- **Dividers**: `1px solid rgba(237,232,223,0.07)` hairlines only
- **Background (interior sections)**: CSS crosshatch + radial vignette — no stock photos:
  ```css
  background-image:
    linear-gradient(rgba(237,232,223,0.022) 1px, transparent 1px),
    linear-gradient(90deg, rgba(237,232,223,0.022) 1px, transparent 1px);
  background-size: 48px 48px;
  ```

### Red Highlight (use once per page max)

```tsx
<span
  className="inline italic font-semibold text-white px-4 py-1"
  style={{ backgroundColor: "#c41e28", fontFamily: "var(--font-garamond)" }}
>
  Costa Rica
</span>
```

## Gotchas

- `src/proxy.ts` handles i18n routing (not `middleware.ts`) — Next.js 16 change.
- Never commit `.env.local`. Phase 2 will need `RESEND_API_KEY` in Vercel env vars.
- Before any DNS changes: run `nslookup -type=MX clarefacio.com` — never touch MX records.
