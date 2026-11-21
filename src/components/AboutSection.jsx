import React from "react";
import { GraduationCap, Briefcase, Calendar } from "lucide-react";
import { PORTFOLIO_DATA } from "../data/portfolioData";

export function AboutSection() {
  return (
    <section id="about" className="relative z-10 py-24 sm:py-32 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16 items-start">
        {/* Left Col: Editorial Identity Card */}
        <div className="relative w-full max-w-sm mx-auto lg:max-w-none">
          <div className="glass-card p-8 rounded-2xl border border-[var(--c-border)] shadow-xl relative overflow-hidden flex flex-col justify-between min-h-[280px]">
            <div className="flex items-center justify-between text-xs font-mono-tech text-[var(--c-accent)] uppercase tracking-widest">
              <span>// IDENTITY</span>
              <span>✦</span>
            </div>
            
            <div className="my-6">
              <h4 className="font-bebas-hero text-5xl text-[var(--c-ink)] tracking-wide">
                {PORTFOLIO_DATA.personal.name}
              </h4>
              <p className="text-xs font-mono-tech text-[var(--c-muted)] mt-1 uppercase tracking-wider">
                {PORTFOLIO_DATA.personal.title}
              </p>
            </div>

            <div className="pt-4 border-t border-[var(--c-border)] flex items-center justify-between text-xs font-mono-tech text-[var(--c-muted)]">
              <span>UNTIRTA CS</span>
              <span className="text-[var(--c-accent)] font-semibold">2022 — PRESENT</span>
            </div>
          </div>

          <div className="mt-4 glass-card p-5 rounded-xl font-mono-tech text-xs text-[var(--c-muted)]">
            <p className="text-[var(--c-ink)] font-bold mb-1">
              UNTIRTA Informatics Student
            </p>
            <p>Specialized in Web Engineering & Applied AI Solutions.</p>
          </div>
        </div>

        {/* Right Col: About Statement & Timeline */}
        <div className="lg:col-span-2 flex flex-col gap-10">
          <div>
            <span className="text-xs uppercase tracking-[0.2em] font-mono-tech text-[var(--c-accent)] mb-3 block">
              // ABOUT & PHILOSOPHY
            </span>
            <h3 className="text-2xl sm:text-4xl font-normal leading-tight text-[var(--c-ink)] tracking-tight">
              I explore how to build modern software — grounding complex data in clean architecture and wrapping it in{" "}
              <em className="font-serif-accent italic text-[var(--c-accent)]">intuitive interfaces</em>.
            </h3>
            <p className="mt-6 text-base sm:text-lg leading-relaxed text-[var(--c-muted)] font-normal">
              {PORTFOLIO_DATA.personal.bioLong}
            </p>
          </div>

          {/* Experience & Education Timeline */}
          <div className="mt-4">
            <h4 className="text-sm uppercase tracking-widest font-mono-tech text-[var(--c-ink)] mb-6 font-bold flex items-center gap-2">
              <Briefcase className="h-4 w-4 text-[var(--c-accent)]" /> Experience & Education
            </h4>

            <div className="flex flex-col gap-6">
              {PORTFOLIO_DATA.timeline.map((item, idx) => (
                <div
                  key={idx}
                  className="glass-card p-6 rounded-xl border border-[var(--c-border)] relative overflow-hidden"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2 font-mono-tech text-xs">
                    <span className="font-bold text-[var(--c-accent)] px-2.5 py-1 rounded bg-[var(--c-badge-bg)]">
                      {item.period}
                    </span>
                    <span className="text-[var(--c-muted)]">{item.organization}</span>
                  </div>
                  <h5 className="text-lg font-bold text-[var(--c-ink)]">
                    {item.role}
                  </h5>
                  <p className="mt-2 text-xs sm:text-sm leading-relaxed text-[var(--c-muted)]">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
