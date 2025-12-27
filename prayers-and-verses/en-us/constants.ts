import type { LocalizationData } from '$lib/types';

export const en: LocalizationData = {
	lang: 'en-US',
	seo: {
		title: 'Open Rosary',
		description:
			'Pray the Rosary. Fast, free, and mobile-friendly. A clean, modern web app that is open source and easy to use on any device.'
	},
	ui: {
		start_button: 'Start Praying',
		pick_mystery: 'Change Mystery',
		footer_made_by: 'MADE BY', // New key for footer
		recommended_mystery: 'Recommended Mystery',
		pray_button_prefix: 'Pray Recommended',
		change_theme: 'Change Theme',
		liturgical: {
			// Seasons
			advent: 'Advent',
			christmas: 'Christmas',
			lent: 'Lent',
			triduum: 'Paschal Triduum',
			easter: 'Easter',
			ordinary: 'Ordinary Time',
			// Feasts
			epiphany: 'Epiphany',
			presentation: 'Presentation of the Lord',
			annunciation: 'Annunciation',
			transfiguration: 'Transfiguration',
			assumption: 'Assumption',
			all_saints: 'All Saints',
			all_souls: 'All Souls',
			immaculate_conception: 'Immaculate Conception',
			guadalupe: 'Our Lady of Guadalupe',
			mother_of_god: 'Mary, Mother of God',
			ash_wednesday: 'Ash Wednesday',
			palm_sunday: 'Palm Sunday',
			holy_thursday: 'Holy Thursday',
			good_friday: 'Good Friday',
			holy_saturday: 'Holy Saturday',
			easter_sunday: 'Easter Sunday',
			divine_mercy: 'Divine Mercy Sunday',
			ascension: 'Ascension',
			pentecost: 'Pentecost',
			trinity: 'Trinity Sunday',
			corpus_christi: 'Corpus Christi',
			sacred_heart: 'Sacred Heart',
			christ_king: 'Christ the King',
			gaudete: 'Gaudete Sunday',
			laetare: 'Laetare Sunday',
			st_joseph: 'St. Joseph',
			st_peter_paul: 'Sts. Peter and Paul',
			exaltation_cross: 'Exaltation of the Holy Cross',
			archangels: 'Archangels',
			lateran_basilica: 'Dedication of Lateran Basilica',
			holy_family: 'Holy Family',
			nativity_john_baptist: 'Nativity of St. John the Baptist',
			baptism_lord: 'Baptism of the Lord'
		},
		modes: {
			digital: {
				title: 'Digital Beads',
				desc: 'Track your progress on screen using the app.'
			},
			physical: {
				title: 'Physical Beads',
				desc: 'I have my own Rosary. Just show me the prayers.'
			}
		},
		actions: {
			next: 'Next',
			back: 'Back',
			exit: 'EXIT?'
		},
		announce: 'Announce Mystery',
		sections: {
			intro: 'Introduction',
			decade: 'Decade',
			conclusion: 'Conclusion'
		},
		ordinals: ['1st', '2nd', '3rd', '4th', '5th'],
		menus: {
			language: 'Select Language',
			mystery: 'Select Mystery',
			mode: 'Select Mode',
			theme: 'Select Theme',
			jump_to_section: 'Jump to Section'
		},
		themes: {
			ordinary: 'Ordinary Time',
			christmas_easter: 'Christmas / Easter',
			advent_lent: 'Advent / Lent',
			pentecost: 'Pentecost',
			gaudete: 'Gaudete',
			requiem: 'Requiem',
			gold: 'Gold',
			silver: 'Silver',
			white: 'White',
			red: 'Red',
			purple: 'Purple',
			rose: 'Rose',
			black: 'Black',
			green: 'Green'
		}
	},
	prayers: {
		sign_of_cross: {
			id: 'sign_of_cross',
			title: 'The Sign of the Cross',
			content: 'In the name of the Father, and of the Son, and of the Holy Spirit. Amen.'
		},
		creed: {
			id: 'creed',
			title: "The Apostles' Creed",
			content:
				'I believe in God, the Father almighty, Creator of heaven and earth, and in Jesus Christ, his only Son, our Lord, who was conceived by the Holy Spirit, born of the Virgin Mary, suffered under Pontius Pilate, was crucified, died and was buried; he descended into hell; on the third day he rose again from the dead; he ascended into heaven, and is seated at the right hand of God the Father almighty; from there he will come to judge the living and the dead. I believe in the Holy Spirit, the holy catholic Church, the communion of saints, the forgiveness of sins, the resurrection of the body, and life everlasting. Amen.'
		},
		our_father: {
			id: 'our_father',
			title: 'The Our Father',
			content:
				'Our Father, who art in heaven, hallowed be thy name; thy kingdom come, thy will be done on earth as it is in heaven. Give us this day our daily bread, and forgive us our trespasses, as we forgive those who trespass against us; and lead us not into temptation, but deliver us from evil. Amen.'
		},
		hail_mary: {
			id: 'hail_mary',
			title: 'The Hail Mary',
			content:
				'Hail, Mary, full of grace, the Lord is with thee. Blessed art thou among women, and blessed is the fruit of thy womb, Jesus. Holy Mary, Mother of God, pray for us sinners, now and at the hour of our death. Amen.'
		},
		glory_be: {
			id: 'glory_be',
			title: 'The Glory Be',
			content:
				'Glory to the Father, and to the Son, and to the Holy Spirit: as it was in the beginning, is now, and will be for ever. Amen.'
		},
		fatima: {
			id: 'fatima',
			title: 'The Fatima Prayer',
			content:
				'O my Jesus, forgive us our sins, save us from the fires of hell; lead all souls to Heaven, especially those who have most need of Thy mercy.'
		},
		hail_holy_queen: {
			id: 'hail_holy_queen',
			title: 'Hail, Holy Queen',
			content:
				'Hail, holy Queen, Mother of mercy, our life, our sweetness and our hope. To thee do we cry, poor banished children of Eve. To thee do we send up our sighs, mourning and weeping in this valley of tears. Turn, then, most gracious advocate, thine eyes of mercy toward us, and after this our exile, show unto us the blessed fruit of thy womb, Jesus. O clement, O loving, O sweet Virgin Mary.'
		},
		closing_prayer: {
			id: 'closing_prayer',
			title: 'Closing Prayer',
			content:
				'Let us pray. O God, whose only begotten Son, by his life, death, and resurrection, has purchased for us the rewards of eternal life, grant, we beseech thee, that meditating upon these mysteries of the most holy Rosary of the Blessed Virgin Mary, we may imitate what they contain and obtain what they promise, through the same Christ our Lord. Amen.'
		}
	},
	mysteries: {
		joyful: {
			id: 'joyful',
			name: 'Joyful Mysteries',
			days: [1, 6],
			passages: [
				'The Annunciation: "Mary said, \'Behold, I am the handmaid of the Lord. May it be done to me according to your word.\'" (Luke 1:38)\n\nFruit of the Mystery: Humility',
				'The Visitation: "Most blessed are you among women, and blessed is the fruit of your womb." (Luke 1:42)\n\nFruit of the Mystery: Love of Neighbor',
				'The Nativity: "She gave birth to her firstborn son. She wrapped him in swaddling clothes and laid him in a manger." (Luke 2:7)\n\nFruit of the Mystery: Poverty of Spirit',
				'The Presentation: "My eyes have seen your salvation, which you prepared in sight of all the peoples." (Luke 2:30-31)\n\nFruit of the Mystery: Obedience',
				'The Finding in the Temple: "After three days they found him in the temple, sitting in the midst of the teachers, listening to them and asking them questions." (Luke 2:46)\n\nFruit of the Mystery: Piety'
			]
		},
		luminous: {
			id: 'luminous',
			name: 'Luminous Mysteries',
			days: [4],
			passages: [
				'The Baptism in the Jordan: "And a voice came from the heavens, saying, \'This is my beloved Son, with whom I am well pleased.\'" (Matthew 3:17)\n\nFruit of the Mystery: Openness to the Holy Spirit',
				'The Wedding at Cana: "His mother said to the servers, \'Do whatever he tells you.\'" (John 2:5)\n\nFruit of the Mystery: To Jesus through Mary',
				'The Proclamation of the Kingdom: "This is the time of fulfillment. The kingdom of God is at hand. Repent, and believe in the gospel." (Mark 1:15)\n\nFruit of the Mystery: Repentance and Trust in God',
				'The Transfiguration: "And he was transfigured before them; his face shone like the sun and his clothes became white as light." (Matthew 17:2)\n\nFruit of the Mystery: Desire for Holiness',
				'The Institution of the Eucharist: "Take and eat; this is my body." (Matthew 26:26)\n\nFruit of the Mystery: Adoration'
			]
		},
		sorrowful: {
			id: 'sorrowful',
			name: 'Sorrowful Mysteries',
			days: [2, 5],
			passages: [
				'The Agony in the Garden: "He was in such agony and he prayed so fervently that his sweat became like drops of blood falling on the ground." (Luke 22:44)\n\nFruit of the Mystery: Sorrow for Sin',
				'The Scourging at the Pillar: "Then Pilate took Jesus and had him scourged." (John 19:1)\n\nFruit of the Mystery: Purity',
				'The Crowning with Thorns: "They clothed him in purple and, weaving a crown of thorns, placed it on him." (Mark 15:17)\n\nFruit of the Mystery: Moral Courage',
				'The Carrying of the Cross: "And carrying the cross himself he went out to what is called the Place of the Skull." (John 19:17)\n\nFruit of the Mystery: Patience',
				'The Crucifixion: "Jesus cried out in a loud voice, \'Father, into your hands I commend my spirit\'; and when he had said this he breathed his last." (Luke 23:46)\n\nFruit of the Mystery: Perseverance'
			]
		},
		glorious: {
			id: 'glorious',
			name: 'Glorious Mysteries',
			days: [0, 3],
			passages: [
				'The Resurrection: "He has been raised; he is not here. Behold the place where they laid him." (Mark 16:6)\n\nFruit of the Mystery: Faith',
				'The Ascension: "So then the Lord Jesus, after he spoke to them, was taken up into heaven and took his seat at the right hand of God." (Mark 16:19)\n\nFruit of the Mystery: Hope',
				'The Descent of the Holy Spirit: "And they were all filled with the holy Spirit and began to speak in different tongues, as the Spirit enabled them to proclaim." (Acts 2:4)\n\nFruit of the Mystery: Wisdom',
				'The Assumption: "Blessed are you, daughter, by the Most High God, above all the women on earth." (Judith 13:18)\n\nFruit of the Mystery: Grace of a Happy Death',
				'The Coronation: "A great sign appeared in the sky, a woman clothed with the sun, with the moon under her feet, and on her head a crown of twelve stars." (Revelation 12:1)\n\nFruit of the Mystery: Trust in Mary\'s Intercession'
			]
		}
	}
};
