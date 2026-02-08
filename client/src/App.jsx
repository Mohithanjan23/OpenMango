import { useState, useEffect } from 'react';
import HeroCard from './components/HeroCard';
import DailyMixSection from './components/DailyMix';
import HeavyRotation from './components/HeavyRotation';
import TabBar from './components/TabBar';
import MiniPlayer from './components/MiniPlayer';
import FullScreenPlayer from './components/FullScreenPlayer';
import { AnimatePresence } from 'framer-motion';

function App() {
  const [songs, setSongs] = useState([]);
  const [dailyMixes, setDailyMixes] = useState([]);
  const [currentSong, setCurrentSong] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showFullScreen, setShowFullScreen] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    // Fetch Data
    const fetchData = async () => {
      try {
        const [songsRes, mixesRes] = await Promise.all([
          fetch('http://localhost:3001/api/songs'),
          fetch('http://localhost:3001/api/daily-mixes')
        ]);

        const songsData = await songsRes.json();
        const mixesData = await mixesRes.json();

        setSongs(songsData);
        setDailyMixes(mixesData);
      } catch (error) {
        console.error("Failed to fetch data:", error);
      }
    };

    fetchData();
  }, []);

  // Simulator for playback
  useEffect(() => {
    let interval;
    if (isPlaying && currentSong) {
      interval = setInterval(() => {
        setCurrentTime((prev) => {
          if (prev >= currentSong.duration) {
            setIsPlaying(false);
            return 0;
          }
          return prev + 1;
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isPlaying, currentSong]);

  const handleSongSelect = (song) => {
    setCurrentSong(song);
    setIsPlaying(true);
    setCurrentTime(0);
    setDuration(song.duration);
    // Optional: setShowFullScreen(true);
  };

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="bg-black min-h-screen text-white pb-32 font-sans relative overflow-x-hidden">
      {/* Scrollable Content */}
      <div className="px-6 pt-8 pb-32">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold tracking-tight">Listen Now</h1>
          <div className="w-10 h-10 rounded-full bg-zinc-800 overflow-hidden border border-white/10">
            <img src="https://ui-avatars.com/api/?name=User&background=random" alt="Profile" />
          </div>
        </div>

        {/* Hero Card (New Release) */}
        {songs.length > 0 && <HeroCard song={songs[0]} />}

        {/* Daily Mixes */}
        <DailyMixSection mixes={dailyMixes} />

        {/* Heavy Rotation */}
        <HeavyRotation songs={songs} onSongSelect={handleSongSelect} />

        {/* More Content Space */}
        <div className="h-20" />
      </div>

      {/* Tab Bar */}
      <TabBar />

      {/* Players */}
      <AnimatePresence>
        {currentSong && !showFullScreen && (
          <MiniPlayer
            song={currentSong}
            isPlaying={isPlaying}
            onPlayPause={handlePlayPause}
            onExpand={() => setShowFullScreen(true)}
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showFullScreen && currentSong && (
          <FullScreenPlayer
            song={currentSong}
            isPlaying={isPlaying}
            currentTime={currentTime}
            duration={duration} // Mock duration
            onPlayPause={handlePlayPause}
            onClose={() => setShowFullScreen(false)}
            onSeek={setCurrentTime}
          />
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
