import type { LocalizationData } from '$lib/types';

export const ht: LocalizationData = {
    lang: 'ht-HT',
    seo: {
        title: 'Sen Rozè',
        description:
            'Lapriyè Rozè a. Vit, gratis, epi li mache byen sou telefòn. Yon aplikasyon modèn, "open source" ki fasil pou itilize sou nenpòt aparèy.'
    },
    ui: {
        start_button: 'Kòmanse Lapriyè',
        pick_mystery: 'Chanje Mistè',
        footer_made_by: 'KREYE PA',
        recommended_mystery: 'Mistè pou Jodi a',
        pray_button_prefix: 'Lapriyè: ',
        change_theme: 'Chanje Tèm',
        liturgical: {
            // Seasons
            advent: 'Tan Lavan',
            christmas: 'Tan Nwel',
            lent: 'Tan Karèm',
            triduum: 'Triduum Paskal',
            easter: 'Tan Pak',
            ordinary: 'Tan Òdinè',
            // Feasts
            epiphany: 'Epifani',
            presentation: 'Prezantasyon Granmèt la',
            annunciation: 'Anonsyasyon',
            transfiguration: 'Transfigirasyon',
            assumption: 'Asonpsyon',
            all_saints: 'Latoussaint (Fèt Tout Sen yo)',
            all_souls: 'Fèt Lemò',
            immaculate_conception: 'Imakile Konsepsyon',
            guadalupe: 'Nòtre Dam Gwadloup',
            mother_of_god: 'Mari Manman Bondye',
            ash_wednesday: 'Mèkredi Sann',
            palm_sunday: 'Dimanch Ramo',
            holy_thursday: 'Jedi Sen',
            good_friday: 'Vandredi Sen',
            holy_saturday: 'Samdi Sen',
            easter_sunday: 'Dimanch Pak',
            divine_mercy: 'Dimanch Mizèrikòd',
            ascension: 'Asansyon',
            pentecost: 'Lapannkòt',
            trinity: 'Lasent Trinite',
            corpus_christi: 'Fèt Sen Sakreman',
            sacred_heart: 'Sakre-Kè',
            christ_king: 'Kris Wa',
            gaudete: 'Dimanch Gaudete',
            laetare: 'Dimanch Laetare',
            st_joseph: 'Sen Jozèf',
            st_peter_paul: 'Sen Pyè ak Sen Pòl',
            exaltation_cross: 'Egzaltasyon Lakwa',
            archangels: 'Sen Akanj yo',
            lateran_basilica: 'Dedikas Bazilik Latran',
            holy_family: 'Sen Fanmi',
            nativity_john_baptist: 'Nativite Sen Jan Batis',
            baptism_lord: 'Batèm Granmèt la'
        },
        modes: {
            digital: {
                title: 'Chaplè Dijital',
                desc: 'Swiv pwogrè ou sou ekran an.'
            },
            physical: {
                title: 'Chaplè Fizik',
                desc: 'Mwen gen chaplè pa m. Montre m lapriyè yo sèlman.'
            },
            mysteries: {
                title: 'Mistè yo Sèlman',
                desc: 'Yon lis senp 5 mistè yo'
            }
        },
        actions: {
            next: 'Next',
            back: 'Back',
            exit: 'EXIT?'
        },
        announce: 'Anons Mistè a',
        sections: {
            intro: 'Entwodiksyon',
            decade: 'Dizèn',
            conclusion: 'Konklizyon'
        },
        ordinals: ['1ye', '2èm', '3èm', '4èm', '5èm'],
        menus: {
            language: 'Chwazi Lang',
            mystery: 'Chwazi Mistè',
            mode: 'Chwazi Mòd',
            theme: 'Chwazi Tèm',
            jump_to_section: 'Ale nan Seksyon'
        },
        themes: {
            description: 'Pèsonalize eksperyans vizyèl ou. Sa pa afekte dat litiji a.',
            ordinary: 'Òdinè',
            christmas_easter: 'Nwel / Pak',
            advent_lent: 'Lavan / Karèm',
            pentecost: 'Lapannkòt',
            gaudete: 'Gaudete',
            requiem: 'Rekwiyèm',
            gold: 'Lò',
            silver: 'Ajan',
            white: 'Blan',
            red: 'Wouj',
            purple: 'Vyolèt',
            rose: 'Wòz',
            black: 'Nwa',
            green: 'Vèt'
        }
    },
    prayers: {
        sign_of_cross: {
            id: 'sign_of_cross',
            title: 'Siy Lakwa',
            content: 'Nan non Papa a, ak Pitit la, ak Lespri Sen an. Amèn.'
        },
        creed: {
            id: 'creed',
            title: 'Kredo (Senbòl Apot yo)',
            content:
                'Mwen kwè nan Bondye, Papa a ki gen tout pouvwa, ki kreye syèl la ak tè a. Mwen kwè nan Jezi Kri, sèl Pitit li, Granmèt nou an. Li te vin moun gras a pouvwa Lespri Sen an, epi li te fèt nan vant Mari ki vyèj. Li te soufri sou rèy Pons Pilat, yo te kloure l sou kwa a, li te mouri, epi yo te antere l. Li te desann kote mò yo ye a; sou twa jou li te leve byen vivan pami mò yo. Li moute nan syèl la, kote li chita sou bò dwat Bondye Papa a ki gen tout pouvwa. Se la l ap soti pou l vin jije vivan yo ak mò yo. Mwen kwè nan Lespri Sen an. Mwen kwè nan Legliz la ki sen e ki katolik, nan kominyon sen yo, nan padon peche yo, nan leve kò a va leve a, ak nan lavi ki p ap janm fini an. Amèn.'
        },
        our_father: {
            id: 'our_father',
            title: 'Papa Nou',
            content:
                'Papa nou ki nan syèl la, se pou yo respekte non ou; se pou yo rekonèt se ou ki wa, se pou volonte ou fèt sou tè a tankou nan syèl la. Pen nou bezwen chak jou a, ban nou l jodi a. Padonnen sa nou fè w ki mal, menm jan nou padonnen moun ki fè nou mal. Pa kite nou nan pozisyon pou n tonbe nan tantasyon, men delivre nou anba Satan. Amèn.'
        },
        hail_mary: {
            id: 'hail_mary',
            title: 'Mwen Salye ou, Mari',
            content:
                'Mwen salye ou, Mari, ki plen gras, Granmèt la avèk ou. Ou beni pase tout fi, e Jezi, pitit ou a, beni tou. Sent Mari, Manman Bondye, lapriyè pou nou, pechè, kounye a ak lè nou prèt pou n mouri. Amèn.'
        },
        glory_be: {
            id: 'glory_be',
            title: 'Glwa pou Papa a',
            content:
                'Glwa pou Papa a, ak Pitit la, ak Lespri Sen an. Jan sa te ye nan kòmansman an, se konsa li ye kounye a, e se konsa li va ye pou tout tan gen tan. Amèn.'
        },
        fatima: {
            id: 'fatima',
            title: 'Lapriyè Fatima',
            content:
                'O Jezi mwen, padonnen peche nou yo, prezève nou anba dife lanfè a, epi kondwi tout nanm yo nan syèl la, sitou sa yo ki pi bezwen mizèrikòd ou a.'
        },
        hail_holy_queen: {
            id: 'hail_holy_queen',
            title: 'Bonjou Rèn (Salve Regina)',
            content:
                'Bonjou Rèn, Manman kè sansib, lavi nou, dousè nou, espwa nou, bonjou. N ap rele ou, nou menm pitit Èv yo ki ekzile. N ap soupi, n ap plenyen, n ap kriye nan fon mizè sa a. Tounen je ou ki plen mizèrikòd sou nou, ou menm k ap defann kòz nou. Epi, apre ekzil sa a, montre nou Jezi, pitit ou a ki beni. O klemans, O piete, O dous Vyèj Mari.\n\nV. Lapriyè pou nou, Sent Manman Bondye.\nR. Pou nou kapab merite pwomès Jezikri yo.'
        },
        closing_prayer: {
            id: 'closing_prayer',
            title: 'Lapriyè Final',
            content:
                'Ann lapriyè. Bondye, sèl Pitit ou a, avèk lavi li, lanmò li ak rezireksyon li, li te merite rekonpans lavi ki p ap janm fini an pou nou; tanpri souple, fè nou favè, pandan n ap medite mistè sa yo nan Sen Rozè Vyèj Mari a, pou nou kapab imite sa yo genyen, epi pou nou jwenn sa yo pwomèt. Pa menm Jezikri Granmèt nou an. Amèn.'
        }
    },
    mysteries: {
        joyful: {
            id: 'joyful',
            name: 'Mistè Jwaye',
            days: [1, 6],
            passages: [
                'Anonsyasyon: "Zanj lan antre lakay Mari, li di li: Bonjou, Mari, ou menm ki resevwa anpil favè. Granmèt la avèk ou." (Lik 1:28)\n\nFwi Mistè a: Imilite',
                'Vizitasyon: "Kou Elizabèt tande bonjou Mari a, pitit la sote nan vant li. Lamenm Elizabèt vin anba pouvwa Sentespri." (Lik 1:41)\n\nFwi Mistè a: Charite anvè pwochen an',
                'Nativite: "Li fè premye pitit gason l lan. Li vlope l nan kouchèt, li mete l kouche nan yon bwat yo bay bèt manje." (Lik 2:7)\n\nFwi Mistè a: Lespri povrete (Detachman)',
                'Prezantasyon: "Lè lè a te rive pou yo te fè sèvis pou mete yo nan kondisyon pou sèvi Bondye... yo pote ti pitit la lavil Jerizalèm pou mete l apa pou Bondye." (Lik 2:22)\n\nFwi Mistè a: Obeyisans',
                'Rekouvremann nan Tanp lan: "Apre twa jou, yo jwenn li nan tanp lan, chita nan mitan doktè yo. Li t ap koute yo, li t ap poze yo keksyon." (Lik 2:46)\n\nFwi Mistè a: Chèche Bondye nan tout bagay'
            ]
        },
        luminous: {
            id: 'luminous',
            name: 'Mistè Limyè',
            days: [4],
            passages: [
                'Batèm Jezi nan Jouden an: "Yon vwa soti nan syèl la, li di: Ou se pitit mwen renmen anpil la. Ou fè kè m kontan anpil." (Mak 1:11)\n\nFwi Mistè a: Gras batèm nan',
                'Maryaj Kana: "Manman l di domestik yo: Fè tou sa l a di nou fè." (Jan 2:5)\n\nFwi Mistè a: Konfyans nan Bondye',
                'Pwoklamasyon Wayòm nan: "Tan an rive. Wayòm Bondye a pre. Chanje lavi nou, kwè nan Bòn Nouvèl la." (Mak 1:15)\n\nFwi Mistè a: Konvèsyon kè',
                'Transfigirasyon: "Pandan li t ap lapriyè, figi l chanje, rad li vin klere tou blan." (Lik 9:29)\n\nFwi Mistè a: Kontanplasyon',
                'Enstitisyon Ekaristi a: "Sa se kò mwen... Sa se san mwen... Fè sa pou nou sonje mwen." (Lik 22:19-20)\n\nFwi Mistè a: Adorasyon Ekaristik'
            ]
        },
        sorrowful: {
            id: 'sorrowful',
            name: 'Mistè Douloure',
            days: [2, 5],
            passages: [
                'Agoni nan Jaden an: "Kè sere pran l... swe t ap koule sou li tankou gwo degout san ki t ap tonbe atè." (Lik 22:44)\n\nFwi Mistè a: Regrèt pou peche nou yo',
                'Flasjelasyon: "Pilat pran Jezi, li bay lòd bat li byen bat." (Jan 19:1)\n\nFwi Mistè a: Mortifikasyon kò a',
                'Kouwònman ak Pikan: "Sòlda yo trese yon kouwòn avèk branch pikan, yo mete l nan tèt Jezi." (Jan 19:2)\n\nFwi Mistè a: Kouraj moral',
                'Pote Lakwa a: "Jezi soti, li t ap pote kwa li a pou l ale yon kote yo rele Zo bwa Tèt la." (Jan 19:17)\n\nFwi Mistè a: Pasyans nan eprèv',
                'Krisifiksyon: "Jezi rele byen fò, li di: Papa, m remèt lespri m nan men ou. Apre l fin di sa, li mouri." (Lik 23:46)\n\nFwi Mistè a: Padone lènmi nou yo'
            ]
        },
        glorious: {
            id: 'glorious',
            name: 'Mistè Gloriye',
            days: [0, 3],
            passages: [
                'Rezireksyon: "Poukisa n ap chèche moun ki vivan an nan mitan mò yo? Li pa isit la, li leve soti vivan." (Lik 24:5-6)\n\nFwi Mistè a: Lafwa',
                'Asansyon: "Pandan li t ap beni yo, li kite yo, li moute nan syèl la." (Lik 24:51)\n\nFwi Mistè a: Lespwa',
                'Lapannkòt: "Yo tout te vin anba pouvwa Sentespri, epi yo pran pale lòt lang." (Travay 2:4)\n\nFwi Mistè a: Lanmou Bondye ak zèl pou misyon',
                'Asonpsyon: "Wi, depi koulye a, tout moun pral di: Ou se yon fanm Bondye beni." (Lik 1:48)\n\nFwi Mistè a: Gras pou yon bon lanmò',
                'Kouwònman Mari: "Yon gwo siy parèt nan syèl la: yon fanm ki te gen solèy la tankou yon rad sou li, ak lalin lan anba pye li. Li te gen yon kouwòn douz etwal sou tèt li." (Revelasyon 12:1)\n\nFwi Mistè a: Konfyans nan lapriyè Mari'
            ]
        }
    }
};
