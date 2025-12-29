import type { LocalizationData } from '$lib/types';

export const zh_tw: LocalizationData = {
    lang: 'zh-TW',
    seo: {
        title: '玫瑰經',
        description:
            '祈禱玫瑰經。快速、免費且適合行動裝置。一個現代化的開源網路應用程式，可在任何裝置上輕鬆使用。'
    },
    ui: {
        start_button: '開始祈禱',
        pick_mystery: '更換奧蹟',
        footer_made_by: '製作：',
        recommended_mystery: '今日奧蹟',
        pray_button_prefix: '祈禱：',
        change_theme: '更換主題',
        liturgical: {
            // Seasons
            advent: '將臨期',
            christmas: '聖誕期',
            lent: '四旬期',
            triduum: '逾越節三日慶典',
            easter: '復活期',
            ordinary: '常年期',
            // Feasts
            epiphany: '主顯節',
            presentation: '獻主節',
            annunciation: '預報救主降生',
            transfiguration: '耶穌顯聖容',
            assumption: '聖母升天',
            all_saints: '諸聖節',
            all_souls: '追思已亡',
            immaculate_conception: '聖母無染原罪',
            guadalupe: '瓜達盧佩聖母',
            mother_of_god: '天主之母節',
            ash_wednesday: '聖灰禮儀星期三',
            palm_sunday: '聖枝主日',
            holy_thursday: '聖週四',
            good_friday: '聖週五 (救主受難日)',
            holy_saturday: '聖週六',
            easter_sunday: '復活主日',
            divine_mercy: '救主慈悲主日',
            ascension: '耶穌升天',
            pentecost: '五旬節 (聖神降臨)',
            trinity: '天主聖三節',
            corpus_christi: '基督聖體聖血節',
            sacred_heart: '耶穌聖心節',
            christ_king: '基督普世君王節',
            gaudete: '喜樂主日 (將臨期第三主日)',
            laetare: '喜樂主日 (四旬期第四主日)',
            st_joseph: '大聖若瑟瞻禮',
            st_peter_paul: '聖伯多祿及聖保祿宗徒瞻禮',
            exaltation_cross: '光榮十字架慶日',
            archangels: '諸聖天使長',
            lateran_basilica: '拉特朗大殿奉獻日',
            holy_family: '聖家節',
            nativity_john_baptist: '洗者若翰誕辰',
            baptism_lord: '主受洗節'
        },
        modes: {
            digital: {
                title: '數位念珠',
                desc: '在螢幕上追蹤祈禱進度。'
            },
            physical: {
                title: '實體念珠',
                desc: '我有自己的念珠。只顯示經文。'
            },
            mysteries: {
                title: '僅顯示奧蹟',
                desc: '五端奧蹟的簡單列表'
            }
        },
        actions: {
            next: 'Next',
            back: 'Back',
            exit: 'EXIT?'
        },
        announce: '宣讀奧蹟',
        sections: {
            intro: '序經',
            decade: '一端',
            conclusion: '結束禱文'
        },
        ordinals: ['第一端', '第二端', '第三端', '第四端', '第五端'],
        menus: {
            language: '選擇語言',
            mystery: '選擇奧蹟',
            mode: '選擇模式',
            theme: '選擇主題',
            jump_to_section: '跳轉至'
        },
        themes: {
            description: '自訂視覺體驗。這不會影響禮儀日期。',
            ordinary: '常年期',
            christmas_easter: '聖誕 / 復活',
            advent_lent: '將臨 / 四旬',
            pentecost: '聖神降臨',
            gaudete: '喜樂 (Gaudete)',
            requiem: '追思 (Requiem)',
            gold: '金色',
            silver: '銀色',
            white: '白色',
            red: '紅色',
            purple: '紫色',
            rose: '玫瑰色',
            black: '黑色',
            green: '綠色'
        }
    },
    prayers: {
        sign_of_cross: {
            id: 'sign_of_cross',
            title: '聖號經',
            content: '因父，及子，及聖神之名。阿們。'
        },
        creed: {
            id: 'creed',
            title: '信經 (宗徒信經)',
            content:
                '我信全能的天主父，天地萬物的創造者。我信父的唯一子，我們的主耶穌基督。我信祂因聖神降孕，由童貞瑪利亞誕生。我信祂在比拉多執政時蒙難，被釘在十字架上，死而安葬。我信祂下降陰府，第三日從死者中復活。我信祂升了天，坐在全能天主父的右邊。我信祂要從天降來，審判生者死者。我信聖神。我信聖而公教會，諸聖的相通。我信罪過的赦免。我信肉身的復活。我信永恆的生命。阿們。'
        },
        our_father: {
            id: 'our_father',
            title: '天主經',
            content:
                '我們的天父，願祢的名受顯揚，願祢的國來臨，願祢的旨意奉行在人間，如同在天上。求祢今天賞給我們日用的食糧，求祢寬恕我們的罪過，如同我們寬恕別人一樣，不要讓我們陷於誘惑，但救我們免於兇惡。阿們。'
        },
        hail_mary: {
            id: 'hail_mary',
            title: '聖母經',
            content:
                '萬福瑪利亞，妳充滿聖寵，主與妳同在，妳在婦女中受讚頌，妳的親子耶穌同受讚頌。天主聖母瑪利亞，求妳現在和我們臨終時，為我們罪人祈求天主。阿們。'
        },
        glory_be: {
            id: 'glory_be',
            title: '聖三光榮經',
            content:
                '願光榮歸於父、及子、及聖神。起初如何，今日亦然，直到永遠。阿們。'
        },
        fatima: {
            id: 'fatima',
            title: '法蒂瑪聖母禱詞',
            content:
                '吾主耶穌，請寬赦我們的罪過，助我們免於地獄永火。求祢把眾人的靈魂，特別是那些需要祢憐憫的靈魂，領到天國裡去。'
        },
        hail_holy_queen: {
            id: 'hail_holy_queen',
            title: '又聖母經 (母后萬福)',
            content:
                '母后萬福！仁慈的母親，我們的生命，我們的甘飴，我們的希望。厄娃子孫，在此塵世，向妳哀呼。在這涕泣之谷，向妳嘆息哭求。我們的主保，求妳回顧，憐視我們。一旦流亡期滿，使我們得見妳的聖子，萬民稱頌的耶穌。童貞瑪利亞，妳是寬仁的、慈悲的、甘飴的。\n\nV. 天主聖母，請為我們祈求。\nR. 使我們堪受基督的恩許。'
        },
        closing_prayer: {
            id: 'closing_prayer',
            title: '結束禱文',
            content:
                '請大家祈禱。天主！祢的聖子將祂的生活、死亡和復活，為我們獲得了永生的賞報；我們懇求祢，使我們默想榮福童貞瑪利亞的玫瑰經奧蹟，並能效法其中的含意，獲得其中的許諾。因我們的主基督。阿們。'
        }
    },
    mysteries: {
        joyful: {
            id: 'joyful',
            name: '歡喜五端',
            days: [1, 6],
            passages: [
                '天使預報救主降生: 「瑪利亞說：『看！上主的婢女，願照祢的話成就於我吧！』」 (路加福音 1:38)\n\n奧蹟之果：謙遜',
                '聖母往見聖婦依撒伯爾: 「在女人中妳是蒙祝福的，妳的胎兒也是蒙祝福的。」 (路加福音 1:42)\n\n奧蹟之果：愛人',
                '耶穌誕生於白冷: 「她生了頭胎男兒，用襁褓裹起，放在馬槽裡。」 (路加福音 2:7)\n\n奧蹟之果：神貧',
                '聖母獻耶穌於聖殿: 「因為我親眼看見了祢的救援，即祢在萬民之前早準備好的。」 (路加福音 2:30-31)\n\n奧蹟之果：聽命',
                '耶穌在聖殿講道: 「過了三天，才在聖殿裡找到了祂。祂坐在經師中，聆聽他們，也詢問他們。」 (路加福音 2:46)\n\n奧蹟之果：承行主旨'
            ]
        },
        luminous: {
            id: 'luminous',
            name: '光明五端',
            days: [4],
            passages: [
                '耶穌在約旦河受洗: 「忽然有聲音由天上說：『這是我的愛子，我所喜悅的。』」 (瑪竇福音 3:17)\n\n奧蹟之果：以此為榮 (或：作天主子女的榮耀)',
                '耶穌參與迦納婚宴: 「祂的母親給僕役說：『祂無論吩咐你們什麼，你們就做什麼。』」 (若望福音 2:5)\n\n奧蹟之果：信賴天主',
                '耶穌宣講天國福音: 「時期已滿，天主的國臨近了，你們悔改，信從福音吧！」 (馬爾谷福音 1:15)\n\n奧蹟之果：悔改',
                '耶穌顯聖容: 「祂在他們面前變了容貌：祂的面貌發光有如太陽，祂的衣服潔白如光。」 (瑪竇福音 17:2)\n\n奧蹟之果：渴慕聖德',
                '耶穌建立聖體聖事: 「你們拿去吃吧！這是我的身體。」 (瑪竇福音 26:26)\n\n奧蹟之果：敬愛聖體'
            ]
        },
        sorrowful: {
            id: 'sorrowful',
            name: '痛苦五端',
            days: [2, 5],
            passages: [
                '耶穌山園祈禱: 「祂在極度恐慌中，祈禱越發懇切；祂的汗如同血珠滴在地上。」 (路加福音 22:44)\n\n奧蹟之果：痛悔罪過',
                '耶穌受鞭打: 「那時，比拉多命人把耶穌帶去鞭打了。」 (若望福音 19:1)\n\n奧蹟之果：克制私慾',
                '耶穌受刺冠之苦: 「他們給祂穿上紫紅袍，編了一個茨冠給祂戴上。」 (馬爾谷福音 15:17)\n\n奧蹟之果：忍受凌辱',
                '耶穌背十字架上山: 「耶穌自己背著十字架出來，到了一個名叫『骷髏』的地方。」 (若望福音 19:17)\n\n奧蹟之果：忍受苦難',
                '耶穌十字架上死: 「耶穌大聲呼喊說：『父啊！我把我的靈魂交託在祢手中。』說完這話，便斷了氣。」 (路加福音 23:46)\n\n奧蹟之果：愛仇'
            ]
        },
        glorious: {
            id: 'glorious',
            name: '榮福五端',
            days: [0, 3],
            passages: [
                '耶穌復活: 「祂復活了，不在這裡。你們看！這是他們安放過祂的地方。」 (馬爾谷福音 16:6)\n\n奧蹟之果：信德',
                '耶穌升天: 「主耶穌給他們說了這些話以後，就被接升天，坐在天主的右邊。」 (馬爾谷福音 16:19)\n\n奧蹟之果：望德',
                '聖神降臨: 「他們都充滿了聖神，照聖神賜給他們的話，說起外方話來。」 (宗徒大事錄 2:4)\n\n奧蹟之果：愛德',
                '聖母蒙召升天: 「女兒！至高的天主降福了妳，超過地上所有的女人。」 (友弟德傳 13:18)\n\n奧蹟之果：善終',
                '天主光榮聖母: 「天上出現了一個大異兆：有一個女人，身披太陽，腳踏月亮，頭戴十二顆星的榮冠。」 (默示錄 12:1)\n\n奧蹟之果：依靠聖母'
            ]
        }
    }
};
