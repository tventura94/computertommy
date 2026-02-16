export interface PortfolioItem {
  slug: string;
  title: string;
  category: string;
  url: string;
}

export const portfolioItems: PortfolioItem[] = [
  {
    slug: "notle-client",
    title: "Notle.ai",
    category: "Software",
    url: "https://notle-client.vercel.app/",
  },
  {
    slug: "guessmethod",
    title: "Guess Method",
    category: "Band site",
    url: "https://guessmethod.com/",
  },
  {
    slug: "snailhand",
    title: "Snailhand",
    category: "Band site",
    url: "https://keen-chaja-4aaf31.netlify.app/",
  },
  {
    slug: "5th-world",
    title: "5th World Collective",
    category: "Collective / Community",
    url: "https://5th-world.netlify.app/",
  },
];
