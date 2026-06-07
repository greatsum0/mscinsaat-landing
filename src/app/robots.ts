import type { MetadataRoute } from "next";
import { absoluteUrl, siteUrl } from "@/lib/seo";

// Statik export için: build sırasında tek sefer üretilir.
export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: absoluteUrl("/sitemap.xml"),
    host: siteUrl,
  };
}

