import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import { AnimateIn } from "./AnimateIn";
import { siteContent } from "@/content/siteContent";

interface CtaSectionProps {
  kicker: string;
  title: string;
  description: string;
  variant?: "gradient" | "dark";
}

export function CtaSection({
  kicker,
  title,
  description,
  variant = "gradient",
}: CtaSectionProps) {
  const isGradient = variant === "gradient";

  return (
    <section className={`py-5 ${isGradient ? "pb-28" : "py-20"}`}>
      <AnimateIn>
        <div className="max-w-[1180px] mx-auto px-5">
          <div
            className={`rounded-2xl p-10 md:p-12 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 ${
              isGradient
                ? "bg-gradient-to-br from-turquoise to-[#dffdfa] shadow-2xl shadow-turquoise/25"
                : "bg-dark text-white"
            }`}
          >
            <div>
              <span
                className={`kicker ${
                  isGradient
                    ? "bg-dark/8 text-dark"
                    : "kicker-light"
                }`}
              >
                {kicker}
              </span>
              <h2
                className={`text-3xl md:text-4xl lg:text-5xl font-black leading-[1.08] tracking-tight mb-3 max-w-[780px] ${
                  isGradient ? "text-dark" : ""
                }`}
              >
                {title}
              </h2>
              <p className={`text-base ${isGradient ? "text-dark/72 font-bold" : "text-white/70"}`}>
                {description}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 shrink-0">
              <Link
                href={siteContent.common.ctas.quote.href}
                className={`btn-base btn-lg ${
                  isGradient
                    ? "btn-dark"
                    : "btn-primary"
                }`}
              >
                {siteContent.common.ctas.quote.label}
                <ArrowRight size={18} />
              </Link>
              <a
                href={siteContent.contact.phoneHref}
                className={`btn-base btn-lg ${
                  isGradient
                    ? "btn-secondary"
                    : "bg-white text-dark hover:bg-white/90"
                }`}
              >
                {siteContent.common.ctas.call}
                <Phone size={18} />
              </a>
            </div>
          </div>
        </div>
      </AnimateIn>
    </section>
  );
}
