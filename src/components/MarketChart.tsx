import React from 'react';
import { View, Text } from 'react-native';
import Svg, { Polyline, Line } from 'react-native-svg';
import { useMarketXTheme } from '../theme/ThemeProvider';

export function MarketChart({period='1D'}:{period?:string}) {
 const {colors}=useMarketXTheme();
 // Decorative sample path: replace with real timestamped OHLC/history data from the backend.
 const pts='0,92 18,83 36,88 54,60 72,67 90,48 108,58 126,34 144,44 162,20 180,31 198,15 216,27 234,8';
 return <View>
  <Svg width="100%" height="112" viewBox="0 0 234 112">
   {[25,55,85].map(y=><Line key={y} x1="0" y1={y} x2="234" y2={y} stroke={colors.border} strokeDasharray="3 4"/>)}
   <Polyline points={pts} fill="none" stroke={colors.accent} strokeWidth="2.5" strokeLinejoin="round" strokeLinecap="round"/>
  </Svg>
  <Text style={{color:colors.muted,fontSize:10}}>Illustrative chart · {period} · Not live market history</Text>
 </View>;
}
