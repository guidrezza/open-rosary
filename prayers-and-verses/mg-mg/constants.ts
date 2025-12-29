import type { LocalizationData } from '$lib/types';

export const mg: LocalizationData = {
    lang: 'mg-MG',
    seo: {
        title: 'Raozery Masina',
        description:
            'Mivavaha ny Raozery. Haingana, maimaim-poana, ary mety amin\'ny finday. Fitaovana maoderina, "open source" ary mora ampiasaina amin\'ny fitaovana rehetra.'
    },
    ui: {
        start_button: 'Hanomboka hivavaka',
        pick_mystery: 'Hanova Mistery',
        footer_made_by: 'NATAON\'I',
        recommended_mystery: 'Mistery androany',
        pray_button_prefix: 'Vavaka: ',
        change_theme: 'Hanova endrika',
        liturgical: {
            // Seasons
            advent: 'Fiaviana (Advent)',
            christmas: 'Noely',
            lent: 'Karemy',
            triduum: 'Triduum Paskaly',
            easter: 'Paka',
            ordinary: 'Fotoana tsotra',
            // Feasts
            epiphany: 'Epifania (Fisehoan\'ny Tompo)',
            presentation: 'Fanehoana ny Tompo',
            annunciation: 'Filazana',
            transfiguration: 'Fiovan-tarehy',
            assumption: 'Fampakarana an\'i Masina Maria',
            all_saints: 'Fetin\'ny Olomasina rehetra',
            all_souls: 'Fetin\'ny Maty',
            immaculate_conception: 'Famoronana tsy azon-keloka',
            guadalupe: 'Notre Dame de Guadalupe',
            mother_of_god: 'Masina Maria Renin\'Andriamanitra',
            ash_wednesday: 'Alarobian\'ny Lavenona',
            palm_sunday: 'Alahadin\'ny Sampan-kazo',
            holy_thursday: 'Alakamisy Masina',
            good_friday: 'Zoma Masina',
            holy_saturday: 'Sabotsy Masina',
            easter_sunday: 'Alahadin\'ny Paka',
            divine_mercy: 'Alahadin\'ny Famindram-po',
            ascension: 'Fiakaran\'ny Tompo',
            pentecost: 'Pantekoty',
            trinity: 'Trinite Masina',
            corpus_christi: 'Vatana sy Ran\'i Kristy',
            sacred_heart: 'Fo Masin\'i Jesoa',
            christ_king: 'Kristy Mpanjaka',
            gaudete: 'Alahady Gaudete',
            laetare: 'Alahady Laetare',
            st_joseph: 'Masindahy Zôzèfa',
            st_peter_paul: 'Masindahy Piera sy Paoly',
            exaltation_cross: 'Fisandratan\'ny Hazofijaliana',
            archangels: 'Arkanjely Masina',
            lateran_basilica: 'Fitokanana ny Bazilikan\'i Latran',
            holy_family: 'Fianakaviana Masina',
            nativity_john_baptist: 'Fahaterahan\'i Masindahy Joany Batista',
            baptism_lord: 'Batemin\'ny Tompo'
        },
        modes: {
            digital: {
                title: 'Vavaka Dijitaly',
                desc: 'Araho eo amin\'ny efijery ny vavaka.'
            },
            physical: {
                title: 'Raozery',
                desc: 'Manana ny sapileko aho. Asehoy ny vavaka fotsiny.'
            },
            mysteries: {
                title: 'Mistery ihany',
                desc: 'Lisitra tsotra misy ireo mistery 5'
            }
        },
        actions: {
            next: 'Next',
            back: 'Back',
            exit: 'EXIT?'
        },
        announce: 'Filazana ny Mistery',
        sections: {
            intro: 'Fampidirana',
            decade: 'Dizaine (Folo)',
            conclusion: 'Famaranana'
        },
        ordinals: ['Voalohany', 'Faha-2', 'Faha-3', 'Faha-4', 'Faha-5'],
        menus: {
            language: 'Hisafidy teny',
            mystery: 'Hisafidy Mistery',
            mode: 'Hisafidy fomba',
            theme: 'Hisafidy loko',
            jump_to_section: 'Handeha ho any amin\'ny'
        },
        themes: {
            description: 'Hanova ny endrika hita maso. Tsy manova ny daty litorjika izany.',
            ordinary: 'Tsotra',
            christmas_easter: 'Noely / Paka',
            advent_lent: 'Fiaviana / Karemy',
            pentecost: 'Pantekoty',
            gaudete: 'Gaudete',
            requiem: 'Requiem',
            gold: 'Volamena',
            silver: 'Volafotsy',
            white: 'Fotsy',
            red: 'Mena',
            purple: 'Volomparasy',
            rose: 'Mavokely',
            black: 'Mainty',
            green: 'Maitso'
        }
    },
    prayers: {
        sign_of_cross: {
            id: 'sign_of_cross',
            title: 'Famantarana ny Hazofijaliana',
            content: 'Amin\'ny anaran\'ny Ray sy ny Zanaka sy ny Fanahy Masina. Amen.'
        },
        creed: {
            id: 'creed',
            title: 'Izaho Mino (Credo)',
            content:
                'Izaho mino an\'Andriamanitra, Ray mahefa ny zavatra rehetra, Nahary ny lanitra sy ny tany. Sy an\'i Jesoa Kristy, Zanany tokana Tompontsika. Izay noforonina tamin\'ny Fanahy Masina, naterak\'i Maria Virjiny, nijaly tamin\'ny andron\'i Pontsy Pilaty, nofantsihana tamin\'ny hazofijaliana, maty dia nalevina, nidina tany amin\'ny toeran\'ny maty, nitsangan-ko velona tamin\'ny andro fahatelo, niakatra any an-danitra, mipetraka eo ankavanan\'Andriamanitra Ray mahefa ny zavatra rehetra, avy any Izy mbola ho avy hitsara ny velona sy ny maty. Izaho mino ny Fanahy Masina, ny Eglizy Katolika Masina, ny fiombonan\'ny Olomasina, ny famelan-keloka, ny hitsanganan\'ny nofo ho velona, ary ny fiainana mandrakizay. Amen.'
        },
        our_father: {
            id: 'our_father',
            title: 'Rainay ô',
            content:
                'Rainay any an-danitra, hohamasinina anie ny anaranao, ho tonga anie ny fanjakanao, hotanterahina anie ny sitraponao, ety an-tany tahaka ny any an-danitra. Omeo anay anio ny hanina sahaza ho anay, avelao ny helokay, tahaka ny amelanay izay nanao ratsy taminay, ary aza avelanao ho azon\'ny fakam-panahy izahay, fa manafaha anay amin\'ny ratsy. Amen.'
        },
        hail_mary: {
            id: 'hail_mary',
            title: 'Arahaba ry Maria',
            content:
                'Arahaba ry Maria, feno hasina, ny Tompo ao aminao. Ny vehivavy rehetra, ianao no nosoavina indrindra, ary i Jesoa, nateraky ny kibonao, no nosoavina. Masina Maria, Renin\'Andriamanitra, mivavaha ho anay mpanota, ankehitriny ary amin\'ny ora hahafatesanay. Amen.'
        },
        glory_be: {
            id: 'glory_be',
            title: 'Voninahitra',
            content:
                'Voninahitra anie ho an\'ny Ray sy ny Zanaka sy ny Fanahy Masina. Tahaka ny taloha sy ankehitriny ary mandrakizay. Amen.'
        },
        fatima: {
            id: 'fatima',
            title: 'Vavaka Fatima',
            content:
                'Ry Jesoanay ô, avelao ny helokay, arovy amin\'ny afon\'ny afobe izahay, tariho ho any an-danitra ny fanahy rehetra, indrindra fa ireo izay mila ny famindram-ponao.'
        },
        hail_holy_queen: {
            id: 'hail_holy_queen',
            title: 'Salama, ry Mpanjakavavy',
            content:
                'Salama, ry Mpanjakavavy, Renin\'ny famindram-po, fiainanay sy hamamianay ary fanantenanay, salama. Ianao no antsoinay, ry zanak\'i Eva voasese-tany. Ianao no isentoanay, mitaraina sy mitomany eto amin\'ity lohasahan-dranomaso ity izahay. Koa raiso izahay, ry Mpisolovava anay, ary mba topazo ny masonao feno antra izahay. Ary rahefa afaka ny sesitany, dia mba asehoy anay i Jesoa, ilay nateraky ny kibonao nosoavina. Ry be indrafo, ry be fitiavana, ry Maria Virjiny mamy indrindra.\n\nV. Mivavaha ho anay, ry Masina Renin\'Andriamanitra.\nR. Mba ho mendrika ny fampanantenan\'i Kristy izahay.'
        },
        closing_prayer: {
            id: 'closing_prayer',
            title: 'Vavaka Famaranana',
            content:
                'Andeha isika hivavaka. Andriamanitra ô, ny Zanakao lahitokana, tamin\'ny fiainany sy ny fahafatesany ary ny fitsanganany tamin\'ny maty, no nahazoanay ny valisoa amin\'ny fiainana mandrakizay; koa mihanta aminao izahay: enga anie izahay misaintsaina ireo mistery ireo amin\'ny Raozery Masin\'i Masina Maria Virjiny, ka hianatra izay voalazany ary hahazo izay ampanantenainy. Amin\'ny alalan\'i Kristy Tomponay. Amen.'
        }
    },
    mysteries: {
        joyful: {
            id: 'joyful',
            name: 'Mistery Fifaliana',
            days: [1, 6],
            passages: [
                'Ny filazana tamin\'i Masina Maria: "Ary hoy ilay Anjely taminy: Aza matahotra, ry Maria, fa sitrak\'Andriamanitra ianao. Hitoe-jaza ianao ka hiteraka zazalahy, ary Jesoa no hataonao anarany." (Lioka 1, 30-31)\n\nVokatry ny Mistery: Ny fanetren-tena',
                'Ny famangian\'i Masina Maria an\'i Masimbavy Elizabeta: "Niaraka tamin\'izay dia feno ny Fanahy Masina i Elizabeta, ka niantso tamin\'ny feo mahery hoe: Nosoavina noho ny vehivavy rehetra ianao, ary nosoavina ny hateraky ny kibonao." (Lioka 1, 41-42)\n\nVokatry ny Mistery: Ny fitiava-namana',
                'Ny nahaterahan\'i Jesoa: "Niteraka ny Zanany lahimatoa izy, nofeheziny tamin\'ny lamba, dia nampandriany teo amin\'ny fihinanam-bilona." (Lioka 2, 7)\n\nVokatry ny Mistery: Ny fitiavana ny fahantrana',
                'Ny nanolorana ny Zazakely Jesoa tao an-tempoly: "Entinao ny famonjena, izay namboarinao teo anatrehan\'ny firenena rehetra." (Lioka 2, 30-31)\n\nVokatry ny Mistery: Ny fankatoavana sy ny fahadiovana',
                'Ny nahitana an\'i Jesoa tao an-tempoly: "Rehefa afaka hateloana, dia hitany tao an-tempoly Izy, nipetraka teo afovoan\'ny mpampianatra, nihaino sy nanontany azy." (Lioka 2, 46)\n\nVokatry ny Mistery: Ny fitadiavana an\'Andriamanitra'
            ]
        },
        luminous: {
            id: 'luminous',
            name: 'Mistery Fahazavana',
            days: [4],
            passages: [
                'Ny nanaovam-batemy an\'i Jesoa: "Ary nisy feo avy any an-danitra nanao hoe: Ity no Zanako malalako, izay ankasitrahako indrindra." (Matio 3, 17)\n\nVokatry ny Mistery: Ny fahasoavan\'ny Batemy',
                'Ny fampakaram-bady tao Kanà: "Hoy ny Reniny tamin\'ny mpanompo: Ataovy izay rehetra holazainy aminareo." (Joany 2, 5)\n\nVokatry ny Mistery: Ny fitokiana an\'Andriamanitra',
                'Ny nitorian\'i Jesoa ny Fanjakan\'Andriamanitra: "Efa tonga ny fotoana, ary efa akaiky ny fanjakan\'Andriamanitra; mibebaha ianareo ary minoa ny Evanjely." (Marka 1, 15)\n\nVokatry ny Mistery: Ny fibebahana',
                'Ny niovan\'i Jesoa tarehy: "Ary niova tarehy teo anatrehan\'izy ireo Izy: ny tavany namirapiratra tahaka ny masoandro, ary ny fitafiany nanjary fotsy tahaka ny hazavana." (Matio 17, 2)\n\nVokatry ny Mistery: Ny fahamasinana',
                'Ny nanorenan\'i Jesoa ny Eokaristia: "Raiso, hano, ity no Vatako." (Matio 26, 26)\n\nVokatry ny Mistery: Ny fitiavana ny Eokaristia'
            ]
        },
        sorrowful: {
            id: 'sorrowful',
            name: 'Mistery Fahoriana',
            days: [2, 5],
            passages: [
                'Ny nialan\'i Jesoa aina tao an-taha: "Nony latsaka tao anatin\'ny ady mafy Izy dia nivavaka nahery kokoa, ary ny hatsembohany dia tahaka ny rà nipotrapotraka tamin\'ny tany." (Lioka 22, 44)\n\nVokatry ny Mistery: Ny fanenenana amin\'ny ota',
                'Ny nikapohana an\'i Jesoa: "Dia nalain\'i Pilaty Jesoa ka nasainy nokapohina." (Joany 19, 1)\n\nVokatry ny Mistery: Ny fifehezan-tena',
                'Ny nampisatrohana tsilo an\'i Jesoa: "Nandrandrana satroka tsilo ny miaramila, dia natefehiny tamin\'ny lohany, ary nampitafiany lamba jaky Izy." (Joany 19, 2)\n\nVokatry ny Mistery: Ny fiaretana ny eson\'ny olona',
                'Ny nitondran\'i Jesoa ny Hazofijaliana: "Ary Jesoa nitondra ny hazofijaliany, dia nankany amin\'ny toerana atao hoe Ikarandoha." (Joany 19, 17)\n\nVokatry ny Mistery: Ny faharetana amin\'ny fijaliana',
                'Ny nahafatesan\'i Jesoa teo amin\'ny Hazofijaliana: "Ary Jesoa niantso tamin\'ny feo mahery hoe: Raiko ô, apetrako eo an-tananao ny fanahiko. Nony voalazany izany dia niala aina Izy." (Lioka 23, 46)\n\nVokatry ny Mistery: Ny fitiavana ny fahavalo'
            ]
        },
        glorious: {
            id: 'glorious',
            name: 'Mistery Voninahitra',
            days: [0, 3],
            passages: [
                'Ny nitsanganan\'i Jesoa tamin\'ny maty: "Tsy ato Izy, fa efa nitsangana araka izay nolazainy. Avia, jereo ny toerana nametrahana Azy." (Matio 28, 6)\n\nVokatry ny Mistery: Ny finoana',
                'Ny niakaran\'i Jesoa any an-danitra: "Ary Jesoa Tompo, rehefa niteny tamin\'izy ireo, dia nakarina any an-danitra, ary mipetraka eo ankavanan\'Andriamanitra." (Marka 16, 19)\n\nVokatry ny Mistery: Ny fanantenana sy ny faniriana ny lanitra',
                'Ny nilatsahan\'ny Fanahy Masina: "Dia samy feno ny Fanahy Masina izy rehetra, ka niteny tamin\'ny fiteny maro samihafa." (Asa 2, 4)\n\nVokatry ny Mistery: Ny fitiavana an\'Andriamanitra sy ny zotom-po',
                'Ny nampakarana an\'i Masina Maria any an-danitra: "Fa nataon\'ilay Mahefa ny zavatra rehetra lehibe aho." (Lioka 1, 49)\n\nVokatry ny Mistery: Ny fahasoavan\'ny fahafatesana tsara',
                'Ny nanaosatro-boninahitra an\'i Masina Maria: "Ary nisy famantarana lehibe hita tany an-danitra: Vehivavy iray, ny masoandro no fitafiany, ny volana no eo ambany tongony, ary satro-boninahitra kintana roa ambin\'ny folo no eo an-dohany." (Apok 12, 1)\n\nVokatry ny Mistery: Ny fitokiana an\'i Masina Maria'
            ]
        }
    }
};
