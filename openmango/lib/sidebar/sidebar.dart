import 'package:flutter/material.dart';

class Sidebar extends StatelessWidget {
  const Sidebar({super.key});

  @override
  Widget build(BuildContext context) {
    return Container(
      width: 240,
      color: const Color(0xFF000000),
      padding: const EdgeInsets.all(16),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: const [
          SidebarItem(icon: Icons.home, label: "Home"),
          SidebarItem(icon: Icons.search, label: "Search"),
          SidebarItem(icon: Icons.library_music, label: "Your Library"),
          Divider(color: Colors.white12),
          SidebarItem(icon: Icons.favorite, label: "Liked Songs"),
          SidebarItem(icon: Icons.album, label: "Moody Mix"),
        ],
      ),
    );
  }
}

class SidebarItem extends StatelessWidget {
  final IconData icon;
  final String label;

  const SidebarItem({super.key, required this.icon, required this.label});

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.symmetric(vertical: 10),
      child: Row(
        children: [
          Icon(icon, color: Colors.white70),
          const SizedBox(width: 12),
          Text(label, style: const TextStyle(color: Colors.white70)),
        ],
      ),
    );
  }
}
