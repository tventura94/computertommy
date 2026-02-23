import { defineCollection, z } from "astro:content";

const web_dev_locations = defineCollection({
  type: "content",
  schema: z.object({
    h1: z.string().optional(),
    heroSubtitle: z.string().optional(),
    introBullets: z.array(z.string()).optional(),
    painPoints: z.array(z.string()).optional(),
    processSteps: z.array(z.string()).optional(),
    faqs: z
      .array(
        z.object({
          q: z.string(),
          a: z.string(),
        }),
      )
      .optional(),
    caseStudySlugs: z.array(z.string()).optional(),
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

export const collections = { web_dev_locations };
