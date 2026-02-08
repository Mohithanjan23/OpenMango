import { motion } from 'framer-motion';

const HeroCard = ({ song }) => {
    if (!song) return null;

    return (
        <div className="relative w-full h-[400px] rounded-3xl overflow-hidden shadow-2xl mt-4">
            {/* Background Gradient */}
            <div
                className="absolute inset-0 opacity-80"
                style={{
                    background: `linear-gradient(135deg, ${song.hexColor} 0%, #000 100%)`
                }}
            />

            {/* Dynamic glow effect */}
            <motion.div
                className="absolute -top-20 -right-20 w-64 h-64 rounded-full blur-[100px] opacity-60"
                style={{ backgroundColor: song.hexColor }}
                animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.7, 0.5] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            />

            <div className="relative z-10 p-6 flex flex-col h-full justify-end pb-12">
                <span className="uppercase text-xs font-semibold tracking-widest text-white/60 mb-2">New Release</span>
                <h1 className="text-4xl font-bold text-white mb-1 tracking-tight">{song.title}</h1>
                <p className="text-lg text-white/80 font-medium">{song.artist}</p>

                {/* Play Button */}
                <button className="mt-6 bg-white text-black rounded-full px-8 py-3 font-bold flex items-center gap-2 w-max hover:scale-105 transition-transform">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                        <path fillRule="evenodd" d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z" clipRule="evenodd" />
                    </svg>
                    Listen Now
                </button>
            </div>

            {/* Floating Album Art - Depth Effect */}
            <motion.img
                src={song.coverUrl}
                alt={song.album}
                className="absolute bottom-[-10%] right-[-10%] w-[300px] h-[300px] object-cover rounded-xl shadow-2xl rotate-[-12deg]"
                initial={{ y: 20, rotate: -12 }}
                animate={{ y: 0, rotate: -12 }}
                transition={{ duration: 4, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
            />
        </div>
    );
};

export default HeroCard;
