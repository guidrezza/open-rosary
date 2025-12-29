import type { LocalizationData } from '../types';

import { en } from '../../../prayers-and-verses/en-us/constants';
import { de } from '../../../prayers-and-verses/de-de/constants';
import { es_mx } from '../../../prayers-and-verses/es-mx/constants';
import { es_es } from '../../../prayers-and-verses/es-es/constants';
import { la_va } from '../../../prayers-and-verses/la-va/constants';
import { pt_br } from '../../../prayers-and-verses/pt-br/constants';
import { pt_pt } from '../../../prayers-and-verses/pt-pt/constants';
import { fil } from '../../../prayers-and-verses/fil-ph/constants';
import { fr } from '../../../prayers-and-verses/fr-fr/constants';
import { it } from '../../../prayers-and-verses/it-it/constants';
import { ko } from '../../../prayers-and-verses/ko-kr/constants';
import { pl } from '../../../prayers-and-verses/pl-pl/constants';
import { vi } from '../../../prayers-and-verses/vi-vn/constants';
import { zh_cn } from '../../../prayers-and-verses/zh-cn/constants';
import { zh_tw } from '../../../prayers-and-verses/zh-tw/constants';
import { sw } from '../../../prayers-and-verses/sw-ke/constants';
import { sw_tz } from '../../../prayers-and-verses/sw-tz/constants';

export const locales: Record<string, LocalizationData> = {
    en,
    'en-us': en,
    de,
    'de-de': de,
    es: es_mx, // Default Spanish to MX if generic 'es' is used, though app uses full codes mostly
    'es-mx': es_mx,
    'es-es': es_es,
    la: la_va,
    'la-va': la_va,
    pt: pt_br, // Default Portuguese to BR
    'pt-br': pt_br,
    'pt-pt': pt_pt,
    fil,
    'fil-ph': fil,
    fr,
    'fr-fr': fr,
    it,
    'it-it': it,
    ko,
    'ko-kr': ko,
    pl,
    'pl-pl': pl,
    vi,
    'vi-vn': vi,
    zh: zh_cn,
    'zh-cn': zh_cn,
    'zh-tw': zh_tw,
    sw,
    'sw-ke': sw,
    'sw-tz': sw_tz
};

export function getLocale(lang: string): LocalizationData {
    const normalizedLang = lang.toLowerCase();
    return locales[normalizedLang] || locales['en'];
}
