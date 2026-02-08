class PlayerViewState {
  final String trackName;
  final String artistName;
  final String image;
  final bool isPaused;
  final String spotifyUri;

  PlayerViewState({
    required this.trackName,
    required this.artistName,
    required this.image,
    required this.isPaused,
    required this.spotifyUri,
  });
}
