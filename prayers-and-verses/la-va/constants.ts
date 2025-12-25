import type { LocalizationData } from '$lib/types';

export const la_va: LocalizationData = {
    lang: 'la-VA',
    seo: {
        title: 'Rosarium Sanctum',
        description: 'Modus simplex et pulcher orandi Rosarium.'
    },
    ui: {
        start_button: 'Incipe Orare',
        pick_mystery: 'Mysterium Mutare',
        made_by: 'Factum a guidrezza',
        recommended_mystery: 'Mysterium Commendatum',
        pray_button_prefix: 'Orare Commendatum',
        change_theme: 'Thema Mutare',
        modes: {
            digital: {
                title: 'Grana Digitalia',
                desc: 'Progressum tuum in scrinio sequere.'
            },
            physical: {
                title: 'Grana Physica',
                desc: 'Habeo Rosarium meum. Tantum orationes ostende.'
            }
        },
        actions: {
            next: 'Next',
            back: 'Back',
            exit: 'EXIT?'
        },
        announce: 'Annuntiare Mysterium',
        sections: {
            intro: 'Introductio',
            decade: 'Mysterium',
            conclusion: 'Conclusio'
        },
        ordinals: ['Prima', 'Secunda', 'Tertia', 'Quarta', 'Quinta'],
        menus: {
            language: 'Linguam Eligere',
            mystery: 'Mysterium Eligere',
            mode: 'Modum Eligere',
            theme: 'Thema Eligere',
            jump_to_section: 'Ad Sectionem'
        },
        themes: {
            ordinary: 'Tempus Ordinarium',
            christmas_easter: 'Nativitatis / Pascha',
            advent_lent: 'Adventus / Quadragesima',
            pentecost: 'Pentecostes',
            gaudete: 'Gaudete',
            requiem: 'Requiem'
        }
    },
    prayers: {
        sign_of_cross: {
            id: 'sign_of_cross',
            title: 'Signum Crucis',
            content: 'In nómine Patris, et Fílii, et Spíritus Sancti. Amen.'
        },
        creed: {
            id: 'creed',
            title: 'Symbolum Apostolorum',
            content: 'Credo in Deum Patrem omnipoténtem, Creatórem cæli et terræ. Et in Iesum Christum, Fílium eius únicum, Dóminum nostrum, qui concéptus est de Spíritu Sancto, natus ex María Vírgine, passus sub Póntio Piláto, crucifíxus, mórtuus, et sepúltus, descéndit ad ínferos, tértia die resurréxit a mórtuis, ascéndit ad cælos, sedet ad déxteram Dei Patris omnipoténtis, inde ventúrus est iudicáre vivos et mórtuos. Credo in Spíritum Sanctum, sanctam Ecclésiam cathólicam, sanctórum communiónem, remissiónem peccatórum, carnis resurrectiónem, vitam ætérnam. Amen.'
        },
        our_father: {
            id: 'our_father',
            title: 'Pater Noster',
            content: 'Pater noster, qui es in cælis, sanctificétur nomen tuum. Advéniat regnum tuum. Fiat volúntas tua, sicut in cælo et in terra. Panem nostrum cotidiánum da nobis hódie, et dimítte nobis débita nostra sicut et nos dimíttimus debitóribus nostris. Et ne nos indúcas in tentatiónem, sed líbera nos a malo. Amen.'
        },
        hail_mary: {
            id: 'hail_mary',
            title: 'Ave Maria',
            content: 'Ave María, grátia plena, Dóminus tecum. Benedícta tu in muliéribus, et benedíctus fructus ventris tui, Iesus. Sancta María, Mater Dei, ora pro nobis peccatóribus, nunc, et in hora mortis nostræ. Amen.'
        },
        glory_be: {
            id: 'glory_be',
            title: 'Gloria Patri',
            content: 'Glória Patri, et Fílio, et Spirítui Sancto. Sicut erat in princípio, et nunc, et semper, et in sǽcula sæculórum. Amen.'
        },
        fatima: {
            id: 'fatima',
            title: 'Oratio Fatimae',
            content: 'Dómine Iesu, dimítte nobis débita nostra, salva nos ab igne inférni, pérduc in cælum omnes ánimas, præsértim illas quæ máxime índigent misericórdia tua.'
        },
        hail_holy_queen: {
            id: 'hail_holy_queen',
            title: 'Salve Regina',
            content: 'Salve, Regína, mater misericórdiæ; vita, dulcédo et spes nostra, salve. Ad te clamámus éxsules fílii Hevæ. Ad te suspirámus geméntes et flentes in hac lacrimárum valle. Eia ergo, advocáta nostra, illos tuos misericórdes óculos ad nos convérte. Et Iesum, benedíctum fructum ventris tui, nobis post hoc exsílium osténde. O clemens, o pia, o dulcis Virgo María.\n\nV. Ora pro nobis, sancta Dei Génitrix.\nR. Ut digni efficiámur promissiónibus Christi.'
        },
        closing_prayer: {
            id: 'closing_prayer',
            title: 'Oremus',
            content: 'Orémus. Deus, cuius Unigénitus per vitam, mortem et resurrectiónem suam nobis salútis ætérnæ prǽmia comparávit, concéde, quǽsumus: ut hæc mystéria sacratíssimo Beátæ Maríæ Vírginis Rosário recoléntes, et imitémur quod cóntinent, et quod promíttunt assequámur. Per eúndem Christum Dóminum nostrum. Amen.'
        }
    },
    mysteries: {
        joyful: {
            id: 'joyful',
            name: 'Mystéria Gaudiósa',
            days: [1, 6],
            passages: [
                "Annuntiátio: \"Dixit autem María: «Ecce ancílla Dómini; fiat mihi secúndum verbum tuum».\" (Lc 1, 38)",
                "Visitatio: \"Benedícta tu inter muliéres, et benedíctus fructus ventris tui.\" (Lc 1, 42)",
                "Natívitas: \"Péperit fílium suum primogénitum; et pannis eum invólvit et reclinávit eum in præsépio.\" (Lc 2, 7)",
                "Praesentátio: \"Vidérunt óculi mei salutáre tuum, quod parásti ante fáciem ómnium populórum.\" (Lc 2, 30-31)",
                "Invéntio in Templo: \"Post tríduum invenérunt illum in templo sedéntem in médio magistrórum, audiéntem illos et interrogántem eos.\" (Lc 2, 46)"
            ]
        },
        luminous: {
            id: 'luminous',
            name: 'Mystéria Luminósa',
            days: [4],
            passages: [
                "Baptísma in Iordáne: \"Et ecce vox de cælis dicens: «Hic est Fílius meus diléctus, in quo mihi complácui».\" (Mt 3, 17)",
                "Nuptiae in Cana: \"Dicit mater eius minístris: «Quodcúmque díxerit vobis, fácite».\" (Io 2, 5)",
                "Proclamátio Regni: \"Implétum est tempus, et appropinquávit regnum Dei; paenitémini et crédite Evangélio.\" (Mc 1, 15)",
                "Transfigurátio: \"Et transfigurátus est ante eos. Et resplénduit fácies eius sicut sol, vestiménta autem eius facta sunt alba sicut lux.\" (Mt 17, 2)",
                "Institútio Eucharistíæ: \"Accípite et comédite: hoc est corpus meum.\" (Mt 26, 26)"
            ]
        },
        sorrowful: {
            id: 'sorrowful',
            name: 'Mystéria Dolorósa',
            days: [2, 5],
            passages: [
                "Agonía in Horto: \"Et factus in agonía prolíxius orábat. Et factus est sudor eius sicut guttæ sánguinis decurréntis in terram.\" (Lc 22, 43-44)",
                "Flagellátio: \"Tunc ergo apprehéndit Pilátus Iesum et flagellávit.\" (Io 19, 1)",
                "Coronátio Spinis: \"Et induérunt eum púrpura et impónunt ei plecténtes spíneam corónam.\" (Mc 15, 17)",
                "Baiulátio Crucis: \"Et báiulans sibi crucem exívit in eum, qui dícitur Calváriæ locum.\" (Io 19, 17)",
                "Crucifíxio: \"Clamans voce magna Iesus ait: «Pater, in manus tuas comméndo spíritum meum».\" (Lc 23, 46)"
            ]
        },
        glorious: {
            id: 'glorious',
            name: 'Mystéria Gloriósa',
            days: [0, 3],
            passages: [
                "Resurréctio: \"Surréxit, non est hic; ecce locus ubi posuérunt eum.\" (Mc 16, 6)",
                "Ascénsio: \"Et Dóminus quidem Iesus, postquam locútus est eis, assúmptus est in cælum et sedit a dextris Dei.\" (Mc 16, 19)",
                "Descénsus Spíritus Sancti: \"Et repléti sunt omnes Spíritu Sancto et cœpérunt loqui áliis linguis.\" (Act 2, 4)",
                "Assúmptio: \"Benedícta es tu, fília, a Dómino Deo excélso, præ ómnibus muliéribus super terram.\" (Idt 13, 18)",
                "Coronátio: \"Et signum magnum appáruit in cælo: múlier amícta sole, et luna sub pédibus eius, et super caput eius coróna stellárum duódecim.\" (Ap 12, 1)"
            ]
        }
    }
};
