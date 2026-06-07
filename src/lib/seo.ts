import type { Metadata } from "next";
import { siteContent } from "@/content/siteContent";

export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://www.mscinsaat11.com";

export const siteName = siteContent.brand.name;

export const defaultOgImage = {
  url: siteContent.images.ogImage,
  width: 1200,
  height: 630,
  alt: `${siteName} sosyal paylaşım görseli`,
};

export const seoRoutes = [
  {
    path: "/",
    title: siteContent.home.meta.title,
    description: siteContent.home.meta.description,
    priority: 1,
  },
  {
    path: "/hakkimizda",
    title: siteContent.hakkimizda.meta.title,
    description: siteContent.hakkimizda.meta.description,
    priority: 0.8,
  },
  {
    path: "/hizmetlerimiz",
    title: siteContent.hizmetlerimiz.meta.title,
    description: siteContent.hizmetlerimiz.meta.description,
    priority: 0.9,
  },
  {
    path: "/projelerimiz",
    title: siteContent.projelerimiz.meta.title,
    description: siteContent.projelerimiz.meta.description,
    priority: 0.8,
  },
  {
    path: "/referanslarimiz",
    title: siteContent.referanslarimiz.meta.title,
    description: siteContent.referanslarimiz.meta.description,
    priority: 0.7,
  },
  {
    path: "/iletisim",
    title: siteContent.iletisim.meta.title,
    description: siteContent.iletisim.meta.description,
    priority: 0.9,
  },
];

export function absoluteUrl(path = "/") {
  return new URL(path, siteUrl).toString();
}

export function createPageMetadata({
  path,
  title,
  description,
}: {
  path: string;
  title: string;
  description: string;
}): Metadata {
  return {
    title,
    description,
    alternates: {
      canonical: path,
    },
    openGraph: {
      title,
      description,
      url: path,
      siteName,
      locale: "tr_TR",
      type: "website",
      images: [defaultOgImage],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [defaultOgImage.url],
    },
  };
}

export const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "GeneralContractor",
  name: siteName,
  alternateName: siteContent.brand.shortName,
  url: siteUrl,
  logo: absoluteUrl(siteContent.images.logo),
  image: absoluteUrl(siteContent.images.logo),
  description: siteContent.brand.footerDescription,
  telephone: siteContent.contact.phone,
  email: siteContent.contact.email,
  areaServed: {
    "@type": "Country",
    name: "Türkiye",
  },
  openingHours: "Mo-Sa 09:00-18:00",
  serviceType: siteContent.footerServices,
  sameAs: siteContent.social
    .map((item) => item.href)
    .filter((href) => href.startsWith("http")),
};
