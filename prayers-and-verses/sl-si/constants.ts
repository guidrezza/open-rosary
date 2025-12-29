import type { LocalizationData } from '$lib/types';

export const sl: LocalizationData = {
    lang: 'sl-SI',
    seo: {
        title: 'Sveti rožni venec',
        description:
            'Moli rožni venec. Hitro, brezplačno in prilagojeno za mobilne naprave. Sodobna odprtokodna spletna aplikacija, enostavna za uporabo na kateri koli napravi.'
    },
    ui: {
        start_button: 'Začni molitev',
        pick_mystery: 'Izberi skrivnost',
        footer_made_by: 'IZDELAL',
        recommended_mystery: 'Današnja skrivnost',
        pray_button_prefix: 'Moli: ',
        change_theme: 'Spremeni temo',
        liturgical: {
            // Seasons
            advent: 'Adventni čas',
            christmas: 'Božični čas',
            lent: 'Postni čas',
            triduum: 'Velikonočno tridnevje',
            easter: 'Velikonočni čas',
            ordinary: 'Čas med letom',
            // Feasts
            epiphany: 'Gospodovo razglašenje (Sveti trije kralji)',
            presentation: 'Gospodovo darovanje (Svečnica)',
            annunciation: 'Gospodovo oznanjenje',
            transfiguration: 'Gospodovo spremenjenje',
            assumption: 'Marijino vnebovzetje (Veliki šmaren)',
            all_saints: 'Vsi sveti',
            all_souls: 'Spomin vseh vernih rajnih',
            immaculate_conception: 'Brezmadežno spočetje Device Marije',
            guadalupe: 'Guadalupska Mati Božja',
            mother_of_god: 'Marija, Sveta Božja Mati',
            ash_wednesday: 'Pepelnična sreda',
            palm_sunday: 'Cvetna nedelja',
            holy_thursday: 'Veliki četrtek',
            good_friday: 'Veliki petek',
            holy_saturday: 'Velika sobota',
            easter_sunday: 'Velika noč',
            divine_mercy: 'Nedelja Božjega usmiljenja',
            ascension: 'Gospodov vnebohod',
            pentecost: 'Binkošti',
            trinity: 'Sveta Trojica',
            corpus_christi: 'Sveto Rešnje Telo in Kri',
            sacred_heart: 'Srce Jezusovo',
            christ_king: 'Jezus Kristus, Kralj vesoljstva',
            gaudete: '3. adventna nedelja (Gaudete)',
            laetare: '4. postna nedelja (Laetare)',
            st_joseph: 'Sveti Jožef',
            st_peter_paul: 'Sveti Peter in Pavel',
            exaltation_cross: 'Povišanje svetega Križa',
            archangels: 'Sveti nadangeli',
            lateran_basilica: 'Obletnica posvetitve lateranske bazilike',
            holy_family: 'Sveta družina',
            nativity_john_baptist: 'Rojstvo Janeza Krstnika',
            baptism_lord: 'Jezusov krst'
        },
        modes: {
            digital: {
                title: 'Digitalni rožni venec',
                desc: 'Spremljaj napredek na zaslonu.'
            },
            physical: {
                title: 'Fizični rožni venec',
                desc: 'Imam svoj rožni venec. Pokaži samo molitve.'
            },
            mysteries: {
                title: 'Samo skrivnosti',
                desc: 'Preprost seznam 5 skrivnosti'
            }
        },
        actions: {
            next: 'Next',
            back: 'Back',
            exit: 'EXIT?'
        },
        announce: 'Napoved skrivnosti',
        sections: {
            intro: 'Uvod',
            decade: 'Desetka',
            conclusion: 'Zaključek'
        },
        ordinals: ['1.', '2.', '3.', '4.', '5.'],
        menus: {
            language: 'Izberi jezik',
            mystery: 'Izberi skrivnost',
            mode: 'Izberi način',
            theme: 'Izberi temo',
            jump_to_section: 'Pojdi na razdelek'
        },
        themes: {
            description: 'Prilagodi videz. To ne vpliva na liturgični datum.',
            ordinary: 'Med letom',
            christmas_easter: 'Božič / Velika noč',
            advent_lent: 'Advent / Post',
            pentecost: 'Binkošti',
            gaudete: 'Gaudete',
            requiem: 'Rekviem',
            gold: 'Zlata',
            silver: 'Srebrna',
            white: 'Bela',
            red: 'Rdeča',
            purple: 'Vijolična',
            rose: 'Roza',
            black: 'Črna',
            green: 'Zelena'
        }
    },
    prayers: {
        sign_of_cross: {
            id: 'sign_of_cross',
            title: 'Križ',
            content: 'V imenu Očeta in Sina in Svetega Duha. Amen.'
        },
        creed: {
            id: 'creed',
            title: 'Apostolska veroizpoved',
            content:
                'Verujem v Boga, Očeta vsemogočnega, stvarnika nebes in zemlje. In v Jezusa Kristusa, sina njegovega edinega, Gospoda našega, ki je bil spočet od Svetega Duha, rojen iz Marije Device, trpel pod Poncijem Pilatom, križan bil, umrl in bil v grob položen, šel v predpekel, tretji dan od mrtvih vstal, šel v nebesa, sedi na desnici Boga Očeta vsemogočnega. Od ondod bo prišel sodit žive in mrtve. Verujem v Svetega Duha, sveto katoliško Cerkev, občestvo svetnikov, odpuščanje grehov, vstajenje mesa in večno življenje. Amen.'
        },
        our_father: {
            id: 'our_father',
            title: 'Oče naš',
            content:
                'Oče naš, ki si v nebesih, posvečeno bodi tvoje ime, pridi k nam tvoje kraljestvo, zgodi se tvoja volja kakor v nebesih tako na zemlji. Daj nam danes naš vsakdanji kruh in odpusti nam naše dolge, kakor tudi mi odpuščamo svojim dolžnikom, in ne vpelji nas v skušnjavo, temveč reši nas hudega. Amen.'
        },
        hail_mary: {
            id: 'hail_mary',
            title: 'Zdrava, Marija',
            content:
                'Zdrava, Marija, milosti polna, Gospod je s teboj, blagoslovljena si med ženami in blagoslovljen je sad tvojega telesa, Jezus. Sveta Marija, Mati Božja, prosi za nas grešnike zdaj in ob naši smrtni uri. Amen.'
        },
        glory_be: {
            id: 'glory_be',
            title: 'Slava Očetu',
            content:
                'Slava Očetu in Sinu in Svetemu Duhu, kakor je bilo v začetku, tako zdaj in vselej in vekomaj. Amen.'
        },
        fatima: {
            id: 'fatima',
            title: 'Fatimska molitev',
            content:
                'O Jezus, odpusti nam naše grehe, obvaruj nas peklenskega ognja in privedi v nebesa vse duše, posebno tiste, ki so najbolj potrebne tvojega usmiljenja.'
        },
        hail_holy_queen: {
            id: 'hail_holy_queen',
            title: 'Pozdravljena, Kraljica',
            content:
                'Pozdravljena, Kraljica, mati usmiljenja, življenje, veselje in upanje naše, pozdravljena! K tebi vpijemo izgnani Evini otroci, k tebi zdihujemo, žalostni in objokani v tej solzni dolini. Obrni torej, naša pomočnica, svoje milostljive oči v nas in pokaži nam po tem izgnanstvu Jezusa, blagoslovljeni sad tvojega telesa. O milostljiva, o dobrotljiva, o sveta Devica Marija.\n\nV. Prosi za nas, sveta Božja Porodnica.\nO. Da postanemo vredni Kristusovih obljub.'
        },
        closing_prayer: {
            id: 'closing_prayer',
            title: 'Sklepna molitev',
            content:
                'Molimo. Bog, tvoj edinorojeni Sin nam je s svojim življenjem, smrtjo in vstajenjem pridobil veselje večnega zveličanja. Podeli nam, prosimo, da bomo s premišljevanjem skrivnosti svetega rožnega venca blažene Device Marije posnemali, kar vsebujejo, in dosegli, kar obljubljajo. Po Kristusu, našem Gospodu. Amen.'
        }
    },
    mysteries: {
        joyful: {
            id: 'joyful',
            name: 'Veseli del',
            days: [1, 6],
            passages: [
                'Gospodovo oznanjenje: "Angel ji je rekel: ‚Ne boj se, Marija, kajti našla si milost pri Bogu. Glej, spočela boš in rodila sina in mu dala ime Jezus.‘" (Lk 1,30-31)\n\nSad skrivnosti: Ponižnost',
                'Marijin obisk pri Elizabeti: "Elizabeta je vzkliknila z močnim glasom in rekla: ‚Blagoslovljena ti med ženami in blagoslovljen sad tvojega telesa!‘" (Lk 1,42)\n\nSad skrivnosti: Ljubezen do bližnjega',
                'Jezusovo rojstvo: "Rodila je sina prvorojenca, ga povila v plenice in položila v jasli." (Lk 2,7)\n\nSad skrivnosti: Uboštvo duha',
                'Jezusovo darovanje v templju: "Simeon jih je blagoslovil in rekel Mariji, njegovi materi: ‚Glej, ta je postavljen v padec in vstajenje mnogih v Izraelu.‘" (Lk 2,34)\n\nSad skrivnosti: Čistost in pokorščina',
                'Jezusa najdejo v templju: "Po treh dneh so ga našli v templju. Sedel je med učitelji, jih poslušal in vpraševal." (Lk 2,46)\n\nSad skrivnosti: Veselje do Božje službe'
            ]
        },
        luminous: {
            id: 'luminous',
            name: 'Svetli del',
            days: [4],
            passages: [
                'Jezusov krst v Jordanu: "Glej, glas iz nebes je rekel: ‚Ta je moj ljubljeni Sin, nad katerim imam veselje.‘" (Mt 3,17)\n\nSad skrivnosti: Vdanost v Božjo voljo',
                'Jezusova samo-razodetje na svatbi v Kani: "Njegova mati je rekla strežnikom: ‚Karkoli vam reče, storite.‘" (Jn 2,5)\n\nSad skrivnosti: Zaupanje v Boga',
                'Jezus oznanja Božje kraljestvo: "Čas se je dopolnil in Božje kraljestvo se je približalo. Spreobrnite se in verujte evangeliju!" (Mr 1,15)\n\nSad skrivnosti: Spreobrnjenje',
                'Jezusovo spremenjenje na gori: "Pred njimi se je spremenil. Njegov obraz je zasijal kot sonce in njegova oblačila so postala bela kot luč." (Mt 17,2)\n\nSad skrivnosti: Hrepenenje po nebesih',
                'Jezus postavi sveto evharistijo: "Vzemite, jejte, to je moje telo. Pijte iz njega vsi, to je namreč moja kri zaveze." (Mt 26,26-28)\n\nSad skrivnosti: Hvaležnost za sv. evharistijo'
            ]
        },
        sorrowful: {
            id: 'sorrowful',
            name: 'Žalostni del',
            days: [2, 5],
            passages: [
                'Jezus poti krvavi pot: "V smrtnem boju je še bolj goreče molil. Njegov pot je postal kakor kaplje krvi, ki padajo na zemljo." (Lk 22,44)\n\nSad skrivnosti: Kesanje grehov',
                'Jezus je bičan: "Tedaj je Pilat vzel Jezusa in ga dal bičati." (Jn 19,1)\n\nSad skrivnosti: Čistost telesa',
                'Jezus je s trnjem kronan: "Spletli so krono iz trnja in mu jo dali na glavo, v desnico pa trst." (Mt 27,29)\n\nSad skrivnosti: Premagovanje napuha',
                'Jezus nese težki križ: "Nesel je sam svoj križ in šel ven na kraj, ki se imenuje Kraj lobanje, po hebrejsko Golgota." (Jn 19,17)\n\nSad skrivnosti: Potrpežljivost v trpljenju',
                'Jezus je križan: "Jezus je z močnim glasom zaklical: ‚Oče, v tvoje roke izročam svojega duha.‘ In ko je to rekel, je izdihnil." (Lk 23,46)\n\nSad skrivnosti: Odpuščanje in ljubezen do sovražnikov'
            ]
        },
        glorious: {
            id: 'glorious',
            name: 'Častitljivi del',
            days: [0, 3],
            passages: [
                'Jezus vstane od mrtvih: "Ni ga tukaj! Vstal je, kakor je rekel. Pridite in poglejte kraj, kamor so ga položili." (Mt 28,6)\n\nSad skrivnosti: Trdna vera',
                'Jezus gre v nebesa: "Gospod Jezus je bil vzet v nebo in je sédel na Božjo desnico." (Mr 16,19)\n\nSad skrivnosti: Hrepenenje po nebesih',
                'Sveti Duh pride nad apostole: "Vsi so bili napolnjeni s Svetim Duhom in začeli so govoriti v tujih jezikih." (Apd 2,4)\n\nSad skrivnosti: Razsvetljenje Svetega Duha',
                'Marija je vzeta v nebesa: "Velike reči mi je storil On, ki je mogočen, in sveto je njegovo ime." (Lk 1,49)\n\nSad skrivnosti: Srečna zadnja ura',
                'Marija je kronana za kraljico: "Na nebu se je prikazalo veliko znamenje: žena, ogrnjena s soncem, in luna pod njenimi nogami, na njeni glavi pa venec dvanajstih zvezd." (Raz 12,1)\n\nSad skrivnosti: Zaupanje v Marijino varstvo'
            ]
        }
    }
};
