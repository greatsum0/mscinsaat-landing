interface SectionHeadProps {
  kicker: string;
  title: string;
  titleHighlight: string;
  description?: string;
  light?: boolean;
  className?: string;
}

export function SectionHead({
  kicker,
  title,
  titleHighlight,
  description,
  light,
  className = "",
}: SectionHeadProps) {
  return (
    <div
      className={`max-w-[760px] mx-auto text-center mb-14 ${
        light ? "text-white" : ""
      } ${className}`}
    >
      <span className={`kicker ${light ? "kicker-light" : ""}`}>
        {kicker}
      </span>
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-black leading-[1.08] tracking-tight mb-5">
        {title} <span className="text-turquoise">{titleHighlight}</span>
      </h2>
      {description && (
        <p className={`text-base leading-relaxed ${light ? "text-white/68" : "text-gray"}`}>
          {description}
        </p>
      )}
    </div>
  );
}
