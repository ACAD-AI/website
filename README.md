# ACAD AI Web

ACAD AI is a Next.js 16 application for an AI-powered assessment platform serving institutions, educators, and students. This project uses a feature-first structure with `next-intl`, `next-themes`, Tailwind CSS v4, shadcn/ui, and Biome.

## Scripts

```bash
yarn dev
yarn build
yarn lint
yarn format
yarn typecheck
```

## Project Structure

```text
.
├── messages
│   ├── ar.json
│   ├── en.json
│   └── fr.json
├── public
│   ├── fonts
│   ├── icons
│   └── images
├── src
│   ├── app
│   │   ├── [locale]
│   │   │   ├── (legal)
│   │   │   ├── (marketing)
│   │   │   ├── layout.tsx
│   │   │   └── page.tsx
│   │   ├── api
│   │   └── globals.css
│   ├── features
│   │   ├── audience-cards
│   │   ├── hero
│   │   ├── language-switcher
│   │   ├── stats
│   │   └── theme-toggle
│   ├── i18n
│   │   ├── navigation.ts
│   │   ├── request.ts
│   │   └── routing.ts
│   ├── middleware.ts
│   ├── shared
│   │   ├── components
│   │   │   ├── layout
│   │   │   ├── providers
│   │   │   ├── seo
│   │   │   └── ui
│   │   ├── config
│   │   ├── hooks
│   │   ├── lib
│   │   └── types
│   └── styles
└── tsconfig.json
```
