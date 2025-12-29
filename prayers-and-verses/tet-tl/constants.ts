import type { LocalizationData } from '$lib/types';

export const tet: LocalizationData = {
    lang: 'tet-TL',
    seo: {
        title: 'Rozáriu Santu',
        description:
            'Reza Rozáriu. Lalais, gratuitu, no di\'ak ba telemovel. Aplikasaun web modernu, open-source, no fasil atu uza iha dispozitivu hotu-hotu.'
    },
    ui: {
        start_button: 'Hahú Orasaun',
        pick_mystery: 'Hili Mistériu',
        footer_made_by: 'KRIADU HUSI',
        recommended_mystery: 'Mistériu Loron ne\'e nian',
        pray_button_prefix: 'Reza: ',
        change_theme: 'Muda Kór',
        liturgical: {
            // Seasons
            advent: 'Tempu Adventu',
            christmas: 'Tempu Natál',
            lent: 'Tempu Kuarezma',
            triduum: 'Tríduu Paskál',
            easter: 'Tempu Páskua',
            ordinary: 'Tempu Komún',
            // Feasts
            epiphany: 'Epifania (Na\'i Mosu)',
            presentation: 'Prezentasaun Na\'i nian',
            annunciation: 'Anunsiasaun (Anju Hasara)',
            transfiguration: 'Transfigurasaun',
            assumption: 'Asunsaun (Nossa Senhora Sa\'e ba Lalehan)',
            all_saints: 'Loron Santu hotu-hotu',
            all_souls: 'Loron Klamar hotu-hotu',
            immaculate_conception: 'Imakolada Konseisaun',
            guadalupe: 'Nossa Senhora Guadalupe',
            mother_of_god: 'Santa Maria, Maromak Inan',
            ash_wednesday: 'Kuarta-Feira Cinzas',
            palm_sunday: 'Domingu Ramos',
            holy_thursday: 'Kinta-Feira Santa',
            good_friday: 'Sesta-Feira Santa',
            holy_saturday: 'Sábadu Aleluia',
            easter_sunday: 'Domingu Páskua',
            divine_mercy: 'Domingu Mizerikórdia Divina',
            ascension: 'Asensaun (Na\'i Sa\'e ba Lalehan)',
            pentecost: 'Pentekostes',
            trinity: 'Santíssima Trindade',
            corpus_christi: 'Corpus Christi (Kristu nia Isin no Raan)',
            sacred_heart: 'Fuan Santu Jesus',
            christ_king: 'Kristu Liurai',
            gaudete: 'Domingu Gaudete',
            laetare: 'Domingu Laetare',
            st_joseph: 'São José',
            st_peter_paul: 'São Pedro no São Paulo',
            exaltation_cross: 'Festa Foti Krúz',
            archangels: 'Arkánju Sira',
            lateran_basilica: 'Dedikasaun Bazílika Latran',
            holy_family: 'Família Sagrada',
            nativity_john_baptist: 'Natividade São João Baptista',
            baptism_lord: 'Batizmu Na\'i nian'
        },
        modes: {
            digital: {
                title: 'Rozáriu Dijitál',
                desc: 'Tuir ó-nia orasaun iha ekan.'
            },
            physical: {
                title: 'Rozáriu Fíziku',
                desc: 'Ha\'u iha ha\'u-nia tersu. Hatudu orasaun de\'it.'
            },
            mysteries: {
                title: 'Mistériu De\'it',
                desc: 'Lista simples mistériu 5'
            }
        },
        actions: {
            next: 'Next',
            back: 'Back',
            exit: 'EXIT?'
        },
        announce: 'Anúnsiu Mistériu',
        sections: {
            intro: 'Introdusaun',
            decade: 'Misteriu (Dazena)',
            conclusion: 'Konkluzaun'
        },
        ordinals: ['1.', '2.', '3.', '4.', '5.'],
        menus: {
            language: 'Hili Lian',
            mystery: 'Hili Mistériu',
            mode: 'Hili Modu',
            theme: 'Hili Tema',
            jump_to_section: 'Buka Seksaun'
        },
        themes: {
            description: 'Personaliza ó-nia haree. Ida ne\'e la muda data litúrjika.',
            ordinary: 'Komún',
            christmas_easter: 'Natál / Páskua',
            advent_lent: 'Adventu / Kuarezma',
            pentecost: 'Pentekostes',
            gaudete: 'Gaudete',
            requiem: 'Requiem',
            gold: 'Osan-mean',
            silver: 'Osan-mutin',
            white: 'Mutin',
            red: 'Mean',
            purple: 'Roxu',
            rose: 'Kór-roza',
            black: 'Metan',
            green: 'Matak'
        }
    },
    prayers: {
        sign_of_cross: {
            id: 'sign_of_cross',
            title: 'Sinal Krúz',
            content: 'Iha Aman, no Oan, no Espíritu Santu nia naran. Amen.'
        },
        creed: {
            id: 'creed',
            title: 'Ha\'u Fiar (Kredu)',
            content:
                'Ha\'u fiar ba Maromak, Aman Kbiit-Na\'in hotu, na\'in ba lalehan no rai. No ba Jesus Kristu, Nia Oan-Mane mesak, ita-nia Na\'in; ne\'ebé hahú isin husi Espíritu Santu, moris husi Virgem Maria; terus iha tempu Pónsio Pilatos, mate iha krúz, hakoi tiha; tun ba fatin mate nian; loron datoluk moris hi\'as husi mate; sa\'e ba lalehan, tuur iha Maromak Aman Kbiit-Na\'in hotu nia sorin kuana; husi ne\'ebá Nia sei mai atu tesi-lia ba ema moris no ema mate. Ha\'u fiar ba Espíritu Santu, Kreda Santa Katólika, komunhan santu sira-nian, perdua salan, isin-moris hi\'as, no moris rohan-laek. Amen.'
        },
        our_father: {
            id: 'our_father',
            title: 'Ami Aman',
            content:
                'Ami Aman iha lalehan, tulun ema atu hahi Ita-Nia naran; halo Ita-Nia reinu to\'o mai ami; halo tuir Ita-Nia hakarak iha rai nudar iha lalehan. Ohin ne\'e, fó mai ami aihan loron-loron nian; perdua ami-nia salan, nudar ami perdua ba ema ne\'ebé halo aat mai ami; no keta husik ami monu ba tentasaun, maibé hasai ami husi aat. Amen.'
        },
        hail_mary: {
            id: 'hail_mary',
            title: 'Ave Maria',
            content:
                'Ave Maria, grasa barak liu, Na\'i Maromak ho Ita-Boot; Ita-Boot di\'ak liu feto hotu-hotu, no Ita-Nia Oan Jesus di\'ak liu. Santa Maria, Maromak Inan, harohan ba Maromak tanba ami-nia salan, agora no iha oras ami atu mate. Amen.'
        },
        glory_be: {
            id: 'glory_be',
            title: 'Glória',
            content:
                'Glória ba Aman, no ba Oan, no ba Espíritu Santu. Nudar horiuluk, agora no tinan ba tinan. Amen.'
        },
        fatima: {
            id: 'fatima',
            title: 'Orasaun Fátima',
            content:
                'O ha\'u-nia Jesus, perdua ami-nia salan, salva ami husi ahi infernu, lori klamar hotu-hotu ba lalehan, liuliu sira ne\'ebé presiza liu Ita-Nia mizerikórdia.'
        },
        hail_holy_queen: {
            id: 'hail_holy_queen',
            title: 'Salve Rai-Na\'in',
            content:
                'Salve Rai-Na\'in, Inan mizerikórdia, ami-nia moris, ami-nia ksolok no ami-nia esperansa, salve. Ami, Eva nia oan, ne\'ebé ema duni sai, ami bolu Ita-Boot. Ami tanis no suspira ba Ita-Boot iha rai-matan-been ne\'e. Ne\'e duni, ami-nia Advogada, fila Ita-Nia matan mizerikórdia mai ami. No bainhira ami-nia desterru ne\'e hotu, hatudu mai ami Jesus, Ita-Nia Oan-Mane, ksolok liu. O Inan laran-luak, O Inan laran-sadi\'a, O Inan Virgem Maria midar.\n\nV. Harohan ba Maromak tanba ami, Santa Inan Maromak nian.\nR. Atu ami bele simu Jesus Kristu nia promesa.'
        },
        closing_prayer: {
            id: 'closing_prayer',
            title: 'Orasaun Ikus',
            content:
                'Mai ita harohan. Maromak, Ita-Nia Oan-Mane mesak, ho Nia moris, Nia mate no Nia moris-hi\'as, sosa tiha ona ba ami, moris rohan-laek. Ami harohan ba Ita-Boot, tulun ami, ne\'ebé hanoin tuir mistériu Rozáriu Santu Virgem Maria nian, atu ami bele banati-tuir buat ne\'ebé mistériu sira-ne\'e hanorin, no simu buat ne\'ebé sira promete. Husi ami-nia Na\'i Jesus Kristu. Amen.'
        }
    },
    mysteries: {
        joyful: {
            id: 'joyful',
            name: 'Mistériu Ksolok',
            days: [1, 6],
            passages: [
                'Anju Gabriel hasara katak Maria sei sai Maromak nia Inan: "Anju dehan ba nia: \'Keta ta\'uk, Maria, basá O hetan ona grasa iha Maromak nia oin.\'" (Lukas 1:30)\n\nFuan: Haraik-an',
                'Maria bá vizita Isabel: "Isabel rona Maria nia kumprimentus, oan iha nia kabun laran book an." (Lukas 1:41)\n\nFuan: Hadomi maluk',
                'Jesus moris iha Belém: "Nia tuur ahi Oan-Mane, nia oan-mane primeiru, falun nia ho hena no hatoba nia iha manjadoura." (Lukas 2:7)\n\nFuan: Espiritu kiak nian',
                'Maria lori Jesus ba aprezenta iha Templu: "Sira lori Nia ba Jerusalém atu aprezenta ba Na\'i." (Lukas 2:22)\n\nFuan: Obediénsia',
                'Maria no José hetan fali Jesus iha Templu: "Loron tolu liu tiha, sira hetan Nia iha Templu, tuur iha doutór sira-nia leet." (Lukas 2:46)\n\nFuan: Buka Jesus iha buat hotu'
            ]
        },
        luminous: {
            id: 'luminous',
            name: 'Mistériu Naroman',
            days: [4],
            passages: [
                'Jesus simu batizmu iha mota Jordão: "Lian ida husi lalehan dehan: \'Ne\'e Ha\'u-nia Oan doben, ne\'ebé Ha\'u hili.\'" (Mateus 3:17)\n\nFuan: Fiar ba promesa batizmu',
                'Jesus halo milagre dahuluk iha boddas Kaná: "Nia Inan dehan ba servente sira: \'Halo buat hotu ne\'ebé Nia dehan ba imi.\'" (João 2:5)\n\nFuan: Fiar ba Jesus',
                'Jesus haklaken Maromak nia Reinu: "Tempu to\'o ona, no Maromak nia Reinu besik ona; imi hakribi salan no fiar lia-fuan di\'ak." (Markus 1:15)\n\nFuan: Konversaun fuan nian',
                'Jesus nia oin nakfilak iha foho Tabor: "Nia oin nakfilak iha sira-nia oin... Nia oin nabilan hanesan loron." (Mateus 17:2)\n\nFuan: Hakarak santidade',
                'Jesus institui Eukaristia: "Sira han hela, Jesus foti paun... fó ba sira hodi dehan: \'Simu no han; ne\'e Ha\'u-nia Isin.\'" (Mateus 26:26)\n\nFuan: Adorasaun Eukaristia'
            ]
        },
        sorrowful: {
            id: 'sorrowful',
            name: 'Mistériu Susar',
            days: [2, 5],
            passages: [
                'Jesus orasaun iha to\'os Getsemani: "Nia laran-susar tebes, no Nia harohan barak liután; Nia kosar-been sai hanesan raan turuk ba rai." (Lukas 22:44)\n\nFuan: Arrependimentu ba salan',
                'Baku Jesus ho xikote: "Pilatos kaer Jesus no baku Nia ho xikote." (João 19:1)\n\nFuan: Mortifikasaun',
                'Tau koroa aifunan-tarak ba Jesus nia ulun: "Soldadu sira nina koroa aifunan-tarak, tau ba Nia ulun." (Markus 15:17)\n\nFuan: Korajen morál',
                'Jesus lori Krúz: "Nia lori Nia Krúz, la\'o ba fatin ida naran... Golgota." (João 19:17)\n\nFuan: Pasiénsia',
                'Jesus mate iha Krúz: "Jesus hakilar ho lian maka\'as dehan: \'Aman, Ha\'u entrega Ha\'u-nia klamar ba Ita-Nia liman.\'" (Lukas 23:46)\n\nFuan: Perdua no domin ba inimigu'
            ]
        },
        glorious: {
            id: 'glorious',
            name: 'Mistériu Glória',
            days: [0, 3],
            passages: [
                'Jesus moris hi\'as: "Nia la iha ne\'e, basá Nia moris hi\'as ona, nudar Nia dehan." (Mateus 28:6)\n\nFuan: Fiar',
                'Jesus sa\'e ba Lalehan: "Na\'i Jesus... sa\'e ba lalehan, no tuur iha Maromak nia sorin kuana." (Markus 16:19)\n\nFuan: Esperansa',
                'Espíritu Santu tun ba Apóstolu sira: "Sira hotu nakonu ho Espíritu Santu." (Apóstolu 2:4)\n\nFuan: Domin Maromak nian',
                'Nossa Senhora sa\'e ba Lalehan: "Husi agora ba oin, jerasaun hotu sei bolu ha\'u di\'ak." (Lukas 1:48)\n\nFuan: Grasa mate di\'ak',
                'Nossa Senhora simu koroa iha Lalehan: "Sinal boot ida mosu iha lalehan: feto ida hatais loron, no fulan iha nia ain okos, no iha nia ulun koroa ida ho fitun sanulu-resin-rua." (Apokalipse 12:1)\n\nFuan: Konfiansa ba Maria'
            ]
        }
    }
};
