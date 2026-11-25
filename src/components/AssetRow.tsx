import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import { Asset } from '../data/demoMarkets';
import { useMarketXTheme } from '../theme/ThemeProvider';

export function AssetRow({asset, starred, onStar, onPress}:{asset:Asset;starred:boolean;onStar:()=>void;onPress?:()=>void}) {
 const {colors}=useMarketXTheme(); const positive=asset.change>=0;
 return <Pressable onPress={onPress} style={[s.row,{borderBottomColor:colors.border}]}>
  <View style={[s.coin,{backgroundColor:colors.bg}]}><Text style={{color:colors.accent,fontWeight:'800'}}>{asset.symbol.slice(0,1)}</Text></View>
  <View style={{flex:1}}><Text style={[s.name,{color:colors.text}]}>{asset.name}</Text><Text style={{color:colors.muted,fontSize:12}}>{asset.symbol}</Text></View>
  <View style={{alignItems:'flex-end',marginRight:12}}><Text style={{color:colors.text,fontWeight:'700'}}>{asset.currency==='INR'?'₹':'$'}{asset.price.toLocaleString('en-IN')}</Text><Text style={{color:positive?colors.green:colors.red,fontSize:12}}>{positive?'+':''}{asset.change.toFixed(2)}%</Text></View>
  <Pressable onPress={onStar} hitSlop={10}><Text style={{fontSize:21,color:starred?'#E9B949':colors.muted}}>{starred?'★':'☆'}</Text></Pressable>
 </Pressable>;
}
const s=StyleSheet.create({row:{flexDirection:'row',alignItems:'center',paddingVertical:14,borderBottomWidth:StyleSheet.hairlineWidth},coin:{width:38,height:38,borderRadius:19,alignItems:'center',justifyContent:'center',marginRight:11},name:{fontSize:14,fontWeight:'700'}});
