export type MysteryImageDef = {
	path: string;
	alt: string;
};

export const MYSTERY_IMAGES: Record<string, MysteryImageDef[]> = {
	joyful: [
		{ path: '/images/joyful/joyful_1_annunciation.webp', alt: 'The Annunciation' },
		{ path: '/images/joyful/joyful_2_visitation.webp', alt: 'The Visitation' },
		{ path: '/images/joyful/joyful_3_nativity.webp', alt: 'The Nativity' },
		{ path: '/images/joyful/joyful_4_presentation.webp', alt: 'The Presentation' },
		{ path: '/images/joyful/joyful_5_finding.webp', alt: 'The Finding in the Temple' }
	],
	luminous: [
		{ path: '/images/luminous/luminous_1_baptism.webp', alt: 'The Baptism in the Jordan' },
		{ path: '/images/luminous/luminous_2_wedding.webp', alt: 'The Wedding at Cana' },
		{
			path: '/images/luminous/luminous_3_proclamation.webp',
			alt: 'The Proclamation of the Kingdom'
		},
		{ path: '/images/luminous/luminous_4_transfiguration.webp', alt: 'The Transfiguration' },
		{
			path: '/images/luminous/luminous_5_institution.webp',
			alt: 'The Institution of the Eucharist'
		}
	],
	sorrowful: [
		{ path: '/images/sorrowful/sorrowful_1_agony.webp', alt: 'The Agony in the Garden' },
		{ path: '/images/sorrowful/sorrowful_2_scourging.webp', alt: 'The Scourging at the Pillar' },
		{ path: '/images/sorrowful/sorrowful_3_crowning.webp', alt: 'The Crowning with Thorns' },
		{ path: '/images/sorrowful/sorrowful_4_carrying.webp', alt: 'The Carrying of the Cross' },
		{ path: '/images/sorrowful/sorrowful_5_crucifixion.webp', alt: 'The Crucifixion' }
	],
	glorious: [
		{ path: '/images/glorious/glorious_1_resurrection.webp', alt: 'The Resurrection' },
		{ path: '/images/glorious/glorious_2_ascension.webp', alt: 'The Ascension' },
		{ path: '/images/glorious/glorious_3_descent.webp', alt: 'The Descent of the Holy Spirit' },
		{ path: '/images/glorious/glorious_4_assumption.webp', alt: 'The Assumption' },
		{ path: '/images/glorious/glorious_5_coronation.webp', alt: 'The Coronation of Mary' }
	]
};

export function getRandomImage(): MysteryImageDef {
	const mysteries = Object.keys(MYSTERY_IMAGES);
	const randomMystery = mysteries[Math.floor(Math.random() * mysteries.length)];
	const images = MYSTERY_IMAGES[randomMystery];
	const randomImage = images[Math.floor(Math.random() * images.length)];
	return randomImage;
}
