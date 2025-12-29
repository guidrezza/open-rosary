import type { LocalizationData } from '$lib/types';

export const pl: LocalizationData = {
    lang: 'pl-PL',
    seo: {
        title: 'Różaniec Święty',
        description:
            'Módl się na różańcu. Szybka, darmowa i dostosowana do urządzeń mobilnych aplikacja. Nowoczesna, otwarta (open source) i łatwa w użyciu na każdym urządzeniu.'
    },
    ui: {
        start_button: 'Rozpocznij Modlitwę',
        pick_mystery: 'Zmień Tajemnicę',
        footer_made_by: 'STWORZONE PRZEZ',
        recommended_mystery: 'Zalecana Tajemnica',
        pray_button_prefix: 'Módl się: ',
        change_theme: 'Zmień Motyw',
        liturgical: {
            // Seasons
            advent: 'Adwent',
            christmas: 'Boże Narodzenie',
            lent: 'Wielki Post',
            triduum: 'Triduum Paschalne',
            easter: 'Wielkanoc',
            ordinary: 'Okres Zwykły',
            // Feasts
            epiphany: 'Objawienie Pańskie',
            presentation: 'Ofiarowanie Pańskie',
            annunciation: 'Zwiastowanie Pańskie',
            transfiguration: 'Przemienienie Pańskie',
            assumption: 'Wniebowzięcie NMP',
            all_saints: 'Wszystkich Świętych',
            all_souls: 'Dzień Zaduszny',
            immaculate_conception: 'Niepokalane Poczęcie',
            guadalupe: 'Matki Bożej z Guadalupe',
            mother_of_god: 'Świętej Bożej Rodzicielki',
            ash_wednesday: 'Środa Popielcowa',
            palm_sunday: 'Niedziela Palmowa',
            holy_thursday: 'Wielki Czwartek',
            good_friday: 'Wielki Piątek',
            holy_saturday: 'Wielka Sobota',
            easter_sunday: 'Niedziela Zmartwychwstania',
            divine_mercy: 'Niedziela Miłosierdzia',
            ascension: 'Wniebowstąpienie Pańskie',
            pentecost: 'Zesłanie Ducha Świętego',
            trinity: 'Uroczystość Trójcy Świętej',
            corpus_christi: 'Boże Ciało',
            sacred_heart: 'Najświętszego Serca Pana Jezusa',
            christ_king: 'Chrystusa Króla',
            gaudete: 'Niedziela Gaudete',
            laetare: 'Niedziela Laetare',
            st_joseph: 'Uroczystość św. Józefa',
            st_peter_paul: 'Świętych Apostołów Piotra i Pawła',
            exaltation_cross: 'Podwyższenie Krzyża Świętego',
            archangels: 'Świętych Archaniołów',
            lateran_basilica: 'Rocznica Poświęcenia Bazyliki Laterańskiej',
            holy_family: 'Świętej Rodziny',
            nativity_john_baptist: 'Narodzenie św. Jana Chrzciciela',
            baptism_lord: 'Chrzest Pański'
        },
        modes: {
            digital: {
                title: 'Cyfrowe Koraliki',
                desc: 'Śledź postęp modlitwy na ekranie.'
            },
            physical: {
                title: 'Fizyczne Koraliki',
                desc: 'Mam własny Różaniec. Pokaż mi tylko modlitwy.'
            },
            mysteries: {
                title: 'Tylko Tajemnice',
                desc: 'Prosta lista 5 tajemnic'
            }
        },
        actions: {
            next: 'Dalej',
            back: 'Wróć',
            exit: 'WYJŚCIE?'
        },
        announce: 'Zapowiedź Tajemnicy',
        sections: {
            intro: 'Wstęp',
            decade: 'Dziesiątka',
            conclusion: 'Zakończenie'
        },
        ordinals: ['1.', '2.', '3.', '4.', '5.'],
        menus: {
            language: 'Wybierz Język',
            mystery: 'Wybierz Tajemnicę',
            mode: 'Wybierz Tryb',
            theme: 'Wybierz Motyw',
            jump_to_section: 'Przejdź do Sekcji'
        },
        themes: {
            description: 'Dostosuj wygląd aplikacji. Nie wpływa to na datę liturgiczną.',
            ordinary: 'Okres Zwykły',
            christmas_easter: 'Boże Narodzenie / Wielkanoc',
            advent_lent: 'Adwent / Wielki Post',
            pentecost: 'Zesłanie Ducha Św.',
            gaudete: 'Gaudete',
            requiem: 'Requiem',
            gold: 'Złoty',
            silver: 'Srebrny',
            white: 'Biały',
            red: 'Czerwony',
            purple: 'Fioletowy',
            rose: 'Różowy',
            black: 'Czarny',
            green: 'Zielony'
        }
    },
    prayers: {
        sign_of_cross: {
            id: 'sign_of_cross',
            title: 'Znak Krzyża',
            content: 'W imię Ojca i Syna, i Ducha Świętego. Amen.'
        },
        creed: {
            id: 'creed',
            title: 'Skład Apostolski',
            content:
                'Wierzę w Boga, Ojca wszechmogącego, Stworzyciela nieba i ziemi. I w Jezusa Chrystusa, Syna Jego jedynego, Pana naszego, który się począł z Ducha Świętego, narodził się z Maryi Panny, umęczon pod Ponckim Piłatem, ukrzyżowan, umarł i pogrzebion; zstąpił do piekieł, trzeciego dnia zmartwychwstał; wstąpił na niebiosa, siedzi po prawicy Boga, Ojca wszechmogącego; stamtąd przyjdzie sądzić żywych i umarłych. Wierzę w Ducha Świętego, święty Kościół powszechny, świętych obcowanie, grzechów odpuszczenie, ciała zmartwychwstanie, żywot wieczny. Amen.'
        },
        our_father: {
            id: 'our_father',
            title: 'Ojcze Nasz',
            content:
                'Ojcze nasz, któryś jest w niebie, święć się imię Twoje; przyjdź królestwo Twoje; bądź wola Twoja jako w niebie, tak i na ziemi. Chleba naszego powszedniego daj nam dzisiaj; i odpuść nam nasze winy, jako i my odpuszczamy naszym winowajcom; i nie wódź nas na pokuszenie, ale nas zbaw ode złego. Amen.'
        },
        hail_mary: {
            id: 'hail_mary',
            title: 'Zdrowaś Maryjo',
            content:
                'Zdrowaś Maryjo, łaski pełna, Pan z Tobą, błogosławionaś Ty między niewiastami i błogosławiony owoc żywota Twojego, Jezus. Święta Maryjo, Matko Boża, módl się za nami grzesznymi teraz i w godzinę śmierci naszej. Amen.'
        },
        glory_be: {
            id: 'glory_be',
            title: 'Chwała Ojcu',
            content:
                'Chwała Ojcu i Synowi, i Duchowi Świętemu. Jak była na początku, teraz i zawsze, i na wieki wieków. Amen.'
        },
        fatima: {
            id: 'fatima',
            title: 'Akt Strzelisty',
            content:
                'O mój Jezu, przebacz nam nasze grzechy, zachowaj nas od ognia piekielnego, zaprowadź wszystkie dusze do nieba i dopomóż szczególnie tym, którzy najbardziej potrzebują Twojego miłosierdzia.'
        },
        hail_holy_queen: {
            id: 'hail_holy_queen',
            title: 'Witaj Królowo',
            content:
                'Witaj, Królowo, Matko miłosierdzia, życie, słodyczy i nadziejo nasza, witaj! Do Ciebie wołamy, wygnańcy, synowie Ewy; do Ciebie wzdychamy jęcząc i płacząc na tym łez padole. Przeto, Orędowniczko nasza, one miłosierne oczy Twoje na nas zwróć, a Jezusa, błogosławiony owoc żywota Twojego, po tym wygnaniu nam okaż. O łaskawa, o litościwa, o słodka Panno Maryjo!\n\nV. Módl się za nami, Święta Boża Rodzicielko.\nR. Abyśmy się stali godnymi obietnic Chrystusowych.'
        },
        closing_prayer: {
            id: 'closing_prayer',
            title: 'Modlitwa Końcowa',
            content:
                'Módlmy się. Boże, Twój Jednorodzony Syn, przez swoje życie, śmierć i zmartwychwstanie, wysłużył nam dar zbawienia wiecznego; spraw prosimy, abyśmy rozważając te tajemnice w świętym Różańcu Błogosławionej Dziewicy Maryi, naśladowali to, co one zawierają i otrzymali to, co obiecują. Przez Chrystusa, Pana naszego. Amen.'
        }
    },
    mysteries: {
        joyful: {
            id: 'joyful',
            name: 'Tajemnice Radosne',
            days: [1, 6],
            passages: [
                'Zwiastowanie NMP: "Na to rzekła Maryja: «Oto Ja służebnica Pańska, niech Mi się stanie według twego słowa!»" (Łk 1, 38)\n\nOwoc tajemnicy: Pokora',
                'Nawiedzenie św. Elżbiety: "Błogosławiona jesteś między niewiastami i błogosławiony jest owoc Twojego łona." (Łk 1, 42)\n\nOwoc tajemnicy: Miłość bliźniego',
                'Narodzenie Pana Jezusa: "Porodziła swego pierworodnego Syna, owinęła Go w pieluszki i położyła w żłobie." (Łk 2, 7)\n\nOwoc tajemnicy: Ubóstwo (Oderwanie od świata)',
                'Ofiarowanie Pana Jezusa: "Moje oczy ujrzały Twoje zbawienie, któreś przygotował wobec wszystkich narodów." (Łk 2, 30-31)\n\nOwoc tajemnicy: Posłuszeństwo',
                'Odnalezienie Pana Jezusa w Świątyni: "Dopiero po trzech dniach odnaleźli Go w świątyni, gdzie siedział między nauczycielami, przysłuchiwał się im i zadawał pytania." (Łk 2, 46)\n\nOwoc tajemnicy: Radość z odnalezienia Jezusa'
            ]
        },
        luminous: {
            id: 'luminous',
            name: 'Tajemnice Światła',
            days: [4],
            passages: [
                'Chrzest Pana Jezusa w Jordanie: "A głos z nieba mówił: «Ten jest mój Syn umiłowany, w którym mam upodobanie»." (Mt 3, 17)\n\nOwoc tajemnicy: Otwartość na Ducha Świętego',
                'Objawienie siebie na weselu w Kanie: "Wtedy Matka Jego powiedziała do sług: «Zróbcie wszystko, cokolwiek wam powie»." (J 2, 5)\n\nOwoc tajemnicy: Zaufanie Jezusowi przez Maryję',
                'Głoszenie Królestwa Bożego: "Czas się wypełnił i bliskie jest królestwo Boże. Nawracajcie się i wierzcie w Ewangelię!" (Mk 1, 15)\n\nOwoc tajemnicy: Nawrócenie i wiara',
                'Przemienienie na górze Tabor: "Tam przemienił się wobec nich: twarz Jego zajaśniała jak słońce, odzienie zaś stało się białe jak światło." (Mt 17, 2)\n\nOwoc tajemnicy: Pragnienie świętości',
                'Ustanowienie Eucharystii: "Bierzcie i jedzcie, to jest Ciało moje." (Mt 26, 26)\n\nOwoc tajemnicy: Cześć dla Eucharystii'
            ]
        },
        sorrowful: {
            id: 'sorrowful',
            name: 'Tajemnice Bolesne',
            days: [2, 5],
            passages: [
                'Modlitwa Pana Jezusa w Ogrójcu: "Pogrążony w udręce jeszcze usilniej się modlił, a Jego pot był jak gęste krople krwi, sączące się na ziemię." (Łk 22, 44)\n\nOwoc tajemnicy: Żal za grzechy',
                'Biczowanie Pana Jezusa: "Wówczas Piłat wziął Jezusa i kazał Go ubiczować." (J 19, 1)\n\nOwoc tajemnicy: Czystość i umartwienie zmysłów',
                'Cierniem ukoronowanie: "Ubrali Go w purpurę i uplótłszy wieniec z ciernia włożyli Mu na głowę." (Mk 15, 17)\n\nOwoc tajemnicy: Odwaga cywilna',
                'Dźwiganie Krzyża: "A On sam dźwigając krzyż wyszedł na miejsce zwane Miejscem Czaszki." (J 19, 17)\n\nOwoc tajemnicy: Cierpliwość',
                'Śmierć Pana Jezusa na Krzyżu: "Wtedy Jezus zawołał donośnym głosem: «Ojcze, w Twoje ręce powierzam ducha mojego». Po tych słowach wyzionął ducha." (Łk 23, 46)\n\nOwoc tajemnicy: Wytrwałość i miłość do nieprzyjaciół'
            ]
        },
        glorious: {
            id: 'glorious',
            name: 'Tajemnice Chwalebne',
            days: [0, 3],
            passages: [
                'Zmartwychwstanie Pana Jezusa: "Powstał z martwych, nie ma Go tu. Oto miejsce, gdzie Go złożyli." (Mk 16, 6)\n\nOwoc tajemnicy: Wiara',
                'Wniebowstąpienie Pana Jezusa: "Po rozmowie z nimi Pan Jezus został wzięty do nieba i zasiadł po prawicy Boga." (Mk 16, 19)\n\nOwoc tajemnicy: Nadzieja i pragnienie nieba',
                'Zesłanie Ducha Świętego: "I wszyscy zostali napełnieni Duchem Świętym, i zaczęli mówić obcymi językami, tak jak im Duch pozwalał mówić." (Dz 2, 4)\n\nOwoc tajemnicy: Mądrość i miłość Boża',
                'Wniebowzięcie NMP: "Błogosławiona jesteś, córko, przez Boga Najwyższego, bardziej niż wszystkie niewiasty na ziemi." (Jdt 13, 18)\n\nOwoc tajemnicy: Łaska dobrej śmierci',
                'Ukoronowanie NMP: "Potem wielki znak się ukazał na niebie: Niewiasta obleczona w słońce i księżyc pod jej stopami, a na jej głowie wieniec z gwiazd dwunastu." (Ap 12, 1)\n\nOwoc tajemnicy: Ufność w orędownictwo Maryi'
            ]
        }
    }
};