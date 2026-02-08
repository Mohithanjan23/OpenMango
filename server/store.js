const songs = [
    {
        id: 1,
        title: "Midnight City",
        artist: "M83",
        album: "Hurry Up, We're Dreaming",
        coverUrl: "https://upload.wikimedia.org/wikipedia/en/a/a7/M83_-_Hurry_Up%2C_We%27re_Dreaming.png",
        hexColor: "#1e1b4b", // Midnight blue/indigo
        duration: 243,
        lyrics: [
            { time: 0, text: "[Instrumental Intro]" },
            { time: 12, text: "Waiting in a car" },
            { time: 16, text: "Waiting for a ride in the dark" },
            { time: 20, text: "The night city grows" },
            { time: 24, text: "Look at the horizon glow" },
            { time: 28, text: "Waiting in a car" },
            { time: 32, text: "Waiting for a ride in the dark" },
            { time: 36, text: "The night city grows" },
            { time: 40, text: "Look at the horizon glow" },
        ]
    },
    {
        id: 2,
        title: "Blinding Lights",
        artist: "The Weeknd",
        album: "After Hours",
        coverUrl: "https://upload.wikimedia.org/wikipedia/en/e/e6/The_Weeknd_-_Blinding_Lights.png",
        hexColor: "#991b1b", // Red
        duration: 200,
        lyrics: [
            { time: 0, text: "[Intro]" },
            { time: 25, text: "I've been tryna call" },
            { time: 30, text: "I've been on my own for long enough" },
            { time: 35, text: "Maybe you can show me how to love, maybe" },
            { time: 45, text: "I'm going through withdrawals" },
            { time: 50, text: "You don't even have to do too much" },
            { time: 55, text: "You can turn me on with just a touch, baby" },
        ]
    },
    {
        id: 3,
        title: "Levitating",
        artist: "Dua Lipa",
        album: "Future Nostalgia",
        coverUrl: "https://upload.wikimedia.org/wikipedia/en/f/f5/Dua_Lipa_-_Levitating.png",
        hexColor: "#0f172a", // Slate 900
        duration: 203,
        lyrics: [
            { time: 0, text: "[Intro]" },
            { time: 15, text: "If you wanna run away with me, I know a galaxy" },
            { time: 20, text: "And I can take you for a ride" },
            { time: 25, text: "I had a premonition that we fell into a rhythm" },
            { time: 30, text: "Where the music don't stop for life" },
        ]
    },
    {
        id: 4,
        title: "Save Your Tears",
        artist: "The Weeknd",
        album: "After Hours",
        coverUrl: "https://upload.wikimedia.org/wikipedia/en/e/e6/The_Weeknd_-_Blinding_Lights.png",
        hexColor: "#7f1d1d", // Red 900
        duration: 215,
        lyrics: [
            { time: 0, text: "[Intro]" },
            { time: 10, text: "I saw you dancing in a crowded room" },
            { time: 15, text: "You look so happy when I'm not with you" },
            { time: 20, text: "But then you saw me, caught you by surprise" },
            { time: 25, text: "A single teardrop falling from your eye" },
        ]
    },
    {
        id: 5,
        title: "Peaches",
        artist: "Justin Bieber",
        album: "Justice",
        coverUrl: "https://upload.wikimedia.org/wikipedia/en/0/08/Justin_Bieber_-_Justice.png",
        hexColor: "#fb923c", // Orange 400
        duration: 198,
        lyrics: [
            { time: 0, text: "[Intro]" },
            { time: 10, text: "I got my peaches out in Georgia (Oh, yeah, shit)" },
            { time: 15, text: "I get my weed from California (That's that shit)" },
            { time: 20, text: "I took my chick up to the North, yeah (Badass bitch)" },
            { time: 25, text: "I get my light right from the source, yeah (Yeah, that's it)" },
        ]
    }
];

const dailyMixes = [
    {
        id: 1,
        title: "Daily Mix 1",
        description: "Made for you • M83, The Weeknd, Dua Lipa",
        gradientColors: "from-teal-400 to-blue-500", // Tailwind classes for gradient
        coverColor: "#2dd4bf" // Teal 400
    },
    {
        id: 2,
        title: "Daily Mix 2",
        description: "Pop hits • Justin Bieber, Ariana Grande",
        gradientColors: "from-rose-400 to-pink-500",
        coverColor: "#fb7185" // Rose 400
    },
    {
        id: 3,
        title: "Daily Mix 3",
        description: "Chill vibes • Lo-fi, instrumental",
        gradientColors: "from-amber-400 to-orange-500",
        coverColor: "#fbbf24" // Amber 400
    },
    {
        id: 4,
        title: "Daily Mix 4",
        description: "Rock classics • Queen, Led Zeppelin",
        gradientColors: "from-purple-500 to-indigo-600",
        coverColor: "#a855f7" // Purple 500
    }
];

const genres = [
    { id: 1, name: "Pop", color: "#ec4899" },
    { id: 2, name: "Rock", color: "#ef4444" },
    { id: 3, name: "Hip-Hop", color: "#f59e0b" },
    { id: 4, name: "Electronic", color: "#3b82f6" },
    { id: 5, name: "Indie", color: "#10b981" },
    { id: 6, name: "R&B", color: "#8b5cf6" },
];

module.exports = { songs, dailyMixes, genres };
