import 'package:flutter/material.dart';

class AlbumArt extends StatelessWidget {
  final String image;
  const AlbumArt({super.key, required this.image});

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.all(32),
      child: ClipRRect(
        borderRadius: BorderRadius.circular(20),
        child: Image.network(image, width: 280, height: 280),
      ),
    );
  }
}
