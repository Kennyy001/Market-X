import React from 'react';
import { View, Text, Image } from 'react-native';
import { InfoPage } from '../src/components/InfoPage';
import { useMarketXTheme } from '../src/theme/ThemeProvider';

export default function DeveloperProfile() {
  const { colors } = useMarketXTheme();
  return <InfoPage title="Developer Profile" subtitle="The person behind MarketX">
    <View style={{ alignItems: 'center', paddingVertical: 12 }}>
      <Image source={require('../assets/samrat-profile.png')} style={{ width: 150, height: 150, borderRadius: 75, borderWidth: 3, borderColor: colors.accent }} />
      <Text style={{ color: colors.text, fontSize: 25, fontWeight: '900', marginTop: 16 }}>Samrat Mahapatra</Text>
      <Text style={{ color: colors.accent, fontSize: 12, fontWeight: '800', marginTop: 6 }}>FOUNDER & DEVELOPER OF MARKETX</Text>
    </View>
    <Text style={{ color: colors.text, fontSize: 18, fontWeight: '800', marginTop: 12, marginBottom: 8 }}>About the Developer</Text>
    <Text style={{ color: colors.muted, fontSize: 14, lineHeight: 23 }}>MarketX is a project created by Samrat Mahapatra with the aim of making cryptocurrency and stock-market information easier to explore through a clear, approachable mobile experience.</Text>
    <Text style={{ color: colors.text, fontSize: 18, fontWeight: '800', marginTop: 20, marginBottom: 8 }}>A note from the developer</Text>
    <Text style={{ color: colors.muted, fontSize: 14, lineHeight: 23 }}>Thank you for using MarketX. The goal is to keep improving the experience, making market information easier to follow while giving users useful tools to explore assets and trends.</Text>
  </InfoPage>;
}
