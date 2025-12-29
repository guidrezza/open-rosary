import type { LocalizationData } from '$lib/types';

export const pt_pt: LocalizationData = {
    lang: 'pt-PT',
    seo: {
        title: 'Santo Rosário',
        description:
            'Reze o Rosário. Rápido, gratuito e otimizado para telemóveis. Uma aplicação web moderna, open source e fácil de usar em qualquer dispositivo.'
    },
    ui: {
        start_button: 'Começar a Rezar',
        pick_mystery: 'Mudar de Mistério',
        footer_made_by: 'CRIADO POR',
        recommended_mystery: 'Mistério Recomendado',
        pray_button_prefix: 'Rezar Recomendado',
        change_theme: 'Mudar Tema',
        liturgical: {
            // Seasons
            advent: 'Advento',
            christmas: 'Natal',
            lent: 'Quaresma',
            triduum: 'Tríduo Pascal',
            easter: 'Páscoa',
            ordinary: 'Tempo Comum',
            // Feasts
            epiphany: 'Epifania do Senhor',
            presentation: 'Apresentação do Senhor',
            annunciation: 'Anunciação do Senhor',
            transfiguration: 'Transfiguração do Senhor',
            assumption: 'Assunção de Nossa Senhora',
            all_saints: 'Todos os Santos',
            all_souls: 'Comemoração de Todos os Fiéis Defuntos',
            immaculate_conception: 'Imaculada Conceição',
            guadalupe: 'Nossa Senhora de Guadalupe',
            mother_of_god: 'Santa Maria, Mãe de Deus',
            ash_wednesday: 'Quarta-feira de Cinzas',
            palm_sunday: 'Domingo de Ramos',
            holy_thursday: 'Quinta-feira Santa',
            good_friday: 'Sexta-feira Santa',
            holy_saturday: 'Sábado Santo',
            easter_sunday: 'Domingo de Páscoa',
            divine_mercy: 'Domingo da Divina Misericórdia',
            ascension: 'Ascensão do Senhor',
            pentecost: 'Pentecostes',
            trinity: 'Santíssima Trindade',
            corpus_christi: 'Corpo de Deus (Corpus Christi)',
            sacred_heart: 'Sagrado Coração de Jesus',
            christ_king: 'Cristo Rei',
            gaudete: 'Domingo Gaudete',
            laetare: 'Domingo Laetare',
            st_joseph: 'São José',
            st_peter_paul: 'São Pedro e São Paulo',
            exaltation_cross: 'Exaltação da Santa Cruz',
            archangels: 'Santos Arcanjos',
            lateran_basilica: 'Dedicação da Basílica de Latrão',
            holy_family: 'Sagrada Família',
            nativity_john_baptist: 'Natividade de São João Batista',
            baptism_lord: 'Batismo do Senhor'
        },
        modes: {
            digital: {
                title: 'Contas Digitais',
                desc: 'Acompanhe o progresso no ecrã.'
            },
            physical: {
                title: 'Contas Físicas',
                desc: 'Tenho o meu próprio Rosário. Mostre apenas as orações.'
            },
            mysteries: {
                title: 'Apenas os Mistérios',
                desc: 'Uma lista simples dos 5 mistérios'
            }
        },
        actions: {
            next: 'Seguinte',
            back: 'Anterior',
            exit: 'SAIR?'
        },
        announce: 'Anunciar o Mistério',
        sections: {
            intro: 'Introdução',
            decade: 'Mistério',
            conclusion: 'Conclusão'
        },
        ordinals: ['1.º', '2.º', '3.º', '4.º', '5.º'],
        menus: {
            language: 'Selecionar Idioma',
            mystery: 'Selecionar Mistério',
            mode: 'Selecionar Modo',
            theme: 'Selecionar Tema',
            jump_to_section: 'Ir para Secção'
        },
        themes: {
            description: 'Personalize a sua experiência visual. Isto não afeta a data litúrgica.',
            ordinary: 'Tempo Comum',
            christmas_easter: 'Natal / Páscoa',
            advent_lent: 'Advento / Quaresma',
            pentecost: 'Pentecostes',
            gaudete: 'Gaudete',
            requiem: 'Réquiem',
            gold: 'Dourado',
            silver: 'Prateado',
            white: 'Branco',
            red: 'Vermelho',
            purple: 'Roxo',
            rose: 'Rosa',
            black: 'Preto',
            green: 'Verde'
        }
    },
    prayers: {
        sign_of_cross: {
            id: 'sign_of_cross',
            title: 'Sinal da Cruz',
            content: 'Em nome do Pai, e do Filho, e do Espírito Santo. Ámen.'
        },
        creed: {
            id: 'creed',
            title: 'Credo dos Apóstolos',
            content:
                'Creio em Deus, Pai todo-poderoso, Criador do céu e da terra; e em Jesus Cristo, seu único Filho, nosso Senhor, que foi concebido pelo poder do Espírito Santo; nasceu da Virgem Maria; padeceu sob Pôncio Pilatos, foi crucificado, morto e sepultado; desceu à mansão dos mortos; ressuscitou ao terceiro dia; subiu aos céus; está sentado à direita de Deus Pai todo-poderoso, de onde há de vir a julgar os vivos e os mortos. Creio no Espírito Santo, na Santa Igreja Católica, na comunhão dos Santos, na remissão dos pecados, na ressurreição da carne, na vida eterna. Ámen.'
        },
        our_father: {
            id: 'our_father',
            title: 'Pai Nosso',
            content:
                'Pai nosso, que estais nos céus, santificado seja o vosso nome; venha a nós o vosso reino; seja feita a vossa vontade assim na terra como no céu. O pão nosso de cada dia nos dai hoje; perdoai-nos as nossas ofensas, assim como nós perdoamos a quem nos tem ofendido; e não nos deixeis cair em tentação; mas livrai-nos do mal. Ámen.'
        },
        hail_mary: {
            id: 'hail_mary',
            title: 'Ave Maria',
            content:
                'Ave, Maria, cheia de graça, o Senhor é convosco; bendita sois vós entre as mulheres e bendito é o fruto do vosso ventre, Jesus. Santa Maria, Mãe de Deus, rogai por nós, pecadores, agora e na hora da nossa morte. Ámen.'
        },
        glory_be: {
            id: 'glory_be',
            title: 'Glória',
            content:
                'Glória ao Pai, e ao Filho, e ao Espírito Santo. Como era no princípio, agora e sempre. Ámen.'
        },
        fatima: {
            id: 'fatima',
            title: 'Oração de Fátima',
            content:
                'Ó meu Jesus, perdoai-nos, livrai-nos do fogo do inferno; levai as almas todas para o Céu, principalmente as que mais precisarem.'
        },
        hail_holy_queen: {
            id: 'hail_holy_queen',
            title: 'Salvé Rainha',
            content:
                'Salvé, Rainha, Mãe de misericórdia, vida, doçura e esperança nossa, salvé! A vós bradamos, os degredados filhos de Eva; a vós suspiramos, gemendo e chorando neste vale de lágrimas. Eia, pois, advogada nossa, esses vossos olhos misericordiosos a nós volvei; e depois deste desterro mostrai-nos Jesus, bendito fruto do vosso ventre. Ó clemente, ó piedosa, ó doce Virgem Maria.\n\nV. Rogai por nós, Santa Mãe de Deus.\nR. Para que sejamos dignos das promessas de Cristo.'
        },
        closing_prayer: {
            id: 'closing_prayer',
            title: 'Oração Final',
            content:
                'Oremos. Ó Deus, cujo Filho Unigénito, pela sua vida, morte e ressurreição, nos alcançou os prémios da salvação eterna: concedei-nos, nós Voo pedimos, que, meditando estes mistérios do Santíssimo Rosário da Virgem Maria, imitemos o que contêm e alcancemos o que prometem. Por Cristo, nosso Senhor. Ámen.'
        }
    },
    mysteries: {
        joyful: {
            id: 'joyful',
            name: 'Mistérios Gozosos',
            days: [1, 6],
            passages: [
                'A Anunciação do Anjo a Maria: "Disse então Maria: «Eis a serva do Senhor; faça-se em mim segundo a tua palavra»." (Lucas 1, 38)\n\nFruto do Mistério: Humildade',
                'A Visitação de Nossa Senhora a Santa Isabel: "Bendita és tu entre as mulheres e bendito é o fruto do teu ventre." (Lucas 1, 42)\n\nFruto do Mistério: Caridade com o Próximo',
                'O Nascimento de Jesus em Belém: "Deu à luz o seu filho primogénito, envolveu-O em panos e recostou-O numa manjedoura." (Lucas 2, 7)\n\nFruto do Mistério: Pobreza de Espírito',
                'A Apresentação do Menino Jesus no Templo: "Os meus olhos viram a tua salvação, que preparaste em favor de todos os povos." (Lucas 2, 30-31)\n\nFruto do Mistério: Obediência',
                'O Encontro do Menino Jesus no Templo: "Três dias depois, encontraram-No no templo, sentado entre os doutores, a ouvi-los e a fazer-lhes perguntas." (Lucas 2, 46)\n\nFruto do Mistério: Alegria em encontrar Jesus'
            ]
        },
        luminous: {
            id: 'luminous',
            name: 'Mistérios Luminosos',
            days: [4],
            passages: [
                'O Batismo de Jesus no Rio Jordão: "Voz vinda dos céus dizia: «Este é o meu Filho muito amado, no qual pus toda a minha complacência»." (Mateus 3, 17)\n\nFruto do Mistério: Graça de ser Filho de Deus',
                'A Autorrevelação de Jesus nas Bodas de Caná: "Sua Mãe disse aos serventes: «Fazei tudo o que Ele vos disser»." (João 2, 5)\n\nFruto do Mistério: Confiança na vontade de Deus',
                'O Anúncio do Reino de Deus e o convite à conversão: "Cumpriu-se o tempo e está próximo o reino de Deus. Arrependei-vos e acreditai no Evangelho." (Marcos 1, 15)\n\nFruto do Mistério: Conversão do Coração',
                'A Transfiguração de Jesus no Monte Tabor: "Transfigurou-Se diante deles: o seu rosto resplandeceu como o sol e as suas vestes tornaram-se brancas como a luz." (Mateus 17, 2)\n\nFruto do Mistério: Desejo do Céu',
                'A Instituição da Eucaristia: "Tomai e comei: Isto é o meu corpo." (Mateus 26, 26)\n\nFruto del Mistério: Devoção ao Santíssimo Sacramento'
            ]
        },
        sorrowful: {
            id: 'sorrowful',
            name: 'Mistérios Dolorosos',
            days: [2, 5],
            passages: [
                'A Agonia de Jesus no Jardim das Oliveiras: "Entrou em agonia e orava mais instantemente. O seu suor tornou-se como gotas de sangue a cair sobre a terra." (Lucas 22, 44)\n\nFruto do Mistério: Contrição dos Pecados',
                'A Flagelação de Jesus: "Então Pilatos mandou levar Jesus e açoitá-l\'O." (João 19, 1)\n\nFruto do Mistério: Mortificação dos Sentidos',
                'A Coroação de Espinhos: "Teceram uma coroa de espinhos, puseram-lha na cabeça e vestiram-No com um manto de púrpura." (Marcos 15, 17)\n\nFruto do Mistério: Mortificação do Orgulho',
                'Jesus com a Cruz a caminho do Calvário: "Levando a sua cruz, Jesus saiu para o lugar chamado Calvário." (João 19, 17)\n\nFruto do Mistério: Paciência nas Tribulações',
                'A Crucificação e Morte de Jesus: "Jesus, bradando com voz forte, disse: «Pai, nas tuas mãos entrego o meu espírito». Dito isto, expirou." (Lucas 23, 46)\n\nFruto do Mistério: Perseverança e Salvação das Almas'
            ]
        },
        glorious: {
            id: 'glorious',
            name: 'Mistérios Gloriosos',
            days: [0, 3],
            passages: [
                'A Ressurreição de Jesus: "Ressuscitou; não está aqui. Vede o lugar onde O tinham depositado." (Marcos 16, 6)\n\nFruto do Mistério: Fé',
                'A Ascensão de Jesus ao Céu: "O Senhor Jesus, depois de lhes ter falado, foi arrebatado ao céu e sentou-Se à direita de Deus." (Marcos 16, 19)\n\nFruto do Mistério: Esperança',
                'A Descida do Espírito Santo: "Todos ficaram cheios do Espírito Santo e começaram a falar outras línguas." (Atos 2, 4)\n\nFruto do Mistério: Amor a Deus e Caridade',
                'A Assunção de Maria ao Céu: "És toda formosa, minha amada, em ti não há mancha alguma." (Cânticos 4, 7)\n\nFruto do Mistério: Graça de uma Boa Morte',
                'A Coroação de Maria como Rainha do Céu e da Terra: "Apareceu no céu um grande sinal: uma mulher revestida de sol, com a lua debaixo dos pés e uma coroa de doze estrelas na cabeça." (Apocalipse 12, 1)\n\nFruto do Mistério: Confiança na Intercessão de Maria'
            ]
        }
    }
};