export type LiturgicalColor =
	| 'green'
	| 'white'
	| 'red'
	| 'purple'
	| 'rose'
	| 'gold'
	| 'silver'
	| 'black';

export interface LiturgicalTheme {
	color: LiturgicalColor;
	season: string;
	key: string;
	cssVars: {
		'--theme-color': string;
		'--glass-bg': string;
		'--glass-border': string;
		'--text-highlight': string;
	};
}

// Modern, Glass-Friendly Palettes (Refined for "Lights on Gray" aesthetic)
export const PALETTES: Record<LiturgicalColor, LiturgicalTheme['cssVars']> = {
	green: {
		'--theme-color': '#059669', // Emerald 600
		'--glass-bg': 'rgba(6, 78, 59, 0.6)',
		'--glass-border': 'rgba(52, 211, 153, 0.2)',
		'--text-highlight': '#6ee7b7'
	},
	white: {
		'--theme-color': '#e2e8f0', // Slate 200 (Bright White/Grey)
		'--glass-bg': 'rgba(255, 255, 255, 0.1)',
		'--glass-border': 'rgba(255, 255, 255, 0.3)',
		'--text-highlight': '#f8fafc'
	},
	red: {
		'--theme-color': '#dc2626', // Red 600
		'--glass-bg': 'rgba(127, 29, 29, 0.6)',
		'--glass-border': 'rgba(248, 113, 113, 0.3)',
		'--text-highlight': '#fca5a5'
	},
	purple: {
		'--theme-color': '#7c3aed', // Violet 600
		'--glass-bg': 'rgba(76, 29, 149, 0.6)',
		'--glass-border': 'rgba(167, 139, 250, 0.3)',
		'--text-highlight': '#d8b4fe'
	},
	rose: {
		'--theme-color': '#e11d48', // Rose 600
		'--glass-bg': 'rgba(136, 19, 55, 0.5)',
		'--glass-border': 'rgba(251, 113, 133, 0.3)',
		'--text-highlight': '#fda4af'
	},
	gold: {
		'--theme-color': '#f59e0b', // Amber 500 (Gold)
		'--glass-bg': 'rgba(180, 83, 9, 0.5)',
		'--glass-border': 'rgba(251, 191, 36, 0.4)',
		'--text-highlight': '#fde68a'
	},
	silver: {
		'--theme-color': '#94a3b8', // Slate 400 (Silver/Blueish)
		'--glass-bg': 'rgba(51, 65, 85, 0.5)',
		'--glass-border': 'rgba(148, 163, 184, 0.3)',
		'--text-highlight': '#e2e8f0'
	},
	black: {
		'--theme-color': '#404040', // Neutral 700
		'--glass-bg': 'rgba(23, 23, 23, 0.7)',
		'--glass-border': 'rgba(82, 82, 82, 0.3)',
		'--text-highlight': '#d4d4d4'
	}
};

// --- Helper Functions ---

function getEasterDate(year: number): Date {
	const a = year % 19;
	const b = Math.floor(year / 100);
	const c = year % 100;
	const d = Math.floor(b / 4);
	const e = b % 4;
	const f = Math.floor((b + 8) / 25);
	const g = Math.floor((b - f + 1) / 3);
	const h = (19 * a + b - d - g + 15) % 30;
	const i = Math.floor(c / 4);
	const k = c % 4;
	const l = (32 + 2 * e + 2 * i - h - k) % 7;
	const m = Math.floor((a + 11 * h + 22 * l) / 451);
	const month = Math.floor((h + l - 7 * m + 114) / 31) - 1; // 0-indexed
	const day = ((h + l - 7 * m + 114) % 31) + 1;
	return new Date(year, month, day);
}

function addDays(date: Date, days: number): Date {
	const result = new Date(date);
	result.setDate(result.getDate() + days);
	return result;
}

function isSameDate(d1: Date, d2: Date): boolean {
	return d1.getMonth() === d2.getMonth() && d1.getDate() === d2.getDate();
}

// --- Main Logic ---

