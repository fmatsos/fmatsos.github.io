// Expanded color palette for automatic tag coloring
const TAG_COLOR_PALETTE = [
  // Primary
  'bg-primary/10 text-primary ring-primary/25 dark:bg-primary-dark/20 dark:text-primary-dark dark:ring-primary-dark/30',
  // Emerald
  'bg-emerald-100 text-emerald-800 ring-emerald-200 dark:bg-emerald-900/40 dark:text-emerald-200 dark:ring-emerald-700/40',
  // Purple
  'bg-purple-100 text-purple-800 ring-purple-200 dark:bg-purple-900/40 dark:text-purple-200 dark:ring-purple-700/40',
  // Amber
  'bg-amber-100 text-amber-800 ring-amber-200 dark:bg-amber-900/40 dark:text-amber-200 dark:ring-amber-700/40',
  // Pink
  'bg-pink-100 text-pink-800 ring-pink-200 dark:bg-pink-900/40 dark:text-pink-200 dark:ring-pink-700/40',
  // Sky
  'bg-sky-100 text-sky-800 ring-sky-200 dark:bg-sky-900/40 dark:text-sky-200 dark:ring-sky-700/40',
  // Rose
  'bg-rose-100 text-rose-800 ring-rose-200 dark:bg-rose-900/40 dark:text-rose-200 dark:ring-rose-700/40',
  // Lime
  'bg-lime-100 text-lime-800 ring-lime-200 dark:bg-lime-900/40 dark:text-lime-200 dark:ring-lime-700/40',
  // Indigo
  'bg-indigo-100 text-indigo-800 ring-indigo-200 dark:bg-indigo-900/40 dark:text-indigo-200 dark:ring-indigo-700/40',
  // Teal
  'bg-teal-100 text-teal-800 ring-teal-200 dark:bg-teal-900/40 dark:text-teal-200 dark:ring-teal-700/40',
  // Orange
  'bg-orange-100 text-orange-800 ring-orange-200 dark:bg-orange-900/40 dark:text-orange-200 dark:ring-orange-700/40',
  // Cyan
  'bg-cyan-100 text-cyan-800 ring-cyan-200 dark:bg-cyan-900/40 dark:text-cyan-200 dark:ring-cyan-700/40',
  // Fuchsia
  'bg-fuchsia-100 text-fuchsia-800 ring-fuchsia-200 dark:bg-fuchsia-900/40 dark:text-fuchsia-200 dark:ring-fuchsia-700/40',
  // Violet
  'bg-violet-100 text-violet-800 ring-violet-200 dark:bg-violet-900/40 dark:text-violet-200 dark:ring-violet-700/40',
];

/**
 * Generate a deterministic hash from a tag name for consistent color assignment
 */
function hashTag(tag: string): number {
  const normalized = tag.toLowerCase().trim();
  let hash = 0;
  for (let i = 0; i < normalized.length; i++) {
    const char = normalized.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash; // Convert to 32bit integer
  }
  return Math.abs(hash);
}

export function slugifyTag(tag: string) {
  return tag
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

export function tagHref(tag: string) {
  return `/tags/${slugifyTag(tag)}`;
}

export function tagClasses(tag: string) {
  const color = TAG_COLOR_PALETTE[hashTag(tag) % TAG_COLOR_PALETTE.length];
  return `tag-chip ring-1 ${color}`;
}
