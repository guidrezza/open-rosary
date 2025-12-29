import type { LocalizationData } from '$lib/types';

export const hr: LocalizationData = {
    lang: 'hr-HR',
    seo: {
        title: 'Sveta Krunica',
        description:
            'Molite Krunicu. Brzo, besplatno i prilagođeno mobilnim uređajima. Moderna web aplikacija otvorenog koda, jednostavna za korištenje na bilo kojem uređaju.'
    },
    ui: {
        start_button: 'Započni molitvu',
        pick_mystery: 'Promijeni otajstvo',
        footer_made_by: 'IZRADIO',
        recommended_mystery: 'Današnje otajstvo',
        pray_button_prefix: 'Moli: ',
        change_theme: 'Promijeni temu',
        liturgical: {
            // Seasons
            advent: 'Došašće',
            christmas: 'Božić',
            lent: 'Korizma',
            triduum: 'Vazmeno trodnevlje',
            easter: 'Uskrs',
            ordinary: 'Vrijeme kroz godinu',
            // Feasts
            epiphany: 'Bogojavljenje',
            presentation: 'Prikazanje Gospodinovo (Svijećnica)',
            annunciation: 'Navještenje Gospodinovo (Blagovijest)',
            transfiguration: 'Preobraženje Gospodinovo',
            assumption: 'Uznesenje BDM (Velika Gospa)',
            all_saints: 'Svi sveti',
            all_souls: 'Dušni dan',
            immaculate_conception: 'Bezgrešno začeće BDM',
            guadalupe: 'Gospa od Guadalupea',
            mother_of_god: 'Sveta Bogorodica Marija',
            ash_wednesday: 'Čista srijeda (Pepelnica)',
            palm_sunday: 'Cvjetnica',
            holy_thursday: 'Veliki četvrtak',
            good_friday: 'Veliki petak',
            holy_saturday: 'Velika subota',
            easter_sunday: 'Uskrs',
            divine_mercy: 'Nedjelja Božjeg milosrđa',
            ascension: 'Uzašašće Gospodinovo',
            pentecost: 'Duhovi (Pedesetnica)',
            trinity: 'Presveto Trojstvo',
            corpus_christi: 'Tijelovo',
            sacred_heart: 'Presveto Srce Isusovo',
            christ_king: 'Krist Kralj',
            gaudete: 'Nedjelja Gaudete',
            laetare: 'Nedjelja Laetare',
            st_joseph: 'Sveti Josip',
            st_peter_paul: 'Sveti Petar i Pavao',
            exaltation_cross: 'Uzvišenje svetoga Križa',
            archangels: 'Sveti Arkanđeli',
            lateran_basilica: 'Posveta Lateranske bazilike',
            holy_family: 'Sveta Obitelj',
            nativity_john_baptist: 'Rođenje Ivana Krstitelja',
            baptism_lord: 'Krštenje Gospodinovo'
        },
        modes: {
            digital: {
                title: 'Digitalna zrnca',
                desc: 'Pratite napredak na zaslonu.'
            },
            physical: {
                title: 'Fizička krunica',
                desc: 'Imam svoju krunicu. Prikaži samo molitve.'
            },
            mysteries: {
                title: 'Samo otajstva',
                desc: 'Jednostavan popis 5 otajstava'
            }
        },
        actions: {
            next: 'Next',
            back: 'Back',
            exit: 'EXIT?'
        },
        announce: 'Najava otajstva',
        sections: {
            intro: 'Uvod',
            decade: 'Desetica',
            conclusion: 'Završetak'
        },
        ordinals: ['1.', '2.', '3.', '4.', '5.'],
        menus: {
            language: 'Odaberi jezik',
            mystery: 'Odaberi otajstvo',
            mode: 'Odaberi način',
            theme: 'Odaberi temu',
            jump_to_section: 'Idi na dio'
        },
        themes: {
            description: 'Prilagodite izgled. Ovo ne utječe na liturgijski datum.',
            ordinary: 'Vrijeme kroz godinu',
            christmas_easter: 'Božić / Uskrs',
            advent_lent: 'Došašće / Korizma',
            pentecost: 'Duhovi',
            gaudete: 'Gaudete',
            requiem: 'Rekvijem',
            gold: 'Zlatna',
            silver: 'Srebrna',
            white: 'Bijela',
            red: 'Crvena',
            purple: 'Ljubičasta',
            rose: 'Ružičasta',
            black: 'Crna',
            green: 'Zelena'
        }
    },
    prayers: {
        sign_of_cross: {
            id: 'sign_of_cross',
            title: 'Znak križa',
            content: 'U ime Oca i Sina i Duha Svetoga. Amen.'
        },
        creed: {
            id: 'creed',
            title: 'Apostolsko vjerovanje',
            content:
                'Vjerujem u Boga, Oca svemogućega, Stvoritelja neba i zemlje. I u Isusa Krista, Sina njegova jedinoga, Gospodina našega, koji je začet po Duhu Svetom, rođen od Marije Djevice, mučen pod Poncijem Pilatom, raspet, umro i pokopan; sašao nad pakao; treći dan uskrsnuo od mrtvih; uzašao na nebesa, sjedi o desnu Boga Oca svemogućega; odonud će doći suditi žive i mrtve. Vjerujem u Duha Svetoga, svetu Crkvu katoličku, općinstvo svetih, oproštenje grijeha, uskrsnuće tijela, život vječni. Amen.'
        },
        our_father: {
            id: 'our_father',
            title: 'Oče naš',
            content:
                'Oče naš, koji jesi na nebesima, sveti se ime tvoje. Dođi kraljevstvo tvoje. Budi volja tvoja, kako na nebu tako i na zemlji. Kruh naš svagdanji daj nam danas. I otpusti nam duge naše, kako i mi otpuštamo dužnicima našim. I ne uvedi nas u napast, nego izbavi nas od zla. Amen.'
        },
        hail_mary: {
            id: 'hail_mary',
            title: 'Zdravo Marijo',
            content:
                'Zdravo Marijo, milosti puna, Gospodin s tobom. Blagoslovljena ti među ženama i blagoslovljen plod utrobe tvoje, Isus. Sveta Marijo, Majko Božja, moli za nas grešnike, sada i na času smrti naše. Amen.'
        },
        glory_be: {
            id: 'glory_be',
            title: 'Slava Ocu',
            content:
                'Slava Ocu i Sinu i Duhu Svetomu. Kako bijaše na početku, tako i sada i vazda i u vijeke vjekova. Amen.'
        },
        fatima: {
            id: 'fatima',
            title: 'Fatimska molitva',
            content:
                'O moj Isuse, oprosti nam naše grijehe, očuvaj nas od paklenoga ognja, dovedi u raj sve duše, osobito one kojima je najpotrebnije tvoje milosrđe.'
        },
        hail_holy_queen: {
            id: 'hail_holy_queen',
            title: 'Zdravo Kraljice',
            content:
                'Zdravo Kraljice, majko milosrđa, živote, slasti i ufanje naše, zdravo. K tebi vapijemo prognani sinovi Evini. K tebi uzdišemo tugujući i plačući u ovoj suznoj dolini. Svrni, dakle, zagovornice naša, one svoje milostive oči na nas te nam nakon ovoga progona pokaži Isusa, blagoslovljeni plod utrobe svoje. O blaga, o mila, o slatka Djevice Marijo.\n\nV. Moli za nas, sveta Bogorodice.\nO. Da dostojni postanemo obećanja Kristovih.'
        },
        closing_prayer: {
            id: 'closing_prayer',
            title: 'Završna molitva',
            content:
                'Pomolimo se. Bože, tvoj je jedinorođeni Sin svojim životom, smrću i uskrsnućem stekao nama nagradu vječnoga života. Dopusti, molimo te, da razmišljajući o tim otajstvima u svetoj krunici Blažene Djevice Marije, nasljedujemo što ona sadrže i postignemo što ona obećavaju. Po istom Kristu Gospodinu našem. Amen.'
        }
    },
    mysteries: {
        joyful: {
            id: 'joyful',
            name: 'Radosna otajstva',
            days: [1, 6],
            passages: [
                'Navještenje: "Reče Marija: \'Evo službenice Gospodnje, neka mi bude po tvojoj riječi!\'" (Lk 1, 38)\n\nPlod otajstva: Poniznost',
                'Pohod Elizabeti: "Blagoslovljena ti među ženama i blagoslovljen plod utrobe tvoje!" (Lk 1, 42)\n\nPlod otajstva: Ljubav prema bližnjemu',
                'Rođenje Isusovo: "Porođuje svoga sina, prvorođenca, povi ga i položi u jasle." (Lk 2, 7)\n\nPlod otajstva: Siromaštvo u duhu',
                'Prikazanje u Hramu: "Vidješe oči moje spasenje tvoje, koje si pripravio pred licem svih naroda." (Lk 2, 30-31)\n\nPlod otajstva: Poslušnost',
                'Našašće Isusa u Hramu: "Nakon tri dana nađoše ga u Hramu gdje sjedi posred učitelja, sluša ih i pita." (Lk 2, 46)\n\nPlod otajstva: Radost u traženju Boga'
            ]
        },
        luminous: {
            id: 'luminous',
            name: 'Otajstva svjetla',
            days: [4],
            passages: [
                'Krštenje na Jordanu: "I gle, glas s neba govoraše: \'Ovo je Sin moj, Ljubljeni! U njemu mi sva milina!\'" (Mt 3, 17)\n\nPlod otajstva: Poslušnost Duhu Svetomu',
                'Svadba u Kani: "Kaže njegova majka poslužiteljima: \'Što god vam rekne, učinite!\'" (Iv 2, 5)\n\nPlod otajstva: Povjerenje u Boga',
                'Navještaj Kraljevstva Božjeg: "Ispunilo se vrijeme, približilo se kraljevstvo Božje! Obratite se i vjerujte evanđelju!" (Mk 1, 15)\n\nPlod otajstva: Obraćenje',
                'Preobraženje: "I preobrazi se pred njima. I zasja mu lice kao sunce, a haljine mu postadoše bijele kao svjetlost." (Mt 17, 2)\n\nPlod otajstva: Čežnja za svetošću',
                'Ustanovljenje Euharistije: "Uzmite i jedite! Ovo je tijelo moje." (Mt 26, 26)\n\nPlod otajstva: Štovanje Euharistije'
            ]
        },
        sorrowful: {
            id: 'sorrowful',
            name: 'Žalosna otajstva',
            days: [2, 5],
            passages: [
                'Smrtna muka u vrtu: "A kad je bio u smrtnoj muci, usrdnije se molio. I znoj mu postade kao kaplje krvi koje su padale na zemlju." (Lk 22, 44)\n\nPlod otajstva: Kajanje za grijehe',
                'Bičevanje: "Tada Pilat uze Isusa i dade ga bičevati." (Iv 19, 1)\n\nPlod otajstva: Čistoća tijela i duha',
                'Krunjenje trnovom krunom: "Obukoše ga u grimiz, spletoše trnov vijenac i staviše mu ga na glavu." (Mk 15, 17)\n\nPlod otajstva: Moralna hrabrost',
                'Nošenje križa: "I noseći svoj križ, iziđe on na mjesto zvano Lubanjsko, hebrejski Golgota." (Iv 19, 17)\n\nPlod otajstva: Strpljivost',
                'Razapinjanje i smrt: "I povika Isus iza glasa: \'Oče, u ruke tvoje predajem duh svoj!\' I to rekavši, izdahnu." (Lk 23, 46)\n\nPlod otajstva: Oprost i spasenje duša'
            ]
        },
        glorious: {
            id: 'glorious',
            name: 'Slavna otajstva',
            days: [0, 3],
            passages: [
                'Uskrsnuće: "Nije ovdje! Uskrsnu kako reče. Hajde, vidite mjesto gdje je ležao." (Mt 28, 6)\n\nPlod otajstva: Vjera',
                'Uzašašće: "Gospodin Isus, pošto im to reče, bude uzet na nebo i sjede zdesna Bogu." (Mk 16, 19)\n\nPlod otajstva: Nada i čežnja za nebom',
                'Silazak Duha Svetoga: "Svi se napuniše Duha Svetoga i počeše govoriti drugim jezicima." (Dj 2, 4)\n\nPlod otajstva: Ljubav prema Bogu i mudrost',
                'Uznesenje Marijino: "Blagoslovljena ti, kćeri, od Boga Svevišnjega više od svih drugih žena na zemlji!" (Jdt 13, 18)\n\nPlod otajstva: Milost sretne smrti',
                'Krunjenje Marijino: "I znamenje veliko pokaza se na nebu: Žena odjevena suncem, mjesec joj pod nogama, a na glavi vijenac od dvanaest zvijezda." (Otk 12, 1)\n\nPlod otajstva: Pouzdanje u Marijin zagovor'
            ]
        }
    }
};
