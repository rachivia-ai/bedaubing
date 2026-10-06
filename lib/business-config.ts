export type Service = { slug: string; title: string; short: string; description: string; enabled: boolean };

export const business = {
  name: "Bada Bing Taxi",
  tagline: "Jouw rit, jouw sfeer. Persoonlijk onderweg.",
  phone: process.env.NEXT_PUBLIC_PHONE ?? "06 24 93 19 77",
  whatsapp: process.env.NEXT_PUBLIC_WHATSAPP ?? "31624931977",
  email: process.env.NEXT_PUBLIC_EMAIL ?? "badabing.taxi@gmail.com",
  address: process.env.NEXT_PUBLIC_ADDRESS ?? "",
  kvk: process.env.NEXT_PUBLIC_KVK ?? "",
  vat: process.env.NEXT_PUBLIC_VAT ?? "",
  hours: process.env.NEXT_PUBLIC_HOURS ?? "",
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  mapsUrl: process.env.NEXT_PUBLIC_GOOGLE_MAPS_URL ?? "",
  reviewScore: process.env.NEXT_PUBLIC_GOOGLE_REVIEW_SCORE ?? "",
  reviewCount: process.env.NEXT_PUBLIC_GOOGLE_REVIEW_COUNT ?? "",
  reviewUrl: process.env.NEXT_PUBLIC_GOOGLE_REVIEW_URL ?? "",
  areas: ["Roermond", "Herten", "Maasniel", "Swalmen", "Melick", "Herkenbosch", "Horn", "Haelen", "Echt", "Weert", "Venlo", "Sittard"],
  passengerCapacity: Number(process.env.NEXT_PUBLIC_PASSENGER_CAPACITY ?? "4"),
  payments: (process.env.NEXT_PUBLIC_PAYMENT_METHODS ?? "").split(",").filter(Boolean),
  rates: { start: process.env.NEXT_PUBLIC_START_RATE ?? "", perKm: process.env.NEXT_PUBLIC_KM_RATE ?? "" },
  services: [
    { slug: "direct-een-taxi", title: "Direct een taxi", short: "Snel contact voor een rit die je nu nodig hebt.", description: "Vertel waar je staat en waar je heen wilt. Na persoonlijk contact hoor je direct wat mogelijk is.", enabled: true },
    { slug: "taxi-reserveren", title: "Taxi vooraf reserveren", short: "Plan je rit rustig vooruit.", description: "Vraag vooraf een taxi aan met ophaaladres, bestemming, datum en tijd. De rit staat vast na onze bevestiging.", enabled: true },
    { slug: "stationsvervoer", title: "Stationsvervoer", short: "Van of naar het station, zonder gedoe.", description: "Handig vervoer van en naar Roermond Centraal en stations in de regio.", enabled: true },
    { slug: "luchthavenvervoer", title: "Luchthavenvervoer", short: "Begin of eindig je reis ontspannen.", description: "Reserveer vervoer van Roermond naar een luchthaven of terug. Vraag vooraf een prijsindicatie aan.", enabled: true },
    { slug: "zakelijk-taxivervoer", title: "Zakelijk vervoer", short: "Representatief vervoer voor werk en gasten.", description: "Voor bedrijven, hotels, restaurants en zakelijke afspraken. Facturatie is mogelijk na een persoonlijke afspraak.", enabled: true },
    { slug: "hotel-restaurantvervoer", title: "Hotel- en restaurantvervoer", short: "Gastvrij vervoer voor gasten en bezoekers.", description: "Een makkelijke rit naar een hotel, restaurant of andere horecalocatie in de regio.", enabled: true },
    { slug: "uitgaansvervoer", title: "Uitgaansvervoer", short: "Comfortabel heen en weer.", description: "Vraag vervoer aan voor een avond uit. Spreek tijd en plek duidelijk af.", enabled: true },
    { slug: "evenementenvervoer", title: "Evenementenvervoer", short: "Een afgesproken rit rond jouw evenement.", description: "Voor bezoekers, gasten of medewerkers van evenementen in en rond Roermond.", enabled: true },
    { slug: "langeafstandsritten", title: "Langeafstandsritten", short: "Ook verder weg op aanvraag.", description: "Een bestemming buiten de regio? Neem contact op voor beschikbaarheid en een prijsindicatie.", enabled: true },
    { slug: "groepsvervoer", title: "Groepsvervoer", short: "Voor meerdere reizigers.", description: "Alleen beschikbaar wanneer voertuigcapaciteit en planning dit toelaten.", enabled: false },
    { slug: "vaste-ritten", title: "Vaste ritten", short: "Terugkerend vervoer op afspraak.", description: "Deze dienst wordt pas gepubliceerd na bevestiging.", enabled: false },
    { slug: "zorgvervoer", title: "Rolstoel- of zorgvervoer", short: "Vervoer met extra ondersteuning.", description: "Deze dienst wordt pas gepubliceerd na bevestiging.", enabled: false },
  ] satisfies Service[],
};

export const activeServices = business.services.filter((service) => service.enabled);
export const phoneHref = business.phone ? `tel:${business.phone.replace(/[^+\d]/g, "")}` : "/contact";
export const whatsappHref = (message = "Hallo Bada Bing Taxi, ik wil graag een taxi aanvragen.") => business.whatsapp
  ? `https://wa.me/${business.whatsapp.replace(/\D/g, "")}?text=${encodeURIComponent(message)}`
  : "/contact";
export const isDemo = !process.env.RESERVATION_WEBHOOK_URL && !process.env.RESEND_API_KEY;
