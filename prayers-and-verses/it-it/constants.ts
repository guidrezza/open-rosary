import type { LocalizationData } from '$lib/types';

export const it: LocalizationData = {
	lang: 'it-IT',
	seo: {
		title: 'Santo Rosario',
		description:
			'Prega il Rosario. Veloce, gratuito e ottimizzato per cellulari. Un\'app moderna, open source e facile da usare su qualsiasi dispositivo.'
	},
	ui: {
		start_button: 'Inizia a Pregare',
		pick_mystery: 'Cambia Mistero',
		footer_made_by: 'REALIZZATO DA',
		recommended_mystery: 'Mistero Consigliato',
		pray_button_prefix: 'Prega il Consigliato',
		change_theme: 'Cambia Tema',
		liturgical: {
			// Seasons
			advent: 'Avvento',
			christmas: 'Natale',
			lent: 'Quaresima',
			triduum: 'Triduo Pasquale',
			easter: 'Pasqua',
			ordinary: 'Tempo Ordinario',
			// Feasts
			epiphany: 'Epifania',
			presentation: 'Presentazione del Signore',
			annunciation: 'Annunciazione',
			transfiguration: 'Trasfigurazione',
			assumption: 'Assunzione',
			all_saints: 'Tutti i Santi',
			all_souls: 'Commemorazione dei Defunti',
			immaculate_conception: 'Immacolata Concezione',
			guadalupe: 'Nostra Signora di Guadalupe',
			mother_of_god: 'Maria Santissima Madre di Dio',
			ash_wednesday: 'Le Ceneri',
			palm_sunday: 'Domenica delle Palme',
			holy_thursday: 'Giovedì Santo',
			good_friday: 'Venerdì Santo',
			holy_saturday: 'Sabato Santo',
			easter_sunday: 'Domenica di Pasqua',
			divine_mercy: 'Divina Misericordia',
			ascension: 'Ascensione',
			pentecost: 'Pentecoste',
			trinity: 'Santissima Trinità',
			corpus_christi: 'Corpus Domini',
			sacred_heart: 'Sacro Cuore',
			christ_king: 'Cristo Re',
			gaudete: 'Domenica Gaudete',
			laetare: 'Domenica Laetare',
			st_joseph: 'San Giuseppe',
			st_peter_paul: 'Santi Pietro e Paolo',
			exaltation_cross: 'Esaltazione della Santa Croce',
			archangels: 'Santi Arcangeli',
			lateran_basilica: 'Dedicazione della Basilica Lateranense',
			holy_family: 'Santa Famiglia',
			nativity_john_baptist: 'Natività di San Giovanni Battista',
			baptism_lord: 'Battesimo del Signore'
		},
		modes: {
			digital: {
				title: 'Rosario Digitale',
				desc: 'Segui il progresso sullo schermo.'
			},
			physical: {
				title: 'Rosario Fisico',
				desc: 'Ho la mia corona. Mostrami solo le preghiere.'
			},
			mysteries: {
				title: 'Solo i Misteri',
				desc: 'Una lista semplice dei 5 misteri'
			}
		},
		actions: {
			next: 'Next',
			back: 'Back',
			exit: 'EXIT?'
		},
		announce: 'Annuncia il Mistero',
		sections: {
			intro: 'Introduzione',
			decade: 'Mistero',
			conclusion: 'Conclusione'
		},
		ordinals: ['1º', '2º', '3º', '4º', '5º'],
		menus: {
			language: 'Seleziona Lingua',
			mystery: 'Seleziona Mistero',
			mode: 'Seleziona Modalità',
			theme: 'Seleziona Tema',
			jump_to_section: 'Vai alla Sezione'
		},
		themes: {
			description: 'Personalizza l\'esperienza visiva. Questo non influisce sulla data liturgica.',
			ordinary: 'Tempo Ordinario',
			christmas_easter: 'Natale / Pasqua',
			advent_lent: 'Avvento / Quaresima',
			pentecost: 'Pentecoste',
			gaudete: 'Gaudete',
			requiem: 'Requiem',
			gold: 'Oro',
			silver: 'Argento',
			white: 'Bianco',
			red: 'Rosso',
			purple: 'Viola',
			rose: 'Rosa',
			black: 'Nero',
			green: 'Verde'
		}
	},
	prayers: {
		sign_of_cross: {
			id: 'sign_of_cross',
			title: 'Segno della Croce',
			content: 'Nel nome del Padre e del Figlio e dello Spirito Santo. Amen.'
		},
		creed: {
			id: 'creed',
			title: 'Credo Apostolico',
			content:
				'Io credo in Dio, Padre onnipotente, creatore del cielo e della terra; e in Gesù Cristo, suo unico Figlio, nostro Signore, il quale fu concepito di Spirito Santo, nacque da Maria Vergine, patì sotto Ponzio Pilato, fu crocifisso, morì e fu sepolto; discese agli inferi; il terzo giorno risuscitò da morte; salì al cielo, siede alla destra di Dio Padre onnipotente; di là verrà a giudicare i vivi e i morti. Credo nello Spirito Santo, la santa Chiesa cattolica, la comunione dei santi, la remissione dei peccati, la risurrezione della carne, la vita eterna. Amen.'
		},
		our_father: {
			id: 'our_father',
			title: 'Padre Nostro',
			content:
				'Padre nostro, che sei nei cieli, sia santificato il tuo nome, venga il tuo regno, sia fatta la tua volontà, come in cielo così in terra. Dacci oggi il nostro pane quotidiano, e rimetti a noi i nostri debiti come anche noi li rimettiamo ai nostri debitori, e non abbandonarci alla tentazione, ma liberaci dal male. Amen.'
		},
		hail_mary: {
			id: 'hail_mary',
			title: 'Ave Maria',
			content:
				'Ave, o Maria, piena di grazia, il Signore è con te. Tu sei benedetta fra le donne e benedetto è il frutto del tuo seno, Gesù. Santa Maria, Madre di Dio, prega per noi peccatori, adesso e nell\'ora della nostra morte. Amen.'
		},
		glory_be: {
			id: 'glory_be',
			title: 'Gloria al Padre',
			content:
				'Gloria al Padre e al Figlio e allo Spirito Santo. Come era nel principio, ora e sempre, nei secoli dei secoli. Amen.'
		},
		fatima: {
			id: 'fatima',
			title: 'Preghiera di Fatima',
			content:
				'O Gesù mio, perdona le nostre colpe, preservaci dal fuoco dell\'inferno, porta in cielo tutte le anime, specialmente le più bisognose della tua misericordia.'
		},
		hail_holy_queen: {
			id: 'hail_holy_queen',
			title: 'Salve Regina',
			content:
				'Salve, Regina, madre di misericordia, vita, dolcezza e speranza nostra, salve. A te ricorriamo, esuli figli di Eva; a te sospiriamo, gementi e piangenti in questa valle di lacrime. Orsù dunque, avvocata nostra, rivolgi a noi quegli occhi tuoi misericordiosi. E mostraci, dopo questo esilio, Gesù, il frutto benedetto del tuo seno. O clemente, o pia, o dolce Vergine Maria.\n\nV. Prega per noi, Santa Madre di Dio.\nR. Affinché siamo fatti degni delle promesse di Cristo.'
		},
		closing_prayer: {
			id: 'closing_prayer',
			title: 'Orazione Finale',
			content:
				'Preghiamo. O Dio, il cui Figlio Unigenito, con la sua vita, morte e risurrezione, ci ha acquistato il premio della salvezza eterna, concedi a noi, che con il santo Rosario della Beata Vergine Maria meditiamo questi misteri, di imitare ciò che contengono e di ottenere ciò che promettono. Per Cristo nostro Signore. Amen.'
		}
	},
	mysteries: {
		joyful: {
			id: 'joyful',
			name: 'Misteri Gaudiosi',
			days: [1, 6],
			passages: [
				'L\'Annunciazione: "Allora Maria disse: «Ecco la serva del Signore: avvenga per me secondo la tua parola»." (Luca 1, 38)\n\nFrutto del Mistero: Umiltà',
				'La Visitazione: "Benedetta tu fra le donne e benedetto il frutto del tuo grembo!" (Luca 1, 42)\n\nFrutto del Mistero: Amore verso il Prossimo',
				'La Nascita di Gesù: "Diede alla luce il suo figlio primogenito, lo avvolse in fasce e lo pose in una mangiatoia." (Luca 2, 7)\n\nFrutto del Mistero: Povertà di Spirito',
				'La Presentazione al Tempio: "I miei occhi hanno visto la tua salvezza, preparata da te davanti a tutti i popoli." (Luca 2, 30-31)\n\nFrutto del Mistero: Obbedienza',
				'Il Ritrovamento al Tempio: "Dopo tre giorni lo trovarono nel tempio, seduto in mezzo ai maestri, mentre li ascoltava e li interrogava." (Luca 2, 46)\n\nFrutto del Mistero: Pietà e Gioia in Gesù'
			]
		},
		luminous: {
			id: 'luminous',
			name: 'Misteri Luminosi',
			days: [4],
			passages: [
				'Il Battesimo al Giordano: "Ed ecco una voce dal cielo che diceva: «Questi è il Figlio mio, l\'amato: in lui ho posto il mio compiacimento»." (Matteo 3, 17)\n\nFrutto del Mistero: Apertura allo Spirito Santo',
				'Le Nozze di Cana: "Sua madre disse ai servitori: «Qualsiasi cosa vi dica, fatela»." (Giovanni 2, 5)\n\nFrutto del Mistero: A Gesù per Maria',
				'L\'Annuncio del Regno di Dio: "Il tempo è compiuto e il regno di Dio è vicino; convertitevi e credete nel Vangelo." (Marco 1, 15)\n\nFrutto del Mistero: Pentimento e Fiducia in Dio',
				'La Trasfigurazione: "Fu trasfigurato davanti a loro: il suo volto brillò come il sole e le sue vesti divennero candide come la luce." (Matteo 17, 2)\n\nFrutto del Mistero: Desiderio di Santità',
				'L\'Istituzione dell\'Eucaristia: "Prendete, mangiate: questo è il mio corpo." (Matteo 26, 26)\n\nFrutto del Mistero: Adorazione Eucaristica'
			]
		},
		sorrowful: {
			id: 'sorrowful',
			name: 'Misteri Dolorosi',
			days: [2, 5],
			passages: [
				'L\'Agonia nel Getsemani: "Entrato nella lotta, pregava più intensamente, e il suo sudore diventò come gocce di sangue che cadevano a terra." (Luca 22, 44)\n\nFrutto del Mistero: Dolore per i Peccati',
				'La Flagellazione: "Allora Pilato fece prendere Gesù e lo fece flagellare." (Giovanni 19, 1)\n\nFrutto del Mistero: Purezza',
				'L\'Incoronazione di Spine: "Lo rivestirono di porpora e, dopo aver intrecciato una corona di spine, gliela misero sul capo." (Marco 15, 17)\n\nFrutto del Mistero: Coraggio Morale',
				'La Salita al Calvario: "Essi presero Gesù ed egli, portando la croce, si avviò verso il luogo detto del Cranio." (Giovanni 19, 17)\n\nFrutto del Mistero: Pazienza',
				'La Crocifissione e Morte: "Gesù, gridando a gran voce, disse: «Padre, nelle tue mani consegno il mio spirito». Detto questo, spirò." (Luca 23, 46)\n\nFrutto del Mistero: Perseveranza'
			]
		},
		glorious: {
			id: 'glorious',
			name: 'Misteri Gloriosi',
			days: [0, 3],
			passages: [
				'La Risurrezione: "È risorto, non è qui. Ecco il luogo dove l\'avevano deposto." (Marco 16, 6)\n\nFrutto del Mistero: Fede',
				'L\'Ascensione: "Il Signore Gesù, dopo aver parlato con loro, fu elevato in cielo e sedette alla destra di Dio." (Marco 16, 19)\n\nFrutto del Mistero: Speranza',
				'La Discesa dello Spirito Santo: "Tutti furono colmati di Spirito Santo e cominciarono a parlare in altre lingue." (Atti 2, 4)\n\nFrutto del Mistero: Sapienza e Amore di Dio',
				'L\'Assunzione di Maria: "Tutta bella tu sei, amica mia, e nessuna macchia è in te." (Cantico 4, 7)\n\nFrutto del Mistero: Grazia della Buona Morte',
				'L\'Incoronazione di Maria: "Un segno grandioso apparve nel cielo: una donna vestita di sole, con la luna sotto i suoi piedi e, sul capo, una corona di dodici stelle." (Apocalisse 12, 1)\n\nFrutto del Mistero: Fiducia nell\'Intercessione di Maria'
			]
		}
	}
};
