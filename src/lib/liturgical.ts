export type LiturgicalColor = 'green' | 'white' | 'red' | 'purple' | 'rose' | 'black';

export interface LiturgicalTheme {
    color: LiturgicalColor;
    season: string;
    cssVars: {
        '--theme-color': string;
        '--glass-bg': string;
        '--glass-border': string;
        '--text-highlight': string;
    };
}

// Color Palettes (HSL for easy CSS variable usage if needed, but strings are fine)
// We need "diffused theme color with a heavily blurred glassmorphism effect"
// So --theme-color is the strong background connection, --glass-bg is the panel background.
// UPDATED: Glass-bg opacity increased to 0.75 for visible frosted glass effect

// Modern, Glass-Friendly Palettes
export const PALETTES: Record<LiturgicalColor, LiturgicalTheme['cssVars']> = {
    green: {
        '--theme-color': '#059669', // Emerald 600 (Darker than 500)
        '--glass-bg': 'rgba(6, 78, 59, 0.75)', // Increased opacity for visible glass
        '--glass-border': 'rgba(52, 211, 153, 0.2)',
        '--text-highlight': '#6ee7b7'
    },
    white: {
        '--theme-color': '#64748b', // Slate 500 (Much darker than Gray 100 for visibility)
        '--glass-bg': 'rgba(30, 41, 59, 0.75)', // Dark slate instead of white for visibility
        '--glass-border': 'rgba(255, 255, 255, 0.2)',
        '--text-highlight': '#e2e8f0' // Slate 200
    },
    red: {
        '--theme-color': '#dc2626', // Red 600
        '--glass-bg': 'rgba(127, 29, 29, 0.75)', // Increased opacity
        '--glass-border': 'rgba(248, 113, 113, 0.2)',
        '--text-highlight': '#fca5a5'
    },
    purple: {
        '--theme-color': '#7c3aed', // Violet 600
        '--glass-bg': 'rgba(76, 29, 149, 0.75)', // Increased opacity
        '--glass-border': 'rgba(167, 139, 250, 0.2)',
        '--text-highlight': '#d8b4fe'
    },
    rose: {
        '--theme-color': '#e11d48', // Rose 600
        '--glass-bg': 'rgba(136, 19, 55, 0.75)', // Increased opacity
        '--glass-border': 'rgba(251, 113, 133, 0.2)',
        '--text-highlight': '#fda4af'
    },
    black: {
        '--theme-color': '#404040', // Neutral 700 (Slightly lighter than pure black to show up)
        '--glass-bg': 'rgba(0, 0, 0, 0.75)', // Increased opacity
        '--glass-border': 'rgba(100, 100, 100, 0.2)',
        '--text-highlight': '#e5e5e5'
    }
};

// Helper: Get Easter Date for a year (Anonymous algorithm)
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

// Helper: Add days to date
function addDays(date: Date, days: number): Date {
    const result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
}

export function getLiturgicalTheme(date: Date = new Date()): LiturgicalTheme {
    const year = date.getFullYear();
    const month = date.getMonth(); // 0-11
    const day = date.getDate();

    // Reset time for accurate comparison
    const current = new Date(year, month, day);

    // Fixed Dates
    // Christmas: Dec 25 - Jan 10 (approx)
    // Actually Christmas season ends on Baptism of the Lord (Sunday after Jan 6).
    // Simplify: Dec 25 - Jan 12.
    if ((month === 11 && day >= 25) || (month === 0 && day <= 12)) {
        return { color: 'white', season: 'Christmas', cssVars: PALETTES.white };
    }

    // Advent: Starts 4 Sundays before Dec 25. Ends Dec 24.
    // Earliest Nov 27, Latest Dec 3.
    // Simplify: Dec 1 - Dec 24 is safe bet for logic, or calculate specifically.
    // Let's do simple check: Month 11 (Dec) before 25th -> Purple.
    // Also late Nov? Just sticking to Dec < 25 for "Advent" approximation or check weeks.
    const xmas = new Date(year, 11, 25);
    const adventStart = new Date(xmas);
    adventStart.setDate(xmas.getDate() - (xmas.getDay() || 7) - (3 * 7)); // 4th Sunday before

    if (current >= adventStart && current < xmas) {
        // Gaudete Sunday (3rd Sunday of Advent)
        // Check if Sunday and roughly 2 weeks into Advent
        // For simplicity, let's stick to Purple unless strict requirements.
        // Prompt says "Rose... Gaudete Sunday".
        // Let's calculate:
        // 3rd Sunday is adventStart + 14 days.
        const gaudete = addDays(adventStart, 14);
        if (current.getTime() === gaudete.getTime()) {
            return { color: 'rose', season: 'Advent (Gaudete)', cssVars: PALETTES.rose };
        }
        return { color: 'purple', season: 'Advent', cssVars: PALETTES.purple };
    }

    // Easter Cycle
    const easter = getEasterDate(year);
    const ashWed = addDays(easter, -46); // 40 days + Sundays? Lent is 46 days before Easter.
    const pentecost = addDays(easter, 49);

    // Lent
    if (current >= ashWed && current < easter) {
        // Laetare Sunday (4th Sunday of Lent)
        // Lent Start + ~24 days?
        // 4th Sunday of Lent is 21 days before Easter.
        const laetare = addDays(easter, -21);
        if (current.getTime() === laetare.getTime()) {
            return { color: 'rose', season: 'Lent (Laetare)', cssVars: PALETTES.rose };
        }

        // Palm Sunday (Sunday before Easter)
        const palmSun = addDays(easter, -7);
        if (current.getTime() === palmSun.getTime()) {
            return { color: 'red', season: 'Palm Sunday', cssVars: PALETTES.red };
        }

        // Good Friday (Friday before Easter)
        const goodFri = addDays(easter, -2);
        if (current.getTime() === goodFri.getTime()) {
            return { color: 'red', season: 'Good Friday', cssVars: PALETTES.red };
        }

        return { color: 'purple', season: 'Lent', cssVars: PALETTES.purple };
    }

    // Easter Season
    if (current >= easter && current < pentecost) {
        return { color: 'white', season: 'Easter', cssVars: PALETTES.white };
    }

    // Pentecost
    if (current.getTime() === pentecost.getTime()) {
        return { color: 'red', season: 'Pentecost', cssVars: PALETTES.red };
    }

    // Ordinary Time / Other
    // Default to Green
    return { color: 'green', season: 'Ordinary Time', cssVars: PALETTES.green };
}
