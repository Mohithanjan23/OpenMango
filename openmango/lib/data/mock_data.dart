/// This file is ONLY for UI development & fallback
/// It mirrors Spotify Web API response structure
/// Safe to remove once live API is fully wired
library;

class MockTrack {
  final String id;
  final String name;
  final String artist;
  final String imageUrl;
  final String spotifyUri;

  MockTrack({
    required this.id,
    required this.name,
    required this.artist,
    required this.imageUrl,
    required this.spotifyUri,
  });
}

class MockPlaylist {
  final String id;
  final String name;
  final String imageUrl;

  MockPlaylist({required this.id, required this.name, required this.imageUrl});
}

/// ------------------------------
/// MOCK TRACKS (Recently Played)
/// ------------------------------
final List<MockTrack> mockRecentlyPlayed = [
  MockTrack(
    id: '1',
    name: 'Before You Go',
    artist: 'Lewis Capaldi',
    imageUrl:
        'https://i.scdn.co/image/ab67616d00001e02d9a03e2d63f1a5bba9c6b08c',
    spotifyUri: 'spotify:track:2gMXnyrvIjhVBUZwvLZDMP',
  ),
  MockTrack(
    id: '2',
    name: 'Someone You Loved',
    artist: 'Lewis Capaldi',
    imageUrl:
        'https://i.scdn.co/image/ab67616d00001e02d9a03e2d63f1a5bba9c6b08c',
    spotifyUri: 'spotify:track:7qEHsqek33rTcFNT9PFqLf',
  ),
  MockTrack(
    id: '3',
    name: 'Blinding Lights',
    artist: 'The Weeknd',
    imageUrl:
        'https://i.scdn.co/image/ab67616d00001e02fbbd3b9c2b8d0c2c8f6e99c1',
    spotifyUri: 'spotify:track:0VjIjW4GlUZAMYd2vXMi3b',
  ),
];

/// ------------------------------
/// MOCK PLAYLISTS (Home Grid)
/// ------------------------------
final List<MockPlaylist> mockPlaylists = [
  MockPlaylist(
    id: 'p1',
    name: 'Liked Songs',
    imageUrl: 'https://misc.scdn.co/liked-songs/liked-songs-640.png',
  ),
  MockPlaylist(
    id: 'p2',
    name: 'Moody Mix',
    imageUrl: 'https://images.unsplash.com/photo-1506157786151-b8491531f063',
  ),
  MockPlaylist(
    id: 'p3',
    name: 'Daily Mix 1',
    imageUrl: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4',
  ),
  MockPlaylist(
    id: 'p4',
    name: 'Pop Mix',
    imageUrl: 'https://images.unsplash.com/photo-1514525253440-b393332569ce',
  ),
];
