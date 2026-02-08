import 'package:flutter/material.dart';
import '../data/mock_data.dart';

class HomeScreen extends StatelessWidget {
  const HomeScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return Container(
      padding: const EdgeInsets.all(24),
      decoration: const BoxDecoration(
        gradient: LinearGradient(
          colors: [Color(0xFF3A1C71), Color(0xFF121212)],
          begin: Alignment.topCenter,
          end: Alignment.bottomCenter,
        ),
      ),
      child: ListView(
        children: [
          const Text(
            'Good evening',
            style: TextStyle(
              fontSize: 32,
              fontWeight: FontWeight.bold,
              color: Colors.white,
            ),
          ),
          const SizedBox(height: 24),

          /// PLAYLIST GRID
          GridView.builder(
            shrinkWrap: true,
            physics: const NeverScrollableScrollPhysics(),
            itemCount: mockPlaylists.length,
            gridDelegate: const SliverGridDelegateWithFixedCrossAxisCount(
              crossAxisCount: 3,
              childAspectRatio: 3.5,
              crossAxisSpacing: 12,
              mainAxisSpacing: 12,
            ),
            itemBuilder: (_, i) {
              final playlist = mockPlaylists[i];
              return Container(
                padding: const EdgeInsets.all(12),
                decoration: BoxDecoration(
                  color: const Color(0xFF181818),
                  borderRadius: BorderRadius.circular(8),
                ),
                child: Row(
                  children: [
                    Image.network(
                      playlist.imageUrl,
                      width: 48,
                      height: 48,
                      fit: BoxFit.cover,
                    ),
                    const SizedBox(width: 12),
                    Expanded(
                      child: Text(
                        playlist.name,
                        style: const TextStyle(color: Colors.white),
                        overflow: TextOverflow.ellipsis,
                      ),
                    ),
                  ],
                ),
              );
            },
          ),

          const SizedBox(height: 32),
          const Text(
            'Recently Played',
            style: TextStyle(color: Colors.white, fontSize: 22),
          ),
          const SizedBox(height: 16),

          /// RECENT TRACKS
          ...mockRecentlyPlayed.map(
            (track) => ListTile(
              leading: Image.network(track.imageUrl, width: 48),
              title: Text(track.name, style: const TextStyle(color: Colors.white)),
              subtitle:
                  Text(track.artist, style: const TextStyle(color: Colors.white54)),
            ),
          ),
        ],
      ),
    );
  }
}
