import { defineCollection, z } from 'astro:content';

const posts = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.date(),
    tags: z.array(z.string()).default([]),
    lang: z.enum(['fr', 'en']).default('fr'),
    draft: z.boolean().default(false),
    published: z.boolean().default(true),
  }),
});

export const collections = { posts };
