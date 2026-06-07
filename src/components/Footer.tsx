import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin } from "lucide-react";
import { siteContent } from "@/content/siteContent";

function IconInstagram() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><circle cx="12" cy="12" r="5" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function IconFacebook() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function IconLinkedin() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function IconYoutube() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" /><path d="m10 15 5-3-5-3z" />
    </svg>
  );
}

const socialIcons: Record<string, React.ReactNode> = {
  Instagram: <IconInstagram />,
  Facebook: <IconFacebook />,
  LinkedIn: <IconLinkedin />,
  YouTube: <IconYoutube />,
};

export function Footer() {
  const { brand, contact, nav, footerServices, footer, social } = siteContent;

  return (
    <footer className="bg-dark text-white pt-20">
      <div className="max-w-[1180px] mx-auto px-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-16">
        <div>
          <Link href="/" className="inline-block mb-5" aria-label={nav.homeAriaLabel}>
            <Image src={siteContent.images.logoWhite} alt={siteContent.common.imagesAlt.logo} width={654} height={382} unoptimized className="h-auto w-[140px] object-contain" />
          </Link>
          <p className="text-white/65 leading-relaxed mb-5 max-w-[420px]">
            {brand.footerDescription}
          </p>
          <div className="flex gap-3">
            {social.map((s) => (
              <a
                key={s.label}
                href={s.href}
                aria-label={s.label}
                className="w-[42px] h-[42px] rounded-xl grid place-items-center bg-white/8 text-turquoise hover:bg-turquoise hover:text-dark transition hover:-translate-y-1"
              >
                {socialIcons[s.label]}
              </a>
            ))}
          </div>
        </div>

        <div className="grid content-start gap-3">
          <h3 className="text-lg font-bold mb-2">{footer.menuTitle}</h3>
          {nav.links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-white/65 hover:text-turquoise transition hover:translate-x-1"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="grid content-start gap-3">
          <h3 className="text-lg font-bold mb-2">{footer.servicesTitle}</h3>
          {footerServices.map((s) => (
            <Link
              key={s}
              href="/hizmetlerimiz"
              className="text-white/65 hover:text-turquoise transition hover:translate-x-1"
            >
              {s}
            </Link>
          ))}
        </div>

        <div className="grid content-start gap-3">
          <h3 className="text-lg font-bold mb-2">{footer.contactTitle}</h3>
          <a
            href={contact.phoneHref}
            className="text-white/65 hover:text-turquoise transition flex items-center gap-2"
          >
            <Phone size={16} className="text-turquoise shrink-0" />
            {contact.phone}
          </a>
          <a
            href={contact.emailHref}
            className="text-white/65 hover:text-turquoise transition flex items-center gap-2"
          >
            <Mail size={16} className="text-turquoise shrink-0" />
            {contact.email}
          </a>
          <span className="text-white/65 flex items-center gap-2">
            <MapPin size={16} className="text-turquoise shrink-0" />
            {contact.location}
          </span>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-[1180px] mx-auto px-5 min-h-[74px] flex flex-col sm:flex-row justify-between items-center gap-3 text-white/55">
          <p>{brand.copyright}</p>
          <p>{brand.slogan}</p>
        </div>
      </div>
    </footer>
  );
}
