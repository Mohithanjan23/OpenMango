import { motion } from 'framer-motion';

const LyricsView = ({ lyrics, currentTime }) => {
    // Find active line index based on current time
    const activeIndex = lyrics.findIndex((line, i) => {
        const nextLine = lyrics[i + 1];
        return currentTime >= line.time && (!nextLine || currentTime < nextLine.time);
    });

    return (
        <div className="w-full h-full overflow-y-auto px-6 py-10 no-scrollbar text-center relative mask-linear-gradient">
            {lyrics.map((line, index) => {
                const isActive = index === activeIndex;
                return (
                    <motion.p
                        key={index}
                        initial={{ opacity: 0.5, scale: 0.9 }}
                        animate={{
                            opacity: isActive ? 1 : 0.4,
                            scale: isActive ? 1.1 : 0.95,
                            filter: isActive ? 'blur(0px)' : 'blur(1px)',
                            y: isActive ? 0 : 0
                        }}
                        transition={{ duration: 0.3 }}
                        className={`text-2xl font-bold my-6 cursor-pointer transition-colors duration-500 ${isActive ? 'text-white' : 'text-white/60'}`}
                    >
                        {line.text}
                    </motion.p>
                );
            })}
            <div className="h-32" /> {/* Spacer */}
        </div>
    );
};

export default LyricsView;
