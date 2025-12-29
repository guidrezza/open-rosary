import type { LocalizationData } from '$lib/types';

export const es_mx: LocalizationData = {
	lang: 'es-MX',
	seo: {
		title: 'Santo Rosario',
		description:
			'Reza el Rosario. Gratis, rápido y móvil. Una app moderna, de código abierto y fácil de usar en cualquier dispositivo.'
	},
	ui: {
		start_button: 'Comenzar a Rezar',
		pick_mystery: 'Cambiar Misterio',
		footer_made_by: 'HECHO POR',
		recommended_mystery: 'Misterio Recomendado',
		pray_button_prefix: 'Rezar Recomendado',
		change_theme: 'Cambiar Tema',
		liturgical: {
			// Seasons
			advent: 'Adviento',
			christmas: 'Navidad',
			lent: 'Cuaresma',
			triduum: 'Triduo Pascual',
			easter: 'Pascua',
			ordinary: 'Tiempo Ordinario',
			// Feasts
			epiphany: 'Epifanía',
			presentation: 'La Presentación',
			annunciation: 'La Anunciación',
			transfiguration: 'Transfiguración',
			assumption: 'La Asunción',
			all_saints: 'Todos los Santos',
			all_souls: 'Fieles Difuntos',
			immaculate_conception: 'Inmaculada Concepción',
			guadalupe: 'Nuestra Señora de Guadalupe',
			mother_of_god: 'María, Madre de Dios',
			ash_wednesday: 'Miércoles de Ceniza',
			palm_sunday: 'Domingo de Ramos',
			holy_thursday: 'Jueves Santo',
			good_friday: 'Viernes Santo',
			holy_saturday: 'Sábado Santo',
			easter_sunday: 'Domingo de Resurrección',
			divine_mercy: 'Divina Misericordia',
			ascension: 'La Ascensión',
			pentecost: 'Pentecostés',
			trinity: 'Santísima Trinidad',
			corpus_christi: 'Corpus Christi',
			sacred_heart: 'Sagrado Corazón',
			christ_king: 'Cristo Rey',
			gaudete: 'Domingo Gaudete',
			laetare: 'Domingo Laetare',
			st_joseph: 'San José',
			st_peter_paul: 'San Pedro y San Pablo',
			exaltation_cross: 'Exaltación de la Santa Cruz',
			archangels: 'Santos Arcángeles',
			lateran_basilica: 'Dedicación de la Basílica de Letrán',
			holy_family: 'Sagrada Familia',
			nativity_john_baptist: 'Natividad de San Juan Bautista',
			baptism_lord: 'Bautismo del Señor'
		},
		modes: {
			digital: {
				title: 'Cuentas Digitales',
				desc: 'Sigue tu progreso en la pantalla.'
			},
			physical: {
				title: 'Cuentas Físicas',
				desc: 'Tengo mi propio Rosario. Solo muéstrame las oraciones.'
			},
			mysteries: {
				title: 'Solo los Misterios',
				desc: 'Una lista simple de los 5 misterios'
			}
		},
		actions: {
			next: 'Next',
			back: 'Back',
			exit: 'EXIT?'
		},
		announce: 'Anunciar Misterio',
		sections: {
			intro: 'Introducción',
			decade: 'Misterio',
			conclusion: 'Conclusión'
		},
		ordinals: ['1º', '2º', '3º', '4º', '5º'],
		menus: {
			language: 'Seleccionar Idioma',
			mystery: 'Seleccionar Misterio',
			mode: 'Seleccionar Modo',
			theme: 'Seleccionar Tema',
			jump_to_section: 'Ir a la Sección'
		},
		themes: {
			description: 'Personaliza tu experiencia visual. Esto no afecta la fecha litúrgica.',
			ordinary: 'Tiempo Ordinario',
			christmas_easter: 'Navidad / Pascua',
			advent_lent: 'Adviento / Cuaresma',
			pentecost: 'Pentecostés',
			gaudete: 'Gaudete',
			requiem: 'Réquiem',
			gold: 'Dorado',
			silver: 'Plateado',
			white: 'Blanco',
			red: 'Rojo',
			purple: 'Morado',
			rose: 'Rosa',
			black: 'Negro',
			green: 'Verde'
		}
	},
	prayers: {
		sign_of_cross: {
			id: 'sign_of_cross',
			title: 'Señal de la Cruz',
			content: 'En el nombre del Padre, y del Hijo, y del Espíritu Santo. Amén.'
		},
		creed: {
			id: 'creed',
			title: 'Credo de los Apóstoles',
			content:
				'Creo en Dios, Padre todopoderoso, Creador del cielo y de la tierra. Creo en Jesucristo, su único Hijo, nuestro Señor, que fue concebido por obra y gracia del Espíritu Santo, nació de Santa María Virgen, padeció bajo el poder de Poncio Pilato, fue crucificado, muerto y sepultado, descendió a los infiernos, al tercer día resucitó de entre los muertos, subió a los cielos y está sentado a la derecha de Dios, Padre todopoderoso. Desde allí ha de venir a juzgar a vivos y muertos. Creo en el Espíritu Santo, la santa Iglesia católica, la comunión de los santos, el perdón de los pecados, la resurrección de la carne y la vida eterna. Amén.'
		},
		our_father: {
			id: 'our_father',
			title: 'Padre Nuestro',
			content:
				'Padre nuestro, que estás en el cielo, santificado sea tu nombre; venga a nosotros tu reino; hágase tu voluntad en la tierra como en el cielo. Danos hoy nuestro pan de cada día; perdona nuestras ofensas, como también nosotros perdonamos a los que nos ofenden; no nos dejes caer en la tentación, y líbranos del mal. Amén.'
		},
		hail_mary: {
			id: 'hail_mary',
			title: 'Ave María',
			content:
				'Dios te salve, María, llena eres de gracia; el Señor es contigo. Bendita tú eres entre todas las mujeres, y bendito es el fruto de tu vientre, Jesús. Santa María, Madre de Dios, ruega por nosotros, pecadores, ahora y en la hora de nuestra muerte. Amén.'
		},
		glory_be: {
			id: 'glory_be',
			title: 'Gloria',
			content:
				'Gloria al Padre y al Hijo y al Espíritu Santo. Como era en el principio, ahora y siempre, por los siglos de los siglos. Amén.'
		},
		fatima: {
			id: 'fatima',
			title: 'Jaculatoria de Fátima',
			content:
				'¡Oh Jesús mío!, perdona nuestros pecados, líbranos del fuego del infierno, lleva al cielo a todas las almas, especialmente a las más necesitadas de tu misericordia.'
		},
		hail_holy_queen: {
			id: 'hail_holy_queen',
			title: 'La Salve',
			content:
				'Dios te salve, Reina y Madre de misericordia, vida, dulzura y esperanza nuestra; Dios te salve. A ti llamamos los desterrados hijos de Eva; a ti suspiramos, gimiendo y llorando, en este valle de lágrimas. Ea, pues, Señora, abogada nuestra, vuelve a nosotros esos tus ojos misericordiosos; y después de este destierro muéstranos a Jesús, fruto bendito de tu vientre. ¡Oh clementísima, oh piadosa, oh dulce Virgen María!\n\nV. Ruega por nosotros, Santa Madre de Dios.\nR. Para que seamos dignos de alcanzar las promesas de Nuestro Señor Jesucristo.'
		},
		closing_prayer: {
			id: 'closing_prayer',
			title: 'Oración Final',
			content:
				'Oremos. Oh Dios, cuyo Unigénito Hijo, con su vida, muerte y resurrección, nos alcanzó el premio de la vida eterna: concédenos, a los que meditamos estos misterios del Santísimo Rosario de la Bienaventurada Virgen María, imitar lo que contienen y alcanzar lo que prometen. Por el mismo Jesucristo Nuestro Señor. Amén.'
		}
	},
	mysteries: {
		joyful: {
			id: 'joyful',
			name: 'Misterios Gozosos',
			days: [1, 6],
			passages: [
				'La Encarnación del Hijo de Dios: "Dijo María: «He aquí la esclava del Señor; hágase en mí según tu palabra»." (Lucas 1, 38)\n\nFruto del Misterio: Humildad',
				'La Visitación de Nuestra Señora: "¡Bendita tú eres entre todas las mujeres, y bendito es el fruto de tu vientre!" (Lucas 1, 42)\n\nFruto del Misterio: Amor al Prójimo',
				'El Nacimiento del Hijo de Dios: "Dio a luz a su hijo primogénito, lo envolvió en pañales y lo recostó en un pesebre." (Lucas 2, 7)\n\nFruto del Misterio: Pobreza de Espíritu',
				'La Presentación en el Templo: "Han visto mis ojos tu salvación, la que has preparado a la vista de todos los pueblos." (Lucas 2, 30-31)\n\nFruto del Misterio: Obediencia',
				'El Niño Perdido y Hallado en el Templo: "Al cabo de tres días lo encontraron en el Templo, sentado en medio de los maestros, escuchándoles y haciéndoles preguntas." (Lucas 2, 46)\n\nFruto del Misterio: Piedad'
			]
		},
		luminous: {
			id: 'luminous',
			name: 'Misterios Luminosos',
			days: [4],
			passages: [
				'El Bautismo en el Jordán: "Una voz que salía de los cielos decía: «Este es mi Hijo amado, en quien me complazco»." (Mateo 3, 17)\n\nFruto del Misterio: Apertura al Espíritu Santo',
				'Las Bodas de Caná: "Su madre dijo a los sirvientes: «Hagan lo que él les diga»." (Juan 2, 5)\n\nFruto del Misterio: A Jesús por María',
				'El Anuncio del Reino de Dios: "El tiempo se ha cumplido y el Reino de Dios está cerca; conviértanse y crean en la Buena Nueva." (Marcos 1, 15)\n\nFruto del Misterio: Arrepentimiento y Confianza en Dios',
				'La Transfiguración: "Se transfiguró delante de ellos: su rostro se puso brillante como el sol y sus vestidos se volvieron blancos como la luz." (Mateo 17, 2)\n\nFruto del Misterio: Deseo de Santidad',
				'La Institución de la Eucaristía: "Tomen y coman; esto es mi cuerpo." (Mateo 26, 26)\n\nFruto del Misterio: Adoración'
			]
		},
		sorrowful: {
			id: 'sorrowful',
			name: 'Misterios Dolorosos',
			days: [2, 5],
			passages: [
				'La Oración en el Huerto: "Lleno de angustia, oraba con más insistencia; y su sudor se hizo como gotas espesas de sangre que caían en tierra." (Lucas 22, 44)\n\nFruto del Misterio: Arrepentimiento por los Pecados',
				'La Flagelación del Señor: "Entonces Pilato tomó a Jesús y mandó azotarle." (Juan 19, 1)\n\nFruto del Misterio: Pureza',
				'La Coronación de Espinas: "Le vistieron de púrpura y, trenzando una corona de espinas, se la ciñeron." (Marcos 15, 17)\n\nFruto del Misterio: Valor Moral',
				'Jesús con la Cruz a Cuestas: "Tomaron, pues, a Jesús, y él cargando con su cruz, salió hacia el lugar llamado Calvario." (Juan 19, 17)\n\nFruto del Misterio: Paciencia',
				'La Crucifixión y Muerte: "Jesús, dando un fuerte grito, dijo: «Padre, en tus manos encomiendo mi espíritu» y, dicho esto, expiró." (Lucas 23, 46)\n\nFruto del Misterio: Perseverancia'
			]
		},
		glorious: {
			id: 'glorious',
			name: 'Misterios Gloriosos',
			days: [0, 3],
			passages: [
				'La Resurrección del Hijo de Dios: "Ha resucitado, no está aquí. Vean el lugar donde le pusieron." (Marcos 16, 6)\n\nFruto del Misterio: Fe',
				'La Ascensión del Señor: "El Señor Jesús, después de hablarles, fue elevado al cielo y se sentó a la diestra de Dios." (Marcos 16, 19)\n\nFruto del Misterio: Esperanza',
				'La Venida del Espíritu Santo: "Quedaron todos llenos del Espíritu Santo y se pusieron a hablar en otras lenguas." (Hechos 2, 4)\n\nFruto del Misterio: Sabiduría',
				'La Asunción de María: "Bendita eres tú, hija, del Dios Altísimo, más que todas las mujeres de la tierra." (Judit 13, 18)\n\nFruto del Misterio: Gracia de una Buena Muerte',
				'La Coronación de María: "Una gran señal apareció en el cielo: una Mujer, vestida del sol, con la luna bajo sus pies, y una corona de doce estrellas sobre su cabeza." (Apocalipsis 12, 1)\n\nFruto del Misterio: Confianza en la Intercesión de María'
			]
		}
	}
};
