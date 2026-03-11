"use client";

import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";

const slides = [
  {
    image: "/images/hero-factory-1.png",
    alt: "Aerial view of cement factory with green mountains",
  },
  {
    image: "/images/hero-factory-2.png",
    alt: "Interior of raw material storage facility",
  },
  {
    image: "/images/hero-factory-3.png",
    alt: "Modern cement plant with dome silos",
  },
  {
    image: "/images/hero-factory-4.png",
    alt: "Industrial cement factory with smokestacks",
  },
  {
    image: "/images/hero-factory-5.png",
    alt: "Cement factory complex with tower silo",
  },
];

function CountUp({ target, duration = 2000 }: { target: number; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const start = performance.now();
          const animate = (now: number) => {
            const elapsed = now - start;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(eased * target));
            if (progress < 1) requestAnimationFrame(animate);
          };
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.5 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [target, duration]);

  return <span ref={ref}>{count}</span>;
}

export default function HeroSection() {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % slides.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col overflow-hidden justify-center"
    >
      {slides.map((slide, i) => (
        <div
          key={slide.image}
          className={`absolute inset-0 z-0 transition-opacity duration-1000 ease-in-out ${
            i === current ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={slide.image}
            alt={slide.alt}
            fill
            className="object-cover"
            priority={i === 0}
          />
          <div className="absolute inset-0 bg-dark/70" />
        </div>
      ))}

      <div className="container flex flex-col lg:flex-row justify-between gap-6 md:gap-8">
        <div id="hero-content" className="relative z-10 w-full lg:w-3/4 flex flex-col justify-end items-start">
          <div className="flex items-start gap-4 sm:gap-8 lg:gap-14 py-10 sm:py-16 lg:py-0">
            <div className="hidden lg:flex flex-col items-center pt-4">
              <div className="w-px h-10 bg-primary mb-4" />
              <p
                className="text-[10px] font-heading font-semibold tracking-[0.25em] text-white/60 uppercase"
                style={{ writingMode: "vertical-lr" }}
              >
                Portland Composite Cement
              </p>
            </div>
            <div className="max-w-4xl">
              <h1 className="font-heading font-extrabold text-[28px] sm:text-[36px] md:text-[52px] lg:text-[64px] leading-[1.1] text-white mb-4 md:mb-6">
                Portland Composite<br />
                Cement — Stronger than Strong
              </h1>
              <p className="text-white/80 text-sm sm:text-base md:text-lg leading-relaxed max-w-lg mb-6 md:mb-8">
                More Durable. Built to last with superior Portland Composite
                Cement — delivering unmatched strength, quality, and performance
                for every construction project.
              </p>
              <Link
                href="#contact"
                className="inline-flex items-center px-8 sm:px-12 py-3 sm:py-3.5 bg-primary text-white font-heading font-bold text-sm rounded-md hover:bg-primary-dark transition-colors duration-300 h-10 sm:h-12"
              >
                Discover Our Cement
              </Link>

              <div className="flex gap-4 sm:gap-6 md:gap-10 mt-8 md:mt-10">
                {[
                  { number: 20, label: "Years of\nQuality Excellence" },
                  { number: 500, label: "Strong Marketing\nTeam Members" },
                  { number: 50, label: "Service Points\nNationwide" },
                ].map((stat) => (
                  <div key={stat.label}>
                    <p className="font-heading font-extrabold text-2xl sm:text-4xl md:text-5xl text-white mb-1 md:mb-2">
                      <CountUp target={stat.number} /> +
                    </p>
                    <p className="text-white/70 text-[10px] sm:text-xs leading-relaxed whitespace-pre-line">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div id="hero-image" className="relative z-10 w-full lg:w-1/4 flex flex-col justify-end">
          <div>
            <div className="relative w-full max-w-[260px] h-[140px] sm:h-[160px] rounded-lg overflow-hidden shadow-2xl border border-white/10 shrink-0 hidden md:block">
              <Image
                src="/images/hero-card.png"
                alt="Construction workers reviewing blueprints"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-dark/40" />
              <div className="absolute bottom-3 left-0 right-0 text-center">
                <a
                  href="#projects"
                  className="text-white text-sm font-heading font-semibold hover:text-primary transition-colors inline-flex items-center gap-1"
                >
                  View Our Projects
                  <ArrowRight size={14} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
