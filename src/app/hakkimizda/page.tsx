import type { Metadata } from "next";
import Image from "next/image";
import { siteContent } from "@/content/siteContent";
import { PageHero } from "@/components/PageHero";
import { SectionHead } from "@/components/SectionHead";
import { AnimateIn } from "@/components/AnimateIn";
import { CountUp } from "@/components/CountUp";
import { TimelineSection } from "@/components/TimelineSection";
import { CtaSection } from "@/components/CtaSection";
import { MediaFrame } from "@/components/MediaFrame";
import { NumbersSection } from "@/components/NumbersSection";
import { ProgressList } from "@/components/ProgressList";
import { Section } from "@/components/Section";
import { SectionTitle } from "@/components/SectionTitle";
import { createPageMetadata } from "@/lib/seo";
import {
  Check,
  ArrowRight,
  CircleCheck,
  Compass,
  HardHat,
  Handshake,
  Eye,
  Flag,
  Shield,
  Medal,
  Clock,
  Users,
  RulerIcon,
} from "lucide-react";

const c = siteContent.hakkimizda;

export const metadata: Metadata = createPageMetadata({
  path: "/hakkimizda",
  title: c.meta.title,
  description: c.meta.description,
});

const summaryIcons = [
  <Compass key="0" size={24} />,
  <HardHat key="1" size={24} />,
  <Handshake key="2" size={24} />,
];

const valueIcons = [
  <Shield key="0" size={24} />,
  <Medal key="1" size={24} />,
  <Clock key="2" size={24} />,
  <Users key="3" size={24} />,
];

