import type { LocalizationData } from '$lib/types';

export const en: LocalizationData = {
    lang: 'en-US',
    seo: {
        title: 'Open Rosary',
        description: 'A simple, beautiful way to pray the Rosary.'
    },
    ui: {
        start_button: 'Start Praying',
        pick_mystery: 'Pick a different mystery',
        made_by: 'Made by guidrezza',
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
            back: 'Back'
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
            title: 'The Apostles\' Creed',
            content: 'I believe in God, the Father almighty, Creator of heaven and earth, and in Jesus Christ, his only Son, our Lord, who was conceived by the Holy Spirit, born of the Virgin Mary, suffered under Pontius Pilate, was crucified, died and was buried; he descended into hell; on the third day he rose again from the dead; he ascended into heaven, and is seated at the right hand of God the Father almighty; from there he will come to judge the living and the dead. I believe in the Holy Spirit, the holy catholic Church, the communion of saints, the forgiveness of sins, the resurrection of the body, and life everlasting. Amen.'
        },
        our_father: {
            id: 'our_father',
            title: 'The Our Father',
            content: 'Our Father, who art in heaven, hallowed be thy name; thy kingdom come, thy will be done on earth as it is in heaven. Give us this day our daily bread, and forgive us our trespasses, as we forgive those who trespass against us; and lead us not into temptation, but deliver us from evil. Amen.'
        },
        hail_mary: {
            id: 'hail_mary',
            title: 'The Hail Mary',
            content: 'Hail, Mary, full of grace, the Lord is with thee. Blessed art thou among women, and blessed is the fruit of thy womb, Jesus. Holy Mary, Mother of God, pray for us sinners, now and at the hour of our death. Amen.'
        },
        glory_be: {
            id: 'glory_be',
            title: 'The Glory Be',
            content: 'Glory to the Father, and to the Son, and to the Holy Spirit: as it was in the beginning, is now, and will be for ever. Amen.'
        },
        fatima: {
            id: 'fatima',
            title: 'The Fatima Prayer',
            content: 'O my Jesus, forgive us our sins, save us from the fires of hell; lead all souls to Heaven, especially those who have most need of Thy mercy.'
        },
        hail_holy_queen: {
            id: 'hail_holy_queen',
            title: 'Hail, Holy Queen',
            content: 'Hail, holy Queen, Mother of mercy, our life, our sweetness and our hope. To thee do we cry, poor banished children of Eve. To thee do we send up our sighs, mourning and weeping in this valley of tears. Turn, then, most gracious advocate, thine eyes of mercy toward us, and after this our exile, show unto us the blessed fruit of thy womb, Jesus. O clement, O loving, O sweet Virgin Mary.\n\nV. Pray for us, O holy Mother of God.\nR. That we may be made worthy of the promises of Christ.'
        },
        closing_prayer: {
            id: 'closing_prayer',
            title: 'Closing Prayer',
            content: 'Let us pray. O God, whose only begotten Son, by his life, death, and resurrection, has purchased for us the rewards of eternal life, grant, we beseech thee, that meditating upon these mysteries of the most holy Rosary of the Blessed Virgin Mary, we may imitate what they contain and obtain what they promise, through the same Christ our Lord. Amen.'
        }
    },
    mysteries: {
        joyful: {
            id: 'joyful',
            name: 'The Joyful Mysteries',
            days: [1, 6],
            passages: [
                "The Annunciation: \"Mary said, 'Behold, I am the handmaid of the Lord. May it be done to me according to your word.'\" (Luke 1:38)",
                "The Visitation: \"Most blessed are you among women, and blessed is the fruit of your womb.\" (Luke 1:42)",
                "The Nativity: \"She gave birth to her firstborn son. She wrapped him in swaddling clothes and laid him in a manger.\" (Luke 2:7)",
                "The Presentation: \"My eyes have seen your salvation, which you prepared in sight of all the peoples.\" (Luke 2:30-31)",
                "The Finding in the Temple: \"After three days they found him in the temple, sitting in the midst of the teachers, listening to them and asking them questions.\" (Luke 2:46)"
            ]
        },
        luminous: {
            id: 'luminous',
            name: 'The Luminous Mysteries',
            days: [4],
            passages: [
                "The Baptism in the Jordan: \"And a voice came from the heavens, saying, 'This is my beloved Son, with whom I am well pleased.'\" (Matthew 3:17)",
                "The Wedding at Cana: \"His mother said to the servers, 'Do whatever he tells you.'\" (John 2:5)",
                "The Proclamation of the Kingdom: \"This is the time of fulfillment. The kingdom of God is at hand. Repent, and believe in the gospel.\" (Mark 1:15)",
                "The Transfiguration: \"And he was transfigured before them; his face shone like the sun and his clothes became white as light.\" (Matthew 17:2)",
                "The Institution of the Eucharist: \"Take and eat; this is my body.\" (Matthew 26:26)"
            ]
        },
        sorrowful: {
            id: 'sorrowful',
            name: 'The Sorrowful Mysteries',
            days: [2, 5],
            passages: [
                "The Agony in the Garden: \"He was in such agony and he prayed so fervently that his sweat became like drops of blood falling on the ground.\" (Luke 22:44)",
                "The Scourging at the Pillar: \"Then Pilate took Jesus and had him scourged.\" (John 19:1)",
                "The Crowning with Thorns: \"They clothed him in purple and, weaving a crown of thorns, placed it on him.\" (Mark 15:17)",
                "The Carrying of the Cross: \"And carrying the cross himself he went out to what is called the Place of the Skull.\" (John 19:17)",
                "The Crucifixion: \"Jesus cried out in a loud voice, 'Father, into your hands I commend my spirit'; and when he had said this he breathed his last.\" (Luke 23:46)"
            ]
        },
        glorious: {
            id: 'glorious',
            name: 'The Glorious Mysteries',
            days: [0, 3],
            passages: [
                "The Resurrection: \"He has been raised; he is not here. Behold the place where they laid him.\" (Mark 16:6)",
                "The Ascension: \"So then the Lord Jesus, after he spoke to them, was taken up into heaven and took his seat at the right hand of God.\" (Mark 16:19)",
                "The Descent of the Holy Spirit: \"And they were all filled with the holy Spirit and began to speak in different tongues, as the Spirit enabled them to proclaim.\" (Acts 2:4)",
                "The Assumption: \"Blessed are you, daughter, by the Most High God, above all the women on earth.\" (Judith 13:18)",
                "The Coronation: \"A great sign appeared in the sky, a woman clothed with the sun, with the moon under her feet, and on her head a crown of twelve stars.\" (Revelation 12:1)"
            ]
        }
    }
};
