import React, { createContext, useContext, useMemo, useState } from 'react';
import { useColorScheme } from 'react-native';

const palettes = {
  dark: { bg:'#0B1020', card:'#141B2D', text:'#F4F7FC', muted:'#8D99AE', border:'#263149', accent:'#65D6A6', red:'#FF6B78', green:'#45C98A' },
  light: { bg:'#F4F7FB', card:'#FFFFFF', text:'#172033', muted:'#748096', border:'#E1E7F0', accent:'#087F62', red:'#D94B5B', green:'#07865F' }
};
type ThemeContextType = { dark:boolean; colors:typeof palettes.dark; toggle:()=>void };
const Ctx = createContext<ThemeContextType | null>(null);
export function ThemeProvider({children}:{children:React.ReactNode}) {
  const system = useColorScheme();
  const [choice,setChoice] = useState<'dark'|'light'|null>(null);
  const dark = choice ? choice === 'dark' : system !== 'light';
  const value = useMemo(() => ({ dark, colors: dark ? palettes.dark : palettes.light, toggle:()=>setChoice(dark?'light':'dark') }),[dark]);
  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}
export function useMarketXTheme() {
  const value = useContext(Ctx);
  if (!value) throw new Error('useMarketXTheme must be used inside ThemeProvider');
  return value;
}
