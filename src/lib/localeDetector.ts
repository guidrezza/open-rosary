
export function detectLocale(navLang: string): string {
    const lower = navLang.toLowerCase();

    // 1. Exact Match Check (Optimization)
    const supported = new Set([
        'am-et', 'ar-sa', 'cs-cz', 'de-de', 'en-us', 'es-es', 'es-mx', 'fil-ph',
        'fr-fr', 'gom-in', 'hi-in', 'hr-hr', 'ht-ht', 'hu-hu', 'id-id', 'ig-ng',
        'it-it', 'ja-jp', 'km-kh', 'kn-in', 'ko-kr', 'la-va', 'lt-lt', 'mg-mg',
        'ml-in', 'my-mm', 'pl-pl', 'pt-br', 'pt-pt', 'ru-ru', 'rw-rw', 'si-lk',
        'sk-sk', 'sl-si', 'sw-ke', 'sw-tz', 'ta-in', 'te-in', 'tet-tl', 'th-th',
        'tpi-pg', 'uk-ua', 'vi-vn', 'zh-cn', 'zh-tw'
    ]);
    if (supported.has(lower)) return lower;

    // 2. Prefix / Smart Mapping
    // Map specific prefixes to populous defaults or specific variants
    if (lower.startsWith('zh')) {
        if (lower.includes('tw') || lower.includes('hk') || lower.includes('mo')) return 'zh-tw';
        return 'zh-cn';
    }
    if (lower.startsWith('es')) {
        if (lower === 'es-es' || lower.startsWith('es-es')) return 'es-es';
        // Default Latin America / Mexico for everything else (es-us, es-419, es-ar, etc.)
        return 'es-mx';
    }
    if (lower.startsWith('pt')) {
        if (lower === 'pt-pt' || lower.startsWith('pt-pt')) return 'pt-pt';
        // Default Brazil for everything else (pt-ao, pt-mz, etc. match closer to pt-br often or just pop count)
        return 'pt-br';
    }
    if (lower.startsWith('sw')) {
        if (lower === 'sw-tz' || lower.startsWith('sw-tz')) return 'sw-tz';
        return 'sw-ke';
    }

    // Simple Prefix Matches
    const prefixMap: Record<string, string> = {
        am: 'am-et',
        ar: 'ar-sa',
        cs: 'cs-cz',
        de: 'de-de',
        en: 'en-us',
        fil: 'fil-ph', tl: 'fil-ph', // Tagalog
        fr: 'fr-fr',
        gom: 'gom-in',
        hi: 'hi-in',
        hr: 'hr-hr',
        ht: 'ht-ht',
        hu: 'hu-hu',
        id: 'id-id',
        ig: 'ig-ng',
        it: 'it-it',
        ja: 'ja-jp',
        km: 'km-kh',
        kn: 'kn-in',
        ko: 'ko-kr',
        la: 'la-va',
        lt: 'lt-lt',
        mg: 'mg-mg',
        ml: 'ml-in',
        my: 'my-mm',
        pl: 'pl-pl',
        ru: 'ru-ru',
        rw: 'rw-rw',
        si: 'si-lk',
        sk: 'sk-sk',
        sl: 'sl-si',
        ta: 'ta-in',
        te: 'te-in',
        tet: 'tet-tl',
        th: 'th-th',
        tpi: 'tpi-pg',
        uk: 'uk-ua',
        vi: 'vi-vn'
    };

    for (const [prefix, mapTo] of Object.entries(prefixMap)) {
        if (lower.startsWith(prefix)) return mapTo;
    }

    return 'en-us';
}
