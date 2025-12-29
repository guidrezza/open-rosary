import type { LocalizationData } from '$lib/types';

export const gom: LocalizationData = {
    lang: 'gom-IN',
    seo: {
        title: 'Povitr Rozar',
        description:
            'Rozar mag. Vegim, fukott, ani mobile-ar vaprunk sopem. Ek modern open-source web app, khoincheai device-ar vaprunk.'
    },
    ui: {
        start_button: 'Magunk Suru Kor',
        pick_mystery: 'Mister Bodol',
        footer_made_by: 'TAYAR KELAM',
        recommended_mystery: 'Aiz Disacho Mister',
        pray_button_prefix: 'Mag: ',
        change_theme: 'Rong Bodol',
        liturgical: {
            // Seasons
            advent: 'Adventacho Kall',
            christmas: 'Natalancho Kall',
            lent: 'Koresmacho Kall',
            triduum: 'Paskanchem Triduum',
            easter: 'Paskancho Kall',
            ordinary: 'Samanyo Kall',
            // Feasts
            epiphany: 'Epifania (Jezuchem Porgottop)',
            presentation: 'Jezuchem Bhettonn',
            annunciation: 'Boddvo-vondonn',
            transfiguration: 'Jezuchem Rupantor',
            assumption: 'Ankvar Mariechem Sorg-Ghevop',
            all_saints: 'Somest Santanchem Fest',
            all_souls: 'Somest Mel’leank',
            immaculate_conception: 'Ankvar Mariechem Khotavinn Ghorb-sombhov',
            guadalupe: 'Guadalupechi Saibinn',
            mother_of_god: 'Devachi Mai (Solemnity)',
            ash_wednesday: 'Cinza Budhvar',
            palm_sunday: 'Ramacho Aitar',
            holy_thursday: 'Nimanno Jevonn (Krista-Prasadacho Dis)',
            good_friday: 'Niman’no Sukrar',
            holy_saturday: 'Paskanchi Rat',
            easter_sunday: 'Paskam (Jezuchem Punorjivontponn)',
            divine_mercy: 'Kakuticho Aitar',
            ascension: 'Sorg-Choddonn',
            pentecost: 'Pentecost (Povitr Atmo)',
            trinity: 'Santissima Trindad',
            corpus_christi: 'Kristacho Kud-Rogot (Corpus Christi)',
            sacred_heart: 'Jezuchem Kaliz',
            christ_king: 'Krist Rai',
            gaudete: 'Gaudete Aitar',
            laetare: 'Laetare Aitar',
            st_joseph: 'Sant Juze',
            st_peter_paul: 'Sant Pedru ani Paulu',
            exaltation_cross: 'Khursachem Jayait',
            archangels: 'Mukhel Boddve',
            lateran_basilica: 'Lateran Igorjechem Fest',
            holy_family: 'Povitr Kuttumb',
            nativity_john_baptist: 'Sant Juanv Batistacho Zolm',
            baptism_lord: 'Jezuchem Snan'
        },
        modes: {
            digital: {
                title: 'Digital Monyo',
                desc: 'Screen-ar tujea magnneacho hisop dovor.'
            },
            physical: {
                title: 'Hatantlem Rozar',
                desc: 'Mhoje kodde Rozar asa. Fokot magnnim dakhoi.'
            },
            mysteries: {
                title: 'Fokot Mister',
                desc: '5 Misterancho sompo list'
            }
        },
        actions: {
            next: 'Next',
            back: 'Back',
            exit: 'EXIT?'
        },
        announce: 'Mister Niyall',
        sections: {
            intro: 'Survat',
            decade: 'Khonn (Decade)',
            conclusion: 'Shevott'
        },
        ordinals: ['1-lo', '2-ro', '3-ro', '4-to', '5-vo'],
        menus: {
            language: 'Bhas Vinchun Kadd',
            mystery: 'Mister Vinchun Kadd',
            mode: 'Mode Vinchun Kadd',
            theme: 'Theme Vinchun Kadd',
            jump_to_section: 'Hanga Voch'
        },
        themes: {
            description: 'Tujo experience bodol. Hacho liturgic tarikher porinnam zauncho na.',
            ordinary: 'Samanyo',
            christmas_easter: 'Natalam / Paskam',
            advent_lent: 'Advent / Koresm',
            pentecost: 'Pentecost',
            gaudete: 'Gaudete',
            requiem: 'Requiem (Dukhi)',
            gold: 'Bhangar',
            silver: 'Rupem',
            white: 'Dhove',
            red: 'Tambdde',
            purple: 'Zamblle',
            rose: 'Gulabi',
            black: 'Kalle',
            green: 'Hirve'
        }
    },
    prayers: {
        sign_of_cross: {
            id: 'sign_of_cross',
            title: 'Santa Khursachi Kuru',
            content: 'Bapa, ani Puta, ani Povitr Atmeache Nanvim. Amen.'
        },
        creed: {
            id: 'creed',
            title: 'Sotman’tam (Apostles\' Creed)',
            content:
                'Sotman’tam Deva, Bapa Sorv-podvedarak,orochnnara sorg ani prithumachea. Ani Jezu Kristak, Tachea ekloch Putak, amchea Somiak. To Povitr Atmea vorvim gorbhim sombhovlo, Ankvar Marie thavn zolmolo. Pons Pilata khal Tannem koxtt sosle, Taka Khursar zoddlo, To melo ani Taka nikhipilo. To mel’leam modhem denvlo, tisrea disa mel’leantlo punorjivont zalo. Sorgar choddlo, Deva Sorv-podvedar Bapachea uzveak bosla. Thoinchan To yetolo, jivontank ani mel’leank nit korunk. Sotman’tam Povitr Atmeak, Katholik Povitr Sobhek, Bhoktancho Ektthar, Patkanchem Bhogsonnem, Kuddi chem Punorjivontponn, Sasnache Jivit. Amen.'
        },
        our_father: {
            id: 'our_father',
            title: 'Amchea Bapa',
            content:
                'Amchea Bapa, sorgar aslelea, Tujem Nanv povitr zaum, Tujem Raz amkam ieum, Tuji khuxi, zoxi sorgar, toxi sonvsarar zaum. Amcho dispotto girons aiz amkam di, ani ami amcher chukleleank bhogsitanv, toxem amchim patkam bhogsunk; ani amkam tallnient poddunk dium naka, punn vaittantlim amkam nivar. Amen.'
        },
        hail_mary: {
            id: 'hail_mary',
            title: 'Noman Morie',
            content:
                'Noman Morie, kurpen bhorlele, Somi tuje thai asa, ostoriam modhem tum sodenv, ani sodenv foll tujea kuddichem, Jezu. Santa Morie, Devache Maie, ama papiam khatir vinoti kor, atam ani amchea mornnachea vellar. Amen.'
        },
        glory_be: {
            id: 'glory_be',
            title: 'Mhoima Bapak',
            content:
                'Mhoima Bapak, ani Putak, ani Povitr Atmeak; zoxi adim, toxi atam, ani sodam sorvotam. Amen.'
        },
        fatima: {
            id: 'fatima',
            title: 'Fatima Magnnem',
            content:
                'O mhojea Jezu, amchim papam bhogsum, amkam iemkonddachea ujeantlim nivar. Purgatorintlea atmeank pav, ani chodd goroz asleleank Tuji kakut di.'
        },
        hail_holy_queen: {
            id: 'hail_holy_queen',
            title: 'Noman Rannie',
            content:
                'Noman Rannie, Kakutiche Maie, Noman amchea Jiva, amruta ani bhorvanxea; Tuka ami ulo martanv, ami pordesvasi Evechi bhurgim. Hya dukhanche konddantlean, askar-huskar soddun, ami Tuka rudan kortanv. Tor tum amche Xekaye, Tuje kakutiche dolle amcher porot, ani hea pordesa uprant, Tuje kuddichem sodenv Foll, Jezuk amkam dakhoi; O konvalle, O mogall, O dulob Ankvar Morie.\n\nV. Bhagevont Devache Maie, ama pasot vinoti kor.\nR. Kristachea bhasavnneank ami favo zaunche khatir.'
        },
        closing_prayer: {
            id: 'closing_prayer',
            title: 'Xevottachim Magnnem',
            content:
                'Prarthumia. O Deva, Tujea Ekletsea Putan, Aplea Jivita, Mornna ani Punorjivontponna vorvim, sasnachea taronnacho Muku amkam melloilo; he Bhagivont Ankvar Marieche Rozariche Mister ami niyalltanv tenna, tantum attaplelem asa Tachi ami dekh gheunchi, ani tantum bhasail’lem asa tem amkam mellchem. Tea ch Krist amchea Somia vorvim. Amen.'
        }
    },
    mysteries: {
        joyful: {
            id: 'joyful',
            name: 'Sontosache Mister',
            days: [1, 6],
            passages: [
                'Boddvo Gabriel Ankvar Marie-k Boddvo-Vondonn korta: "Boddvean tika sanglem: \'Bhieum naka Morie, Deva mukhar Tuka kurpa mell’lea. Polle, Tumgorbhest zatoli ani Tuka ek Put zolmotolo, ani Tum Taka Jezu mhonn nanv divchem.\'" (Luka 1:30-31)\n\nFoll: Khaltikai',
                'Ankvar Mari Elizabeti-chi bhett korta: "Ani Elizabetin mhottean aroj marun sanglem: \'Ostoriam modhem tum sodenv ani sodenv foll tujea kuddichem.\'" (Luka 1:42)\n\nFoll: Dusre-cho Mog',
                'Jezu Belea-nagrant zolma: "Ani tinnem Aplea poilea Putak zolm dilo, Taka,aliant guttlailo ani, gottheant, eke khonnint nidailo." (Luka 2:7)\n\nFoll: Goribkai',
                'Jezu-k Templant bhettoitat: "Mhojea dolleamni Tujem taronn, pollelem, jem Tunvem sogllea raxttram mukhar toiar kelam." (Luka 2:30-31)\n\nFoll: Khaltikai ani Nitalkai',
                'Jezu Templant chukta ani mellta: "Ani oxem ghodlem, tin disam uprant, to tankam templant mell’lo, xastriam modhem bosun, tanchem aikotalo ani tankam vichar ghalitalo." (Luka 2:46)\n\nFoll: Devachi Khuxi Korunk'
            ]
        },
        luminous: {
            id: 'luminous',
            name: 'Uzvadache Mister',
            days: [4],
            passages: [
                'Jordan nhoint Jezu snan gheta: "Ani sorgar thavn ek tallo aikunk ailo: \'Ho Mhozo mogacho Put, Hacher Mhojibholli khuxi asa.\'" (Mateus 3:17)\n\nFoll: Bhasavnneo Pallunk',
                'Kana-ganvant Jezu poilo miracle korta: "Tachea Main chakrank sanglem: \'To tumkam sangta tem korat.\'" (Juanv 2:5)\n\nFoll: Devacher Visvas',
                'Jezu Sorginchem Raj porgott’ta: "Kall bhorla ani Devachem Raj lagim pavlam; mon-bodlop korat ani Bori Khobor sotmanu." (Mark 1:15)\n\nFoll: Patkam-chem Mon-bodlop',
                'Tabor dongrar Jezu-chem Rupantor: "Ani Tanche mukhar Tachem rupantor zalem, ani Tachem tondd suria bori porzoll’lem." (Mateus 17:2)\n\nFoll: Bhagevontponnachi Axea',
                'Jezu Eukaristia-chi sthapnni korta: "Gheyat ani khayat, hi Mhoji Kudd." (Mateus 26:26)\n\nFoll: Eukaristie-cho Mog'
            ]
        },
        sorrowful: {
            id: 'sorrowful',
            name: 'Dukhi Mister',
            days: [2, 5],
            passages: [
                'Jezu Mallear magtana rogot ghameta: "Ani mornnachea akantak sampddun, To odik nettan magtalo. Ani Tacho gham’ rogtacheathembean-bori zomnir gollttalo." (Luka 22:44)\n\nFoll: Patkachi Dukh',
                'Jezu-k khambeak bandhun jerbandamni martat: "Tednam Pilatan Jezuk tabeant dilo ani Taka jerbandamni marunk lailo." (Juanv 19:1)\n\nFoll: Kuddichi Dourbollkai',
                'Jezu-chea mathear kantteam-cho mukutt: "Ani kantteanchi ek humpullvinnun, Tachea mathear ghal’li." (Mark 15:17)\n\nFoll: Apnnannchem Doulot',
                'Jezu Kalvar-dongrar Khuris vhorta: "Ani Aplo khuris gheun, To bhair sorlo, tea zagear vochunk zo ‘Kott’ttecho Zago’ mhonnlear." (Juanv 19:17)\n\nFoll: Sosnnikai',
                'Jezu Khursar prann korta: "Ani mhottean aroj marun Jezun mhonnlem: \'Bapa, Tujea hatant Hanv Mhozo atmo sopoytam.\'" (Luka 23:46)\n\nFoll: Mornnachi Toiyari'
            ]
        },
        glorious: {
            id: 'glorious',
            name: 'Horkache Mister',
            days: [0, 3],
            passages: [
                'Jezu Punorjivont zata: "To hanga na; To jivont zala, zoxem Tannem sanglolem. Yeiat ani To nidlolio zago polleyat." (Mateus 28:6)\n\nFoll: Bhavarth (Faith)',
                'Jezu Sorgar choddta: "Sorgar choddlo, Deva Sorv-podvedar Bapachea uzveak bosla." (Mark 16:19)\n\nFoll: Bhorvanso (Hope)',
                'Povitr Atmo-chem Dennem: "Ani tim sogllim Povitr Atmean bhorlim ani veg-vegllea bhasamniulounk laglim." (Dhor’rdu 2:4)\n\nFoll: Devacho Mog',
                'Ankvar Marie-k kudd-atmea sovem Sorgar vhortat: "Tuka bhagivont mhonnunk soglleo pillgeo yetolio." (Luka 1:48)\n\nFoll: Mhojea Mornnachi Khuxi',
                'Ankvar Marie-k Sorg-Sonvsarachi Ranni-Kwin kortat: "Sorgar ek vhoddli kuru dixtti poddli: ek ostori surian nhesleli, tichea pamyam-tulla chondrim." (Prokaskaunni 12:1)\n\nFoll: Sorginchi Axea'
            ]
        }
    }
};
