import 'package:flutter/material.dart';
import '../sidebar/sidebar.dart';
import '../screens/home_screen.dart';
import '../player/bottom_player.dart';
import 'artist_info_panel.dart';

class DesktopLayout extends StatelessWidget {
  const DesktopLayout({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: const Color(0xFF121212),
      body: Column(
        children: [
          Expanded(
            child: Row(
              children: [
                const Sidebar(),

                /// MAIN CONTENT
                const Expanded(
                  child: HomeScreen(),
                ),

                /// RIGHT INFO PANEL (⚠️ NOT const)
                SizedBox(
                  width: 320,
                  child: ArtistInfoPanel(),
                ),
              ],
            ),
          ),

          /// BOTTOM PLAYER
          const BottomPlayer(),
        ],
      ),
    );
  }
}
