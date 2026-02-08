import { Home, Search, Library } from 'lucide-react';

const TabBar = () => {
    return (
        <div className="fixed bottom-0 left-0 right-0 h-[85px] bg-black/60 backdrop-blur-xl border-t border-white/5 flex items-start pt-4 justify-around z-40 pb-6">
            <div className="flex flex-col items-center gap-1 cursor-pointer text-white">
                <Home size={24} strokeWidth={2.5} />
                <span className="text-[10px] font-medium">Home</span>
            </div>
            <div className="flex flex-col items-center gap-1 cursor-pointer text-zinc-500 hover:text-white transition-colors">
                <Search size={24} strokeWidth={2.5} />
                <span className="text-[10px] font-medium">Search</span>
            </div>
            <div className="flex flex-col items-center gap-1 cursor-pointer text-zinc-500 hover:text-white transition-colors">
                <Library size={24} strokeWidth={2.5} />
                <span className="text-[10px] font-medium">Library</span>
            </div>
        </div>
    );
};

export default TabBar;
