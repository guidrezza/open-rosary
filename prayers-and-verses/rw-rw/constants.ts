import type { LocalizationData } from '$lib/types';

export const rw: LocalizationData = {
    lang: 'rw-RW',
    seo: {
        title: 'Rozari Ntagatifu',
        description:
            'Vuga Rozari. Byihuse, ubuntu, kandi byoroshye kuri telefoni. Porogaramu y\'urubuga igezweho, ifunguye, kandi yoroshye gukoresha ku gikoresho icyo ari cyo cyose.'
    },
    ui: {
        start_button: 'Tangira Isengesho',
        pick_mystery: 'Hitamo Amayobera',
        footer_made_by: 'YAKOZWE NA',
        recommended_mystery: 'Amayobera y\'Uyu Munsi',
        pray_button_prefix: 'Vuga: ',
        change_theme: 'Hindura Insanganyamatsiko',
        liturgical: {
            // Seasons
            advent: 'Adventi',
            christmas: 'Noheli',
            lent: 'Igisibo',
            triduum: 'Iminsi Mikuru ya Pasika',
            easter: 'Pasika',
            ordinary: 'Igihe Gisanzwe',
            // Feasts
            epiphany: 'Epifaniya (Kwigaragaza kwa Nyagasani)',
            presentation: 'Ivuka rya Nyagasani',
            annunciation: 'Ivuka rya Bikira Mariya',
            transfiguration: 'Kwigaragaza kwa Nyagasani',
            assumption: 'Ijyanwa mu Ijuru rya Bikira Mariya',
            all_saints: 'Abatagatifu Bose',
            all_souls: 'Isengesho ry\'Abapfuye',
            immaculate_conception: 'Bikira Mariya Utasamanywe icyaha',
            guadalupe: 'Bikira Mariya wa Guadalupe',
            mother_of_god: 'Mariaya Umubyeyi w\'Imana',
            ash_wednesday: 'Kuwa Gatatu w\'Ivu',
            palm_sunday: 'Cyumweru cy\'Amashami',
            holy_thursday: 'Kuwa Kane Mutagatifu',
            good_friday: 'Kuwa Gatanu Mutagatifu',
            holy_saturday: 'Kuwa Gatandatu Mutagatifu',
            easter_sunday: 'Pasika',
            divine_mercy: 'Impuhwe z\'Imana',
            ascension: 'Asensiyo (Izamuka rya Yezu)',
            pentecost: 'Pentekosti',
            trinity: 'Ubutatu Butagatifu',
            corpus_christi: 'Isakramentu Ritagatifu',
            sacred_heart: 'Umutima Mutagatifu wa Yezu',
            christ_king: 'Kristu Umwami',
            gaudete: 'Cyumweru cya Gaudete',
            laetare: 'Cyumweru cya Laetare',
            st_joseph: 'Mutagatifu Yozefu',
            st_peter_paul: 'Mutagatifu Petero na Pawulo',
            exaltation_cross: 'Kuzahura Musaraba',
            archangels: 'Abamalayika Bakuru',
            lateran_basilica: 'Kwitaurira Kiliziya ya Laterano',
            holy_family: 'Umuryango Mutagatifu',
            nativity_john_baptist: 'Ivuka rya Yohani Umubatiza',
            baptism_lord: 'Batisimu ya Yezu'
        },
        modes: {
            digital: {
                title: 'Isaro rya Digitali',
                desc: 'Kurikirana isengesho kuri ecran.'
            },
            physical: {
                title: 'Rozari Isanzwe',
                desc: 'Mfite Rozari yanjye. Nwereka amasengesho gusa.'
            },
            mysteries: {
                title: 'Amayobera Gusa',
                desc: 'Urutonde rworoshye rw\'amayobera 5'
            }
        },
        actions: {
            next: 'Next',
            back: 'Back',
            exit: 'EXIT?'
        },
        announce: 'Tangaza Amayobera',
        sections: {
            intro: 'Intangiriro',
            decade: 'Isaro (Decade)',
            conclusion: 'Gusoza'
        },
        ordinals: ['1', '2', '3', '4', '5'],
        menus: {
            language: 'Hitamo Ururimi',
            mystery: 'Hitamo Amayobera',
            mode: 'Hitamo Uburyo',
            theme: 'Hitamo Insanganyamatsiko',
            jump_to_section: 'Jya ku gice'
        },
        themes: {
            description: 'Hindura uburyo bugaragara. Ibi ntibihindura itariki ya litorojiya.',
            ordinary: 'Bisanzwe',
            christmas_easter: 'Noheli / Pasika',
            advent_lent: 'Adventi / Igisibo',
            pentecost: 'Pentekosti',
            gaudete: 'Gaudete',
            requiem: 'Requiem',
            gold: 'Zahabu',
            silver: 'Ifeza',
            white: 'Umweru',
            red: 'Umutuku',
            purple: 'Move',
            rose: 'Roza',
            black: 'Umukara',
            green: 'Icyatsi'
        }
    },
    prayers: {
        sign_of_cross: {
            id: 'sign_of_cross',
            title: 'Ikimenyetso cy\'Umusaraba',
            content: 'Ku izina ry\'Imana Data, na Mwana, na Roho Mutagatifu. Amina.'
        },
        creed: {
            id: 'creed',
            title: 'Indangakwemera',
            content:
                'Ndemera Imana Data ushobora byose, umuremyi w\'ijuru n\'isi. Nkemera na Yezu Kristu, Umwana wayo w\'ikinege, Umwami wacu. Wasamwe ku bwa Roho Mutagatifu, akabyarwa na Bikira Mariya. Wagize ibyago ku ngoma ya Ponsiyo Pilato, akabambwa ku musaraba, agapfa, agahambwa. Akamanuka ikuzimu, kuwa gatatu akazuka mu bapfuye. Akazamuka mu ijuru, akaba yicaye iburyo bw\'Imana Data ushobora byose. Niho azava aje gucira imanza abazima n\'abapfuye. Ndemera Roho Mutagatifu, Kiliziya Gatolika Ntagatifu,urusange rw\'abatagatifu, ikigongwe cy\'ibyaha, izuka ry\'imibiri, n\'ubugingo budashira. Amina.'
        },
        our_father: {
            id: 'our_father',
            title: 'Dawe uri mu ijuru',
            content:
                'Dawe uri mu ijuru, izina ryawe ryubahwe, ingoma yawe yogere hose, icyo ushaka gikorwe mu nsi nka kurya gikorwa mu ijuru. Ifunguro ridutunga uduhe none, utubabarire ibicumuro byacu, nk\'uko natwe tubabarira abaducumuyeho, ntudutererane mu bitwoshya, ahubwo udukize icyago. Amina.'
        },
        hail_mary: {
            id: 'hail_mary',
            title: 'Ndakuramutsa Mariya',
            content:
                'Ndakuramutsa Mariya, wuzuye inema, Uhoraho ari kumwe nawe. Wahebuje abagore bose umugisha, na Yezu umwana wabyaye, asingizwe. Mariya Mutagatifu, Mubyeyi w\'Imana, urajye udusabira, twebwe abanyabyaha, kuri ubu n\'igihe tuzapfira. Amina.'
        },
        glory_be: {
            id: 'glory_be',
            title: 'Hasingizwe Imana',
            content:
                'Hasingizwe Imana Data, na Mwana, na Roho Mutagatifu. Nk\'uko byahozeho kuva kera, n\'ubu n\'iteka ryose. Amina.'
        },
        fatima: {
            id: 'fatima',
            title: 'Isengesho rya Fatima',
            content:
                'Yezu wanjye, tubabarire ibyaha byacu, udukize umuriro w\'iteka,ujyane mu ijuru roho zose, cyane cyane izikeneye impuhwe zawe by\'umwihariko.'
        },
        hail_holy_queen: {
            id: 'hail_holy_queen',
            title: 'Ndakuramutsa Mwamikazi',
            content:
                'Ndakuramutsa Mwamikazi, Mubyeyi w\'impuhwe, wowe bugingo, butungane n\'amizero byacu, ndakuramutsa. Twebwe abana ba Eva, turi mu buhungiro, turagutakambira, dusuhuza umutima, tuninihira, turirira muri iki kibaya cy\'amarira. Ngaho rero, Muhatse wacu, dukanurire ayo maso yawe y\'impuhwe; maze, nituva muri ubu buhungiro, uzatwereke Yezu, Umwana w\'inda yaweasingizwa. Ayi Bikira Mariya, Nyir\'impuhwe, Nyir\'urukundo, Nyir\'ubutungane.\n\nV. Udusabire, Mubyeyi Mutagatifu w\'Imana.\nR. Kugira ngo tube dukwiye guhabwa ibyo Kristu yadusezeranije.'
        },
        closing_prayer: {
            id: 'closing_prayer',
            title: 'Isengesho Risoza',
            content:
                'Dunsenge. Mana, wowe utugabira agakiza k\'iteka ku bw\'ubuzima, urupfu n\'izuka by\'Umwana wawe w\'ikinege; turagutakambira, kugira ngo, nituzirikana ayo mayobera ya Rozari Ntagatifu ya Bikira Mariya, dukurikize ibyo adutoza, maze tuzahabwe ibyo adusezeranya. Ku bwa Kristu Umwami wacu. Amina.'
        }
    },
    mysteries: {
        joyful: {
            id: 'joyful',
            name: 'Amayobera y\'Ibyishimo',
            days: [1, 6],
            passages: [
                'Mariya abwirwa ko azabyara Umwana w\'Imana: "Marayika aramubwira ati: \'Witinya Mariya, kuko wautoniye Imana.\'" (Luka 1:30)\n\nImbuto y\'Amayobera: Kwicisha bugufi',
                'Mariya asura Elizabeti: "Mariya yinjiye mu nzu ya Zakariya, aramutsa Elizabeti." (Luka 1:40)\n\nImbuto y\'Amayobera: Gukunda mugenzi wacu',
                'Yezu avukira i Betelehemu: "Abyara umuhungu we w\'imfura, amupfunyika mu bitambaro, amuryamisha mu muvure." (Luka 2:7)\n\nImbuto y\'Amayobera: Gukunda ubukene',
                'Yezu aturwa Imana mu Nġoro: "Bajyana Yezu i Yeruzalemu kugira ngo bamuture Nyagasani." (Luka 2:22)\n\nImbuto y\'Amayobera: Kumvira',
                'Yezuaboneka mu Nġoro: "Hashize iminsi itatu, bamusanga mu Nġoro yicaye hagati y\'abigishamategeko." (Luka 2:46)\n\nImbuto y\'Amayobera: Gushaka Imana'
            ]
        },
        luminous: {
            id: 'luminous',
            name: 'Amayobera y\'Urumuri',
            days: [4],
            passages: [
                'Yezu abatizwa muri Yorudani: "Ijwi rituruka mu ijuru riti: \'Uyu ni Umwana wanjye nkunda cyane, unyuze umutima.\'" (Matayo 3:17)\n\nImbuto y\'Amayobera: Kubera Imana umwana mwiza',
                'Yezu atahana ubukwe i Kana: "Nyina abwira abahereza ati: \'Icyo ababwira cyose mugikore.\'" (Yohani 2:5)\n\nImbuto y\'Amayobera: Kwizera Imana',
                'Yezu yamamaza Ingoma y\'Imana: "Igihe kirageze, Ingoma y\'Imana iri hafi. Nimwisubireho, mwemere Inkuru Nziza." (Mariko 1:15)\n\nImbuto y\'Amayobera: Kwisubiraho',
                'Yezu yihindura ukundi: "Yihindura ukundi mu maso yabo; uburanga bwe burabagirana nk\'izuba." (Matayo 17:2)\n\nImbuto y\'Amayobera: Guharanira ubutungane',
                'Yezu atanga Ukaristiya: "Nimwakire, murye; iki ni umubiri wanjye." (Matayo 26:26)\n\nImbuto y\'Amayobera: Gukunda Ukaristiya'
            ]
        },
        sorrowful: {
            id: 'sorrowful',
            name: 'Amayobera y\'Ububabare',
            days: [2, 5],
            passages: [
                'Yezuasamba mu busitani bwa Getsemani: "Agira agahinda kenshi, asenga ashishikaye. Ibyuya bye bihinduka nk\'amaraso, bitonyanga hasi." (Luka 22:44)\n\nImbuto y\'Amayobera: Kwicuza ibyaha',
                'Yezu akubitwa ibiboko: "Pilato ategeka ko bafata Yezu bakamukubita ibiboko." (Yohani 19:1)\n\nImbuto y\'Amayobera: Kwigomwa',
                'Yezu yambikwa ikamba ry\'amahwa: "Abasirikare baboha ikamba ry\'amahwa, barimwambika mu mutwe." (Yohani 19:2)\n\nImbuto y\'Amayobera: Kwemera kugayirwa Imana',
                'Yezu aheka umusaraba: "Yezu ajya i Gologota, ahetse umusaraba we." (Yohani 19:17)\n\nImbuto y\'Amayobera: Kwihangana',
                'Yezu abambwa ku musaraba: "Yezu arangurura ijwi rirenga ati: \'Data, mu biganza byawe nshyize roho yanjye.\'" (Luka 23:46)\n\nImbuto y\'Amayobera: Gukunda Imana n\'abantu'
            ]
        },
        glorious: {
            id: 'glorious',
            name: 'Amayobera y\'Ikuzo',
            days: [0, 3],
            passages: [
                'Yezu azuka: "Nta we uri hano, yazutse nk\'uko yari yarebivuze." (Matayo 28:6)\n\nImbuto y\'Amayobera: Ukwemera',
                'Yezu asubira mu ijuru: "Nyagasani Yezu...azamurwa mu ijuru, yicara iburyo bw\'Imana." (Mariko 16:19)\n\nImbuto y\'Amayobera: Icyizere n\'ipfa ry\'Ijuru',
                'Roho Mutagatifu amanukira ku Bintumwa: "Bose buzura Roho Mutagatifu, batangira kuvuga mu zindi ndimi." (Ibyakozwe 2:4)\n\nImbuto y\'Amayobera: Urukundo n\'ishyaka rya gihutumwa',
                'Bikira Mariya ajyanwa mu ijuru: "Nyagasani yakugiriye ibitangaza, we ufite ububasha bwose." (Luka 1:49)\n\nImbuto y\'Amayobera: Gupfa neza',
                'Bikira Mariya yimikwa mu ijuru: "Hagaragara ikimenyetso gitangaje mu ijuru: Umugore wambaye izuba, ukwezi kwari munsi y\'ibirenge bye, naho mu mutwe yambaye ikamba ry\'inyenyeri cumi n\'ebyiri." (Ibyahishuwe 12:1)\n\nImbuto y\'Amayobera: Kwizera Bikira Mariya'
            ]
        }
    }
};
