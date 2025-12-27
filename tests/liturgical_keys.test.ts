
import { describe, it, expect } from 'vitest';
import { getLiturgicalTheme } from '../src/lib/liturgical';
import { en } from '../prayers-and-verses/en-us/constants';

describe('Liturgical Keys Translation', () => {
    it('should have valid translation keys for all major feasts', () => {
        const testCases = [
            { date: new Date(2025, 11, 25), expectedKey: 'christmas' }, // Dec 25
            { date: new Date(2025, 0, 6), expectedKey: 'epiphany' }, // Jan 6
            { date: new Date(2025, 10, 1), expectedKey: 'all_saints' }, // Nov 1
            { date: new Date(2025, 6, 15), expectedKey: 'ordinary' } // July 15 (Ordinary)
        ];

        testCases.forEach(({ date, expectedKey }) => {
            const theme = getLiturgicalTheme(date);
            // Verify key is returned
            expect(theme.key).toBeDefined();
            // Verify key exists in translation dictionary
            expect(en.ui.liturgical[theme.key]).toBeDefined();
            // Verify it matches expected if critical
            if (expectedKey !== 'ordinary') {
                expect(theme.key).toBe(expectedKey);
            }
        });
    });

    it('should return a key for every single day of the year (smoke test)', () => {
        // Iterate 365 days
        const start = new Date(2025, 0, 1);
        for (let i = 0; i < 365; i++) {
            const d = new Date(start);
            d.setDate(start.getDate() + i);
            const theme = getLiturgicalTheme(d);

            // Critical check: Ensure the returned key ACTUALLY exists in the English dictionary
            if (!en.ui.liturgical[theme.key]) {
                throw new Error(`Missing translation for key: ${theme.key} on date ${d.toDateString()}`);
            }
        }
    });
});
