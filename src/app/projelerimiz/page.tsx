import type { Metadata } from "next";
import { siteContent } from "@/content/siteContent";
import { PageHero } from "@/components/PageHero";
import { SectionHead } from "@/components/SectionHead";
import { AnimateIn } from "@/components/AnimateIn";
import { CountUp } from "@/components/CountUp";
import { MarqueeSection } from "@/components/MarqueeSection";
import { ProcessSection } from "@/components/ProcessSection";
import { CtaSection } from "@/components/CtaSection";
import { ProjectsFilter } from "@/components/ProjectsFilter";
import { MediaFrame } from "@/components/MediaFrame";
import { NumbersSection } from "@/components/NumbersSection";
import { Section } from "@/components/Section";
import { SectionTitle } from "@/components/SectionTitle";
import { createPageMetadata } from "@/lib/seo";
import Link from "next/link";
import { ArrowRight, Check, Award, Ruler, BarChart3 } from "lucide-react";

const c = siteContent.projelerimiz;

export const metadata: Metadata = createPageMetadata({
  path: "/projelerimiz",
  title: c.meta.title,
  description: c.meta.description,
});

export default function Projelerimiz() {
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
            <span className="text-base text-gray leading-relaxed font-bold">{c.hero.panel.label}</span>
          </div>
          <div className="mb-5">
            <CountUp target={c.hero.panel.value} className="block text-5xl font-black" />
            <span className="text-base text-gray leading-relaxed mt-1 block">{c.hero.panel.valueLabel}</span>
          </div>
          <div className="grid gap-3">
            {c.hero.panel.items.map((item) => (
              <div key={item} className="flex items-center gap-2 text-sm font-bold">
                <div className="icon-box bg-turquoise-soft text-turquoise-dark">
                  <Check size={16} />
                </div>
                {item}
              </div>
            ))}
          </div>
        </div>
      </PageHero>

      {/* Featured Project */}
      <Section containerClassName="grid lg:grid-cols-2 gap-6 items-center">
        <AnimateIn>
          <div className="relative">
            <MediaFrame
              src={siteContent.images.projectFeatured}
              alt={c.featured.title}
            />
            <div className="absolute left-4 bottom-4 z-10 inline-flex items-center gap-2 px-3 py-2 rounded-xl bg-turquoise text-dark text-xs font-bold shadow-[var(--shadow-medium)]">
              <Award size={14} />
              {c.featured.badge}
            </div>
          </div>
        </AnimateIn>
        <AnimateIn delay={0.15}>
          <span className="kicker">{c.featured.kicker}</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tight mb-5">
            {c.featured.title} <span className="text-turquoise">{c.featured.titleHighlight}</span>
          </h2>
          <p className="text-base text-gray leading-relaxed mb-7">{c.featured.description}</p>
          <div className="grid grid-cols-3 gap-6 mb-8">
            {c.featured.meta.map((m) => (
              <div key={m.label}>
                <strong className="text-xl font-bold block mb-1">{m.label}</strong>
                <span className="text-base text-gray leading-relaxed">{m.value}</span>
              </div>
            ))}
          </div>
          <Link href="/iletisim" className="btn-base btn-primary btn-lg">
            {c.featured.ctaLabel} <ArrowRight size={18} />
          </Link>
        </AnimateIn>
      </Section>

      <MarqueeSection items={c.marquee} />

      {/* Gallery */}
      <Section id="proje-galerisi">
        <SectionHead
          kicker={c.gallery.kicker}
          title={c.gallery.title}
          titleHighlight={c.gallery.titleHighlight}
          description={c.gallery.description}
        />
        <ProjectsFilter
          filters={c.gallery.filters}
          detail={c.gallery.detail}
          projects={c.gallery.projects.map((p) => ({
            category: p.category,
            tag: p.tag,
            title: p.title,
            description: p.description,
            image: p.image,
            tags: p.tags,
            location: p.location,
            year: p.year,
            slug: p.slug,
          }))}
        />
      </Section>

      {/* Approach */}
      <Section
        className="bg-white"
        containerClassName="grid lg:grid-cols-2 gap-6 items-center"
      >
        <AnimateIn>
          <SectionTitle
            kicker={c.approach.kicker}
            title={c.approach.title}
            titleHighlight={c.approach.titleHighlight}
            description={c.approach.description}
          />
          <div className="grid gap-6">
            {c.approach.items.map((item, i) => {
              const icons = [Ruler, BarChart3, Check];
              const Icon = icons[i % icons.length];
              return (
                <div key={item.title} className="flex gap-4 items-start">
                  <div className="icon-box bg-turquoise-soft text-turquoise-dark">
                    <Icon size={20} />
                  </div>
                  <div>
                    <strong className="text-xl font-bold block mb-1">{item.title}</strong>
                    <span className="text-base text-gray leading-relaxed">{item.text}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </AnimateIn>
        <AnimateIn delay={0.15}>
          <MediaFrame
            src={siteContent.images.projectApproach}
            alt={c.approach.title}
          />
        </AnimateIn>
      </Section>

      <ProcessSection
        kicker={c.process.kicker}
        title={c.process.title}
        titleHighlight={c.process.titleHighlight}
        steps={c.process.steps}
        dark
      />

      <NumbersSection numbers={c.numbers} />

      <CtaSection kicker={c.cta.kicker} title={c.cta.title} description={c.cta.description} variant="dark" />
    </>
  );
}
