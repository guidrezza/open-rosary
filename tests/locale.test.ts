
import { describe, it, expect } from 'vitest';
import { detectLocale } from '../src/lib/localeDetector';

describe('Locale Detector', () => {
    it('should map regional variations to supported locales', () => {
        expect(detectLocale('pt-PT')).toBe('pt-br');
        expect(detectLocale('pt')).toBe('pt-br');
        expect(detectLocale('es-ES')).toBe('es-mx');
        expect(detectLocale('es-AR')).toBe('es-mx');
        expect(detectLocale('es')).toBe('es-mx');
        expect(detectLocale('la')).toBe('la-va');
        expect(detectLocale('en-GB')).toBe('en-us');
    });

    it('should default to en-us', () => {
        expect(detectLocale('fr-FR')).toBe('en-us');
        expect(detectLocale('zh-CN')).toBe('en-us');
    });
});
