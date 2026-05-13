import { defineCollection, z } from "astro:content";

const seo_services = defineCollection({
  type: "content",
  schema: z.object({
    h1: z.string().optional(),
    heroSubtitle: z.string().optional(),
    introBullets: z.array(z.string()).optional(),
    p1: z.string().optional(),
    p2: z.string().optional(),
    faqs: z
      .array(
        z.object({
          q: z.string(),
          a: z.string(),
        }),
      )
      .optional(),
    internalLinks: z
      .array(
        z.object({
          href: z.string(),
          label: z.string(),
        }),
      )
      .optional(),
  }),
});
export const collections = { seo_services };
