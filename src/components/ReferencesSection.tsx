import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Section } from "./Section";
import { SectionHead } from "./SectionHead";

interface ReferenceItem {
  key: string;
  displayName: string;
  imageUrl: string;
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

// Statik logo bulutu (çerçevesiz): logolar grayscale + soluk, hover'da
// renklenir. Varsayılan olarak ilk 8 logo (4'lü iki sıra) gösterilir; daha
// fazla referans varsa altta "Tümünü Gör" butonu çıkar. Marquee/hareket yok.
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

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-10 gap-y-12 items-center">
        {visible.map((ref) => (
          <div key={ref.key} className="group relative h-10 sm:h-12">
            <Image
              src={ref.imageUrl}
              alt={ref.displayName}
              fill
              sizes="(max-width: 1024px) 50vw, 25vw"
              className="object-contain grayscale opacity-55 mix-blend-multiply transition duration-300 group-hover:grayscale-0 group-hover:opacity-100"
            />
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
