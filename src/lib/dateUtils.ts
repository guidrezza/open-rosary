import type { LiturgicalColor } from './liturgical';

export interface LiturgicalData {
    season: string;
    color: LiturgicalColor;
    celebration?: string;
}

// Helper: Get Easter Date for a given year (Western/Gregorian)
// Algorithm: Anonymous / Meeus/Jones/Butcher
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
    const month = Math.floor((h + l - 7 * m + 114) / 31); // 3=March, 4=April
    const day = ((h + l - 7 * m + 114) % 31) + 1;
    return new Date(year, month - 1, day);
}

// Helper: Add days to date
function addDays(date: Date, days: number): Date {
    const result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
}

// Helper: Get Advent Start (Sunday closest to Nov 30? No, 4th Sunday before Xmas)
// Advent begins on the Sunday closest to St. Andrew (Nov 30), ranging from Nov 27 to Dec 3.
// Actually, it's always the 4th Sunday before Dec 25.
function getAdventStart(year: number): Date {
    const xmas = new Date(year, 11, 25); // Dec 25
    const xmasDay = xmas.getDay(); // 0=Sun
    // If Xmas is Sun, 4th Sunday before is Dec 3.
    // If Xmas is Mon, 4th Sunday before is Dec 3 - 6 = Nov 27 ... Wait.
    // Logic: Find Sunday before Dec 25, then count back 3 more Sundays.
    const offset = xmasDay === 0 ? 7 : xmasDay; // Days to subtract to get previous Sunday (if Xmas is Sun, previous Sunday is Dec 18)
    // Wait, simpler: Advent starts 3 Sundays before the Sunday OF or BEFORE Christmas.
    // Actually, simple rule: 4 Sundays of Advent.
    // Finds Sunday nearest Nov 30.
    const stAndrew = new Date(year, 10, 30);
    const day = stAndrew.getDay();
    const diff = day >= 4 ? 7 - day : -day; // nearest Sunday?
    // Let's stick to: Sunday falling on or between Nov 27 and Dec 3.
    // We can just calculate 4 weeks back from Christmas.
    // Simplified: Find Dec 25. Subtract (days_since_sunday + 21) days?
    // Correct method:
    // Dec 25.
    // Last Sunday before Dec 25 (or Dec 25 itself if Sunday) is 4th Sunday of Advent? No.
    // 4th Sunday of Advent is the Sunday before Xmas.
    // So 1st Sunday is 3 weeks before that.
    const d = new Date(year, 11, 25);
    d.setDate(d.getDate() - ((d.getDay() + 6) % 7) - 1 - 21); // Rough approx, let's refine.
    // Better: Iterate Dec 25 backwards to nearest Sunday, then subtract 21 days.
    const x = new Date(year, 11, 25);
    const dayOfXmas = x.getDay();
    const daysToLastSun = dayOfXmas === 0 ? 0 : dayOfXmas;
    // Wait, if Dec 25 is Sunday, that is usually Christmas Day, not Advent 4. Advent 4 is Dec 18.
    // Actually, if Dec 25 is Sunday, Advent 4 is Dec 18.
    // So we find the Sunday before Dec 25.
    // Sunday before Dec 25:
    const sundayBeforeXmas = new Date(year, 11, 25 - (dayOfXmas === 0 ? 7 : dayOfXmas));
    const adventStart = new Date(sundayBeforeXmas);
    adventStart.setDate(sundayBeforeXmas.getDate() - 21);
    return adventStart;
}

export function getLiturgicalData(date: Date): LiturgicalData {
    const year = date.getFullYear();
    const month = date.getMonth(); // 0-11
    const day = date.getDate();

    // Reset time for comparison
    const current = new Date(year, month, day);

    // 1. Fixed Feasts
    // Epiphany: Jan 6 (Traditional) or nearest Sunday. Let's stick to Jan 6 for simplicity or Sunday? Open Rosary is global.
    // Let's us general seasons mostly.

    // Christmas Season: Dec 25 to Baptism of Lord (Sunday after Jan 6).
    // Advent: Late Nov to Dec 24.

    // Check Advent/Christmas first (end of year)
    const adventStart = getAdventStart(year);
    const xmas = new Date(year, 11, 25);

    if (current >= adventStart && current < xmas) {
        // Gaudete Sunday: 3rd Sunday of Advent
        const advent3 = addDays(adventStart, 14);
        if (current.getTime() === advent3.getTime()) {
            return { season: 'Advent', celebration: 'Gaudete Sunday', color: 'rose' };
        }
        return { season: 'Advent', color: 'purple' };
    }

    if (current >= xmas || (month === 0 && day <= 13)) { // Rough end of Xmas season
        return { season: 'Christmas', color: 'white' };
    }

    // 2. Mobile Seasons (Lent/Easter)
    const easter = getEasterDate(year);
    const ashWed = addDays(easter, -46);
    const pentecost = addDays(easter, 49);

    // Lent
    if (current >= ashWed && current < easter) {
        // Laetare Sunday: 4th Sunday of Lent (Easter - 21 days)
        const laetare = addDays(easter, -21);
        if (current.getTime() === laetare.getTime()) {
            return { season: 'Lent', celebration: 'Laetare Sunday', color: 'rose' };
        }
        // Palm Sunday: Sunday before Easter
        const palmSun = addDays(easter, -7);
        if (current >= palmSun && current < easter) { // Holy Week roughly
            return { season: 'Holy Week', color: 'red' };
        }
        if (current.getTime() === addDays(easter, -2).getTime()) { // Good Friday
            return { season: 'Good Friday', color: 'red' }; // Or black? Red is standard.
        }

        return { season: 'Lent', color: 'purple' };
    }

    // Easter Season
    if (current >= easter && current <= pentecost) {
        if (current.getTime() === pentecost.getTime()) {
            return { season: 'Easter', celebration: 'Pentecost', color: 'red' };
        }
        return { season: 'Easter', color: 'white' };
    }

    // Ordinary Time (rest of the year)
    // Could check for specific martyrs/feasts here if needed for Red/White overrides,
    // but default to Green.

    return { season: 'Ordinary Time', color: 'green' };
}
