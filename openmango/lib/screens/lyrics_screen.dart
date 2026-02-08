import 'package:flutter/material.dart';

class LyricsScreen extends StatelessWidget {
  const LyricsScreen({super.key});

  @override
  Widget build(BuildContext context) {
    final lyrics = [
      "You're going under and this time I fear there's no one to save me",
      "This all or nothing really got a way of driving me crazy",
      "I need somebody to heal",
      "Somebody to know",
      "Somebody to have",
      "Somebody",
    ];
    return Scaffold(
      appBar: AppBar(title: const Text('Lyrics')),
      body: ListView.builder(
        itemCount: lyrics.length,
        itemBuilder: (context, index) => ListTile(title: Text(lyrics[index])),
      ),
    );
  }
}
