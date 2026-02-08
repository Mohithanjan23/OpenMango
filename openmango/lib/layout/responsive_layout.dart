import 'package:flutter/material.dart';
import 'desktop_layout.dart';

class ResponsiveLayout extends StatelessWidget {
  const ResponsiveLayout({super.key});

  @override
  Widget build(BuildContext context) {
    return LayoutBuilder(
      builder: (context, constraints) {
        if (constraints.maxWidth >= 1000) {
          return const DesktopLayout();
        }

        return const Scaffold(
          backgroundColor: Color(0xFF121212),
          body: Center(
            child: Text(
              'Mobile layout coming soon',
              style: TextStyle(color: Colors.white),
            ),
          ),
        );
      },
    );
  }
}
