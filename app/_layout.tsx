import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { ThemeProvider, useMarketXTheme } from '../src/theme/ThemeProvider';

function RootStack() {
  const { dark } = useMarketXTheme();
  return <>
    <StatusBar style={dark ? 'light' : 'dark'} />
    <Stack screenOptions={{ headerShown: false }} />
  </>;
}

export default function Layout() {
  return <ThemeProvider><RootStack /></ThemeProvider>;
}
