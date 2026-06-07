import type { Metadata } from "next";
import { IletisimPageClient } from "@/components/IletisimPageClient";
import { siteContent } from "@/content/siteContent";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  path: "/iletisim",
  title: siteContent.iletisim.meta.title,
  description: siteContent.iletisim.meta.description,
});

export default function Iletisim() {
  return <IletisimPageClient />;
}

