/**
 * Utility to extract H2 headings from rendered HTML content
 * Used for building table of contents in post sidebars
 */

export interface Heading {
  level: number;
  text: string;
  id: string;
}

/**
 * Extract H2 headings from HTML string
 * Returns array of headings with generated IDs for anchor links
 */
export function extractHeadings(html: string): Heading[] {
  const headings: Heading[] = [];
  const h2Regex = /<h2[^>]*id="([^"]*)"[^>]*>([^<]+)<\/h2>/g;
  
  let match;
  while ((match = h2Regex.exec(html)) !== null) {
    const id = match[1];
    const text = match[2]
      .replace(/<[^>]*>/g, '') // Remove any nested HTML tags
      .trim();
    
    if (text) {
      headings.push({
        level: 2,
        text,
        id,
      });
    }
  }
  
  return headings;
}

/**
 * Generate a URL-safe ID from heading text
 * Used as fallback if heading doesn't have an ID
 */
export function generateHeadingId(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '') // Remove special characters
    .replace(/\s+/g, '-') // Replace spaces with hyphens
    .replace(/-+/g, '-') // Replace multiple hyphens with single
    .replace(/^-+|-+$/g, ''); // Remove leading/trailing hyphens
}
