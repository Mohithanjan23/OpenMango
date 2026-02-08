import 'dart:convert';
import 'dart:math';
import 'package:crypto/crypto.dart';
import 'package:flutter_web_auth_2/flutter_web_auth_2.dart';
import 'package:http/http.dart' as http;

class SpotifyAuthService {
  static const String clientId = 'c7f11a249a464032b6abb4ad74a3c82d';
  static const String redirectUriWeb = 'http://localhost:5173/callback';
  static const String redirectUriApp = 'com.openmango.app://callback';

  static const List<String> scopes = [
    'user-read-recently-played',
    'user-top-read',
    'playlist-read-private',
    'user-library-read',
    'user-read-playback-state',
    'user-modify-playback-state',
  ];

  static String _generateCodeVerifier() {
    const chars =
        'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-._~';
    final rand = Random.secure();
    return List.generate(128, (_) => chars[rand.nextInt(chars.length)]).join();
  }

  static String _generateCodeChallenge(String verifier) {
    final bytes = utf8.encode(verifier);
    final digest = sha256.convert(bytes);
    return base64UrlEncode(digest.bytes).replaceAll('=', '');
  }

  static Future<String?> authenticate({required bool isWeb}) async {
    final codeVerifier = _generateCodeVerifier();
    final codeChallenge = _generateCodeChallenge(codeVerifier);

    final authUrl = Uri.https('accounts.spotify.com', '/authorize', {
      'client_id': clientId,
      'response_type': 'code',
      'redirect_uri': isWeb ? redirectUriWeb : redirectUriApp,
      'code_challenge_method': 'S256',
      'code_challenge': codeChallenge,
      'scope': scopes.join(' '),
    });

    final result = await FlutterWebAuth2.authenticate(
      url: authUrl.toString(),
      callbackUrlScheme: isWeb ? 'http' : 'com.openmango.app',
    );

    final code = Uri.parse(result).queryParameters['code'];
    if (code == null) return null;

    final tokenRes = await http.post(
      Uri.https('accounts.spotify.com', '/api/token'),
      headers: {'Content-Type': 'application/x-www-form-urlencoded'},
      body: {
        'client_id': clientId,
        'grant_type': 'authorization_code',
        'code': code,
        'redirect_uri': isWeb ? redirectUriWeb : redirectUriApp,
        'code_verifier': codeVerifier,
      },
    );

    final json = jsonDecode(tokenRes.body);
    return json['access_token'];
  }
}
