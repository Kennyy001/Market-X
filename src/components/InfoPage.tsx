import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import { Stack } from 'expo-router';
import { useMarketXTheme } from '../theme/ThemeProvider';

export function InfoPage({ title, subtitle, children }: { title: string; subtitle?: string; children: React.ReactNode }) {
  const { colors } = useMarketXTheme();
  return <>
    <Stack.Screen options={{ title, headerShown: true, headerStyle: { backgroundColor: colors.bg }, headerTintColor: colors.text }} />
    <ScrollView style={{ flex: 1, backgroundColor: colors.bg }} contentContainerStyle={{ padding: 20, paddingBottom: 40 }}>
      {subtitle ? <Text style={{ color: colors.muted, fontSize: 13, marginBottom: 16 }}>{subtitle}</Text> : null}
      <View style={{ backgroundColor: colors.card, borderColor: colors.border, borderWidth: 1, borderRadius: 18, padding: 18 }}>
        {children}
      </View>
    </ScrollView>
  </>;
}
