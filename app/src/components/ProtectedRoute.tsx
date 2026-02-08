import { Navigate, Outlet } from 'react-router-dom'
import { useAuth } from '@/context/AuthContext'
import { Loader2 } from 'lucide-react'

export function ProtectedRoute() {
    const { session, loading } = useAuth()

    if (loading) {
        return (
            <div className="flex h-screen items-center justify-center bg-zinc-950 text-white">
                <Loader2 className="h-8 w-8 animate-spin text-primary" />
            </div>
        )
    }

    if (!session) {
        return <Navigate to="/login" replace />
    }

    return <Outlet />
}
