# Code Style & Conventions

## Formatting (Prettier + EditorConfig)
- **Indentation**: 4 spaces
- **Quotes**: Single quotes
- **Line endings**: LF (Unix)
- **Charset**: UTF-8
- **Trailing whitespace**: Trimmed
- **Final newline**: Required

## TypeScript
- **Config**: Extends `astro/tsconfigs/strict`
- **Base URL**: Project root (`.`)
- Use TypeScript interfaces for component props validation

## Component Architecture (Atomic Design)
Components are organized in `src/components/`:

### Atoms (`atoms/`)
Basic UI elements: Badge, Button, Card, IconButton, Image, Link, SkipLink, Spinner

### Molecules (`molecules/`)
Composed elements: Breadcrumb, ContactCard, NavItem, PostCard, SEO, TagList

### Organisms (`organisms/`)
Complex components: Footer, Header, Timeline

## Naming Conventions
- **Components**: PascalCase (e.g., `PostCard.astro`)
- **Files**: kebab-case for content (e.g., `2024-09-14-title.md`)
- **Variables**: camelCase
- **Constants**: SCREAMING_SNAKE_CASE (e.g., `SITE_TITLE`)

## Astro Components
- Use `.astro` extension
- Props defined in frontmatter with TypeScript
- Use TailwindCSS utilities, avoid inline styles

## Content (Blog Posts)
Schema defined in `src/content/config.ts`:
- `title`: string (required)
- `description`: string (required)
- `pubDate`: date (required)
- `tags`: string[] (default: [])
- `lang`: 'fr' | 'en' (default: 'fr')
- `draft`: boolean (default: false)
- `published`: boolean (default: true)
