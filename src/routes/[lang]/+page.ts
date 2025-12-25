import { locales } from '$lib/i18n';

// Necessary for adapter-static to know which pages to build
export function entries() {
    return Object.keys(locales).map(lang => ({ lang }));
}

export const prerender = true;
