import { Play, Pause, SkipForward } from 'lucide-react';
import { motion } from 'framer-motion';

const MiniPlayer = ({ song, isPlaying, onPlayPause, onExpand }) => {
    if (!song) return null;

    return (
        <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="fixed bottom-[90px] left-2 right-2 h-14 bg-zinc-800/60 backdrop-blur-xl rounded-2xl flex items-center px-2 pr-4 shadow-lg border border-white/5 z-50 cursor-pointer"
            onClick={onExpand}
        >
            {/* Album Art */}
            <div className="w-10 h-10 rounded-lg overflow-hidden shadow-md flex-shrink-0 animate-[spin_5s_linear_infinite_paused]" style={{ animationPlayState: isPlaying ? 'running' : 'paused' }}>
                <img src={song.coverUrl} alt={song.title} className="w-full h-full object-cover" />
            </div>

            {/* Info */}
            <div className="flex-1 ml-3 overflow-hidden">
                <h4 className="text-white font-medium text-sm truncate">{song.title}</h4>
                <p className="text-zinc-400 text-xs truncate">{song.artist}</p>
            </div>

            {/* Controls */}
            <div className="flex items-center gap-3" onClick={(e) => e.stopPropagation()}>
                <button onClick={onPlayPause} className="text-white focus:outline-none">
                    {isPlaying ? <Pause fill="currentColor" size={20} /> : <Play fill="currentColor" size={20} />}
                </button>
                <button className="text-zinc-400 hover:text-white transition-colors focus:outline-none">
                    <SkipForward fill="currentColor" size={20} />
                </button>
            </div>
        </motion.div>
    );
};

export default MiniPlayer;
