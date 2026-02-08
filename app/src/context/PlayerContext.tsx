import { createContext, useContext, useState, useEffect, useRef, type ReactNode } from 'react'
import type { Song } from '@/components/SongRow'

interface PlayerContextType {
    currentSong: Song | null
    isPlaying: boolean
    duration: number
    currentTime: number
    volume: number
    isFullScreen: boolean
    playSong: (song: Song) => void
    togglePlay: () => void
    setVolume: (volume: number) => void
    seek: (time: number) => void
    toggleFullScreen: () => void
}

const PlayerContext = createContext<PlayerContextType | undefined>(undefined)

export function PlayerProvider({ children }: { children: ReactNode }) {
    const [currentSong, setCurrentSong] = useState<Song | null>(null)
    const [isPlaying, setIsPlaying] = useState(false)
    const [duration, setDuration] = useState(0)
    const [currentTime, setCurrentTime] = useState(0)
    const [volume, setVolumeState] = useState(1)
    const [isFullScreen, setIsFullScreen] = useState(false)
    const audioRef = useRef<HTMLAudioElement | null>(null)

    useEffect(() => {
        if (!audioRef.current) {
            audioRef.current = new Audio()
        }

        const audio = audioRef.current

        const updateTime = () => setCurrentTime(audio.currentTime)
        const updateDuration = () => setDuration(audio.duration)
        const onEnded = () => setIsPlaying(false)

        audio.addEventListener('timeupdate', updateTime)
        audio.addEventListener('loadedmetadata', updateDuration)
        audio.addEventListener('ended', onEnded)

        return () => {
            audio.removeEventListener('timeupdate', updateTime)
            audio.removeEventListener('loadedmetadata', updateDuration)
            audio.removeEventListener('ended', onEnded)
        }
    }, [])

    useEffect(() => {
        if (audioRef.current) {
            if (isPlaying) {
                audioRef.current.play().catch(e => console.error("Playback failed", e))
            } else {
                audioRef.current.pause()
            }
        }
    }, [isPlaying])

    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.volume = volume
        }
    }, [volume])

    const playSong = (song: Song) => {
        if (currentSong?.id === song.id) {
            togglePlay()
            return
        }

        if (audioRef.current) {
            audioRef.current.src = song.song_url
            audioRef.current.load()
            setCurrentSong(song)
            setIsPlaying(true)
        }
    }

    const togglePlay = () => {
        if (currentSong) {
            setIsPlaying(!isPlaying)
        }
    }

    const setVolume = (vol: number) => {
        setVolumeState(vol)
    }

    const seek = (time: number) => {
        if (audioRef.current) {
            audioRef.current.currentTime = time
            setCurrentTime(time)
        }
    }

    const toggleFullScreen = () => setIsFullScreen(!isFullScreen)

    return (
        <PlayerContext.Provider value={{
            currentSong,
            isPlaying,
            duration,
            currentTime,
            volume,
            isFullScreen,
            playSong,
            togglePlay,
            setVolume,
            seek,
            toggleFullScreen
        }}>
            {children}
        </PlayerContext.Provider>
    )
}

export function usePlayer() {
    const context = useContext(PlayerContext)
    if (context === undefined) {
        throw new Error('usePlayer must be used within a PlayerProvider')
    }
    return context
}
