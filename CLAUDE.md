# Clare Facio — Law Firm Website

## Project Overview

Website for **Clare Facio**, a Costa Rican law firm. Single-page landing site with sections for hero, about (lawyers), services, blog preview, YouTube playlist, and contact. Built to be modern, fast, and professional.

**Phase 1 (current):** Landing page only — get design approved by the firm before building dynamic features.
**Phase 2 (post-approval):** Contact form emails, newsletter, blog, custom domain.

---

## Tech Stack

| Layer | Tool |
|---|---|
| Framework | Next.js 16 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS v4 |
| Animations | Framer Motion |
| Icons | Lucide React |
| i18n | next-intl |
| Email (Phase 2) | Resend |
| Blog (Phase 2) | MDX files |
| CMS (optional) | Sanity (if lawyers need a UI) |
| Deploy | Vercel (free Hobby plan) |

---

## Project Structure

```
clarefacio/
├── src/
│   ├── app/
│   │   ├── [locale]/               # i18n routing root
│   │   │   ├── page.tsx            # Main single page
│   │   │   └── blog/               # Phase 2
│   │   │       ├── page.tsx
│   │   │       └── [slug]/page.tsx
│   │   └── api/                    # Phase 2
│   │       ├── contact/route.ts
│   │       └── subscribe/route.ts
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx
│   │   │   └── Footer.tsx
│   │   └── sections/
│   │       ├── Hero.tsx
│   │       ├── WhyCR.tsx           # ¿Por qué Costa Rica?
│   │       ├── About.tsx           # Lawyers section
│   │       ├── Services.tsx
│   │       ├── BlogPreview.tsx
│   │       ├── Visual.tsx          # YouTube playlist
│   │       └── Contact.tsx
│   ├── lib/
│   │   ├── resend.ts               # Phase 2
│   │   └── mdx.ts                  # Phase 2
│   └── messages/
│       ├── es.json                 # Spanish (primary)
│       ├── en.json                 # English
│       └── fr.json                 # French
├── src/
│   └── proxy.ts                    # next-intl i18n routing (Next.js 16: was middleware.ts)
├── content/
│   └── blog/                       # Phase 2 — MDX posts go here
├── public/
│   └── images/                     # Lawyer photos, hero bg, logo
├── CLAUDE.md
└── next.config.ts
```

---

## i18n — Adding or Editing Translations

Translations live in `src/messages/`. Each file is a flat or nested JSON.

**To add a new string:**
1. Add the key to all 3 files (`es.json`, `en.json`, `fr.json`)
2. Use it in components via `const t = useTranslations('SectionName')`

**URL structure:**
- `clarefacio.com/es` → Spanish
- `clarefacio.com/en` → English
- `clarefacio.com/fr` → French
- `clarefacio.com/` → redirects to browser language (default: `es`)

---

## Blog — Adding a Post (Phase 2)

1. Create a file in `content/blog/my-post-slug.mdx`
2. Add frontmatter:
   ```mdx
   ---
   title: "Post Title"
   date: "2025-01-01"
   summary: "Short description"
   ---
   ```
3. Write content in Markdown below the frontmatter
4. Push to GitHub → Vercel auto-deploys

---

## Environment Variables

Create a `.env.local` file (never commit this):

```env
# Phase 2 — Resend email API
RESEND_API_KEY=re_xxxxxxxxxxxx
```

On Vercel, add these under **Project Settings → Environment Variables**.

---

## Deploy Process

1. Push any commit to `main` branch on GitHub
2. Vercel detects the push and auto-builds
3. Live in ~30 seconds at the Vercel URL (or custom domain once configured)

**Preview deploys:** Every branch/PR gets its own preview URL automatically — useful for sharing work-in-progress with the firm before merging.

---

## Domain & DNS (Phase 2)

> **Before touching DNS:** Run `nslookup -type=MX clarefacio.com` to identify the email provider. Do NOT change MX records.

**Steps:**
1. Add custom domain in Vercel dashboard
2. Vercel shows you exactly which DNS records to add (A record or CNAME)
3. Add only those records at your DNS provider
4. MX records stay untouched → email keeps working

---

## Git Commits

Always use **Conventional Commits**:

```
<type>(<scope>): <short description>
```

| Type | When to use |
|---|---|
| `feat` | New feature or section |
| `fix` | Bug fix |
| `style` | CSS/design changes only |
| `refactor` | Code restructure, no behavior change |
| `content` | Text, translations, copy changes |
| `chore` | Config, deps, tooling, non-code |
| `docs` | README, CLAUDE.md, comments |

