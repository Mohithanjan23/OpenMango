import { Play, MoreHorizontal } from 'lucide-react'
import { cn } from '@/lib/utils'

export interface Song {
    id: string
    title: string
    artist: string
    album: string
    cover_url: string
    duration: number
    song_url: string
}

interface SongRowProps {
    song: Song
    index: number
    isPlaying?: boolean
    onClick?: () => void
}

export function SongRow({ song, index, isPlaying, onClick }: SongRowProps) {

    const formatDuration = (seconds: number) => {
        const mins = Math.floor(seconds / 60)
        const secs = seconds % 60
        return `${mins}:${secs.toString().padStart(2, '0')}`
    }

    return (
        <div
            onClick={onClick}
            className="group flex items-center p-2 rounded-md hover:bg-white/5 transition-colors cursor-pointer group"
        >
            {/* Index / Play Icon */}
            <div className="w-8 flex justify-center text-sm text-gray-400 group-hover:text-white">
                <span className="group-hover:hidden">{isPlaying ? <div className="w-3 h-3 bg-primary animate-pulse rounded-full" /> : index + 1}</span>
                <Play className="hidden group-hover:block w-4 h-4 fill-white" />
            </div>

            {/* Cover Art */}
            <div className="ml-2 w-10 h-10 flex-shrink-0">
                <img
                    src={song.cover_url || "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=50&h=50&fit=crop"}
                    alt={song.title}
                    className="w-full h-full object-cover rounded shadow-md"
                />
            </div>

            {/* Title & Artist */}
            <div className="ml-4 flex-1 min-w-0">
                <div className={cn("truncate font-medium text-sm", isPlaying ? "text-primary" : "text-white")}>
                    {song.title}
                </div>
                <div className="truncate text-xs text-gray-400">
                    {song.artist}
                </div>
            </div>

            {/* Album (Hidden on mobile) */}
            <div className="hidden md:block flex-1 ml-4 truncate text-sm text-gray-400">
                {song.album}
            </div>

            {/* Duration */}
            <div className="ml-4 text-xs text-gray-500 w-10 text-right">
                {formatDuration(song.duration)}
            </div>

            {/* Menu */}
            <div className="ml-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <button className="p-1 hover:text-white text-gray-400">
                    <MoreHorizontal className="w-4 h-4" />
                </button>
            </div>
        </div>
    )
}
