import { DailyMixCard } from '@/components/DailyMixCard'
import { SongRow } from '@/components/SongRow'
import { useSongs } from '@/hooks/useSongs'
import { usePlayer } from '@/context/PlayerContext'
import { Loader2 } from 'lucide-react'

export default function Home() {
    const { data: songs, isLoading, error } = useSongs()
    const { currentSong, playSong, isPlaying } = usePlayer()

    const getTimeGreeting = () => {
        const hour = new Date().getHours()
        if (hour < 12) return 'Good Morning'
        if (hour < 18) return 'Good Afternoon'
        return 'Good Evening'
    }

    if (isLoading) {
        return (
            <div className="flex h-full items-center justify-center">
                <Loader2 className="h-8 w-8 animate-spin text-primary" />
            </div>
        )
    }

    if (error) {
        return <div className="p-4 text-red-500">Error loading songs: {error.message}</div>
    }

    return (
        <div className="p-4 pb-24 space-y-8">
            {/* Header */}
            <h1 className="text-3xl font-bold tracking-tight text-white mb-6">
                {getTimeGreeting()}
            </h1>

            {/* Daily Mixes */}
            <section>
                <h2 className="text-xl font-semibold text-white mb-4">Made for You</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <DailyMixCard
                        title="Chill Mix"
                        description="Relaxing beats for your downtime"
                        gradient="bg-gradient-to-br from-teal-500 to-emerald-700"
                    />
                    <DailyMixCard
                        title="Pop Mix"
                        description="Top hits just for you"
                        gradient="bg-gradient-to-br from-rose-500 to-pink-700"
                    />
                    <DailyMixCard
                        title="Focus Flow"
                        description="Instrumentals to help you concentrate"
                        gradient="bg-gradient-to-br from-amber-500 to-orange-700"
                    />
                    <DailyMixCard
                        title="Night Vibe"
                        description="Dark synthwave and electronics"
                        gradient="bg-gradient-to-br from-indigo-500 to-purple-800"
                    />
                </div>
            </section>

            {/* Heavy Rotation / Recently Added */}
            <section>
                <h2 className="text-xl font-semibold text-white mb-4">Recently Added</h2>
                <div className="flex flex-col space-y-1">
                    {songs?.length === 0 ? (
                        <div className="text-zinc-500 text-sm">No songs found. Upload some music to get started!</div>
                    ) : (
                        songs?.map((song, index) => (
                            <SongRow
                                key={song.id}
                                song={song}
                                index={index}
                                isPlaying={currentSong?.id === song.id && isPlaying}
                                onClick={() => playSong(song)}
                            />
                        ))
                    )}
                </div>
            </section>
        </div>
    )
}
