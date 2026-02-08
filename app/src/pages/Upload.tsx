import React, { useState, useCallback } from 'react'
import { useDropzone } from 'react-dropzone'
import { supabase } from '../supabaseClient'
import { Loader2, Upload as UploadIcon, Music } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useAuth } from '@/context/AuthContext'
import { useNavigate } from 'react-router-dom'
import { cn } from '@/lib/utils'

export default function Upload() {
    const { user } = useAuth()
    const navigate = useNavigate()
    const [file, setFile] = useState<File | null>(null)
    const [title, setTitle] = useState('')
    const [artist, setArtist] = useState('')
    const [album, setAlbum] = useState('')
    const [uploading, setUploading] = useState(false)

    const onDrop = useCallback((acceptedFiles: File[]) => {
        const selected = acceptedFiles[0]
        if (selected) {
            setFile(selected)
            // Auto-fill title from filename
            const name = selected.name.replace(/\.[^/.]+$/, "")
            setTitle(name)
        }
    }, [])

    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop,
        accept: {
            'audio/mpeg': ['.mp3'],
            'audio/wav': ['.wav']
        },
        maxFiles: 1
    })

    const handleUpload = async (e: React.FormEvent) => {
        e.preventDefault()
        if (!file || !user) return

        setUploading(true)

        try {
            // 1. Upload File
            const fileExt = file.name.split('.').pop()
            const fileName = `${user.id}/${Math.random()}.${fileExt}`

            const { error: uploadError } = await supabase.storage
                .from('music')
                .upload(fileName, file)

            if (uploadError) throw uploadError

            // 2. Get Public URL
            const { data: { publicUrl } } = supabase.storage
                .from('music')
                .getPublicUrl(fileName)

            // 3. Insert Metadata
            // Mock duration for now (or use a library to get it)
            const mockDuration = 180

            const { error: dbError } = await supabase
                .from('songs')
                .insert({
                    user_id: user.id,
                    title,
                    artist: artist || 'Unknown Artist',
                    album: album || 'Unknown Album',
                    url: publicUrl, // NOTE: Schema uses song_url, I need to check schema.sql. I used song_url in schema.
                    song_url: publicUrl,
                    duration: mockDuration
                })

            if (dbError) throw dbError

            navigate('/')
        } catch (error: any) {
            alert('Upload failed: ' + error.message)
        } finally {
            setUploading(false)
        }
    }

    return (
        <div className="p-6 max-w-2xl mx-auto space-y-8 pb-24">
            <h1 className="text-2xl font-bold text-white">Upload Music</h1>

            <div
                {...getRootProps()}
                className={cn(
                    "border-2 border-dashed rounded-xl p-10 flex flex-col items-center justify-center cursor-pointer transition-colors h-64",
                    isDragActive ? "border-primary bg-primary/10" : "border-zinc-700 hover:border-zinc-500 bg-zinc-900/50",
                    file && "border-green-500/50 bg-green-500/5"
                )}
            >
                <input {...getInputProps()} />
                {file ? (
                    <div className="text-center space-y-2">
                        <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-2 text-green-500">
                            <Music className="w-6 h-6" />
                        </div>
                        <p className="text-white font-medium">{file.name}</p>
                        <p className="text-zinc-500 text-sm">{(file.size / 1024 / 1024).toFixed(2)} MB</p>
                        <Button variant="ghost" size="sm" onClick={(e: React.MouseEvent) => { e.stopPropagation(); setFile(null); }} className="text-red-400 hover:text-red-300">
                            Remove
                        </Button>
                    </div>
                ) : (
                    <div className="text-center space-y-2">
                        <UploadIcon className="w-10 h-10 text-zinc-500 mx-auto mb-2" />
                        <p className="text-white font-medium">Drag & drop an MP3 here</p>
                        <p className="text-zinc-500 text-sm">or click to browse</p>
                    </div>
                )}
            </div>

            {file && (
                <form onSubmit={handleUpload} className="space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-500">
                    <Input
                        placeholder="Title"
                        value={title}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setTitle(e.target.value)}
                        required
                        className="bg-zinc-900 border-zinc-800"
                    />
                    <Input
                        placeholder="Artist"
                        value={artist}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setArtist(e.target.value)}
                        className="bg-zinc-900 border-zinc-800"
                    />
                    <Input
                        placeholder="Album"
                        value={album}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setAlbum(e.target.value)}
                        className="bg-zinc-900 border-zinc-800"
                    />

                    <Button type="submit" disabled={uploading} className="w-full bg-white text-black hover:bg-zinc-200">
                        {uploading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : 'Upload Song'}
                    </Button>
                </form>
            )}
        </div>
    )
}
