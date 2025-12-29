import type { LocalizationData } from '$lib/types';

export const zh_cn: LocalizationData = {
    lang: 'zh-CN',
    seo: {
        title: '玫瑰经',
        description:
            '祈祷玫瑰经。快速、免费且适合移动设备。一个现代化的开源网络应用，可在任何设备上轻松使用。'
    },
    ui: {
        start_button: '开始祈祷',
        pick_mystery: '更换奥迹',
        footer_made_by: '制作：',
        recommended_mystery: '今日奥迹',
        pray_button_prefix: '祈祷：',
        change_theme: '更换主题',
        liturgical: {
            // Seasons
            advent: '将临期',
            christmas: '圣诞期',
            lent: '四旬期',
            triduum: '逾越节三日庆典',
            easter: '复活期',
            ordinary: '常年期',
            // Feasts
            epiphany: '主显节',
            presentation: '献主节',
            annunciation: '预报救主降生',
            transfiguration: '耶稣显圣容',
            assumption: '圣母升天',
            all_saints: '诸圣节',
            all_souls: '追思已亡',
            immaculate_conception: '圣母无染原罪',
            guadalupe: '瓜达卢佩圣母',
            mother_of_god: '天主之母节',
            ash_wednesday: '圣灰礼仪星期三',
            palm_sunday: '圣枝主日',
            holy_thursday: '圣周四',
            good_friday: '圣周五 (救主受难日)',
            holy_saturday: '圣周六',
            easter_sunday: '复活主日',
            divine_mercy: '救主慈悲主日',
            ascension: '耶稣升天',
            pentecost: '五旬节 (圣神降临)',
            trinity: '天主圣三节',
            corpus_christi: '基督圣体圣血节',
            sacred_heart: '耶稣圣心节',
            christ_king: '基督普世君王节',
            gaudete: '喜乐主日 (将临期第三主日)',
            laetare: '喜乐主日 (四旬期第四主日)',
            st_joseph: '大圣若瑟瞻礼',
            st_peter_paul: '圣伯多禄及圣保禄宗徒瞻礼',
            exaltation_cross: '光荣十字架庆日',
            archangels: '诸圣天使长',
            lateran_basilica: '拉特朗大殿奉献日',
            holy_family: '圣家节',
            nativity_john_baptist: '洗者若翰诞辰',
            baptism_lord: '主受洗节'
        },
        modes: {
            digital: {
                title: '数字念珠',
                desc: '在屏幕上追踪祈祷进度。'
            },
            physical: {
                title: '实体念珠',
                desc: '我有自己的念珠。只显示经文。'
            },
            mysteries: {
                title: '仅显示奥迹',
                desc: '五端奥迹的简单列表'
            }
        },
        actions: {
            next: '下一步',
            back: '返回',
            exit: '退出？'
        },
        announce: '宣读奥迹',
        sections: {
            intro: '序经',
            decade: '一端',
            conclusion: '结束祷文'
        },
        ordinals: ['第一端', '第二端', '第三端', '第四端', '第五端'],
        menus: {
            language: '选择语言',
            mystery: '选择奥迹',
            mode: '选择模式',
            theme: '选择主题',
            jump_to_section: '跳转至'
        },
        themes: {
            description: '自定义视觉体验。这不会影响礼仪日期。',
            ordinary: '常年期',
            christmas_easter: '圣诞 / 复活',
            advent_lent: '将临 / 四旬',
            pentecost: '圣神降临',
            gaudete: '喜乐 (Gaudete)',
            requiem: '追思 (Requiem)',
            gold: '金色',
            silver: '银色',
            white: '白色',
            red: '红色',
            purple: '紫色',
            rose: '玫瑰色',
            black: '黑色',
            green: '绿色'
        }
    },
    prayers: {
        sign_of_cross: {
            id: 'sign_of_cross',
            title: '圣号经',
            content: '因父，及子，及圣神之名。阿们。'
        },
        creed: {
            id: 'creed',
            title: '信经 (宗徒信经)',
            content:
                '我信全能的天主父，天地万物的创造者。我信父的唯一子，我们的主耶稣基督。我信他因圣神降孕，由童贞玛利亚诞生。我信他在比拉多执政时蒙难，被钉在十字架上，死而安葬。我信他下降阴府，第三日从死者中复活。我信他升了天，坐在全能天主父的右边。我信他要从天降来，审判生者死者。我信圣神。我信圣而公教会，诸圣的相通。我信罪过的赦免。我信肉身的复活。我信永恒的生命。阿们。'
        },
        our_father: {
            id: 'our_father',
            title: '天主经',
            content:
                '我们在天的父，愿你的名受显扬，愿你的国来临，愿你的旨意奉行在人间，如同在天上。求你今天赏给我们日用的食粮，求你宽恕我们的罪过，如同我们宽恕别人一样，不要让我们陷于诱惑，但救我们免于凶恶。阿们。'
        },
        hail_mary: {
            id: 'hail_mary',
            title: '圣母经',
            content:
                '万福玛利亚，你充满圣宠，主与你同在，你在妇女中受赞颂，你的亲子耶稣同受赞颂。天主圣母玛利亚，求你现在和我们临终时，为我们罪人祈求天主。阿们。'
        },
        glory_be: {
            id: 'glory_be',
            title: '圣三光荣经',
            content:
                '愿光荣归于父、及子、及圣神。起初如何，今日亦然，直到永远。阿们。'
        },
        fatima: {
            id: 'fatima',
            title: '法蒂玛圣母祷词',
            content:
                '吾主耶稣，请宽赦我们的罪过，助我们免于地狱永火。求你把众人的灵魂，特别是那些需要你怜悯的灵魂，领到天国里去。'
        },
        hail_holy_queen: {
            id: 'hail_holy_queen',
            title: '又圣母经 (母后万福)',
            content:
                '母后万福！仁慈的母亲，我们的生命，我们的甘饴，我们的希望。厄娃子孙，在此尘世，向你哀呼。在这涕泣之谷，向你叹息哭求。我们的主保，求你回顾，怜视我们。一旦流亡期满，使我们得见你的圣子，万民称颂的耶稣。童贞玛利亚，你是宽仁的、慈悲的、甘饴的。\n\nV. 天主圣母，请为我们祈求。\nR. 使我们堪受基督的恩许。'
        },
        closing_prayer: {
            id: 'closing_prayer',
            title: '结束祷文',
            content:
                '请大家祈祷。天主！你的圣子将他的生活、死亡和复活，为我们获得了永生的赏报；我们恳求你，使我们默想荣福童贞玛利亚的玫瑰经奥迹，并能效法其中的含意，获得其中的许诺。因我们的主基督。阿们。'
        }
    },
    mysteries: {
        joyful: {
            id: 'joyful',
            name: '欢喜五端',
            days: [1, 6],
            passages: [
                '天使预报救主降生: “玛利亚说：‘看！上主的婢女，愿照你的话成就于我吧！’” (路加福音 1:38)\n\n奥迹之果：谦逊',
                '圣母往见圣妇依撒伯尔: “在女人中你是蒙祝福的，你的胎儿也是蒙祝福的。” (路加福音 1:42)\n\n奥迹之果：爱人',
                '耶稣诞生于白冷: “她生了头胎男儿，用襁褓裹起，放在马槽里。” (路加福音 2:7)\n\n奥迹之果：神贫',
                '圣母献耶稣于圣殿: “因为我亲眼看见了你的救援，即你在万民之前早准备好的。” (路加福音 2:30-31)\n\n奥迹之果：听命',
                '耶稣在圣殿讲道: “过了三天，才在圣殿里找到了他。他坐在经师中，聆听他们，也询问他们。” (路加福音 2:46)\n\n奥迹之果：承行主旨'
            ]
        },
        luminous: {
            id: 'luminous',
            name: '光明五端',
            days: [4],
            passages: [
                '耶稣在约旦河受洗: “忽然有声音由天上说：‘这是我的爱子，我所喜悦的。’” (玛窦福音 3:17)\n\n奥迹之果：以此为荣',
                '耶稣参与加纳婚宴: “他的母亲给仆役说：‘他无论吩咐你们什么，你们就做什么。’” (若望福音 2:5)\n\n奥迹之果：信赖天主',
                '耶稣宣讲天国福音: “时期已满，天主的国临近了，你们悔改，信从福音吧！” (马尔谷福音 1:15)\n\n奥迹之果：悔改',
                '耶稣显圣容: “他在他们面前变了容貌：他的面貌发光有如太阳，他的衣服洁白如光。” (玛窦福音 17:2)\n\n奥迹之果：渴慕圣德',
                '耶稣建立圣体圣事: “你们拿去吃吧！这是我的身体。” (玛窦福音 26:26)\n\n奥迹之果：敬爱圣体'
            ]
        },
        sorrowful: {
            id: 'sorrowful',
            name: '痛苦五端',
            days: [2, 5],
            passages: [
                '耶稣山园祈祷: “他在极度恐慌中，祈祷越发恳切；他的汗如同血珠滴在地上。” (路加福音 22:44)\n\n奥迹之果：痛悔罪过',
                '耶稣受鞭打: “那时，比拉多命人把耶稣带去鞭打了。” (若望福音 19:1)\n\n奥迹之果：克制私欲',
                '耶稣受刺冠之苦: “他们给他穿上紫红袍，编了一个茨冠给他戴上。” (马尔谷福音 15:17)\n\n奥迹之果：忍受凌辱',
                '耶稣背十字架上山: “耶稣自己背着十字架出来，到了一个名叫‘骷髅’的地方。” (若望福音 19:17)\n\n奥迹之果：忍受苦难',
                '耶稣十字架上死: “耶稣大声呼喊说：‘父啊！我把我的灵魂交托在你手中。’说完这话，便断了气。” (路加福音 23:46)\n\n奥迹之果：爱仇'
            ]
        },
        glorious: {
            id: 'glorious',
            name: '荣福五端',
            days: [0, 3],
            passages: [
                '耶稣复活: “他复活了，不在这里。你们看！这是他们安放过他的地方。” (马尔谷福音 16:6)\n\n奥迹之果：信德',
                '耶稣升天: “主耶稣给他们说了这些话以后，就被接升天，坐在天主的右边。” (马尔谷福音 16:19)\n\n奥迹之果：望德',
                '圣神降临: “他们都充满了圣神，照圣神赐给他们的话，说起外方话来。” (宗徒大事录 2:4)\n\n奥迹之果：爱德',
                '圣母蒙召升天: “女儿！至高的天主降福了你，超过地上所有的女人。” (友弟德传 13:18)\n\n奥迹之果：善终',
                '天主光荣圣母: “天上出现了一个大异兆：有一个女人，身披太阳，脚踏月亮，头戴十二颗星的荣冠。” (默示录 12:1)\n\n奥迹之果：依靠圣母'
            ]
        }
    }
};