# OpenMango Mobile

OpenMango Mobile is a Flutter implementation of the music player client, designed to integrate with Spotify and the OpenMango backend.

## Features

- **Spotify Integration**: Authenticate with Spotify to access your library and playlists.
- **Lyrics View**: Real-time synchronized lyrics display.
- **Artist Info**: Detailed artist biographies and stats.
- **Playback Control**: Seamless music playback control via Spotify SDK.
- **Cross-Platform**: Built with Flutter for iOS and Android.

## Getting Started

### Prerequisites

- [Flutter SDK](https://flutter.dev/docs/get-started/install) (version >3.9.0)
- Android Studio or VS Code with Flutter extensions.
- A Spotify Developer account (for API keys).

### Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/yourusername/openmango.git
    cd openmango/openmango
    ```

2.  **Install dependencies:**
    ```bash
    flutter pub get
    ```

3.  **Android Configuration:**
    Create a `key.properties` file in `android/` with your signing configuration (required for release builds):
    ```properties
    storePassword=<your-store-password>
    keyPassword=<your-key-password>
    keyAlias=<your-key-alias>
    storeFile=<path-to-your-keystore-file>
    ```

### Running the App

Connect a device or start an emulator, then run:

```bash
flutter run
```

## Project Structure

- `lib/screens/`: UI screens (Login, Lyrics, Splash, etc.)
- `lib/layout/`: Reusable layout components (Artist Info Panel).
- `lib/services/`: Backend and API services (Spotify Auth).
- `lib/data/`: Mock data and models.

## Dependencies

- `spotify_sdk`: For Spotify interaction.
- `flutter_web_auth_2`: for OAuth authentication.
- `http`: For API requests.
- `url_launcher`: For opening external links.

## License

This project is licensed under the MIT License - see the LICENSE file for details.
