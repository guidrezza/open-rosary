import type { LocalizationData } from '$lib/types';

export const tpi: LocalizationData = {
    lang: 'tpi-PG',
    seo: {
        title: 'Santa Rosari',
        description:
            'Pre long Rosari. Kwik, fri, na isi long mobail. Nupela web ap, open source na isi long yusim long olgeta divais.'
    },
    ui: {
        start_button: 'Statim Pre',
        pick_mystery: 'Senisim Misteri',
        footer_made_by: 'WOK BILONG',
        recommended_mystery: 'Misteri Bilong Tude',
        pray_button_prefix: 'Pre: ',
        change_theme: 'Senisim Kala',
        liturgical: {
            // Seasons
            advent: 'Advent',
            christmas: 'Krismas',
            lent: 'Lent',
            triduum: 'Triduum',
            easter: 'Ista',
            ordinary: 'Taim Bilong Yia',
            // Feasts
            epiphany: 'Epiphany',
            presentation: 'Dediketim Jisas',
            annunciation: 'Gabriel i Toksave long Maria',
            transfiguration: 'Transfiguration',
            assumption: 'Maria i Go long Heven',
            all_saints: 'Olgeta Santo',
            all_souls: 'Olgeta Sol',
            immaculate_conception: 'Immaculate Conception',
            guadalupe: 'Mama Maria bilong Guadalupe',
            mother_of_god: 'Maria Mama bilong God',
            ash_wednesday: 'As Trinde',
            palm_sunday: 'Pam Sande',
            holy_thursday: 'Holi Tonde',
            good_friday: 'Gud Fraide',
            holy_saturday: 'Holi Sarere',
            easter_sunday: 'Ista Sande',
            divine_mercy: 'Sande bilong Marimari',
            ascension: 'Asensen',
            pentecost: 'Pentekos',
            trinity: 'Trinity',
            corpus_christi: 'Corpus Christi',
            sacred_heart: 'Sakrid Hat',
            christ_king: 'Krais King',
            gaudete: 'Gaudete Sande',
            laetare: 'Laetare Sande',
            st_joseph: 'Santo Josep',
            st_peter_paul: 'Pita na Pol',
            exaltation_cross: 'Liffimapim Diwai Kros',
            archangels: 'Ol Arkensel',
            lateran_basilica: 'Dediketim Lateran',
            holy_family: 'Holi Famili',
            nativity_john_baptist: 'Jon Baptis',
            baptism_lord: 'Baptismo bilong Jisas'
        },
        modes: {
            digital: {
                title: 'Digital Rosari',
                desc: 'Lukim na bihainim pre long skrin.'
            },
            physical: {
                title: 'Rosari',
                desc: 'Mi gat Rosari bilong mi. Soim ol pre tasol.'
            },
            mysteries: {
                title: 'Ol Misteri Tasol',
                desc: 'List bilong ol 5 misteri'
            }
        },
        actions: {
            next: 'Next',
            back: 'Back',
            exit: 'EXIT?'
        },
        announce: 'Tokaut long Misteri',
        sections: {
            intro: 'Stat',
            decade: 'Tenpela',
            conclusion: 'Pinis'
        },
        ordinals: ['Namba 1', 'Namba 2', 'Namba 3', 'Namba 4', 'Namba 5'],
        menus: {
            language: 'Makim Tokples',
            mystery: 'Makim Misteri',
            mode: 'Makim Mod',
            theme: 'Makim Kala',
            jump_to_section: 'Go long...'
        },
        themes: {
            description: 'Senisim lukluk. Dispela i no senisim de bilong lituji.',
            ordinary: 'Taim Bilong Yia',
            christmas_easter: 'Krismas / Ista',
            advent_lent: 'Advent / Lent',
            pentecost: 'Pentekos',
            gaudete: 'Gaudete',
            requiem: 'Requiem',
            gold: 'Gol',
            silver: 'Silva',
            white: 'Wait',
            red: 'Ret',
            purple: 'Pepol',
            rose: 'Pink',
            black: 'Blak',
            green: 'Grin'
        }
    },
    prayers: {
        sign_of_cross: {
            id: 'sign_of_cross',
            title: 'Mak bilong Kros',
            content: 'Long Nem bilong Papa, na bilong Pikinini, na bilong Spirit Santu. Amen.'
        },
        creed: {
            id: 'creed',
            title: 'Mi Bilip',
            content:
                'Mi bilip long God Papa, em i Gat Olgeta Strong, em i Man bilong wokim heven na graun. Na mi bilip long Jisas Kraist, Pikinini Wanpela tasol bilong em, Bikpela bilong yumi. Em i kamap man long strong bilong Spirit Santu, na Mama Maria i karim em. Em i karim pen long taim Pontius Pailat i bosim ol, ol i nilim em long diwai kros, na em i dai, na ol i planim em. Em i go daun long ples bilong ol daiman. Long de namba tri em i kirap bek long ol daiman. Em i go antap long heven, na em i sindaun long han sut bilong God Papa i Gat Olgeta Strong. Bihain bai em i kam bek bilong skelim ol man i stap laip na ol man i dai pinis. Mi bilip long Spirit Santu, na long Santa Katolik Sios, na pasin bilong ol Santo i stap wanbel, na lusim bilong sin, na bodi bai i kirap bek, na laip i no save pinis. Amen.'
        },
        our_father: {
            id: 'our_father',
            title: 'Papa Bilong Mipela',
            content:
                'Papa bilong mipela, yu stap long heven, nem bilong yu i mas i stap holi. Kingdom bilong yu i mas i kam. Mipela i mas bihainim laik bilong yu long graun olsem ol i bihainim long heven. Givim mipela kaikai inap long dispela de. Na pogivim rong bilong mipela, olsem mipela i pogivim ol arapela i mekim rong long mipela. Na no ken larim mipela i pundaun long traim, tasol rausim olgeta samting nogut long mipela. Amen.'
        },
        hail_mary: {
            id: 'hail_mary',
            title: 'Ave Maria',
            content:
                'Ave Maria, yu pulap long grasia, Bikpela i stap wantaim yu. Yu winim olgeta meri long blessing, na Jisas, Pikinini bilong yu, em i winim olgeta samting long blessing. Santa Maria, Mama bilong God, pre long mipela ol sinman, nau na long taim bilong indai bilong mipela. Amen.'
        },
        glory_be: {
            id: 'glory_be',
            title: 'Gloria',
            content:
                'Gloria i go long Papa, na long Pikinini, na long Spirit Santu. Olsem bipo, na nau, na oltaim oltaim. Amen.'
        },
        fatima: {
            id: 'fatima',
            title: 'Pre bilong Fatima',
            content:
                'O Jisas bilong mi, pogivim ol sin bilong mipela, kisim bek mipela long paia bilong hel, na lidim olgeta sol i go long heven, moa yet olgeta i sot long marimari bilong yu.'
        },
        hail_holy_queen: {
            id: 'hail_holy_queen',
            title: 'Ave Kwin',
            content:
                'Ave Kwin, Mama bilong marimari, laip na swit na hop bilong mipela, Ave. Mipela ol pikinini bilong Eva, mipela i ranawe i kam long yu. Mipela i krai na singaut long yu long dispela ples bilong krai. O Mama, yu save helpim mipela, tanim ai bilong yu i pulap long marimari i kam long mipela. Na bihain, taim mipela i lusim dispela ples, soim Jisas long mipela, em Pikinini bilong yu i gat blessing. O Maria, yu gat sori, yu gat pasin laikim, yu switpela Mama.\n\nV. Pre long mipela, Santa Mama bilong God.\nR. Bai mipela i ken kisim ol samting Kraist i promis long mipela.'
        },
        closing_prayer: {
            id: 'closing_prayer',
            title: 'Pre bilong Pinis',
            content:
                'Yumi pre. O God, Pikinini Wanpela bilong yu, long laip na daip na kirap bek bilong em, em i baim pinis prais bilong laip oltaim bilong mipela. Mipela i pre long yu, taim mipela i tingim ol dispela misteri bilong Santa Rosari bilong Maria, Mama i no gat sin, helpim mipela long bihainim tok bilong ol na kisim samting ol i promis. Long nem bilong Krais Bikpela bilong mipela. Amen.'
        }
    },
    mysteries: {
        joyful: {
            id: 'joyful',
            name: 'Ol Misteri Bilong Amamas',
            days: [1, 6],
            passages: [
                'Ensel Gabriel i toksave long Maria: "Maria i tok: \'Harim, mi wokmeri bilong Bikpela. Orait, tok bilong yu i ken kamap long mi.\'" (Luk 1:38)\n\nFrut bilong Misteri: Pasin daun',
                'Maria i go lukim Elisabet: "Elisabet i singaut strong na i tok: \'God i bin mekim gut long yu, na yu winim olgeta arapela meri. Na em i mekim gut long pikinini yu karim.\'" (Luk 1:42)\n\nFrut bilong Misteri: Pasin bilong laikim ol arapela',
                'Jisas i kamap man long Betlehem: "Em i karim namba wan pikinini man bilong em. Em i pasim em long laplap na slipim em long bokis kaikai bilong ol bulmakau." (Luk 2:7)\n\nFrut bilong Misteri: Pasin bilong i stap rabis man long Spirit',
                'Maria na Josep i dediketim Jisas: "Ai bilong mi i lukim pinis kisim bek bilong yu. Yu bin redim dispela bilong olgeta manmeri i ken lukim." (Luk 2:30-31)\n\nFrut bilong Misteri: Pasin bilong bihainim tok',
                'Maria na Josep i painim Jisas long Tempel: "Bihain long tripela de tupela i painim em long tempel. Em i sindaun i stap namel long ol tisa." (Luk 2:46)\n\nFrut bilong Misteri: Amamas long painim Jisas'
            ]
        },
        luminous: {
            id: 'luminous',
            name: 'Ol Misteri Bilong Lait',
            days: [4],
            passages: [
                'Jisas i kisim Baptismo long Wara Jodan: "Na wanpela nek i kamap long heven na i tok: \'Dispela em i Pikinini bilong mi, mi laikim em tumas. Bel bilong mi i amamas long em.\'" (Matyu 3:17)\n\nFrut bilong Misteri: Opim bel long Spirit Santu',
                'Jisas i mekim namba wan mirakel long Kana: "Mama bilong em i tokim ol wokman olsem: \'Sapos em i tokim yupela long mekim wanpela samting, orait yupela mekim.\'" (Jon 2:5)\n\nFrut bilong Misteri: Go long Jisas long han bilong Maria',
                'Jisas i autim tok long Kingdom bilong God: "Taim i kamap pinis na kingdom bilong God i kam klostu. Yupela tanim bel na bilip long Gutnius." (Mak 1:15)\n\nFrut bilong Misteri: Tanim bel na bilip',
                'Jisas i senisim bodi long maunten: "Na em i senis long ai bilong ol. Pes bilong en i lait olsem san, na klos bilong en i kamap waitpela olsem lait." (Matyu 17:2)\n\nFrut bilong Misteri: Laik long kamap Santo',
                'Jisas i givim Eukaristia: "Yupela kisim na kaikai. Dispela em i bodi bilong mi." (Matyu 26:26)\n\nFrut bilong Misteri: Lotuim Eukaristia'
            ]
        },
        sorrowful: {
            id: 'sorrowful',
            name: 'Ol Misteri Bilong Pen',
            days: [2, 5],
            passages: [
                'Jisas i karim pen long gaden Getsemani: "Em i pilim bikpela hevi moa, na em i beten strong moa. Na tuhat bilong en i kamap olsem blut na i pundaun long graun." (Luk 22:44)\n\nFrut bilong Misteri: Sori long sin',
                'Jisas i kisim wip: "Orait Pailat i kisim Jisas na i tokim ol soldia long wipim em." (Jon 19:1)\n\nFrut bilong Misteri: Pasin bilong klinim bel',
                'Ol i putim hat i gat nil long het bilong Jisas: "Ol i putim klos parpal long em. Na ol i wokim wanpela hat long rop i gat nil, na ol i putim long het bilong em." (Mak 15:17)\n\nFrut bilong Misteri: Strong long karim hevi',
                'Jisas i karim Diwai Kros: "Jisas yet i karim diwai kros bilong en na i go long ples ol i kolim Ples Bilong Boun Bilong Het." (Jon 19:17)\n\nFrut bilong Misteri: Pasin bilong wet isi (Patience)',
                'Jisas i dai long Diwai Kros: "Jisas i singaut strong olsem: \'Papa, mi putim spirit bilong mi long han bilong yu.\' Em i tok olsem, na em i dai." (Luk 23:46)\n\nFrut bilong Misteri: Stap strong inap long pinis'
            ]
        },
        glorious: {
            id: 'glorious',
            name: 'Ol Misteri Bilong Glori',
            days: [0, 3],
            passages: [
                'Jisas i kirap bek: "Em i kirap bek pinis. Em i no i stap hia. Lukim, dispela em i ples ol i bin slipim em long en." (Mak 16:6)\n\nFrut bilong Misteri: Bilip',
                'Jisas i go antap long Heven: "Bikpela Jisas i toktok wantaim ol pinis, orait God i kisim em i go antap long heven, na em i sindaun long han sut bilong God." (Mak 16:19)\n\nFrut bilong Misteri: Hop (Wet long samting i kamap)',
                'Spirit Santu i kam daun: "Na Spirit Santu i pulap long olgeta, na ol i stat long toktok long ol narapela tokples, olsem Spirit i givim save long ol." (Aposel 2:4)\n\nFrut bilong Misteri: Save na Laikim God',
                'Maria i go long Heven: "Yu nambawan, na God Antap Tru i blesim yu na yu winim olgeta arapela meri long graun." (Judit 13:18)\n\nFrut bilong Misteri: Dai gut',
                'God i givim hat kwin long Maria: "Na wanpela bikpela mak i kamap long heven. Wanpela meri i werim san olsem klos bilong en. Mun i stap aninit long lek bilong en. Na long het bilong en em i werim hat kwin i gat 12-pela sta." (Revelesen 12:1)\n\nFrut bilong Misteri: Bilip long Maria bai helpim yumi'
            ]
        }
    }
};
