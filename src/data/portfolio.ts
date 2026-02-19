export interface PortfolioItem {
  slug: string;
  title: string;
  category: string;
  url: string;
  /** What they needed (one sentence). */
  whatTheyNeeded: string;
  /** Result (one sentence). */
  result: string;
}

export const portfolioItems: PortfolioItem[] = [
  {
    slug: "JSC PsyD",
    title: "JSC PsyD",
    category: "Personal site",
    url: "https://superlative-crumble-35189d.netlify.app/",
    whatTheyNeeded: "A portfolio site to showcase work and take inquiries.",
    result:
      "Simple site to showcase work and take inquiries. Built in a weekend.",
  },
  {
    slug: "notle-client",
    title: "Notle.ai",
    category: "Software",
    url: "https://notle-client.vercel.app/",
    whatTheyNeeded: "A clean app for their product.",
    result: "Built a simple, fast front-end they could ship with.",
  },
  {
    slug: "guessmethod",
    title: "Guess Method",
    category: "Band site",
    url: "https://guessmethod.com/",
    whatTheyNeeded: "A band site to show music and dates.",
    result: "Simple site with music, shows, and contact. No monthly fee.",
  },
  {
    slug: "snailhand",
    title: "Snailhand",
    category: "Band site",
    url: "https://keen-chaja-4aaf31.netlify.app/",
    whatTheyNeeded: "A place to host their music and look professional.",
    result: "Clean band site; they own it and can update when they want.",
  },
  {
    slug: "5th-world",
    title: "5th World Collective",
    category: "Collective / Community",
    url: "https://5th-world.netlify.app/",
    whatTheyNeeded: "A hub for their collective and events.",
    result: "One place for the group, events, and links. No bloat.",
  },
  {
    slug: "nathankingtattoos",
    title: "Nathan King Tattoos",
    category: "Personal site",
    url: "https://nathankingtattoos.com/",
    whatTheyNeeded: "A portfolio site to book sessions and show work.",
    result:
      "Simple site to showcase work and take inquiries. Built in a weekend.",
  },
  {
    slug: "junggpt",
    title: "JungGPT",
    category: "AI Agent",
    url: "https://theragpt-client-git-master-tventura94s-projects.vercel.app/",
    whatTheyNeeded: "A custom AI agent with a clean interface.",
    result: "Working app they could use and iterate on.",
  },
];
