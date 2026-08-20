# Forma Studio

A multi-page, editorial-style portfolio site for a fictional premium interior
design studio — built as a frontend portfolio piece.

## Stack

- [Next.js](https://nextjs.org) (App Router) + TypeScript
- [Tailwind CSS v4](https://tailwindcss.com)
- [Framer Motion](https://motion.dev) for page transitions, scroll reveals, and interactions
- [Lucide](https://lucide.dev) icons
- No backend — all content lives in `data/*.ts`; images are local files in
  `public/images/` (originally sourced from Unsplash, downloaded once and
  served locally), rendered via `next/image`.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Structure

- `app/` — routes (`/`, `/projects`, `/projects/[slug]`, `/services`, `/about`,
  `/contact`, custom 404).
- `components/` — presentational components, grouped by page/section
  (`layout`, `home`, `projects`, `services`, `about`, `contact`, `ui`).
- `data/` — mock content: projects, services, team, testimonials, process,
  about copy, nav links, contact form options.
- `lib/` — small helpers: `cn()`, Framer Motion variants, the Unsplash URL
  builder.

## Scripts

- `npm run dev` — start the dev server
- `npm run build` — production build
- `npm run lint` — ESLint
