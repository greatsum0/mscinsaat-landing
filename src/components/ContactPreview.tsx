"use client";

import { Phone, Mail, MapPin, Send } from "lucide-react";
import { siteContent } from "@/content/siteContent";
import { AnimateIn } from "./AnimateIn";

const c = siteContent.home.contactPreview;
const contact = siteContent.contact;

const inputClass = "w-full border border-dark/10 rounded-xl bg-white h-12 px-4 text-sm outline-none focus:border-turquoise-dark focus:ring-2 focus:ring-turquoise/10 transition-all";

export function ContactPreview() {
  return (
    <section className="section-padding bg-white">
      <div className="max-w-[1180px] mx-auto px-5 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <AnimateIn>
          <span className="kicker">{c.kicker}</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black leading-[1.08] tracking-tight mb-5">
            {c.title}{" "}
            <span className="text-turquoise">{c.titleHighlight}</span>
          </h2>
          <p className="text-base text-gray leading-relaxed mb-8">{c.description}</p>

          <div className="grid gap-4">
            <a href={contact.phoneHref} className="flex items-center gap-3 font-bold text-sm">
              <span className="icon-box bg-turquoise-soft text-turquoise-dark">
                <Phone size={18} />
              </span>
              {contact.phone}
            </a>
            <a href={contact.emailHref} className="flex items-center gap-3 font-bold text-sm">
              <span className="icon-box bg-turquoise-soft text-turquoise-dark">
                <Mail size={18} />
              </span>
              {contact.email}
            </a>
            <span className="flex items-center gap-3 font-bold text-sm">
              <span className="icon-box bg-turquoise-soft text-turquoise-dark">
                <MapPin size={18} />
              </span>
              {contact.location}
            </span>
          </div>
        </AnimateIn>

        <AnimateIn delay={0.15}>
          <form
            className="card-base p-6 md:p-8 bg-light shadow-[var(--shadow-medium)]"
            onSubmit={(e) => {
              e.preventDefault();
              const formData = new FormData(e.currentTarget);
              const name = formData.get("name") as string;
              const phone = formData.get("phone") as string;
              const service = formData.get("service") as string;
              const message = formData.get("message") as string;
              const text = `Merhaba, ben ${name}. Telefon: ${phone}. Hizmet: ${service}. Mesaj: ${message}`;
              window.open(
                `https://wa.me/${contact.whatsappNumber}?text=${encodeURIComponent(text)}`,
                "_blank"
              );
            }}
          >
            <div className="grid gap-4 mb-5">
              <div className="grid gap-1.5">
                <label className="font-bold text-sm">{c.form.nameLabel}</label>
                <input name="name" type="text" placeholder={c.form.namePlaceholder} required className={inputClass} />
              </div>
              <div className="grid gap-1.5">
                <label className="font-bold text-sm">{c.form.phoneLabel}</label>
                <input name="phone" type="tel" placeholder={c.form.phonePlaceholder} required className={inputClass} />
              </div>
              <div className="grid gap-1.5">
                <label className="font-bold text-sm">{c.form.serviceLabel}</label>
                <select name="service" required className={inputClass}>
                  <option value="">{c.form.selectPlaceholder}</option>
                  {c.formServiceOptions.map((opt) => (
                    <option key={opt}>{opt}</option>
                  ))}
                </select>
              </div>
              <div className="grid gap-1.5">
                <label className="font-bold text-sm">{c.form.messageLabel}</label>
                <textarea
                  name="message"
                  rows={4}
                  placeholder={c.form.messagePlaceholder}
                  className="w-full border border-dark/10 rounded-xl bg-white p-4 text-sm outline-none focus:border-turquoise-dark focus:ring-2 focus:ring-turquoise/10 transition-all resize-y"
                />
              </div>
            </div>
            <button type="submit" className="btn-base btn-primary btn-lg w-full cursor-pointer">
              {c.form.submitLabel}
              <Send size={16} />
            </button>
          </form>
        </AnimateIn>
      </div>
    </section>
  );
}
