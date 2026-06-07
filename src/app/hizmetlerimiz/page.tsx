import type { Metadata } from "next";
import { siteContent } from "@/content/siteContent";
import { PageHero } from "@/components/PageHero";
import { SectionHead } from "@/components/SectionHead";
import { AnimateIn } from "@/components/AnimateIn";
import { ProcessSection } from "@/components/ProcessSection";
import { CtaSection } from "@/components/CtaSection";
import { Section } from "@/components/Section";
import { ServiceCard } from "@/components/ServiceCard";
import { SectionTitle } from "@/components/SectionTitle";
import { createPageMetadata } from "@/lib/seo";
import { HardHat, Ruler, CircleCheck } from "lucide-react";

const c = siteContent.hizmetlerimiz;

const advantageIcons = [Ruler, HardHat, CircleCheck];

export const metadata: Metadata = createPageMetadata({
  path: "/hizmetlerimiz",
  title: c.meta.title,
  description: c.meta.description,
});

export default function Hizmetlerimiz() {
  return (
    <>
      <PageHero
        kicker={c.hero.kicker}
        title={c.hero.title}
        titleHighlight={c.hero.titleHighlight}
        description={c.hero.description}
        primaryCta={{ label: siteContent.common.ctas.services.label, href: "#hizmetler" }}
      >
        <div className="card-base bg-white shadow-[var(--shadow-medium)] p-6">
          {c.hero.heroCard.lines.map((line) => (
            <div key={line.value} className="flex justify-between items-center py-4 border-b border-dark/8 last:border-0">
              <span className="text-base text-gray leading-relaxed">{line.label}</span>
              <strong className="text-2xl font-black">{line.value}</strong>
            </div>
          ))}
          <div className="mt-5 flex items-center gap-3 p-4 rounded-2xl bg-turquoise-soft">
            <div className="icon-box bg-turquoise-soft text-turquoise-dark">
              <HardHat size={20} />
            </div>
            <p className="text-sm text-dark/80 font-bold">{c.hero.heroCard.bottom}</p>
          </div>
        </div>
      </PageHero>

      {/* Services */}
      <Section id="hizmetler" className="scroll-mt-24">
        <SectionHead
          kicker={c.servicesSection.kicker}
          title={c.servicesSection.title}
          titleHighlight={c.servicesSection.titleHighlight}
          description={c.servicesSection.description}
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {c.services.map((svc, i) => (
            <AnimateIn key={svc.title} delay={i * 0.08}>
              <ServiceCard
                title={svc.title}
                description={svc.description}
                image={svc.image}
                imageHeight="h-[200px]"
                number={svc.number}
                ctaHref="/iletisim"
                ctaLabel={svc.cta}
                tags={svc.tags}
              />
            </AnimateIn>
          ))}
        </div>
      </Section>

      {/* Advantages */}
      <Section
        className="bg-gradient-to-br from-turquoise/5 to-turquoise/15"
        containerClassName="grid lg:grid-cols-2 gap-16 items-center"
      >
        <AnimateIn>
          <SectionTitle
            kicker={c.advantages.kicker}
            title={c.advantages.title}
            titleHighlight={c.advantages.titleHighlight}
            description={c.advantages.description}
          />
        </AnimateIn>
        <AnimateIn delay={0.15}>
          <div className="grid gap-6">
            {c.advantages.items.map((item, i) => {
              const Icon = advantageIcons[i % advantageIcons.length];
              return (
                <div key={item.title} className="card-base bg-white shadow-[var(--shadow-medium)] p-5">
                  <div className="flex gap-4 items-center">
                    <div className="icon-box bg-turquoise-soft text-turquoise-dark shrink-0">
                      <Icon size={20} />
                    </div>
                    <div>
                      <strong className="text-xl font-bold block mb-1">{item.title}</strong>
                      <p className="text-base text-gray leading-relaxed text-sm">{item.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </AnimateIn>
      </Section>

      <ProcessSection
        kicker={c.process.kicker}
        title={c.process.title}
        titleHighlight={c.process.titleHighlight}
        steps={c.process.steps}
        dark
      />

      <CtaSection kicker={c.cta.kicker} title={c.cta.title} description={c.cta.description} variant="dark" />
    </>
  );
}
