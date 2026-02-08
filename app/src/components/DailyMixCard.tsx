import { cn } from '@/lib/utils'

interface DailyMixCardProps {
    title: string
    description?: string
    gradient: string
    onClick?: () => void
}

export function DailyMixCard({ title, description, gradient, onClick }: DailyMixCardProps) {
    return (
        <div
            onClick={onClick}
            className={cn(
                "relative aspect-square rounded-lg overflow-hidden cursor-pointer transition-all hover:scale-105 active:scale-95",
                gradient
            )}
        >
            <div className="absolute inset-0 bg-black/20" /> {/* Dim overlay */}

            {/* Abstract decorative shapes */}
            <div className="absolute top-0 right-0 w-3/4 h-3/4 bg-white/10 blur-3xl rounded-full -translate-y-1/4 translate-x-1/4" />
            <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-black/10 blur-xl rounded-full translate-y-1/4 -translate-x-1/4" />

            <div className="absolute bottom-3 left-3 right-3">
                <div className="flex items-center gap-2 mb-1">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-white/80">Mix</span>
                </div>
                <h3 className="text-xl font-bold text-white leading-tight">{title}</h3>
                {description && <p className="text-xs text-white/70 mt-1 line-clamp-2">{description}</p>}
            </div>

            {/* Apple Music style logo overlay (optional) */}
            <div className="absolute top-3 left-3 w-6 h-6 border-2 border-white/30 rounded-full" />
        </div>
    )
}
