import 'package:flutter/foundation.dart';
import 'package:flutter/material.dart';

import '../data/mock_data.dart';
import '../services/spotify_player_service.dart';

class BottomPlayer extends StatefulWidget {
  const BottomPlayer({super.key});

  @override
  State<BottomPlayer> createState() => _BottomPlayerState();
}

class _BottomPlayerState extends State<BottomPlayer> {
  final SpotifyPlayerService _playerService = SpotifyPlayerService();
  bool isPlaying = false;

  @override
  void initState() {
    super.initState();
    if (!kIsWeb) {
      _playerService.connect();
    }
  }

  @override
  Widget build(BuildContext context) {
    final track =
        mockRecentlyPlayed.isNotEmpty ? mockRecentlyPlayed.first : null;

    if (track == null) return _emptyBar();

    return Container(
      height: 90,
      padding: const EdgeInsets.symmetric(horizontal: 16),
      decoration: const BoxDecoration(
        color: Color(0xFF181818),
        border: Border(top: BorderSide(color: Colors.white12)),
      ),
      child: Row(
        children: [
          /// Track info
          Row(
            children: [
              ClipRRect(
                borderRadius: BorderRadius.circular(4),
                child: Image.network(
                  track.imageUrl,
                  width: 56,
                  height: 56,
                  fit: BoxFit.cover,
                ),
              ),
              const SizedBox(width: 12),
              Column(
                mainAxisAlignment: MainAxisAlignment.center,
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Text(
                    track.name,
                    style: const TextStyle(
                      color: Colors.white,
                      fontWeight: FontWeight.w600,
                    ),
                  ),
                  Text(
                    track.artist,
                    style: const TextStyle(color: Colors.white54),
                  ),
                ],
              ),
            ],
          ),

          const Spacer(),

          /// Controls
          Row(
            children: [
              IconButton(
                icon: const Icon(Icons.skip_previous),
                color: Colors.white,
                onPressed: () {
                  if (!kIsWeb) _playerService.skipPrevious();
                },
              ),
              IconButton(
                icon: Icon(
                  isPlaying
                      ? Icons.pause_circle_filled
                      : Icons.play_circle_fill,
                  size: 42,
                ),
                color: Colors.white,
                onPressed: () {
                  setState(() => isPlaying = !isPlaying);
                  if (!kIsWeb) {
                    isPlaying
                        ? _playerService.play()
                        : _playerService.pause();
                  }
                },
              ),
              IconButton(
                icon: const Icon(Icons.skip_next),
                color: Colors.white,
                onPressed: () {
                  if (!kIsWeb) _playerService.skipNext();
                },
              ),
            ],
          ),

          const Spacer(),

          const Icon(Icons.volume_up, color: Colors.white),
        ],
      ),
    );
  }

  Widget _emptyBar() {
    return Container(
      height: 90,
      color: const Color(0xFF181818),
    );
  }
}
