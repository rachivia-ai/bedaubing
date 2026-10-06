import Link from "next/link";
import { CalendarDays, MessageCircle, Phone } from "lucide-react";
import { phoneHref, whatsappHref } from "@/lib/business-config";
export function ContactActions({ inverse = false }: { inverse?: boolean }) { return <div className="actions"><a className={`btn ${inverse ? "btn-white" : "btn-yellow"}`} href={phoneHref}><Phone />Bel direct</a><a className="btn btn-whatsapp" href={whatsappHref()}><MessageCircle />Stuur een WhatsApp</a><Link className={`text-link ${inverse ? "light" : ""}`} href="/reserveren"><CalendarDays />Reserveer voor later</Link></div>; }
