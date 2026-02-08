import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import { Home, Search, Library, User } from 'lucide-react'
import { TabIcon } from './TabIcon'
import { MiniPlayer } from './MiniPlayer'
import { FullScreenPlayer } from './FullScreenPlayer'

export function Layout() {
    const navigate = useNavigate()
    const location = useLocation()

    return (
        <div className="flex flex-col h-screen bg-zinc-950 text-white overflow-hidden font-sans">
            {/* Main Content Area */}
            <main className="flex-1 overflow-y-auto pb-32">
                <Outlet />
            </main>

            <MiniPlayer />
            <FullScreenPlayer />

            {/* Bottom Tab Bar */}
            <div className="fixed bottom-0 left-0 right-0 z-50 bg-zinc-900/80 backdrop-blur-2xl border-t border-white/5 pb-safe">
                <div className="flex justify-around items-center h-16 px-2">
                    <TabIcon
                        icon={Home}
                        label="Home"
                        isActive={location.pathname === '/'}
                        onClick={() => navigate('/')}
                    />
                    <TabIcon
                        icon={Search}
                        label="Search"
                        isActive={location.pathname === '/search'}
                        onClick={() => navigate('/search')}
                    />
                    <TabIcon
                        icon={Library}
                        label="Library"
                        isActive={location.pathname === '/library'}
                        onClick={() => navigate('/library')}
                    />
                    {/* Placeholder for Profile/Account */}
                    <TabIcon
                        icon={User}
                        label="Account"
                        isActive={location.pathname === '/account'}
                        onClick={() => navigate('/account')}
                    />
                </div>
            </div>
        </div>
    )
}
