import { CountUp } from "./CountUp";
import { AnimateIn } from "./AnimateIn";

interface StatItem {
  value: number;
  label: string;
}

interface StatsSectionProps {
  stats: StatItem[];
  className?: string;
}

export function StatsSection({ stats, className = "" }: StatsSectionProps) {
  return (
    <section className={`relative z-10 py-12 ${className}`}>
      <div className="max-w-[1180px] mx-auto px-5">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat, i) => (
            <AnimateIn key={stat.label} delay={i * 0.1}>
              <div className="card-base p-6 bg-white shadow-[var(--shadow-medium)]">
                <CountUp
                  target={stat.value}
                  className="block text-4xl font-black mb-2"
                />
                <span className="text-base text-gray font-bold">{stat.label}</span>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
