import { AnimateIn } from "./AnimateIn";
import { CountUp } from "./CountUp";
import { Section } from "./Section";

interface NumberItem {
  value: number;
  label: string;
}

interface NumbersSectionProps {
  numbers: NumberItem[];
}

export function NumbersSection({ numbers }: NumbersSectionProps) {
  return (
    <Section className="bg-gradient-to-br from-turquoise to-[#dffdfa]">
      <AnimateIn>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {numbers.map((item) => (
            <div key={item.label} className="text-center p-6">
              <CountUp
                target={item.value}
                className="block text-5xl font-black text-dark"
              />
              <span className="text-dark/72 font-bold mt-2 block">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </AnimateIn>
    </Section>
  );
}

