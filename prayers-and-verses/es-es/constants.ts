import type { LocalizationData } from '$lib/types';

export const es_es: LocalizationData = {
    lang: 'es-ES',
    seo: {
        title: 'Santo Rosario',
        description:
            'Reza el Rosario. Rápido, gratuito y adaptado al móvil. Una aplicación web moderna, de código abierto y fácil de usar en cualquier dispositivo.'
    },
    ui: {
        start_button: 'Empezar a Rezar',
        pick_mystery: 'Cambiar Misterio',
        footer_made_by: 'CREADO POR',
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
            epiphany: 'Epifanía del Señor',
            presentation: 'Presentación del Señor',
            annunciation: 'Anunciación del Señor',
            transfiguration: 'Transfiguración del Señor',
            assumption: 'Asunción de la Virgen',
            all_saints: 'Todos los Santos',
            all_souls: 'Fieles Difuntos',
            immaculate_conception: 'Inmaculada Concepción',
            guadalupe: 'Nuestra Señora de Guadalupe',
            mother_of_god: 'Santa María, Madre de Dios',
            ash_wednesday: 'Miércoles de Ceniza',
            palm_sunday: 'Domingo de Ramos',
            holy_thursday: 'Jueves Santo',
            good_friday: 'Viernes Santo',
            holy_saturday: 'Sábado Santo',
            easter_sunday: 'Domingo de Resurrección',
            divine_mercy: 'Domingo de la Divina Misericordia',
            ascension: 'Ascensión del Señor',
            pentecost: 'Pentecostés',
            trinity: 'Santísima Trinidad',
            corpus_christi: 'Corpus Christi',
            sacred_heart: 'Sagrado Corazón de Jesús',
            christ_king: 'Jesucristo Rey del Universo',
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
                desc: 'Una lista sencilla de los 5 misterios'
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
            description: 'Personaliza tu experiencia visual. Esto no afecta a la fecha litúrgica.',
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
                'La Encarnación del Hijo de Dios: "María contestó: «He aquí la esclava del Señor; hágase en mí según tu palabra»." (Lucas 1, 38)\n\nFruto del Misterio: Humildad',
                'La Visitación de Nuestra Señora: "¡Bendita tú entre las mujeres, y bendito el fruto de tu vientre!" (Lucas 1, 42)\n\nFruto del Misterio: Amor al Prójimo',
                'El Nacimiento del Hijo de Dios: "Y dio a luz a su hijo primogénito, lo envolvió en pañales y lo recostó en un pesebre." (Lucas 2, 7)\n\nFruto del Misterio: Pobreza de Espíritu',
                'La Presentación en el Templo: "Porque mis ojos han visto a tu Salvador, a quien has presentado ante todos los pueblos." (Lucas 2, 30-31)\n\nFruto del Misterio: Obediencia',
                'El Niño Perdido y Hallado en el Templo: "A los tres días, lo encontraron en el templo, sentado en medio de los maestros, escuchándolos y haciéndoles preguntas." (Lucas 2, 46)\n\nFruto del Misterio: Gozo en las cosas del Señor'
            ]
        },
        luminous: {
            id: 'luminous',
            name: 'Misterios Luminosos',
            days: [4],
            passages: [
                'El Bautismo en el Jordán: "Y una voz que salía de los cielos decía: «Este es mi Hijo amado, en quien me complazco»." (Mateo 3, 17)\n\nFruto del Misterio: Apertura al Espíritu Santo',
                'Las Bodas de Caná: "Su madre dice a los sirvientes: «Haced lo que él os diga»." (Juan 2, 5)\n\nFruto del Misterio: A Jesús por María',
                'El Anuncio del Reino de Dios: "Se ha cumplido el tiempo y está cerca el reino de Dios. Convertíos y creed en el Evangelio." (Marcos 1, 15)\n\nFruto del Misterio: Conversión',
                'La Transfiguración: "Y se transfiguró delante de ellos, y su rostro resplandecía como el sol, y sus vestidos se volvieron blancos como la luz." (Mateo 17, 2)\n\nFruto del Misterio: Deseo de Santidad',
                'La Institución de la Eucaristía: "Tomad, comed: esto es mi cuerpo." (Mateo 26, 26)\n\nFruto del Misterio: Adoración Eucarística'
            ]
        },
        sorrowful: {
            id: 'sorrowful',
            name: 'Misterios Dolorosos',
            days: [2, 5],
            passages: [
                'La Oración en el Huerto: "Y, sumido en agonía, insistía más en su oración. Su sudor se hizo como gotas espesas de sangre que caían en tierra." (Lucas 22, 44)\n\nFruto del Misterio: Dolor de los pecados',
                'La Flagelación del Señor: "Entonces Pilato tomó a Jesús y lo mandó azotar." (Juan 19, 1)\n\nFruto del Misterio: Pureza y mortificación',
                'La Coronación de Espinas: "Lo vistieron de púrpura, trenzaron una corona de espinas y se la ciñeron." (Marcos 15, 17)\n\nFruto del Misterio: Fortaleza moral',
                'Jesús con la Cruz a Cuestas: "Y él, cargando con la cruz, salió al sitio llamado «de la Calavera»." (Juan 19, 17)\n\nFruto del Misterio: Paciencia',
                'La Crucifixión y Muerte: "Jesús, clamando con voz potente, dijo: «Padre, a tus manos encomiendo mi espíritu». Y, dicho esto, expiró." (Lucas 23, 46)\n\nFruto del Misterio: Perseverancia final'
            ]
        },
        glorious: {
            id: 'glorious',
            name: 'Misterios Gloriosos',
            days: [0, 3],
            passages: [
                'La Resurrección del Hijo de Dios: "Ha resucitado, no está aquí. Mirad el sitio donde lo pusieron." (Marcos 16, 6)\n\nFruto del Misterio: Fe',
                'La Ascensión del Señor: "El Señor Jesús, después de hablarles, ascendió al cielo y se sentó a la derecha de Dios." (Marcos 16, 19)\n\nFruto del Misterio: Esperanza',
                'La Venida del Espíritu Santo: "Se llenaron todos de Espíritu Santo y empezaron a hablar en otras lenguas." (Hechos 2, 4)\n\nFruto del Misterio: Caridad y Dones del Espíritu',
                'La Asunción de María: "¡Tú eres el orgullo de Jerusalén! ¡Tú la alegría de Israel! ¡Tú el honor de nuestra raza!" (Judit 15, 9)\n\nFruto del Misterio: Gracia de una Buena Muerte',
                'La Coronación de María: "Apareció una figura portentosa en el cielo: una mujer vestida de sol, la luna por pedestal, coronada con doce estrellas." (Apocalipsis 12, 1)\n\nFruto del Misterio: Confianza en María'
            ]
        }
    }
};
