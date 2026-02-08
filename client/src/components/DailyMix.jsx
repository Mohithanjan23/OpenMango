const DailyMixCard = ({ mix }) => {
    return (
        <div className={`relative w-40 h-40 rounded-2xl overflow-hidden flex-shrink-0 cursor-pointer hover:scale-105 transition-transform duration-300 bg-gradient-to-br ${mix.gradientColors}`}>
            {/* Abstract Shapes */}
            <div className="absolute top-[-20%] left-[-20%] w-24 h-24 bg-white/20 rounded-full blur-xl" />
            <div className="absolute bottom-[-10%] right-[-10%] w-20 h-20 bg-black/10 rounded-full blur-lg" />

            <div className="absolute bottom-3 left-3 right-3">
                <h3 className="text-white font-bold text-lg leading-tight">{mix.title}</h3>
                <p className="text-white/70 text-xs mt-1 line-clamp-2">{mix.description}</p>
            </div>
            <div className="absolute top-3 left-3">
                <div className="w-8 h-8 rounded-full bg-black/20 flex items-center justify-center backdrop-blur-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-white">
                        <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
                    </svg>
                </div>
            </div>
        </div>
    );
};

const DailyMixSection = ({ mixes }) => {
    return (
        <div className="mt-8">
            <h2 className="text-xl font-bold text-white mb-4 tracking-tight">Made for You</h2>
            <div className="flex gap-4 overflow-x-auto pb-4 no-scrollbar px-1">
                {mixes.map((mix) => (
                    <DailyMixCard key={mix.id} mix={mix} />
                ))}
            </div>
        </div>
    );
};

export default DailyMixSection;
