import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { useMarketXTheme } from '../../src/theme/ThemeProvider';

export default function TabsLayout() {
  const { colors } = useMarketXTheme();
  return <Tabs screenOptions={{
    headerShown: false,
    tabBarActiveTintColor: colors.accent,
    tabBarInactiveTintColor: colors.muted,
    tabBarStyle: { backgroundColor: colors.card, borderTopColor: colors.border, height: 62, paddingTop: 7, paddingBottom: 7 },
    tabBarLabelStyle: { fontSize: 11, fontWeight: '600' }
  }}>
    <Tabs.Screen name="index" options={{ title: 'Home', tabBarIcon: ({color,size}) => <Ionicons name="home-outline" color={color} size={size}/> }} />
    <Tabs.Screen name="crypto" options={{ title: 'Crypto', tabBarIcon: ({color,size}) => <Ionicons name="logo-bitcoin" color={color} size={size}/> }} />
    <Tabs.Screen name="stocks" options={{ title: 'Stocks', tabBarIcon: ({color,size}) => <Ionicons name="bar-chart-outline" color={color} size={size}/> }} />
    <Tabs.Screen name="favorites" options={{ title: 'Favorites', tabBarIcon: ({color,size}) => <Ionicons name="star-outline" color={color} size={size}/> }} />
    <Tabs.Screen name="profile" options={{ title: 'Profile', tabBarIcon: ({color,size}) => <Ionicons name="person-outline" color={color} size={size}/> }} />
  </Tabs>;
}
