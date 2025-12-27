import { locales } from '$lib/i18n';

export function entries() {
	return Object.keys(locales).map((lang) => ({ lang }));
}
