# Español Sin Fronteras — Architecture Guide

> Free educational platform · React 18 + Vite + TypeScript + Tailwind CSS  
> Live at: **https://espanolsinfronteras.org**

---

## Stack

| Layer       | Technology                          |
|-------------|-------------------------------------|
| Framework   | React 18 + Vite 5 (SWC)             |
| Language    | TypeScript 5 (strict-ish mode)      |
| Styling     | Tailwind CSS 3 + custom design system |
| Components  | shadcn/ui (Radix UI primitives)     |
| Routing     | React Router 6                      |
| State       | React Context (`LanguageContext`)   |
| Data        | Static JSON in `src/data/courses.ts`|
| Hosting     | GitHub Pages (custom domain)        |
| CI/CD       | GitHub Actions → deploy to Pages    |

---

## Directory Structure

```
espanolsinfronteras.github.io/
├── public/                     # Static assets (copied to dist/ by Vite)
│   ├── content/                # 150+ course chapter HTML files
│   ├── 404.html                # GitHub Pages SPA routing redirect
│   ├── robots.txt              # Crawler directives
│   ├── sitemap.xml             # XML sitemap (9 routes)
│   ├── site.webmanifest        # PWA manifest
│   ├── CNAME                   # Custom domain
│   ├── esf-logo.png            # Brand logo (used by nav/footer)
│   ├── owl-logo.png            # Owl mascot (used by hero, og:image)
│   └── llms.txt                # LLM/AI citation instructions
│
├── src/                        # All application source code
│   ├── assets/                 # (reserved for processed assets)
│   ├── components/
│   │   ├── ui/                 # shadcn/ui primitive components (48 files)
│   │   ├── layout/
│   │   │   └── Layout.tsx      # Nav + Footer wrapper
│   │   └── NavLink.tsx         # Active-aware router NavLink
│   ├── context/
│   │   └── LanguageContext.tsx # ES/EN language state (no prop drilling)
│   ├── data/
│   │   └── courses.ts          # All course/chapter/FAQ/testimonial data
│   ├── hooks/
│   │   ├── use-mobile.tsx      # Responsive breakpoint hook
│   │   └── use-toast.ts        # Toast notification hook
│   ├── lib/
│   │   └── utils.ts            # cn() Tailwind class merger
│   ├── pages/
│   │   ├── HomePage.tsx        # Full homepage (8 sections, inline components)
│   │   ├── CoursePage.tsx      # Dynamic course detail page
│   │   └── NotFound.tsx        # 404 page
│   ├── test/
│   │   ├── setup.ts            # Vitest setup
│   │   └── example.test.ts     # Example test
│   ├── types/
│   │   └── index.ts            # Re-exported types
│   ├── App.tsx                 # Root app with providers
│   ├── index.css               # Design system + global styles
│   ├── main.tsx                # React DOM entry point
│   └── vite-env.d.ts           # Vite type declarations
│
├── .github/
│   └── workflows/
│       └── deploy.yml          # CI: build → deploy to GitHub Pages
│
├── index.html                  # HTML shell: SEO meta, JSON-LD, GA4
├── vite.config.ts              # Vite: alias @→src/, chunk splitting
├── tailwind.config.ts          # Tailwind: design tokens, content paths
├── tsconfig.json               # TypeScript project references
├── tsconfig.app.json           # App TypeScript config
├── components.json             # shadcn/ui registry config
└── package.json                # Dependencies + scripts
```

---

## Key Architectural Decisions

### Language Switching
Language state lives in `LanguageContext` (no prop drilling). Components call
`const { lang, toggleLang } = useLanguage()`. Toggle is rendered in the nav.

### Routing
React Router 6 with path-based routes:
- `/`               → `HomePage`
- `/curso/:slug`    → `CoursePage` (slug matches `courses[].slug`)
- `*`               → `NotFound`

GitHub Pages SPA routing: `public/404.html` redirects unknown paths via query
param; `index.html` restores the path before React Router initialises.

### Data Layer
All content is in `src/data/courses.ts`. No API calls, no database.
Course chapter HTML files live in `public/content/` (served as static files).

### Course Chapter Links
Local chapter hrefs use `/content/filename.html`.
Google Drive hrefs (`https://...`) are detected by `isExternal()` and opened in
a new tab. The `getChapterHref()` helper in `CoursePage.tsx` handles encoding.

### Design System
Defined in `src/index.css` with Tailwind `@layer components`.
Key custom classes: `.btn-primary`, `.card-course`, `.chapter-card`,
`.section-eyebrow`, `.container-page`, `.section-padding`, `.hero-root`.
CSS custom properties (HSL tokens) defined in `:root` for theming.

---

## Common Commands

```bash
npm run dev          # Start dev server on http://localhost:8080
npm run build        # Production build → dist/
npm run preview      # Preview production build locally
npm run lint         # ESLint
npm run type-check   # TypeScript type checking (no emit)
npm test             # Vitest unit tests
npm run test:e2e     # Playwright end-to-end tests
```

---

## Adding a New Course

1. Add an entry to the `courses` array in `src/data/courses.ts`
2. Choose a unique `slug` (e.g. `"historia"`)
3. Set `colorClass` to one of: `"blue" | "green" | "teal" | "violet" | "amber"`
4. Use a valid `lucide-react` icon name for `icon`
5. Place chapter HTML files in `public/content/` and set hrefs accordingly
6. Add the new course URL to `public/sitemap.xml`
7. Add a `Course` schema entry to the JSON-LD in `index.html`

---

## SEO Checklist

- [x] JSON-LD: EducationalOrganization, WebSite, WebPage, FAQPage, Course×9
- [x] Open Graph + Twitter Card meta tags
- [x] Canonical URL + hreflang (es/en/x-default)
- [x] XML Sitemap with all 10 routes
- [x] robots.txt with AI bot allowlist
- [x] GA4 with anonymized IP
- [x] Semantic HTML with ARIA labels
- [x] Accessible skip-to-content link
- [x] Breadcrumb navigation on course pages
- [x] Alt text on all images

---

## Deployment

Push to `main` triggers the GitHub Actions workflow (`.github/workflows/deploy.yml`):
1. `npm ci` — install dependencies
2. `npm run build` — Vite production build → `dist/`
3. Deploy `dist/` to GitHub Pages
4. Site goes live at `https://espanolsinfronteras.org`
