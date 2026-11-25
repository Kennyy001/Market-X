import React from 'react';
import { Text } from 'react-native';
import { InfoPage } from '../src/components/InfoPage';
import { useMarketXTheme } from '../src/theme/ThemeProvider';

export default function AboutMarketX() {
  const { colors } = useMarketXTheme();
  return <InfoPage title="About MarketX" subtitle="Explore Markets. Understand Trends. Stay Informed.">
    <Text style={{ color: colors.text, fontSize: 20, fontWeight: '900', marginBottom: 10 }}>What is MarketX?</Text>
    <Text style={{ color: colors.muted, fontSize: 14, lineHeight: 23 }}>MarketX is a mobile market information and analytics application designed to bring cryptocurrency, US stocks, and Indian stocks into one convenient place.</Text>
    <Text style={{ color: colors.text, fontSize: 17, fontWeight: '800', marginTop: 20, marginBottom: 8 }}>Our vision</Text>
    <Text style={{ color: colors.muted, fontSize: 14, lineHeight: 23 }}>Make market information easier to discover and understand. Users can explore assets, review price movements, and organize a personal watchlist.</Text>
    <Text style={{ color: colors.text, fontSize: 17, fontWeight: '800', marginTop: 20, marginBottom: 8 }}>Built for mobile</Text>
    <Text style={{ color: colors.muted, fontSize: 14, lineHeight: 23 }}>MarketX is planned for Android and iOS, with dark and light themes and a simple navigation experience.</Text>
  </InfoPage>;
}
