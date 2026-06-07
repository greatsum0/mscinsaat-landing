import { SectionHead } from "./SectionHead";
import { AnimateIn } from "./AnimateIn";

interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

interface ProcessSectionProps {
  id?: string;
  kicker: string;
  title: string;
  titleHighlight: string;
  steps: ProcessStep[];
  dark?: boolean;
}

export function ProcessSection({
  id,
  kicker,
  title,
  titleHighlight,
  steps,
  dark = false,
}: ProcessSectionProps) {
  return (
    <section
      id={id}
      className={`section-padding relative overflow-hidden ${id ? "scroll-mt-24" : ""} ${
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
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {steps.map((step, i) => (
            <AnimateIn key={step.number} delay={i * 0.1}>
              <div
                className={`p-6 rounded-2xl ${
                  dark
                    ? "card-dark"
                    : "card-base bg-white shadow-[var(--shadow-medium)]"
                }`}
              >
                <span className="icon-box bg-turquoise text-dark font-black mb-6 inline-grid">
                  {step.number}
                </span>
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className={`text-base leading-relaxed ${dark ? "text-white/68" : "text-gray"}`}>
                  {step.description}
                </p>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
