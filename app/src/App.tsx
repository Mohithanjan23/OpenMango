import { Routes, Route, Navigate } from 'react-router-dom'
import { Layout } from './components/Layout'
import Login from './pages/Login'
import { ProtectedRoute } from './components/ProtectedRoute'
import { AuthProvider } from './context/AuthContext'
import { PlayerProvider } from './context/PlayerContext'

import Home from './pages/Home'

import Library from './pages/Library'
import Upload from './pages/Upload'

// Placeholder pages
const Search = () => <div className="p-4 text-white">Search Content</div>

function App() {
  return (
    <AuthProvider>
      <PlayerProvider>
        <Routes>
          <Route path="/login" element={<Login />} />

          <Route element={<ProtectedRoute />}>
            <Route element={<Layout />}>
              <Route path="/" element={<Home />} />
              <Route path="/search" element={<Search />} />
              <Route path="/library" element={<Library />} />
              <Route path="/upload" element={<Upload />} />
            </Route>
          </Route>

          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </PlayerProvider>
    </AuthProvider>
  )
}

export default App
