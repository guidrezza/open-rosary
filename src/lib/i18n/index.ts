import { en } from '../../../prayers-and-verses/en-us/constants';
import { pt_br } from '../../../prayers-and-verses/pt-br/constants';
import { es_mx } from '../../../prayers-and-verses/es-mx/constants';
import { la_va } from '../../../prayers-and-verses/la-va/constants';
import type { LocalizationData } from '$lib/types';

export const locales: Record<string, LocalizationData> = {
	en: en,
	'en-us': en,
	pt: pt_br,
	'pt-br': pt_br,
	es: es_mx,
	'es-mx': es_mx,
	la: la_va,
	'la-va': la_va
};

export function getLocale(lang: string): LocalizationData {
	// Basic lookup, case insensitive
	const normalized = lang.toLowerCase();

	// Exact match
	if (locales[normalized]) {
		return locales[normalized];
	}

	// Fallback to primary lang code if region mismatch (e.g. es-es -> es-mx if mapped)
	const primary = normalized.split('-')[0];
	if (locales[primary]) {
		return locales[primary];
	}

	// Default to EN
	return en;
}
