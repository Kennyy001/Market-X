import React from 'react';
import { ScrollView, View, StyleSheet } from 'react-native';
import { useMarketXTheme } from '../theme/ThemeProvider';
export function Screen({children}:{children:React.ReactNode}) {
 const {colors}=useMarketXTheme();
 return <ScrollView style={{flex:1,backgroundColor:colors.bg}} contentContainerStyle={s.content}><View>{children}</View></ScrollView>;
}
const s=StyleSheet.create({content:{padding:18,paddingTop:58,paddingBottom:30}});
