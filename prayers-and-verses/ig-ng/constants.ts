import type { LocalizationData } from '$lib/types';

export const ig: LocalizationData = {
    lang: 'ig-NG',
    seo: {
        title: 'Rosary Nso',
        description:
            'Kpee Rosary. Ngwa ngwa, n\'efu, ma dị mfe na ekwentị. Ngwa weebụ ọgbara ọhụrụ, mepere emepe ma dị mfe iji na ngwaọrụ ọ bụla.'
    },
    ui: {
        start_button: 'Bido Ekpere',
        pick_mystery: 'Gbanwee Ihe Omimi',
        footer_made_by: 'Ọ BỤ',
        recommended_mystery: 'Ihe Omimi nke Taa',
        pray_button_prefix: 'Kpee: ',
        change_theme: 'Gbanwee Ụcha',
        liturgical: {
            // Seasons
            advent: 'Oge Advent',
            christmas: 'Oge Ekeresimesi',
            lent: 'Oge Lent',
            triduum: 'Triduum nke Ista',
            easter: 'Oge Ista',
            ordinary: 'Oge Adịghị Nsọ',
            // Feasts
            epiphany: 'Epiphany nke Onyenwe Anyị',
            presentation: 'Ngosi nke Onyenwe Anyị',
            annunciation: 'Nnwaata nke Onyenwe Anyị',
            transfiguration: 'Mgbanwe nke Onyenwe Anyị',
            assumption: 'Mbuli Elu nke Maria',
            all_saints: 'Ndị Nsọ Niile',
            all_souls: 'Ụbọchị Ndị Nwụrụ Anwụ',
            immaculate_conception: 'Atụrụ Ime Maria n\'enweghị Mmehie',
            guadalupe: 'Nne Anyị nke Guadalupe',
            mother_of_god: 'Maria Nne nke Chineke',
            ash_wednesday: 'Wenezde nke Ntụ',
            palm_sunday: 'Ụbọchị Nkwụ',
            holy_thursday: 'Tọzdee Nsọ',
            good_friday: 'Fraịdee Nsọ',
            holy_saturday: 'Satọdee Nsọ',
            easter_sunday: 'Ụbọchị Ista',
            divine_mercy: 'Sande Ebere Chineke',
            ascension: 'Nrịgo Elu nke Onyenwe Anyị',
            pentecost: 'Pentekost',
            trinity: 'Sande Atọ n\'Ime Otu',
            corpus_christi: 'Ahụ na Ọbara nke Kristi',
            sacred_heart: 'Obi Dị Nsọ nke Jesu',
            christ_king: 'Kristi Eze',
            gaudete: 'Sande Gaudete',
            laetare: 'Sande Laetare',
            st_joseph: 'Saint Joseph',
            st_peter_paul: 'Saint Peter na Paul',
            exaltation_cross: 'Mbuli Elu nke Obe',
            archangels: 'Ndị Isi Mmụọ Ozi',
            lateran_basilica: 'Nraranye nke Lateran Basilica',
            holy_family: 'Ezinụlọ Dị Nsọ',
            nativity_john_baptist: 'Ọmụmụ nke Jọn Baptist',
            baptism_lord: 'Baptism nke Onyenwe Anyị'
        },
        modes: {
            digital: {
                title: 'Mkpụrụ Dijitalụ',
                desc: 'Soro ekpere gị na ihuenyo.'
            },
            physical: {
                title: 'Rosary Anụ Ahụ',
                desc: 'Enwere m Rosary nke m. Gosi naanị ekpere.'
            },
            mysteries: {
                title: 'Naanị Ihe Omimi',
                desc: 'Ndepụta dị mfe nke ihe omimi 5'
            }
        },
        actions: {
            next: 'Next',
            back: 'Back',
            exit: 'EXIT?'
        },
        announce: 'Kwupụta Ihe Omimi',
        sections: {
            intro: 'Mmalite',
            decade: 'Nkeji',
            conclusion: 'Mmechi'
        },
        ordinals: ['Nke 1', 'Nke 2', 'Nke 3', 'Nke 4', 'Nke 5'],
        menus: {
            language: 'Họrọ Asụsụ',
            mystery: 'Họrọ Ihe Omimi',
            mode: 'Họrọ Ụdị',
            theme: 'Họrọ Ụcha',
            jump_to_section: 'Gaa na Nkebi'
        },
        themes: {
            description: 'Hazie otu ọ na-adị. Nke a anaghị emetụta ụbọchị liturgi.',
            ordinary: 'Oge Adịghị Nsọ',
            christmas_easter: 'Ekeresimesi / Ista',
            advent_lent: 'Advent / Lent',
            pentecost: 'Pentekost',
            gaudete: 'Gaudete',
            requiem: 'Requiem',
            gold: 'Ọlaedo',
            silver: 'Ọlaọcha',
            white: 'Ọcha',
            red: 'Uhie',
            purple: 'Pọpụl',
            rose: 'Rouse',
            black: 'Ojii',
            green: 'Akwụkwọ Nri'
        }
    },
    prayers: {
        sign_of_cross: {
            id: 'sign_of_cross',
            title: 'Ime Akara Obe',
            content: 'N\'aha Nna, na Nwa, na Mmụọ Nsọ. Amen.'
        },
        creed: {
            id: 'creed',
            title: 'Kredo (Ekwere m na Chineke)',
            content:
                'Ekwere m na Chineke, Nna onye pụrụ ime ihe niile, Onye kere eluigwe na ụwa. M na-ekwere na Jesu Kristi, Sọ otu Nwa ya, Onyenwe anyị, Onye a tụụrụ ime ya site na Mmụọ Nsọ, amụọ ya na Virgin Maria, O tara ahụhụ n\'okpuru Pọntius Paịlet, a kpọgburu ya n\'obe, O nwụrụ ma lie ya; O ridaa n\'ala ndị nwụrụ anwụ; n\'ụbọchị nke atọ O siri na ndị nwụrụ anwụ bilie; O rịgoro n\'eluigwe, ma nọrọ n\'aka nri nke Chineke Nna onye pụrụ ime ihe niile; site n\'ebe ahụ Ọ ga-abịa ikpe ndị dị ndụ na ndị nwụrụ anwụ ikpe. Ekwere m na Mmụọ Nsọ, na Nzukọ Nsọ Katolik, na mmekọrịta nke ndị nsọ, na mgbaghara nke mmehie, na mbilite n\'ọnwụ nke anụ ahụ, na ndụ ebighi ebi. Amen.'
        },
        our_father: {
            id: 'our_father',
            title: 'Nna Anyị',
            content:
                'Nna anyị nke bi n\'eluigwe, ka aha Gị dị nsọ; ka alaeze Gị bịa; ka eme uche Gị n\'ụwa dịka e si eme ya n\'eluigwe. Nye anyị taa nri nke ụbọchị anyị; gbaghara anyị mmehie anyị, dịka anyị si agbaghara ndị mehiere anyị; ekwela ka anyị banye na ọnwụnwa, kama zọpụta anyị n\'ajọ ihe. Amen.'
        },
        hail_mary: {
            id: 'hail_mary',
            title: 'Ekele Maria',
            content:
                'Ekele Maria, i jupụtara na grasịa, Onyenwe anyị nọnyeere gị. Ị gọziri agọzi n\'ime ụmụ nwanyị niile, ma a gọziri nwa nke afọ gị, Jesu. Maria Dị Nsọ, Nne nke Chineke, kpeere anyị ndị mmehie ekpere, ugbu a na n\'oge ọnwụ anyị. Amen.'
        },
        glory_be: {
            id: 'glory_be',
            title: 'Otito Dịrị Nna',
            content:
                'Otito dịrị Nna, na Nwa, na Mmụọ Nsọ. Dịka ọ dị na mmalite, otu ahụ ka ọ dị ugbu a, otu ahụ ka ọ ga-adịgide, ụwa ebighi ebi. Amen.'
        },
        fatima: {
            id: 'fatima',
            title: 'Ekpere Fatima',
            content:
                'Jesu m, gbaghara anyị mmehie anyị, zọpụta anyị n\'ọkụ nke hell, duga mkpụrụ obi niile n\'eluigwe, karịsịa ndị nwere mkpa ebere Gị.'
        },
        hail_holy_queen: {
            id: 'hail_holy_queen',
            title: 'Ekele Eze Nwanyi',
            content:
                'Ekele Eze Nwanyi, Nne nke ebere, ndụ anyị, ụtọ anyị na olileanya anyị. Anyị na-akpọku gị, anyị ụmụ Iv a chụrụ n\'ala ọzọ; anyị na-ezitere gị ude na akwa anyị n\'ime ndagwurugwu anya mmiri a. Ya mere, onye na-arịọchitere anyị, tụgharịa anya ebere gị n\'ebe anyị nọ; ma mgbe nchụpụ a gasịrị, gosi anyị Jesu, nwa a gọziri agọzi nke afọ gị. O onye ebere, O onye ịhụnanya, O Maria Virgin dị ụtọ.\n\nV. Kpeere anyị ekpere, O Nne Nsọ nke Chineke.\nR. Ka anyị wee ruo eru inweta nkwa nke Kristi.'
        },
        closing_prayer: {
            id: 'closing_prayer',
            title: 'Ekpere Mmechi',
            content:
                'Ka anyị kpee ekpere. O Chineke, onye otu Ọmụmụ Nwa Gị, site na ndụ Ya, ọnwụ Ya na mbilite n\'ọnwụ Ya, zụtara anyị ụgwọ ọrụ nke ndụ ebighi ebi; anyị na-arịọ Gị, nye anyị amara ka anyị, site n\'ịtụgharị uche n\'ihe omimi ndị a nke Rosary Nsọ nke Virgin Maria Dị Nsọ, anyị nwere ike iṅomi ihe ha nwere ma nweta ihe ha kwere na nkwa. Site na Kristi Onyenwe anyị. Amen.'
        }
    },
    mysteries: {
        joyful: {
            id: 'joyful',
            name: 'Ihe Omimi nke Ọṅụ',
            days: [1, 6],
            passages: [
                'Nnwaata nke Onyenwe Anyị: "Mmụọ Ozi ahụ sịrị ya, \'Atụla egwu, Maria, n\'ihi na i nwetala amara n\'ihu Chineke. Lee, ị ga-atụrụ ime, mụọ nwa nwoke, ị ga-akpọkwa aha ya Jesu.\'" (Luk 1:30-31)\n\nMkpụrụ: Ịdị Umeala n\'Obi',
                'Nleta nke Maria: "Elisabet jupụtara na Mmụọ Nsọ wee jiri oké olu tie mkpu sị, \'Ị gọziri agọzi n\'ime ụmụ nwanyị, a gọzikwara nwa nke afọ gị!\'" (Luk 1:41-42)\n\nMkpụrụ: Ịhụ Mmadụ n\'Anya',
                'Ọmụmụ nke Jesu: "Ọ mụrụ nwa nwoke ya nke mbụ, kechie ya n\'akwa, ma tinye ya n\'ihe ebe anụ na-eri nri, n\'ihi na ọ dịghị ohere dịịrị ha n\'ụlọ ndị ọbịa." (Luk 2:7)\n\nMkpụrụ: Ịbụ Ogbenye na Mmụọ',
                'Ngosi nke Jesu n\'Ụlọ Nsọ: "Mgbe ụbọchị ha ga-eme emume ịdị ọcha dịka iwu Mozis siri dị ruru, ha kpọọrọ ya gaa Jerusalem ka ha gosi ya Onyenwe anyị." (Luk 2:22)\n\nMkpụrụ: Ige Ntị na Iwu Chineke',
                'Nchọta nke Jesu n\'Ụlọ Nsọ: "Mgbe ụbọchị atọ gasịrị, ha hụrụ ya n\'ụlọ nsọ, ka ọ nọ n\'etiti ndị nkuzi, na-ege ha ntị ma na-ajụ ha ajụjụ." (Luk 2:46)\n\nMkpụrụ: Ọṅụ na Jesu'
            ]
        },
        luminous: {
            id: 'luminous',
            name: 'Ihe Omimi nke Ihe',
            days: [4],
            passages: [
                'Baptism nke Jesu na Jọdan: "Otu olu sitere n\'eluigwe sị, \'Nke a bụ Ọkpara m m hụrụ n\'anya, onye ihe ya na-atọ m ụtọ.\'" (Matiu 3:17)\n\nMkpụrụ: Imeghe Obi nye Mmụọ Nsọ',
                'Agbamakwụkwọ na Kana: "Nne ya gwara ndị na-ejere ya ozi, \'Ihe ọ bụla ọ gwara unu, mee nụ ya.\'" (Jọn 2:5)\n\nMkpụrụ: Ijekwuru Jesu site na Maria',
                'Nkwupụta nke Alaeze Chineke: "Oge eruola, Alaeze Chineke dị nso; chegharịanụ, ma kwere n\'Ozi Ọma." (Mak 1:15)\n\nMkpụrụ: Nchegharị na Okwukwe',
                'Mgbanwe nke Jesu: "Ọ gbanwere n\'ihu ha; ihu ya na-enwu ka anyanwụ, uwe ya wee dị ọcha ka ìhè." (Matiu 17:2)\n\nMkpụrụ: Ọchịchọ nke Ịdị Nsọ',
                'Ntọala nke Eucharist: "Jesu weere achịcha, gọzie ya, nyawasịa ya; o wee nye ndị na-eso ụzọ ya sị, \'Naranụ, rie; nke a bụ ahụ m.\'" (Matiu 26:26)\n\nMkpụrụ: Ofufe nke Eucharist'
            ]
        },
        sorrowful: {
            id: 'sorrowful',
            name: 'Ihe Omimi nke Ihe Mwute',
            days: [2, 5],
            passages: [
                'Ahụhụ n\'Ubi Gethsemane: "O nwere oké mwute n\'obi, o kpesie ekpere ike karị; ọsụsọ ya wee dịka nnukwu mkpụrụ ọbara na-adada n\'ala." (Luk 22:44)\n\nMkpụrụ: Nchegharị maka Mmehie',
                'Ịpia Jesu Ihe: "Mgbe ahụ Paịlet kpọọrọ Jesu ma pịa ya ihe." (Jọn 19:1)\n\nMkpụrụ: Imerie Anụ Ahụ',
                'Ikpube Jesu Okpu Ogwu: "Ndị agha kpara okpu ogwu kpubere ya n\'isi, yikwasịkwa ya uwe odo odo." (Jọn 19:2)\n\nMkpụrụ: Obi Ike',
                'Ibu Obe: "Jesu buuru obe ya pụọ, gaa n\'ebe a na-akpọ Ebe Okpokoro Isi." (Jọn 19:17)\n\nMkpụrụ: Ndidi',
                'Ọnwụ Jesu n\'Obe: "Jesu ji oké olu tie mkpu sị, \'Nna, n\'aka Gị ka m na-enyefe mmụọ m.\' Mgbe o kwusịrị nke a, o wee kubie ume." (Luk 23:46)\n\nMkpụrụ: Ịhụ Chineke n\'Anya na Nzọpụta nke Mkpụrụ Obi'
            ]
        },
        glorious: {
            id: 'glorious',
            name: 'Ihe Omimi nke Ebube',
            days: [0, 3],
            passages: [
                'Mbilite n\'Ọnwụ: "Ọ nọghị ebe a; n\'ihi na o bilitewo dịka o kwuru." (Matiu 28:6)\n\nMkpụrụ: Okwukwe',
                'Nrịgo Elu: "Mgbe Onyenwe anyị Jesu gwara ha okwu, a kpọọrọ ya gaa n\'eluigwe, o wee nọdụ n\'aka nri nke Chineke." (Mak 16:19)\n\nMkpụrụ: Olileanya',
                'Mgbadate nke Mmụọ Nsọ: "Ha niile wee jupụta na Mmụọ Nsọ, malite ikwu okwu n\'asụsụ ndị ọzọ." (Ọrụ Ndị Ozi 2:4)\n\nMkpụrụ: Ịhụ Chineke n\'Anya',
                'Mbuli Elu nke Maria: "N\'ihi na Onye Pụrụ Ime Ihe Niile emerewo m nnukwu ihe; aha ya dịkwa nsọ." (Luk 1:49)\n\nMkpụrụ: Amara nke Ọnwụ Ọma',
                'Okpu Eze nke Maria: "A hụrụ nnukwu ihe ịrịba ama n\'eluigwe: otu nwanyị nke yi anyanwụ dịka uwe, ọnwa nọkwa n\'okpuru ụkwụ ya, na okpu nke kpakpando iri na abụọ n\'isi ya." (Mkpughe 12:1)\n\nMkpụrụ: Ntụkwasị Obi na Maria'
            ]
        }
    }
};
