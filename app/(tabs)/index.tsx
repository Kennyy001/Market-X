import React,{useEffect,useState} from 'react';
import { View,Text,Pressable } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Screen } from '../../src/components/Screen';
import { Welcome } from '../../src/components/Welcome';
import { MarketChart } from '../../src/components/MarketChart';
import { AssetRow } from '../../src/components/AssetRow';
import { demoAssets } from '../../src/data/demoMarkets';
import { useMarketXTheme } from '../../src/theme/ThemeProvider';

function greeting(){const h=new Date().getHours();return h<12?'Good morning':h<17?'Good afternoon':h<21?'Good evening':'Good night';}
export default function Home() {
 const [name,setName]=useState<string|null>(null); const [stars,setStars]=useState<string[]>([]);
 const {colors,toggle,dark}=useMarketXTheme();
 useEffect(()=>{AsyncStorage.getItem('marketx_guest_name').then(setName);AsyncStorage.getItem('marketx_favorites').then(v=>v&&setStars(JSON.parse(v)));},[]);
 if(name===null) return <Welcome onDone={setName}/>;
 const featured=demoAssets.slice(0,4);
 const star=async(id:string)=>{const next=stars.includes(id)?stars.filter(x=>x!==id):[...stars,id];setStars(next);await AsyncStorage.setItem('marketx_favorites',JSON.stringify(next));};
 return <Screen>
  <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
   <View><Text style={{color:colors.muted,fontSize:13}}>{greeting()},</Text><Text style={{color:colors.text,fontSize:25,fontWeight:'900'}}>{name} 👋</Text></View>
   <Pressable onPress={toggle} style={{padding:10,backgroundColor:colors.card,borderRadius:12}}><Text style={{color:colors.text}}>{dark?'☀️':'🌙'}</Text></Pressable>
  </View>
  <View style={{backgroundColor:colors.card,borderColor:colors.border,borderWidth:1,borderRadius:20,padding:16,marginTop:22}}>
   <Text style={{color:colors.muted,fontSize:12,fontWeight:'700'}}>MARKET OVERVIEW</Text>
   <Text style={{color:colors.text,fontSize:22,fontWeight:'800',marginTop:5}}>Explore the markets</Text>
   <Text style={{color:colors.muted,fontSize:12,marginTop:4}}>Crypto · US stocks · Indian stocks</Text>
   <View style={{marginTop:16}}><MarketChart/></View>
  </View>
  <View style={{marginTop:24,flexDirection:'row',justifyContent:'space-between'}}><Text style={{color:colors.text,fontSize:18,fontWeight:'800'}}>Popular assets</Text><Text style={{color:colors.muted,fontSize:11}}>DEMO DATA</Text></View>
  {featured.map(a=><AssetRow key={a.id} asset={a} starred={stars.includes(a.id)} onStar={()=>star(a.id)}/>)}
  <Text style={{color:colors.muted,fontSize:11,marginTop:18,lineHeight:17}}>Demo preview only. Prices and chart are illustrative, not live or suitable for investment decisions.</Text>
 </Screen>;
}
