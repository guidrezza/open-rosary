import type { LocalizationData } from '$lib/types';

export const sw: LocalizationData = {
    lang: 'sw-KE',
    seo: {
        title: 'Rozari Takatifu',
        description:
            'Sali Rozari. Haraka, bure, na inafaa kwa simu. Programu ya kisasa, "open source" na rahisi kutumia kwenye kifaa chochote.'
    },
    ui: {
        start_button: 'Anza Kusali',
        pick_mystery: 'Badili Matendo',
        footer_made_by: 'IMETENGENEZWA NA',
        recommended_mystery: 'Matendo ya Leo',
        pray_button_prefix: 'Sali Matendo ya ',
        change_theme: 'Badili Muonekano',
        liturgical: {
            // Seasons
            advent: 'Majilio',
            christmas: 'Noeli',
            lent: 'Kwaresima',
            triduum: 'Triduum ya Pasaka',
            easter: 'Pasaka',
            ordinary: 'Kipindi cha Kawaida',
            // Feasts
            epiphany: 'Tokeo la Bwana',
            presentation: 'Kutolewa Bwana Hekaluni',
            annunciation: 'Kupashwa Habari B. Maria',
            transfiguration: 'Kugeuka Sura Bwana',
            assumption: 'Kupalizwa Mbinguni B. Maria',
            all_saints: 'Watakatifu Wote',
            all_souls: 'Kumbukumbu ya Marehemu Wote',
            immaculate_conception: 'Bikira Maria Mkingiwa Dhambi ya Asili',
            guadalupe: 'Bikira Maria wa Guadalupe',
            mother_of_god: 'Maria Mama wa Mungu',
            ash_wednesday: 'Jumatano ya Majivu',
            palm_sunday: 'Jumapili ya Matawi',
            holy_thursday: 'Alhamisi Kuu',
            good_friday: 'Ijumaa Kuu',
            holy_saturday: 'Jumamosi Kuu',
            easter_sunday: 'Jumapili ya Pasaka',
            divine_mercy: 'Jumapili ya Huruma ya Mungu',
            ascension: 'Kupaa Bwana',
            pentecost: 'Pentekoste',
            trinity: 'Utatu Mtakatifu',
            corpus_christi: 'Mwili na Damu ya Kristo',
            sacred_heart: 'Moyo Mtakatifu wa Yesu',
            christ_king: 'Kristo Mfalme',
            gaudete: 'Jumapili ya Gaudete',
            laetare: 'Jumapili ya Laetare',
            st_joseph: 'Mtakatifu Yosefu',
            st_peter_paul: 'Watakatifu Petro na Paulo',
            exaltation_cross: 'Kutukuka kwa Msalaba',
            archangels: 'Malaika Wakuu',
            lateran_basilica: 'Kutabaruku Kanisa la Laterano',
            holy_family: 'Familia Takatifu',
            nativity_john_baptist: 'Kuzaliwa kwa Yohane Mbatizaji',
            baptism_lord: 'Ubatizo wa Bwana'
        },
        modes: {
            digital: {
                title: 'Rozari ya Dijitali',
                desc: 'Fuatilia sala kwenye skrini.'
            },
            physical: {
                title: 'Rozari ya Kawaida',
                desc: 'Nina Rozari yangu. Nionyeshe sala tu.'
            },
            mysteries: {
                title: 'Orodha ya Matendo',
                desc: 'Orodha rahisi ya matendo 5'
            }
        },
        actions: {
            next: 'Mbele',
            back: 'Nyuma',
            exit: 'TOKA?'
        },
        announce: 'Taja Tendo',
        sections: {
            intro: 'Mwanzo',
            decade: 'Tendo',
            conclusion: 'Hitimisho'
        },
        ordinals: ['La 1', 'La 2', 'La 3', 'La 4', 'La 5'],
        menus: {
            language: 'Chagua Lugha',
            mystery: 'Chagua Matendo',
            mode: 'Chagua Namna',
            theme: 'Chagua Muonekano',
            jump_to_section: 'Ruka hadi Sehemu'
        },
        themes: {
            description: 'Badilisha muonekano. Hii haiathiri kalenda ya kiliturujia.',
            ordinary: 'Kawaida',
            christmas_easter: 'Noeli / Pasaka',
            advent_lent: 'Majilio / Kwaresima',
            pentecost: 'Pentekoste',
            gaudete: 'Gaudete',
            requiem: 'Requiem',
            gold: 'Dhahabu',
            silver: 'Fedha',
            white: 'Nyeupe',
            red: 'Nyekundu',
            purple: 'Zambarau',
            rose: 'Waridi',
            black: 'Nyeusi',
            green: 'Kijani'
        }
    },
    prayers: {
        sign_of_cross: {
            id: 'sign_of_cross',
            title: 'Ishara ya Msalaba',
            content: 'Kwa Jina la Baba, na la Mwana, na la Roho Mtakatifu. Amina.'
        },
        creed: {
            id: 'creed',
            title: 'Kanuni ya Imani',
            content:
                'Nasadiki kwa Mungu Baba Mwenyezi, Muumba mbingu na dunia. Na kwa Yesu Kristo, Mwanae wa pekee Bwana wetu, aliye tungwa kwa Roho Mtakatifu, akazaliwa na Bikira Maria, akateswa kwa mamlaka ya Ponsio Pilato, akasulubiwa, akafa, akazikwa, akashuka kuzimu, siku ya tatu akafufuka katika wafu, akapaa mbinguni, amekaa kuume kwa Mungu Baba Mwenyezi, toka huko atakuja kuwahukumu wazima na wafu. Nasadiki kwa Roho Mtakatifu, Kanisa Takatifu Katoliki, ushirika wa watakatifu, ondoleo la dhambi, ufufuko wa miili, na uzima wa milele. Amina.'
        },
        our_father: {
            id: 'our_father',
            title: 'Baba Yetu',
            content:
                'Baba yetu uliye mbinguni, jina lako litukuzwe; ufalme wako ufike; utakalo lifanyike duniani kama mbinguni. Utupe leo mkate wetu wa kila siku, utusamehe makosa yetu, kama tunavyowasamehe na sisi waliotukosea. Usitutie katika kishawishi, lakini utuopoe maovuni. Amina.'
        },
        hail_mary: {
            id: 'hail_mary',
            title: 'Salamu Maria',
            content:
                'Salamu Maria, umejaa neema, Bwana yu nawe. Umebarikiwa kuliko wanawake wote, na Yesu, mzao wa tumbo lako amebarikiwa. Maria Mtakatifu, Mama wa Mungu, utuombee sisi wakosefu, sasa na saa ya kufa kwetu. Amina.'
        },
        glory_be: {
            id: 'glory_be',
            title: 'Atukuzwe Baba',
            content:
                'Atukuzwe Baba, na Mwana, na Roho Mtakatifu. Kama mwanzo, na sasa, na siku zote, na milele. Amina.'
        },
        fatima: {
            id: 'fatima',
            title: 'Sala ya Fatima',
            content:
                'Ewe Yesu wangu, utusamehe dhambi zetu, utuokoe na moto wa milele, ongoza roho zote mbinguni, hasa za wale wanaohitaji zaidi huruma yako.'
        },
        hail_holy_queen: {
            id: 'hail_holy_queen',
            title: 'Salamu Malkia',
            content:
                'Salamu Malkia, mama mwenye huruma, uzima, tulizo na matumaini yetu, salamu. Tunakusihi ugenini hapa sisi wana wa Eva. Tunakulilia tukilalamika na kuhuzunika bondeni huku kwenye machozi. Haya basi, mwombezi wetu, utuangalie kwa macho yako yenye huruma. Na mwisho wa ugeni huu, utuonyeshe Yesu, mzao mbarikiwa wa tumbo lako. Ee mpole, ee mwema, ee Maria Bikira mpendevu.\n\nV. Utuombee, Mzazi Mtakatifu wa Mungu.\nR. Tujaliwe ahadi za Kristo.'
        },
        closing_prayer: {
            id: 'closing_prayer',
            title: 'Sala ya Mwisho',
            content:
                'Tuombe. Ee Mungu, Mwanao wa pekee, kwa maisha, kifo na ufufuko wake, ametutwali ukombozi wa milele; tunakuomba, unapotujalia kutafakari mafumbo haya ya Rozari Takatifu ya Bikira Maria, tuziige fadhila zilizomo, na kuzipata ahadi zake. Kwa njia ya Kristo Bwana wetu. Amina.'
        }
    },
    mysteries: {
        joyful: {
            id: 'joyful',
            name: 'Matendo ya Furaha',
            days: [1, 6],
            passages: [
                'Malaika Gabrieli anampasha habari Maria kuwa atakuwa Mama wa Mungu: "Maria akasema, \'Tazama, mimi ni mjakazi wa Bwana; na iwe kwangu kama ulivyosema.\'" (Luka 1:38)\n\nTunda: Unyenyekevu',
                'Maria Mtakatifu anakwenda kumtembelea Elizabeti: "Umebarikiwa wewe katika wanawake, naye uzao wa tumbo lako umebarikiwa." (Luka 1:42)\n\nTunda: Upendo kwa jirani',
                'Yesu anazaliwa Betlehemu: "Akamzaa mwanawe, kifungua mimba, akamvika nguo za kitoto, akamlaza katika hori ya kulia ng\'ombe." (Luka 2:7)\n\nTunda: Ufukara wa roho',
                'Yesu anatolewa Hekaluni: "Kwa kuwa macho yangu yameuona wokovu wako, uliouweka tayari machoni pa watu wote." (Luka 2:30-31)\n\nTunda: Utii',
                'Yesu anapatikana Hekaluni: "Ikawa baada ya siku tatu wakamwona hekaluni, ameketi katikati ya waalimu, akiwasikiliza na kuwauliza maswali." (Luka 2:46)\n\nTunda: Furaha ya kumtumikia Mungu'
            ]
        },
        luminous: {
            id: 'luminous',
            name: 'Matendo ya Mwanga',
            days: [4],
            passages: [
                'Yesu anabatizwa Mto Yordani: "Na tazama, sauti kutoka mbinguni ikisema, \'Huyu ni Mwanangu, mpendwa wangu, ninayependezwa naye.\'" (Mathayo 3:17)\n\nTunda: Uaminifu kwa ahadi za ubatizo',
                'Yesu anafanya muujiza wake wa kwanza Kana: "Mama yake akawaambia watumishi, \'Lolote atakalowaambia, fanyeni.\'" (Yohane 2:5)\n\nTunda: Kumtegemea Yesu kupitia Maria',
                'Yesu anatangaza Ufalme wa Mungu: "Wakati umetimia, na ufalme wa Mungu umekaribia; tubuni, na kuiamini Injili." (Marko 1:15)\n\nTunda: Toba na kuamini Injili',
                'Yesu anageuka sura mlimani: "Akageuka sura mbele yao; uso wake ukang\'aa kama jua, mavazi yake yakawa meupe kama nuru." (Mathayo 17:2)\n\nTunda: Hamu ya Utakatifu',
                'Yesu anaweka Sakramenti ya Ekaristi: "Twaeni, mle; huu ni mwili wangu." (Mathayo 26:26)\n\nTunda: Ibada kwa Ekaristi Takatifu'
            ]
        },
        sorrowful: {
            id: 'sorrowful',
            name: 'Matendo ya Uchungu',
            days: [2, 5],
            passages: [
                'Yesu anatoka jasho la damu Bustanini Getsemani: "Naye kwa vile alivyokuwa katika dhiki, akazidi kuomba; jasho lake likawa kama matone ya damu yakidondoka chini." (Luka 22:44)\n\nTunda: Majuto ya dhambi',
                'Yesu anapigwa mijeledi: "Basi Pilato akamtwaa Yesu, akampiga mijeledi." (Yohane 19:1)\n\nTunda: Kuuacha mwili',
                'Yesu anatiwa taji la miiba: "Wakamvika vazi la zambarau, wakasokota taji ya miiba, wakamvika." (Marko 15:17)\n\nTunda: Ujasiri wa kiroho',
                'Yesu anachukua Msalaba: "Naye akatoka, huku akijichukulia msalaba wake, mpaka mahali paitwapo, Mahali pa Fuvu la Kichwa." (Yohane 19:17)\n\nTunda: Uvumilivu',
                'Yesu anakufa Msalabani: "Yesu akalia kwa sauti kuu, akasema, \'Ee Baba, mikononi mwako naiweka roho yangu.\' Alipokwisha kusema hayo, akakata roho." (Luka 23:46)\n\nTunda: Kujitoa sadaka'
            ]
        },
        glorious: {
            id: 'glorious',
            name: 'Matendo ya Utukufu',
            days: [0, 3],
            passages: [
                'Yesu anafufuka kwa wafu: "Amefufuka; hayupo hapa. Tazama mahali walipomweka." (Marko 16:6)\n\nTunda: Imani',
                'Yesu anapaa mbinguni: "Basi Bwana Yesu, baada ya kusema nao, akachukuliwa juu mbinguni, akaketi mkono wa kuume wa Mungu." (Marko 16:19)\n\nTunda: Tumaini',
                'Roho Mtakatifu anawashukia Mitume: "Wote wakajazwa Roho Mtakatifu, wakaanza kusema kwa lugha nyingine, kama Roho alivyowajalia kutamka." (Matendo 2:4)\n\nTunda: Mapendo ya Mungu na hekima',
                'Bikira Maria anapalizwa mbinguni: "Umebarikiwa wewe, binti, na Mungu Aliye Juu, kuliko wanawake wote wa duniani." (Yudithi 13:18)\n\nTunda: Neema ya kufa vizuri',
                'Bikira Maria anawekwa Malkia mbinguni: "Na ishara kuu ilionekana mbinguni; mwanamke aliyevikwa jua, na mwezi chini ya miguu yake, na taji ya nyota kumi na mbili juu ya kichwa chake." (Ufunuo 12:1)\n\nTunda: Kumtumainia Maria'
            ]
        }
    }
};