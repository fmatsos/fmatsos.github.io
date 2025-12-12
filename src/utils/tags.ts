const TAG_COLOR_PALETTE = [
  'bg-primary/10 text-primary ring-primary/25 dark:bg-primary-dark/20 dark:text-primary-dark',
  'bg-emerald-100 text-emerald-800 ring-emerald-200 dark:bg-emerald-900/40 dark:text-emerald-100 dark:ring-emerald-700/40',
  'bg-purple-100 text-purple-800 ring-purple-200 dark:bg-purple-900/40 dark:text-purple-100 dark:ring-purple-700/40',
  'bg-amber-100 text-amber-800 ring-amber-200 dark:bg-amber-900/40 dark:text-amber-100 dark:ring-amber-700/40',
  'bg-pink-100 text-pink-800 ring-pink-200 dark:bg-pink-900/40 dark:text-pink-100 dark:ring-pink-700/40',
  'bg-sky-100 text-sky-800 ring-sky-200 dark:bg-sky-900/40 dark:text-sky-100 dark:ring-sky-700/40',
  'bg-rose-100 text-rose-800 ring-rose-200 dark:bg-rose-900/40 dark:text-rose-100 dark:ring-rose-700/40',
  'bg-lime-100 text-lime-800 ring-lime-200 dark:bg-lime-900/40 dark:text-lime-100 dark:ring-lime-700/40',
];

function hashTag(tag: string) {
  return Array.from(tag).reduce((hash, char) => (hash + char.charCodeAt(0)) % 997, 0);
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