**Examples:**
```
feat(hero): add animated headline section
fix(i18n): fallback to es when locale is missing
style(navbar): adjust spacing and font weight
content(es): update lawyer bios translations
chore(deps): add framer-motion and lucide-react
docs(claude): add conventional commits rule
```

Scope is optional but recommended — use the section or file name (`hero`, `navbar`, `i18n`, `deps`, etc.).

---

## Design System & Brand Identity

### Visual Philosophy

The site must feel like a **prestige law firm**, not a tech startup. The distinction is intentional in every choice:

- **Typography-led** — let type carry the weight, not icons, cards, or decorations
- **Warm, not cold** — dark backgrounds have warmth (espresso black), text has warmth (parchment)
- **Editorial, not SaaS** — layouts inspired by legal briefs and financial institutions, not dashboards
- **Restrained color** — red is used as a precision instrument, not scattered everywhere

---

### Color Palette

| Token | Value | Use |
|---|---|---|
| `--color-bg` | `#0C0907` | Page background — warm espresso black |
| `--color-accent` | `#C41E28` | Primary accent — Clare Facio crimson |
| `--color-accent-hover` | `#9C1820` | Hover state for red elements |
| `--color-text` | `#EDE8DF` | Body text — warm parchment, not clinical white |
| `--color-muted` | `#7A7268` | Secondary text, descriptions |
| `--color-surface` | `#131008` | Card/surface backgrounds |
| `--color-border` | `rgba(237,232,223,0.07)` | Hairline dividers |
| `--color-brass` | `rgba(196,158,89,0.18)` | Subtle ornamental accents (use sparingly) |

**Do NOT** use pure `#000000` black or pure `#FFFFFF` white — they read as tech/sterile.

---

### Typography

| Font | Variable | Use |
|---|---|---|
| **Cormorant Garamond** | `var(--font-garamond)` | All headings, display text, numbers |
| **Lora** | `var(--font-dm-sans)` | Body text, subtitles, nav links, UI labels |

**Why these fonts:**
- **Cormorant Garamond** has extreme thick/thin stroke contrast — the typographic signature of 19th century legal documents and prestige institutions. Its italic is especially powerful (used for the "Costa Rica" highlight in the hero).
- **Lora** is a warm bookish serif designed for screen reading. It reads like a legal brief, not a startup pitch.

**Key patterns:**
- Headings: Cormorant, `font-light` or `font-medium`, tight letter-spacing (`-0.01em`)
- Section labels/eyebrows: Cormorant italic, all-caps, very wide tracking (`0.35em`), crimson color
- Body/UI text: Lora, regular weight, `0.12–0.2em` tracking when used in all-caps
- Large numbers (01, 02...): Cormorant, very large, low opacity crimson — like a legal brief section marker

**Do NOT use** DM Sans, Inter, Roboto, or any geometric sans-serif — these signal "tech startup".

---

### Red Highlight Technique

The signature visual from Clare Facio's social media — a keyword on a crimson background block:

```tsx
<span
  className="inline italic font-semibold text-white px-4 py-1"
  style={{ backgroundColor: "#c41e28", fontFamily: "var(--font-garamond)" }}
>
  Costa Rica
</span>
```

Use this sparingly — one instance per page at most.

---

### Background Textures

**Hero:** `hero-bg.webp` with multi-layer dark gradient overlay. Keep the image subtle — the photo provides atmosphere, not visual focus.

**WhyCR and interior sections:** CSS crosshatch (legal ledger paper texture) — no stock photos:
```css
background-image:
  linear-gradient(rgba(237,232,223,0.022) 1px, transparent 1px),
  linear-gradient(90deg, rgba(237,232,223,0.022) 1px, transparent 1px);
background-size: 48px 48px;
```
Combine with a radial vignette to blend the edges.

---

### Layout Patterns

- **Section headers:** left-aligned eyebrow label (Cormorant italic, crimson, `tracking-[0.35em]`) → `w-8 h-px` red rule → large Cormorant heading
- **Cards:** editorial numbered (`01`, `02`...) with hairline borders, NOT icon boxes with shadows
- **Dividers:** `1px solid rgba(237,232,223,0.07)` — barely visible hairlines, not heavy lines
- **Ornamental rules:** `w-px` vertical lines with gradient fade (transparent → crimson → transparent) on left edge of sections

---

## Maintenance Notes

- **Content changes** (lawyer bios, services text): edit the relevant component or translation file, push to GitHub
- **Blog posts**: add MDX file, push to GitHub (no deploy needed manually)
- **Lawyer photos**: add to `public/images/`, reference as `/images/filename.jpg`
- **If lawyers want to edit content themselves**: add Sanity CMS (free tier) — ask the developer to set it up
