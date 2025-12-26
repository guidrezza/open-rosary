import type { LocalizationData } from '$lib/types';

export const pt_br: LocalizationData = {
    lang: 'pt-BR',
    seo: {
        title: 'Santo Rosário',
        description: 'Uma maneira simples e bonita de rezar o Rosário.'
    },
    ui: {
        start_button: 'Começar a Rezar',
        pick_mystery: 'Mudar Mistério',
        made_by: 'Feito por guidrezza',
        recommended_mystery: 'Mistério Recomendado',
        pray_button_prefix: 'Rezar Recomendado',
        change_theme: 'Mudar Tema',
        modes: {
            digital: {
                title: 'Terço Digital',
                desc: 'Acompanhe seu progresso na tela.'
            },
            physical: {
                title: 'Terço Físico',
                desc: 'Tenho meu próprio terço. Apenas mostre as orações.'
            }
        },
        actions: {
            next: 'Next',
            back: 'Back',
            exit: 'EXIT?'
        },
        announce: 'Anunciar Mistério',
        sections: {
            intro: 'Introdução',
            decade: 'Mistério',
            conclusion: 'Conclusão'
        },
        ordinals: ['1º', '2º', '3º', '4º', '5º'],
        menus: {
            language: 'Selecionar Idioma',
            mystery: 'Selecionar Mistério',
            mode: 'Selecionar Modo',
            theme: 'Selecionar Tema',
            jump_to_section: 'Ir para Seção'
        },
        themes: {
            ordinary: 'Tempo Comum',
            christmas_easter: 'Natal / Páscoa',
            advent_lent: 'Advento / Quaresma',
            pentecost: 'Pentecostes',
            gaudete: 'Gaudete',
            requiem: 'Réquiem'
        }
    },
    prayers: {
        sign_of_cross: {
            id: 'sign_of_cross',
            title: 'Sinal da Cruz',
            content: 'Em nome do Pai e do Filho e do Espírito Santo. Amém.'
        },
        creed: {
            id: 'creed',
            title: 'Creio',
            content: 'Creio em Deus Pai Todo-Poderoso, criador do céu e da terra. E em Jesus Cristo, seu único Filho, nosso Senhor, que foi concebido pelo poder do Espírito Santo; nasceu da Virgem Maria; padeceu sob Pôncio Pilatos, foi crucificado, morto e sepultado. Desceu à mansão dos mortos; ressuscitou ao terceiro dia; subiu aos céus; está sentado à direita de Deus Pai Todo-Poderoso, donde há de vir a julgar os vivos e os mortos. Creio no Espírito Santo; na Santa Igreja Católica; na comunhão dos santos; na remissão dos pecados; na ressurreição da carne; na vida eterna. Amém.'
        },
        our_father: {
            id: 'our_father',
            title: 'Pai Nosso',
            content: 'Pai Nosso que estais nos Céus, santificado seja o vosso Nome, venha a nós o vosso Reino, seja feita a vossa vontade assim na terra como no Céu. O pão nosso de cada dia nos dai hoje, perdoai-nos as nossas ofensas assim como nós perdoamos a quem nos tem ofendido, e não nos deixeis cair em tentação, mas livrai-nos do mal. Amém.'
        },
        hail_mary: {
            id: 'hail_mary',
            title: 'Ave Maria',
            content: 'Ave Maria, cheia de graça, o Senhor é convosco, bendita sois vós entre as mulheres e bendito é o fruto do vosso ventre, Jesus. Santa Maria, Mãe de Deus, rogai por nós, pecadores, agora e na hora de nossa morte. Amém.'
        },
        glory_be: {
            id: 'glory_be',
            title: 'Glória ao Pai',
            content: 'Glória ao Pai e ao Filho e ao Espírito Santo. Como era no princípio, agora e sempre. Amém.'
        },
        fatima: {
            id: 'fatima',
            title: 'Jaculatória de Fátima',
            content: 'Ó meu Jesus, perdoai-nos, livrai-nos do fogo do inferno, levai as almas todas para o céu e socorrei principalmente as que mais precisarem.'
        },
        hail_holy_queen: {
            id: 'hail_holy_queen',
            title: 'Salve Rainha',
            content: 'Salve, Rainha, Mãe de misericórdia, vida, doçura e esperança nossa, salve! A vós bradamos os degredados filhos de Eva. A vós suspiramos, gemendo e chorando neste vale de lágrimas. Eia, pois, advogada nossa, esses vossos olhos misericordiosos a nós volvei, e depois deste desterro mostrai-nos Jesus, bendito fruto do vosso ventre, ó clemente, ó piedosa, ó doce sempre Virgem Maria.'
        },
        closing_prayer: {
            id: 'closing_prayer',
            title: 'Oração Final',
            content: 'Oremos. Ó Deus, cujo Unigênito Filho, por sua vida, morte e ressurreição, nos alcançou os prêmios da vida eterna, concedei-nos, nós vo-lo pedimos, que, meditando estes mistérios do Sacratíssimo Rosário da Bem-Aventurada Virgem Maria, imitemos o que contêm e consigamos o que prometem. Pelo mesmo Cristo, nosso Senhor. Amém.'
        }
    },
    mysteries: {
        joyful: {
            id: 'joyful',
            name: 'Mistérios Gozosos',
            days: [1, 6],
            passages: [
                "A Anunciação: \"Disse Maria: 'Eis aqui a serva do Senhor; faça-se em mim segundo a tua palavra!'\" (Lucas 1, 38)\n\nFruto do Mistério: Humildade",
                "A Visitação: \"Bendita és tu entre as mulheres e bendito é o fruto do teu ventre!\" (Lucas 1, 42)\n\nFruto do Mistério: Amor ao Próximo",
                "O Nascimento de Jesus: \"Ela deu à luz o seu filho primogênito, enfaixou-o e o deitou numa manjedoura.\" (Lucas 2, 7)\n\nFruto do Mistério: Pobreza de Espírito",
                "A Apresentação no Templo: \"Meus olhos viram a tua salvação, que preparaste em face de todos os povos.\" (Lucas 2, 30-31)\n\nFruto do Mistério: Obediência",
                "A Perda e o Encontro no Templo: \"Três dias depois o acharam no templo, sentado no meio dos doutores, ouvindo-os e interrogando-os.\" (Lucas 2, 46)\n\nFruto do Mistério: Piedade"
            ]
        },
        luminous: {
            id: 'luminous',
            name: 'Mistérios Luminosos',
            days: [4],
            passages: [
                "O Batismo no Jordão: \"E uma voz vinda dos céus dizia: 'Este é o meu Filho amado, no qual eu pus o meu agrado'.\" (Mateus 3, 17)\n\nFruto do Mistério: Abertura ao Espírito Santo",
                "As Bodas de Caná: \"Sua mãe disse aos que estavam servindo: 'Fazei tudo o que ele vos disser'.\" (João 2, 5)\n\nFruto do Mistério: A Jesus por Maria",
                "O Anúncio do Reino de Deus: \"O tempo já se completou e o Reino de Deus está próximo. Convertei-vos e crede no Evangelho!\" (Marcos 1, 15)\n\nFruto do Mistério: Arrependimento e Confiança em Deus",
                "A Transfiguração: \"Transfigurou-se diante deles: seu rosto brilhou como o sol, e suas roupas ficaram brancas como a luz.\" (Mateus 17, 2)\n\nFruto do Mistério: Desejo de Santidade",
                "A Instituição da Eucaristia: \"Tomai e comei, isto é o meu corpo.\" (Mateus 26, 26)\n\nFruto do Mistério: Adoração"
            ]
        },
        sorrowful: {
            id: 'sorrowful',
            name: 'Mistérios Dolorosos',
            days: [2, 5],
            passages: [
                "A Agonia no Horto: \"Entrando em agonia, Jesus orava com mais insistência. Seu suor tornou-se como gotas de sangue que caíam no chão.\" (Lucas 22, 44)\n\nFruto do Mistério: Arrependimento dos Pecados",
                "A Flagelação do Senhor: \"Então Pilatos mandou flagelar Jesus.\" (João 19, 1)\n\nFruto do Mistério: Pureza",
                "A Coroação de Espinhos: \"Teceram uma coroa de espinhos, puseram-na em sua cabeça.\" (Marcos 15, 17)\n\nFruto do Mistério: Coragem Moral",
                "O Caminho da Cruz: \"Jesus tomou a cruz sobre si e saiu para o lugar chamado Calvário.\" (João 19, 17)\n\nFruto do Mistério: Paciência",
                "A Crucificação e Morte: \"Jesus deu um forte grito: 'Pai, em tuas mãos entrego o meu espírito'. Dizendo isso, expirou.\" (Lucas 23, 46)\n\nFruto do Mistério: Perseverança"
            ]
        },
        glorious: {
            id: 'glorious',
            name: 'Mistérios Gloriosos',
            days: [0, 3],
            passages: [
                "A Ressurreição: \"Ele ressuscitou, não está aqui. Vede o lugar onde o puseram.\" (Marcos 16, 6)\n\nFruto do Mistério: Fé",
                "A Ascensão: \"O Senhor Jesus, depois de lhes ter falado, foi elevado ao céu e sentou-se à direita de Deus.\" (Marcos 16, 19)\n\nFruto do Mistério: Esperança",
                "A Vinda do Espírito Santo: \"Ficaram todos cheios do Espírito Santo e começaram a falar em outras línguas.\" (Atos 2, 4)\n\nFruto do Mistério: Sabedoria",
                "A Assunção de Maria: \"Tu és bendita, ó filha, pelo Deus Altíssimo, mais que todas as mulheres da terra.\" (Judite 13, 18)\n\nFruto do Mistério: Graça de uma Boa Morte",
                "A Coroação de Maria: \"Apareceu no céu um grande sinal: uma mulher vestida do sol, tendo a lua debaixo dos pés e sobre a cabeça uma coroa de doze estrelas.\" (Apocalipse 12, 1)\n\nFruto do Mistério: Confiança na Intercessão de Maria"
            ]
        }
    }
};
