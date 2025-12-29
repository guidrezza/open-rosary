import type { LocalizationData } from '$lib/types';

export const cs: LocalizationData = {
    lang: 'cs-CZ',
    seo: {
        title: 'Svatý růženec',
        description:
            'Modlete se růženec. Rychle, zdarma a přizpůsobené pro mobily. Moderní open-source webová aplikace, snadno použitelná na jakémkoli zařízení.'
    },
    ui: {
        start_button: 'Začít se modlit',
        pick_mystery: 'Vybrat tajemství',
        footer_made_by: 'VYTVOŘIL',
        recommended_mystery: 'Dnešní tajemství',
        pray_button_prefix: 'Modlit se: ',
        change_theme: 'Změnit vzhled',
        liturgical: {
            // Seasons
            advent: 'Advent',
            christmas: 'Vánoce',
            lent: 'Postní doba',
            triduum: 'Velikonoční triduum',
            easter: 'Velikonoce',
            ordinary: 'Mezidobí',
            // Feasts
            epiphany: 'Zjevení Páně',
            presentation: 'Uvedení Páně do chrámu',
            annunciation: 'Zvěstování Páně',
            transfiguration: 'Proměnění Páně',
            assumption: 'Nanebevzetí Panny Marie',
            all_saints: 'Všech svatých',
            all_souls: 'Vzpomínka na všechny věrné zemřelé',
            immaculate_conception: 'Panna Maria, počatá bez prvotního hříchu',
            guadalupe: 'Panna Maria Guadalupská',
            mother_of_god: 'Matka Boží, Panna Maria',
            ash_wednesday: 'Popeleční středa',
            palm_sunday: 'Květná neděle',
            holy_thursday: 'Zelený čtvrtek',
            good_friday: 'Velký pátek',
            holy_saturday: 'Bílá sobota',
            easter_sunday: 'Boží hod velikonoční',
            divine_mercy: 'Neděle Božího milosrdenství',
            ascension: 'Nanebevstoupení Páně',
            pentecost: 'Seslání Ducha svatého',
            trinity: 'Nejsvětější Trojice',
            corpus_christi: 'Těla a Krve Páně',
            sacred_heart: 'Nejsvětějšího Srdce Ježíšova',
            christ_king: 'Ježíše Krista Krále',
            gaudete: '3. neděle adventní (Gaudete)',
            laetare: '4. neděle postní (Laetare)',
            st_joseph: 'Sv. Josefa',
            st_peter_paul: 'Sv. Petra a Pavla',
            exaltation_cross: 'Povýšení svatého kříže',
            archangels: 'Svatých archandělů',
            lateran_basilica: 'Posvěcení lateránské baziliky',
            holy_family: 'Svaté Rodiny',
            nativity_john_baptist: 'Narození sv. Jana Křtitele',
            baptism_lord: 'Křest Páně'
        },
        modes: {
            digital: {
                title: 'Digitální růženec',
                desc: 'Sledujte postup modlitby na obrazovce.'
            },
            physical: {
                title: 'Fyzický růženec',
                desc: 'Mám svůj vlastní růženec. Zobrazit pouze modlitby.'
            },
            mysteries: {
                title: 'Pouze tajemství',
                desc: 'Jednoduchý seznam 5 tajemství'
            }
        },
        actions: {
            next: 'Next',
            back: 'Back',
            exit: 'EXIT?'
        },
        announce: 'Ohlášení tajemství',
        sections: {
            intro: 'Úvod',
            decade: 'Desátek',
            conclusion: 'Závěr'
        },
        ordinals: ['1.', '2.', '3.', '4.', '5.'],
        menus: {
            language: 'Vybrat jazyk',
            mystery: 'Vybrat tajemství',
            mode: 'Vybrat režim',
            theme: 'Vybrat vzhled',
            jump_to_section: 'Přejít na sekci'
        },
        themes: {
            description: 'Upravte si vizuální zážitek. Toto neovlivňuje liturgické datum.',
            ordinary: 'Mezidobí',
            christmas_easter: 'Vánoce / Velikonoce',
            advent_lent: 'Advent / Půst',
            pentecost: 'Letnice',
            gaudete: 'Gaudete',
            requiem: 'Requiem',
            gold: 'Zlatá',
            silver: 'Stříbrná',
            white: 'Bílá',
            red: 'Červená',
            purple: 'Fialová',
            rose: 'Růžová',
            black: 'Černá',
            green: 'Zelená'
        }
    },
    prayers: {
        sign_of_cross: {
            id: 'sign_of_cross',
            title: 'Znamení kříže',
            content: 'Ve jménu Otce i Syna i Ducha svatého. Amen.'
        },
        creed: {
            id: 'creed',
            title: 'Apoštolské vyznání víry',
            content:
                'Věřím v Boha, Otce všemohoucího, Stvořitele nebe i země. I v Ježíše Krista, Syna jeho jediného, Pána našeho, jenž se počal z Ducha svatého, narodil se z Marie Panny, trpěl pod Ponciem Pilátem, ukřižován umřel i pohřben jest; sestoupil do pekel, třetího dne vstal z mrtvých; vstoupil na nebesa, sedí po pravici Boha, Otce všemohoucího; odtud přijde soudit živé i mrtvé. Věřím v Ducha svatého, svatou církev obecnou, společenství svatých, odpuštění hříchů, vzkříšení těla a život věčný. Amen.'
        },
        our_father: {
            id: 'our_father',
            title: 'Otče náš',
            content:
                'Otče náš, jenž jsi na nebesích, posvěť se jméno tvé. Přijď království tvé. Buď vůle tvá jako v nebi, tak i na zemi. Chléb náš vezdejší dej nám dnes. A odpusť nám naše viny, jako i my odpouštíme našim viníkům. A neuveď nás v pokušení, ale zbav nás od zlého. Amen.'
        },
        hail_mary: {
            id: 'hail_mary',
            title: 'Zdrávas Maria',
            content:
                'Zdrávas, Maria, milosti plná, Pán s tebou; požehnaná ty mezi ženami a požehnaný plod života tvého, Ježíš. Svatá Maria, Matko Boží, pros za nás hříšné nyní i v hodinu smrti naší. Amen.'
        },
        glory_be: {
            id: 'glory_be',
            title: 'Sláva Otci',
            content:
                'Sláva Otci i Synu i Duchu svatému, jako byla na počátku, i nyní i vždycky a na věky věků. Amen.'
        },
        fatima: {
            id: 'fatima',
            title: 'Fatimská modlitba',
            content:
                'Pane Ježíši, odpusť nám naše hříchy, uchraň nás pekelného ohně a přiveď do nebe všechny duše, zvláště ty, které tvého milosrdenství nejvíce potřebují.'
        },
        hail_holy_queen: {
            id: 'hail_holy_queen',
            title: 'Zdrávas Královno',
            content:
                'Zdrávas Královno, matko milosrdenství, živote, sladkosti a naděje naše, buď zdráva! K tobě voláme, vyhnaní synové Evy, k tobě vzdycháme, lkajíce a plačíce v tomto slzavém údolí. A proto, orodovnice naše, obrať k nám své milosrdné oči a Ježíše, požehnaný plod života svého, nám po tomto putování ukaž, ó milostivá, ó přívětivá, ó přesladká Panno Maria.\n\nV. Oroduj za nás, Královno posvátného růžence.\nO. Abychom se stali hodnými Kristových zaslíbení.'
        },
        closing_prayer: {
            id: 'closing_prayer',
            title: 'Závěrečná modlitba',
            content:
                'Modleme se. Bože, tvůj jednorozený Syn nám svým životem, smrtí a zmrtvýchvstáním získal věčnou spásu. Dej nám, prosíme, když v posvátném růženci blahoslavené Panny Marie o těchto tajemstvích rozjímáme, ať také podle nich žijeme a dosáhneme toho, co slibují. Skrze Krista, našeho Pána. Amen.'
        }
    },
    mysteries: {
        joyful: {
            id: 'joyful',
            name: 'Radostná tajemství',
            days: [1, 6],
            passages: [
                'Zvěstování Páně: "Anděl jí řekl: ‚Neboj se, Maria, neboť jsi nalezla milost u Boha. Počneš a porodíš syna a dáš mu jméno Ježíš.‘" (Lk 1,30-31)\n\nOvoce tajemství: Pokora',
                'Navštívení Panny Marie: "Alžběta zvolala mocným hlasem: ‚Požehnaná ty mezi ženami a požehnaný plod života tvého!‘" (Lk 1,42)\n\nOvoce tajemství: Láska k bližnímu',
                'Narození Pána Ježíše: "Porodila svého prvorozeného syna, zavinula ho do plenek a položila do jeslí." (Lk 2,7)\n\nOvoce tajemství: Duch chudoby',
                'Uvedení Páně do chrámu: "Když rodiče přinesli dítě Ježíše, Simeon ho vzal do náručí a velebil Boha." (Lk 2,27-28)\n\nOvoce tajemství: Poslušnost a čistota',
                'Nalezení Pána Ježíše v chrámě: "Po třech dnech ho nalezli v chrámě, jak sedí uprostřed učitelů, poslouchá je a dává jim otázky." (Lk 2,46)\n\nOvoce tajemství: Radost z nalezení Boha'
            ]
        },
        luminous: {
            id: 'luminous',
            name: 'Tajemství světla',
            days: [4],
            passages: [
                'Křest Pána Ježíše v Jordánu: "Z nebe se ozval hlas: ‚To je můj milovaný Syn, v něm mám zalíbení.‘" (Mt 3,17)\n\nOvoce tajemství: Věrnost křestnímu slibu',
                'Zjevení Pána Ježíše v Káni Galilejské: "Jeho matka řekla služebníkům: ‚Udělejte všechno, co vám řekne.‘" (Jan 2,5)\n\nOvoce tajemství: Důvěra v Boží moc',
                'Hlásání Božího království: "Čas se naplnil a Boží království se přiblížilo. Čiňte pokání a věřte evangeliu." (Mk 1,15)\n\nOvoce tajemství: Obrácení srdce',
                'Proměnění Pána Ježíše na hoře Tábor: "Byl před nimi proměněn; jeho tvář zářila jako slunce a jeho šat byl bílý jako světlo." (Mt 17,2)\n\nOvoce tajemství: Touha po svatosti',
                'Ustanovení eucharistie: "Vezměte a jezte, toto je mé tělo. Pijte z něho všichni, neboť toto je má krev." (Mt 26,26-28)\n\nOvoce tajemství: Úcta k Eucharistii'
            ]
        },
        sorrowful: {
            id: 'sorrowful',
            name: 'Bolestná tajemství',
            days: [2, 5],
            passages: [
                'Modlitba Pána Ježíše v Getsemanech: "Upadl do smrtelné úzkosti a modlil se ještě usilovněji; jeho pot stékal na zem jako krůpěje krve." (Lk 22,44)\n\nOvoce tajemství: Lítost nad hříchy',
                'Bičování Pána Ježíše: "Potom Pilát vzal Ježíše a dal ho zbičovat." (Jan 19,1)\n\nOvoce tajemství: Čistota smyslů',
                'Trním korunování Pána Ježíše: "Upletli korunu z trní, vsadili mu ji na hlavu, do pravé ruky mu dali rákos." (Mt 27,29)\n\nOvoce tajemství: Statečnost',
                'Nesení kříže: "Sám si nesl kříž a šel na místo zvané Lebka, hebrejsky Golgota." (Jan 19,17)\n\nOvoce tajemství: Trpělivost v nesnázích',
                'Ukřižování Pána Ježíše: "Ježíš zvolal mocným hlasem: ‚Otče, do tvých rukou poroučím svého ducha.‘ A s těmi slovy skonal." (Lk 23,46)\n\nOvoce tajemství: Odpuštění a spása duší'
            ]
        },
        glorious: {
            id: 'glorious',
            name: 'Slavná tajemství',
            days: [0, 3],
            passages: [
                'Zmrtvýchvstání Pána Ježíše: "Není zde, byl vzkříšen, jak řekl. Pojďte se podívat na místo, kde ležel." (Mt 28,6)\n\nOvoce tajemství: Víra',
                'Nanebevstoupení Pána Ježíše: "Když to Pán Ježíš dopověděl, byl vzat vzhůru do nebe a zasedl po Boží pravici." (Mk 16,19)\n\nOvoce tajemství: Naděje',
                'Seslání Ducha svatého: "Všichni byli naplněni Duchem svatým a začali mluvit cizími jazyky." (Sk 2,4)\n\nOvoce tajemství: Láska k Bohu a moudrost',
                'Nanebevzetí Panny Marie: "Blahoslavená jsi, dcero, od Pána, Boha nejvyššího, nade všechny ženy na zemi." (Jdt 13,18)\n\nOvoce tajemství: Milost šťastné smrti',
                'Korunování Panny Marie: "Ukázalo se veliké znamení na nebi: Žena oděná sluncem, s měsícem pod nohama a s korunou dvanácti hvězd kolem hlavy." (Zj 12,1)\n\nOvoce tajemství: Důvěra v Mariinu přímluvu'
            ]
        }
    }
};
