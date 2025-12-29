import type { LocalizationData } from '$lib/types';

export const kn: LocalizationData = {
    lang: 'kn-IN',
    seo: {
        title: 'Pavitra Japamaale',
        description:
            'Japamaale praarthisi. Vegavaagi, uchitavaagi mattu mobile-ge anukulavaagi. Yavude saadhanadalli balasalu sulabhavada adhunaika open-source web app.'
    },
    ui: {
        start_button: 'Praarthane Aarambhisi',
        pick_mystery: 'Rahasyavannu Badalayisi',
        footer_made_by: 'Tayarisidavaru',
        recommended_mystery: 'Indina Rahasya',
        pray_button_prefix: 'Praarthisi: ',
        change_theme: 'Theme Badalayisi',
        liturgical: {
            // Seasons
            advent: 'Aagamana Kaala',
            christmas: 'Christmas Kaala',
            lent: 'Thavakaala (Lent)',
            triduum: 'Pashka Triduum',
            easter: 'Pashka Kaala',
            ordinary: 'Saamanya Kaala',
            // Feasts
            epiphany: 'Prabhuva Darshana Habba',
            presentation: 'Prabhuva Samarpaneya Habba',
            annunciation: 'Mariyalarige Mangalavarthe',
            transfiguration: 'Prabhuva Rupantara',
            assumption: 'Mariyala Swargarohana',
            all_saints: 'Sarva Santhara Habba',
            all_souls: 'Sarva Mruthara Smarane',
            immaculate_conception: 'Mariyala Amala Udhbhava',
            guadalupe: 'Guadalupe Mathe',
            mother_of_god: 'Devara Thaayi Mariya',
            ash_wednesday: 'Bhoodhi Budhavara',
            palm_sunday: 'Gari Aithavara',
            holy_thursday: 'Pavitra Guruvara',
            good_friday: 'Punya Shukravara',
            holy_saturday: 'Pavitra Shanivara',
            easter_sunday: 'Pashka Aithavara',
            divine_mercy: 'Karunya Aithavara',
            ascension: 'Prabhuva Swargarohana',
            pentecost: 'Pavitratma Habba (Pentecost)',
            trinity: 'Pavitra Tritva',
            corpus_christi: 'Kristara Deha Mathu Raktha',
            sacred_heart: 'Yesuva Pavitra Hrudaya',
            christ_king: 'Krista Raaja',
            gaudete: 'Gaudete Aithavara',
            laetare: 'Laetare Aithavara',
            st_joseph: 'Santha Joseph',
            st_peter_paul: 'Santha Petru Mathu Paul',
            exaltation_cross: 'Silubeya Mahime',
            archangels: 'Mukhya Dhootharu',
            lateran_basilica: 'Lateran Devalaya Prathiste',
            holy_family: 'Pavitra Kutumba',
            nativity_john_baptist: 'John Baptistara Janana',
            baptism_lord: 'Prabhuva Gnanasnana'
        },
        modes: {
            digital: {
                title: 'Digital Japamaale',
                desc: 'Screen mele nimma praarthaneyannu track maadi.'
            },
            physical: {
                title: 'Nijavaada Japamaale',
                desc: 'Nanna hattira nanna Japamaale ide. Kevala praarthanegalannu torisi.'
            },
            mysteries: {
                title: 'Kevala Rahasyagalu',
                desc: '5 rahasyagala sarala patti'
            }
        },
        actions: {
            next: 'Next',
            back: 'Back',
            exit: 'EXIT?'
        },
        announce: 'Rahasya Ghoshane',
        sections: {
            intro: 'Parichaya',
            decade: 'Dhashaka',
            conclusion: 'Muktaya'
        },
        ordinals: ['1ne', '2ne', '3ne', '4ne', '5ne'],
        menus: {
            language: 'Bhashe Ayke',
            mystery: 'Rahasya Ayke',
            mode: 'Vidhana Ayke',
            theme: 'Theme Ayke',
            jump_to_section: 'Vibhagakkehogi'
        },
        themes: {
            description: 'Nimma visual anubhavavannu customize maadi. Idu liturgical dinankavannu badalayisuvudilla.',
            ordinary: 'Saamanya',
            christmas_easter: 'Christmas / Pashka',
            advent_lent: 'Aagamana / Thavakaala',
            pentecost: 'Pentecost',
            gaudete: 'Gaudete',
            requiem: 'Requiem',
            gold: 'Chinna',
            silver: 'Belli',
            white: 'Bili',
            red: 'Kempu',
            purple: 'Nerale',
            rose: 'Gulabi',
            black: 'Kappu',
            green: 'Hasiru'
        }
    },
    prayers: {
        sign_of_cross: {
            id: 'sign_of_cross',
            title: 'Silubeya Guruthu',
            content: 'Pithru, maththu Puthran, maththu Pavitra Athmana hesarinalli. Amen.'
        },
        creed: {
            id: 'creed',
            title: 'Viswasa Vignapane',
            content:
                'Paraloka maththu bhulokada srushtikartharaada sarva shaktha Deva Pithanannu nambuthene. Avara ekakaika Puthranu, namma Prabhuvaada Yesu Kristarannu nambuthene. Ivaru Pavitra Athmaninda garbhadalli dharisi, Kanya Mariyalarinda janisidaru; Pontius Pilathana adhikaradalli baadhepattu, silubeya mele aleyalpattu, mrutharaagi, samadhiyallpadedaru; Pathalakkeilidu, moorane dina mruthara madhyadinda punarjiwitharaadaru; Paralokakkeeri, sarva shaktha Deva Pithana balabhagadalli kulithiddaare; Allinda jeevantharannu maththu mrutharannu theerpu maudvudakke baruvaaru. Pavitra Athmanannu nambuthene; Pavitra Katholik Sabheyannuu, Santhara anyonyaikevannu, paapagala mochaneyannu, dehada punaruthanavannu, maththu nithya jeevavannu nambuthene. Amen.'
        },
        our_father: {
            id: 'our_father',
            title: 'Paralokadalli Ruva',
            content:
                'Paralokadalli ruva namma Thandeye, nimma naama pujithavagali; nimma raajya barali; nimma chitha paralokadalli negaweruvanthe, bhulokadalliyu nerawerali. Namma anudhinada aaharavannu indu namage dayapalisiri; namage thappu madidavarannu naavu kshamisuvanthe, namma thappugalannu kshamisiri; nammannu shodhaneyalli beelagodade, kedukininda nammannu rakshisiri. Amen.'
        },
        hail_mary: {
            id: 'hail_mary',
            title: 'Namo Mariye',
            content:
                'Namo Mariye, krupavare poorneyé, Kartharu nimmodane iddaare; Sthreeyaralli neevu dhanyaru, maththu nimma udharada phala Yesu dhanyaru. Santha Mariye, Devara Thaye, paapigalaada namagaagi, eegalu namma saavina samayadalliyu prarthisiri. Amen.'
        },
        glory_be: {
            id: 'glory_be',
            title: 'Thrigeekara Sthuthi',
            content:
                'Pithru, maththu Puthran, maththu Pavitra Athmanige mahimeyaagali. Aadiyalli iddantha, eegalu endendu irali. Amen.'
        },
        fatima: {
            id: 'fatima',
            title: 'Fatima Praarthane',
            content:
                'Oh nanna Yesuve, namma paapagallannu kshamisiri, narakada benkiyinda nammannu rakshisiri, ella aathmagalannu, visheshavaagi nimma karuneya agathya atyanta iruvavarannu swargakke karedoyyiri.'
        },
        hail_holy_queen: {
            id: 'hail_holy_queen',
            title: 'Namo Raniye',
            content:
                'Namo Raniye, karuneya thaye, namma jeevave, maadhuryave maththu aashrayave, namo! Paradeshigalaada naavu Evallana makkalu, nimmannu koogutheve. Kanneerina ee kaniveyalli aluthalu, nimmannu bedutheve. Aaddarinda, namma paravagi mathanaduvavare, nimma karuneya kannugalannu namma kadege thirugisiri. Maththu ee namma paradesha vaasa mugida balika, nimma udharada phala Yesuvanu namage thorsiri. Oh karunamayi, Oh dayamayi, Oh madhura Kanya Mariye.\n\nV. Devara Pavitra Thaye, namagaagi prarthisiri.\nR. Kristana vagdhanagalige naavu pathraraaguva haage.'
        },
        closing_prayer: {
            id: 'closing_prayer',
            title: 'Muktaya Praarthane',
            content:
                'Praarthisona. Oh Devare, nimma ekakaika Puthraru thamma jeevana, marana maththu punaruthana-gala mulaka nithya jeevada bahumanavannu namage galisikottiddaralla; Nithya Kanya Mariyala Pavitra Japamaaleya ee rahasyagalannu dhyanisuva naavu, avugalu boadhisuva maargadalli nadedu, avugalu vagdhana maaduva bhagyavannu padevante krupai needi. Namma Prabhuvaada Krista mukhanthara. Amen.'
        }
    },
    mysteries: {
        joyful: {
            id: 'joyful',
            name: 'Santoshada Rahasyagalu',
            days: [1, 6],
            passages: [
                'Deva Dhoothanu Mariyalarige Mangalavarthearruviddu: "Aaga aa dhoothanu - Mariye, anjabeda, Devara daye ninagide. Idho, neenu garbha dharisi obba maganannu heryaruve; aathanige Yesu endu hesaridu - endanu." (Luka 1:30-31)\n\nPhala: Vidheyatva (Thaggike)',
                'Mariyalu Elizabethalannu sandhisiddu: "Aaga Elizabethalu Pavitra Athmaninda thumbikonda mahaswaradinda - Sthreeyaralli neenu dhanye, ninna udharada phalanu dhanyu - endu koogihlelidalu." (Luka 1:41-42)\n\nPhala: Parara Preethi',
                'Yesu Bethlaheminalli janisiddu: "Avalu thanna hirimagannu hethu, batteyalli sutthi, gobbali-nalli malagisidalu." (Luka 1:7)\n\nPhala: Badathana (Vastugala mele aase illadiruvudu)',
                'Yesuvannu Devalayadalli arpisiddu: "Karthana dharmashastradalli barediruva prakara... aathanannu karthanige oppisabekendu Yerusalemige karedhu kondu hodaru." (Luka 2:22)\n\nPhala: Shuddathe maththu Vidheyatva',
                'Yesu Devalayadalli sikkiddu: "Mooru dinagala balika aathanu devalayadalli upadyayara naduve kulithu, avara mathugalannu keluthalu, avarannu prashnegalannu keluthalu iruvudannu kandaru." (Luka 2:46)\n\nPhala: Devaralli nambike (Devara jnaana)'
            ]
        },
        luminous: {
            id: 'luminous',
            name: 'Belakina Rahasyagalu',
            days: [4],
            passages: [
                'Yordan Nadiyalli Yesuva Gnanasnana: "Idho, ivanu nanna priya Puthranu, ivanalli naanu mechchidhene endu aakashadinda ondu dhwani kelithu." (Matthews 3:17)\n\nPhala: Pavitra Athmanige Vidheyatva',
                'Kana Oorina Maduveyalli Yesuva Pavada: "Aathana thayiyu aaligalige - Aathanu nimage heluvudannu maadiri - endalu." (John 2:5)\n\nPhala: Devaralli Nambike',
                'Devara Raajyada Prachara: "Kaalavu paripurnavagide, Devara Raajyavu sameepavagide; maanasaantharapadiri, suvartheyannu nambiri." (Mark 1:15)\n\nPhala: Maanasaanthara',
                'Yesuva Rupantara: "Avara yedurige aathana roopu badalayithu; aathana mukhavu suryananthe holiyithu." (Matthews 17:2)\n\nPhala: Pavitratheya Aase',
                'Parama Prasadada Sthapane: "Thagedukolli, idu nanna dehavagide endanu... Ella idarinda kudiyiri, idu nanna rakthavagide." (Matthews 26:26-28)\n\nPhala: Parama Prasadadalli Bhakti'
            ]
        },
        sorrowful: {
            id: 'sorrowful',
            name: 'Dukhada Rahasyagalu',
            days: [2, 5],
            passages: [
                'Getsemane Thotadalli Yesuva Praarthane: "Aathanu anthyavastheyalli iddaga, innu yekagrathyinda praarthisidanu; aaga aathana bevaru rakthada hanigalanthe nelakke suriyithu." (Luka 22:44)\n\nPhala: Paapakkagi Pashchattapa',
                'Yesuvige Koraadeyinda Hodedaddu: "Pilathanu Yesuvannu karedukondu hogi, koraadeyinda hodesidanu." (John 19:1)\n\nPhala: Indriya Nigraha',
                'Yesuvige Mullina Mukuta Dharisiddu: "Sainikaru mullugala ondu mukutavannu henedu, aathana thaleya meleti, kempu angi-yannu aathanige hodisidaru." (John 19:2)\n\nPhala: Dhairya maththu Sahane',
                'Yesu Silubeyannu Hothukondu Hodaddu: "Aathanu thanna silubeyannu hothukondu... Kalvari emba sthalakke hodanu." (John 19:17)\n\nPhala: Kashta Sahane',
                'Yesu Silubeya Mele Mauthpattaddu: "Yesuvu - Thandeye, ninna kaiyalli nanna aathmavannu oppisutthene - endu mahadwaniyinda koogi hellidanu." (Luka 23:46)\n\nPhala: Paapa Parihara'
            ]
        },
        glorious: {
            id: 'glorious',
            name: 'Mahimeya Rahasyagalu',
            days: [0, 3],
            passages: [
                'Yesuva Punarutthana: "Aathanu illilla; thaanu helidantheye aathanu yeddiddhane. Banni, karthanu malagidda sthalavannu nodiri." (Matthews 28:6)\n\nPhala: Viswasa',
                'Yesuva Swargarohana: "Karthanaada Yesuvu... paralokakke erisalpattu, Devara balabhagadalli kulithukondanu." (Mark 16:19)\n\nPhala: Nambike (Aashe)',
                'Pavitra Athmana Agamana: "Avarellaru Pavitra Athmaninda thumbikondaru... bere bere bhashegalalli mathanadalu arambhisidaru." (Acts 2:4)\n\nPhala: Devara Preethi',
                'Mariyala Swargarohana: "Idho, indu modalugondu ella santhathiyavaru nannannu dhanye ennuvaru." (Luka 1:48)\n\nPhala: Olleya Marana',
                'Mariyalu Swarga Bhulokakke Raniyaagi Mukuta Dharisiddu: "Obba sthreeyu suryanannu dharisikondu, chandranannu thanna kaalakkelage irisi, hanneradu nakshatragala kirita-vannu thanna thaleya meletikondu kanisidalu." (Revelations 12:1)\n\nPhala: Mariyalalli Bhakti'
            ]
        }
    }
};
