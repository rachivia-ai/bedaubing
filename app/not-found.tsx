import Link from "next/link";import { SiteShell } from "@/components/site-shell";
export default function NotFound(){return <SiteShell><section className="thanks"><span className="error-code">404</span><h1>Deze afslag bestaat niet.</h1><p>De pagina is verplaatst of het adres klopt niet.</p><Link className="btn btn-yellow" href="/">Ga naar de homepage</Link></section></SiteShell>}
