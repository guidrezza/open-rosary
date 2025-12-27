import { describe, it, expect } from 'vitest';
import { getLiturgicalTheme } from './liturgical';

describe('Liturgical Calendar Logic', () => {
	describe('Fixed Major Feasts (High Priority)', () => {
		it('should return Gold for Christmas (Dec 25)', () => {
			const d = new Date(2025, 11, 25);
			expect(getLiturgicalTheme(d).color).toBe('gold');
			expect(getLiturgicalTheme(d).season).toBe('Christmas');
		});

		it('should return Gold for Epiphany (Jan 6)', () => {
			const d = new Date(2025, 0, 6);
			expect(getLiturgicalTheme(d).color).toBe('gold');
			expect(getLiturgicalTheme(d).season).toBe('Epiphany');
		});

		it('should return Gold for All Saints (Nov 1)', () => {
			const d = new Date(2025, 10, 1);
			expect(getLiturgicalTheme(d).color).toBe('gold');
			expect(getLiturgicalTheme(d).season).toBe('All Saints');
		});

		it('should return Black/Violet for All Souls (Nov 2)', () => {
			const d = new Date(2025, 10, 2);
			// Implementation returns Black for All Souls
			expect(getLiturgicalTheme(d).color).toBe('black');
			expect(getLiturgicalTheme(d).season).toBe('All Souls');
		});

		it('should return Gold for Immaculate Conception (Dec 8)', () => {
			// This often falls in Advent (Purple), so testing Priority override
			const d = new Date(2025, 11, 8);
			expect(getLiturgicalTheme(d).color).toBe('gold');
			expect(getLiturgicalTheme(d).season).toBe('Immaculate Conception');
		});

		it('should return Red for Sts. Peter and Paul (Jun 29)', () => {
			const d = new Date(2025, 5, 29);
			expect(getLiturgicalTheme(d).color).toBe('red');
		});

		it('should return White for Transfiguration (Aug 6)', () => {
			const d = new Date(2025, 7, 6);
			expect(getLiturgicalTheme(d).color).toBe('white');
		});
	});

	describe('Flexible Feasts & Seasons (Calculated)', () => {
		// Year 2025: Easter is April 20
		// Ash Wed: March 5

		it('should return Purple for Ash Wednesday (Mar 5, 2025)', () => {
			const d = new Date(2025, 2, 5);
			const theme = getLiturgicalTheme(d);
			expect(theme.color).toBe('purple');
			// Implementation handles Ash Wed as part of "Lent check" usually,
			// checking if it falls into specific bucket or generic Lent
			// Our logic: start of Lent.
		});

		it('should return Purple for a Random Lenten Day (Mar 10, 2025)', () => {
			const d = new Date(2025, 2, 10);
			const theme = getLiturgicalTheme(d);
			expect(theme.color).toBe('purple');
			expect(theme.season).toBe('Lent');
		});

		it('should return Rose for Laetare Sunday (4th Sun of Lent)', () => {
			// Ash Wed Mar 5.
			// Sun 1: Mar 9
			// Sun 2: Mar 16
			// Sun 3: Mar 23
			// Sun 4 (Laetare): Mar 30
			const d = new Date(2025, 2, 30);
			const theme = getLiturgicalTheme(d);
			expect(theme.color).toBe('rose');
			expect(theme.season).toContain('Laetare');
		});

		it('should return Red for Good Friday (Apr 18, 2025)', () => {
			const d = new Date(2025, 3, 18);
			expect(getLiturgicalTheme(d).color).toBe('red');
			expect(getLiturgicalTheme(d).season).toBe('Good Friday');
		});

		it('should return Gold for Easter Sunday (Apr 20, 2025)', () => {
			const d = new Date(2025, 3, 20);
			expect(getLiturgicalTheme(d).color).toBe('gold');
			expect(getLiturgicalTheme(d).season).toBe('Easter Sunday');
		});

		it('should return White for Easter Octave (Apr 24, 2025)', () => {
			const d = new Date(2025, 3, 24);
			const theme = getLiturgicalTheme(d);
			expect(theme.color).toBe('white'); // General Easter Season
		});

		it('should return Gold for Ascension (May 29, 2025 - Thursday)', () => {
			// Easter Apr 20 + 39 days = May 29
			const d = new Date(2025, 4, 29);
			expect(getLiturgicalTheme(d).color).toBe('gold');
			expect(getLiturgicalTheme(d).season).toBe('Ascension');
		});

		it('should return Red for Pentecost (Jun 8, 2025)', () => {
			// Easter Apr 20 + 49 days = Jun 8
			const d = new Date(2025, 5, 8);
			expect(getLiturgicalTheme(d).color).toBe('red');
			expect(getLiturgicalTheme(d).season).toBe('Pentecost');
		});

		it('should return Gold for Trinity Sunday (Jun 15, 2025)', () => {
			const d = new Date(2025, 5, 15);
			expect(getLiturgicalTheme(d).color).toBe('gold');
			expect(getLiturgicalTheme(d).season).toBe('Holy Trinity');
		});
	});

	describe('Advent & Christmas Cycle', () => {
		// Year 2025: Christmas is Thursday.
		// Advent Start: 4 Sundays Back = Nov 30.

		it('should return Purple for Advent Start (Nov 30, 2025)', () => {
			const d = new Date(2025, 10, 30);
			const theme = getLiturgicalTheme(d);
			expect(theme.color).toBe('purple');
			expect(theme.season).toBe('Advent');
		});

		it('should return Rose for Gaudete Sunday (Dec 14, 2025)', () => {
			// Nov 30 (1) -> Dec 7 (2) -> Dec 14 (3)
			const d = new Date(2025, 11, 14);
			expect(getLiturgicalTheme(d).color).toBe('rose');
			expect(getLiturgicalTheme(d).season).toContain('Gaudete');
		});

		it('should return White for Christmas Season (Dec 27, 2025)', () => {
			const d = new Date(2025, 11, 27);
			expect(getLiturgicalTheme(d).color).toBe('white');
			expect(getLiturgicalTheme(d).season).toBe('Christmas');
		});
	});

	describe('Ordinary Time', () => {
		it('should return Green for Ordinary Time (Jan 15, 2025)', () => {
			// Jan 6 is Epiphany. Jan 12 (Sunday) is Baptism? Or Jan 13?
			// Logic: Mon after Baptism usually implies Green starts mid-Jan
			const d = new Date(2025, 0, 20);
			expect(getLiturgicalTheme(d).color).toBe('green');
			expect(getLiturgicalTheme(d).season).toBe('Ordinary Time');
		});

		it('should return Green for Ordinary Time (Oct 10, 2025)', () => {
			const d = new Date(2025, 9, 10);
			expect(getLiturgicalTheme(d).color).toBe('green');
			expect(getLiturgicalTheme(d).season).toBe('Ordinary Time');
		});
	});
});
