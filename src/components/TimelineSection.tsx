import { SectionHead } from "./SectionHead";
import { AnimateIn } from "./AnimateIn";

interface TimelineStep {
  number: string;
  title: string;
  description: string;
}

interface TimelineSectionProps {
  kicker: string;
  title: string;
  titleHighlight: string;
  steps: TimelineStep[];
  dark?: boolean;
}

export function TimelineSection({
  kicker,
  title,
  titleHighlight,
  steps,
  dark = false,
}: TimelineSectionProps) {
  return (
    <section
      className={`section-padding relative overflow-hidden ${
        dark ? "bg-dark text-white" : "bg-light"
      }`}
    >
      {dark && (
        <div className="absolute -right-32 -top-32 w-[420px] h-[420px] rounded-full bg-turquoise/16 blur-sm" />
      )}
      <div className="max-w-[1180px] mx-auto px-5 relative z-10">
        <SectionHead
          kicker={kicker}
          title={title}
          titleHighlight={titleHighlight}
          light={dark}
        />

        <ol className="relative max-w-[760px] mx-auto">
          {/* connecting rail */}
          <span
            aria-hidden
            className={`absolute left-6 top-4 bottom-4 w-px ${
              dark ? "bg-white/15" : "bg-dark/10"
            }`}
          />

          {steps.map((step, i) => (
            <li key={step.number} className="relative flex gap-6 pb-10 last:pb-0">
              <AnimateIn delay={i * 0.1} className="relative z-10 shrink-0">
                <span className="icon-box bg-turquoise text-dark font-black inline-grid">
                  {step.number}
                </span>
              </AnimateIn>
              <AnimateIn delay={i * 0.1 + 0.05} className="flex-1">
                <div
                  className={`p-6 rounded-2xl ${
                    dark
                      ? "card-dark"
                      : "card-base bg-white shadow-[var(--shadow-medium)]"
                  }`}
                >
                  <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                  <p
                    className={`text-base leading-relaxed ${
                      dark ? "text-white/68" : "text-gray"
                    }`}
                  >
                    {step.description}
                  </p>
                </div>
              </AnimateIn>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
