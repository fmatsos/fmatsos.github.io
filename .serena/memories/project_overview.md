# Project Overview

## Purpose
Personal website and blog for Franck Matsos, a PHP/Symfony developer at Akawaka. The site showcases his professional profile, career timeline, and technical blog posts.

## Tech Stack
- **Framework**: Astro 4.x (static site generator)
- **Language**: TypeScript (strict mode)
- **Styling**: TailwindCSS v4 with @tailwindcss/typography
- **Icons**: astro-icon with @iconify-json/mdi
- **Fonts**: Inter (variable), JetBrains Mono (variable)
- **Testing**: Playwright (available but not configured with scripts)

## Deployment
- **Primary**: Netlify (configured in `netlify.toml`)
  - Build command: `npm run build`
  - Publish directory: `dist`
  - Node version: 20
  - Edge function for bot handling
- **Secondary**: GitHub Pages (legacy workflow in `.github/workflows/`)

## Site Configuration
- **URL**: https://franck.matsos.fr
- **Languages**: French (default), English (partial)
- **Content**: Blog posts with tags, multilingual support

## Key Files
- `src/config.ts` - Site title, baseline, description
- `src/content/config.ts` - Content collection schema (posts)
- `astro.config.mjs` - Astro configuration
- `netlify.toml` - Netlify deployment config
