import type { LocalizationData } from '$lib/types';

export const id: LocalizationData = {
    lang: 'id-ID',
    seo: {
        title: 'Rosario Suci',
        description:
            'Berdoa Rosario. Cepat, gratis, dan ramah seluler. Aplikasi web modern, open source, dan mudah digunakan di perangkat apa pun.'
    },
    ui: {
        start_button: 'Mulai Berdoa',
        pick_mystery: 'Ganti Peristiwa',
        footer_made_by: 'DIBUAT OLEH',
        recommended_mystery: 'Peristiwa Hari Ini',
        pray_button_prefix: 'Doakan: ',
        change_theme: 'Ganti Tema',
        liturgical: {
            // Seasons
            advent: 'Masa Adven',
            christmas: 'Masa Natal',
            lent: 'Masa Prapaskah',
            triduum: 'Trihari Suci',
            easter: 'Masa Paskah',
            ordinary: 'Masa Biasa',
            // Feasts
            epiphany: 'Hari Raya Penampakan Tuhan',
            presentation: 'Pesta Yesus Dipersembahkan di Bait Allah',
            annunciation: 'Hari Raya Kabar Sukacita',
            transfiguration: 'Pesta Yesus Menampakkan Kemuliaan-Nya',
            assumption: 'Hari Raya Santa Perawan Maria Diangkat ke Surga',
            all_saints: 'Hari Raya Semua Orang Kudus',
            all_souls: 'Peringatan Arwah Semua Orang Beriman',
            immaculate_conception: 'Hari Raya Santa Perawan Maria Dikandung Tanpa Noda',
            guadalupe: 'Pesta Santa Perawan Maria dari Guadalupe',
            mother_of_god: 'Hari Raya Santa Perawan Maria Bunda Allah',
            ash_wednesday: 'Rabu Abu',
            palm_sunday: 'Minggu Palma',
            holy_thursday: 'Kamis Putih',
            good_friday: 'Jumat Agung',
            holy_saturday: 'Sabtu Suci',
            easter_sunday: 'Minggu Paskah',
            divine_mercy: 'Minggu Kerahiman Ilahi',
            ascension: 'Hari Raya Kenaikan Tuhan',
            pentecost: 'Hari Raya Pentakosta',
            trinity: 'Hari Raya Tritunggal Mahakudus',
            corpus_christi: 'Hari Raya Tubuh dan Darah Kristus',
            sacred_heart: 'Hari Raya Hati Yesus yang Mahakudus',
            christ_king: 'Hari Raya Tuhan Kita Yesus Kristus Raja Semesta Alam',
            gaudete: 'Minggu Gaudete',
            laetare: 'Minggu Laetare',
            st_joseph: 'Hari Raya Santo Yusuf',
            st_peter_paul: 'Hari Raya Santo Petrus dan Paulus',
            exaltation_cross: 'Pesta Salib Suci',
            archangels: 'Pesta Para Malaikat Agung',
            lateran_basilica: 'Pesta Pemberkatan Basilika Lateran',
            holy_family: 'Pesta Keluarga Kudus',
            nativity_john_baptist: 'Hari Raya Kelahiran Santo Yohanes Pembaptis',
            baptism_lord: 'Pesta Pembaptisan Tuhan'
        },
        modes: {
            digital: {
                title: 'Manik Digital',
                desc: 'Lacak doa Anda di layar.'
            },
            physical: {
                title: 'Rosario Fisik',
                desc: 'Saya punya Rosario sendiri. Tampilkan doa saja.'
            },
            mysteries: {
                title: 'Hanya Peristiwa',
                desc: 'Daftar sederhana 5 peristiwa'
            }
        },
        actions: {
            next: 'Next',
            back: 'Back',
            exit: 'EXIT?'
        },
        announce: 'Peristiwa',
        sections: {
            intro: 'Pembukaan',
            decade: 'Peristiwa',
            conclusion: 'Penutup'
        },
        ordinals: ['Peristiwa 1', 'Peristiwa 2', 'Peristiwa 3', 'Peristiwa 4', 'Peristiwa 5'],
        menus: {
            language: 'Pilih Bahasa',
            mystery: 'Pilih Peristiwa',
            mode: 'Pilih Mode',
            theme: 'Pilih Tema',
            jump_to_section: 'Lompat ke Bagian'
        },
        themes: {
            description: 'Sesuaikan tampilan visual. Ini tidak mempengaruhi kalender liturgi.',
            ordinary: 'Biasa',
            christmas_easter: 'Natal / Paskah',
            advent_lent: 'Adven / Prapaskah',
            pentecost: 'Pentakosta',
            gaudete: 'Gaudete',
            requiem: 'Requiem',
            gold: 'Emas',
            silver: 'Perak',
            white: 'Putih',
            red: 'Merah',
            purple: 'Ungu',
            rose: 'Merah Muda',
            black: 'Hitam',
            green: 'Hijau'
        }
    },
    prayers: {
        sign_of_cross: {
            id: 'sign_of_cross',
            title: 'Tanda Salib',
            content: 'Dalam nama Bapa dan Putra dan Roh Kudus. Amin.'
        },
        creed: {
            id: 'creed',
            title: 'Syahadat Para Rasul',
            content:
                'Aku percaya akan Allah, Bapa yang mahakuasa, pencipta langit dan bumi; dan akan Yesus Kristus, Putra-Nya yang tunggal, Tuhan kita, yang dikandung dari Roh Kudus, dilahirkan oleh Perawan Maria; yang menderita sengsara dalam pemerintahan Pontius Pilatus, disalibkan, wafat, dan dimakamkan; yang turun ke tempat penantian, pada hari ketiga bangkit dari antara orang mati; yang naik ke surga, duduk di sebelah kanan Allah Bapa yang mahakuasa; dari situ Ia akan datang mengadili orang yang hidup dan yang mati. Aku percaya akan Roh Kudus, Gereja Katolik yang kudus, persekutuan para kudus, pengampunan dosa, kebangkitan badan, kehidupan kekal. Amin.'
        },
        our_father: {
            id: 'our_father',
            title: 'Bapa Kami',
            content:
                'Bapa kami yang ada di surga, dimuliakanlah nama-Mu; datanglah kerajaan-Mu; jadilah kehendak-Mu di atas bumi seperti di dalam surga. Berilah kami rezeki pada hari ini dan ampunilah kesalahan kami, seperti kami pun mengampuni yang bersalah kepada kami; dan janganlah masukkan kami ke dalam pencobaan, tetapi bebaskanlah kami dari yang jahat. Amin.'
        },
        hail_mary: {
            id: 'hail_mary',
            title: 'Salam Maria',
            content:
                'Salam Maria, penuh rahmat, Tuhan sertamu. Terpujilah engkau di antara wanita, dan terpujilah buah tubuhmu, Yesus. Santa Maria, bunda Allah, doakanlah kami yang berdosa ini sekarang dan waktu kami mati. Amin.'
        },
        glory_be: {
            id: 'glory_be',
            title: 'Kemuliaan',
            content:
                'Kemuliaan kepada Bapa dan Putra dan Roh Kudus, seperti pada permulaan, sekarang, selalu dan sepanjang segala abad. Amin.'
        },
        fatima: {
            id: 'fatima',
            title: 'Doa Fatima',
            content:
                'Ya Yesus yang baik, ampunilah dosa-dosa kami. Selamatkanlah kami dari api neraka, dan hantarlah jiwa-jiwa ke dalam surga, terutama mereka yang sangat membutuhkan kerahiman-Mu.'
        },
        hail_holy_queen: {
            id: 'hail_holy_queen',
            title: 'Salam Ya Ratu',
            content:
                'Salam, ya Ratu, Bunda yang berbelas kasih, hidup, hiburan dan harapan kami. Kami semua memanjatkan permohonan, kami amat susah, mengeluh, mengesah dalam lembah duka ini. Ya Ibunda, ya pelindung kami, limpahkanlah kasih sayang-Mu yang besar kepada kami. Dan Yesus, Putera-Mu yang terpuji itu, semoga Kau tunjukkan kepada kami. O Ratu, O Ibu, O Maria, Bunda Kristus.\n\nV. Doakanlah kami, ya Santa Bunda Allah.\nR. Supaya kami dapat menikmati janji Kristus.'
        },
        closing_prayer: {
            id: 'closing_prayer',
            title: 'Doa Penutup',
            content:
                'Marilah berdoa. Ya Allah, Putra-Mu yang tunggal, dengan hidup, kematian, dan kebangkitan-Nya, telah memperoleh kebahagiaan kekal bagi kami. Kami mohon, berikanlah kepada kami, yang merenungkan peristiwa-peristiwa ini dalam doa Rosario Suci Santa Perawan Maria, supaya kami dapat meneladani isinya dan memperoleh apa yang dijanjikannya. Demi Kristus Tuhan kami. Amin.'
        }
    },
    mysteries: {
        joyful: {
            id: 'joyful',
            name: 'Peristiwa Gembira',
            days: [1, 6],
            passages: [
                'Maria menerima kabar gembira dari Malaikat Gabriel: "Kata Maria: \'Sesungguhnya aku ini adalah hamba Tuhan; jadilah padaku menurut perkataanmu itu.\'" (Lukas 1:38)\n\nBuah Misteri: Kerendahan hati',
                'Maria mengunjungi Elisabet, saudaranya: "Diberkatilah engkau di antara semua perempuan dan diberkatilah buah rahimmu." (Lukas 1:42)\n\nBuah Misteri: Kasih kepada sesama',
                'Yesus dilahirkan di Betlehem: "Ia melahirkan seorang anak laki-laki, anaknya yang sulung, lalu dibungkusnya dengan lampin dan dibaringkannya di dalam palungan." (Lukas 2:7)\n\nBuah Misteri: Semangat kemiskinan',
                'Yesus dipersembahkan di Bait Allah: "Sebab mataku telah melihat keselamatan yang dari pada-Mu, yang telah Engkau sediakan di hadapan segala bangsa." (Lukas 2:30-31)\n\nBuah Misteri: Ketaatan',
                'Yesus diketemukan di Bait Allah: "Sesudah tiga hari mereka menemukan Dia dalam Bait Allah; Ia sedang duduk di tengah-tengah alim ulama, sambil mendengarkan mereka dan mengajukan pertanyaan-pertanyaan kepada mereka." (Lukas 2:46)\n\nBuah Misteri: Sukacita menemukan Yesus'
            ]
        },
        luminous: {
            id: 'luminous',
            name: 'Peristiwa Terang',
            days: [4],
            passages: [
                'Yesus dibaptis di Sungai Yordan: "Terdengarlah suara dari sorga yang mengatakan: \'Inilah Anak-Ku yang Kukasihi, kepada-Nyalah Aku berkenan.\'" (Matius 3:17)\n\nBuah Misteri: Kesetiaan pada janji baptis',
                'Yesus menyatakan diri-Nya dalam pesta pernikahan di Kana: "Ibu-Nya berkata kepada pelayan-pelayan: \'Apa yang dikatakan-Nya kepadamu, buatlah itu!\'" (Yohanes 2:5)\n\nBuah Misteri: Kepercayaan kepada Allah',
                'Yesus memberitakan Kerajaan Allah dan menyerukan pertobatan: "Waktunya telah genap; Kerajaan Allah sudah dekat. Bertobatlah dan percayalah kepada Injil!" (Markus 1:15)\n\nBuah Misteri: Pertobatan',
                'Yesus menampakkan kemuliaan-Nya: "Lalu Yesus berubah rupa di depan mata mereka; wajah-Nya bercahaya seperti matahari dan pakaian-Nya menjadi putih bersinar seperti terang." (Matius 17:2)\n\nBuah Misteri: Semangat kekudusan',
                'Yesus menetapkan Ekaristi: "Ambillah, makanlah, inilah tubuh-Ku." (Matius 26:26)\n\nBuah Misteri: Cinta akan Ekaristi'
            ]
        },
        sorrowful: {
            id: 'sorrowful',
            name: 'Peristiwa Sedih',
            days: [2, 5],
            passages: [
                'Yesus berdoa kepada Bapa-Nya di surga dalam sakratul maut: "Ia sangat ketakutan dan makin bersungguh-sungguh berdoa. Peluh-Nya menjadi seperti titik-titik darah yang bertetesan ke tanah." (Lukas 22:44)\n\nBuah Misteri: Penyesalan atas dosa',
                'Yesus didera: "Lalu Pilatus mengambil Yesus dan menyuruh orang menyesah Dia." (Yohanes 19:1)\n\nBuah Misteri: Matiraga',
                'Yesus dimahkotai duri: "Mereka mengenakan jubah ungu kepada-Nya, menganyam sebuah mahkota duri dan menaruhnya di atas kepala-Nya." (Markus 15:17)\n\nBuah Misteri: Keberanian moral',
                'Yesus memanggul salib-Nya: "Sambil memikul salib-Nya Ia pergi ke luar ke tempat yang bernama Tempat Tengkorak." (Yohanes 19:17)\n\nBuah Misteri: Kesabaran',
                'Yesus wafat di salib: "Lalu Yesus berseru dengan suara nyaring: \'Ya Bapa, ke dalam tangan-Mu Kuserahkan nyawa-Ku.\' Dan sesudah berkata demikian Ia menyerahkan nyawa-Nya." (Lukas 23:46)\n\nBuah Misteri: Pengampunan'
            ]
        },
        glorious: {
            id: 'glorious',
            name: 'Peristiwa Mulia',
            days: [0, 3],
            passages: [
                'Yesus bangkit dari kematian: "Ia tidak ada di sini, sebab Ia telah bangkit, sama seperti yang telah dikatakan-Nya." (Matius 28:6)\n\nBuah Misteri: Iman',
                'Yesus naik ke surga: "Sesudah Tuhan Yesus berbicara demikian kepada mereka, terangkatlah Ia ke sorga, lalu duduk di sebelah kanan Allah." (Markus 16:19)\n\nBuah Misteri: Harapan',
                'Roh Kudus turun atas para Rasul: "Maka penuhlah mereka dengan Roh Kudus, lalu mereka mulai berkata-kata dalam bahasa-bahasa lain." (Kisah Para Rasul 2:4)\n\nBuah Misteri: Kasih Allah dan sesama',
                'Maria diangkat ke surga: "Diberkatilah engkau, hai anakku, oleh Allah Yang Mahatinggi melebihi segala perempuan di bumi." (Yudit 13:18)\n\nBuah Misteri: Rahmat kematian yang bahagia',
                'Maria dimahkotai di surga: "Maka tampaklah suatu tanda besar di langit: Seorang perempuan berselubungkan matahari, dengan bulan di bawah kakinya dan sebuah mahkota dari dua belas bintang di atas kepalanya." (Wahyu 12:1)\n\nBuah Misteri: Kepercayaan pada doa Maria'
            ]
        }
    }
};
