import type { LocalizationData } from '$lib/types';

export const fil: LocalizationData = {
    lang: 'fil-PH',
    seo: {
        title: 'Banal na Rosaryo',
        description:
            'Magdasal ng Rosaryo. Mabilis, libre, at swak sa mobile. Isang modernong web app na open source at madaling gamitin sa anumang device.'
    },
    ui: {
        start_button: 'Magsimulang Magdasal',
        pick_mystery: 'Palitan ang Misteryo',
        footer_made_by: 'GAWA NI',
        recommended_mystery: 'Misteryo Ngayon',
        pray_button_prefix: 'Dasalin ang ',
        change_theme: 'Palitan ang Tema',
        liturgical: {
            // Seasons
            advent: 'Adbyento',
            christmas: 'Pasko',
            lent: 'Kwaresma',
            triduum: 'Triduum ng Pasko ng Pagkabuhay',
            easter: 'Pasko ng Pagkabuhay',
            ordinary: 'Karaniwang Panahon',
            // Feasts
            epiphany: 'Ang Pagpapakita ng Panginoon',
            presentation: 'Ang Pagdadala kay Hesus sa Templo',
            annunciation: 'Ang Pagbati kay Maria',
            transfiguration: 'Ang Pagbabagong-anyo',
            assumption: 'Ang Pag-aakyat sa Langit kay Maria',
            all_saints: 'Araw ng mga Santo',
            all_souls: 'Araw ng mga Kaluluwa',
            immaculate_conception: 'Ang Kalinis-linisang Paglilihi',
            guadalupe: 'Mahal na Birhen ng Guadalupe',
            mother_of_god: 'Maria, Ina ng Diyos',
            ash_wednesday: 'Miyerkules ng Abo',
            palm_sunday: 'Linggo ng Palaspas',
            holy_thursday: 'Huwebes Santo',
            good_friday: 'Biyernes Santo',
            holy_saturday: 'Sabado de Gloria',
            easter_sunday: 'Linggo ng Pagkabuhay',
            divine_mercy: 'Linggo ng Awa ng Diyos',
            ascension: 'Ang Pag-akyat sa Langit ng Panginoon',
            pentecost: 'Pentekostes',
            trinity: 'Banal na Santatlo',
            corpus_christi: 'Kabanal-banalang Katawan at Dugo',
            sacred_heart: 'Mahal na Puso ni Hesus',
            christ_king: 'Kristong Hari',
            gaudete: 'Linggo ng Gaudete',
            laetare: 'Linggo ng Laetare',
            st_joseph: 'San Jose',
            st_peter_paul: 'San Pedro at San Pablo',
            exaltation_cross: 'Pagtatampok sa Banal na Krus',
            archangels: 'Mga Arkanghel',
            lateran_basilica: 'Dedikasyon ng Basilika ng Laterano',
            holy_family: 'Banal na Mag-anak',
            nativity_john_baptist: 'Kapanganakan ni San Juan Bautista',
            baptism_lord: 'Ang Pagbibinyag sa Panginoon'
        },
        modes: {
            digital: {
                title: 'Digital na Rosaryo',
                desc: 'Subaybayan ang iyong pagdarasal sa screen.'
            },
            physical: {
                title: 'Hawak na Rosaryo',
                desc: 'May sarili akong Rosaryo. Ipakita lang ang mga dasal.'
            },
            mysteries: {
                title: 'Mga Misteryo Lamang',
                desc: 'Listahan ng 5 misteryo'
            }
        },
        actions: {
            next: 'Susunod',
            back: 'Bumalik',
            exit: 'UMALIS?'
        },
        announce: 'Ipahayag ang Misteryo',
        sections: {
            intro: 'Panimula',
            decade: 'Misteryo',
            conclusion: 'Pangwakas'
        },
        ordinals: ['Ika-1', 'Ika-2', 'Ika-3', 'Ika-4', 'Ika-5'],
        menus: {
            language: 'Piliin ang Wika',
            mystery: 'Piliin ang Misteryo',
            mode: 'Piliin ang Mode',
            theme: 'Piliin ang Tema',
            jump_to_section: 'Pumunta sa Bahagi'
        },
        themes: {
            description: 'I-customize ang itsura. Hindi nito apektado ang liturhikal na petsa.',
            ordinary: 'Karaniwan',
            christmas_easter: 'Pasko / Pagkabuhay',
            advent_lent: 'Adbyento / Kwaresma',
            pentecost: 'Pentekostes',
            gaudete: 'Gaudete',
            requiem: 'Requiem',
            gold: 'Ginto',
            silver: 'Pilak',
            white: 'Puti',
            red: 'Pula',
            purple: 'Lila',
            rose: 'Rosas',
            black: 'Itim',
            green: 'Berde'
        }
    },
    prayers: {
        sign_of_cross: {
            id: 'sign_of_cross',
            title: 'Ang Tanda ng Krus',
            content: 'Sa ngalan ng Ama, at ng Anak, at ng Espiritu Santo. Amen.'
        },
        creed: {
            id: 'creed',
            title: 'Sumasampalataya Ako',
            content:
                'Sumasampalataya ako sa Diyos Amang makapangyarihan sa lahat, na may gawa ng langit at lupa. Sumasampalataya naman ako kay Hesukristo, iisang Anak ng Diyos, Panginoon nating lahat. Nagkatawang-tao Siya lalang ng Espiritu Santo, ipinanganak ni Santa Mariang Birhen. Pinagpakasakit ni Poncio Pilato, ipinako sa krus, namatay, inilibing. Nanaog sa kinaroroonan ng mga yumao. Nang may ikatlong araw nabuhay na mag-uli. Umakyat sa langit, naluluklok sa kanan ng Diyos Amang makapangyarihan sa lahat. Doon magmumulang paririto at huhukom sa nangabubuhay at nangamatay na tao. Sumasampalataya naman ako sa Diyos Espiritu Santo, sa banal na Simbahang Katolika, sa kasamahan ng mga banal, sa kapatawaran ng mga kasalanan, sa pagkabuhay na muli ng nangamatay na tao, at sa buhay na walang hanggan. Amen.'
        },
        our_father: {
            id: 'our_father',
            title: 'Ama Namin',
            content:
                'Ama namin, sumasalangit Ka, Sambahin ang ngalan Mo. Mapasaamin ang kaharian Mo. Sundin ang loob Mo dito sa lupa para nang sa langit. Bigyan Mo kami ngayon ng aming kakanin sa araw-araw. At patawarin Mo kami sa aming mga sala, para nang pagpapatawad namin sa nagkakasala sa amin. At huwag Mo kaming ipahintulot sa tukso, at iadya Mo kami sa lahat ng masama. Amen.'
        },
        hail_mary: {
            id: 'hail_mary',
            title: 'Aba Ginoong Maria',
            content:
                'Aba Ginoong Maria, napupuno ka ng grasya, ang Panginoong Diyos ay sumasaiyo. Bukod kang pinagpala sa babaeng lahat at pinagpala naman ang iyong anak na si Hesus. Santa Maria, Ina ng Diyos, ipanalangin mo kaming makasalanan ngayon at kung kami\'y mamamatay. Amen.'
        },
        glory_be: {
            id: 'glory_be',
            title: 'Luwalhati',
            content:
                'Luwalhati sa Ama, at sa Anak, at sa Espiritu Santo. Kapara noong unang-una, ngayon at magpakailanman, at magpasawalang hanggan. Amen.'
        },
        fatima: {
            id: 'fatima',
            title: 'Panalangin ng Fatima',
            content:
                'O Hesus ko, patawarin Mo kami sa aming mga sala. Iligtas Mo kami sa apoy ng impiyerno. Hanguin Mo ang mga kaluluwa sa purgatoryo, lalung-lalo na yaong mga higit na nangangailangan ng Iyong awa.'
        },
        hail_holy_queen: {
            id: 'hail_holy_queen',
            title: 'Aba Po Santa Mariang Hari',
            content:
                'Aba Po Santa Mariang Hari, Ina ng Awa. Ikaw ang kabuhayan at katamisan; Aba pinananaligan ka namin. Ikaw nga ang tinatawagan namin, pinapanaw na taong anak ni Eba. Ikaw rin ang pinagbunbuntuhang hininga namin ng aming pagtangis at pag-iyak dito sa lupang bayang kahapis-hapis. Ay aba, pintakasi ka namin, ilingon mo sa amin, ang mga mata mong maawain, at saka kung matapos yaring pagpanaw sa amin, ipakita mo sa amin ang iyong Anak na si Hesus. Santa Maria, Ina ng Diyos, maawain, maalam at matamis na Birhen.\n\nV. Ipanalangin mo kami, O Santang Ina ng Diyos.\nR. Nang kami\'y maging karapat-dapat makinabang sa mga pangako ni Kristo.'
        },
        closing_prayer: {
            id: 'closing_prayer',
            title: 'Pangwakas na Panalangin',
            content:
                'Manalangin tayo. O Diyos, na ang Iyong Anak na bugtong, sa pamamagitan ng Kanyang buhay, pagkamatay at pagkabuhay na mag-uli, ay ipinagtamo sa amin ang gantimpalang buhay na walang hanggan, ipagkaloob Mo, isinasamo namin, na sa pagninilaynitong mga misteryo ng Kabanal-banalang Rosaryo ng Pinagpalang Birhen Maria, matularan namin ang kanilang nilalaman at makamtan namin ang kanilang ipinangako. Alang-alang kay Kristong aming Panginoon. Amen.'
        }
    },
    mysteries: {
        joyful: {
            id: 'joyful',
            name: 'Misteryo ng Tuwa',
            days: [1, 6],
            passages: [
                'Ang Pagbati ng Anghel sa Mahal na Birhen: "Sumagot si Maria: \'Ako\'y alipin ng Panginoon. Mangyari nawa sa akin ang iyong sinabi.\'" (Lucas 1, 38)\n\nBunga ng Misteryo: Pagpapakumbaba',
                'Ang Pagdalaw ng Birhen Maria kay Santa Isabel: "Bukod kang pinagpala sa mga babae, at pinagpala naman ang bunga ng iyong tiyan!" (Lucas 1, 42)\n\nBunga ng Misteryo: Pagmamahal sa Kapwa',
                'Ang Pagsilang ni Hesus sa Belen: "Isinilang niya ang kanyang panganay, binalot ng lampin at inihiga sa sabsaban." (Lucas 2, 7)\n\nBunga ng Misteryo: Pagiging Mahirap sa Espiritu',
                'Ang Paghahandog kay Hesus sa Templo: "Sapagkat nakita na ng aking mga mata ang iyong pagliligtas, na inihanda mo para sa lahat ng bansa." (Lucas 2, 30-31)\n\nBunga ng Misteryo: Pagtalima',
                'Ang Pagkatagpo kay Hesus sa Templo: "Pagkaraan ng tatlong araw, natagpuan nila si Hesus sa loob ng Templo, nakaupong kasama ng mga guro." (Lucas 2, 46)\n\nBunga ng Misteryo: Kagalakan sa paghanap sa Diyos'
            ]
        },
        luminous: {
            id: 'luminous',
            name: 'Misteryo ng Liwanag',
            days: [4],
            passages: [
                'Ang Pagbibinyag kay Hesus sa Ilog Jordan: "Ito ang minamahal kong Anak na lubos kong kinalulugdan!" (Mateo 3, 17)\n\nBunga ng Misteryo: Pagsasabuhay ng pangako sa Binyag',
                'Ang Pagpapahayag ni Hesus sa Kasalan sa Cana: "Sinabi ng kanyang ina sa mga naglilingkod, \'Gawin ninyo ang anumang sabihin niya sa inyo.\'" (Juan 2, 5)\n\nBunga ng Misteryo: Pagtitiwala sa Diyos',
                'Ang Pagpapahayag ng Kaharian ng Diyos: "Naganap na ang panahon; malapit na ang kaharian ng Diyos. Magsisi kayo at maniwala sa Magandang Balita." (Marcos 1, 15)\n\nBunga ng Misteryo: Pagbabalik-loob',
                'Ang Pagbabagong-anyo ni Hesus sa Bundok Tabor: "Nagbagong-anyo siya sa harap nila; nagliwanag na parang araw ang kanyang mukha at pumuting parang busilak ang kanyang damit." (Mateo 17, 2)\n\nBunga ng Misteryo: Pagnanais ng Kabanalan',
                'Ang Pagtatatag ng Banal na Eukaristiya: "Kunin ninyo at kanin; ito ang aking katawan." (Mateo 26, 26)\n\nBunga ng Misteryo: Pagsamba sa Eukaristiya'
            ]
        },
        sorrowful: {
            id: 'sorrowful',
            name: 'Misteryo ng Hapis',
            days: [2, 5],
            passages: [
                'Ang Pananalangin ni Hesus sa Halamanan: "Dala ng matinding hapis, siya\'y nanalangin nang lalong taimtim, at ang kanyang pawis ay naging parang malalaking patak ng dugo na pumapatak sa lupa." (Lucas 22, 44)\n\nBunga ng Misteryo: Pagsisisi sa Kasalanan',
                'Ang Paghampas kay Hesus sa Haliging Bato: "Kinuha ni Pilato si Hesus at ipinahagupit." (Juan 19, 1)\n\nBunga ng Misteryo: Pagtitimpi',
                'Ang Pagpuputong ng Koronang Tinik: "Nagsuot sila kay Hesus ng damit na kulay ube. Kumuha sila ng halamang matinik, ginawa itong korona at ipinutong sa kanya." (Marcos 15, 17)\n\nBunga ng Misteryo: Katapangan',
                'Ang Pagpapasan ng Krus: "Pinasan ni Hesus ang kanyang krus papunta sa lugar na tinatawag na Lugar ng Bungo." (Juan 19, 17)\n\nBunga ng Misteryo: Pagtitiis',
                'Ang Pagkamatay ni Hesus sa Krus: "Sumigaw nang malakas si Hesus, \'Ama, sa mga kamay mo\'y ipinagkakatiwala ko ang aking espiritu!\' At pagkasabi nito, nalagot ang kanyang hininga." (Lucas 23, 46)\n\nBunga ng Misteryo: Pagtitiyaga at Kaligtasan'
            ]
        },
        glorious: {
            id: 'glorious',
            name: 'Misteryo ng Luwalhati',
            days: [0, 3],
            passages: [
                'Ang Pagkabuhay na Muli ni Hesus: "Siya\'y muling nabuhay, wala na siya rito. Tingnan ninyo ang pinaglagyan sa kanya." (Marcos 16, 6)\n\nBunga ng Misteryo: Pananampalataya',
                'Ang Pag-akyat sa Langit ni Hesus: "Ang Panginoong Hesus ay iniakyat sa langit at lumuklok sa kanan ng Diyos." (Marcos 16, 19)\n\nBunga ng Misteryo: Pag-asa',
                'Ang Pagbaba ng Espiritu Santo: "Silang lahat ay napuspos ng Espiritu Santo at nagsimulang magsalita ng iba\'t ibang wika." (Gawa 2, 4)\n\nBunga ng Misteryo: Pag-ibig sa Diyos',
                'Ang Pag-aakyat sa Langit kay Maria: "Mapalad ka sa mga babae, anak, sa paningin ng Kataas-taasang Diyos." (Judit 13, 18)\n\nBunga ng Misteryo: Biyaya ng Mabuting Kamatayan',
                'Ang Pagpuputong ng Korona kay Maria: "At lumitaw sa langit ang isang dambuhalang tanda: isang babaing nararamtan ng araw, nakatuntong sa buwan, at may koronang labindalawang bituin sa ulo." (Pahayag 12, 1)\n\nBunga ng Misteryo: Pagtitiwala sa pamamagitan ni Maria'
            ]
        }
    }
};