export function getLiturgicalTheme(date: Date = new Date()): LiturgicalTheme {
	const year = date.getFullYear();
	const month = date.getMonth(); // 0-11
	const day = date.getDate();
	const current = new Date(year, month, day);

	// 1. FIXED FEASTS (High Priority)
	const feastKey = `${month}-${day}`;

	const fixedFeasts: Record<
		string,
		{ color: LiturgicalColor; season: string; key: string }
	> = {
		'0-1': { color: 'gold', season: 'Mary, Mother of God', key: 'mother_of_god' },
		'0-6': { color: 'gold', season: 'Epiphany', key: 'epiphany' },
		'1-2': { color: 'white', season: 'Presentation of the Lord', key: 'presentation' },
		'2-19': { color: 'silver', season: 'St. Joseph', key: 'st_joseph' },
		'2-25': { color: 'silver', season: 'Annunciation', key: 'annunciation' },
		'5-24': { color: 'white', season: 'Nativity of St. John Baptist', key: 'nativity_john_baptist' },
		'5-29': { color: 'red', season: 'Sts. Peter and Paul', key: 'st_peter_paul' },
		'7-6': { color: 'white', season: 'Transfiguration', key: 'transfiguration' },
		'7-15': { color: 'gold', season: 'Assumption', key: 'assumption' },
		'8-14': { color: 'red', season: 'Exaltation of the Holy Cross', key: 'exaltation_cross' },
		'8-29': { color: 'white', season: 'Archangels', key: 'archangels' },
		'10-1': { color: 'gold', season: 'All Saints', key: 'all_saints' },
		'10-2': { color: 'black', season: 'All Souls', key: 'all_souls' },
		'10-9': { color: 'white', season: 'Dedication of Lateran Basilica', key: 'lateran_basilica' },
		'11-8': { color: 'gold', season: 'Immaculate Conception', key: 'immaculate_conception' },
		'11-12': { color: 'white', season: 'Our Lady of Guadalupe', key: 'guadalupe' },
		'11-25': { color: 'gold', season: 'Christmas', key: 'christmas' },
		'11-30': { color: 'white', season: 'Holy Family', key: 'holy_family' }
	};

	if (fixedFeasts[feastKey]) {
		const f = fixedFeasts[feastKey];
		return { color: f.color, season: f.season, key: f.key, cssVars: PALETTES[f.color] };
	}

	// 2. CALCULATED DATES & SEASONS

	// Anchors
	const easter = getEasterDate(year);
	const ashWed = addDays(easter, -46);
	const pentecost = addDays(easter, 49);
	const adventStart = new Date(year, 11, 25);
	adventStart.setDate(25 - (adventStart.getDay() || 7) - 3 * 7); // 4th Sunday before Christmas

	// Christmas Cycle (Logic for calculated feasts/periods)
	const christmas = new Date(year, 11, 25);

	// Baptism of the Lord (Current Year Jan Logic)
	const epiphanyThisYear = new Date(year, 0, 6);
	const baptismOfLordThisYear = addDays(epiphanyThisYear, (7 - epiphanyThisYear.getDay()) % 7 || 7);

	// General Christmas Season
	if ((month === 11 && day >= 25) || (month === 0 && day <= baptismOfLordThisYear.getDate())) {
		return { color: 'white', season: 'Christmas', key: 'christmas', cssVars: PALETTES.white };
	}

	// Lent
	if (current >= ashWed && current < easter) {
		const daysSinceAsh = Math.floor((current.getTime() - ashWed.getTime()) / (1000 * 60 * 60 * 24));

		// Palm Sunday (Sunday before Easter)
		if (isSameDate(current, addDays(easter, -7)))
			return { color: 'red', season: 'Palm Sunday', key: 'palm_sunday', cssVars: PALETTES.red };

		// Triduum
		if (isSameDate(current, addDays(easter, -3)))
			return {
				color: 'red',
				season: 'Holy Thursday',
				key: 'holy_thursday',
				cssVars: PALETTES.red
			};
		if (isSameDate(current, addDays(easter, -2)))
			return { color: 'red', season: 'Good Friday', key: 'good_friday', cssVars: PALETTES.red };
		if (isSameDate(current, addDays(easter, -1)))
			return {
				color: 'gold',
				season: 'Easter Vigil',
				key: 'easter_sunday',
				cssVars: PALETTES.gold
			}; // Use Easter key for simplicity

		// Laetare (4th Sunday)
		if (isSameDate(current, addDays(easter, -21)))
			return { color: 'rose', season: 'Lent (Laetare)', key: 'laetare', cssVars: PALETTES.rose };

		return { color: 'purple', season: 'Lent', key: 'lent', cssVars: PALETTES.purple };
	}

	// Easter Season
	if (current >= easter && current <= pentecost) {
		if (isSameDate(current, easter))
			return {
				color: 'gold',
				season: 'Easter Sunday',
				key: 'easter_sunday',
				cssVars: PALETTES.gold
			};
		if (isSameDate(current, addDays(easter, 7)))
			return {
				color: 'white',
				season: 'Divine Mercy',
				key: 'divine_mercy',
				cssVars: PALETTES.white
			};
		if (isSameDate(current, addDays(easter, 39)))
			return { color: 'gold', season: 'Ascension', key: 'ascension', cssVars: PALETTES.gold };
		if (isSameDate(current, pentecost))
			return { color: 'red', season: 'Pentecost', key: 'pentecost', cssVars: PALETTES.red };

		return { color: 'white', season: 'Easter', key: 'easter', cssVars: PALETTES.white };
	}

	// Advent
	if (current >= adventStart && current < christmas) {
		// Gaudete: 3rd Sunday. Start + 14 days.
		if (isSameDate(current, addDays(adventStart, 14)))
			return {
				color: 'rose',
				season: 'Advent (Gaudete)',
				key: 'gaudete',
				cssVars: PALETTES.rose
			};
		return { color: 'purple', season: 'Advent', key: 'advent', cssVars: PALETTES.purple };
	}

	// Ordinary Time / Calculated Solemnities
	// Trinity Sunday: Pentecost + 7
	const trinity = addDays(pentecost, 7);
	if (isSameDate(current, trinity))
		return { color: 'gold', season: 'Holy Trinity', key: 'trinity', cssVars: PALETTES.gold };

	// Corpus Christi: Trinity + 4(Thu) or +7(Sun)
	// Usually Thursday.
	const corpus = addDays(trinity, 4);
	if (isSameDate(current, corpus))
		return {
			color: 'gold',
			season: 'Corpus Christi',
			key: 'corpus_christi',
			cssVars: PALETTES.gold
		};

	// Sacred Heart: Pentecost + 19 (Friday after Corpus Christi oct)
	const sacredHeart = addDays(pentecost, 19);
	if (isSameDate(current, sacredHeart))
		return {
			color: 'white',
			season: 'Sacred Heart',
			key: 'sacred_heart',
			cssVars: PALETTES.white
		};

	// Christ the King: Sunday before Advent Start
	const christKing = addDays(adventStart, -7);
	if (isSameDate(current, christKing))
		return {
			color: 'gold',
			season: 'Christ the King',
			key: 'christ_king',
			cssVars: PALETTES.gold
		};

	// Default
	return { color: 'green', season: 'Ordinary Time', key: 'ordinary', cssVars: PALETTES.green };
}
