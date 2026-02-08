import 'package:flutter/material.dart';
import '../data/mock_data.dart';

class NowPlayingScreen extends StatelessWidget {
  const NowPlayingScreen({super.key});

  @override
  Widget build(BuildContext context) {
    final track = mockRecentlyPlayed.first;

    return Scaffold(
      backgroundColor: const Color(0xFF121212),
      appBar: AppBar(
        backgroundColor: Colors.transparent,
        elevation: 0,
        title: const Text('Now Playing'),
      ),
      body: Column(
        mainAxisAlignment: MainAxisAlignment.center,
        children: [
          Image.network(track.imageUrl, height: 300),
          const SizedBox(height: 24),
          Text(
            track.name,
            style: const TextStyle(
              fontSize: 24,
              color: Colors.white,
              fontWeight: FontWeight.bold,
            ),
          ),
          Text(
            track.artist,
            style: const TextStyle(color: Colors.white54),
          ),
          const SizedBox(height: 32),
          const Icon(Icons.play_circle_fill, size: 80, color: Colors.white),
        ],
      ),
    );
  }
}
