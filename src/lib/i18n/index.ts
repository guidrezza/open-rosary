import { en } from './en';
import type { LocalizationData } from '$lib/types';

export const locales: Record<string, LocalizationData> = {
    'en': en,
    'en-US': en
};

export function getLocale(lang: string): LocalizationData {
    return en;
}
