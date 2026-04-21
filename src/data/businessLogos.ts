import type { ImageMetadata } from 'astro';
import fifthWorldLogo from '../assets/business-logos/5thworld-logo.svg';
import cleanGrillsLogo from '../assets/business-logos/clean-grills-bbq-logo.webp';
import guessMethodLogo from '../assets/business-logos/GM-White.png';
import kieferLogo from '../assets/business-logos/kiefer-logo.webp';
import notleLogo from '../assets/business-logos/notle-logo-green.svg';
import parallelLogo from '../assets/business-logos/pc-log.webp';

export type BusinessLogoEntry = {
	title: string;
	href: string;
	logo: ImageMetadata;
};

/** Logos for social proof carousels. Order is display order. */
export const businessLogos: BusinessLogoEntry[] = [
	{
		title: 'Kiefer Property Solutions',
		href: 'https://kieferpropertysolutions.com/',
		logo: kieferLogo,
	},
	{
		title: 'Parallel Carpentry',
		href: 'https://parallelcarpentry.com/',
		logo: parallelLogo,
	},
	{
		title: 'Clean Grills BBQ',
		href: 'https://cleangrillscharlotte.com/',
		logo: cleanGrillsLogo,
	},
	{
		title: 'Notle',
		href: 'https://notle-client.vercel.app/',
		logo: notleLogo,
	},
	{
		title: '5th World Collective',
		href: 'https://5thworldcollective.com/',
		logo: fifthWorldLogo,
	},
	{
		title: 'Guess Method',
		href: 'https://guessmethod.com/',
		logo: guessMethodLogo,
	},
];
