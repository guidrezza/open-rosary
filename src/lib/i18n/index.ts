import { en } from '../../../prayers-and-verses/en-us/constants';
import type { LocalizationData } from '$lib/types';

export const locales: Record<string, LocalizationData> = {
    'en': en,
    'en-US': en
};

export function getLocale(lang: string): LocalizationData {
    return en;
}
