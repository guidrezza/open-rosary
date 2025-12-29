import type { LocalizationData } from '$lib/types';

export const lt: LocalizationData = {
    lang: 'lt-LT',
    seo: {
        title: 'Šventasis Rožinis',
        description:
            'Melskitės Rožinį. Greita, nemokama ir pritaikyta mobiliesiems. Moderni atvirojo kodo žiniatinklio programa, kurią lengva naudoti bet kuriame įrenginyje.'
    },
    ui: {
        start_button: 'Pradėti maldą',
        pick_mystery: 'Pasirinkti slėpinius',
        footer_made_by: 'SUKŪRĖ',
        recommended_mystery: 'Šios dienos slėpiniai',
        pray_button_prefix: 'Melstis: ',
        change_theme: 'Pakeisti temą',
        liturgical: {
            // Seasons
            advent: 'Adventas',
            christmas: 'Kalėdų laikas',
            lent: 'Gavėnia',
            triduum: 'Velykų tridienis',
            easter: 'Velykų laikas',
            ordinary: 'Eilinis laikas',
            // Feasts
            epiphany: 'Viešpaties Apsireiškimas (Trys Karaliai)',
            presentation: 'Viešpaties Paaukojimas (Grabnyčios)',
            annunciation: 'Viešpaties Apreiškimas Švč. M. Marijai',
            transfiguration: 'Viešpaties Atsimainymas',
            assumption: 'Švč. M. Marijos Ėmimas į dangų (Žolinė)',
            all_saints: 'Visų Šventųjų iškilmė',
            all_souls: 'Vėlinių diena',
            immaculate_conception: 'Švč. M. Marijos Nekaltasis Prasidėjimas',
            guadalupe: 'Gvadalupės Švč. Mergelė Marija',
            mother_of_god: 'Švč. Mergelė Marija, Dievo Gimdytoja',
            ash_wednesday: 'Pelenų diena',
            palm_sunday: 'Verbų sekmadienis',
            holy_thursday: 'Didysis ketvirtadienis',
            good_friday: 'Didysis penktadienis',
            holy_saturday: 'Didysis šeštadienis',
            easter_sunday: 'Velykų sekmadienis',
            divine_mercy: 'Dievo Gailestingumo sekmadienis',
            ascension: 'Šeštinės (Kristaus Žengimas į dangų)',
            pentecost: 'Sekminės',
            trinity: 'Švč. Trejybė',
            corpus_christi: 'Devintinės (Kristaus Kūnas ir Kraujas)',
            sacred_heart: 'Švč. Jėzaus Širdis',
            christ_king: 'Kristus, Visatos Valdovas',
            gaudete: 'Gaudete sekmadienis',
            laetare: 'Laetare sekmadienis',
            st_joseph: 'Šv. Juozapas',
            st_peter_paul: 'Šv. Petras ir Paulius',
            exaltation_cross: 'Šv. Kryžiaus Išaukštinimas',
            archangels: 'Šv. Arkangelai',
            lateran_basilica: 'Laterano bazilikos pašventinimas',
            holy_family: 'Šventoji Šeima',
            nativity_john_baptist: 'Šv. Jono Krikštytojo gimimas',
            baptism_lord: 'Viešpaties Krikštas'
        },
        modes: {
            digital: {
                title: 'Skaitmeninis Rožinis',
                desc: 'Sekite maldą ekrane.'
            },
            physical: {
                title: 'Fizinis Rožinis',
                desc: 'Turiu savo rožinį. Rodyti tik maldas.'
            },
            mysteries: {
                title: 'Tik slėpiniai',
                desc: 'Paprastas 5 slėpinių sąrašas'
            }
        },
        actions: {
            next: 'Next',
            back: 'Back',
            exit: 'EXIT?'
        },
        announce: 'Slėpinio paskelbimas',
        sections: {
            intro: 'Įžanga',
            decade: 'Paslaptis',
            conclusion: 'Pabaiga'
        },
        ordinals: ['1-oji', '2-oji', '3-oji', '4-oji', '5-oji'],
        menus: {
            language: 'Pasirinkti kalbą',
            mystery: 'Pasirinkti slėpinius',
            mode: 'Pasirinkti režimą',
            theme: 'Pasirinkti temą',
            jump_to_section: 'Eiti į skyrių'
        },
        themes: {
            description: 'Pakeiskite vaizdinę išvaizdą. Tai neturi įtakos liturginei datai.',
            ordinary: 'Eilinis',
            christmas_easter: 'Kalėdos / Velykos',
            advent_lent: 'Adventas / Gavėnia',
            pentecost: 'Sekminės',
            gaudete: 'Gaudete',
            requiem: 'Requiem',
            gold: 'Auksinė',
            silver: 'Sidabrinė',
            white: 'Balta',
            red: 'Raudona',
            purple: 'Violetinė',
            rose: 'Rožinė',
            black: 'Juoda',
            green: 'Žalia'
        }
    },
    prayers: {
        sign_of_cross: {
            id: 'sign_of_cross',
            title: 'Kryžiaus ženklas',
            content: 'Vardan Dievo Tėvo ir Sūnaus, ir Šventosios Dvasios. Amen.'
        },
        creed: {
            id: 'creed',
            title: 'Tikėjimo išpažinimas (Apaštalų tikyba)',
            content:
                'Tikiu į Dievą Tėvą, visagalį dangaus ir žemės Sutvėrėją. Ir į Jėzų Kristų, vienatinį jo Sūnų, mūsų Viešpatį, kuris prasidėjo iš Šventosios Dvasios, gimė iš Mergelės Marijos, kentėjo prie Poncijaus Piloto, buvo nukryžiuotas, numiręs ir palaidotas; nužengė į pragarus; trečiąją dieną kėlėsi iš numirusių; įžengė į dangų, sėdi visagalio Dievo Tėvo dešinėje, iš ten ateis gyvųjų ir mirusiųjų teisti. Tikiu į Šventąją Dvasią, šventąją visuotinę Bažnyčią, šventųjų bendravimą, nuodėmių atleidimą, kūno iš numirusių prisikėlimą ir amžinąjį gyvenimą. Amen.'
        },
        our_father: {
            id: 'our_father',
            title: 'Tėve mūsų',
            content:
                'Tėve mūsų, kuris esi danguje! Teesie šventas Tavo vardas, teateinie Tavo karalystė, teesie Tavo valia kaip danguje, taip ir žemėje. Kasdienės mūsų duonos duok mums šiandien ir atleisk mums mūsų kaltes, kaip ir mes atleidžiame savo kaltininkams. Ir nevesk mūsų į pagundą, bet gelbėk mus nuo pikto. Amen.'
        },
        hail_mary: {
            id: 'hail_mary',
            title: 'Sveika, Marija',
            content:
                'Sveika, Marija, malonės pilnoji! Viešpats su Tavimi! Tu pagirta tarp moterų ir pagirtas Tavo įsčių vaisius – Jėzus. Šventoji Marija, Dievo Motina, melski už mus, nusidėjėlius, dabar ir mūsų mirties valandą. Amen.'
        },
        glory_be: {
            id: 'glory_be',
            title: 'Garbė Dievui Tėvui',
            content:
                'Garbė Dievui Tėvui ir Sūnui, ir Šventajai Dvasiai. Kaip buvo pradžioje, dabar ir visados, ir per amžius. Amen.'
        },
        fatima: {
            id: 'fatima',
            title: 'Fatimos malda',
            content:
                'O mano Jėzau, atleisk mums mūsų nuodėmes, apsaugok mus nuo pragaro ugnies, nuvesk į dangų visas sielas, o ypač tas, kurioms labiausiai reikia Tavo gailestingumo.'
        },
        hail_holy_queen: {
            id: 'hail_holy_queen',
            title: 'Sveika, Karaliene',
            content:
                'Sveika, Karaliene, gailestingumo Motina, mūsų gyvybe, paguoda ir viltie, sveika! Tavęs šaukiamės ištremtieji Ievos vaikai, Tavęs ilgimės, dejuodami ir verkdami šiame ašarų klonyje. Todėl Tu, mūsų Užtarėja, savo gailestingas akis į mus atkreipki ir Jėzų, palaimintąjį savo įsčių vaisių, mums po šios tremties parodyki. O geroji, o malonioji, o mieloji Mergele Marija!\n\nV. Melski už mus, šventoji Dievo Gimdytoja.\nR. Kad taptume verti Kristaus žadėjimų.'
        },
        closing_prayer: {
            id: 'closing_prayer',
            title: 'Pabaigos malda',
            content:
                'Melskimės. Dieve, kurio Viengimis Sūnus savo gyvenimu, mirtimi ir prisikėlimu pelnė mums amžinojo išganymo atlygį, leisk mums, besigilintiems į Švenčiausiosios Mergelės Marijos Rožinio paslaptis, sekti tuo, kas jose slypi, ir laimėti, kas jose žadama. Per tą patį Kristų, mūsų Viešpatį. Amen.'
        }
    },
    mysteries: {
        joyful: {
            id: 'joyful',
            name: 'Džiaugsmo slėpiniai',
            days: [1, 6],
            passages: [
                'Angelas apreiškia Marijai Dievo Sūnaus įsikūnijimą: "Angelas tarė: „Nebijok, Marija, tu radai malonę pas Dievą! Štai tu pradėsi įsčiose ir pagimdysi sūnų, kurį pavadinsi Jėzumi“." (Lk 1, 30-31)\n\nSlėpinio vaisius: Nuolankumas',
                'Marija lanko šventąją Elzbietą: "Vos tik Elzbieta išgirdo Marijos sveikinimą, jos įsčiose šoktelėjo kūdikis, o pati Elzbieta pasidarė kupina Šventosios Dvasios." (Lk 1, 41)\n\nSlėpinio vaisius: Artimo meilė',
                'Jėzus gimsta Betliejuje: "Ji pagimdė savo pirmgimį sūnų, suvystė jį vystyklais ir paguldė ėdžiose." (Lk 2, 7)\n\nSlėpinio vaisius: Neturtas',
                'Jėzus paaukojamas šventykloje: "Jie nunešė jį į Jeruzalę paaukoti Viešpačiui, kaip parašyta Viešpaties Įstatyme." (Lk 2, 22)\n\nSlėpinio vaisius: Klusnumas',
                'Jėzus atrandamas šventykloje: "Po trijų dienų jie rado jį šventykloje, sėdintį tarp mokytojų, tų besiklausantį ir juos beklausinėjantį." (Lk 2, 46)\n\nSlėpinio vaisius: Ištikimybė pareigoms'
            ]
        },
        luminous: {
            id: 'luminous',
            name: 'Šviesos slėpiniai',
            days: [4],
            passages: [
                'Jėzaus krikštas Jordane: "Štai pasigirdo balsas iš dangaus: „Šitas yra mano mylimasis Sūnus, kuriuo aš gėriuosi“." (Mt 3, 17)\n\nSlėpinio vaisius: Krikšto pažadų atnaujinimas',
                'Jėzus Kanos vestuvėse: "Jo motina tarė tarnams: „Darykite, ką tik jis jums lieps“." (Jn 2, 5)\n\nSlėpinio vaisius: Pasitikėjimas Dievu',
                'Jėzus skelbia Dievo karalystę: "Ateina valanda ir jau yra čia, kai tikrieji garbintojai šlovins Tėvą dvasia ir tiesa." (Jn 4, 23)\n\nSlėpinio vaisius: Atsivertimo troškimas',
                'Jėzaus atsimainymas: "Jo veidas sužibo kaip saulė, o drabužiai tapo balti kaip šviesa." (Mt 17, 2)\n\nSlėpinio vaisius: Dvasinis atsinaujinimas',
                'Jėzus įsteigia Eucharistiją: "Imkite ir valgykite: tai yra mano kūnas." (Mt 26, 26)\n\nSlėpinio vaisius: Eucharistijos garbinimas'
            ]
        },
        sorrowful: {
            id: 'sorrowful',
            name: 'Kančios slėpiniai',
            days: [2, 5],
            passages: [
                'Jėzus meldžiasi Alyvų sode: "Jis, mirties sielvarto apimtas, meldėsi vis karščiau, o jo prakaitas tapo tarytum tiršto kraujo lašai, varvantys žemėn." (Lk 22, 44)\n\nSlėpinio vaisius: Gailestis dėl nuodėmių',
                'Jėzus nuplakami: "Tuomet Pilotas ėmė ir nuplakdino Jėzų." (Jn 19, 1)\n\nSlėpinio vaisius: Kūno apmarinimas',
                'Jėzus vainikuojamas erškėčiais: "Nupynę vainiką iš erškėčių, uždėjo jam ant galvos." (Mt 27, 29)\n\nSlėpinio vaisius: Puikybės nugalėjimas',
                'Jėzus neša kryžių: "Nešdamas savo kryžių, jis ėjo į vietą, vadinamą Kaukolės vieta, hebrajiškai Golgota." (Jn 19, 17)\n\nSlėpinio vaisius: Kantrybė',
                'Jėzus miršta ant kryžiaus: "Jėzus galingu balsu sušuko: „Tėve, į tavo rankas atiduodu savo dvasią“." (Lk 23, 46)\n\nSlėpinio vaisius: Meilė priešams'
            ]
        },
        glorious: {
            id: 'glorious',
            name: 'Garbės slėpiniai',
            days: [0, 3],
            passages: [
                'Jėzus prisikelia iš numirusių: "Jo čia nebėra, jis prisikėlė, kaip buvo sakęs." (Mt 28, 6)\n\nSlėpinio vaisius: Tikėjimas',
                'Jėzus žengia į dangų: "Viešpats Jėzus buvo paimtas į dangų ir atsisėdo Dievo dešinėje." (Mk 16, 19)\n\nSlėpinio vaisius: Viltis',
                'Šventoji Dvasia nužengia ant apaštalų: "Visi pasidarė kupini Šventosios Dvasios ir pradėjo kalbėti kitomis kalbomis." (Apd 2, 4)\n\nSlėpinio vaisius: Meilė Dievui',
                'Marija paimama į dangų: "Didžių dalykų man padarė Visagalis, ir šventas jo vardas!" (Lk 1, 49)\n\nSlėpinio vaisius: Laiminga mirtis',
                'Marija vainikuojama dangaus Karaliene: "Danguje pasirodė didingas ženklas: moteris, apsisiautusi saule, po jos kojų mėnulis, o ant galvos dvylikos žvaigždžių vainikas." (Apr 12, 1)\n\nSlėpinio vaisius: Pasitikėjimas Marija'
            ]
        }
    }
};
