import type { Metadata } from "next";import { ContentPage } from "@/components/content-page";import { business } from "@/lib/business-config";
const faqs=[
 ["Hoe bestel ik direct een taxi?","Bel of stuur een WhatsApp met je ophaallocatie en bestemming. Je hoort daarna persoonlijk wat mogelijk is."],
 ["Kan ik vooraf reserveren?","Ja. Gebruik het reserveringsformulier en vul datum, tijd, vertrekpunt en bestemming in."],
 ["Hoe weet ik wat een rit kost?","Vraag vooraf vrijblijvend een prijsindicatie aan. We publiceren geen bedrag dat niet door de eigenaar is bevestigd."],
 ["Kan ik via WhatsApp reserveren?","Ja, zodra het zakelijke WhatsApp-nummer in de websiteconfiguratie is ingevuld."],
 ["Rijden jullie buiten Roermond?",`Je kunt een rit aanvragen vanuit ${business.areas.slice(0,6).join(", ")} en andere geactiveerde plaatsen. Verder weg kan op aanvraag.`],
 ["Kan ik naar een luchthaven worden gebracht?","Ja, luchthavenvervoer kan vooraf worden aangevraagd. Geef ook het aantal reizigers en de bagage door."],
 ["Wanneer is mijn reservering definitief?","Pas nadat Bada Bing Taxi je aanvraag persoonlijk heeft bevestigd."],
 ["Welke betaalmethoden accepteren jullie?",business.payments.length?`Je kunt betalen met: ${business.payments.join(", ")}.`:"De geaccepteerde betaalmethoden zijn nog niet bevestigd. Vraag dit bij het reserveren."],
];
export const metadata:Metadata={title:"Veelgestelde vragen",description:"Antwoorden op veelgestelde vragen over Bada Bing Taxi in Roermond.",alternates:{canonical:"/veelgestelde-vragen"}};
export default function Page(){const schema={"@context":"https://schema.org","@type":"FAQPage",mainEntity:faqs.map(([q,a])=>({"@type":"Question",name:q,acceptedAnswer:{"@type":"Answer",text:a}}))};return <ContentPage title="Veelgestelde vragen" intro="Praktische antwoorden over bestellen, reserveren, prijzen en het werkgebied."><div className="faq-list">{faqs.map(([q,a])=><details key={q}><summary>{q}</summary><p>{a}</p></details>)}</div><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(schema)}}/></ContentPage>}
