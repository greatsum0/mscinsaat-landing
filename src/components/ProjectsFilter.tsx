"use client";

import { useState, useEffect, type ComponentType } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Factory,
  Building2,
  ClipboardCheck,
  Grid3x3,
  Paintbrush,
  ArrowRight,
  X,
} from "lucide-react";
import { AnimateIn } from "./AnimateIn";

interface Project {
  category: string;
  tag: string;
  title: string;
  description: string;
  image: string;
  tags?: string[];
  location?: string;
  year?: string;
  slug?: string;
}

interface DetailLabels {
  cardCtaLabel: string;
  locationLabel: string;
  yearLabel: string;
  projectCtaLabel: string;
}

interface ProjectsFilterProps {
  filters: { label: string; value: string }[];
  projects: Project[];
  // cta verilirse kartlarda etiket pill'leri yerine bir buton gösterilir
  // (ör. ana sayfa ön izlemesinde "Projeyi Gör").
  cta?: { label: string; href: string };
  // verilirse kartlara "Detay Gör" butonu eklenir ve tıklanınca modal açılır.
  detail?: DetailLabels;
}

const categoryIcons: Record<string, ComponentType<{ size?: number }>> = {
  fabrika: Factory,
  taahhut: ClipboardCheck,
  yapsat: Building2,
  konut: Building2,
  seramik: Grid3x3,
  dekorasyon: Paintbrush,
};

export function ProjectsFilter({
  filters,
  projects,
  cta,
  detail,
}: ProjectsFilterProps) {
  const [active, setActive] = useState("all");
  const [selected, setSelected] = useState<Project | null>(null);

  const filtered =
    active === "all" ? projects : projects.filter((p) => p.category === active);

  // Modal açıkken Esc ile kapat ve arka plan kaydırmasını kilitle
  useEffect(() => {
    if (!selected) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelected(null);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [selected]);

  return (
    <>
      <div className="flex justify-center gap-2 flex-wrap mb-10">
        {filters.map((f) => (
          <button
            key={f.value}
            onClick={() => setActive(f.value)}
            className={`btn-base btn-sm rounded-full cursor-pointer ${
              active === f.value ? "btn-dark" : "btn-secondary"
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((project) => {
          const Icon = categoryIcons[project.category] ?? Building2;
          return (
            <AnimateIn key={project.title}>
              <div className="group card-base bg-white shadow-[var(--shadow-medium)] overflow-hidden flex flex-col">
                <button
                  type="button"
                  onClick={() => detail && setSelected(project)}
                  className={`relative aspect-[4/3] overflow-hidden block w-full text-left ${
                    detail ? "cursor-pointer" : "cursor-default"
                  }`}
                  aria-label={`${project.title} detayını gör`}
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark/45 to-transparent" />
                  <span className="absolute left-4 bottom-4 px-3 py-1.5 rounded-full bg-turquoise text-dark text-xs font-bold shadow-[var(--shadow-subtle)]">
                    {project.tag}
                  </span>
                </button>

                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <h3 className="text-lg font-bold leading-snug">
                      {project.title}
                    </h3>
                    <div className="icon-box bg-turquoise-soft text-turquoise-dark shrink-0">
                      <Icon size={20} />
                    </div>
                  </div>
                  <p className="text-sm text-gray leading-relaxed mb-5 flex-1">
                    {project.description}
                  </p>
                  {cta ? (
                    <Link
                      href={cta.href}
                      className="btn-base btn-secondary btn-sm w-full"
                    >
                      {cta.label}
                      <ArrowRight size={14} />
                    </Link>
                  ) : (
                    <>
                      {project.tags && project.tags.length > 0 && (
                        <div className="flex flex-wrap gap-2 mb-5">
                          {project.tags.map((tag) => (
                            <span
                              key={tag}
                              className="px-3 py-1.5 rounded-full bg-light text-dark/70 text-xs font-bold border border-dark/8"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}
                      {detail && (
                        <button
                          type="button"
                          onClick={() => setSelected(project)}
                          className="btn-base btn-secondary btn-sm w-full mt-auto cursor-pointer"
                        >
                          {detail.cardCtaLabel}
                          <ArrowRight size={14} />
                        </button>
                      )}
                    </>
                  )}
                </div>
              </div>
            </AnimateIn>
          );
        })}
      </div>

      {detail && selected && (
        <ProjectModal
          project={selected}
          detail={detail}
          onClose={() => setSelected(null)}
        />
      )}
    </>
  );
}

function ProjectModal({
  project,
  detail,
  onClose,
}: {
  project: Project;
  detail: DetailLabels;
  onClose: () => void;
}) {
  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-label={project.title}
    >
      <div
        className="absolute inset-0 bg-dark/70 backdrop-blur-sm animate-[fadeIn_0.2s_ease]"
        onClick={onClose}
      />

      <div className="relative z-10 w-full max-w-[960px] max-h-[90vh] overflow-hidden rounded-3xl bg-white shadow-[var(--shadow-medium)] grid md:grid-cols-2 animate-[modalIn_0.25s_ease]">
        {/* Görsel */}
        <div className="relative aspect-[4/3] md:aspect-auto md:min-h-[420px]">
          <Image
            src={project.image}
            alt={project.title}
            fill
            sizes="(max-width: 768px) 100vw, 480px"
            className="object-cover"
          />
        </div>

        {/* İçerik */}
        <div className="relative flex flex-col p-6 sm:p-8 overflow-y-auto">
          <button
            type="button"
            onClick={onClose}
            aria-label="Kapat"
            className="absolute top-4 right-4 w-10 h-10 rounded-full border border-dark/10 bg-white text-dark flex items-center justify-center hover:bg-light transition-colors cursor-pointer"
          >
            <X size={18} />
          </button>

          <span className="inline-flex self-start px-3 py-1.5 rounded-full bg-turquoise text-dark text-xs font-bold mb-5">
            {project.tag}
          </span>

          <h3 className="text-2xl sm:text-3xl font-black tracking-tight mb-3 pr-10">
            {project.title}
          </h3>
          <p className="text-base text-gray leading-relaxed mb-6">
            {project.description}
          </p>

          <div className="grid gap-3">
            {project.location && (
              <div className="flex items-center justify-between gap-3 px-4 py-3 rounded-xl bg-light">
                <span className="text-sm text-gray font-medium">
                  {detail.locationLabel}
                </span>
                <span className="text-sm font-bold">{project.location}</span>
              </div>
            )}
            {project.year && (
              <div className="flex items-center justify-between gap-3 px-4 py-3 rounded-xl bg-light">
                <span className="text-sm text-gray font-medium">
                  {detail.yearLabel}
                </span>
                <span className="text-sm font-bold">{project.year}</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
