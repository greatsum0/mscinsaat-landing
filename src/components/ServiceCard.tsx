import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  image: string;
  imageHeight?: string;
  number: string;
  ctaHref: string;
  ctaLabel: string;
  tags?: string[];
}

export function ServiceCard({
  title,
  description,
  image,
  imageHeight = "h-48",
  number,
  ctaHref,
  ctaLabel,
  tags,
}: ServiceCardProps) {
  return (
    <div className="card-base bg-white shadow-[var(--shadow-medium)] overflow-hidden h-full flex flex-col">
      <div className={`${imageHeight} relative overflow-hidden`}>
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-dark/30" />
        <span className="absolute bottom-4 left-5 text-white/40 text-5xl font-black">
          {number}
        </span>
      </div>
      <div className="p-6 flex flex-col flex-1">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-base text-gray leading-relaxed mb-5 flex-1">
          {description}
        </p>
        {tags && (
          <div className="flex flex-wrap gap-2 mb-5">
            {tags.map((tag) => (
              <span
                key={tag}
                className="px-2 py-1 rounded-lg bg-turquoise-soft text-turquoise-dark text-xs font-bold"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
        <Link
          href={ctaHref}
          className="text-turquoise-dark font-bold text-sm inline-flex items-center gap-1.5 hover:gap-2.5 transition-all"
        >
          {ctaLabel} <ArrowRight size={14} />
        </Link>
      </div>
    </div>
  );
}
