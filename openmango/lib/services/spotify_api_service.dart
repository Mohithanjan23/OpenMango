import 'dart:convert';
import 'package:http/http.dart' as http;

class SpotifyApiService {
  final String accessToken;

  SpotifyApiService(this.accessToken);

  Map<String, String> get _headers => {
        'Authorization': 'Bearer $accessToken',
      };

  Future<List<dynamic>> getRecentlyPlayed() async {
    final res = await http.get(
      Uri.parse('https://api.spotify.com/v1/me/player/recently-played?limit=6'),
      headers: _headers,
    );

    final json = jsonDecode(res.body);
    return json['items'];
  }

  Future<List<dynamic>> getUserPlaylists() async {
    final res = await http.get(
      Uri.parse('https://api.spotify.com/v1/me/playlists?limit=6'),
      headers: _headers,
    );

    final json = jsonDecode(res.body);
    return json['items'];
  }
}
