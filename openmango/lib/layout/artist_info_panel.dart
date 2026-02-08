import 'package:flutter/material.dart';

class ArtistInfoPanel extends StatelessWidget {
  const ArtistInfoPanel({super.key});

  @override
  Widget build(BuildContext context) {
    return Container(
      color: const Color(0xFF0F0F0F),
      padding: const EdgeInsets.all(16),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Container(
            height: 200,
            decoration: BoxDecoration(
              color: Colors.grey[800],
              borderRadius: BorderRadius.circular(8),
            ),
          ),
          const SizedBox(height: 16),
          const Text(
            'Artist Name',
            style: TextStyle(
              color: Colors.white,
              fontSize: 20,
              fontWeight: FontWeight.bold,
            ),
          ),
          const SizedBox(height: 8),
          const Text(
            'Monthly listeners',
            style: TextStyle(color: Colors.white54),
          ),
          const SizedBox(height: 16),
          const Text('About the artist', style: TextStyle(color: Colors.white)),
        ],
      ),
    );
  }
}
