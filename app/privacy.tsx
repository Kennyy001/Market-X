import React from 'react';
import { Text } from 'react-native';
import { InfoPage } from '../src/components/InfoPage';
import { useMarketXTheme } from '../src/theme/ThemeProvider';

export default function PrivacyDisclaimer() {
  const { colors } = useMarketXTheme();
  return <InfoPage title="Privacy & Disclaimer" subtitle="Important information about MarketX">
    <Text style={{ color: colors.text, fontSize: 18, fontWeight: '800', marginBottom: 8 }}>Privacy</Text>
    <Text style={{ color: colors.muted, fontSize: 14, lineHeight: 23 }}>The starter app stores the guest name and favorites locally on the device. It does not currently provide a cloud account or cross-device synchronization. Before public release, a complete privacy policy should identify every data item collected, its purpose, storage location, retention period, and any third-party provider sharing.</Text>
    <Text style={{ color: colors.text, fontSize: 18, fontWeight: '800', marginTop: 20, marginBottom: 8 }}>Market data disclaimer</Text>
    <Text style={{ color: colors.muted, fontSize: 14, lineHeight: 23 }}>Market prices and other financial information are provided for informational and educational purposes only. Data may be delayed, incomplete, or inaccurate depending on the provider. Verify information independently before making financial decisions.</Text>
    <Text style={{ color: colors.text, fontSize: 18, fontWeight: '800', marginTop: 20, marginBottom: 8 }}>No trading or investment advice</Text>
    <Text style={{ color: colors.muted, fontSize: 14, lineHeight: 23 }}>MarketX is a market information and analytics application. It does not execute trades, hold customer funds, or provide personalized investment advice. Nothing in the app guarantees results or returns.</Text>
  </InfoPage>;
}
