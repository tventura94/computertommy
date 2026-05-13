export interface PortfolioItem {
  slug: string;
  title: string;
  category: string;
  url: string;
  /** Optional preview image path (e.g. when site blocks iframe). */
  previewImage?: string;
  /** How the preview image fits its frame. Defaults to "cover". Use "contain" to show the full image with letterboxing. */
  previewFit?: "cover" | "contain";
  /** What they needed (one sentence). */
  whatTheyNeeded: string;
  /** Result (one sentence). */
  result: string;
}

export const portfolioItems: PortfolioItem[] = [
  {
    slug: "strudel-construction",
    title: "Strudel Construction",
    category: "Service site",
    url: "https://strudel-construction.netlify.app/",
    whatTheyNeeded: "A professional web presence to showcase their services.",
    result:
      "A clean, modern site highlighting services, past projects, and a clear way for customers to get in touch.",
  },
  {
    slug: "north-peak-hvac",
    title: "North Peak HVAC",
    category: "Service site",
    url: "https://north-peak-hvac.netlify.app/",
    previewImage: "/portfolio/north-peak-hvac-screenshot.png",
    previewFit: "contain",
    whatTheyNeeded: "A professional web presence to showcase their services.",
    result:
      "A clean, modern site highlighting services, past projects, and a clear way for customers to get in touch.",
  },
  {
    slug: "Kiefer Property Solutions",
    title: "Kiefer Property Solutions",
    category: "Service site",
    url: "https://kieferpropertysolutions.com/",
    previewImage: "/portfolio/kiefer-prop.png",
    previewFit: "contain",
    whatTheyNeeded: "A professional web presence to showcase their services.",
    result:
      "A clean, modern site highlighting services, past projects, and a clear way for customers to get in touch.",
  },
  {
    slug: "my-buddy-lawn-care",
    title: "My Buddy Lawn Care",
    category: "Service site",
    url: "https://mybuddylawncarellc.com/",
    whatTheyNeeded:
      "A clean, professional site to bring in lawn care leads and showcase services.",
    result:
      "A focused service site with clear calls, services, and a way for customers to get a quote.",
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
    slug: "parallel-carpentry",
    title: "Parallel Carpentry",
    category: "Business site",
    url: "https://parallelcarpentry.com/",
    previewImage: "/portfolio/parallel-carp.png",
    whatTheyNeeded:
      "A professional web presence to showcase kitchen remodels and attract local clients in Charlotte, NC.",
    result:
      "A clean, modern site highlighting services, past projects, and a clear way for customers to get in touch.",
  },
  {
    slug: "paintball-sample-site",
    title: "Ironridge Paintball",
    category: "Business site",
    url: "https://ironridgepaintball.netlify.app/",
    whatTheyNeeded:
      "A site for a paintball business to showcase their services.",
    result:
      "Simple site w/ a beautiful design to showcase their services and events.",
  },
  {
    slug: "nathankingtattoos",
    title: "Nathan King Tattoos",
    category: "Service site",
    url: "https://nathankingtattoos.com/",
    whatTheyNeeded: "A portfolio site to book sessions and show work.",
    result:
      "Simple site to showcase work and take inquiries. Built in a weekend.",
  },
  {
    slug: "dizzys-glizzies",
    title: "Dizzys Glizzies (Discontinued)",
    category: "Business site",
    url: "https://dizzys-glizzies.netlify.app",
    whatTheyNeeded:
      "A landing page for a discontinued late-night grub spot located at Imperial AVL.",
    result: "A beautiful hot dog themed landing page!",
  },
  {
    slug: "notle-client",
    title: "Notle.ai",
    category: "Software site",
    previewImage: "/portfolio/notle-screenshot.png",
    url: "https://notle-client.vercel.app/",
    whatTheyNeeded: "A clean app for their product.",
    result: "Built a simple, fast front-end they could ship with.",
  },
  {
    slug: "5th-world",
    title: "5th World Collective",
    category: "Collective / Community",
    previewImage: "/portfolio/5th-world-screenshot.png",
    url: "https://5thworldcollective.com/",
    whatTheyNeeded: "A hub for their collective and events.",
    result: "One place for the group, events, and links. No bloat.",
  },
  {
    slug: "swong-band",
    title: "Swong",
    category: "Band site",
    url: "https://swongband.com/",
    whatTheyNeeded: "A site to showcase music, bio, and upcoming shows.",
    result: "Clean band site with music, bio, shows, and contact.",
  },
  {
    slug: "so-close-band",
    title: "So Close",
    category: "Band site",
    url: "https://soclose-band.netlify.app/",
    whatTheyNeeded: "A site to showcase music, bio, and upcoming shows.",
    result: "Clean band site with music, bio, shows, and contact.",
  },
  {
    slug: "sharat3",
    title: "Sharat 3",
    category: "Band site",
    url: "https://sharat3.netlify.app/",
    whatTheyNeeded: "A site to showcase music, bio, and upcoming shows.",
    result: "Clean band site with music, bio, shows, and contact.",
  },
  {
    slug: "jon-qcountry",
    title: "Jon Qcountry",
    category: "Band site",
    url: "https://jonqcountry.netlify.app/",
    whatTheyNeeded: "A site to showcase music, bio, and upcoming shows.",
    result: "Clean band site with music, bio, shows, and contact. ",
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
];
