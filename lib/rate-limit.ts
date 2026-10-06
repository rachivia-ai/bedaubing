const requests=new Map<string,{count:number;reset:number}>();
export function allowed(ip:string){const now=Date.now();const item=requests.get(ip);if(!item||item.reset<now){requests.set(ip,{count:1,reset:now+60_000});return true}if(item.count>=5)return false;item.count++;return true}
