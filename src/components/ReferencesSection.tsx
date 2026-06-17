import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Section } from "./Section";
import { SectionHead } from "./SectionHead";

interface ReferenceItem {
  key: string;
  displayName: string;
  subtitle: string;
}

interface ReferencesSectionProps {
  kicker: string;
  title: string;
  titleHighlight: string;
  description?: string;
  ctaLabel?: string;
  ctaHref?: string;
  items: ReferenceItem[];
  // showAll: tüm logoları göster ve "Tümünü Gör" butonunu gizle.
  // Adanmış referanslar sayfasında buton kendi sayfasına döndüğü için kullanılır.
  showAll?: boolean;
  // Bölüm arka planı. Beyaza fade olan bir hero'nun hemen altındayken
  // ayrışsın diye "bg-light" geçilebilir.
  className?: string;
}

// Referans kartları: her kart kurum adı (title) ve yapılan işi anlatan bir alt
// başlık (subtitle) içerir; görsel yoktur. Varsayılan olarak ilk 8 kart
// gösterilir; daha fazla referans varsa altta "Tümünü Gör" butonu çıkar.
const VISIBLE_COUNT = 8;

export function ReferencesSection({
  kicker,
  title,
  titleHighlight,
  description,
  ctaLabel,
  ctaHref,
  items,
  showAll = false,
  className = "bg-white",
}: ReferencesSectionProps) {
  const visible = showAll ? items : items.slice(0, VISIBLE_COUNT);
  const hasMore = !showAll && items.length > VISIBLE_COUNT;

  return (
    <Section className={className}>
      <SectionHead
        kicker={kicker}
        title={title}
        titleHighlight={titleHighlight}
        description={description}
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {visible.map((ref) => (
          <div
            key={ref.key}
            className="card-base bg-white shadow-[var(--shadow-medium)] p-6"
          >
            <strong className="block text-lg leading-snug">{ref.displayName}</strong>
            <p className="text-sm text-gray leading-relaxed mt-2">{ref.subtitle}</p>
          </div>
        ))}
      </div>

      {hasMore && ctaHref && (
        <div className="flex justify-center mt-10">
          <Link href={ctaHref} className="btn-base btn-secondary btn-lg">
            {ctaLabel}
            <ArrowRight size={16} />
          </Link>
        </div>
      )}
    </Section>
  );
}
