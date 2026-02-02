// ============================================
// 💝 CUSTOMIZE YOUR VALENTINE'S WEBSITE HERE 💝
// ============================================

const CONFIG = {
    // Valentine's name
    valentineName: "Yeshu",

    // Browser tab title
    pageTitle: "Yeshu, will you be my Valentine? 💝🥺",

    // Floating emojis
    floatingEmojis: {
        hearts: ['❤️', '💖', '💝', '💗', '💓', '💕'],
        bears: ['🧸', '🐻', '💑']
    },

    // Questions flow (Hinglish + emotional)
    questions: {
        first: {
            text: "Yeshu, sach bataun… mujhe tu bohot pasand hai 🥺❤️\nTujhe bhi thoda sa feel hota hai?",
            yesBtn: "Haan 😌",
            noBtn: "Hmm 🤔",
            secretAnswer: "Thoda sa nahi… bohot zyada ❤️"
        },
        second: {
            text: "Kabhi kabhi mai insecure ho jata hu 😞\nPar tu samajh leti hai na?",
            yesBtn: "Haan samajhti hu 💕",
            noBtn: "Kabhi kabhi",
            secretAnswer: "Aur isi baat pe mai tujhse aur pyaar karta hu ❤️"
        },
        third: {
            text: "Tu jaanti hai na… tu meri safe place hai 🫶",
            yesBtn: "Always 🥰",
            noBtn: "Sochungi 😛",
            secretAnswer: "Tere saath hi toh sab theek lagta hai 💘"
        },
        fourth: {
            text: "Mai tujhe kitna pyaar karta hu… thoda explain karu? 💕",
            startText: "Itna sa nahi…",
            nextBtn: "Aur zyada ❤️"
        },
        fifth: {
            text: "Past ki galtiyon ke liye sorry Yeshu 🥺\nPar kya tu mere saath future banana chahegi?",
            yesBtn: "Haan ❤️",
            noBtn: "Dekh lenge",
            secretAnswer: "Promise karta hu, better version ban ke dikhaunga 🫂"
        },
        sixth: {
            text: "Toh final sawaal… 🌹\nYeshu, will you be my Valentine? ❤️",
            yesBtn: "Yes, forever 💕",
            noBtn: "No 🙈"
        }
    },

  
    // Love meter messages
    loveMessages: {
        extreme: "Itna pyaar?! 😍💝 Meri jaan le legi kya 🥰",
        high: "Bas ab aur nahi… dil full ho gaya ❤️✨",
        normal: "Perfect amount of love 💕",
        veryHigh: "Yeshu tu bohot zyada cute hai 😭💘"
    },

    // Final celebration popup
    celebration: {
        title: "🎆 YESHU SAID YES! 🎆 💕✨",
        message:
            "Thank you meri zindagi ka hissa banne ke liye ❤️\n" +
            "Mai perfect nahi hu, par tere liye better banne ki poori koshish karunga.\n\n" +
            "Valentine sirf ek din ka nahi,\n" +
            "tu meri har din ki Valentine hai 🫶🌹",
        emojis: "🎁💖🤗💝💋❤️💕🌹✨🎊🎉🎈🌟💎👑💘🔥🌈🎆🌺🦋🎀💞"
    },

    // Color scheme for the website
    // Use https://colorhunt.co or https://coolors.co to find beautiful color combinations
    colors: {
        backgroundStart: "#0F2027",      // Deep dark blue
        backgroundEnd: "#203A43",        // Dark teal-blue  
        buttonBackground: "#D4AF37",     // Golden color
        buttonHover: "#FFD700",          // Bright gold
        textColor: "#FFFFFF",            // White text
        accentColor: "#E94B3C",          // Rose-red accent
        secondaryAccent: "#6A4C93"       // Purple accent
    },

    // Animation settings
    // Adjust these if you want faster/slower animations
    animations: {
        floatDuration: "15s",           // How long it takes hearts to float up (10-20s recommended)
        floatDistance: "50px",          // How far hearts move sideways (30-70px recommended)
        bounceSpeed: "0.5s",            // Speed of bouncing animations (0.3-0.7s recommended)
        heartExplosionSize: 1.5         // Size of heart explosion effect (1.2-2.0 recommended)
    },

    // Background Music (Optional)
    // Add your own music URL after getting proper licenses
    music: {
        enabled: true,                     // Music feature is enabled
        autoplay: true,                    // Try to autoplay (note: some browsers may block this)
        musicUrl: "https://res.cloudinary.com/dncywqfpb/video/upload/v1738399057/music_qrhjvy.mp3", // Music streaming URL
        startText: "🎵 Play Music",        // Button text to start music
        stopText: "🔇 Stop Music",         // Button text to stop music
        volume: 0.5                        // Volume level (0.0 to 1.0)
    }
};

// Don't modify anything below this line unless you know what you're doing
window.VALENTINE_CONFIG = CONFIG; 