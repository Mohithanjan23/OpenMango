import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, MoreHorizontal, SkipBack, Play, Pause, SkipForward, Volume2, Mic2, ListMusic } from 'lucide-react';
import LyricsView from './LyricsView';

const FullScreenPlayer = ({ song, isPlaying, onPlayPause, onClose, currentTime, duration, onSeek }) => {
    const [showLyrics, setShowLyrics] = useState(false);

    // Format time (mm:ss)
    const formatTime = (time) => {
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60);
        return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    };

    return (
        <AnimatePresence>
            <motion.div
                initial={{ y: '100%' }}
                animate={{ y: 0 }}
                exit={{ y: '100%' }}
                transition={{ type: "spring", damping: 25, stiffness: 200 }}
                className="fixed inset-0 z-50 flex flex-col bg-black overflow-hidden"
            >
                {/* Dynamic Background Gradient */}
                <div
                    className="absolute inset-0 opacity-40 transition-colors duration-1000"
                    style={{ background: `linear-gradient(to bottom, ${song.hexColor}, #000)` }}
                />
                <div className="absolute inset-0 backdrop-blur-3xl bg-black/30" />

                {/* Header */}
                <div className="relative z-10 flex items-center justify-between px-6 pt-12 pb-4">
                    <button onClick={onClose} className="text-white/60 hover:text-white">
                        <ChevronDown size={30} />
                    </button>
                    <div className="flex flex-col items-center">
                        <span className="text-white/50 text-[10px] uppercase font-bold tracking-widest">Playing From Album</span>
                        <span className="text-white text-xs font-bold truncate max-w-[200px]">{song.album}</span>
                    </div>
                    <button className="text-white/60 hover:text-white">
                        <MoreHorizontal size={26} />
                    </button>
                </div>

                {/* Content */}
                <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-8 w-full max-w-lg mx-auto">
                    {!showLyrics ? (
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            className="w-full aspect-square relative shadow-2xl rounded-2xl overflow-hidden mb-10"
                        >
                            <img src={song.coverUrl} alt={song.title} className="w-full h-full object-cover" />
                        </motion.div>
                    ) : (
                        <div className="w-full h-[45vh] mb-8 relative">
                            <LyricsView lyrics={song.lyrics} currentTime={currentTime} />
                        </div>
                    )}

                    {/* Song Info */}
                    <div className="w-full flex justify-between items-end mb-6">
                        <div>
                            <h2 className="text-2xl font-bold text-white leading-tight">{song.title}</h2>
                            <p className="text-lg text-white/60">{song.artist}</p>
                        </div>
                        <button className="bg-white/10 p-2 rounded-full mb-1">
                            {/* Visualizer icon placeholder */}
                            <div className="flex gap-1 items-end h-4">
                                <div className="w-1 bg-green-400 h-2 animate-bounce" />
                                <div className="w-1 bg-green-400 h-4 animate-bounce delay-100" />
                                <div className="w-1 bg-green-400 h-3 animate-bounce delay-200" />
                            </div>
                        </button>
                    </div>

                    {/* Seek Bar */}
                    <div className="w-full mb-2">
                        <input
                            type="range"
                            min="0"
                            max={duration}
                            value={currentTime}
                            onChange={(e) => onSeek(Number(e.target.value))}
                            className="w-full h-1 bg-white/20 rounded-lg appearance-none cursor-pointer"
                        />
                        <div className="flex justify-between text-xs text-white/40 font-medium mt-2">
                            <span>{formatTime(currentTime)}</span>
                            <span>{formatTime(duration)}</span>
                        </div>
                    </div>

                    {/* Controls */}
                    <div className="w-full flex items-center justify-between mb-8 mt-4">
                        <button className="text-white/60 hover:text-white"><SkipBack size={32} fill="currentColor" /></button>
                        <button
                            onClick={onPlayPause}
                            className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-black hover:scale-105 transition-transform"
                        >
                            {isPlaying ? <Pause size={32} fill="currentColor" /> : <Play size={32} fill="currentColor" className="ml-1" />}
                        </button>
                        <button className="text-white/60 hover:text-white"><SkipForward size={32} fill="currentColor" /></button>
                    </div>

                    {/* Bottom Actions */}
                    <div className="w-full flex justify-between items-center px-4 mb-4">
                        <button
                            onClick={() => setShowLyrics(!showLyrics)}
                            className={`p-2 rounded-lg transition-colors ${showLyrics ? 'text-white bg-white/10' : 'text-white/40'}`}
                        >
                            <Mic2 size={24} />
                        </button>
                        <div className="flex items-center gap-2 w-1/2">
                            <Volume2 size={20} className="text-white/40" />
                            <div className="h-1 bg-white/20 rounded-full flex-1 relative">
                                <div className="absolute left-0 top-0 bottom-0 w-3/4 bg-white/60 rounded-full" />
                            </div>
                        </div>
                        <button className="text-white/40 hover:text-white"><ListMusic size={24} /></button>
                    </div>
                </div>
            </motion.div>
        </AnimatePresence>
    );
};

export default FullScreenPlayer;
