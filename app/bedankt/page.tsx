import type { Metadata } from "next";import Link from "next/link";import { CheckCircle2 } from "lucide-react";import { SiteShell } from "@/components/site-shell";
export const metadata:Metadata={title:"Bedankt",robots:{index:false,follow:false}};
export default function Page(){return <SiteShell><section className="thanks"><CheckCircle2/><h1>Bedankt voor je bericht.</h1><p>Als je formulier succesvol is gekoppeld, nemen we contact met je op. Een ritaanvraag is pas definitief na bevestiging.</p><Link className="btn btn-blue" href="/">Terug naar home</Link></section></SiteShell>}
