import type { Metadata } from "next";
import { siteContent } from "@/content/siteContent";
import { PageHero } from "@/components/PageHero";
import { SectionHead } from "@/components/SectionHead";
import { AnimateIn } from "@/components/AnimateIn";
import { CountUp } from "@/components/CountUp";
import { StatsSection } from "@/components/StatsSection";
import { ReferencesSection } from "@/components/ReferencesSection";
import { OrbitBadge } from "@/components/OrbitBadge";
import { MarqueeSection } from "@/components/MarqueeSection";
import { CtaSection } from "@/components/CtaSection";
import { ProgressList } from "@/components/ProgressList";
import { Section } from "@/components/Section";
import { SectionTitle } from "@/components/SectionTitle";
import { createPageMetadata } from "@/lib/seo";
import { Check, ShieldCheck, Factory, Landmark, Building, Store, Grid3x3, Paintbrush, ClipboardCheck, HardHat, MessageCircle, Award } from "lucide-react";

const c = siteContent.referanslarimiz;

export const metadata: Metadata = createPageMetadata({
  path: "/referanslarimiz",
  title: c.meta.title,
  description: c.meta.description,
});

export default function Referanslarimiz() {
  return (
    <>
      <PageHero
        kicker={c.hero.kicker}
        title={c.hero.title}
        titleHighlight={c.hero.titleHighlight}
        description={c.hero.description}
      >
        <div className="card-base bg-white shadow-[var(--shadow-medium)] p-6">
          <div className="flex justify-between items-center mb-5">
            <span className="text-base text-gray leading-relaxed font-bold">{siteContent.brand.name}</span>
            <ShieldCheck size={22} className="text-turquoise-dark" />
          </div>
          <div className="mb-5">
            <CountUp target={c.hero.trustPanel.value} suffix="%" className="block text-5xl font-black" />
            <span className="text-base text-gray leading-relaxed mt-1 block">{c.hero.trustPanel.label}</span>
          </div>
          <div className="grid gap-3">
            {c.hero.trustPanel.items.map((item) => (
              <div key={item} className="flex items-center gap-2 text-sm font-bold">
                <Check size={16} className="text-turquoise-dark shrink-0" />
                {item}
              </div>
            ))}
          </div>
        </div>
      </PageHero>

      <ReferencesSection
        kicker={c.referencesSection.kicker}
        title={c.referencesSection.title}
        titleHighlight={c.referencesSection.titleHighlight}
        description={c.referencesSection.description}
        items={siteContent.references}
        showAll
        className="bg-light"
      />

      <StatsSection stats={c.stats} className="bg-white" />

      {/* Reference Areas */}
      <Section id="referans-listesi">
        <SectionHead
          kicker={c.referenceAreas.kicker}
          title={c.referenceAreas.title}
          titleHighlight={c.referenceAreas.titleHighlight}
          description={c.referenceAreas.description}
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {c.referenceAreas.items.map((item, i) => (
            <AnimateIn key={item.title} delay={i * 0.08}>
              <div className="card-base bg-white shadow-[var(--shadow-medium)] p-6 relative min-h-[200px]">
                <span className="absolute right-6 top-5 text-dark/10 text-5xl font-black">{item.number}</span>
                <div className="icon-box-lg bg-turquoise-soft text-turquoise-dark mb-5">
                  {[<Factory key="0" size={24} />, <Landmark key="1" size={24} />, <Building key="2" size={24} />, <Store key="3" size={24} />, <Grid3x3 key="4" size={24} />, <Paintbrush key="5" size={24} />][i]}
                </div>
                <strong className="block text-lg mb-2">{item.title}</strong>
                <p className="text-base text-gray leading-relaxed text-sm">{item.description}</p>
              </div>
            </AnimateIn>
          ))}
        </div>
      </Section>

      <MarqueeSection items={c.marquee} />

      {/* Project Types */}
      <Section
        className="bg-white"
        containerClassName="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center"
      >
        <AnimateIn>
          <SectionTitle
            kicker={c.projectTypes.kicker}
            title={c.projectTypes.title}
            titleHighlight={c.projectTypes.titleHighlight}
            description={c.projectTypes.description}
          />
          <ProgressList items={c.projectTypes.progress} />
        </AnimateIn>
        <AnimateIn delay={0.15}>
          <OrbitBadge brand="MSÇ" label="Güvenilir Referans" />
        </AnimateIn>
      </Section>

      {/* Why Chosen */}
      <section className="section-padding bg-dark text-white relative overflow-hidden">
        <div className="absolute -right-32 -top-32 w-[420px] h-[420px] rounded-full bg-turquoise/16 blur-sm" />
        <div className="max-w-[1180px] mx-auto px-5 relative z-10">
          <SectionHead kicker={c.whyChosen.kicker} title={c.whyChosen.title} titleHighlight={c.whyChosen.titleHighlight} light />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {c.whyChosen.items.map((item, i) => (
              <AnimateIn key={item.title} delay={i * 0.1}>
                <div className="card-dark p-6 min-h-[280px]">
                  <span className="absolute right-6 top-5 text-white/12 text-5xl font-black">{item.number}</span>
                  <div className="icon-box-lg bg-turquoise text-dark mb-7">
                    {[<ClipboardCheck key="0" size={24} />, <HardHat key="1" size={24} />, <MessageCircle key="2" size={24} />, <Award key="3" size={24} />][i]}
                  </div>
                  <h3 className="text-[23px] font-bold mb-3.5">{item.title}</h3>
                  <p className="text-white/68 leading-relaxed">{item.description}</p>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      <CtaSection kicker={c.cta.kicker} title={c.cta.title} description={c.cta.description} variant="dark" />
    </>
  );
}
