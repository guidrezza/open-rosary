import type { LocalizationData } from '$lib/types';

export const fr: LocalizationData = {
    lang: 'fr-FR',
    seo: {
        title: 'Rosaire Ouvert',
        description:
            'Priez le Rosaire. Rapide, gratuit et adapté aux mobiles. Une application web moderne, open source et facile à utiliser sur n\'importe quel appareil.'
    },
    ui: {
        start_button: 'Commencer à Prier',
        pick_mystery: 'Changer de Mystère',
        footer_made_by: 'RÉALISÉ PAR',
        recommended_mystery: 'Mystère Recommandé',
        pray_button_prefix: 'Prier le Recommandé',
        change_theme: 'Changer de Thème',
        liturgical: {
            // Seasons
            advent: 'Avent',
            christmas: 'Noël',
            lent: 'Carême',
            triduum: 'Triduum Pascal',
            easter: 'Pâques',
            ordinary: 'Temps Ordinaire',
            // Feasts
            epiphany: 'Épiphanie',
            presentation: 'Présentation du Seigneur',
            annunciation: 'Annonciation',
            transfiguration: 'Transfiguration',
            assumption: 'Assomption',
            all_saints: 'Toussaint',
            all_souls: 'Commémoration des Fidèles Défunts',
            immaculate_conception: 'Immaculée Conception',
            guadalupe: 'Notre-Dame de Guadalupe',
            mother_of_god: 'Marie, Mère de Dieu',
            ash_wednesday: 'Mercredi des Cendres',
            palm_sunday: 'Dimanche des Rameaux',
            holy_thursday: 'Jeudi Saint',
            good_friday: 'Vendredi Saint',
            holy_saturday: 'Samedi Saint',
            easter_sunday: 'Dimanche de Pâques',
            divine_mercy: 'Dimanche de la Divine Miséricorde',
            ascension: 'Ascension',
            pentecost: 'Pentecôte',
            trinity: 'Sainte-Trinité',
            corpus_christi: 'Saint-Sacrement',
            sacred_heart: 'Sacré-Cœur',
            christ_king: 'Christ Roi',
            gaudete: 'Dimanche Gaudete',
            laetare: 'Dimanche Laetare',
            st_joseph: 'Saint Joseph',
            st_peter_paul: 'Saints Pierre et Paul',
            exaltation_cross: 'Exaltation de la Sainte Croix',
            archangels: 'Saints Archanges',
            lateran_basilica: 'Dédicace de la Basilique du Latran',
            holy_family: 'Sainte Famille',
            nativity_john_baptist: 'Nativité de Saint Jean-Baptiste',
            baptism_lord: 'Baptême du Seigneur'
        },
        modes: {
            digital: {
                title: 'Grains Numériques',
                desc: 'Suivez votre progression à l\'écran avec l\'application.'
            },
            physical: {
                title: 'Grains Physiques',
                desc: 'J\'ai mon propre chapelet. Montrez-moi seulement les prières.'
            },
            mysteries: {
                title: 'Seulement les Mystères',
                desc: 'Une liste simple des 5 mystères'
            }
        },
        actions: {
            next: 'Suivant',
            back: 'Retour',
            exit: 'QUITTER ?'
        },
        announce: 'Annoncer le Mystère',
        sections: {
            intro: 'Introduction',
            decade: 'Dizaine',
            conclusion: 'Conclusion'
        },
        ordinals: ['1er', '2e', '3e', '4e', '5e'],
        menus: {
            language: 'Sélectionner la Langue',
            mystery: 'Sélectionner le Mystère',
            mode: 'Sélectionner le Mode',
            theme: 'Sélectionner le Thème',
            jump_to_section: 'Aller à la Section'
        },
        themes: {
            description: 'Personnalisez votre expérience visuelle. Cela n\'affecte pas la date liturgique.',
            ordinary: 'Temps Ordinaire',
            christmas_easter: 'Noël / Pâques',
            advent_lent: 'Avent / Carême',
            pentecost: 'Pentecôte',
            gaudete: 'Gaudete',
            requiem: 'Requiem',
            gold: 'Or',
            silver: 'Argent',
            white: 'Blanc',
            red: 'Rouge',
            purple: 'Violet',
            rose: 'Rose',
            black: 'Noir',
            green: 'Vert'
        }
    },
    prayers: {
        sign_of_cross: {
            id: 'sign_of_cross',
            title: 'Signe de la Croix',
            content: 'Au nom du Père, et du Fils, et du Saint-Esprit. Amen.'
        },
        creed: {
            id: 'creed',
            title: 'Le Credo des Apôtres',
            content:
                'Je crois en Dieu, le Père tout-puissant, Créateur du ciel et de la terre ; et en Jésus Christ, son Fils unique, notre Seigneur, qui a été conçu du Saint-Esprit, est né de la Vierge Marie, a souffert sous Ponce Pilate, a été crucifié, est mort et a été enseveli, est descendu aux enfers, le troisième jour est ressuscité des morts, est monté aux cieux, est assis à la droite de Dieu le Père tout-puissant, d’où il viendra juger les vivants et les morts. Je crois en l’Esprit Saint, à la sainte Église catholique, à la communion des saints, à la rémission des péchés, à la résurrection de la chair, à la vie éternelle. Amen.'
        },
        our_father: {
            id: 'our_father',
            title: 'Notre Père',
            content:
                'Notre Père, qui es aux cieux, que ton nom soit sanctifié, que ton règne vienne, que ta volonté soit faite sur la terre comme au ciel. Donne-nous aujourd’hui notre pain de ce jour. Pardonne-nous nos offenses, comme nous pardonnons aussi à ceux qui nous ont offensés. Et ne nous laisse pas entrer en tentation, mais délivre-nous du Mal. Amen.'
        },
        hail_mary: {
            id: 'hail_mary',
            title: 'Je vous salue Marie',
            content:
                'Je vous salue, Marie, pleine de grâce ; le Seigneur est avec vous. Vous êtes bénie entre toutes les femmes et Jésus, le fruit de vos entrailles, est béni. Sainte Marie, Mère de Dieu, priez pour nous pauvres pécheurs, maintenant et à l’heure de notre mort. Amen.'
        },
        glory_be: {
            id: 'glory_be',
            title: 'Gloire au Père',
            content:
                'Gloire au Père, et au Fils, et au Saint-Esprit, comme il était au commencement, maintenant et toujours, pour les siècles des siècles. Amen.'
        },
        fatima: {
            id: 'fatima',
            title: 'Prière de Fatima',
            content:
                'Ô mon Jésus, pardonnez-nous nos péchés, préservez-nous du feu de l’enfer, conduisez au ciel toutes les âmes, surtout celles qui ont le plus besoin de votre miséricorde.'
        },
        hail_holy_queen: {
            id: 'hail_holy_queen',
            title: 'Salve Regina',
            content:
                'Salut, ô Reine, Mère de miséricorde, notre vie, notre douceur et notre espérance. Vers toi nous élevons nos cris, pauvres exilés, enfants d’Ève. Vers toi nous soupirons, gémissant et pleurant dans cette vallée de larmes. Ô toi, notre avocate, tourne vers nous tes regards miséricordieux. Et après cet exil, montre-nous Jésus, le fruit béni de tes entrailles. Ô clémente, ô pieuse, ô douce Vierge Marie.\n\nV. Priez pour nous, sainte Mère de Dieu.\nR. Afin que nous soyons dignes des promesses du Christ.'
        },
        closing_prayer: {
            id: 'closing_prayer',
            title: 'Prière Finale',
            content:
                'Prions. Dieu, dont le Fils unique, par sa vie, sa mort et sa résurrection, nous a acquis les récompenses du salut éternel, accorde-nous, nous t’en supplions, qu’en méditant les mystères du très saint Rosaire de la bienheureuse Vierge Marie, nous imitions ce qu’ils contiennent et obtenions ce qu’ils promettent. Par le même Christ, notre Seigneur. Amen.'
        }
    },
    mysteries: {
        joyful: {
            id: 'joyful',
            name: 'Mystères Joyeux',
            days: [1, 6],
            passages: [
                'L’Annonciation : « Voici que tu vas concevoir et enfanter un fils ; tu lui donneras le nom de Jésus. » (Luc 1, 31)\n\nFruit du Mystère : Humilité',
                'La Visitation : « Tu es bénie entre toutes les femmes, et béni le fruit de ton sein ! » (Luc 1, 42)\n\nFruit du Mystère : Charité envers le prochain',
                'La Nativité : « Elle enfanta son fils premier-né, l’emmaillota et le coucha dans une mangeoire. » (Luc 2, 7)\n\nFruit du Mystère : Détachement des biens de ce monde',
                'La Présentation : « Mes yeux ont vu ton salut, que tu as préparé à la face de tous les peuples. » (Luc 2, 30-31)\n\nFruit du Mystère : Obéissance',
                'Le Recouvrement au Temple : « Au bout de trois jours, ils le trouvèrent dans le Temple, assis au milieu des docteurs, les écoutant et les interrogeant. » (Luc 2, 46)\n\nFruit du Mystère : Joie de retrouver Jésus'
            ]
        },
        luminous: {
            id: 'luminous',
            name: 'Mystères Lumineux',
            days: [4],
            passages: [
                'Le Baptême au Jourdain : « Celui-ci est mon Fils bien-aimé, en qui je trouve ma joie. » (Matthieu 3, 17)\n\nFruit du Mystère : Ouverture à l’Esprit Saint',
                'Les Noces de Cana : « Sa mère dit aux serviteurs : « Faites tout ce qu’il vous dira. » » (Jean 2, 5)\n\nFruit du Mystère : À Jésus par Marie',
                'L’Annonce du Royaume : « Le temps est accompli, et le royaume de Dieu est proche ; convertissez-vous et croyez à l’Évangile. » (Marc 1, 15)\n\nFruit du Mystère : Conversion et confiance en Dieu',
                'La Transfiguration : « Son visage devint brillant comme le soleil, et ses vêtements blancs comme la lumière. » (Matthieu 17, 2)\n\nFruit du Mystère : Désir de sainteté',
                'L’Institution de l’Eucharistie : « Prenez et mangez-en tous : ceci est mon corps. » (Matthieu 26, 26)\n\nFruit du Mystère : Adoration'
            ]
        },
        sorrowful: {
            id: 'sorrowful',
            name: 'Mystères Douloureux',
            days: [2, 5],
            passages: [
                'L’Agonie au Jardin : « Dans l’angoisse, il priait plus instamment, et sa sueur devint comme des gouttes de sang. » (Luc 22, 44)\n\nFruit du Mystère : Contrition des péchés',
                'La Flagellation : « Pilate prit Jésus et le fit flageller. » (Jean 19, 1)\n\nFruit du Mystère : Mortification des sens',
                'Le Couronnement d’épines : « Ils lui posèrent sur la tête une couronne tressée d’épines. » (Marc 15, 17)\n\nFruit du Mystère : Courage moral',
                'Le Portement de la Croix : « Portant lui-même sa croix, Jésus sortit vers le lieu dit du Crâne. » (Jean 19, 17)\n\nFruit du Mystère : Patience dans les épreuves',
                'La Crucifixion : « Jésus s’écria d’une voix forte : « Père, entre tes mains je remets mon esprit. » Ayant dit cela, il expira. » (Luc 23, 46)\n\nFruit du Mystère : Pardon des offenses'
            ]
        },
        glorious: {
            id: 'glorious',
            name: 'Mystères Glorieux',
            days: [0, 3],
            passages: [
                'La Résurrection : « Il n’est pas ici, car il est ressuscité, comme il l’avait dit. » (Matthieu 28, 6)\n\nFruit du Mystère : Foi',
                'L’Ascension : « Le Seigneur Jésus fut enlevé au ciel et s’assit à la droite de Dieu. » (Marc 16, 19)\n\nFruit du Mystère : Espérance',
                'La Pentecôte : « Tous furent remplis d’Esprit Saint et se mirent à parler en d’autres langues. » (Actes 2, 4)\n\nFruit du Mystère : Dons du Saint-Esprit',
                'L’Assomption : « Tu es toute belle, mon amie, et il n’y a pas de tache en toi. » (Cantique 4, 7)\n\nFruit du Mystère : Grâce d’une bonne mort',
                'Le Couronnement de Marie : « Un grand signe apparut dans le ciel : une Femme, ayant le soleil pour manteau, la lune sous les pieds, et sur la tête une couronne de douze étoiles. » (Apocalypse 12, 1)\n\nFruit du Mystère : Confiance en l’intercession de Marie'
            ]
        }
    }
};
