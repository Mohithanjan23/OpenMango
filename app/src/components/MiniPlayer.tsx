import { Play, Pause } from 'lucide-react'
import { usePlayer } from '@/context/PlayerContext'
import { cn } from '@/lib/utils'

export function MiniPlayer() {
    const { currentSong, isPlaying, togglePlay, toggleFullScreen } = usePlayer()

    if (!currentSong) return null

    return (
        <div
            className="fixed bottom-16 left-2 right-2 z-40 bg-zinc-900/90 backdrop-blur-md border border-white/10 rounded-lg p-2 shadow-lg flex items-center gap-3 cursor-pointer transition-transform active:scale-[0.98]"
            onClick={toggleFullScreen}
        >
            {/* Cover Art */}
            <div className="w-10 h-10 rounded-md overflow-hidden bg-zinc-800 flex-shrink-0 relative">
                <img
                    src={currentSong.cover_url || "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=50&h=50&fit=crop"}
                    alt={currentSong.title}
                    className={cn("w-full h-full object-cover", isPlaying && "animate-[spin_10s_linear_infinite]")}
                />
            </div>

            {/* Info */}
            <div className="flex-1 min-w-0">
                <h4 className="text-sm font-semibold text-white truncate">{currentSong.title}</h4>
                <p className="text-xs text-zinc-400 truncate">{currentSong.artist}</p>
            </div>

            {/* Controls */}
            <button
                onClick={(e) => { e.stopPropagation(); togglePlay(); }}
                className="p-2 text-white hover:text-white/80 transition-colors"
            >
                {isPlaying ? <Pause className="h-5 w-5 fill-current" /> : <Play className="h-5 w-5 fill-current" />}
            </button>
        </div>
    )
}
