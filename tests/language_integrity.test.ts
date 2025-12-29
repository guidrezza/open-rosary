
import { describe, it, expect } from 'vitest';
import { locales } from '../src/lib/i18n/index';

describe('Language Integrity', () => {
    it('should have all registered locales valid and non-empty', () => {
        const keys = Object.keys(locales);
        expect(keys.length).toBeGreaterThan(40); // We expect ~45
    });

    it('should contain critical prayer keys for every locale', () => {
        for (const [code, data] of Object.entries(locales)) {
            // Check Prayers
            expect(data.prayers, `Missing prayers object in ${code}`).toBeDefined();
            try {
                expect(data.prayers.sign_of_cross).toBeTruthy();
                expect(data.prayers.hail_mary).toBeTruthy();
                expect(data.prayers.our_father).toBeTruthy();
                expect(data.prayers.glory_be).toBeTruthy();
            } catch (e) {
                throw new Error(`Missing prayer keys in ${code}: ${e.message}`);
            }

            // Check Mysteries
            expect(data.mysteries).toBeDefined();
            expect(data.mysteries.joyful).toBeDefined();
            expect(data.mysteries.sorrowful).toBeDefined();
            expect(data.mysteries.glorious).toBeDefined();
            expect(data.mysteries.luminous).toBeDefined();

            // Check UI
            expect(data.ui).toBeDefined();
            expect(data.seo.title).toBeTruthy();
            expect(data.ui.start_button).toBeTruthy();
        }
    });

    it('should have consistent formatting for keys', () => {
        // Spot check a few random ones to ensure structure matches
        const en = locales['en-us'];
        const es = locales['es-mx'];

        expect(Object.keys(en.prayers)).toEqual(expect.arrayContaining(Object.keys(es.prayers)));
    });
});
