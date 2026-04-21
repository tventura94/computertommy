import type { ImageMetadata } from 'astro';
import hvac from '../assets/trades/hvac.webp';
import landscaper from '../assets/trades/landscaper.jpg';
import painter from '../assets/trades/painter.jpg';
import plumber from '../assets/trades/plumber.jpg';
import powerwasher from '../assets/trades/powerwasher.jpg';
import roofer from '../assets/trades/roofer.jpg';

export type WebdevTradePhoto = {
	image: ImageMetadata;
	/** Short label on the mosaic tile */
	title: string;
	alt: string;
};

/** Order matches collage positions (left to right overlap). */
export const webdevTradePhotos: WebdevTradePhoto[] = [
	{ image: plumber, title: 'Plumbing', alt: 'Plumber working on pipes' },
	{ image: roofer, title: 'Roofing', alt: 'Roofer on a residential roof' },
	{ image: landscaper, title: 'Landscaping', alt: 'Landscaping and outdoor work' },
	{ image: painter, title: 'Painting', alt: 'Painter finishing interior work' },
	{ image: powerwasher, title: 'Pressure washing', alt: 'Pressure washing exterior surfaces' },
	{ image: hvac, title: 'HVAC', alt: 'HVAC technician with equipment' },
];
