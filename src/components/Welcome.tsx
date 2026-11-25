import React, {useEffect,useState} from 'react';
import { View, Text, TextInput, Pressable, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useMarketXTheme } from '../theme/ThemeProvider';
export function Welcome({onDone}:{onDone:(name:string)=>void}) {
 const {colors}=useMarketXTheme(); const [name,setName]=useState('');
 return <View style={{flex:1,backgroundColor:colors.bg,justifyContent:'center',padding:26}}>
  <Text style={{fontSize:34,fontWeight:'900',color:colors.text}}>Market<Text style={{color:colors.accent}}>X</Text></Text>
  <Text style={{color:colors.muted,marginTop:8,marginBottom:30}}>Your markets. Your watchlist. Your view.</Text>
  <Text style={{color:colors.text,fontSize:19,fontWeight:'700'}}>What should we call you?</Text>
  <TextInput value={name} onChangeText={setName} placeholder="Enter your name" placeholderTextColor={colors.muted} style={[s.input,{color:colors.text,borderColor:colors.border,backgroundColor:colors.card}]} maxLength={40} />
  <Pressable disabled={!name.trim()} onPress={async()=>{const clean=name.trim();await AsyncStorage.setItem('marketx_guest_name',clean);onDone(clean)}} style={[s.button,{backgroundColor:colors.accent,opacity:name.trim()?1:.5}]}><Text style={{color:'#07140F',fontWeight:'800'}}>Continue as guest</Text></Pressable>
  <Text style={{color:colors.muted,fontSize:11,marginTop:16}}>Name-only guest profile. No password required. This profile is stored on this device.</Text>
 </View>;
}
const s=StyleSheet.create({input:{borderWidth:1,borderRadius:13,padding:15,marginTop:14,marginBottom:14,fontSize:16},button:{padding:16,borderRadius:13,alignItems:'center'}});