export default function Hakkimizda() {
  return (
    <>
      {/* Hero */}
      <PageHero
        kicker={c.hero.kicker}
        title={c.hero.title}
        titleHighlight={c.hero.titleHighlight}
        description={c.hero.description}
        mediaStretch
      >
        <div className="relative h-full min-h-[420px]">
          <div className="relative h-full min-h-[420px] overflow-hidden rounded-2xl shadow-[var(--shadow-elevated)]">
            <Image
              src={siteContent.images.aboutHero}
              alt={siteContent.common.imagesAlt.aboutHero}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          {/* Saha deneyimi rozeti: fotoğrafın sol kenarında, hafif taşarak;
              yavaş yukarı-aşağı süzülür (animate-float). */}
          <div className="animate-float absolute bottom-12 -left-5 inline-flex items-center gap-4 p-5 rounded-2xl bg-dark text-white shadow-[var(--shadow-elevated)]">
            <span className="icon-box-lg bg-turquoise text-dark">
              <RulerIcon size={24} />
            </span>
            <div>
              <CountUp
                target={c.hero.floatingStat.value}
                className="block text-3xl font-black text-turquoise leading-none"
              />
              <span className="block mt-1 text-white/72 font-bold text-sm">
                {c.hero.floatingStat.label}
              </span>
            </div>
          </div>
        </div>
      </PageHero>

      {/* Summary Cards */}
      <Section containerClassName="grid md:grid-cols-3 gap-6">
        {c.summary.map((item, i) => (
          <AnimateIn key={item.title} delay={i * 0.1}>
            <div className="card-base bg-white shadow-[var(--shadow-medium)] p-6 rounded-2xl">
              <div className="icon-box-lg bg-turquoise-soft text-turquoise-dark mb-5">
                {summaryIcons[i]}
              </div>
              <h3 className="text-xl font-bold mb-3">{item.title}</h3>
              <p className="text-base text-gray leading-relaxed">
                {item.description}
              </p>
            </div>
          </AnimateIn>
        ))}
      </Section>

      {/* Story */}
      <Section containerClassName="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <AnimateIn>
          <MediaFrame
            src={siteContent.images.aboutStoryTeam}
            alt={siteContent.common.imagesAlt.aboutStory}
            elevated
          />
        </AnimateIn>

        <AnimateIn delay={0.15}>
          <SectionTitle
            kicker={c.story.kicker}
            title={c.story.title}
            titleHighlight={c.story.titleHighlight}
          />
          {c.story.paragraphs.map((p, i) => (
            <p key={i} className="text-base text-gray leading-relaxed mb-4">
              {p}
            </p>
          ))}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mt-7">
            {c.story.checks.map((ck) => (
              <div
                key={ck}
                className="flex items-center gap-2.5 p-3.5 rounded-2xl bg-white border border-dark/10 font-extrabold text-sm"
              >
                <Check size={18} className="text-turquoise-dark shrink-0" />
                {ck}
              </div>
            ))}
          </div>
        </AnimateIn>
      </Section>

      {/* Mission & Vision */}
      <Section className="bg-white">
        <SectionHead
          kicker={c.missionVision.kicker}
          title={c.missionVision.title}
          titleHighlight={c.missionVision.titleHighlight}
          description={c.missionVision.description}
        />
        <div className="grid md:grid-cols-2 gap-6">
            {[c.missionVision.vision, c.missionVision.mission].map(
              (item, i) => (
                <AnimateIn key={item.title} delay={i * 0.12}>
                  <div
                    className={`p-10 rounded-2xl h-full ${
                      i === 0
                        ? "card-base bg-light"
                        : "bg-dark text-white rounded-2xl"
                    }`}
                  >
                    <div className="icon-box-lg bg-turquoise text-dark mb-7">
                      {i === 0 ? <Eye size={28} /> : <Flag size={28} />}
                    </div>
                    <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                    <p
                      className={`text-base leading-relaxed mb-6 ${
                        i === 0 ? "text-gray" : "text-white/68"
                      }`}
                    >
                      {item.description}
                    </p>
                    <ul className="grid gap-3">
                      {item.items.map((li) => (
                        <li
                          key={li}
                          className="flex items-center gap-2.5 font-extrabold"
                        >
                          <ArrowRight
                            size={16}
                            className={
                              i === 0
                                ? "text-turquoise-dark"
                                : "text-turquoise"
                            }
                          />
                          {li}
                        </li>
                      ))}
                    </ul>
                  </div>
                </AnimateIn>
              )
            )}
        </div>
      </Section>

      {/* Values */}
      <section className="section-padding bg-dark text-white relative overflow-hidden">
        <div className="absolute -right-32 -top-32 w-[420px] h-[420px] rounded-full bg-turquoise/16 blur-sm" />
        <div className="max-w-[1180px] mx-auto px-5 relative z-10">
          <SectionHead
            kicker={c.values.kicker}
            title={c.values.title}
            titleHighlight={c.values.titleHighlight}
            light
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {c.values.items.map((val, i) => (
              <AnimateIn key={val.title} delay={i * 0.1}>
                <div className="card-dark rounded-2xl p-7">
                  <span className="absolute right-6 top-5 text-white/12 text-5xl font-black">
                    {val.number}
                  </span>
                  <div className="icon-box-lg bg-turquoise text-dark mb-7">
                    {valueIcons[i]}
                  </div>
                  <h3 className="text-xl font-bold mb-3.5">{val.title}</h3>
                  <p className="text-base text-white/68 leading-relaxed">
                    {val.description}
                  </p>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* Approach */}
      <Section
        className="bg-white"
        containerClassName="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center"
      >
        <AnimateIn>
          <SectionTitle
            kicker={c.approach.kicker}
            title={c.approach.title}
            titleHighlight={c.approach.titleHighlight}
            description={c.approach.description}
          />
          <ProgressList items={c.approach.progress} />
        </AnimateIn>
        <AnimateIn delay={0.15}>
          <MediaFrame
            src={siteContent.images.aboutSite}
            alt={siteContent.common.imagesAlt.aboutApproach}
            elevated
          />
        </AnimateIn>
      </Section>

      <TimelineSection
        kicker={c.timeline.kicker}
        title={c.timeline.title}
        titleHighlight={c.timeline.titleHighlight}
        steps={c.timeline.steps}
      />

      <NumbersSection numbers={c.numbers} />

      {/* Why Us */}
      <Section containerClassName="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <AnimateIn>
          <MediaFrame
            src={siteContent.images.aboutBlueprint}
            alt={siteContent.common.imagesAlt.aboutWhyUs}
            elevated
          />
        </AnimateIn>
        <AnimateIn delay={0.15}>
          <SectionTitle
            kicker={c.whyUs.kicker}
            title={c.whyUs.title}
            titleHighlight={c.whyUs.titleHighlight}
            description={c.whyUs.description}
          />
          <div className="grid gap-5">
            {c.whyUs.items.map((item) => (
              <div key={item.title} className="flex gap-4 items-start">
                <CircleCheck
                  size={24}
                  className="text-turquoise-dark mt-0.5 shrink-0"
                />
                <div>
                  <strong className="block mb-1">{item.title}</strong>
                  <p className="text-base text-gray leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </AnimateIn>
      </Section>

      <CtaSection
        kicker={c.cta.kicker}
        title={c.cta.title}
        description={c.cta.description}
        variant="dark"
      />
    </>
  );
}
