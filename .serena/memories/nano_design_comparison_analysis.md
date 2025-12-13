# Nano Design Analysis & Implementation Plan

## Current Design vs Nano Theme

### Current Design Issues
1. **Heavy styling with borders & shadows** - boxes have `border border-foreground/10 shadow-lg`
2. **Complex layout** - Grid with sidebar, multi-column layouts
3. **Badge & Button components** - Extra visual elements
4. **Spacing** - Inconsistent `gap-8`, `p-8` creates heavy feel
5. **Colors** - Uses `primary`, custom colors beyond black/white
6. **Homepage** - Complex 2-column intro section with image border
7. **Card styling** - Cards have borders, shadows, hover effects with color transitions

### Nano Design Approach
1. **Minimal styling** - No borders/shadows on containers
2. **Simple layout** - Single column, clean sections with `space-y-16` gaps
3. **No extra components** - Uses basic headings (h4, h5), links, lists
4. **Consistent spacing** - `space-y-4`, `gap-4` throughout
5. **Black/white only** - `text-black dark:text-white`, opacity for subtlety
6. **Homepage** - Simple intro text with h4 title and paragraphs
7. **Cards minimal** - Use `ArrowCard` with minimal styling (just arrow indicator)

## Key Changes Required

### 1. Homepage (`src/pages/index.astro`)
- Remove grid layout & border/shadow boxes
- Replace with simple sections using `space-y-16`
- Remove Badge component
- Remove custom grid for location/skills info
- Keep simple intro with paragraph text
- Simplify links section

### 2. Global CSS (`src/styles/global.css`)
- Already updated with `.animate` fade-in
- Links already have correct underline style
- Container already max-width wrapper
- Good foundation - just needs component updates

### 3. Components to Simplify
- **Header**: Keep simple, clean border only
- **Footer**: Add BackToTop button, theme switcher
- **Card components**: Remove shadows/borders
- **Badge, Button**: Remove or simplify

### 4. Spacing Updates
- Remove `p-6`, `p-8` padding from sections
- Use `space-y-16` between major sections
- Use `space-y-4` within sections
- Consistent `gap-4` for lists

### 5. Color System
- Remove `primary` color references
- Use `black/white` with opacity variants only
- No hover color transitions (stay black/white)

## Implementation Order
1. Update homepage layout
2. Simplify spacing throughout
3. Remove/simplify component styling
4. Test build and verify changes
