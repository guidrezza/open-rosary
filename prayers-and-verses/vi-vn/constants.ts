import type { LocalizationData } from '$lib/types';

export const vi: LocalizationData = {
    lang: 'vi-VN',
    seo: {
        title: 'Kinh Mân Côi',
        description:
            'Cầu nguyện Kinh Mân Côi. Nhanh chóng, miễn phí và tối ưu cho di động. Một ứng dụng web hiện đại, mã nguồn mở và dễ sử dụng trên mọi thiết bị.'
    },
    ui: {
        start_button: 'Bắt Đầu Cầu Nguyện',
        pick_mystery: 'Chọn Mầu Nhiệm',
        footer_made_by: 'ĐƯỢC LÀM BỞI',
        recommended_mystery: 'Mầu Nhiệm Hôm Nay',
        pray_button_prefix: 'Cầu Nguyện: ',
        change_theme: 'Đổi Giao Diện',
        liturgical: {
            // Seasons
            advent: 'Mùa Vọng',
            christmas: 'Mùa Giáng Sinh',
            lent: 'Mùa Chay',
            triduum: 'Tam Nhật Vượt Qua',
            easter: 'Mùa Phục Sinh',
            ordinary: 'Mùa Thường Niên',
            // Feasts
            epiphany: 'Lễ Hiển Linh',
            presentation: 'Lễ Dâng Chúa Vào Đền Thánh',
            annunciation: 'Lễ Truyền Tin',
            transfiguration: 'Lễ Chúa Hiển Dung',
            assumption: 'Lễ Đức Mẹ Hồn Xác Lên Trời',
            all_saints: 'Lễ Các Thánh',
            all_souls: 'Lễ Các Đẳng Linh Hồn',
            immaculate_conception: 'Lễ Đức Mẹ Vô Nhiễm Nguyên Tội',
            guadalupe: 'Lễ Đức Mẹ Guadalupe',
            mother_of_god: 'Lễ Đức Mẹ Là Mẹ Thiên Chúa',
            ash_wednesday: 'Thứ Tư Lễ Tro',
            palm_sunday: 'Chúa Nhật Lễ Lá',
            holy_thursday: 'Thứ Năm Tuần Thánh',
            good_friday: 'Thứ Sáu Tuần Thánh',
            holy_saturday: 'Thứ Bảy Tuần Thánh',
            easter_sunday: 'Chúa Nhật Phục Sinh',
            divine_mercy: 'Chúa Nhật Lòng Chúa Thương Xót',
            ascension: 'Lễ Chúa Giêsu Lên Trời',
            pentecost: 'Lễ Chúa Thánh Thần Hiện Xuống',
            trinity: 'Lễ Chúa Ba Ngôi',
            corpus_christi: 'Lễ Mình Máu Thánh Chúa',
            sacred_heart: 'Lễ Thánh Tâm Chúa Giêsu',
            christ_king: 'Lễ Chúa Kitô Vua',
            gaudete: 'Chúa Nhật Vui Mừng (Gaudete)',
            laetare: 'Chúa Nhật Laetare',
            st_joseph: 'Lễ Thánh Giuse',
            st_peter_paul: 'Lễ Thánh Phêrô và Phaolô',
            exaltation_cross: 'Lễ Suy Tôn Thánh Giá',
            archangels: 'Lễ Các Tổng Lãnh Thiên Thần',
            lateran_basilica: 'Cung Hiến Vương Cung Thánh Đường Laterano',
            holy_family: 'Lễ Thánh Gia Thất',
            nativity_john_baptist: 'Sinh Nhật Thánh Gioan Tẩy Giả',
            baptism_lord: 'Lễ Chúa Giêsu Chịu Phép Rửa'
        },
        modes: {
            digital: {
                title: 'Chuỗi Hạt Kỹ Thuật Số',
                desc: 'Theo dõi tiến trình cầu nguyện trên màn hình.'
            },
            physical: {
                title: 'Chuỗi Hạt Vật Lý',
                desc: 'Tôi có tràng hạt riêng. Chỉ hiện lời kinh.'
            },
            mysteries: {
                title: 'Chỉ Xem Mầu Nhiệm',
                desc: 'Danh sách ngắn gọn 5 mầu nhiệm'
            }
        },
        actions: {
            next: 'Next',
            back: 'Back',
            exit: 'EXIT?'
        },
        announce: 'Ngắm Mầu Nhiệm',
        sections: {
            intro: 'Khai Mạc',
            decade: 'Chục Kinh',
            conclusion: 'Kết Thúc'
        },
        ordinals: ['Thứ 1', 'Thứ 2', 'Thứ 3', 'Thứ 4', 'Thứ 5'],
        menus: {
            language: 'Chọn Ngôn Ngữ',
            mystery: 'Chọn Mầu Nhiệm',
            mode: 'Chọn Chế Độ',
            theme: 'Chọn Giao Diện',
            jump_to_section: 'Đi Đến Phần'
        },
        themes: {
            description: 'Tùy chỉnh giao diện. Điều này không ảnh hưởng đến lịch phụng vụ.',
            ordinary: 'Thường Niên',
            christmas_easter: 'Giáng Sinh / Phục Sinh',
            advent_lent: 'Mùa Vọng / Mùa Chay',
            pentecost: 'Hiện Xuống',
            gaudete: 'Gaudete',
            requiem: 'Cầu Hồn',
            gold: 'Vàng',
            silver: 'Bạc',
            white: 'Trắng',
            red: 'Đỏ',
            purple: 'Tím',
            rose: 'Hồng',
            black: 'Đen',
            green: 'Xanh Lá'
        }
    },
    prayers: {
        sign_of_cross: {
            id: 'sign_of_cross',
            title: 'Dấu Thánh Giá',
            content: 'Nhân danh Cha, và Con, và Thánh Thần. Amen.'
        },
        creed: {
            id: 'creed',
            title: 'Kinh Tin Kính',
            content:
                'Tôi tin kính Đức Chúa Trời là Cha phép tắc vô cùng dựng nên trời đất. Tôi tin kính Đức Chúa Giêsu Kitô là Con Một Đức Chúa Cha cùng là Chúa chúng tôi; bởi phép Đức Chúa Thánh Thần mà Người xuống thai, sinh bởi Bà Maria Đồng Trinh; chịu nạn đời quan Phongxiô Philatô, chịu đóng đinh trên cây Thánh Giá, chết và táng xác; xuống ngục tổ tông, ngày thứ ba bởi trong kẻ chết mà sống lại; lên trời ngự bên hữu Đức Chúa Cha phép tắc vô cùng; ngày sau bởi trời lại xuống phán xét kẻ sống và kẻ chết. Tôi tin kính Đức Chúa Thánh Thần. Tôi tin có Hội Thánh hằng có ở khắp thế này, các thánh thông công. Tôi tin phép tha tội. Tôi tin xác loài người ngày sau sống lại. Tôi tin hằng sống vậy. Amen.'
        },
        our_father: {
            id: 'our_father',
            title: 'Kinh Lạy Cha',
            content:
                'Lạy Cha chúng con ở trên trời, chúng con nguyện danh Cha cả sáng, Nước Cha trị đến, ý Cha thể hiện dưới đất cũng như trên trời. Xin Cha cho chúng con hôm nay lương thực hằng ngày, và tha nợ chúng con như chúng con cũng tha kẻ có nợ chúng con. Xin chớ để chúng con sa chước cám dỗ, nhưng cứu chúng con cho khỏi sự dữ. Amen.'
        },
        hail_mary: {
            id: 'hail_mary',
            title: 'Kinh Kính Mừng',
            content:
                'Kính mừng Maria đầy ơn phúc, Đức Chúa Trời ở cùng Bà, Bà có phúc lạ hơn mọi người nữ, và Giêsu con lòng Bà gồm phúc lạ. Thánh Maria Đức Mẹ Chúa Trời, cầu cho chúng con là kẻ có tội, khi nay và trong giờ lâm tử. Amen.'
        },
        glory_be: {
            id: 'glory_be',
            title: 'Kinh Sáng Danh',
            content:
                'Sáng danh Đức Chúa Cha, và Đức Chúa Con, và Đức Chúa Thánh Thần. Như đã có trước vô cùng, và bây giờ, và hằng có, và đời đời chẳng cùng. Amen.'
        },
        fatima: {
            id: 'fatima',
            title: 'Lời Nguyện Fatima',
            content:
                'Lạy Chúa Giêsu, xin tha tội cho chúng con, xin cứu chúng con khỏi sa hỏa ngục, xin đem các linh hồn lên thiên đàng, nhất là những linh hồn cần đến lòng Chúa thương xót hơn.'
        },
        hail_holy_queen: {
            id: 'hail_holy_queen',
            title: 'Kinh Lạy Nữ Vương',
            content:
                'Lạy Nữ Vương, Mẹ nhân lành, làm cho chúng con được sống, được vui, được cậy. Thân lạy Mẹ, chúng con con cháu E-và ở chốn khách đày kêu đến cùng Bà; chúng con ở nơi khóc lóc than thở kêu khẩn Bà thương. Hỡi ôi! Bà là Chúa bầu chúng con, xin ghé mắt thương xem chúng con. Đến sau khỏi đày, xin cho chúng con được thấy Đức Chúa Giêsu con lòng Bà gồm phúc lạ. Ôi khoan thay! Ôi nhân thay! Ôi dịu thay! Thánh Maria trọn đời đồng trinh. Amen.\n\nX. Lạy Rất Thánh Đức Mẹ Chúa Trời, xin cầu cho chúng con.\nĐ. Đáng chịu lấy những sự Chúa Kitô đã hứa.'
        },
        closing_prayer: {
            id: 'closing_prayer',
            title: 'Lời Nguyện Kết Thúc',
            content:
                'Lạy Chúa, Con Một Chúa đã chuộc cho chúng con phần thưởng sự sống đời đời, nhờ công nghiệp sự sống, sự chết và sự sống lại của Người; chúng con nài xin Chúa, khi chúng con suy ngắm những mầu nhiệm trong phép Rất Thánh Mân Côi của Đức Trinh Nữ Maria, thì xin cho chúng con biết noi gương những điều các mầu nhiệm ấy chứa đựng, và xin ban cho chúng con những điều các mầu nhiệm ấy hứa hẹn. Nhờ cũng một Chúa Kitô, Chúa chúng con. Amen.'
        }
    },
    mysteries: {
        joyful: {
            id: 'joyful',
            name: 'Mầu Nhiệm Vui',
            days: [1, 6],
            passages: [
                'Thiên Thần truyền tin cho Đức Bà chịu thai: "Bấy giờ bà Ma-ri-a nói: Vâng, tôi đây là nữ tỳ của Chúa, xin Chúa cứ làm cho tôi như lời sứ thần nói." (Luca 1, 38)\n\nHoa Trái: Xin cho được ở khiêm nhường',
                'Đức Bà đi viếng Bà Thánh Isave: "Em được chúc phúc hơn mọi người phụ nữ, và người con em đang cưu mang cũng được chúc phúc." (Luca 1, 42)\n\nHoa Trái: Xin cho được lòng yêu người',
                'Đức Bà sinh Đức Chúa Giêsu nơi hang đá: "Bà sinh con trai đầu lòng, lấy tã bọc con, rồi đặt nằm trong máng cỏ." (Luca 2, 7)\n\nHoa Trái: Xin cho được lòng khó khăn (tinh thần nghèo khó)',
                'Đức Bà dâng Đức Chúa Giêsu trong Đền Thánh: "Chính mắt con đã thấy ơn cứu độ Chúa đã dành sẵn cho muôn dân." (Luca 2, 30-31)\n\nHoa Trái: Xin cho được vâng lời chịu lụy',
                'Đức Bà tìm được Đức Chúa Giêsu trong Đền Thánh: "Sau ba ngày, hai ông bà mới tìm thấy con trong Đền Thờ, đang ngồi giữa các bậc thầy, vừa nghe họ, vừa đặt câu hỏi." (Luca 2, 46)\n\nHoa Trái: Xin cho được giữ nghĩa cùng Chúa'
            ]
        },
        luminous: {
            id: 'luminous',
            name: 'Mầu Nhiệm Sáng',
            days: [4],
            passages: [
                'Đức Chúa Giêsu chịu phép rửa tại sông Giođan: "Có tiếng từ trời phán rằng: Đây là Con yêu dấu của Ta, Ta hài lòng về Người." (Matthêu 3, 17)\n\nHoa Trái: Xin cho được sống xứng đáng là con cái Chúa',
                'Đức Chúa Giêsu làm phép lạ tại tiệc cưới Cana: "Thân mẫu Người nói với gia nhân: Người bảo gì, các anh cứ việc làm." (Gioan 2, 5)\n\nHoa Trái: Xin cho được vững tin vào quyền năng của Chúa',
                'Đức Chúa Giêsu rao giảng Nước Trời: "Thời kỳ đã mãn, và Triều Đại Thiên Chúa đã đến gần. Anh em hãy sám hối và tin vào Tin Mừng." (Marco 1, 15)\n\nHoa Trái: Xin cho được hoán cải và đón nhận Tin Mừng',
                'Đức Chúa Giêsu biến hình trên núi Tabor: "Người biến đổi hình dạng trước mặt các ông. Dung nhan Người chói lọi như mặt trời, và y phục Người trở nên trắng tinh như ánh sáng." (Matthêu 17, 2)\n\nHoa Trái: Xin cho được lắng nghe lời Chúa',
                'Đức Chúa Giêsu lập phép Thánh Thể: "Anh em hãy cầm lấy mà ăn, đây là mình Thầy." (Matthêu 26, 26)\n\nHoa Trái: Xin cho được siêng năng rước lễ'
            ]
        },
        sorrowful: {
            id: 'sorrowful',
            name: 'Mầu Nhiệm Thương',
            days: [2, 5],
            passages: [
                'Đức Chúa Giêsu lo buồn đổ mồ hôi máu: "Người lâm cơn xao xuyến bồi hồi, nên càng khẩn thiết cầu xin. Và mồ hôi Người như những giọt máu rơi xuống đất." (Luca 22, 44)\n\nHoa Trái: Xin cho được ăn năn tội',
                'Đức Chúa Giêsu chịu đánh đòn: "Bấy giờ ông Phi-la-tô truyền đem Đức Giê-su đi và đánh đòn Người." (Gioan 19, 1)\n\nHoa Trái: Xin cho được hãm mình chịu khó',
                'Đức Chúa Giêsu chịu đội mào gai: "Chúng khoác cho Người một tấm áo điều, và kết một vòng gai làm vương miện đặt lên đầu Người." (Marco 15, 17)\n\nHoa Trái: Xin cho được chịu mọi sự sỉ nhục bằng lòng',
                'Đức Chúa Giêsu vác Thánh Giá: "Chính Người vác lấy thập giá đi ra, đến nơi gọi là Cái Sọ." (Gioan 19, 17)\n\nHoa Trái: Xin cho được vác thánh giá theo chân Chúa',
                'Đức Chúa Giêsu chịu chết trên Thánh Giá: "Đức Giê-su kêu lớn tiếng: Lạy Cha, con xin phó thác hồn con trong tay Cha. Nói xong, Người tắt thở." (Luca 23, 46)\n\nHoa Trái: Xin cho được đóng đinh tính xác thịt vào thánh giá Chúa'
            ]
        },
        glorious: {
            id: 'glorious',
            name: 'Mầu Nhiệm Mừng',
            days: [0, 3],
            passages: [
                'Đức Chúa Giêsu sống lại: "Người đã trỗi dậy, không còn ở đây nữa. Hãy xem chỗ đã đặt Người." (Marco 16, 6)\n\nHoa Trái: Xin cho được sống lại thật về phần linh hồn',
                'Đức Chúa Giêsu lên trời: "Nói xong, Chúa Giê-su được đưa lên trời và ngự bên hữu Thiên Chúa." (Marco 16, 19)\n\nHoa Trái: Xin cho được ái mộ những sự trên trời',
                'Đức Chúa Thánh Thần hiện xuống: "Ai nấy đều được tràn đầy ơn Thánh Thần, họ bắt đầu nói các thứ tiếng khác, tuỳ theo khả năng Thánh Thần ban cho." (Công vụ 2, 4)\n\nHoa Trái: Xin cho được lòng đầy dẫy mọi ơn Đức Chúa Thánh Thần',
                'Đức Chúa Trời cho Đức Bà lên trời: "Em được chúc phúc hơn mọi người phụ nữ, vì em đã tin rằng Chúa sẽ thực hiện những gì Người đã nói với em." (Luca 1, 45)\n\nHoa Trái: Xin cho được ơn chết lành trong tay Đức Mẹ',
                'Đức Chúa Trời thưởng Đức Mẹ trên trời: "Một điềm lớn xuất hiện trên trời: một người Phụ Nữ, mình khoác mặt trời, chân đạp mặt trăng, và đầu đội triều thiên mười hai ngôi sao." (Khải huyền 12, 1)\n\nHoa Trái: Xin cho được thưởng cùng Đức Mẹ trên nước thiên đàng'
            ]
        }
    }
};
