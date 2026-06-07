"use client";

interface MarqueeSectionProps {
  items: string[];
}

export function MarqueeSection({ items }: MarqueeSectionProps) {
  return (
    <section className="bg-turquoise text-dark py-5 marquee">
      <div className="marquee-inner">
        {items.map((item, i) => (
          <span key={i} className="inline-flex items-center gap-8 shrink-0">
            <span className="text-2xl font-black tracking-tight">{item}</span>
            <span className="text-xs opacity-40">+</span>
          </span>
        ))}
      </div>
    </section>
  );
}
