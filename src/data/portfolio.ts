export interface PortfolioItem {
  slug: string;
  title: string;
  category: string;
  url: string;
  /** Optional preview image path (e.g. when site blocks iframe). */
  previewImage?: string;
  /** What they needed (one sentence). */
  whatTheyNeeded: string;
  /** Result (one sentence). */
  result: string;
}

export const portfolioItems: PortfolioItem[] = [
  {
    slug: "paintball-sample-site",
    title: "Paintball Sample Site",
    category: "Business site",
    url: "https://paintball-sample-site.netlify.app/",
    whatTheyNeeded:
      "A site to fpr a paintball business to showcase their services.",
    result:
      "Simple site w/ a beautiful design to showcase their services and events.",
  },
  {
    slug: "jon-qcountry",
    title: "Jon Qcountry",
    category: "Band site",
    url: "https://jonqcountry.netlify.app/",
    whatTheyNeeded: "A site to showcase music, bio, and upcoming shows.",
    result:
      "Clean band site with music, bio, shows, and contact. Site by Computer Tommy.",
  },
  {
    slug: "rich-larocca-music",
    title: "Rich LaRocca",
    category: "Band site",
    url: "https://richlaroccamusic.com/",
    whatTheyNeeded: "An EPK (electronic press kit) for booking and promotion.",
    result: "Rock, country, blues EPK with a focused entry experience.",
  },
  {
    slug: "fresh-grill-bbq",
    title: "Clean Grills BBQ (Charlotte, NC)",
    category: "Service site",
    url: "https://cleangrillscharlotte.com/",
    previewImage: "/portfolio/clean-grills-screenshot.png",
    whatTheyNeeded: "A site to showoff their services.",
    result: "Simple site w/ a beautiful design to showcase their services.",
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
    slug: "future-hippies-of-funk",
    title: "Future Hippies of Funk (Sample Site)",
    category: "Band site",
    url: "https://futurehippiesoffunk.netlify.app/",
    whatTheyNeeded: "A site to showoff their music and shows.",
    result:
      "Simple site w/ a beautiful design to showcase their music and shows.",
  },
  {
    slug: "carolina-troubadours",
    title: "Carolina Troubadours (Sample Site)",
    category: "Band site",
    url: "https://carolinatroubadors.netlify.app/",
    whatTheyNeeded: "A site to showoff their music and shows.",
    result:
      "Simple site w/ a beautiful design to showcase their music and shows.",
  },
  {
    slug: "dizzys-glizzies",
    title: "Dizzys Glizzies (Discontinued)",
    category: "Collective / Community",
    url: "https://dizzys-glizzies.netlify.app",
    whatTheyNeeded: "A landing page for their restaurant.",
    result: "A beautiful hot dog themed landing page!",
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
    url: "https://5thworldcollective.com/",
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
];
