# MarketX — SDK 58 project

This archive contains the MarketX React Native / Expo source project, including the app branding and profile information pages.

## Environment
- Expo SDK: 58
- React Native: 0.88.0
- React: 19.3.0
- `react-native-svg`: 15.16.0
- `buffer`: 6.x

## Build preparation (Windows PowerShell)

From this folder, install dependencies:

```powershell
npm install
npx expo install --fix
npx expo-doctor
```

To create an Android APK for direct installation, configure EAS Build and use an APK preview profile. An APK must be produced by an Android build environment; this ZIP itself is source code, not an installable app.

## Current product scope
- Name-only guest profile prototype
- Crypto and US/India stock screens using demo market data
- Favorites/watchlist UI
- Illustrative chart component
- Dark/light theme
- Developer Profile, About, Features & Technologies, Privacy & Disclaimer pages
- App icon and splash branding assets

## Not yet production-complete
Live market data, robust historical chart feeds, advanced analytics backed by real data, backend persistence, and final store-ready privacy/legal review still need implementation. The app does not execute trades.
