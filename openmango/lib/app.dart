import 'package:flutter/material.dart';
import 'layout/responsive_layout.dart';
import 'widgets/mini_player.dart';
import 'screens/now_playing_screen.dart';

class AppShell extends StatelessWidget {
  const AppShell({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: const Color(0xFF121212),
      body: Stack(
        children: [
          const ResponsiveLayout(),

          /// Mini Player with tap action
          MiniPlayer(
            onTap: () {
              Navigator.push(
                context,
                MaterialPageRoute(
                  builder: (_) => const NowPlayingScreen(),
                ),
              );
            },
          ),
        ],
      ),
    );
  }
}
