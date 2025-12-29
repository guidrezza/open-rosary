import type { LocalizationData } from '../types';

import { am } from '../../../prayers-and-verses/am-et/constants';
import { ar } from '../../../prayers-and-verses/ar-sa/constants';
import { cs } from '../../../prayers-and-verses/cs-cz/constants';
import { de } from '../../../prayers-and-verses/de-de/constants';
import { en } from '../../../prayers-and-verses/en-us/constants';
import { es_es } from '../../../prayers-and-verses/es-es/constants';
import { es_mx } from '../../../prayers-and-verses/es-mx/constants';
import { fil } from '../../../prayers-and-verses/fil-ph/constants';
import { fr } from '../../../prayers-and-verses/fr-fr/constants';
import { gom } from '../../../prayers-and-verses/gom-in/constants';
import { hi } from '../../../prayers-and-verses/hi-in/constants';
import { hr } from '../../../prayers-and-verses/hr-hr/constants';
import { ht } from '../../../prayers-and-verses/ht-ht/constants';
import { hu } from '../../../prayers-and-verses/hu-hu/constants';
import { id } from '../../../prayers-and-verses/id-id/constants';
import { ig } from '../../../prayers-and-verses/ig-ng/constants';
import { it } from '../../../prayers-and-verses/it-it/constants';
import { ja } from '../../../prayers-and-verses/ja-jp/constants';
import { km } from '../../../prayers-and-verses/km-kh/constants';
import { kn } from '../../../prayers-and-verses/kn-in/constants';
import { ko } from '../../../prayers-and-verses/ko-kr/constants';
import { la_va } from '../../../prayers-and-verses/la-va/constants';
import { lt } from '../../../prayers-and-verses/lt-lt/constants';
import { mg } from '../../../prayers-and-verses/mg-mg/constants';
import { ml } from '../../../prayers-and-verses/ml-in/constants';
import { my } from '../../../prayers-and-verses/my-mm/constants';
import { pl } from '../../../prayers-and-verses/pl-pl/constants';
import { pt_br } from '../../../prayers-and-verses/pt-br/constants';
import { pt_pt } from '../../../prayers-and-verses/pt-pt/constants';
import { ru } from '../../../prayers-and-verses/ru-ru/constants';
import { rw } from '../../../prayers-and-verses/rw-rw/constants';
import { si } from '../../../prayers-and-verses/si-lk/constants';
import { sk } from '../../../prayers-and-verses/sk-sk/constants';
import { sl } from '../../../prayers-and-verses/sl-si/constants';
import { sw } from '../../../prayers-and-verses/sw-ke/constants';
import { sw_tz } from '../../../prayers-and-verses/sw-tz/constants';
import { ta } from '../../../prayers-and-verses/ta-in/constants';
import { te } from '../../../prayers-and-verses/te-in/constants';
import { tet } from '../../../prayers-and-verses/tet-tl/constants';
import { th } from '../../../prayers-and-verses/th-th/constants';
import { tpi } from '../../../prayers-and-verses/tpi-pg/constants';
import { uk } from '../../../prayers-and-verses/uk-ua/constants';
import { vi } from '../../../prayers-and-verses/vi-vn/constants';
import { zh_cn } from '../../../prayers-and-verses/zh-cn/constants';
import { zh_tw } from '../../../prayers-and-verses/zh-tw/constants';

export const locales: Record<string, LocalizationData> = {
    // A
    am, 'am-et': am,
    ar, 'ar-sa': ar,
    // C
    cs, 'cs-cz': cs,
    // D
    de, 'de-de': de,
    // E
    en, 'en-us': en,
    es: es_mx, 'es-mx': es_mx, 'es-es': es_es,
    // F
    fil, 'fil-ph': fil,
    fr, 'fr-fr': fr,
    // G
    gom, 'gom-in': gom,
    // H
    hi, 'hi-in': hi,
    hr, 'hr-hr': hr,
    ht, 'ht-ht': ht,
    hu, 'hu-hu': hu,
    // I
    id, 'id-id': id,
    ig, 'ig-ng': ig,
    it, 'it-it': it,
    // J
    ja, 'ja-jp': ja,
    // K
    km, 'km-kh': km,
    kn, 'kn-in': kn,
    ko, 'ko-kr': ko,
    // L
    la: la_va, 'la-va': la_va,
    lt, 'lt-lt': lt,
    // M
    mg, 'mg-mg': mg,
    ml, 'ml-in': ml,
    my, 'my-mm': my,
    // P
    pl, 'pl-pl': pl,
    pt: pt_br, 'pt-br': pt_br, 'pt-pt': pt_pt,
    // R
    ru, 'ru-ru': ru,
    rw, 'rw-rw': rw,
    // S
    si, 'si-lk': si,
    sk, 'sk-sk': sk,
    sl, 'sl-si': sl,
    sw, 'sw-ke': sw, 'sw-tz': sw_tz,
    // T
    ta, 'ta-in': ta,
    te, 'te-in': te,
    tet, 'tet-tl': tet,
    th, 'th-th': th,
    tpi, 'tpi-pg': tpi,
    // U
    uk, 'uk-ua': uk,
    // V
    vi, 'vi-vn': vi,
    // Z
    zh: zh_cn, 'zh-cn': zh_cn, 'zh-tw': zh_tw
};

export function getLocale(lang: string): LocalizationData {
    const normalizedLang = lang.toLowerCase();
    return locales[normalizedLang] || locales['en'];
}
