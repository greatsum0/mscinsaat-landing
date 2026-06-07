import type { ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  className?: string;
  containerClassName?: string;
  id?: string;
}

export function Section({
  children,
  className = "",
  containerClassName = "",
  id,
}: SectionProps) {
  return (
    <section id={id} className={`section-padding ${className}`}>
      <div className={`max-w-[1180px] mx-auto px-5 ${containerClassName}`}>
        {children}
      </div>
    </section>
  );
}

