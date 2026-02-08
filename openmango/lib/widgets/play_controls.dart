import 'package:flutter/material.dart';

class PlayControls extends StatelessWidget {
  const PlayControls({super.key});

  @override
  Widget build(BuildContext context) {
    return Row(
      mainAxisAlignment: MainAxisAlignment.center,
      children: const [
        Icon(Icons.skip_previous, size: 40),
        SizedBox(width: 20),
        Icon(Icons.play_circle_fill, size: 64),
        SizedBox(width: 20),
        Icon(Icons.skip_next, size: 40),
      ],
    );
  }
}
