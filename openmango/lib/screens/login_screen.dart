import 'package:flutter/material.dart';
import '../services/spotify_auth_service.dart';
import '../services/session.dart';

class LoginScreen extends StatelessWidget {
  const LoginScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: const Color(0xFF121212),
      body: Center(
        child: ElevatedButton(
          style: ElevatedButton.styleFrom(
            backgroundColor: const Color(0xFF1DB954),
            padding: const EdgeInsets.symmetric(horizontal: 32, vertical: 14),
          ),
          onPressed: () async {
            final token = await SpotifyAuthService.authenticate(
              isWeb: identical(0, 0.0),
            );

            if (token != null && context.mounted) {
              Session.accessToken = token;
              Navigator.pushReplacementNamed(context, '/app');
            }
          },
          child: const Text(
            'Continue with Spotify',
            style: TextStyle(color: Colors.black, fontSize: 16),
          ),
        ),
      ),
    );
  }
}
