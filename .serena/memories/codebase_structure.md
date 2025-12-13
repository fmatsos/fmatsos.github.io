# Codebase Structure

```
fmatsos.github.io/
├── src/
│   ├── components/          # UI components (Atomic Design)
│   │   ├── atoms/           # Basic elements (Button, Card, Link, etc.)
│   │   ├── molecules/       # Composed elements (PostCard, NavItem, etc.)
│   │   └── organisms/       # Complex components (Header, Footer, Timeline)
│   ├── content/
│   │   ├── posts/           # Blog posts (markdown)
│   │   └── config.ts        # Content collection schema
│   ├── data/
│   │   ├── curriculum.ts    # Career/experience data
│   │   └── links.ts         # External links data
│   ├── layouts/
│   │   └── BaseLayout.astro # Main page layout
│   ├── pages/
│   │   ├── blog/            # Blog pages ([slug].astro, index.astro)
│   │   ├── en/              # English pages (about, blog, index)
│   │   ├── tags/            # Tag pages ([tag].astro)
│   │   ├── a-propos.astro   # French about page
│   │   └── index.astro      # Homepage
│   ├── styles/
│   │   ├── global.css       # TailwindCSS input
│   │   └── tailwind.css     # Generated CSS (do not edit)
│   ├── utils/
│   │   └── tags.ts          # Tag utility functions
│   ├── config.ts            # Site configuration
│   └── env.d.ts             # TypeScript environment types
├── public/
│   └── images/              # Static images (avatar, about, SVG icons)
├── netlify/
│   └── edge-functions/      # Netlify edge functions (bot handling)
├── dist/                    # Build output (generated)
└── Configuration files:
    ├── astro.config.mjs
    ├── tsconfig.json
    ├── package.json
    ├── netlify.toml
    ├── .prettierrc
    └── .editorconfig
```

## Key Directories

### `src/pages/`
File-based routing. Each `.astro` file becomes a route:
- `index.astro` → `/`
- `a-propos.astro` → `/a-propos`
- `blog/[slug].astro` → `/blog/:slug`
- `tags/[tag].astro` → `/tags/:tag`
- `en/` subdirectory for English pages

### `src/content/posts/`
Markdown blog posts with frontmatter. Naming convention: `YYYY-MM-DD-title.md`

### `src/components/`
Follows Atomic Design. Import paths:
- `../components/atoms/Button.astro`
- `../components/molecules/PostCard.astro`
- `../components/organisms/Header.astro`
