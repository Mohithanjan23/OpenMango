import 'package:flutter/material.dart';
import 'package:flutter_test/flutter_test.dart';

import 'package:openmango/main.dart';

void main() {
  testWidgets('App launches and shows SplashScreen', (WidgetTester tester) async {
    // Build the app
    await tester.pumpWidget(const OpenMango());

    // Initial frame
    await tester.pump();

    // Verify SplashScreen text
    expect(find.text('OpenMango'), findsOneWidget);

    // Let splash timer finish
    await tester.pump(const Duration(seconds: 2));

    // Login screen should appear
    expect(find.text('Continue with Spotify'), findsOneWidget);
  });

  testWidgets('Login button exists', (WidgetTester tester) async {
    await tester.pumpWidget(const OpenMango());
    await tester.pump(const Duration(seconds: 2));

    expect(
      find.widgetWithText(ElevatedButton, 'Continue with Spotify'),
      findsOneWidget,
    );
  });
}
