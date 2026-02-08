import 'package:flutter/material.dart';

class NowPlayingBar extends StatelessWidget {
  final String title;
  final String artist;
  final String imageUrl;

  const NowPlayingBar({
    super.key,
    required this.title,
    required this.artist,
    required this.imageUrl,
  });

  @override
  Widget build(BuildContext context) {
    return Column(
      children: [
        Image.network(imageUrl, height: 300, fit: BoxFit.cover),
        const SizedBox(height: 24),
        Text(
          title,
          style: const TextStyle(
            fontSize: 24,
            color: Colors.white,
            fontWeight: FontWeight.bold,
          ),
        ),
        Text(
          artist,
          style: const TextStyle(color: Colors.white54),
        ),
      ],
    );
  }
}
