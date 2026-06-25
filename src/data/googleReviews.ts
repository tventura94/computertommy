export interface GoogleReview {
	name: string;
	quote: string;
	/** Optional context line under the name (business, role, etc.). */
	context?: string;
}

export const googleReviews: GoogleReview[] = [
	{
		name: 'Amy Withers',
		quote:
			'He was very professional and worked with me every step of the way. He did my website right away after payment and I barely had to wait. I highly recommend him to anyone!! Thank you so much',
	},
	{
		name: 'Nathan Hughes',
		quote:
			"If you're a musician, then you need to reach out to Tommy to handle your electronic press kit! He's easy to work with and he does a great job!",
		context: 'Musician',
	},
	{
		name: 'Craig Cooke',
		quote:
			"I can't say enough about what Tom has done for my business and my website. He is very professional knows exactly what he's doing. Always keeps you updated on the process. I would highly recommend",
	},
	{
		name: 'Chris Ver Voort',
		quote:
			"I needed a simple but good looking website and didn't want to pay monthly fees or a crazy price. I wanted some customizable content features. Tom is a skilled web developer, and made/tweaked everything how I wanted. Pricing was reasonable too! I'd definitely recommend him.",
	},
	{
		name: 'Jon Q',
		quote:
			'Very positive experience with Tommy. Quick to make changes as requested and very reasonable with his rates. Highly recommend this man.',
	},
	{
		name: 'Ocho Industries',
		quote:
			'Tom was a pleasure to work with, quick and efficient, he knew the resources to tap into to get an amazing product done fast with minimal hassle. Will def use him again!',
	},
	{
		name: 'Nicholas Kiefer',
		quote:
			'I was in need of help with my website design. I reached out to Tommy he had me up and going in 2 days. The website is phenomenal!',
	},
	{
		name: 'Michael Birchfield',
		quote:
			"Tom was great! Explained everything to me and implemented it with zero hiccups. Didn't take a week. It literally took less than 48 hours for our website to be up and running. Extremely reasonable. Godaddy charged me well over $2k over the last. Looking forward having more clients and less money spent to do so. Highly recommend!",
		context: 'Clean Grills Charlotte',
	},
];

export function reviewInitials(name: string) {
	return name
		.split(/\s+/)
		.filter(Boolean)
		.map((part) => part[0])
		.slice(0, 2)
		.join('')
		.toUpperCase();
}
