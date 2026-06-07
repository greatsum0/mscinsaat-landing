"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";

interface HeroSlide {
  kicker: string;
  title: string;
  titleHighlight: string;
  description: string;
  buttons: { label: string; href: string }[];
  card: { label: string; value: string; text: string; progress: number };
}

interface HeroSliderProps {
  slides: HeroSlide[];
  /** 1920x1080 arka plan videosu (public/ altında). Slayt değişiminde çalmaya devam eder. */
  video?: string;
  poster?: string;
}

export function HeroSlider({
  slides,
  video = "/hero.mp4",
  poster,
}: HeroSliderProps) {
  const [current, setCurrent] = useState(0);
  const [progress, setProgress] = useState(0);

  const next = useCallback(() => {
    setCurrent((p) => (p + 1) % slides.length);
    setProgress(0);
  }, [slides.length]);

  const prev = useCallback(() => {
    setCurrent((p) => (p - 1 + slides.length) % slides.length);
    setProgress(0);
  }, [slides.length]);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          next();
          return 0;
        }
        return p + 1;
      });
    }, 60);
    return () => clearInterval(interval);
  }, [current, next]);

  const handleButtonClick = (
    event: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    if (!href.startsWith("#")) return;

    const target = document.getElementById(href.slice(1));
    if (!target) return;

    event.preventDefault();
    target.scrollIntoView({ behavior: "smooth", block: "start" });
    window.history.pushState(null, "", href);
  };

  return (
    <section className="relative bg-dark overflow-hidden">
      <div className="absolute inset-0 z-0">
        {/* Tek sabit video: slayt değişiminde yeniden mount edilmez, kesintisiz oynar */}
        <video
          className="h-full w-full object-cover"
          src={video}
          poster={poster}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
        />
      </div>
      <div className="absolute inset-0 z-[1] bg-dark/35" />
      <div className="absolute inset-0 z-[2] bg-gradient-to-r from-dark/96 via-dark/72 to-dark/35" />

      <div className="relative z-10 max-w-[1180px] mx-auto px-5 py-24 lg:py-32 pb-32">
        <div className="grid lg:grid-cols-[1.1fr_0.5fr] items-start gap-12 lg:gap-16">
          {/* grid stack: all slides occupy same cell, tallest sets height */}
          <div className="grid [&>*]:col-start-1 [&>*]:row-start-1">
            {slides.map((slide, idx) => (
              <div
                key={idx}
                className={`text-white transition-all duration-500 ${
                  idx === current
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-2 pointer-events-none"
                }`}
                aria-hidden={idx !== current}
              >
                <span className="kicker kicker-light">{slide.kicker}</span>

                <h1 className="text-4xl md:text-5xl lg:text-7xl leading-[0.98] tracking-tight font-black mb-6">
                  {slide.title}{" "}
                  <span className="text-turquoise">{slide.titleHighlight}</span>
                </h1>

                <p className="max-w-[600px] text-base lg:text-lg leading-relaxed text-white/70 mb-8">
                  {slide.description}
                </p>

                <div className="flex gap-3 flex-wrap">
                  {slide.buttons.map((btn, i) => (
                    <Link
                      key={btn.label}
                      href={btn.href}
                      onClick={(event) => handleButtonClick(event, btn.href)}
                      tabIndex={idx === current ? 0 : -1}
                      className={`btn-base btn-lg ${
                        i === 0
                          ? "btn-primary"
                          : "border border-white/40 bg-white/10 text-white hover:bg-white hover:text-dark hover:border-white shadow-[0_0_0_1px_rgba(255,255,255,0.08)] backdrop-blur-sm"
                      }`}
                    >
                      {btn.label}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="card-dark p-6 self-center">
            <div className="text-white/60 text-sm font-bold mb-6">
              {slides[current].card.label}
            </div>
            <strong className="block text-5xl leading-none text-turquoise mb-3">
              {slides[current].card.value}
            </strong>
            <p className="text-white/60 text-base leading-relaxed">{slides[current].card.text}</p>
            <div className="h-2 rounded-full mt-6 bg-white/10 overflow-hidden">
              <div
                className="h-full rounded-full bg-gradient-to-r from-turquoise to-turquoise-dark transition-[width] duration-300"
                style={{ width: `${slides[current].card.progress}%` }}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="absolute left-1/2 -translate-x-1/2 bottom-8 z-20 flex items-center gap-4">
        <button
          onClick={prev}
          className="w-11 h-11 rounded-xl border border-white/15 bg-white/5 text-white cursor-pointer hover:bg-turquoise hover:text-dark transition-all duration-200"
        >
          <ArrowLeft size={16} className="mx-auto" />
        </button>
        <div className="flex gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => { setCurrent(i); setProgress(0); }}
              className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                i === current ? "w-8 bg-turquoise" : "w-2.5 bg-white/30"
              }`}
            />
          ))}
        </div>
        <button
          onClick={next}
          className="w-11 h-11 rounded-xl border border-white/15 bg-white/5 text-white cursor-pointer hover:bg-turquoise hover:text-dark transition-all duration-200"
        >
          <ArrowRight size={16} className="mx-auto" />
        </button>
      </div>

      <div className="absolute left-0 right-0 bottom-0 h-1 z-30 bg-white/8">
        <div
          className="h-full bg-gradient-to-r from-turquoise to-turquoise-dark transition-[width] duration-75"
          style={{ width: `${progress}%` }}
        />
      </div>
    </section>
  );
}
