import 'package:flutter/material.dart';
import 'screens/splash_screen.dart';
import 'app.dart';

void main() {
  WidgetsFlutterBinding.ensureInitialized();
  runApp(const OpenMango());
}

class OpenMango extends StatelessWidget {
  const OpenMango({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      initialRoute: '/',
      routes: {
        '/': (_) => const SplashScreen(),
        '/app': (_) => const AppShell(),
      },
    );
  }
}
