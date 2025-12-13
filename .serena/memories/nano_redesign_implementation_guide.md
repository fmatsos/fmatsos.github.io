# Astro Nano Redesign - Implementation Guide

## Key Design Changes

### Global Styles
✓ DONE: Updated `src/styles/global.css` to match Nano's minimalist approach
- Simple black/white color scheme
- Underlined links with hover effects
- Minimal spacing
- Clean typography

### Components to Update

1. **Header** → Simpler, cleaner
   - Remove heavy styling
   - Simple border-bottom only
   - Cleaner title presentation
   - Keep mobile menu functionality

2. **Footer** → Match Nano style
   - Add "Back to Top" button
   - Theme switcher with 3 buttons
   - Simple flex layout
   - Keep contact links

3. **Link Component** → Underlined style
   - Use `decoration-black/15 dark:decoration-white/30`
   - Hover: `decoration-black/25 dark:decoration-white/50`
   - Smooth transitions

4. **Card Component** → Simplify or remove
   - Nano uses minimal cards
   - Remove borders/shadows
   - Use simple spacing instead

5. **Homepage** → Sections with spacing
   - `space-y-16` between sections
   - `space-y-4` within sections
   - Clean typography hierarchy

6. **Blog Layout** → Simple post layout
   - Keep sidebar feature
   - Simplify card styling
   - Better spacing

## Implementation Priority
1. Update remaining component styles
2. Redesign homepage layout
3. Update blog post styling
4. Test build and consistency
5. Create PR

## Color System (Nano)
- Text: Black (dark: white)
- Borders: `black/15` (dark: `white/20`)
- Hover decorations: Increase opacity
- No custom color palette needed
