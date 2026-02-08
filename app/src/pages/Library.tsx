import { Link } from 'react-router-dom'
import { Plus } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { SongRow } from '@/components/SongRow'
import { useSongs } from '@/hooks/useSongs'
import { usePlayer } from '@/context/PlayerContext'

export default function Library() {
    const { data: songs } = useSongs()
    const { currentSong, playSong, isPlaying } = usePlayer()

    return (
        <div className="p-4 pb-24 space-y-6">
            <div className="flex items-center justify-between">
                <h1 className="text-3xl font-bold text-white">Library</h1>
                <Link to="/upload">
                    <Button size="icon" className="rounded-full h-10 w-10 bg-white text-black hover:bg-zinc-200">
                        <Plus className="h-5 w-5" />
                    </Button>
                </Link>
            </div>

            <div className="flex flex-col space-y-1">
                {songs?.map((song, index) => (
                    <SongRow
                        key={song.id}
                        song={song}
                        index={index}
                        isPlaying={currentSong?.id === song.id && isPlaying}
                        onClick={() => playSong(song)}
                    />
                ))}
            </div>
        </div>
    )
}
