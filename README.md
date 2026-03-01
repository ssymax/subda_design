# Subda Design

Marketing website for an interior design studio (`subdadesign.pl`), built with
Next.js App Router, TypeScript, SCSS modules, GSAP animations, and Contentful
GraphQL data.

## What This Project Includes

- Home, About, Offer, Blog, Portfolio, and Contact pages.
- Dynamic detail pages for blog posts and portfolio realizations.
- SEO metadata per page plus dynamic `sitemap.xml`.
- Contact form with client-side validation and Formspree submission.
- Animated UI with GSAP, ScrollTrigger, SplitType, and Lenis smooth scrolling.

## Tech Stack

- Next.js 14 (App Router) + React 18
- TypeScript
- SCSS modules + `normalize.css`
- Contentful GraphQL API
- GSAP (`gsap`, `@gsap/react`) + Lenis + SplitType
- Form handling: `react-hook-form`, `zod`, `@formspree/react`
- Data/client utilities: SWR, dayjs, clsx

## Requirements

- Node.js 18.17+ (Node 20+ recommended)
- npm 9+ (or pnpm, if you prefer)

## Local Setup

1. Install dependencies:

```bash
npm install
```

2. Create `.env.local` and set the required environment variables (see table
   below).

3. Start development server:

```bash
npm run dev
```

4. Open `http://localhost:3000`.

## Environment Variables

Create `.env.local` in project root.

| Variable | Required | Used in | Purpose |
| --- | --- | --- | --- |
| `CONTENTFUL_SPACE_ID` | Yes | `lib/api.ts` | Contentful space ID for server-side GraphQL calls |
| `CONTENTFUL_ACCESS_TOKEN` | Yes | `lib/api.ts` | Contentful delivery token for server-side GraphQL calls |
| `NEXT_PUBLIC_CONTENTFUL_SPACE_ID` | Yes | `lib/api.ts` | Public Contentful space ID for preview/client calls |
| `NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN` | Yes | `lib/api.ts` | Public Contentful token for preview/client calls |
| `NEXT_PUBLIC_FORMSPREE` | Yes | `src/app/_components/molecules/form.tsx` | Formspree endpoint ID for contact form submissions |
| `NEXT_PUBLIC_GOOGLE_MAPS` | Yes | `src/app/_components/organisms/contactContent.tsx` | Google Maps Embed API key used on contact page |

## Available Scripts

- `npm run dev`: Start local development server.
- `npm run build`: Create production build.
- `npm run start`: Run production server (after build).
- `npm run lint`: Run ESLint checks.

## Routes

- `/`
- `/o-mnie`
- `/realizacje`
- `/realizacje/[slug]`
- `/oferta`
- `/blog`
- `/blog/[slug]`
- `/kontakt`
- `/sitemap.xml` (from `src/app/sitemap.ts`)

## Project Structure

```text
src/app/
  _components/      # UI components (atoms/molecules/organisms)
  _styles/          # SCSS modules and style constants
  _hooks/           # Custom React hooks
  _utils/           # Utility functions for sorting/animation helpers
  _routes/          # Route definitions
  _templates/       # Shared layout wrappers
  blog/[slug]/      # Dynamic blog post page
  realizacje/[slug]/# Dynamic portfolio page
lib/
  api.ts            # Contentful GraphQL fetchers
  queries.ts        # GraphQL query definitions
  converters.ts     # API data mappers
  types.ts          # Shared data types
public/             # Static assets
```

## Contentful Data Used

The app queries these Contentful entries/collections:

- `realizationsCollection`
- `about` (single entry by ID)
- `offer` (single entry by ID)
- `homeOffferCollection`
- `blogCollection`
