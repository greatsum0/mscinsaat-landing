"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Menu, X, ArrowRight, MapPin, Clock, Phone, Mail } from "lucide-react";
import { siteContent } from "@/content/siteContent";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <div className="bg-dark text-white/80 text-[13px] hidden lg:block">
        <div className="max-w-[1180px] mx-auto px-5 min-h-[42px] flex justify-between items-center">
          <div className="flex items-center gap-5">
            <span className="flex items-center gap-1.5">
              <MapPin size={13} className="text-turquoise" />
              {siteContent.contact.topbarLeft}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock size={13} className="text-turquoise" />
              {siteContent.contact.workingHours}
            </span>
          </div>
          <div className="flex items-center gap-5">
            <a href={siteContent.contact.phoneHref} className="hover:text-turquoise transition flex items-center gap-1.5">
              <Phone size={13} className="text-turquoise" />
              {siteContent.contact.phone}
            </a>
            <a href={siteContent.contact.emailHref} className="hover:text-turquoise transition flex items-center gap-1.5">
              <Mail size={13} className="text-turquoise" />
              {siteContent.contact.email}
            </a>
          </div>
        </div>
      </div>

      <header
        className={`sticky top-0 z-50 bg-light/80 backdrop-blur-xl border-b border-dark/8 transition-shadow ${
          scrolled ? "shadow-lg shadow-dark/8" : ""
        }`}
      >
        <div className="max-w-[1180px] mx-auto px-5 min-h-[82px] flex items-center justify-between gap-6">
          <Link href="/" aria-label={siteContent.nav.homeAriaLabel}>
            <Image src={siteContent.images.logo} alt={siteContent.common.imagesAlt.logo} width={608} height={354} unoptimized className="h-auto w-[130px] lg:w-[150px] object-contain" priority />
          </Link>

          <nav className="hidden lg:flex items-center gap-7">
            {siteContent.nav.links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-extrabold transition relative pb-1 ${
                  pathname === link.href
                    ? "text-turquoise-dark after:absolute after:bottom-0 after:left-0 after:w-full after:h-[3px] after:rounded-full after:bg-turquoise"
                    : "text-dark-2 hover:text-turquoise-dark"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Link
              href="/iletisim"
              className="hidden lg:inline-flex items-center gap-2 h-11 px-5 rounded-xl bg-gradient-to-br from-turquoise to-turquoise-dark text-dark font-extrabold text-sm shadow-lg shadow-turquoise/25 hover:-translate-y-1 transition"
            >
              {siteContent.nav.ctaLabel}
              <ArrowRight size={16} />
            </Link>
            <button
              onClick={() => setOpen(!open)}
              className="lg:hidden w-12 h-12 rounded-2xl bg-dark text-white grid place-items-center"
              aria-label={siteContent.nav.mobileToggleLabel}
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {open && (
          <nav className="lg:hidden absolute left-5 right-5 top-[86px] bg-white border border-dark/10 rounded-3xl p-3 shadow-2xl z-50">
            {siteContent.nav.links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`block px-4 py-3.5 rounded-xl font-extrabold text-sm transition ${
                  pathname === link.href
                    ? "bg-turquoise-soft text-turquoise-dark"
                    : "hover:bg-turquoise-soft"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        )}
      </header>
    </>
  );
}
