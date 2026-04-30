# ACAD AI Web

ACAD AI Web is the marketing and product-facing frontend for the ACAD AI assessment platform. It is built with Next.js 16, React 19, TypeScript, Tailwind CSS v4, `next-intl`, `next-themes`, shadcn/ui, Sonner, and Biome.

The project uses a feature-first structure and currently includes localized marketing pages for:
- home
- pricing
- blog list and blog detail
- events
- FAQ
- reviews
- contact

## Stack

- Next.js 16 App Router
- React 19
- TypeScript
- Tailwind CSS v4
- `next-intl` for locale-based routing and messages
- `next-themes` for theme support
- shadcn/ui components
- Sonner for toasts
- Biome for linting and formatting
- Sanity client for blog CMS integration

## Locales

The app is configured for:
- `en`
- `fr`
- `ar`

Routing is handled from [src/i18n/routing.ts](/Users/payaza/acadai/acadai-web/src/i18n/routing.ts) with locale prefix mode set to `as-needed`.

## Scripts

```bash
yarn dev
yarn build
yarn start
yarn lint
yarn format
yarn typecheck
```

## Features Implemented

- Localized app shell under `src/app/[locale]`
- Global navbar, footer, and Sonner toaster
- Contact multi-step flow with API submit endpoint at `src/app/api/contact/route.ts`
- Blog listing and detail pages with Sanity-backed data layer and local fallback content
- Events page with past/upcoming states
- Pricing page with separate tabs for educators, students, and institutions
- FAQ accordion and contact card
- Reviews wall with audience tabs
- Mobile slide-in navigation drawer

## Sanity Integration

Blog content is wired to Sanity through [src/shared/lib/sanity/client.ts](/Users/payaza/acadai/acadai-web/src/shared/lib/sanity/client.ts).

If Sanity environment variables are missing, the blog falls back to local mock content from `src/features/blog/blog-mock-data.ts`.

Expected environment variables:

```bash
NEXT_PUBLIC_SANITY_PROJECT_ID=
NEXT_PUBLIC_SANITY_DATASET=
NEXT_PUBLIC_SANITY_API_VERSION=2026-04-30
SANITY_API_READ_TOKEN=
```

## Project Structure

```text
.
├── messages/
│   ├── ar.json
│   ├── en.json
│   └── fr.json
├── public/
│   ├── fonts/
│   ├── icons/
│   └── images/
├── src/
│   ├── app/
│   │   ├── [locale]/
│   │   │   ├── (legal)/
│   │   │   ├── (marketing)/
│   │   │   │   ├── company/
│   │   │   │   │   ├── contact/page.tsx
│   │   │   │   │   └── reviews/page.tsx
│   │   │   │   └── resources/
│   │   │   │       ├── blog/
│   │   │   │       ├── events/page.tsx
│   │   │   │       └── faq/page.tsx
│   │   │   ├── pricing/page.tsx
│   │   │   ├── layout.tsx
│   │   │   └── page.tsx
│   │   ├── api/
│   │   │   └── contact/route.ts
│   │   └── globals.css
│   ├── features/
│   │   ├── blog/
│   │   ├── contact/
│   │   ├── events/
│   │   ├── faq/
│   │   ├── hero/
│   │   ├── language-switcher/
│   │   ├── pricing/
│   │   ├── reviews/
│   │   └── theme-toggle/
│   ├── i18n/
│   │   ├── navigation.ts
│   │   ├── request.ts
│   │   └── routing.ts
│   ├── shared/
│   │   ├── components/
│   │   │   ├── layout/
│   │   │   ├── providers/
│   │   │   └── ui/
│   │   ├── config/
│   │   ├── lib/
│   │   └── types/
│   ├── views/
│   │   ├── blog/
│   │   ├── blog-post/
│   │   ├── contact/
│   │   ├── events/
│   │   ├── faq/
│   │   ├── home/
│   │   ├── pricing/
│   │   └── reviews/
│   └── middleware.ts
├── biome.json
├── components.json
├── next.config.ts
└── tsconfig.json
```

## Development Notes

- Shared layout/UI primitives live under `src/shared/components`
- Route entry points stay thin and delegate to `src/views`
- Feature-specific logic and presentation live in `src/features`
- Blog CMS queries and fallback logic are isolated from route code
- Husky and lint-staged are configured to run Biome on staged files

## Quality Checks

Current baseline:

```bash
yarn lint
yarn typecheck
```

Both commands should pass before shipping changes.
