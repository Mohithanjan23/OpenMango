import type { LucideIcon } from 'lucide-react'
import { cn } from '@/lib/utils'

interface TabIconProps {
    icon: LucideIcon
    label: string
    isActive?: boolean
    onClick?: () => void
}

export function TabIcon({ icon: Icon, label, isActive, onClick }: TabIconProps) {
    return (
        <button
            onClick={onClick}
            className={cn(
                "flex flex-col items-center justify-center gap-1 p-2 transition-colors",
                isActive ? "text-primary" : "text-muted-foreground hover:text-primary/70"
            )}
        >
            <Icon className={cn("h-6 w-6", isActive && "fill-current")} />
            <span className="text-[10px] font-medium">{label}</span>
        </button>
    )
}
