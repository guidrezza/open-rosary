import type { LocalizationData } from '$lib/types';

export const de: LocalizationData = {
    lang: 'de-DE',
    seo: {
        title: 'Rosenkranz',
        description:
            'Bete den Rosenkranz. Schnell, kostenlos und mobilfreundlich. Eine moderne Open-Source-Web-App, einfach zu bedienen auf jedem Gerät.'
    },
    ui: {
        start_button: 'Beten Starten',
        pick_mystery: 'Geheimnis Ändern',
        footer_made_by: 'ERSTELLT VON',
        recommended_mystery: 'Empfohlenes Geheimnis',
        pray_button_prefix: 'Bete: ',
        change_theme: 'Design Ändern',
        liturgical: {
            // Seasons
            advent: 'Advent',
            christmas: 'Weihnachten',
            lent: 'Fastenzeit',
            triduum: 'Triduum Sacrum',
            easter: 'Ostern',
            ordinary: 'Zeit im Jahreskreis',
            // Feasts
            epiphany: 'Erscheinung des Herrn',
            presentation: 'Darstellung des Herrn',
            annunciation: 'Verkündigung des Herrn',
            transfiguration: 'Verklärung des Herrn',
            assumption: 'Mariä Himmelfahrt',
            all_saints: 'Allerheiligen',
            all_souls: 'Allerseelen',
            immaculate_conception: 'Mariä Empfängnis',
            guadalupe: 'Unsere Liebe Frau von Guadalupe',
            mother_of_god: 'Hochfest der Gottesmutter Maria',
            ash_wednesday: 'Aschermittwoch',
            palm_sunday: 'Palmsonntag',
            holy_thursday: 'Gründonnerstag',
            good_friday: 'Karfreitag',
            holy_saturday: 'Karsamstag',
            easter_sunday: 'Ostersonntag',
            divine_mercy: 'Barmherzigkeitssonntag',
            ascension: 'Christi Himmelfahrt',
            pentecost: 'Pfingsten',
            trinity: 'Dreifaltigkeitssonntag',
            corpus_christi: 'Fronleichnam',
            sacred_heart: 'Herz-Jesu-Fest',
            christ_king: 'Christkönigssonntag',
            gaudete: 'Gaudete',
            laetare: 'Laetare',
            st_joseph: 'Hl. Josef',
            st_peter_paul: 'Hl. Petrus und Paulus',
            exaltation_cross: 'Kreuzerhöhung',
            archangels: 'Erzengel Michael, Gabriel, Raphael',
            lateran_basilica: 'Weihetag der Lateranbasilika',
            holy_family: 'Fest der Heiligen Familie',
            nativity_john_baptist: 'Geburt Johannes des Täufers',
            baptism_lord: 'Taufe des Herrn'
        },
        modes: {
            digital: {
                title: 'Digitale Perlen',
                desc: 'Verfolge deinen Fortschritt auf dem Bildschirm.'
            },
            physical: {
                title: 'Physische Perlen',
                desc: 'Ich habe meinen eigenen Rosenkranz. Zeige nur die Gebete.'
            },
            mysteries: {
                title: 'Nur die Geheimnisse',
                desc: 'Eine einfache Liste der 5 Geheimnisse'
            }
        },
        actions: {
            next: 'Weiter',
            back: 'Zurück',
            exit: 'BEENDEN?'
        },
        announce: 'Geheimnis ankündigen',
        sections: {
            intro: 'Einleitung',
            decade: 'Gesätz',
            conclusion: 'Abschluss'
        },
        ordinals: ['1.', '2.', '3.', '4.', '5.'],
        menus: {
            language: 'Sprache wählen',
            mystery: 'Geheimnis wählen',
            mode: 'Modus wählen',
            theme: 'Design wählen',
            jump_to_section: 'Springe zu Abschnitt'
        },
        themes: {
            description: 'Passe dein visuelles Erlebnis an. Dies hat keinen Einfluss auf das liturgische Datum.',
            ordinary: 'Jahreskreis',
            christmas_easter: 'Weihnachten / Ostern',
            advent_lent: 'Advent / Fastenzeit',
            pentecost: 'Pfingsten',
            gaudete: 'Gaudete',
            requiem: 'Requiem',
            gold: 'Gold',
            silver: 'Silber',
            white: 'Weiß',
            red: 'Rot',
            purple: 'Lila',
            rose: 'Rosa',
            black: 'Schwarz',
            green: 'Grün'
        }
    },
    prayers: {
        sign_of_cross: {
            id: 'sign_of_cross',
            title: 'Kreuzzeichen',
            content: 'Im Namen des Vaters und des Sohnes und des Heiligen Geistes. Amen.'
        },
        creed: {
            id: 'creed',
            title: 'Apostolisches Glaubensbekenntnis',
            content:
                'Ich glaube an Gott, den Vater, den Allmächtigen, den Schöpfer des Himmels und der Erde, und an Jesus Christus, seinen eingeborenen Sohn, unseren Herrn, empfangen durch den Heiligen Geist, geboren von der Jungfrau Maria, gelitten unter Pontius Pilatus, gekreuzigt, gestorben und begraben, hinabgestiegen in das Reich des Todes, am dritten Tage auferstanden von den Toten, aufgefahren in den Himmel; er sitzt zur Rechten Gottes, des allmächtigen Vaters; von dort wird er kommen, zu richten die Lebenden und die Toten. Ich glaube an den Heiligen Geist, die heilige katholische Kirche, Gemeinschaft der Heiligen, Vergebung der Sünden, Auferstehung der Toten und das ewige Leben. Amen.'
        },
        our_father: {
            id: 'our_father',
            title: 'Vater unser',
            content:
                'Vater unser im Himmel, geheiligt werde dein Name. Dein Reich komme. Dein Wille geschehe, wie im Himmel so auf Erden. Unser tägliches Brot gib uns heute. Und vergib uns unsere Schuld, wie auch wir vergeben unseren Schuldigern. Und führe uns nicht in Versuchung, sondern erlöse uns von dem Bösen. Amen.'
        },
        hail_mary: {
            id: 'hail_mary',
            title: 'Gegrüßet seist du, Maria',
            content:
                'Gegrüßet seist du, Maria, voll der Gnade, der Herr ist mit dir. Du bist gebenedeit unter den Frauen, und gebenedeit ist die Frucht deines Leibes, Jesus. Heilige Maria, Mutter Gottes, bitte für uns Sünder, jetzt und in der Stunde unseres Todes. Amen.'
        },
        glory_be: {
            id: 'glory_be',
            title: 'Ehre sei dem Vater',
            content:
                'Ehre sei dem Vater und dem Sohn und dem Heiligen Geist. Wie im Anfang, so auch jetzt und alle Zeit und in Ewigkeit. Amen.'
        },
        fatima: {
            id: 'fatima',
            title: 'Fatima-Gebet',
            content:
                'O mein Jesus, verzeihe uns unsere Sünden, bewahre uns vor dem Feuer der Hölle, führe alle Seelen in den Himmel, besonders jene, die deiner Barmherzigkeit am meisten bedürfen.'
        },
        hail_holy_queen: {
            id: 'hail_holy_queen',
            title: 'Salve Regina',
            content:
                'Sei gegrüßt, o Königin, Mutter der Barmherzigkeit, unser Leben, unsere Wonne und unsere Hoffnung, sei gegrüßt. Zu dir rufen wir verbannte Kinder Evas; zu dir seufzen wir trauernd und weinend in diesem Tal der Tränen. Wohlan denn, unsere Fürsprecherin, wende deine barmherzigen Augen uns zu, und nach diesem Elend zeige uns Jesus, die gebenedeite Frucht deines Leibes. O gütige, o milde, o süße Jungfrau Maria.\n\nV. Bitte für uns, o heilige Gottesmutter.\nA. Auf dass wir würdig werden der Verheißungen Christi.'
        },
        closing_prayer: {
            id: 'closing_prayer',
            title: 'Schlussgebet',
            content:
                'Lasset uns beten. O Gott, dein eingeborener Sohn hat uns durch sein Leben, seinen Tod und seine Auferstehung die Belohnung des ewigen Heils erworben. Wir bitten dich: Lass uns, die wir diese Geheimnisse im heiligen Rosenkranz der seligen Jungfrau Maria betrachten, nachahmen, was sie enthalten, und erlangen, was sie verheißen. Durch ihn, Christus, unseren Herrn. Amen.'
        }
    },
    mysteries: {
        joyful: {
            id: 'joyful',
            name: 'Freudenreiche Geheimnisse',
            days: [1, 6],
            passages: [
                'Die Verkündigung: "Da sagte Maria: Siehe, ich bin die Magd des Herrn; mir geschehe, wie du es gesagt hast." (Lk 1,38)\n\nFrucht des Geheimnisses: Demut',
                'Die Heimsuchung: "Gesegnet bist du unter den Frauen und gesegnet ist die Frucht deines Leibes." (Lk 1,42)\n\nFrucht des Geheimnisses: Nächstenliebe',
                'Die Geburt Jesu: "Und sie gebar ihren Sohn, den Erstgeborenen. Sie wickelte ihn in Windeln und legte ihn in eine Krippe." (Lk 2,7)\n\nFrucht des Geheimnisses: Armut im Geiste',
                'Die Darstellung im Tempel: "Denn meine Augen haben das Heil gesehen, das du vor allen Völkern bereitet hast." (Lk 2,30-31)\n\nFrucht des Geheimnisses: Gehorsam',
                'Das Wiederfinden im Tempel: "Nach drei Tagen fanden sie ihn im Tempel; er saß mitten unter den Lehrern, hörte ihnen zu und stellte Fragen." (Lk 2,46)\n\nFrucht des Geheimnisses: Freude über das Finden Jesu'
            ]
        },
        luminous: {
            id: 'luminous',
            name: 'Lichtreiche Geheimnisse',
            days: [4],
            passages: [
                'Die Taufe im Jordan: "Und eine Stimme aus dem Himmel sprach: Das ist mein geliebter Sohn, an dem ich Gefallen gefunden habe." (Mt 3,17)\n\nFrucht des Geheimnisses: Offenheit für den Heiligen Geist',
                'Die Hochzeit zu Kana: "Seine Mutter sagte zu den Dienern: Was er euch sagt, das tut!" (Joh 2,5)\n\nFrucht des Geheimnisses: Zu Jesus durch Maria',
                'Die Verkündigung des Reiches Gottes: "Die Zeit ist erfüllt, das Reich Gottes ist nahe. Kehrt um und glaubt an das Evangelium!" (Mk 1,15)\n\nFrucht des Geheimnisses: Umkehr und Vertrauen auf Gott',
                'Die Verklärung: "Und er wurde vor ihren Augen verwandelt; sein Gesicht leuchtete wie die Sonne und seine Kleider wurden weiß wie das Licht." (Mt 17,2)\n\nFrucht des Geheimnisses: Verlangen nach Heiligkeit',
                'Die Einsetzung der Eucharistie: "Nehmt und esst; das ist mein Leib." (Mt 26,26)\n\nFrucht des Geheimnisses: Ehrfurcht vor der Eucharistie'
            ]
        },
        sorrowful: {
            id: 'sorrowful',
            name: 'Schmerzhafte Geheimnisse',
            days: [2, 5],
            passages: [
                'Die Todesangst in Getsemani: "Und er betete in seiner Angst noch inständiger und sein Schweiß war wie Blut, das auf die Erde tropfte." (Lk 22,44)\n\nFrucht des Geheimnisses: Reue über die Sünden',
                'Die Geißelung: "Darauf nahm Pilatus Jesus und ließ ihn geißeln." (Joh 19,1)\n\nFrucht des Geheimnisses: Reinheit und Abtötung der Begierden',
                'Die Dornenkrönung: "Sie hängten ihm einen Purpurmantel um, flochten eine Dornenkrone und setzten sie ihm auf." (Mk 15,17)\n\nFrucht des Geheimnisses: Moralischer Mut',
                'Der Kreuzweg: "Er trug sein Kreuz und ging hinaus zur sogenannten Schädelstätte." (Joh 19,17)\n\nFrucht des Geheimnisses: Geduld',
                'Die Kreuzigung: "Jesus rief laut: Vater, in deine Hände lege ich meinen Geist. Nach diesen Worten hauchte er den Geist aus." (Lk 23,46)\n\nFrucht des Geheimnisses: Ausdauer und Selbstverleugnung'
            ]
        },
        glorious: {
            id: 'glorious',
            name: 'Glorreiche Geheimnisse',
            days: [0, 3],
            passages: [
                'Die Auferstehung: "Er ist auferstanden; er ist nicht hier. Seht, da ist die Stelle, wohin man ihn gelegt hat." (Mk 16,6)\n\nFrucht des Geheimnisses: Glaube',
                'Die Himmelfahrt: "Nachdem Jesus, der Herr, zu ihnen gesprochen hatte, wurde er in den Himmel aufgenommen und setzte sich zur Rechten Gottes." (Mk 16,19)\n\nFrucht des Geheimnisses: Hoffnung',
                'Die Sendung des Heiligen Geistes: "Da wurden alle vom Heiligen Geist erfüllt und begannen, in fremden Sprachen zu reden, wie es der Geist ihnen eingab." (Apg 2,4)\n\nFrucht des Geheimnisses: Weisheit und Liebe Gottes',
                'Die Aufnahme Mariens in den Himmel: "Gesegnet bist du, Tochter, vom höchsten Gott, mehr als alle anderen Frauen auf der Erde." (Jdt 13,18)\n\nFrucht des Geheimnisses: Gnade eines guten Todes',
                'Die Krönung Mariens: "Ein großes Zeichen erschien am Himmel: eine Frau, mit der Sonne bekleidet, den Mond unter ihren Füßen und auf ihrem Haupt einen Kranz von zwölf Sternen." (Offb 12,1)\n\nFrucht des Geheimnisses: Vertrauen auf die Fürsprache Mariens'
            ]
        }
    }
};