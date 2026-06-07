"use client";

import { siteContent } from "@/content/siteContent";
import { AnimateIn } from "@/components/AnimateIn";
import { SectionHead } from "@/components/SectionHead";
import { FaqSection } from "@/components/FaqSection";
import { CtaSection } from "@/components/CtaSection";
import { Section } from "@/components/Section";
import { SectionTitle } from "@/components/SectionTitle";
import { useState } from "react";
import { Phone, MessageCircle, Mail, MapPin, FileText, Zap, Send, Factory, Building, Paintbrush } from "lucide-react";

const c = siteContent.iletisim;
const contact = siteContent.contact;
const L = c.form.labels;

const inputClass = "w-full border border-dark/10 rounded-xl bg-white h-12 px-4 text-sm outline-none focus:border-turquoise-dark focus:ring-2 focus:ring-turquoise/10 transition-all";

const channelIcons = {
  phone: <Phone size={22} />,
  whatsapp: <MessageCircle size={22} />,
  email: <Mail size={22} />,
  location: <MapPin size={22} />,
};

const radarIcons = [
  <Factory key="0" size={18} />,
  <Building key="1" size={18} />,
  <Paintbrush key="2" size={18} />,
];

export function IletisimPageClient() {
  const [selectedService, setSelectedService] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    city: "",
    area: "",
    budget: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `${L.whatsappIntro} ${formData.name}.
${L.summary.phone}: ${formData.phone}
${L.summary.email}: ${formData.email}
${L.summary.city}: ${formData.city}
${L.summary.service}: ${selectedService}
${L.summary.area}: ${formData.area}
${L.summary.budget}: ${formData.budget}
${L.detail}: ${formData.message}`;
    window.open(
      `https://wa.me/${contact.whatsappNumber}?text=${encodeURIComponent(text)}`,
      "_blank"
    );
  };

  const filledFields = [
    formData.name.trim(),
    formData.phone.trim(),
    selectedService,
    formData.email.trim(),
    formData.city.trim(),
    formData.area,
    formData.budget,
    formData.message.trim(),
  ];
  const totalFields = filledFields.length;
  const filledCount = filledFields.filter(Boolean).length;
  const progressPercent = Math.round((filledCount / totalFields) * 100);

  const updateField = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden py-24 md:py-28 bg-gradient-to-br from-light via-white to-[#eefafa]">
        <div className="max-w-[1180px] mx-auto px-5 relative z-10 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <AnimateIn>
            <span className="kicker">
              {c.hero.kicker}
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tight mb-6">
              {c.hero.title} <span className="text-turquoise-dark">{c.hero.titleHighlight}</span>
            </h1>
            <p className="max-w-[650px] text-base text-gray leading-relaxed mb-8">{c.hero.description}</p>
            <div className="flex gap-3 flex-wrap">
              <a href="#iletisim-formu" className="btn-base btn-primary btn-lg">
                {c.hero.fillButton}
              </a>
              <a href={contact.whatsappHref} target="_blank" className="btn-base btn-secondary btn-lg">
                {c.hero.whatsappButton}
              </a>
            </div>
          </AnimateIn>

          <AnimateIn delay={0.15}>
            <div className="card-base bg-white shadow-[var(--shadow-medium)] p-6">
              <div className="flex items-center gap-2 mb-4">
                <MapPin size={20} className="text-turquoise-dark" />
                <strong className="text-sm">{c.hero.radarTitle}</strong>
              </div>
              <div className="grid gap-3">
                {c.hero.radar.pins.map((pin, i) => {
                  return (
                    <div key={pin.label} className="flex items-center gap-3 p-3 rounded-xl bg-light">
                      <div className="icon-box bg-turquoise-soft text-turquoise-dark">
                        {radarIcons[i] || <MapPin size={18} />}
                      </div>
                      <span className="text-sm font-bold">{pin.label}</span>
                    </div>
                  );
                })}
                <div className="flex items-center gap-3 p-3 rounded-xl bg-dark text-white">
                  <div className="icon-box bg-turquoise text-dark">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <strong className="block text-sm">{c.hero.radar.center.label}</strong>
                    <span className="text-white/60 text-xs">{c.hero.radar.center.sublabel}</span>
                  </div>
                </div>
              </div>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* Channels */}
      <Section containerClassName="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {c.channels.map((ch, i) => (
          <AnimateIn key={ch.label} delay={i * 0.08}>
            <div className="card-base bg-white shadow-[var(--shadow-medium)] p-6 text-center h-full">
              <div className="icon-box-lg bg-turquoise-soft text-turquoise-dark mx-auto mb-4">
                {channelIcons[ch.type as keyof typeof channelIcons]}
              </div>
              <span className="text-base text-gray leading-relaxed text-sm">{ch.label}</span>
              <strong className="block text-lg my-2">{ch.value}</strong>
              <p className="text-base text-gray leading-relaxed text-sm">{ch.description}</p>
            </div>
          </AnimateIn>
        ))}
      </Section>

      {/* Contact Form */}
      <Section
        id="iletisim-formu"
        containerClassName="grid lg:grid-cols-[1fr_1.2fr] gap-12 lg:gap-16 items-start"
      >
        <AnimateIn>
          <SectionTitle
            kicker={c.form.kicker}
            title={c.form.title}
            titleHighlight={c.form.titleHighlight}
            description={c.form.description}
          />

            {/* Progress */}
            <div className="mb-6">
              <div className="flex justify-between mb-2">
                <strong className="text-sm">{L.progressTitle}</strong>
                <span className="text-turquoise-dark font-bold text-sm">{progressPercent}%</span>
              </div>
              <div className="h-2 rounded-full bg-light overflow-hidden">
                <div className="h-full rounded-full bg-gradient-to-r from-turquoise to-turquoise-dark transition-all" style={{ width: `${progressPercent}%` }} />
              </div>
            </div>

            {/* Live Summary */}
            <div className="card-base bg-light p-5">
              <div className="flex items-center gap-2 mb-4">
                <FileText size={18} className="text-turquoise-dark" />
                <strong className="text-sm">{L.summaryTitle}</strong>
              </div>
              <div className="grid gap-3 text-sm">
                {[
                  { label: L.summary.name, value: formData.name },
                  { label: L.summary.phone, value: formData.phone },
                  { label: L.summary.email, value: formData.email },
                  { label: L.summary.city, value: formData.city },
                  { label: L.summary.service, value: selectedService },
                  { label: L.summary.area, value: formData.area },
                  { label: L.summary.budget, value: formData.budget },
                ].map((item) => (
                  <div key={item.label} className="flex justify-between">
                    <span className="text-gray">{item.label}</span>
                    <strong className={item.value ? "text-dark" : "text-dark/30"}>
                      {item.value || L.notProvided}
                    </strong>
                  </div>
                ))}
              </div>
            </div>
        </AnimateIn>

        <AnimateIn delay={0.15}>
            <form onSubmit={handleSubmit} className="rounded-2xl bg-white border border-dark/10 shadow-[var(--shadow-medium)] p-6 md:p-8">
              <div className="grid sm:grid-cols-2 gap-4 mb-4">
                <div className="grid gap-2">
                  <label className="font-black text-sm">{L.name}</label>
                  <input
                    type="text" placeholder={L.namePlaceholder} required
                    value={formData.name}
                    onChange={(e) => updateField("name", e.target.value)}
                    className={inputClass}
                  />
                </div>
                <div className="grid gap-2">
                  <label className="font-black text-sm">{L.phone}</label>
                  <input
                    type="tel" placeholder={L.phonePlaceholder} required
                    value={formData.phone}
                    onChange={(e) => updateField("phone", e.target.value)}
                    className={inputClass}
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4 mb-4">
                <div className="grid gap-2">
                  <label className="font-black text-sm">{L.email}</label>
                  <input
                    type="email" placeholder={L.emailPlaceholder}
                    value={formData.email}
                    onChange={(e) => updateField("email", e.target.value)}
                    className={inputClass}
                  />
                </div>
                <div className="grid gap-2">
                  <label className="font-black text-sm">{L.city}</label>
                  <input
                    type="text" placeholder={L.cityPlaceholder}
                    value={formData.city}
                    onChange={(e) => updateField("city", e.target.value)}
                    className={inputClass}
                  />
                </div>
              </div>

              <div className="grid gap-2 mb-4">
                <label className="font-black text-sm">{L.service}</label>
                <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
                  {c.form.serviceOptions.map((opt) => (
                    <button
                      key={opt.value}
                      type="button"
                      onClick={() => setSelectedService(opt.value)}
                      className={`btn-base btn-sm rounded-xl transition cursor-pointer ${
                        selectedService === opt.value
                          ? "bg-turquoise text-dark"
                          : "bg-light border border-dark/10 hover:border-turquoise"
                      }`}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4 mb-4">
                <div className="grid gap-2">
                  <label className="font-black text-sm">{L.area}</label>
                  <select
                    value={formData.area}
                    onChange={(e) => updateField("area", e.target.value)}
                    className={inputClass}
                  >
                    <option value="">{L.select}</option>
                    {c.form.areaOptions.map((opt) => (
                      <option key={opt} value={opt}>{opt}</option>
                    ))}
                  </select>
                </div>
                <div className="grid gap-2">
                  <label className="font-black text-sm">{L.budget}</label>
                  <select
                    value={formData.budget}
                    onChange={(e) => updateField("budget", e.target.value)}
                    className={inputClass}
                  >
                    <option value="">{L.select}</option>
                    {c.form.budgetOptions.map((opt) => (
                      <option key={opt} value={opt}>{opt}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="grid gap-2 mb-6">
                <label className="font-black text-sm">{L.detail}</label>
                <textarea
                  rows={5} placeholder={L.detailPlaceholder}
                  value={formData.message}
                  onChange={(e) => updateField("message", e.target.value)}
                  className="w-full border border-dark/10 rounded-xl bg-white p-4 text-sm outline-none focus:border-turquoise-dark focus:ring-2 focus:ring-turquoise/10 transition-all resize-y"
                />
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  type="submit"
                  className="btn-base btn-primary btn-lg flex-1"
                >
                  <Send size={16} />
                  {L.submit}
                </button>
                <a
                  href={contact.emailHref}
                  className="btn-base btn-secondary btn-lg"
                >
                  <Mail size={16} /> {L.mailButton}
                </a>
              </div>
            </form>
        </AnimateIn>
      </Section>

      {/* Working Hours */}
      <Section
        className="bg-white"
        containerClassName="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center"
      >
        <AnimateIn>
          <div className="rounded-2xl overflow-hidden aspect-[4/3] shadow-[var(--shadow-medium)]">
            <iframe
              src={contact.mapEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title={siteContent.common.imagesAlt.mapTitle}
            />
          </div>
        </AnimateIn>

        <AnimateIn delay={0.15}>
          <SectionTitle
            kicker={c.workingHours.kicker}
            title={c.workingHours.title}
            titleHighlight={c.workingHours.titleHighlight}
            description={c.workingHours.description}
          />
            <div className="grid gap-3 mb-8">
              {c.workingHours.hours.map((h) => (
                <div key={h.day} className="flex justify-between p-4 rounded-2xl bg-light border border-dark/10">
                  <span className="text-gray">{h.day}</span>
                  <strong>{h.time}</strong>
                </div>
              ))}
            </div>
            <div className="flex items-start gap-3 p-5 rounded-2xl bg-turquoise-soft border border-turquoise/20">
              <Zap size={20} className="text-turquoise-dark mt-0.5 shrink-0" />
              <div>
                <strong className="block text-sm mb-1">{c.workingHours.responseNote.title}</strong>
                <span className="text-base text-gray leading-relaxed text-sm">{c.workingHours.responseNote.text}</span>
              </div>
            </div>
        </AnimateIn>
      </Section>

      {/* Contact Flow */}
      <section className="section-padding bg-dark text-white relative overflow-hidden">
        <div className="absolute -right-32 -top-32 w-[420px] h-[420px] rounded-full bg-turquoise/16 blur-sm" />
        <div className="max-w-[1180px] mx-auto px-5 relative z-10">
          <SectionHead
            kicker={c.contactFlow.kicker}
            title={c.contactFlow.title}
            titleHighlight={c.contactFlow.titleHighlight}
            light
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {c.contactFlow.steps.map((step, i) => (
              <AnimateIn key={step.title} delay={i * 0.1}>
                <div className="card-dark p-6 min-h-[260px]">
                  <div className="icon-box bg-turquoise text-dark font-black mb-6">
                    {step.number}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                  <p className="text-white/68 leading-relaxed">{step.description}</p>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      <FaqSection
        kicker={c.faq.kicker}
        title={c.faq.title}
        titleHighlight={c.faq.titleHighlight}
        description={c.faq.description}
        items={c.faq.items}
      />

      <CtaSection kicker={c.cta.kicker} title={c.cta.title} description={c.cta.description} variant="dark" />
    </>
  );
}
