interface SectionTitleProps {
  kicker: string;
  title: string;
  titleHighlight: string;
  description?: string;
  highlightClassName?: string;
}

export function SectionTitle({
  kicker,
  title,
  titleHighlight,
  description,
  highlightClassName = "text-turquoise",
}: SectionTitleProps) {
  return (
    <>
      <span className="kicker">{kicker}</span>
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tight mb-5">
        {title} <span className={highlightClassName}>{titleHighlight}</span>
      </h2>
      {description && (
        <p className="text-base text-gray leading-relaxed mb-8">
          {description}
        </p>
      )}
    </>
  );
}

