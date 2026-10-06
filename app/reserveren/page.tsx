import type { Metadata } from "next";import { ContentPage } from "@/components/content-page";import { ReservationForm } from "@/components/forms";
export const metadata:Metadata={title:"Taxi reserveren",description:"Vraag vooraf een taxi aan in Roermond en omgeving.",alternates:{canonical:"/reserveren"}};
export default function Page(){return <ContentPage title="Reserveer een rit" intro="Vul je ritgegevens in. Je aanvraag is pas definitief nadat Bada Bing Taxi deze persoonlijk heeft bevestigd." cta={false}><ReservationForm/></ContentPage>}
