const HeavyRotation = ({ songs, onSongSelect }) => {
    return (
        <div className="mt-8 mb-24">
            <h2 className="text-xl font-bold text-white mb-4 tracking-tight">Heavy Rotation</h2>
            <div className="flex gap-4 overflow-x-auto pb-4 no-scrollbar px-1">
                {songs.map((song) => (
                    <div
                        key={song.id}
                        className="flex-shrink-0 w-32 cursor-pointer group"
                        onClick={() => onSongSelect(song)}
                    >
                        <div className="w-32 h-32 rounded-lg overflow-hidden shadow-lg mb-2 relative">
                            <img src={song.coverUrl} alt={song.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors" />
                        </div>
                        <h3 className="text-white font-medium text-sm truncate">{song.title}</h3>
                        <p className="text-zinc-400 text-xs truncate">{song.artist}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default HeavyRotation;
