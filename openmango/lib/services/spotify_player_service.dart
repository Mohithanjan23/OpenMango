import 'package:flutter/foundation.dart';

/// Spotify playback works ONLY on Android / iOS
class SpotifyPlayerService {
  Future<void> connect() async {
    if (kIsWeb) return;
  }

  Future<void> play() async {
    if (kIsWeb) return;
  }

  Future<void> pause() async {
    if (kIsWeb) return;
  }

  Future<void> skipNext() async {
    if (kIsWeb) return;
  }

  Future<void> skipPrevious() async {
    if (kIsWeb) return;
  }
}
