
export function detectLocale(navLang: string): string {
    const lower = navLang.toLowerCase();

    if (lower.startsWith('pt')) return 'pt-br';
    if (lower.startsWith('es')) return 'es-mx';
    if (lower.startsWith('la')) return 'la-va';

    // Explicit matches for existing codes
    if (lower === 'en-us') return 'en-us';
    if (lower === 'en') return 'en-us';

    // Default
    return 'en-us';
}
