import Link from "next/link";
import { AnimateIn } from "./AnimateIn";
import { siteContent } from "@/content/siteContent";

interface PageHeroCta {
  label: string;
  href: string;
}

interface PageHeroProps {
  kicker: string;
  title: string;
  titleHighlight: string;
  description: string;
  children?: React.ReactNode;
  primaryCta?: PageHeroCta;
  secondaryCta?: PageHeroCta;
  // mediaStretch: sağ kolondaki görseli, sol kolonun (butonların) altıyla
  // hizalanacak şekilde satır yüksekliğine uzatır.
  mediaStretch?: boolean;
}

export function PageHero({
  kicker,
  title,
  titleHighlight,
  description,
  children,
  primaryCta = siteContent.common.ctas.services,
  secondaryCta = siteContent.common.ctas.contact,
  mediaStretch = false,
}: PageHeroProps) {
  return (
    <section className="section-padding bg-gradient-to-b from-light to-white">
      <div
        className={`max-w-[1180px] mx-auto px-5 grid lg:grid-cols-2 gap-12 lg:gap-16 ${
          mediaStretch ? "items-stretch" : "items-center"
        }`}
      >
        <AnimateIn>
          <span className="kicker">{kicker}</span>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-[1.02] tracking-tight mb-6">
            {title}{" "}
            <span className="text-turquoise-dark">{titleHighlight}</span>
          </h1>

          <p className="max-w-[600px] text-gray text-base lg:text-lg leading-relaxed mb-8">
            {description}
          </p>

          <div className="flex gap-3 flex-wrap">
            <Link href={primaryCta.href} className="btn-base btn-primary btn-lg">
              {primaryCta.label}
            </Link>
            <Link href={secondaryCta.href} className="btn-base btn-secondary btn-lg">
              {secondaryCta.label}
            </Link>
          </div>
        </AnimateIn>

        {children && (
          <AnimateIn delay={0.15} className={mediaStretch ? "h-full" : ""}>
            {children}
          </AnimateIn>
        )}
      </div>
    </section>
  );
}
