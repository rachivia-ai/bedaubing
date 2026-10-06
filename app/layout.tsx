import type { Metadata, Viewport } from "next";
import { business } from "@/lib/business-config";
import "./globals.css";

export const metadata: Metadata = { metadataBase:new URL(business.siteUrl), title:{default:"Bada Bing Taxi | Taxi in Roermond",template:"%s | Bada Bing Taxi"},description:"Taxi nodig in Roermond? Bel, app of reserveer een rit bij Bada Bing Taxi. Persoonlijk contact en duidelijke afspraken.",alternates:{canonical:"/"},icons:{icon:"/favicon.svg"},openGraph:{type:"website",locale:"nl_NL",siteName:"Bada Bing Taxi",title:"Bada Bing Taxi in Roermond",description:"Nu weg of later ophalen? Bel, app of reserveer je taxi."}};
export const viewport:Viewport={themeColor:"#111111",width:"device-width",initialScale:1};
export default function RootLayout({children}:{children:React.ReactNode}){const schema={"@context":"https://schema.org","@type":"TaxiService",name:business.name,url:business.siteUrl,areaServed:business.areas,address:business.address||undefined,telephone:business.phone||undefined,email:business.email||undefined};return <html lang="nl"><body>{children}<script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(schema)}}/></body></html>}
