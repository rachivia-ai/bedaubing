import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { SiteShell } from "@/components/site-shell";
import { ContactActions } from "@/components/contact-actions";
export function ContentPage({title,eyebrow="Bada Bing Taxi",intro,children,cta=true}:{title:string;eyebrow?:string;intro:string;children:React.ReactNode;cta?:boolean}){return <SiteShell><section className="page-hero"><div className="breadcrumbs"><Link href="/">Home</Link><ChevronRight/>{title}</div><span className="kicker light">{eyebrow}</span><h1>{title}</h1><p>{intro}</p></section><div className="content-wrap">{children}</div>{cta&&<section className="inline-cta"><h2>Taxi nodig? Bada Bing, geregeld.</h2><p>Bel, app of reserveer. Je ontvangt altijd eerst een bevestiging.</p><ContactActions inverse/></section>}</SiteShell>}
