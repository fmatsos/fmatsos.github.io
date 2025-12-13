# Astro Nano v1.1.1 Design Analysis

## Key Design Patterns

### Homepage Structure
- Uses `Container` component for max-width wrapper
- Sections organized with `space-y-16` (large vertical gaps)
- Articles use `space-y-4` for internal spacing
- Card listings use `flex flex-col gap-4`
- Section headers use `flex flex-wrap gap-y-2 items-center justify-between` for responsive layout

### Typography & Spacing
- Headings: `h4` for main title, `h5` for section headers
- Font weight: `font-semibold` for headings, default for body
- Dark mode: `text-black dark:text-white` pattern
- Opacity for secondary text: `opacity-75` for dates/roles

### Link Component
- Underlined with `underline underline-offset-2`
- Decoration colors: `decoration-black/15 dark:decoration-white/30`
- Hover: `hover:decoration-black/25 hover:dark:decoration-white/50`
- Text color: `text-current hover:text-black hover:dark:text-white`
- External links open in new tab
- Transitions: `transition-colors duration-300 ease-in-out`

### Footer Design
- Uses `Container` component
- Contains BackToTop button (positioned absolutely)
- Theme switcher with 3 buttons (light/dark/system)
- SVG icons: 18x18px
- Button styling: `group size-8 flex items-center justify-center rounded-full`
- Icon hover: `group-hover:stroke-black group-hover:dark:stroke-white`

### Layout Components
- **Container**: max-width wrapper component
- **PageLayout**: main layout wrapper
- **ArrowCard**: post/project cards with arrow indicator
- **Link**: custom link with styling

### Animation
- Class `.animate` used for fade-in animations
- Applied to sections and containers

### Color System
- Black/white text: `text-black dark:text-white`
- Opacity variants: `/15`, `/25`, `/30`, `/50` for subtlety
- No custom color palette beyond black/white/gray

### Content Collections
- Blog posts with `draft` field
- Projects with date sorting
- Work experience with dateStart/dateEnd
- Sorted by date (newest first)

### Key Classes Used
- `flex`, `flex-wrap`, `flex-col`, `gap-*`, `space-y-*`
- `text-sm`, `text-xl`, `font-semibold`
- `opacity-75`, `text-nowrap`, `line-clamp-1`
- `animate`, `transition-colors`, `duration-300`
- `rounded-full`, `size-8`
