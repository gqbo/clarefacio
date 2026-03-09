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

## Maintenance Notes

- **Content changes** (lawyer bios, services text): edit the relevant component or translation file, push to GitHub
- **Blog posts**: add MDX file, push to GitHub (no deploy needed manually)
- **Lawyer photos**: add to `public/images/`, reference as `/images/filename.jpg`
- **If lawyers want to edit content themselves**: add Sanity CMS (free tier) — ask the developer to set it up
