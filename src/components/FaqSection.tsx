"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { Plus } from "lucide-react";
import { AnimateIn } from "./AnimateIn";

interface FaqItem {
  question: string;
  answer: string;
}

interface FaqSectionProps {
  kicker: string;
  title: string;
  titleHighlight: string;
  description?: string;
  items: FaqItem[];
}

function FaqAccordionItem({
  item,
  isActive,
  onToggle,
}: {
  item: FaqItem;
  isActive: boolean;
  onToggle: () => void;
}) {
  const contentRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  const measure = useCallback(() => {
    if (contentRef.current) {
      setHeight(contentRef.current.scrollHeight);
    }
  }, []);

  useEffect(() => {
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [measure]);

  return (
    <div className="rounded-[22px] bg-white border border-dark/10 overflow-hidden">
      <button
        onClick={onToggle}
        className="w-full px-6 py-5 text-left text-[17px] font-black flex justify-between items-center gap-4 cursor-pointer"
      >
        {item.question}
        <Plus
          size={20}
          className={`text-turquoise-dark transition-transform duration-300 shrink-0 ${
            isActive ? "rotate-45" : ""
          }`}
        />
      </button>
      <div
        className="overflow-hidden transition-[height] duration-300 ease-in-out"
        style={{ height: isActive ? height : 0 }}
      >
        <div ref={contentRef}>
          <p className="px-6 pb-5 text-gray leading-relaxed">
            {item.answer}
          </p>
        </div>
      </div>
    </div>
  );
}

export function FaqSection({
  kicker,
  title,
  titleHighlight,
  description,
  items,
}: FaqSectionProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="py-28">
      <div className="max-w-[1180px] mx-auto px-5 grid lg:grid-cols-2 gap-16 items-start">
        <AnimateIn>
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-turquoise-soft text-turquoise-dark text-[13px] font-black mb-5">
            {kicker}
          </span>
          <h2 className="text-4xl md:text-5xl font-black leading-[1.08] tracking-tight mb-5">
            {title} <span className="text-turquoise">{titleHighlight}</span>
          </h2>
          {description && (
            <p className="text-gray leading-relaxed">{description}</p>
          )}
        </AnimateIn>

        <AnimateIn delay={0.15}>
          <div className="grid gap-3.5">
            {items.map((item, i) => (
              <FaqAccordionItem
                key={i}
                item={item}
                isActive={activeIndex === i}
                onToggle={() => setActiveIndex(activeIndex === i ? -1 : i)}
              />
            ))}
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
