# Task Completion Checklist

When completing a task, follow these steps:

## 1. Type Checking
```bash
npm run check
```
Ensure no TypeScript or Astro errors.

## 2. Build Verification
```bash
npm run build
```
Confirm the site builds successfully to `dist/`.

## 3. Visual Testing (if applicable)
```bash
npm run preview
```
Preview the built site and verify changes visually.

## 4. Accessibility
- Verify ARIA labels on interactive elements
- Check keyboard navigation
- Ensure proper semantic HTML
- Test with screen reader considerations

## 5. Code Quality
- Follow Atomic Design principles
- Use TailwindCSS utilities consistently
- Ensure props are typed with TypeScript
- No inline styles

## 6. Content Changes
For blog posts, verify:
- Frontmatter matches schema (title, description, pubDate, tags, lang)
- `draft: false` and `published: true` for live posts
- Proper markdown formatting
