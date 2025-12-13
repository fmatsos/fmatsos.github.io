# Components Architecture

This project follows **Atomic Design** principles, organizing components into three main categories:

## 🔬 Atoms
The smallest building blocks of the UI. These are basic elements that can't be broken down further without losing their meaning.

### Available Atoms:
- **Badge**: Small label/tag element with variants (default, primary, accent)
- **Button**: Versatile button component with primary, secondary, ghost variants
- **Card**: Container with consistent styling (rounded, shadow, backdrop-blur)
- **IconButton**: Button with icon only, for actions like menu toggle
- **Image**: Optimized image component with lazy loading
- **Link**: Styled link component with variants (default, primary, subtle)
- **SkipLink**: Accessibility link to skip to main content
- **Spinner**: Loading indicator for async operations

## 🧪 Molecules
Combinations of atoms that form more complex UI elements.

### Available Molecules:
- **Breadcrumb**: Navigation breadcrumb trail
- **ContactCard**: Card displaying external contact links
- **NavItem**: Navigation link with active state
- **PostCard**: Blog post preview card
- **TagList**: List of tags with optional links

## 🦠 Organisms
Complex UI components composed of molecules and atoms.

### Available Organisms:
- **Header**: Main navigation header with mobile menu
- **Footer**: Site footer with information
- **Timeline**: Career/experience timeline display

## 📏 Design Principles

### Accessibility (WCAG)
- All interactive elements have focus-visible states
- Proper ARIA labels and roles
- Semantic HTML structure
- Skip navigation links
- Screen reader support with sr-only utility
- Keyboard navigation support
- Reduced motion support

### Performance
- Lazy loading for images
- Preconnect for external resources
- Optimized bundle sizes
- Minimal DOM manipulation

### Consistency
- All components use TailwindCSS utilities
- Consistent spacing and sizing scales
- Color scheme with dark mode support
- Typography hierarchy

## 🎨 Usage Example

```astro
---
import Button from '../components/atoms/Button.astro';
import Card from '../components/atoms/Card.astro';
import PostCard from '../components/molecules/PostCard.astro';
import Header from '../components/organisms/Header.astro';
---

<Header lang="fr" currentPath="/">
  <ThemeSelector slot="theme-selector" />
</Header>

<Card class="p-6">
  <h1>Title</h1>
  <Button href="/contact" variant="primary">
    Contact Us
  </Button>
</Card>

<PostCard
  title="Blog Post"
  description="Description"
  pubDate={new Date()}
  slug="blog-post"
  tags={['tag1', 'tag2']}
/>
```

## 🔄 Best Practices

1. **Reusability**: Create new atoms/molecules when you find repeating patterns
2. **Composition**: Build organisms from molecules, molecules from atoms
3. **Props**: Use TypeScript interfaces for prop validation
4. **Accessibility**: Always include ARIA labels for interactive elements
5. **Styling**: Use TailwindCSS utilities, avoid inline styles
6. **Naming**: Use clear, descriptive names (e.g., `ContactCard` not `Card2`)
