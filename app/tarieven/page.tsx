import type { Metadata } from "next";
import { ArrowRight, MessageCircle, Plane, Repeat2 } from "lucide-react";
import { ContentPage } from "@/components/content-page";
import { whatsappHref } from "@/lib/business-config";

export const metadata: Metadata = {
  title: "Taxitarieven en luchthavenvervoer",
  description: "Bekijk de tarieven voor luchthavenvervoer vanuit Roermond of vraag een persoonlijke ritprijs aan.",
  alternates: { canonical: "/tarieven" },
};

const airportRates = [
  ["Maastricht Airport", 98],
  ["Eindhoven Airport", 109],
  ["Düsseldorf Airport", 108],
  ["Weeze Airport", 119],
  ["Luik Airport", 139],
  ["Keulen/Bonn Airport", 158],
  ["Brussel Zaventem", 184],
  ["Charleroi Airport", 224],
  ["Rotterdam Airport", 244],
  ["Schiphol Airport", 239],
  ["Frankfurt Airport", 349],
] as const;

const euro = new Intl.NumberFormat("nl-NL", { style: "currency", currency: "EUR", maximumFractionDigits: 0 });

export default function Page() {
  return <ContentPage title="Tarieven op aanvraag" intro="Voor gewone ritten maken we graag een prijs passend bij jouw route. Voor luchthavenvervoer vanuit Roermond gelden de onderstaande enkele-reisprijzen.">
    <div className="rates-layout">
      <section className="airport-rates" aria-labelledby="airport-title">
        <div className="rates-heading"><span><Plane /></span><div><p className="kicker">Luchthavenvervoer</p><h2 id="airport-title">Vaste prijzen voor een enkele reis</h2></div></div>
        <div className="airport-rate-list">{airportRates.map(([airport, price]) => <div key={airport}><span>{airport}</span><strong>{euro.format(price)}</strong></div>)}</div>
        <div className="return-note"><Repeat2/><div><strong>Voordelig retour</strong><p>Een retourrit kost <b>1,9 × de prijs van een enkele reis</b>.</p></div></div>
        <p className="rates-smallprint">Je rit staat vast nadat wij de aanvraag persoonlijk hebben bevestigd. Geef bij je aanvraag de ophaallocatie, datum, tijd, het vluchtnummer en aantal passagiers door.</p>
      </section>
      <aside className="rate-request-card"><span className="kicker light">Andere bestemming?</span><h2>Vraag jouw ritprijs aan.</h2><p>Stuur de route en gewenste tijd via WhatsApp. Je krijgt persoonlijk antwoord.</p><a className="btn btn-whatsapp" href={whatsappHref("Hallo Bada Bing Taxi, ik wil graag een prijs aanvragen voor mijn rit.")}><MessageCircle/>Vraag via WhatsApp</a><a className="text-link light" href="/reserveren">Of reserveer online <ArrowRight/></a></aside>
    </div>
  </ContentPage>;
}
