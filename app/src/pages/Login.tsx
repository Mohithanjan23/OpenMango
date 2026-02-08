import React, { useState } from 'react'
import { supabase } from '../supabaseClient'
import { useNavigate } from 'react-router-dom'
import { Loader2, Music } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { cn } from '@/lib/utils'

export default function Login() {
    const [loading, setLoading] = useState(false)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isSignUp, setIsSignUp] = useState(false)
    const [error, setError] = useState<string | null>(null)
    const navigate = useNavigate()

    const handleAuth = async (e: React.FormEvent) => {
        e.preventDefault()
        setLoading(true)
        setError(null)

        try {
            if (isSignUp) {
                const { error } = await supabase.auth.signUp({
                    email,
                    password,
                })
                if (error) throw error
                alert('Check your email for the confirmation link!')
            } else {
                const { error } = await supabase.auth.signInWithPassword({
                    email,
                    password,
                })
                if (error) throw error
                navigate('/')
            }
        } catch (error: any) {
            setError(error.message)
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className="flex h-screen w-full items-center justify-center bg-zinc-950 px-4">
            {/* Background Gradients */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-purple-900/20 blur-[120px] rounded-full" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-blue-900/20 blur-[120px] rounded-full" />
            </div>

            <div className="relative z-10 w-full max-w-sm flex flex-col items-center space-y-6">
                {/* Logo */}
                <div className="flex flex-col items-center space-y-2 mb-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-violet-600 rounded-2xl flex items-center justify-center shadow-lg shadow-pink-500/20">
                        <Music className="w-8 h-8 text-white fill-white" />
                    </div>
                    <h1 className="text-2xl font-semibold tracking-tight text-white">OpenMango</h1>
                    <p className="text-sm text-zinc-400">Sign in to start listening</p>
                </div>

                <form onSubmit={handleAuth} className="w-full space-y-4">
                    <div className="space-y-4">
                        <Input
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="bg-zinc-900/50 border-zinc-800 text-white placeholder:text-zinc-500 h-11 focus-visible:ring-indigo-500/50"
                        />
                        <Input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            className="bg-zinc-900/50 border-zinc-800 text-white placeholder:text-zinc-500 h-11 focus-visible:ring-indigo-500/50"
                        />
                    </div>

                    {error && <div className="text-red-500 text-sm text-center">{error}</div>}

                    <Button
                        type="submit"
                        disabled={loading}
                        className={cn("w-full h-11 bg-white text-black hover:bg-zinc-200 transition-colors font-medium text-base", loading && "opacity-70")}
                    >
                        {loading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : (isSignUp ? 'Sign Up' : 'Sign In')}
                    </Button>
                </form>

                <button
                    type="button"
                    onClick={() => setIsSignUp(!isSignUp)}
                    className="text-sm text-zinc-400 hover:text-white transition-colors"
                >
                    {isSignUp ? 'Already have an account? Sign In' : "Don't have an account? Sign Up"}
                </button>
            </div>
        </div>
    )
}
