import type { LocalizationData } from '$lib/types';

export const sk: LocalizationData = {
    lang: 'sk-SK',
    seo: {
        title: 'Svätý ruženec',
        description:
            'Modlite sa ruženec. Rýchle, zadarmo a prispôsobené pre mobil. Moderná open-source webová aplikácia, ktorá sa ľahko používa na akomkoľvek zariadení.'
    },
    ui: {
        start_button: 'Začať modlitbu',
        pick_mystery: 'Zmeniť tajomstvá',
        footer_made_by: 'VYTVORIL',
        recommended_mystery: 'Dnešné tajomstvá',
        pray_button_prefix: 'Modliť sa: ',
        change_theme: 'Zmeniť tému',
        liturgical: {
            // Seasons
            advent: 'Advent',
            christmas: 'Vianočné obdobie',
            lent: 'Pôstne obdobie',
            triduum: 'Veľkonočné trojdnie',
            easter: 'Veľkonočné obdobie',
            ordinary: 'Cezročné obdobie',
            // Feasts
            epiphany: 'Zjavenie Pána (Traja králi)',
            presentation: 'Obetovanie Pána (Hromnice)',
            annunciation: 'Zvestovanie Pána',
            transfiguration: 'Premenenie Pána',
            assumption: 'Nanebovzatie Panny Márie',
            all_saints: 'Všetkých svätých',
            all_souls: 'Spomienka na všetkých verných zosnulých',
            immaculate_conception: 'Nepoškvrnené počatie Panny Márie',
            guadalupe: 'Panny Márie Guadalupskej',
            mother_of_god: 'Panny Márie Bohorodičky',
            ash_wednesday: 'Popolcová streda',
            palm_sunday: 'Kvetná nedeľa',
            holy_thursday: 'Zelený štvrtok',
            good_friday: 'Veľký piatok',
            holy_saturday: 'Biela sobota',
            easter_sunday: 'Veľkonočná nedeľa',
            divine_mercy: 'Nedeľa Božieho milosrdenstva',
            ascension: 'Nanebovstúpenie Pána',
            pentecost: 'Zoslanie Ducha Svätého (Turíce)',
            trinity: 'Najsvätejšej Trojice',
            corpus_christi: 'Najsvätejšieho Kristovho Tela a Krvi',
            sacred_heart: 'Najsvätejšieho Srdca Ježišovho',
            christ_king: 'Krista Kráľa',
            gaudete: 'Nedeľa Gaudete',
            laetare: 'Nedeľa Laetare',
            st_joseph: 'Svätého Jozefa',
            st_peter_paul: 'Svätých Petra a Pavla',
            exaltation_cross: 'Povýšenie Svätého kríža',
            archangels: 'Svätých archanjelov',
            lateran_basilica: 'Výročie posviacky Lateránskej baziliky',
            holy_family: 'Svätej rodiny',
            nativity_john_baptist: 'Narodenie sv. Jána Krstiteľa',
            baptism_lord: 'Krst Krista Pána'
        },
        modes: {
            digital: {
                title: 'Digitálny ruženec',
                desc: 'Sledujte postup modlitby na obrazovke.'
            },
            physical: {
                title: 'Fyzický ruženec',
                desc: 'Mám svoj vlastný ruženec. Zobraziť iba modlitby.'
            },
            mysteries: {
                title: 'Iba tajomstvá',
                desc: 'Jednoduchý zoznam 5 tajomstiev'
            }
        },
        actions: {
            next: 'Next',
            back: 'Back',
            exit: 'EXIT?'
        },
        announce: 'Ohlásenie tajomstva',
        sections: {
            intro: 'Úvod',
            decade: 'Desiatok',
            conclusion: 'Záver'
        },
        ordinals: ['1.', '2.', '3.', '4.', '5.'],
        menus: {
            language: 'Vybrať jazyk',
            mystery: 'Vybrať tajomstvá',
            mode: 'Vybrať režim',
            theme: 'Vybrať tému',
            jump_to_section: 'Prejsť na časť'
        },
        themes: {
            description: 'Prispôsobte si vzhľad. Toto neovplyvní liturgický dátum.',
            ordinary: 'Cezročné',
            christmas_easter: 'Vianoce / Veľká noc',
            advent_lent: 'Advent / Pôst',
            pentecost: 'Turíce',
            gaudete: 'Gaudete',
            requiem: 'Requiem',
            gold: 'Zlatá',
            silver: 'Strieborná',
            white: 'Biela',
            red: 'Červená',
            purple: 'Fialová',
            rose: 'Ružová',
            black: 'Čierna',
            green: 'Zelená'
        }
    },
    prayers: {
        sign_of_cross: {
            id: 'sign_of_cross',
            title: 'Znamenie kríža',
            content: 'V mene Otca i Syna i Ducha Svätého. Amen.'
        },
        creed: {
            id: 'creed',
            title: 'Apoštolské vyznanie viery (Verím v Boha)',
            content:
                'Verím v Boha, Otca všemohúceho, Stvoriteľa neba i zeme. I v Ježiša Krista, jeho jediného Syna, nášho Pána, ktorý sa počal z Ducha Svätého, narodil sa z Márie Panny, trpel za vlády Poncia Piláta, bol ukrižovaný, umrel a bol pochovaný. Zostúpil k zosnulým, tretieho dňa vstal z mŕtvych, vystúpil na nebesia, sedí po pravici Boha Otca všemohúceho. Odtiaľ príde súdiť živých i mŕtvych. Verím v Ducha Svätého, v svätú Cirkev katolícku, v spoločenstvo svätých, v odpustenie hriechov, vo vzkriesenie tela a v život večný. Amen.'
        },
        our_father: {
            id: 'our_father',
            title: 'Otče náš',
            content:
                'Otče náš, ktorý si na nebesiach, posväť sa meno tvoje, príď kráľovstvo tvoje, buď vôľa tvoja ako v nebi, tak i na zemi. Chlieb náš každodenný daj nám dnes a odpusť nám naše viny, ako i my odpúšťame svojim vinníkom, a neuveď nás do pokušenia, ale zbav nás Zlého. Amen.'
        },
        hail_mary: {
            id: 'hail_mary',
            title: 'Zdravas\', Mária',
            content:
                'Zdravas\', Mária, milosti plná, Pán s tebou. Požehnaná si medzi ženami a požehnaný je plod života tvojho, Ježiš. Svätá Mária, Matka Božia, pros za nás hriešnych teraz i v hodinu smrti našej. Amen.'
        },
        glory_be: {
            id: 'glory_be',
            title: 'Sláva Otcu',
            content:
                'Sláva Otcu i Synu i Duchu Svätému. Ako bolo na počiatku, tak nech je i teraz i vždycky i na veky vekov. Amen.'
        },
        fatima: {
            id: 'fatima',
            title: 'Fatimská prosba',
            content:
                'Ó, Ježišu, odpusť nám naše hriechy, zachráň nás od pekelného ohňa, priveď do neba všetky duše, najmä tie, ktoré najviac potrebujú tvoje milosrdenstvo.'
        },
        hail_holy_queen: {
            id: 'hail_holy_queen',
            title: 'Zdravas\', Kráľovná',
            content:
                'Zdravas\', Kráľovná, matka milosrdenstva; život náš, sladkosť a nádej naša, zdravas\'. K tebe voláme, hriešni synovia Evy, v tomto sĺz údolí stonajúci, plačúci. A preto teda, Orodovnica naša, obráť k nám tie svoje milosrdné oči. A nám Ježiša, ktorý je požehnaný plod života tvojho, tam vo večnosti ukáž. Ó milostivá, ó prívetivá, ó sladká Panna Mária.\n\nV. Oroduj za nás, svätá Božia Rodička.\nR. Aby sme sa stali hodni Kristových prisľúbení.'
        },
        closing_prayer: {
            id: 'closing_prayer',
            title: 'Záverečná modlitba',
            content:
                'Modlime sa. Bože, ktorého jednorodený Syn svojím životom, smrťou a zmŕtvychvstaním nám získal odmenu večného života, dopraj nám, prosíme, aby sme o týchto tajomstvách posvätného ruženca preblahoslavenej Panny Márie nielen rozjímali, ale aj nasledovali to, čo obsahujú, a dosiahli to, čo sľubujú. Skrze Krista, nášho Pána. Amen.'
        }
    },
    mysteries: {
        joyful: {
            id: 'joyful',
            name: 'Radostné tajomstvá',
            days: [1, 6],
            passages: [
                'Zvestovanie Pána: "Anjel jej povedal: ‚Neboj sa, Mária, našla si milosť u Boha. Počneš a porodíš syna a dáš mu meno Ježiš.‘" (Lk 1, 30-31)\n\nOvocie tajomstva: Pokora',
                'Návšteva Panny Márie u Alžbety: "Alžbeta zvolala veľkým hlasom: ‚Požehnaná si medzi ženami a požehnaný je plod tvojho života.‘" (Lk 1, 42)\n\nOvocie tajomstva: Láska k blížnemu',
                'Narodenie Pána Ježiša: "Porodila svojho prvorodeného syna, zavinula ho do plienok a uložila do jasieľ." (Lk 2, 7)\n\nOvocie tajomstva: Duchovná chudoba',
                'Obetovanie Pána v chráme: "Keď rodičia priniesli Ježiša, Simeon ho vzal do náručia a velebil Boha." (Lk 2, 27-28)\n\nOvocie tajomstva: Poslušnosť',
                'Nájdenie Pána Ježiša v chráme: "Po troch dňoch ho našli v chráme. Sedel medzi učiteľmi, počúval ich a kládol im otázky." (Lk 2, 46)\n\nOvocie tajomstva: Radosť z hľadania Boha'
            ]
        },
        luminous: {
            id: 'luminous',
            name: 'Tajomstvá svetla',
            days: [4],
            passages: [
                'Krst Pána Ježiša v Jordáne: "A z neba zaznel hlas: ‚Toto je môj milovaný Syn, v ktorom mám zaľúbenie.‘" (Mt 3, 17)\n\nOvocie tajomstva: Vernosť krstným sľubom',
                'Zázrak na svadbe v Káne: "Jeho matka povedala obsluhujúcim: ‚Urobte všetko, čo vám povie!‘" (Jn 2, 5)\n\nOvocie tajomstva: Dôvera v Boha',
                'Ohlasovanie Božieho kráľovstva: "Naplnil sa čas a priblížilo sa Božie kráľovstvo. Kajajte sa a verte evanjeliu." (Mk 1, 15)\n\nOvocie tajomstva: Obrátenie',
                'Premenenie Pána na hore Tábor: "A premenil sa pred nimi: tvár mu žiarila sťa slnko a odev mu zbelela ako svetlo." (Mt 17, 2)\n\nOvocie tajomstva: Túžba po svätosti',
                'Ustanovenie Oltárnej sviatosti: "Vezmite a jedzte: toto je moje telo... Pite z neho všetci: toto je moja krv." (Mt 26, 26-28)\n\nOvocie tajomstva: Úcta k Eucharistii'
            ]
        },
        sorrowful: {
            id: 'sorrowful',
            name: 'Bolestné tajomstvá',
            days: [2, 5],
            passages: [
                'Modlitba Pána Ježiša v Getsemani: "V smrteľnej úzkosti sa modlil ešte horlivejšie. A jeho pot bol ako kvapky krvi, čo padajú na zem." (Lk 22, 44)\n\nOvocie tajomstva: Ľútosť nad hriechmi',
                'Bičovanie Pána Ježiša: "Vtedy Pilát Ježiša vzal a dal ho zbičovať." (Jn 19, 1)\n\nOvocie tajomstva: Čistota zmyslov',
                'Tŕním korunovanie Pána Ježiša: "Uplietli z tŕnia korunu, položili mu ju na hlavu a do pravej ruky mu dali trstinu." (Mt 27, 29)\n\nOvocie tajomstva: Odvaha a trpezlivosť',
                'Krížová cesta Pána Ježiša: "Sám si niesol kríž a vyšiel na miesto, ktoré sa volá Lebka, po hebrejsky Golgota." (Jn 19, 17)\n\nOvocie tajomstva: Trpezlivosť v ťažkostiach',
                'Ukrižovanie a smrť Pána Ježiša: "Ježiš zvolal mocným hlasom: ‚Otče, do tvojich rúk porúčam svojho ducha.‘ A len čo to povedal, vydýchol." (Lk 23, 46)\n\nOvocie tajomstva: Láska k Bohu a spása duší'
            ]
        },
        glorious: {
            id: 'glorious',
            name: 'Slávnostné tajomstvá',
            days: [0, 3],
            passages: [
                'Zmŕtvychvstanie Pána Ježiša: "Niet ho tu, lebo vstal, ako povedal. Poďte, pozrite miesto, kde ležal." (Mt 28, 6)\n\nOvocie tajomstva: Pevná viera',
                'Nanebovstúpenie Pána Ježiša: "Keď im to Pán Ježiš povedal, vzatý bol do neba a zasadol po pravici Boha." (Mk 16, 19)\n\nOvocie tajomstva: Kresťanská nádej',
                'Zoslanie Ducha Svätého: "Všetkých naplnil Duch Svätý a začali hovoriť inými jazykmi." (Sk 2, 4)\n\nOvocie tajomstva: Láska k Bohu a dary Ducha',
                'Nanebovzatie Panny Márie: "Hľa, odteraz ma budú blahoslaviť všetky pokolenia, lebo veľké veci mi urobil ten, ktorý je mocný." (Lk 1, 48-49)\n\nOvocie tajomstva: Šťastná hodina smrti',
                'Korunovanie Panny Márie: "Potom sa na nebi ukázalo veľké znamenie: Žena odetá slnkom, pod jej nohami mesiac a na jej hlave veniec z dvanástich hviezd." (Zjv 12, 1)\n\nOvocie tajomstva: Dôvera v Máriinu ochranu'
            ]
        }
    }
};
