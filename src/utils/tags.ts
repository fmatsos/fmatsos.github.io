const TAG_COLOR_PALETTE = [
  'bg-cyan-500/15 text-cyan-100 ring-1 ring-cyan-500/30',
  'bg-emerald-500/15 text-emerald-100 ring-1 ring-emerald-500/30',
  'bg-purple-500/15 text-purple-100 ring-1 ring-purple-500/30',
  'bg-amber-500/15 text-amber-100 ring-1 ring-amber-500/30',
  'bg-pink-500/15 text-pink-100 ring-1 ring-pink-500/30',
  'bg-blue-500/15 text-blue-100 ring-1 ring-blue-500/30',
  'bg-rose-500/15 text-rose-100 ring-1 ring-rose-500/30',
  'bg-lime-500/15 text-lime-100 ring-1 ring-lime-500/30',
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
  return `inline-flex items-center gap-1 rounded-full px-2 py-1 text-xs font-semibold ${color}`;
}
