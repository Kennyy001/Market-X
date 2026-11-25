// Illustrative placeholders only. Replace with provider-backed data before release.
export type Asset = { id:string; symbol:string; name:string; price:number; change:number; kind:'crypto'|'US'|'IN'; currency:string };
export const demoAssets:Asset[] = [
 {id:'btc',symbol:'BTC',name:'Bitcoin',price:67420,change:2.34,kind:'crypto',currency:'USD'},
 {id:'eth',symbol:'ETH',name:'Ethereum',price:3520,change:1.18,kind:'crypto',currency:'USD'},
 {id:'sol',symbol:'SOL',name:'Solana',price:148.2,change:-0.82,kind:'crypto',currency:'USD'},
 {id:'aapl',symbol:'AAPL',name:'Apple',price:212.4,change:0.62,kind:'US',currency:'USD'},
 {id:'nvda',symbol:'NVDA',name:'NVIDIA',price:132.7,change:1.92,kind:'US',currency:'USD'},
 {id:'reliance',symbol:'RELIANCE',name:'Reliance Industries',price:1280,change:-0.34,kind:'IN',currency:'INR'},
 {id:'tcs',symbol:'TCS',name:'TCS',price:3420,change:0.76,kind:'IN',currency:'INR'}
];
