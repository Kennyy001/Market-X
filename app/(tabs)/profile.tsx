import React,{useEffect,useState} from 'react';
import {Text,Pressable,View} from 'react-native';
import {useRouter} from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Screen} from '../../src/components/Screen';
import {useMarketXTheme} from '../../src/theme/ThemeProvider';
import {Ionicons} from '@expo/vector-icons';

export default function Profile(){
 const [name,setName]=useState('Guest');
 const {colors,dark,toggle}=useMarketXTheme();
 const router=useRouter();
 useEffect(()=>{AsyncStorage.getItem('marketx_guest_name').then(v=>v&&setName(v));},[]);
 const row=(icon:any,title:string,action:()=>void)=><Pressable onPress={action} style={{minHeight:58,flexDirection:'row',alignItems:'center',paddingVertical:14,borderBottomWidth:1,borderBottomColor:colors.border}}>
  <Ionicons name={icon} size={21} color={colors.muted} style={{width:34}}/>
  <Text style={{color:colors.text,fontSize:15,fontWeight:'600',flex:1}}>{title}</Text>
  <Ionicons name="chevron-forward" size={19} color={colors.muted}/>
 </Pressable>;
 return <Screen>
  <Text style={{color:colors.text,fontSize:27,fontWeight:'900'}}>Profile</Text>
  <View style={{backgroundColor:colors.card,padding:18,borderRadius:17,marginTop:18,borderColor:colors.border,borderWidth:1}}>
   <Text style={{color:colors.muted,fontSize:11,fontWeight:'700',letterSpacing:1}}>GUEST PROFILE</Text>
   <Text style={{color:colors.text,fontSize:21,fontWeight:'800',marginTop:6}}>{name}</Text>
   <View style={{marginTop:12}}>{row('person-outline','Developer Profile',()=>router.push('/developer'))}{row('information-circle-outline','About MarketX',()=>router.push('/about'))}{row('code-slash','Features & Technologies',()=>router.push('/features'))}{row('shield-checkmark-outline','Privacy & Disclaimer',()=>router.push('/privacy'))}</View>
  </View>
  <Pressable onPress={toggle} style={{padding:16,marginTop:14,backgroundColor:colors.card,borderColor:colors.border,borderWidth:1,borderRadius:13,flexDirection:'row',justifyContent:'space-between'}}>
   <Text style={{color:colors.text,fontWeight:'600'}}>Appearance</Text><Text style={{color:colors.muted}}>{dark?'Dark':'Light'} · Switch</Text>
  </Pressable>
  <Text style={{color:colors.muted,fontSize:12,lineHeight:18,marginTop:20}}>MarketX is an information and analytics prototype. It does not execute trades or provide personalized investment advice.</Text>
 </Screen>;
}
