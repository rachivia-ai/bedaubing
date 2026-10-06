import type { MetadataRoute } from "next";import { business } from "@/lib/business-config";
export default function robots():MetadataRoute.Robots{return {rules:{userAgent:"*",allow:"/",disallow:["/api/"]},sitemap:`${business.siteUrl}/sitemap.xml`}}
