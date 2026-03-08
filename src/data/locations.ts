export type LocationSeo = {
  title?: string;
  description?: string;
  primaryKeyword?: string;
  secondaryKeywords?: string[];
};

export type LocationProof = {
  landmarks?: string[];
  counties?: string[];
  serviceRadiusMiles?: number;
  localOffer?: string;
};

export type Location = {
  slug: string;
  city: string;
  regionLabel: string;
  lat: number;
  lng: number;
  seo?: LocationSeo;
  proof?: LocationProof;
  primaryServices?: string[];
  notes?: string[];
};

export const locations: Location[] = [
  {
    slug: 'asheville-nc',
    city: 'Asheville',
    regionLabel: 'NC',
    lat: 35.5951,
    lng: -82.5515,
    seo: {
      title: 'Web Development in Asheville, NC | No Monthly Fees',
      description:
        'Web development in Asheville, NC | Fast custom sites, local SEO structure, no monthly fees. Call or text (508) 380-2013 for a free website quote today.',
      primaryKeyword: 'web development asheville nc',
      secondaryKeywords: ['asheville web developer', 'small business website development asheville'],
    },
    proof: {
      landmarks: ['Biltmore', 'River Arts District', 'Pack Square'],
      counties: ['Buncombe'],
      serviceRadiusMiles: 35,
      localOffer: 'Free 15-minute consult for Asheville businesses.',
    },
    primaryServices: ['One-page sites', 'Multi-page sites', 'SEO cleanup'],
    notes: [
      'Most clients here are service businesses (contractors, therapists, studios, restaurants).',
      'If you already have a Google Business Profile, I’ll connect it properly to the site.',
    ],
  },
  {
    slug: 'weaverville-nc',
    city: 'Weaverville',
    regionLabel: 'NC',
    lat: 35.6979,
    lng: -82.5607,
    seo: {
      title: 'Web design in Weaverville, NC | Computer Tommy',
      description:
        'Fast, clean websites for Weaverville businesses. No monthly fees, no builder junk.',
      primaryKeyword: 'web design weaverville nc',
      secondaryKeywords: ['weaverville website developer', 'small business web designer weaverville'],
    },
    proof: {
      counties: ['Buncombe'],
      serviceRadiusMiles: 25,
    },
    primaryServices: ['One-page sites', 'Simple service sites', 'Contact + quote forms'],
    notes: ['Straightforward sites for local businesses that need calls and bookings—not a complicated platform.'],
  },
  {
    slug: 'black-mountain-nc',
    city: 'Black Mountain',
    regionLabel: 'NC',
    lat: 35.6179,
    lng: -82.3212,
    seo: {
      title: 'Web design in Black Mountain, NC | Computer Tommy',
      description: 'Fast, clean websites for Black Mountain businesses. No monthly fees.',
    },
    proof: {
      counties: ['Buncombe'],
      serviceRadiusMiles: 30,
    },
  },
  {
    slug: 'hendersonville-nc',
    city: 'Hendersonville',
    regionLabel: 'NC',
    lat: 35.3187,
    lng: -82.4609,
    seo: {
      title: 'Web design in Hendersonville, NC | Computer Tommy',
      description: 'Fast, clean websites for Hendersonville businesses. No monthly fees.',
    },
    proof: {
      counties: ['Henderson'],
      serviceRadiusMiles: 30,
    },
  },
  {
    slug: 'arden-nc',
    city: 'Arden',
    regionLabel: 'NC',
    lat: 35.4651,
    lng: -82.5399,
    seo: {
      title: 'Web design in Arden, NC | Computer Tommy',
      description: 'Fast, clean websites for Arden businesses. No monthly fees.',
    },
    proof: {
      counties: ['Buncombe', 'Henderson'],
      serviceRadiusMiles: 25,
    },
  },
];

export function getLocationBySlug(slug: string): Location | undefined {
  return locations.find((l) => l.slug === slug);
}

function toRadians(degrees: number) {
  return (degrees * Math.PI) / 180;
}

export function distanceMiles(a: Pick<Location, 'lat' | 'lng'>, b: Pick<Location, 'lat' | 'lng'>) {
  // Haversine formula
  const R = 3958.8; // Earth radius in miles
  const dLat = toRadians(b.lat - a.lat);
  const dLng = toRadians(b.lng - a.lng);
  const lat1 = toRadians(a.lat);
  const lat2 = toRadians(b.lat);

  const h =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(lat1) * Math.cos(lat2) * Math.sin(dLng / 2) * Math.sin(dLng / 2);
  const c = 2 * Math.atan2(Math.sqrt(h), Math.sqrt(1 - h));
  return R * c;
}

export function getNearbyLocations(currentSlug: string, limit = 4): Location[] {
  const current = getLocationBySlug(currentSlug);
  if (!current) return [];

  return [...locations]
    .filter((l) => l.slug !== currentSlug)
    .map((l) => ({ l, d: distanceMiles(current, l) }))
    .sort((a, b) => a.d - b.d)
    .slice(0, limit)
    .map(({ l }) => l);
}

