
import { describe, it, expect } from 'vitest';
import { detectLocale } from '../src/lib/localeDetector';

describe('Locale Detector', () => {
    it('should map regional variations to supported locales', () => {
        // Portugal should now map to Portugal, not Brazil
        expect(detectLocale('pt-PT')).toBe('pt-pt');
        // Generic PT defaults to Brazil
        expect(detectLocale('pt')).toBe('pt-br');

        // Spain should map to Spain
        expect(detectLocale('es-ES')).toBe('es-es');
        // Argentina defaults to Mexico (LatAm)
        expect(detectLocale('es-AR')).toBe('es-mx');
        // Generic ES defaults to Mexico
        expect(detectLocale('es')).toBe('es-mx');

        // Latin
        expect(detectLocale('la')).toBe('la-va');

        // English variations (we only have US)
        expect(detectLocale('en-GB')).toBe('en-us');
        expect(detectLocale('en-AU')).toBe('en-us');
    });

    it('should handle new languages', () => {
        expect(detectLocale('fr-FR')).toBe('fr-fr');
        expect(detectLocale('de-DE')).toBe('de-de');
        expect(detectLocale('it')).toBe('it-it');
        expect(detectLocale('pl')).toBe('pl-pl');
        expect(detectLocale('vi')).toBe('vi-vn');
        expect(detectLocale('sw-TZ')).toBe('sw-tz');
        expect(detectLocale('sw')).toBe('sw-ke'); // Default Kenya
    });

    it('should fuzzy match Chinese', () => {
        expect(detectLocale('zh-CN')).toBe('zh-cn');
        expect(detectLocale('zh-SG')).toBe('zh-cn'); // Singapore -> Simplified
        expect(detectLocale('zh-TW')).toBe('zh-tw');
        expect(detectLocale('zh-HK')).toBe('zh-tw'); // HK -> Traditional
    });

    it('should default to en-us for unknown languages', () => {
        expect(detectLocale('xx-XX')).toBe('en-us');
    });
});
