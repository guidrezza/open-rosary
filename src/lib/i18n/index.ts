import { en } from './en';
import { pt_br } from './pt-br';
import type { LocalizationData } from '$lib/types';

export const locales: Record<string, LocalizationData> = {
    'en': en,
    'en-US': en,
    'pt': pt_br,
    'pt-BR': pt_br
};

export function getLocale(lang: string): LocalizationData {
    // Simple lookup, could be more robust (e.g. strict matching or fallback)
    const normalized = lang.toLowerCase();
    if (normalized.startsWith('pt')) return pt_br;
    return en;
}
