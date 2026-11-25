import React from 'react';
import { Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { InfoPage } from '../src/components/InfoPage';
import { useMarketXTheme } from '../src/theme/ThemeProvider';

const items = [
  ['person-outline', 'Name-only guest profile', 'Create a local guest profile using your name and receive greetings based on your device time.'],
  ['logo-bitcoin', 'Cryptocurrency markets', 'Explore a global cryptocurrency list with prices and market movements once a live data provider is connected.'],
  ['bar-chart-outline', 'US and Indian stocks', 'Switch between US and Indian stock-market listings.'],
  ['star-outline', 'Favorites and watchlists', 'Save assets to a personal favorites list.'],
  ['analytics-outline', 'Charts and analytics', 'Review multiple historical timeframes and technical indicators as data integrations are completed.'],
  ['color-palette-outline', 'Dark and light themes', 'Choose the appearance that is comfortable for you.'],
  ['phone-portrait-outline', 'Cross-platform mobile app', 'One React Native and Expo codebase targets Android and iOS.']
] as const;

export default function Features() {
  const { colors } = useMarketXTheme();
  return <InfoPage title="Features & Technologies" subtitle="A guide to the MarketX app and its planned technology stack">
    {items.map(([icon, title, description]) => <View key={title} style={{ flexDirection: 'row', marginBottom: 18 }}>
      <Ionicons name={icon as any} size={21} color={colors.accent} style={{ marginRight: 12, marginTop: 2 }} />
      <View style={{ flex: 1 }}>
        <Text style={{ color: colors.text, fontWeight: '800', fontSize: 15 }}>{title}</Text>
        <Text style={{ color: colors.muted, fontSize: 13, lineHeight: 20, marginTop: 4 }}>{description}</Text>
      </View>
    </View>)}
    <Text style={{ color: colors.text, fontSize: 16, fontWeight: '800', marginTop: 8 }}>Technology</Text>
    <Text style={{ color: colors.muted, fontSize: 13, lineHeight: 21, marginTop: 6 }}>React Native · Expo · TypeScript · Node.js backend (planned) · PostgreSQL/Supabase (planned) · Market-data APIs · Charting tools</Text>
    <Text style={{ color: colors.muted, fontSize: 11, lineHeight: 18, marginTop: 16 }}>Some items are part of the starter prototype; live market feeds, full analytics, and backend services still require implementation and provider configuration.</Text>
  </InfoPage>;
}
