class Track {
  final String id;
  final String name;
  final String artist;
  final String image;

  Track({
    required this.id,
    required this.name,
    required this.artist,
    required this.image,
  });

  factory Track.fromSpotify(dynamic json) {
    return Track(
      id: json['track']['id'],
      name: json['track']['name'],
      artist: json['track']['artists'][0]['name'],
      image: json['track']['album']['images'][0]['url'],
    );
  }
}
