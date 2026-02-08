import { ChevronDown, Play, Pause, SkipBack, SkipForward, Volume2 } from 'lucide-react'
import { usePlayer } from '@/context/PlayerContext'
import { motion, AnimatePresence } from 'framer-motion'
import { Slider } from '@/components/ui/slider'

export function FullScreenPlayer() {
    const { currentSong, isPlaying, togglePlay, isFullScreen, toggleFullScreen, currentTime, duration, seek, volume, setVolume } = usePlayer()

    const formatTime = (time: number) => {
        if (!time || isNaN(time)) return "0:00"
        const mins = Math.floor(time / 60)
        const secs = Math.floor(time % 60)
        return `${mins}:${secs.toString().padStart(2, '0')}`
    }

    return (
        <AnimatePresence>
            {isFullScreen && currentSong && (
                <motion.div
                    initial={{ y: "100%" }}
                    animate={{ y: 0 }}
                    exit={{ y: "100%" }}
                    transition={{ type: "spring", damping: 25, stiffness: 200 }}
                    className="fixed inset-0 z-50 bg-zinc-950 flex flex-col"
                >
                    {/* Dynamic Background */}
                    <div className="absolute inset-0 opacity-30 pointer-events-none overflow-hidden">
                        <div className="absolute top-[-20%] left-[-20%] w-[80%] h-[80%] bg-purple-600/40 blur-[150px] rounded-full" />
                        <div className="absolute bottom-[-20%] right-[-20%] w-[80%] h-[80%] bg-blue-600/40 blur-[150px] rounded-full" />
                    </div>

                    {/* Header */}
                    <div className="relative pt-safe px-6 h-16 flex items-center justify-center">
                        <button
                            onClick={toggleFullScreen}
                            className="absolute left-6 text-zinc-400 hover:text-white"
                        >
                            <ChevronDown className="h-8 w-8" />
                        </button>
                        <span className="text-xs font-semibold tracking-widest uppercase text-zinc-400">Now Playing</span>
                    </div>

                    {/* Content */}
                    <div className="relative flex-1 flex flex-col items-center justify-center px-8 space-y-10">
                        {/* Album Art */}
                        <div className="w-full aspect-square max-w-sm rounded-[2rem] overflow-hidden shadow-2xl shadow-black/50 ring-1 ring-white/10">
                            <img
                                src={currentSong.cover_url || "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=50&h=50&fit=crop"}
                                alt={currentSong.title}
                                className="w-full h-full object-cover"
                            />
                        </div>

                        {/* Info & Controls */}
                        <div className="w-full max-w-sm space-y-8">
                            <div className="space-y-1">
                                <h2 className="text-2xl font-bold text-white text-center leading-tight">{currentSong.title}</h2>
                                <p className="text-lg text-zinc-400 text-center font-medium">{currentSong.artist}</p>
                            </div>

                            {/* Progress Bar */}
                            <div className="space-y-2">
                                <Slider
                                    value={[currentTime]}
                                    max={duration || 100}
                                    step={1}
                                    onValueChange={(vals) => seek(vals[0])}
                                    className="w-full cursor-pointer"
                                />
                                <div className="flex justify-between text-xs text-zinc-500 font-medium">
                                    <span>{formatTime(currentTime)}</span>
                                    <span>{formatTime(duration)}</span>
                                </div>
                            </div>

                            {/* Playback Controls */}
                            <div className="flex items-center justify-center gap-8">
                                <button className="text-white/60 hover:text-white transition-colors">
                                    <SkipBack className="h-8 w-8 fill-current" />
                                </button>
                                <button
                                    onClick={togglePlay}
                                    className="w-20 h-20 bg-white rounded-full flex items-center justify-center text-black hover:scale-105 transition-transform shadow-xl shadow-white/10"
                                >
                                    {isPlaying ? <Pause className="h-8 w-8 fill-current" /> : <Play className="h-8 w-8 fill-current ml-1" />}
                                </button>
                                <button className="text-white/60 hover:text-white transition-colors">
                                    <SkipForward className="h-8 w-8 fill-current" />
                                </button>
                            </div>

                            {/* Volume Slider */}
                            <div className="flex items-center gap-4 pt-4">
                                <Volume2 className="h-5 w-5 text-zinc-500" />
                                <Slider
                                    value={[volume]}
                                    max={1}
                                    step={0.01}
                                    onValueChange={(vals) => setVolume(vals[0])}
                                    className="flex-1"
                                />
                            </div>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}
