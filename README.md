# Rafli Shidiq — Portfolio

A personal portfolio for Muhamad Rafli Shidiq, built with React 19, Vite,
and Tailwind CSS v4. Dark, typographic, and deliberately quiet — content
first, no decorative noise.

## Run it

```bash
npm install
npm run dev
```

Open the printed local URL. For a production build:

```bash
npm run build
npm run preview
```

## Fill in the placeholders

Everything on the site is pulled from one file:
`src/data/portfolioData.js`.

- `personal.github` / `personal.linkedin` / `personal.whatsapp` — profile URLs
- `personal.resumeFile` — the CV PDF in `/public` (currently `CV_Muhamad_Rafli_Shidiq.pdf`)
- `personal.avatar` — profile photo in `/public` (currently `fotoku.webp`)
- `projects[].image` — project screenshots under `/public/projects`
- `projects[].github` / `projects[].demo` — repo/demo links

## Contact form (EmailJS)

The contact form sends messages through EmailJS. Copy `.env.example` to
`.env` and fill in the three values from your
[EmailJS dashboard](https://dashboard.emailjs.com):

```bash
cp .env.example .env
```

```env
VITE_EMAILJS_SERVICE_ID=your_service_id   # Email Services
VITE_EMAILJS_TEMPLATE_ID=your_template_id # Email Templates
VITE_EMAILJS_PUBLIC_KEY=your_public_key   # Account > General
```

### Template variables

If you use EmailJS' pre-built **"Contact Us"** template, it expects these
names — and the form already sends them:

```
{{title}}  {{name}}  {{email}}  {{message}}  {{time}}
```

The form also sends these generic aliases, so a custom template works too:

```
{{from_name}}  {{from_email}}  {{reply_to}}  {{subject}}  {{to_email}}
```

Set the template's **To Email** to `{{to_email}}` (or hardcode your own
address) and its **Reply To** to `{{reply_to}}` so you can reply directly.

### Before it works in production

1. **Allowlist your domain.** In the EmailJS dashboard go to
   *Account → Security* and add `localhost` (for dev) plus your live
   domain. Requests from unlisted origins are rejected with a `403`.
2. **Restart the dev server** after editing `.env` — Vite only reads env
   files on startup.
3. **Mind the rate limit.** EmailJS allows **1 request per second**; the
   submit button disables itself while sending to avoid accidental
   double-sends.

While the keys are empty the form falls back to opening the visitor's
email app with everything pre-filled, so the page never fails silently.

### Anti-spam

The form includes a hidden honeypot field (`company`). If a bot fills it,
the submission is silently discarded. No extra service required.

## SEO

Static tags live in `index.html` (crawlers like WhatsApp and LinkedIn do
not run JavaScript, so meta tags must be in the served HTML).

SEO tags are wired to the production domain `https://murashi.dev`. If the
site ever moves, update the domain in these three files:

- `index.html` — `canonical`, `og:url`, `og:image`, `twitter:image`
- `public/robots.txt`
- `public/sitemap.xml`

`og:image` **must** be an absolute URL, otherwise link previews render
without an image.

## Project structure

```
src/
├── components/       Navbar, Footer, Section (shared section frame)
├── data/             portfolioData.js — single source of truth for all content
├── hooks/            useActiveSection, useLenis
├── sections/         Hero, About, Skills, Experience, Projects,
│                       Education, Contact — one file per page section
├── App.jsx            composes all sections (Hero eager, rest lazy-loaded)
└── main.jsx           app entry point
```

## Design system

Tokens live in `src/index.css` under `@theme`:

- **Type** — IBM Plex Sans for text, IBM Plex Mono for labels and metadata.
- **Colour** — warm near-black (`--color-bg`), a single accent
  (`--color-accent`), and a muted/faint pair for secondary text. Change the
  accent in one place and the whole site follows.
- **Layout** — a two-column, label-plus-content grid. `Section` holds the
  shared header so every section lines up.

## Stack

React 19, Vite, Tailwind CSS v4, Framer Motion (mobile menu and toast only),
Lenis (smooth scroll), Lucide React + React Icons, EmailJS.

## Notes

- Dark mode only, by design.
- Sections below the hero are `lazy()`-loaded with their own Suspense
  boundary, keeping the initial bundle small.
- `useActiveSection` uses a `MutationObserver` so the nav highlight still
  works with lazy-loaded sections.
- Respects `prefers-reduced-motion`.
- Deploy anywhere that serves a static `dist/` folder (Vercel, Netlify,
  GitHub Pages, Cloudflare Pages).
