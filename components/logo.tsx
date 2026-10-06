import Link from "next/link";

export function Logo({ light = false }: { light?: boolean }) {
  return <Link href="/" className={`brand ${light ? "brand-light" : ""}`} aria-label="Bada Bing Taxi, home">
    <span className="brand-mark" aria-hidden="true"><b>BB</b><i /></span>
    <span>Bada Bing<small>Taxi Roermond</small></span>
  </Link>;
}
