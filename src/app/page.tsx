import type { Metadata } from "next";
import { siteContent } from "@/content/siteContent";
import { HeroSlider } from "@/components/HeroSlider";
import { ReferencesSection } from "@/components/ReferencesSection";
import { StatsSection } from "@/components/StatsSection";
import { SectionHead } from "@/components/SectionHead";
import { AnimateIn } from "@/components/AnimateIn";
import { MediaFrame } from "@/components/MediaFrame";
import { ProcessSection } from "@/components/ProcessSection";
import { MarqueeSection } from "@/components/MarqueeSection";
import { CtaSection } from "@/components/CtaSection";
import { FaqSection } from "@/components/FaqSection";
import { ContactPreview } from "@/components/ContactPreview";
import { ProjectsFilter } from "@/components/ProjectsFilter";
import { Section } from "@/components/Section";
import { ServiceCard } from "@/components/ServiceCard";
import { createPageMetadata } from "@/lib/seo";
import Link from "next/link";
import { ArrowRight, CheckCheck } from "lucide-react";

const c = siteContent.home;
const images = siteContent.images;

export const metadata: Metadata = createPageMetadata({
  path: "/",
  title: c.meta.title,
  description: c.meta.description,
});

export default function Home() {
  return (
    <>
      <HeroSlider slides={c.heroSlides} video={images.heroVideo} />

      <ReferencesSection
        kicker={c.referencesSection.kicker}
        title={c.referencesSection.title}
        titleHighlight={c.referencesSection.titleHighlight}
        description={c.referencesSection.description}
        ctaLabel={c.referencesSection.ctaLabel}
        ctaHref={c.referencesSection.ctaHref}
        items={siteContent.references}
      />

      <StatsSection stats={c.stats} />

      {/* About Preview */}
      <Section containerClassName="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <AnimateIn>
          <MediaFrame
            src={images.about}
            alt={siteContent.common.imagesAlt.homeAbout}
            aspect="aspect-[4/3]"
            elevated
          />
          <div className="flex gap-4 mt-6">
            <div className="card-base bg-dark text-white p-5 flex-1 shadow-[var(--shadow-medium)]">
              <strong className="block text-turquoise text-3xl leading-none">
                {c.aboutPreview.experienceYears}
              </strong>
              <span className="text-sm font-bold text-white/70 mt-1 block">
                {c.aboutPreview.experienceLabel}
              </span>
            </div>
            <div className="card-base bg-white p-5 flex-1 shadow-[var(--shadow-medium)] flex items-center gap-3">
              <CheckCheck size={20} className="text-turquoise-dark shrink-0" />
              <span className="text-sm font-bold">{c.aboutPreview.badge}</span>
            </div>
          </div>
        </AnimateIn>

        <AnimateIn delay={0.15}>
          <span className="kicker">{c.aboutPreview.kicker}</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black leading-[1.08] tracking-tight mb-5">
            {c.aboutPreview.title}{" "}
            <span className="text-turquoise">{c.aboutPreview.titleHighlight}</span>
          </h2>
          <p className="text-base text-gray leading-relaxed mb-7">
            {c.aboutPreview.description}
          </p>
          <div className="grid gap-3 mb-8">
            {c.aboutPreview.features.map((f) => (
              <div key={f} className="flex gap-3 items-center text-dark font-bold text-sm">
                <CheckCheck size={18} className="text-turquoise-dark shrink-0" />
                {f}
              </div>
            ))}
          </div>
          <Link href="/hakkimizda" className="btn-base btn-primary btn-lg">
            {c.aboutPreview.ctaLabel}
            <ArrowRight size={16} />
          </Link>
        </AnimateIn>
      </Section>

      {/* Services */}
      <Section className="bg-white">
        <SectionHead
          kicker={c.servicesSection.kicker}
          title={c.servicesSection.title}
          titleHighlight={c.servicesSection.titleHighlight}
          description={c.servicesSection.description}
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {c.services.map((svc, i) => (
            <AnimateIn key={svc.title} delay={i * 0.06}>
              <ServiceCard
                title={svc.title}
                description={svc.description}
                image={svc.image}
                number={String(i + 1).padStart(2, "0")}
                ctaHref={svc.href}
                ctaLabel={c.servicesSection.ctaLabel}
              />
            </AnimateIn>
          ))}
        </div>
      </Section>

      <ProcessSection
        id="surec"
        kicker={c.process.kicker}
        title={c.process.title}
        titleHighlight={c.process.titleHighlight}
        steps={c.process.steps}
        dark
      />

      <MarqueeSection items={c.marquee} />

      {/* Projects Preview */}
      <Section>
        <SectionHead
          kicker={c.projectsPreview.kicker}
          title={c.projectsPreview.title}
          titleHighlight={c.projectsPreview.titleHighlight}
          description={c.projectsPreview.description}
        />
        <ProjectsFilter
          filters={c.projectsPreview.filters}
          projects={c.projectsPreview.projects}
          cta={{ label: c.projectsPreview.ctaLabel, href: "/projelerimiz" }}
        />
      </Section>

      <CtaSection
        kicker={c.cta.kicker}
        title={c.cta.title}
        description={c.cta.description}
      />

      <FaqSection
        kicker={c.faq.kicker}
        title={c.faq.title}
        titleHighlight={c.faq.titleHighlight}
        description={c.faq.description}
        items={c.faq.items}
      />

      <ContactPreview />
    </>
  );
}
