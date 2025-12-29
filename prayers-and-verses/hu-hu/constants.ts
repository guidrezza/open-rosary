import type { LocalizationData } from '$lib/types';

export const hu: LocalizationData = {
    lang: 'hu-HU',
    seo: {
        title: 'Szentolvasó',
        description:
            'Imádkozza a Rózsafüzért. Gyors, ingyenes és mobilbarát. Egy modern, nyílt forráskódú webalkalmazás, amely bármilyen eszközön könnyen használható.'
    },
    ui: {
        start_button: 'Imádkozás indítása',
        pick_mystery: 'Titok választása',
        footer_made_by: 'KÉSZÍTETTE',
        recommended_mystery: 'Mai titok',
        pray_button_prefix: 'Imádkozd a következőt: ',
        change_theme: 'Téma váltása',
        liturgical: {
            // Seasons
            advent: 'Advent',
            christmas: 'Karácsony',
            lent: 'Nagyböjt',
            triduum: 'Szent Háromnap',
            easter: 'Húsvét',
            ordinary: 'Évközi idő',
            // Feasts
            epiphany: 'Vízkereszt (Urunk megjelenése)',
            presentation: 'Gyertyaszentelő Boldogasszony',
            annunciation: 'Gyümölcsoltó Boldogasszony',
            transfiguration: 'Urunk színeváltozása',
            assumption: 'Nagyboldogasszony (Mária mennybemenetele)',
            all_saints: 'Mindenszentek',
            all_souls: 'Halottak napja',
            immaculate_conception: 'Szeplőtelen Fogantatás',
            guadalupe: 'Guadalupei Szűz Mária',
            mother_of_god: 'Szűz Mária, Isten Anyja',
            ash_wednesday: 'Hamvazószerda',
            palm_sunday: 'Virágvasárnap',
            holy_thursday: 'Nagycsütörtök',
            good_friday: 'Nagypéntek',
            holy_saturday: 'Nagyszombat',
            easter_sunday: 'Húsvétvasárnap',
            divine_mercy: 'Isteni Irgalmasság vasárnapja',
            ascension: 'Urunk mennybemenetele',
            pentecost: 'Pünkösd',
            trinity: 'Szentháromság vasárnapja',
            corpus_christi: 'Úrnapja',
            sacred_heart: 'Jézus Szent Szíve',
            christ_king: 'Krisztus Király',
            gaudete: 'Gaudete vasárnap',
            laetare: 'Laetare vasárnap',
            st_joseph: 'Szent József',
            st_peter_paul: 'Szent Péter és Pál',
            exaltation_cross: 'Szent Kereszt felmagasztalása',
            archangels: 'Főangyalok',
            lateran_basilica: 'A Lateráni bazilika felszentelése',
            holy_family: 'Szent Család',
            nativity_john_baptist: 'Keresztelő Szent János születése',
            baptism_lord: 'Urunk megkeresztelkedése'
        },
        modes: {
            digital: {
                title: 'Digitális szemek',
                desc: 'Kövesd az imát a képernyőn.'
            },
            physical: {
                title: 'Fizikai rózsafüzér',
                desc: 'Van saját rózsafüzérem. Csak az imákat mutasd.'
            },
            mysteries: {
                title: 'Csak a titkok',
                desc: 'Az 5 titok egyszerű listája'
            }
        },
        actions: {
            next: 'Next',
            back: 'Back',
            exit: 'EXIT?'
        },
        announce: 'Titok bejelentése',
        sections: {
            intro: 'Bevezetés',
            decade: 'Tized',
            conclusion: 'Befejezés'
        },
        ordinals: ['1.', '2.', '3.', '4.', '5.'],
        menus: {
            language: 'Nyelv választása',
            mystery: 'Titok választása',
            mode: 'Mód választása',
            theme: 'Téma választása',
            jump_to_section: 'Ugrás a szakaszhoz'
        },
        themes: {
            description: 'Szabd testre a megjelenést. Ez nem befolyásolja a liturgikus dátumot.',
            ordinary: 'Évközi',
            christmas_easter: 'Karácsony / Húsvét',
            advent_lent: 'Advent / Böjt',
            pentecost: 'Pünkösd',
            gaudete: 'Gaudete',
            requiem: 'Gyász',
            gold: 'Arany',
            silver: 'Ezüst',
            white: 'Fehér',
            red: 'Vörös',
            purple: 'Lila',
            rose: 'Rózsaszín',
            black: 'Fekete',
            green: 'Zöld'
        }
    },
    prayers: {
        sign_of_cross: {
            id: 'sign_of_cross',
            title: 'Keresztvetés',
            content: 'Az Atya, a Fiú és a Szentlélek nevében. Ámen.'
        },
        creed: {
            id: 'creed',
            title: 'Apostoli Hitvallás',
            content:
                'Hiszek egy Istenben, mindenható Atyában, mennynek és földnek Teremtőjében. És Jézus Krisztusban, az Ő egyszülött Fiában, a mi Urunkban, aki fogantatott Szentlélektől, született Szűz Máriától; szenvedett Poncius Pilátus alatt; megfeszítették, meghalt és eltemették. Alászállt a poklokra, harmadnapon feltámadt a halottak közül; fölment a mennybe, ott ül a mindenható Atyaisten jobbján; onnan jön el ítélni élőket és holtakat. Hiszek Szentlélekben. Hiszem a katolikus Anyaszentegyházat, a szentek közösségét, a bűnök bocsánatát, a test feltámadását és az örök életet. Ámen.'
        },
        our_father: {
            id: 'our_father',
            title: 'Miatyánk',
            content:
                'Mi Atyánk, aki a mennyekben vagy, szenteltessék meg a te neved; jöjjön el a te országod; legyen meg a te akaratod, amint a mennyben, úgy a földön is. Mindennapi kenyerünket add meg nekünk ma; és bocsásd meg vétkeinket, miképpen mi is megbocsátunk az ellenünk vétkezőknek; és ne vígy minket kísértésbe, de szabadíts meg a gonosztól. Ámen.'
        },
        hail_mary: {
            id: 'hail_mary',
            title: 'Üdvözlégy Mária',
            content:
                'Üdvözlégy Mária, kegyelemmel teljes, az Úr van teveled, áldott vagy te az asszonyok között, és áldott a te méhednek gyümölcse, Jézus. Asszonyunk Szűz Mária, Istennek szent Anyja, imádkozzál érettünk, bűnösökért, most és halálunk óráján. Ámen.'
        },
        glory_be: {
            id: 'glory_be',
            title: 'Dicsőség',
            content:
                'Dicsőség az Atyának, a Fiúnak és a Szentléleknek, miképpen kezdetben, most és mindörökké. Ámen.'
        },
        fatima: {
            id: 'fatima',
            title: 'Fatimai fohász',
            content:
                'Ó, Jézusom, bocsásd meg bűneinket, ments meg minket a pokol tüzétől, és vidd a mennybe mindenki lelkét, főleg azokét, akik leginkább rászorulnak irgalmadra.'
        },
        hail_holy_queen: {
            id: 'hail_holy_queen',
            title: 'Salve Regina',
            content:
                'Üdvözlégy, Királynő, irgalmasság anyja, életünk, édességünk, reménységünk, üdvözlégy! Hozzád kiáltunk, Évának számkivetett fiai, hozzád sóhajtunk sírva és zokogva e siralomvölgyben. Fordítsd reánk tehát, Szószólónk, irgalmas szemedet, és e számkivetés után mutasd meg nekünk Jézust, méhednek áldott gyümölcsét! Ó irgalmas, ó kegyes, ó édes Szűz Mária!\n\nV. Imádkozzál érettünk, Istennek szent Anyja.\nF. Hogy méltók lehessünk Krisztus ígéreteire.'
        },
        closing_prayer: {
            id: 'closing_prayer',
            title: 'Zárókönyörgés',
            content:
                'Könyörögjünk. Úristen, a te egyszülött Fiad életével, halálával és feltámadásával megszerezte nekünk az örök élet jutalmát; add meg, kérünk, hogy e titkokat a Boldogságos Szűz Mária szentolvasója által megemlékezve, kövessük, amit magukban foglalnak, és elnyerjük, amit ígérnek. Krisztus, a mi Urunk által. Ámen.'
        }
    },
    mysteries: {
        joyful: {
            id: 'joyful',
            name: 'Örvendetes titkok',
            days: [1, 6],
            passages: [
                'Angyali üdvözlet: "Az angyal így szólt hozzá: »Ne félj, Mária! Kegyelmet találtál Istennél. Íme, méhedben fogansz és fiút szülsz, és Jézusnak fogod nevezni.«" (Lk 1,30-31)\n\nAz olvasó gyümölcse: Alázatosság',
                'Mária látogatása Erzsébetnél: "Amikor Erzsébet meghallotta Mária köszöntését, felujjongott méhében a magzat, és Erzsébet eltelt Szentlélekkel." (Lk 1,41)\n\nAz olvasó gyümölcse: Szeretet',
                'Jézus születése: "Megszülte elsőszülött fiát, pólyába takarta és jászolba fektette, mert nem kaptak helyet a szálláson." (Lk 2,7)\n\nAz olvasó gyümölcse: Szegénység szelleme',
                'Jézus bemutatása a templomban: "Amikor a szülők bevitték a gyermek Jézust, hogy a törvény előírása szerint cselekedjenek vele, Simeon is karjába vette őt, és áldotta Istent." (Lk 2,27-28)\n\nAz olvasó gyümölcse: Engedelmesség',
                'Jézus megtalálása a templomban: "Három nap múlva megtalálták a templomban, amint a tanítók közt ült, hallgatta és kérdezte őket." (Lk 2,46)\n\nAz olvasó gyümölcse: Isten keresése'
            ]
        },
        luminous: {
            id: 'luminous',
            name: 'Világosság titkai',
            days: [4],
            passages: [
                'Jézus megkeresztelkedése a Jordánban: "És íme, hang hallatszott a mennyből: »Ez az én szeretett Fiam, akiben kedvem telik.«" (Mt 3,17)\n\nAz olvasó gyümölcse: A keresztségi fogadalom megújítása',
                'A kánai menyegző: "Az anyja azt mondta a szolgáknak: »Bármit mond nektek, tegyétek meg!«" (Jn 2,5)\n\nAz olvasó gyümölcse: Bizalom Istenben',
                'Isten országának hirdetése: "Betelt az idő, és közel van az Isten országa. Tartsatok bűnbánatot, és higgyetek az evangéliumban." (Mk 1,15)\n\nAz olvasó gyümölcse: Megtérés',
                'Jézus színeváltozása: "Színe elváltozott előttük: arca ragyogott, mint a nap, ruhája pedig olyan fehér lett, mint a fény." (Mt 17,2)\n\nAz olvasó gyümölcse: Az életszentség vágya',
                'Az Eucharisztia alapítása: "Vegyétek és egyétek, ez az én testem... Igyatok ebből mindnyájan, mert ez az én vérem." (Mt 26,26-28)\n\nAz olvasó gyümölcse: Az Oltáriszentség tisztelete'
            ]
        },
        sorrowful: {
            id: 'sorrowful',
            name: 'Fájdalmas titkok',
            days: [2, 5],
            passages: [
                'Jézus vérrel verejtékezése a Getsemani kertben: "Halálfélelem fogta el, és még buzgóbban imádkozott. Verejtéke mint vércseppek hullott a földre." (Lk 22,44)\n\nAz olvasó gyümölcse: Bűnbánat',
                'Jézus megostorozása: "Akkor Pilátus elvitette Jézust és megostoroztatta." (Jn 19,1)\n\nAz olvasó gyümölcse: Testi szenvedélyek megfékezése',
                'Jézus töviskoronázása: "Tövisből koronát fontak, a fejére tették, és bíborszínű köpenyt adtak rá." (Jn 19,2)\n\nAz olvasó gyümölcse: A világ megvetése',
                'Jézus a keresztet hordozza: "Maga vitte keresztjét a Koponya-helyre, amelyet héberül Golgotának neveznek." (Jn 19,17)\n\nAz olvasó gyümölcse: Türelem',
                'Jézus kereszthalála: "Jézus hangosan felkiáltott: »Atyám, a te kezedbe ajánlom lelkemet!« E szavakkal kilehelte lelkét." (Lk 23,46)\n\nAz olvasó gyümölcse: A lelkek mentése'
            ]
        },
        glorious: {
            id: 'glorious',
            name: 'Dicsőséges titkok',
            days: [0, 3],
            passages: [
                'Jézus feltámadása: "Nincs itt, mert feltámadt, amint mondta. Jöjjetek, nézzétek meg a helyet, ahol feküdt." (Mt 28,6)\n\nAz olvasó gyümölcse: Hit',
                'Jézus mennybemenetele: "Az Úr Jézus... felvétetett a mennybe, és Isten jobbján ül." (Mk 16,19)\n\nAz olvasó gyümölcse: Remény',
                'A Szentlélek eljövetele: "Mindnyájan elteltek Szentlélekkel, és különféle nyelveken kezdtek beszélni." (ApCsel 2,4)\n\nAz olvasó gyümölcse: Isten szeretete',
                'Mária mennybevétele: "Boldog vagy te, aki hittél, mert be fog teljesedni, amit az Úr mondott neked." (Lk 1,45)\n\nAz olvasó gyümölcse: A jó halál kegyelme',
                'Mária megkoronázása: "Nagy jel tűnt fel az égen: egy asszony, kinek öltözete a nap volt, lába alatt a hold, fején tizenkét csillagból korona." (Jel 12,1)\n\nAz olvasó gyümölcse: Bizalom Máriában'
            ]
        }
    }
};
